import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Required for `output: "export"` — these metadata routes have no
// request-time data, so they're safe to pre-render at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/booking"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
