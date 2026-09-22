import Image from "next/image";
import {
  AlertCircle,
  AlertTriangle,
  Bone,
  Brain,
  Droplet,
  Footprints,
  Frown,
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

const TIMELINE = [
  {
    period: "2022–2026",
    place: "Ветеринарная клиника «Белый Клык»",
    role: "Невролог. В 2025–2026 годах также руководила ординатурой отделения неврологии.",
    logo: { src: "/images/logo-beliiklik.svg", alt: "Белый Клык", width: 129, height: 56 },
  },
  {
    period: "С 2026",
    place: (
      <>
        Европейский Ветеринарный Центр (<span className="text-[0.7em]">EVC</span>)
      </>
    ),
    role: "Невролог.",
    logo: { src: "/images/logo-evc.svg", alt: "EVC", width: 85, height: 85 },
  },
];

const ICON_CLASS = "size-5";

const PROBLEMS: AccordionItemData[] = [
  {
    icon: <Bone className={ICON_CLASS} aria-hidden="true" />,
    label: "Боль в спине или шее",
    description: "Скулит, горбит спину, не может повернуть голову, не хочет двигаться.",
  },
  {
    icon: <Footprints className={ICON_CLASS} aria-hidden="true" />,
    label: "Нарушения походки",
    description: "Шатается, заносит в сторону, подволакивает лапы.",
  },
  {
    icon: <PawPrint className={ICON_CLASS} aria-hidden="true" />,
    label: "Отказ лап",
    description: "Внезапно перестал опираться на одну/две/четыре конечности.",
  },
  {
    icon: <Zap className={ICON_CLASS} aria-hidden="true" />,
    label: "Судороги и приступы",
    description: "Включая затяжные и атипичные.",
  },
  {
    icon: <RotateCcw className={ICON_CLASS} aria-hidden="true" />,
    label: "Потеря равновесия",
    description: "Наклон головы, кружение, падения.",
  },
  {
    icon: <Brain className={ICON_CLASS} aria-hidden="true" />,
    label: "Возрастные изменения поведения",
    description: "Дезориентация, изменение поведения, бесцельное хождение, нарушение цикла сон-бодрствование.",
  },
  {
    icon: <Droplet className={ICON_CLASS} aria-hidden="true" />,
    label: "Проблемы с мочеиспусканием",
    description: "Задержка мочи или недержание.",
  },
  {
    icon: <AlertCircle className={ICON_CLASS} aria-hidden="true" />,
    label: "Нейрогенный зуд",
    description: "Чешется, при этом дерматологические причины исключены.",
  },
  {
    icon: <AlertTriangle className={ICON_CLASS} aria-hidden="true" />,
    label: "Слабость и быстрая утомляемость",
    description: "Быстро устаёт, вялый, меньше двигается, чем обычно.",
  },
  {
    icon: <Frown className={ICON_CLASS} aria-hidden="true" />,
    label: "Боль в области морды и рта",
    description: "Не даёт трогать морду, не ест, попытки достать что-то лапами изо рта.",
  },
  {
    icon: <AlertTriangle className={ICON_CLASS} aria-hidden="true" />,
    label: "Последствия травм",
    description: "Падение, удар, ДТП.",
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
            // <img> in the DOM). Rotating a square grows its bounding box
            // beyond its own edges (~14% of the side length per side at
            // 20deg) — the right/bottom offsets below add that growth back
            // in, so the rotated shape still lands fully inside the
            // overflow-hidden block instead of getting clipped.
            "before:pointer-events-none before:absolute before:z-0 before:right-10 before:bottom-10 before:h-64 before:w-64 before:rotate-[20deg] before:bg-[image:var(--watermark-url)] before:bg-contain before:bg-no-repeat before:opacity-[0.15] before:content-['']",
            "sm:before:right-12 sm:before:bottom-12 sm:before:h-80 sm:before:w-80",
            "lg:before:right-14 lg:before:bottom-14 lg:before:h-96 lg:before:w-96",
          )}
        >
          <div className="relative z-10">
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

            <div className="flex max-w-2xl items-center gap-6 sm:gap-8">
              {/* Pulled up by negative margin so its top overlaps the
                  heading above — only the photo intrudes, not the paragraph
                  text. */}
              <div className="relative -mt-10 aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-2xl shadow-lift sm:-mt-12 sm:w-32 lg:-mt-14 lg:w-40">
                <Image
                  src={assetPath("/images/face-proshkina.jpeg")}
                  alt="Прошкина Дарья Владиславовна"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <p className="text-lg leading-relaxed text-ink-700">
                Ветеринарный невролог с опытом работы в ведущих клиниках Москвы. Занимаюсь
                диагностикой и лечением заболеваний центральной и периферической нервной системы
                у животных. В работе придерживаюсь доказательного подхода и мультимодальной
                стратегии лечения.
              </p>
            </div>

            <div className="mt-8 max-w-2xl rounded-2xl bg-surface-muted p-6">
              <ol className="space-y-5">
                {TIMELINE.map((item) => (
                  <li key={item.period} className="relative flex gap-4 pl-1">
                    <span className="relative mt-1.5 flex size-2.5 shrink-0 items-center justify-center">
                      <span className="size-2.5 rounded-full bg-indigo-600" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-indigo-700">{item.period}</p>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-display font-semibold text-ink-900">{item.place}</p>
                        <Image
                          src={assetPath(item.logo.src)}
                          alt={item.logo.alt}
                          width={item.logo.width}
                          height={item.logo.height}
                          className="h-6 w-auto object-contain opacity-80"
                        />
                      </div>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{item.role}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={150} className="relative mt-16 overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={assetPath("/videos/problems-bg.webm")} type="video/webm" />
          <source src={assetPath("/videos/problems-bg.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-950/70" aria-hidden="true" />

        <Container className="relative z-10 py-10 sm:py-14">
          <SectionHeading icon={Stethoscope} as="h3" tone="onDark">
            С какими проблемами ко мне можно обратиться
          </SectionHeading>
          <div className="mt-6 max-w-4xl">
            <Accordion items={PROBLEMS} />
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
