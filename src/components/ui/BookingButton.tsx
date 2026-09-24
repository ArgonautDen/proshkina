"use client";

import { useState, type ReactNode } from "react";
import { CalendarCheck, ClipboardList } from "lucide-react";
import { Button, type Size, type Variant } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { BOOKING_URL } from "@/lib/constants";

const CHECKLIST = [
  "результаты анализов, обследований и заключений специалистов",
  "выписки из клиник",
  "список препаратов, которые питомец получает сейчас или получал недавно",
  "видео эпизодов судорог, нарушений походки, падений, странного поведения или других симптомов — прикрепить ссылкой на файл-обменник (Яндекс, Mail, Google или другие) либо отправить позднее доктору в личной переписке",
  "краткую хронологию: когда появились первые симптомы, как они менялись и что уже предпринималось",
];

/**
 * Same visual button as <Button>, but clicking it opens a prep-checklist
 * modal first instead of jumping straight to the booking calendar — the
 * calendar link lives on the button inside the modal.
 */
export function BookingButton({
  variant,
  size,
  shimmer,
  icon,
  className,
  children,
}: {
  variant?: Variant;
  size?: Size;
  shimmer?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant={variant}
        size={size}
        shimmer={shimmer}
        icon={icon}
        className={className}
      >
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 sm:size-12">
            <ClipboardList className="size-5 sm:size-6" aria-hidden="true" />
          </span>
          <h2 className="pt-1.5 font-display text-xl font-bold text-ink-900 sm:text-2xl">
            Подготовка к консультации
          </h2>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
          Чтобы консультация была максимально полезной, заранее подготовьте, пожалуйста, всю
          информацию, которая может помочь в оценке состояния питомца:
        </p>

        <ul className="mt-3 space-y-2">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-700">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-pumpkin-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
          Чем подробнее исходная информация, тем точнее можно оценить ситуацию и определить
          дальнейший план действий.
        </p>

        <Button
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          variant="primary"
          size="lg"
          shimmer
          icon={<CalendarCheck className="size-5" aria-hidden="true" />}
          className="mt-6 w-full"
        >
          Записаться
        </Button>
      </Modal>
    </>
  );
}
