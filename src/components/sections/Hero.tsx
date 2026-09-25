import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookingButton } from "@/components/ui/BookingButton";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-surface">
      <div className="relative h-[560px] sm:h-[640px] lg:h-[620px]">
        <Image
          src={assetPath("/images/hero-proshkina.jpg")}
          alt="Прошкина Дарья Владиславовна — ветеринарный врач-невролог"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-[72%_center] lg:object-center"
        />

        {/* Blends the text zone into the photo's own white background so the
            content reads cleanly regardless of exact crop/breakpoint. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-surface via-surface/85 to-transparent sm:w-3/4 lg:w-3/5"
        />

        <div className="absolute inset-0 flex items-center">
          <Container className="w-full">
            <Reveal direction="left" className="max-w-md">
              <p className="text-balance font-display text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                Прошкина Дарья Владиславовна
              </p>
              <p className="mt-2 text-lg font-medium text-indigo-700 sm:text-xl">
                Ветеринарный врач-невролог
              </p>

              <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                Помогаю разобраться, почему питомец испытывает боль, теряет координацию, слабеет,
                меняет поведение или сталкивается с другими неврологическими симптомами.
              </p>

              <div className="relative mt-8 block w-full sm:inline-block sm:w-auto">
                {/* Decorative paw+cross icon peeking out by the button's
                    top-right corner — it paints behind the button since it
                    comes first in DOM (both are positioned, auto z-index). */}
                <Image
                  src={assetPath("/images/vet.png")}
                  alt=""
                  aria-hidden="true"
                  width={512}
                  height={512}
                  className="pointer-events-none absolute -right-4 top-13 size-16 opacity-70 sm:-right-12 sm:top-9 sm:size-20"
                />
                <BookingButton
                  variant="primary"
                  size="lg"
                  shimmer
                  icon={<CalendarCheck className="size-5" />}
                  className="relative w-full sm:w-auto"
                >
                  Записаться на онлайн консультацию
                </BookingButton>
              </div>
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
