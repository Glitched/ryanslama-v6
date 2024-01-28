import { Option } from "@phosphor-icons/react";
import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  shortcut?: string;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  shortcut,
}: Props) {
  const { title, pubDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-base decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="flex place-content-between text-base font-bold decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        {shortcut && (
          <span
            className="font-light"
            title={"Press option/alt + " + shortcut + " to jump to this result"}
          >
            <Option /> {shortcut}
          </span>
        )}
      </a>
      <p className="text-base text-skin-muted">{description}</p>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
    </li>
  );
}
