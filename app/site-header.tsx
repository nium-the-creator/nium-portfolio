"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MexicoCityClock } from "./mexico-city-clock";

const nav = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Archives", href: "/archives" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm">
      <div className="page-shell flex items-stretch">
        <div className="flex flex-1 items-center py-6">
          <Link
            href="/"
            className="text-[15px] font-extrabold uppercase leading-[18px] tracking-[-0.6px]"
          >
            NIUM©
          </Link>
        </div>
        <nav
          className="flex flex-1 flex-wrap items-center justify-center gap-4 py-6 sm:gap-6 lg:gap-8"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/works"
                ? pathname === "/works"
                : item.href === "/contact"
                  ? pathname === "/contact"
                  : item.href === "/archives"
                    ? pathname === "/archives"
                  : item.href === "/" && pathname === "/";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65 ${
                  active ? "opacity-100" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end py-6">
          <MexicoCityClock compact />
        </div>
      </div>
    </header>
  );
}
