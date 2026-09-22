import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Required for `output: "export"` — baked into a static sitemap.xml at
// build time (lastModified below just reflects build time, as usual for a
// static site).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/qualifications`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
