import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/contact-links";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Contact - NIUM",
  description: "Start a new project with NIUM.",
};

const CONTACT_LINKS = [
  {
    label: "Email",
    href: "mailto:peteriveyhou6@gmail.com",
    value: "peteriveyhou6@gmail.com",
  },
  { label: "Phone", href: "tel:+2349063683035", value: "+234 906 368 3035" },
] as const;

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#fafaf8] text-[#0f0f0f]">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <section
          className="page-shell flex flex-1 border-t border-[#e2e2e2] pt-24 pb-16 md:min-h-[768px] md:pt-32"
          data-reveal="section"
        >
          <div className="reveal-group grid w-full gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)] lg:gap-16">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,1fr)]">
              <div
                className="flex flex-col gap-8"
                data-reveal
                style={{ "--reveal-delay": "80ms" } as CSSProperties}
              >
                <h1 className="text-[clamp(3rem,6vw,4rem)] font-medium uppercase leading-none tracking-[-5.1px]">
                  Contact
                </h1>
                <p className="max-w-[360px] text-[16px] font-medium leading-[19.2px] tracking-[-0.64px]">
                  Let&apos;s create something meaningful together.
                  <br />
                  I&apos;d love to hear about your project, big or small.
                </p>
              </div>

              <div
                className="flex flex-col gap-12 pt-14 lg:pt-16"
                data-reveal
                style={{ "--reveal-delay": "160ms" } as CSSProperties}
              >
                <ContactGroup label="Email & Phone">
                  {CONTACT_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-[15px] font-medium leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65"
                    >
                      {item.value}
                    </a>
                  ))}
                </ContactGroup>

                <ContactGroup label="Socials">
                  {SOCIAL_LINKS.filter((item) => item.label !== "Email").map(
                    (item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block text-[15px] font-medium leading-[18px] tracking-[-0.6px] transition-opacity hover:opacity-65"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    ),
                  )}
                </ContactGroup>
              </div>
            </div>

            <div
              className="relative w-full overflow-hidden justify-self-end lg:max-w-[627px]"
              data-reveal="soft"
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <div className="relative aspect-[626.67/766.66] w-full">
                <Image
                  src="/figma/contact-portrait.png"
                  alt="Illustrated portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 627px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center py-4" data-reveal="soft">
          <Image
            src="/figma/contact-mark.svg"
            alt=""
            width={179}
            height={123}
            className="h-[123px] w-[179px]"
          />
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}

function ContactGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b]">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

function ContactFooter() {
  return (
    <footer className="bg-[#fafaf8] py-6" data-reveal>
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
