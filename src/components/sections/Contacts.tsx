import Image from "next/image";
import Link from "next/link";
import { Calendar, Cat, CalendarCheck, Dog, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BOOKING_URL } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";

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
                <p className="font-display font-semibold text-ink-900">
                  Онлайн-консультации для владельцев и коллег
                </p>
              </div>
              <Button
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                shimmer
                icon={<CalendarCheck className="size-5" />}
                className="w-full sm:w-auto"
              >
                Записаться
              </Button>
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
          </div>
        </Container>
      </Reveal>
    </section>
  );
}
