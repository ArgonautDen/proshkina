"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { BOOKING_URL } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";
import { Container } from "@/components/ui/Container";

type NavItem =
  | { label: string; kind: "anchor"; id: string }
  | { label: string; kind: "route"; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Обо мне", kind: "anchor", id: "about" },
  { label: "Квалификация", kind: "route", href: "/qualifications" },
  { label: "Лекторская деятельность", kind: "anchor", id: "lecturing" },
  { label: "Контакты", kind: "anchor", id: "contacts" },
];

const SECTION_IDS = NAV_ITEMS.filter((item) => item.kind === "anchor").map((item) => item.id);

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <div className="flex items-center gap-1">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться на приём"
            className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 p-2 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 sm:size-14"
          >
            <Image
              src={assetPath("/images/logo-vetremote.png")}
              alt="VetRemote"
              fill
              sizes="56px"
              className="object-contain p-1.5"
              priority
            />
          </Link>

          <HomeLink />
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavPill
              key={item.label}
              item={item}
              isHome={isHome}
              isActive={item.kind === "anchor" ? activeId === item.id : pathname.startsWith(item.href)}
            />
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          className="group relative flex size-11 items-center justify-center rounded-full border border-ink-200 md:hidden"
        >
          <span className="absolute inset-0 scale-0 rounded-full bg-ink-950 transition-transform duration-300 ease-out group-hover:scale-100" />
          <span className="relative z-10 flex size-4 flex-col justify-between text-ink-700 transition-colors group-hover:text-white">
            <span
              className={cn(
                "h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out",
                isMenuOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ease-out",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300 ease-out",
                isMenuOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {isMenuOpen && (
        <nav className="absolute inset-x-0 top-full animate-fade-in border-t border-ink-100 bg-surface shadow-card md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <NavPill
                key={item.label}
                item={item}
                isHome={isHome}
                isActive={item.kind === "anchor" ? activeId === item.id : pathname.startsWith(item.href)}
                block
              />
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

function HomeLink() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link
      href="/"
      onClick={(event) => {
        if (isHome) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-ink-950 transition-transform duration-300 ease-out group-hover:scale-100" />
      <span className="relative z-10 text-ink-600 transition-colors group-hover:text-white">
        Главная
      </span>
    </Link>
  );
}

function NavPill({
  item,
  isHome,
  isActive,
  block = false,
}: {
  item: NavItem;
  isHome: boolean;
  isActive: boolean;
  block?: boolean;
}) {
  const href = item.kind === "route" ? item.href : isHome ? `#${item.id}` : `/#${item.id}`;

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
        block && "w-full",
      )}
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-ink-950 transition-transform duration-300 ease-out group-hover:scale-100" />
      <span
        className={cn(
          "relative z-10 flex items-center gap-2 transition-colors group-hover:text-white",
          isActive ? "text-indigo-700" : "text-ink-600",
        )}
      >
        {item.label}
        <span
          className={cn(
            "size-1.5 rounded-full bg-pumpkin-500 transition-opacity duration-300",
            isActive ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
