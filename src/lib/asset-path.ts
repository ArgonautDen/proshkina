// Mirrors next.config.ts's basePath. next/image and next/link resolve
// basePath automatically, but raw <source>/<video> src strings don't — this
// prefixes those by hand so they still resolve once deployed under
// https://<user>.github.io/proshkina/ (see next.config.ts for context).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
