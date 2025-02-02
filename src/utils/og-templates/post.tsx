import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"blog">) => {
  return (
    <div
      style={{
        background: "#F6EEE5",
        color: "#361715",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px",
          width: "90%",
          height: "90%",
        }}
      >
        <p
          style={{
            fontSize: 300,
            fontWeight: 300,
            maxHeight: "84%",
            overflow: "hidden",
            lineHeight: 1.3,
            marginBottom: "100px",
          }}
        >
          {post.data.title}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "8px",
            fontSize: 300,
          }}
        >
          <span style={{ overflow: "hidden", fontWeight: "semibold" }}>
            {SITE.title}
          </span>
        </div>
      </div>
    </div>
  );
};
