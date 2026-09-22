"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItemData {
  /** Pre-rendered icon element (a component reference can't cross the
   * server → client boundary as a prop, only already-rendered JSX can). */
  icon: ReactNode;
  label: string;
  description: string;
}

export function Accordion({ items }: { items: AccordionItemData[] }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
      {columns.map((columnItems, columnIndex) => (
        <div
          key={columnIndex}
          className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-surface shadow-soft"
        >
          {columnItems.map((item) => {
            const isOpen = openLabel === item.label;
            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setOpenLabel(isOpen ? null : item.label)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-pumpkin-500/10 text-pumpkin-600">
                    {item.icon}
                  </span>
                  <span className="flex-1 font-display font-semibold text-ink-900">{item.label}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-ink-400 transition-transform duration-300",
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
                    <p className="px-4 pb-4 pl-[4.5rem] text-[15px] leading-relaxed text-ink-500 sm:px-6 sm:pl-[5rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
