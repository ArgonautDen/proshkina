"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: RevealDirection;
}

const offsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
};

/** Scroll-driven reveal wrapper: fades/slides in on viewport entry with a
 * gentle spring settle. See docs/DESIGN-REFERENCE.md "Анимации". */
export function Reveal({ children, className, style, delay = 0, direction = "up" }: RevealProps) {
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.8, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
