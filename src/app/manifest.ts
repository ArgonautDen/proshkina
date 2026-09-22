import type { MetadataRoute } from "next";
import { assetPath } from "@/lib/asset-path";

// Required for `output: "export"` — baked into a static
// manifest.webmanifest at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Прошкина Дарья Владиславовна — ветеринарный врач-невролог",
    short_name: "Прошкина Д.В.",
    description: "Онлайн-консультации ветеринарного врача-невролога.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#f4f7fb",
    theme_color: "#3d5f8a",
    icons: [
      {
        src: assetPath("/icon.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
