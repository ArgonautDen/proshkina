import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Квалификация",
  description:
    "Образование, опыт работы, повышение квалификации и лекторская деятельность ветеринарного врача-невролога Прошкиной Дарьи Владиславовны.",
  alternates: {
    canonical: "/qualifications",
  },
  openGraph: {
    title: "Квалификация — Прошкина Дарья Владиславовна",
    description:
      "Образование, опыт работы, повышение квалификации и лекторская деятельность ветеринарного врача-невролога.",
    images: [{ url: "/images/work-proshkina.jpg" }],
  },
};

const EXPERIENCE = [
  {
    period: "2015–2021",
    description: "Ассистент ветеринарного врача, ветеринарные клиники Москвы",
  },
  {
    period: "2021–2022",
    description: "Ветеринарная клиника доктора Ерёмина, невролог",
  },
  {
    period: "2022–2026",
    description: "Ветеринарная клиника «Белый Клык», невролог",
  },
  {
    period: "С 2026 по настоящее время",
    description: (
      <>
        Европейский Ветеринарный Центр (<span className="text-[0.7em]">EVC</span>), невролог
      </>
    ),
  },
];

const TRAINING = [
  {
    text: "Постоянный участник конгрессов NVC и Северо-Западного ветеринарного конгресса",
    logos: [
      { src: "/images/logo-nvc.png", alt: "NVC", width: 760, height: 760 },
      { src: "/images/logo-szvk.png", alt: "СЗВК", width: 500, height: 246 },
    ],
  },
  {
    text: "Прохождение образовательных модулей по неврологии на базе ОЦ КВС",
    logos: [{ src: "/images/logo-ock.webp", alt: "ОЦ КВС", width: 320, height: 74 }],
  },
  {
    text: "Участие в семинарах по эффективной коммуникации с клиентами (школа «Три сестры»)",
    logos: [],
  },
];

export default function QualificationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          <div className="relative h-[280px] sm:h-[340px]">
            <Image
              src={assetPath("/images/work-proshkina.jpg")}
              alt="Прошкина Дарья Владиславовна на приёме"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[30%_30%]"
            />
            <div className="absolute inset-0 bg-ink-950/60" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center">
              <Container>
                <SectionHeading icon={Award} as="h1" tone="onDark">
                  Квалификация
                </SectionHeading>
              </Container>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <Container>
            <Reveal>
              <SectionHeading icon={GraduationCap}>Образование</SectionHeading>
              <div className="mt-6 max-w-2xl rounded-2xl border border-ink-100 bg-surface p-6 shadow-soft">
                <p className="font-display font-semibold text-ink-900">
                  Российский государственный аграрный университет — МСХА им. К.А. Тимирязева
                </p>
                <p className="mt-1 text-sm text-ink-500">2020 г.</p>
              </div>
            </Reveal>

            <Reveal delay={100} className="mt-16">
              <SectionHeading icon={Briefcase}>Опыт работы</SectionHeading>
              <div className="mt-6 max-w-2xl rounded-2xl bg-surface-muted p-6">
                <ol className="space-y-5">
                  {EXPERIENCE.map((item) => (
                    <li key={item.period} className="relative flex gap-4 pl-1">
                      <span className="relative mt-1.5 flex size-2.5 shrink-0 items-center justify-center">
                        <span className="size-2.5 rounded-full bg-indigo-600" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-indigo-700">{item.period}</p>
                        <p className="mt-0.5 text-[15px] leading-relaxed text-ink-800">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={150} className="mt-16">
              <SectionHeading icon={BookOpen}>Повышение квалификации</SectionHeading>
              <div className="mt-6 max-w-2xl space-y-4">
                {TRAINING.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-5 rounded-2xl border border-ink-100 bg-surface p-5 shadow-soft"
                  >
                    {item.logos.length > 0 ? (
                      <span className="flex shrink-0 items-center gap-2">
                        {item.logos.map((logo) => (
                          <span
                            key={logo.src}
                            className="flex h-16 w-20 items-center justify-center overflow-hidden rounded-xl bg-surface-muted"
                          >
                            <Image
                              src={assetPath(logo.src)}
                              alt={logo.alt}
                              width={logo.width}
                              height={logo.height}
                              className="h-12 w-16 object-contain"
                            />
                          </span>
                        ))}
                      </span>
                    ) : (
                      <span className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-surface-muted text-indigo-700">
                        <BookOpen className="size-6" aria-hidden="true" />
                      </span>
                    )}
                    <p className="font-display font-semibold text-ink-900">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
    </>
  );
}
