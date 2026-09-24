import Image from "next/image";
import Link from "next/link";
import { Calendar, Cat, CalendarCheck, Dog, Info, Phone, Video, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingButton } from "@/components/ui/BookingButton";
import { InfoButton } from "@/components/ui/InfoButton";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/asset-path";

const ONLINE_FORMAT_POINTS = [
  "вы хотите получить второе мнение",
  "нужно разобраться в симптомах и понять дальнейший план",
  "у вас уже есть результаты обследований, которые нужно интерпретировать",
  "вы живёте в другом городе и ищете профильного специалиста",
];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 sm:size-12">
      <Icon className="size-5 sm:size-6" aria-hidden="true" />
    </span>
  );
}

export function Contacts() {
  return (
    <section id="contacts" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading icon={Phone}>Контакты</SectionHeading>
        </Reveal>
      </Container>

      <Reveal delay={100} className="relative mt-10 overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={assetPath("/videos/contact-bg.webm")} type="video/webm" />
          <source src={assetPath("/videos/contact-bg.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-950/70" aria-hidden="true" />

        <Container className="relative z-10 py-10 sm:py-14">
          <SectionHeading icon={Calendar} as="h3" tone="onDark">
            Формат приёма
          </SectionHeading>

          <div className="mt-6 max-w-3xl space-y-4">
            <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-surface p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <IconBadge icon={Cat} />
                <div className="flex items-center gap-1.5">
                  <p className="font-display font-semibold text-ink-900">
                    Онлайн-консультации для владельцев и коллег
                  </p>
                  <InfoButton label="Когда подходит онлайн-формат?">
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 sm:size-12">
                        <Video className="size-5 sm:size-6" aria-hidden="true" />
                      </span>
                      <h2 className="pt-1.5 font-display text-xl font-bold text-ink-900 sm:text-2xl">
                        Когда подходит онлайн-формат
                      </h2>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                      Онлайн-формат подойдёт, если:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {ONLINE_FORMAT_POINTS.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-[15px] leading-relaxed text-ink-700"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-pumpkin-500"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <Info className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-[15px] leading-relaxed text-indigo-900">
                        <strong>Важно:</strong> онлайн-консультация возможна не во всех случаях. В
                        ветеринарной неврологии для оценки состояния часто необходим очный осмотр
                        и неврологическое обследование. Онлайн-формат помогает сориентироваться в
                        ситуации и определить дальнейший план действий, но не всегда может
                        заменить очный приём.
                      </p>
                    </div>
                  </InfoButton>
                </div>
              </div>
              <BookingButton
                variant="primary"
                size="lg"
                shimmer
                icon={<CalendarCheck className="size-5" />}
                className="w-full sm:w-auto"
              >
                Записаться
              </BookingButton>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-surface p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <IconBadge icon={Dog} />
                <p className="font-display font-semibold text-ink-900">
                  Очный приём: в Европейском Ветеринарном Центре (
                  <span className="text-[0.7em]">EVC</span>). Москва, Мукомольный проезд, д. 2,
                  стр. 1
                </p>
              </div>
              <Link
                href="https://evc.ru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Сайт Европейского Ветеринарного Центра"
                className="flex size-14 shrink-0 items-center justify-center self-center rounded-xl bg-surface-muted p-2 transition-opacity hover:opacity-75 sm:self-auto"
              >
                <Image
                  src={assetPath("/images/logo-evc.svg")}
                  alt="EVC"
                  width={85}
                  height={85}
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-surface p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <IconBadge icon={Dog} />
                <p className="font-display font-semibold text-ink-900">
                  Очный приём: в Инновационном Ветеринарном Центре (ИВЦ). Москва, Мичуринский
                  проспект, д. 8, строение 2
                </p>
              </div>
              <Link
                href="https://vetacademy.ru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Сайт Инновационного Ветеринарного Центра"
                className="flex h-14 w-24 shrink-0 items-center justify-center self-center rounded-xl bg-surface-muted p-2 transition-opacity hover:opacity-75 sm:self-auto"
              >
                <Image
                  src={assetPath("/images/logo-ivc.svg")}
                  alt="ИВЦ"
                  width={452}
                  height={105}
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
