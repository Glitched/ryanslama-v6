import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import satori, { type SatoriOptions } from "satori";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

import sharp from "sharp";

const WIDTH = 2400;
const HEIGHT = 1260;
const SUPERSAMPLE_FACTOR = 2;

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    "https://www.1001fonts.com/download/font/vollkorn.regular.ttf"
  );
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch(
    "https://www.1001fonts.com/download/font/vollkorn.medium.ttf"
  );
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const options: SatoriOptions = {
  width: WIDTH * SUPERSAMPLE_FACTOR,
  height: HEIGHT * SUPERSAMPLE_FACTOR,
  embedFont: true,
  fonts: [
    {
      name: "Vollkorn",
      data: fontRegular,
      weight: 400,
      style: "normal",
    },
    {
      name: "Vollkorn",
      data: fontBold,
      weight: 500,
      style: "normal",
    },
  ],
};

async function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } });
  const pngData = resvg.render().asPng();

  // Downscale using Sharp
  return await sharp(pngData)
    .resize(WIDTH, HEIGHT, { kernel: "lanczos3" })
    .toBuffer();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await satori(postOgImage(post), options);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await satori(siteOgImage(), options);
  return svgBufferToPngBuffer(svg);
}
