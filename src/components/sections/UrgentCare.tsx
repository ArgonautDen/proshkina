"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Bone,
  ChevronDown,
  PawPrint,
  RotateCcw,
  Siren,
  TrendingDown,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";

const ICON_CLASS = "size-5";

const URGENT_SIGNS: AccordionItemData[] = [
  {
    icon: <PawPrint className={ICON_CLASS} aria-hidden="true" />,
    label: "Внезапная слабость или отказ лап",
    description: "Внезапно появилась слабость или отказ одной, двух или всех лап.",
  },
  {
    icon: <Zap className={ICON_CLASS} aria-hidden="true" />,
    label: "Судороги впервые",
    description: "Впервые возникли судороги.",
  },
  {
    icon: <RotateCcw className={ICON_CLASS} aria-hidden="true" />,
    label: "Резкое нарушение координации",
    description: "Резко нарушилась координация, появились падения, кружение, наклон головы.",
  },
  {
    icon: <Bone className={ICON_CLASS} aria-hidden="true" />,
    label: "Выраженная боль в шее или спине",
    description: "Появилась выраженная боль в шее или спине.",
  },
  {
    icon: <AlertTriangle className={ICON_CLASS} aria-hidden="true" />,
    label: "Ухудшение после травмы",
    description: "Состояние ухудшилось после падения, удара, ДТП или другой травмы.",
  },
  {
    icon: <TrendingDown className={ICON_CLASS} aria-hidden="true" />,
    label: "Быстро нарастающие симптомы",
    description: "Быстро нарастают слабость, вялость, дезориентация или другие тревожные симптомы.",
  },
];

export function UrgentCare() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl rounded-2xl border border-ink-100 bg-surface shadow-soft">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-pumpkin-500/10 text-pumpkin-600 sm:size-12">
              <Siren className="size-5 sm:size-6" aria-hidden="true" />
            </span>
            <span className="flex-1 font-display text-xl font-bold text-ink-900 sm:text-2xl">
              Когда нужно обратиться срочно?
            </span>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-ink-400 transition-transform duration-300 sm:size-6",
                isOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-6 sm:px-6">
                <p className="text-ink-600 leading-relaxed">
                  Некоторые неврологические симптомы требуют как можно более быстрого обращения за
                  ветеринарной помощью. Не откладывайте консультацию, если у питомца:
                </p>
                <div className="mt-4">
                  <Accordion items={URGENT_SIGNS} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Always visible, not tucked behind the accordion — this is the
            line that matters most if someone's skimming in a hurry. */}
        <div className="mt-4 flex max-w-4xl items-start gap-3 rounded-2xl border border-red-200 bg-red-50/70 p-4 sm:p-5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
            <AlertTriangle className="size-5" aria-hidden="true" />
          </span>
          <p className="text-[15px] leading-relaxed text-red-700">
            Если состояние питомца стремительно ухудшается и вызывает у вас серьёзное
            беспокойство, лучше обратиться за помощью сразу в клинику — помощь там можно оказать
            быстрее и эффективнее.
          </p>
        </div>
      </Container>
    </section>
  );
}
