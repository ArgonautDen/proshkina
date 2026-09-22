import type { NextConfig } from "next";

// Set by the GitHub Actions workflow while the site is served from
// https://<user>.github.io/proshkina/ (a project page, not a custom
// domain). Once a custom domain is attached, drop NEXT_PUBLIC_BASE_PATH
// from the workflow env and this collapses back to "" (site at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files — no Node server for SSR/ISR or
  // the image-optimization API route, so the whole app is exported to
  // static HTML/CSS/JS at build time.
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    // No server to run the optimizer on GitHub Pages — serve the
    // originals as-is (they're already pre-sized/compressed by hand).
    unoptimized: true,
    // Only our own local, trusted SVGs (clinic logos) go through
    // next/image — safe to allow with a strict CSP on the served asset.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
