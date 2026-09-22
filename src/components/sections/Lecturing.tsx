import Image from "next/image";
import { Presentation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/asset-path";

const VENUES = [
  {
    label: "Лектор Черноморской ветеринарной конференции",
    logo: { src: "/images/logo-chernomor.jpg", width: 944, height: 390 },
    // Each logo's dominant brand color (sampled from the source file),
    // pre-mixed toward white for a soft "milky" pastel, then used at high
    // (but not full) opacity — a hint of glass over the dark backdrop.
    tint: "rgba(232, 248, 246, 0.92)",
  },
  {
    label: "Лектор ОЦ КВС",
    logo: { src: "/images/logo-ock.webp", width: 320, height: 74 },
    tint: "rgba(233, 241, 248, 0.92)",
  },
  {
    label: "Лектор NVC",
    logo: { src: "/images/logo-nvc.png", width: 760, height: 760 },
    tint: "rgba(242, 236, 244, 0.92)",
  },
  {
    label: "Лектор Северо-Западного ветеринарного конгресса",
    logo: { src: "/images/logo-szvk.png", width: 500, height: 246 },
    tint: "rgba(230, 243, 247, 0.92)",
  },
];

export function Lecturing() {
  return (
    <section id="lecturing" className="relative overflow-hidden bg-ink-950">
      {/* object-contain (not cover) so the whole photo stays visible,
          letterboxed against the dark section background. */}
      <Image
        src={assetPath("/images/work-proshkina.jpg")}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-contain opacity-40"
      />
      <div className="absolute inset-0 bg-ink-950/60" aria-hidden="true" />

      <Container className="relative z-10 py-20 sm:py-24">
        <Reveal>
          <SectionHeading icon={Presentation} tone="onDark">
            Лекторская деятельность
          </SectionHeading>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {VENUES.map((venue) => (
              <div
                key={venue.label}
                style={{ backgroundColor: venue.tint }}
                className="flex items-center gap-5 rounded-2xl border border-white/40 p-5 shadow-soft backdrop-blur-sm"
              >
                <span className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface-muted">
                  <Image
                    src={assetPath(venue.logo.src)}
                    alt={venue.label}
                    width={venue.logo.width}
                    height={venue.logo.height}
                    className="h-12 w-20 object-contain"
                  />
                </span>
                <p className="font-display font-semibold text-ink-900">{venue.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
