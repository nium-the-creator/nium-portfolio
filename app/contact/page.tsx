import type { Metadata } from "next";
import { SOCIAL_LINKS } from "@/lib/contact-links";
import { SiteHeader } from "../site-header";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Contact - NIUM",
  description: "Start a new project with NIUM.",
};

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <ContactView />
      <ContactFooter />
    </div>
  );
}

function ContactFooter() {
  return (
    <footer className="bg-background py-6" data-reveal>
      <div className="page-shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <nav className="flex flex-wrap gap-x-6 gap-y-4" aria-label="Social links">
          {SOCIAL_LINKS.map((item) => {
            const external = item.href.startsWith("http");
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65"
                {...(external
                  ? { rel: "noopener noreferrer", target: "_blank" }
                  : {})}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px]">
          ©2026
        </p>
      </div>
    </footer>
  );
}
