import Image from "next/image";
import type { ReactNode } from "react";
import {
  AlertCircle,
  AlertTriangle,
  BatteryLow,
  Bone,
  Brain,
  Droplet,
  Footprints,
  PawPrint,
  RotateCcw,
  Stethoscope,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { assetPath } from "@/lib/asset-path";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

interface TimelinePlace {
  place: ReactNode;
  logo?: { src: string; alt: string; width: number; height: number };
}

interface TimelineItem {
  period: string;
  role?: string;
  places: TimelinePlace[];
}

const TIMELINE: TimelineItem[] = [
  {
    period: "2015–2022",
    places: [{ place: "Ветеринарные клиники Москвы" }],
  },
  {
    period: "2022–2026",
    role: "Невролог. В 2025–2026 годах также руководила ординатурой отделения неврологии.",
    places: [
      {
        place: "Ветеринарная клиника «Белый Клык»",
        logo: { src: "/images/logo-beliiklik.svg", alt: "Белый Клык", width: 129, height: 56 },
      },
    ],
  },
  {
    period: "С 2026",
    role: "Невролог.",
    // Works at both clinics concurrently since 2026 — one timeline entry,
    // two place+logo lines under the shared period/role.
    places: [
      {
        place: (
          <>
            Европейский Ветеринарный Центр (<span className="text-[0.7em]">EVC</span>)
          </>
        ),
        logo: { src: "/images/logo-evc.svg", alt: "EVC", width: 85, height: 85 },
      },
      {
        place: "Инновационный ветеринарный центр (ИВЦ)",
        logo: { src: "/images/logo-ivc.svg", alt: "ИВЦ", width: 452, height: 105 },
      },
    ],
  },
];

const ICON_CLASS = "size-5";

const PROBLEMS: AccordionItemData[] = [
  {
    icon: <Bone className={ICON_CLASS} aria-hidden="true" />,
    label: "Боль в спине или шее",
    description:
      "Питомец скулит, горбит спину, избегает движений, не может повернуть голову, не хочет прыгать или подниматься.",
  },
  {
    icon: <Footprints className={ICON_CLASS} aria-hidden="true" />,
    label: "Нарушение походки",
    description:
      "Шатается, заносит в сторону, подволакивает лапы, двигается неуверенно или странно ставит конечности.",
  },
  {
    icon: <PawPrint className={ICON_CLASS} aria-hidden="true" />,
    label: "Слабость или отказ лап",
    description: "Животное внезапно перестало опираться на одну, две или все конечности.",
  },
  {
    icon: <Zap className={ICON_CLASS} aria-hidden="true" />,
    label: "Судороги",
    description:
      "Повторяющиеся приступы, эпизоды потери сознания, подёргивания, необычное поведение, в том числе затяжные или нетипичные состояния.",
  },
  {
    icon: <RotateCcw className={ICON_CLASS} aria-hidden="true" />,
    label: "Нарушение равновесия",
    description: "Наклон головы, кружение, падения, резкая потеря координации.",
  },
  {
    icon: <Brain className={ICON_CLASS} aria-hidden="true" />,
    label: "Изменение поведения или ориентации",
    description:
      "Дезориентация, бесцельное хождение, изменение цикла сна и бодрствования, необычная тревожность или отстранённость.",
  },
  {
    icon: <Droplet className={ICON_CLASS} aria-hidden="true" />,
    label: "Нарушение мочеиспускания",
    description:
      "Задержка мочи, недержание, трудности с мочеиспусканием — особенно если это сопровождается слабостью задних лап или болью.",
  },
  {
    icon: <AlertCircle className={ICON_CLASS} aria-hidden="true" />,
    label: "Зуд или дискомфорт без явной причины",
    description: "Питомец чешется, лижет или кусает себя, а дерматологические причины уже исключены.",
  },
  {
    icon: <BatteryLow className={ICON_CLASS} aria-hidden="true" />,
    label: "Снижение активности",
    description: "Быстро устаёт, стал менее подвижным, выглядит вялым, избегает привычной активности.",
  },
  {
    icon: <AlertTriangle className={ICON_CLASS} aria-hidden="true" />,
    label: "После травмы",
    description:
      "Падение, удар, ДТП или другая травма, после которой изменилось поведение, походка или общее состояние.",
  },
];

export function About() {
  return (
    <section id="about" className="pt-20 sm:pt-24">
      <Container>
        <Reveal
          // The pseudo-element's background-image can't be a Tailwind
          // arbitrary url('...') here — that has to be a static string at
          // build time, so it can't carry the basePath. Routed through a
          // CSS custom property (set from assetPath at render time) instead.
          style={{ ["--watermark-url" as string]: `url('${assetPath("/images/health.png")}')` }}
          className={cn(
            "relative overflow-hidden",
            // Large, faint watermark in the lower-right of the "Обо мне"
            // block, as a ::before pseudo-element (purely decorative, no
            // <img> in the DOM). Desktop/tablet only (sm+) — on mobile the
            // block stacks into one narrow column with no room for a corner
            // flourish, so a separate, smaller version sits behind the
            // paragraph text instead (see the flex row below).
            "before:content-none",
            "sm:before:pointer-events-none sm:before:absolute sm:before:z-0 sm:before:right-12 sm:before:bottom-12 sm:before:h-80 sm:before:w-80 sm:before:rotate-[20deg] sm:before:bg-[image:var(--watermark-url)] sm:before:bg-contain sm:before:bg-no-repeat sm:before:opacity-[0.15] sm:before:content-['']",
            "lg:before:right-14 lg:before:bottom-14 lg:before:h-96 lg:before:w-96",
          )}
        >
          {/* No blanket z-index here — the heading (its own explicit z-10
              below) and the other content still naturally paint above the
              corner watermark via DOM order (both are `relative`, and both
              come after the watermark's ::before in the DOM). That leaves
              the big photo free to go the other way (see its own -z-10
              below) without a parent z-10 forcing it back on top. */}
          <div className="relative">
            {/* Heading is a positioned (z-10) element so it paints above the
                photo below it, regardless of DOM order; the translucent
                backdrop keeps it legible where it overlaps the photo. */}
            <SectionHeading
              imageIcon="/images/vet-2.png"
              backdrop
              className="relative z-10 mb-[30px] ml-16 sm:ml-20 lg:ml-24"
            >
              Обо мне
            </SectionHeading>

            <div
              className={cn(
                // Mobile: single column, stacked in DOM/`order` sequence —
                // paragraph 1, small photo, paragraph 2, the new candid
                // photo, paragraph 3. Desktop/tablet (sm+): three columns —
                // small photo (pulled up over the heading), the text column,
                // and the new photo as a wide fixed-width column on the
                // right — via explicit grid placement overriding the
                // mobile order.
                "grid max-w-2xl gap-6",
                "sm:max-w-none sm:grid-cols-[auto_1fr_450px] sm:items-start sm:gap-x-8 sm:gap-y-4",
                // Mobile-only watermark, scoped to just this block instead
                // of the whole section below — very faint, so it never
                // competes with the (now much taller) stacked layout.
                // Desktop/tablet keep the corner watermark on the outer
                // block instead (sm:before:content-none here).
                "relative before:pointer-events-none before:absolute before:right-0 before:top-1/2 before:z-0 before:size-36 before:-translate-y-1/2 before:bg-[image:var(--watermark-url)] before:bg-contain before:bg-no-repeat before:opacity-[0.06] before:content-['']",
                "sm:before:content-none",
              )}
            >
              <p className="relative order-1 text-lg leading-relaxed text-ink-700 sm:order-2 sm:col-start-2 sm:row-start-1">
                Я — ветеринарный врач-невролог. Специализируюсь на диагностике и лечении
                заболеваний центральной и периферической нервной системы у животных.
              </p>

              {/* Half width, centered, on mobile; back to a small thumbnail
                  pulled up over the heading (negative margin) from sm: up. */}
              <div className="relative order-2 mx-auto aspect-[3/4] w-2/5 overflow-hidden rounded-2xl shadow-lift sm:order-1 sm:col-start-1 sm:row-start-1 sm:row-span-3 sm:mx-0 sm:w-32 sm:self-start sm:-mt-12 lg:-mt-14 lg:w-40">
                <Image
                  src={assetPath("/images/face-proshkina.jpeg")}
                  alt="Прошкина Дарья Владиславовна"
                  fill
                  sizes="(min-width: 640px) 160px, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="relative order-3 text-lg leading-relaxed text-ink-700 sm:col-start-2 sm:row-start-2">
                В своей работе я стараюсь не только найти причину симптомов, но и помочь владельцу
                спокойно разобраться в ситуации: что происходит с питомцем, насколько это срочно,
                какие обследования действительно нужны и какие шаги будут наиболее полезны.
              </p>

              {/* Moderate size on mobile (not full width); a wide fixed
                  450px column on the right from sm: up. Negative z-index
                  from sm: up so the corner watermark (outer Reveal's
                  ::before) shows through on top of it instead of hiding
                  behind it. */}
              <div className="relative order-4 mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lift sm:order-4 sm:col-start-3 sm:row-start-1 sm:row-span-3 sm:mx-0 sm:w-[300px] sm:-z-10">
                <Image
                  src={assetPath("/images/proshkina-hero.png")}
                  alt="Прошкина Дарья Владиславовна на приёме"
                  fill
                  sizes="(min-width: 640px) 300px, 100vw"
                  className="object-contain"
                />
              </div>

              <p className="relative order-5 text-lg leading-relaxed text-ink-700 sm:col-start-2 sm:row-start-3">
                Использую доказательный подход и подбираю лечение индивидуально — с учётом
                состояния животного, диагноза, качества жизни и возможностей семьи. Работаю с
                собаками и кошками, которым требуется неврологическая помощь — очно или в формате
                онлайн-консультации, если она уместна в конкретной ситуации.
              </p>
            </div>

            <p className="relative mt-8 max-w-2xl rounded-2xl bg-surface p-6 text-lg leading-relaxed text-ink-700 shadow-soft">
              Я работаю в ветеринарии более 10 лет, из них 6 лет активно развиваюсь в неврологии:
              наблюдаю, диагностирую и лечу животных с заболеваниями нервной системы.
            </p>

            <div className="mt-6 max-w-2xl rounded-2xl bg-surface-muted p-6">
              <ol className="space-y-5">
                {TIMELINE.map((item) => (
                  <li key={item.period} className="relative flex gap-4 pl-1">
                    <span className="relative mt-1.5 flex size-2.5 shrink-0 items-center justify-center">
                      <span className="size-2.5 rounded-full bg-indigo-600" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-indigo-700">{item.period}</p>
                      <div className="mt-0.5 space-y-1.5">
                        {item.places.map((p, index) => (
                          <div
                            key={index}
                            className="flex flex-wrap items-center gap-x-3 gap-y-1"
                          >
                            <p className="font-display font-semibold text-ink-900">{p.place}</p>
                            {p.logo && (
                              <Image
                                src={assetPath(p.logo.src)}
                                alt={p.logo.alt}
                                width={p.logo.width}
                                height={p.logo.height}
                                className="h-6 w-auto object-contain opacity-80"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      {item.role && (
                        <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{item.role}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={150} className="relative mt-16 overflow-hidden">
        {/* Mirrored via CSS transform (scale-x-[-1]) rather than a second
            flipped file on disk — cheaper for the browser (no extra image
            to fetch/decode, GPU-accelerated transform) and non-destructive. */}
        <Image
          src={assetPath("/images/proshkina-kittens.png")}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="scale-x-[-1] object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink-950/70" aria-hidden="true" />

        <Container className="relative z-10 py-10 sm:py-14">
          <SectionHeading icon={Stethoscope} as="h3" tone="onDark">
            С какими проблемами ко мне можно обратиться
          </SectionHeading>
          <p className="mt-3 max-w-2xl text-white/80">
            Если вы замечаете у питомца один или несколько из этих симптомов, консультация
            невролога может быть полезна.
          </p>
          <div className="mt-6 max-w-4xl">
            <Accordion items={PROBLEMS} />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
