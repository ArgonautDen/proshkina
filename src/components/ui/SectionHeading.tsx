import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { assetPath } from "@/lib/asset-path";

const SIZE_CLASSES = {
  h1: "text-3xl sm:text-4xl",
  h2: "text-2xl sm:text-3xl",
  h3: "text-xl sm:text-2xl",
} as const;

/**
 * Standard section-title pattern for the whole site: an icon badge to the
 * left, heading text with its first letter auto-accented in pumpkin (see
 * the global `::first-letter` rule in globals.css). `tone="onDark"` swaps
 * the badge/text colors for use over a dark or photo/video background.
 * `backdrop` adds a translucent rounded pill behind icon+text, for when the
 * heading sits on top of a photo and needs a bit of separation to stay
 * legible. Pass either `icon` (a Lucide component) or `imageIcon` (a custom
 * illustration path) — `imageIcon` takes precedence when both are given.
 */
export function SectionHeading({
  icon: Icon,
  imageIcon,
  children,
  as: Tag = "h2",
  tone = "onLight",
  backdrop = false,
  className,
}: {
  icon?: LucideIcon;
  imageIcon?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  tone?: "onLight" | "onDark";
  backdrop?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        backdrop && "w-fit rounded-2xl bg-white/70 py-2 pl-2 pr-4 shadow-soft backdrop-blur-sm",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl sm:size-12",
          tone === "onDark" ? "bg-white/10 text-white" : "bg-indigo-50 text-indigo-700",
        )}
      >
        {imageIcon ? (
          <Image
            src={assetPath(imageIcon)}
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
            className="size-6 object-contain sm:size-7"
          />
        ) : Icon ? (
          <Icon className="size-5 sm:size-6" aria-hidden="true" />
        ) : null}
      </span>
      <Tag className={cn("font-bold", SIZE_CLASSES[Tag], tone === "onDark" && "text-white")}>
        {children}
      </Tag>
    </div>
  );
}
