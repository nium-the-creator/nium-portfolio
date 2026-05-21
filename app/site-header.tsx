"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MexicoCityClock } from "./mexico-city-clock";

const nav = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Archives", href: "/archives" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/works"
      ? pathname === "/works"
      : href === "/contact"
        ? pathname === "/contact"
        : href === "/archives"
          ? pathname === "/archives"
          : href === "/" && pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="page-shell grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="col-start-1 row-start-1 flex items-center justify-start py-6 md:hidden">
          <MexicoCityClock compact mobile />
        </div>
        <div className="col-start-2 row-start-1 flex items-center justify-center py-6 md:col-start-1 md:justify-start">
          <Link
            href="/"
            className="text-[15px] font-extrabold uppercase leading-[18px] tracking-[-0.6px]"
          >
            NIUM©
          </Link>
        </div>
        <nav
          className="col-start-2 row-start-1 hidden items-center justify-center gap-6 whitespace-nowrap py-6 md:flex lg:gap-8"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65 ${
                isActive(item.href) ? "opacity-100" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="col-start-3 row-start-1 flex items-center justify-end gap-4 py-6">
          <div className="hidden md:block">
            <MexicoCityClock compact />
          </div>
          <button
            type="button"
            className="flex size-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="h-px w-5 bg-foreground" />
            <span className="h-px w-5 bg-foreground" />
            <span className="h-px w-5 bg-foreground" />
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav
          className="page-shell flex flex-col gap-4 border-t border-divider pb-6 pt-4 md:hidden"
          aria-label="Mobile primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
