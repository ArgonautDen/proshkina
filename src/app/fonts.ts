import localFont from "next/font/local";

export const mfevolt = localFont({
  src: "./fonts/mfevolt-special.otf",
  variable: "--font-mfevolt",
  display: "swap",
  // MF EVOLT's Latin glyphs (A-Z/a-z) exist in the font's character map but
  // are drawn blank — so the browser never falls back to the next font on
  // its own (it thinks the glyph is "there"). `unicode-range` makes MF
  // EVOLT only claim Cyrillic + shared punctuation/digits, so any Latin
  // text (brand abbreviations like "EVC", emails, etc.) correctly falls
  // through to the generated fallback face instead of rendering blank.
  // (next/font parses this call statically, so the value must be an inline
  // string literal — no variables or computed expressions.)
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0020-0040, U+005B-0060, U+007B-007E, U+00A0-00BF, U+2000-206F, U+2116, U+20BD, U+0400-04FF, U+0500-052F, U+2DE0-2DFF, U+A640-A69F",
    },
  ],
});
