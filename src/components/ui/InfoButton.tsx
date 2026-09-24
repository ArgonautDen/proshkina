"use client";

import { useState, type ReactNode } from "react";
import { Info } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

/**
 * Small inline "ⓘ" trigger that opens a Modal with supplementary info —
 * for context worth having, but not important enough to sit permanently on
 * the page (see BookingButton for the sibling "action" version of this
 * pattern).
 */
export function InfoButton({ label, children }: { label: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={label}
        className="group relative inline-flex size-5 shrink-0 items-center justify-center rounded-full text-indigo-400 transition-colors hover:text-indigo-700"
      >
        <span className="absolute inset-0 scale-0 rounded-full bg-indigo-50 transition-transform duration-200 ease-out group-hover:scale-100" />
        <Info className="relative size-4" aria-hidden="true" />
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
}
