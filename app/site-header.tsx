"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MexicoCityClock } from "./mexico-city-clock";

const nav = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Archives", href: "/#archives" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1920px] items-stretch">
        <div className="flex flex-1 items-center p-5">
          <Link
            href="/"
            className="text-[21px] font-extrabold uppercase leading-[18px] tracking-[-0.6px]"
          >
            NIUM©
          </Link>
        </div>
        <nav
          className="flex flex-1 flex-wrap items-center justify-center gap-4 p-5 sm:gap-6 lg:gap-8"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active =
              item.href === "/works"
                ? pathname === "/works"
                : item.href === "/" && pathname === "/";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[21px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65 ${
                  active ? "opacity-100" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 items-center justify-end p-5">
          <MexicoCityClock />
        </div>
      </div>
    </header>
  );
}
