import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export const metadata: Metadata = {
  title: "Archives - NIUM",
  description: "Visual archive of selected NIUM references and explorations.",
};

type ArchiveItem = {
  number: string;
  src: string;
  ratio: `${number}/${number}`;
};

const ARCHIVE_ITEMS: ArchiveItem[] = [
  { number: "001", src: "/figma/archive-001.jpg", ratio: "501/691.5" },
  { number: "002", src: "/figma/archive-002.png", ratio: "501/691.16" },
  { number: "003", src: "/figma/archive-003.jpg", ratio: "501/691.5" },
  { number: "004", src: "/figma/archive-004.jpg", ratio: "501/658.56" },
  { number: "005", src: "/figma/archive-005.jpg", ratio: "501/543.67" },
  { number: "006", src: "/figma/archive-006.jpg", ratio: "501/259.31" },
  { number: "007", src: "/figma/archive-007.jpg", ratio: "501/658.56" },
  { number: "008", src: "/figma/archive-008.jpg", ratio: "501/845.16" },
];

export default function ArchivesPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section
          className="page-shell border-t border-divider pb-10 pt-24 md:pt-32 lg:pt-40"
          data-reveal="section"
        >
          <div className="flex flex-col gap-5">
            <h1 className="flex flex-wrap gap-x-2 text-[clamp(3rem,6vw,4rem)] font-medium uppercase leading-none tracking-[-5.12px]">
              <span>The</span>
              <span>Archives</span>
            </h1>

            <div className="reveal-group grid gap-x-3 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {ARCHIVE_ITEMS.map((item, index) => (
                <article
                  key={item.number}
                  className="flex min-w-0 flex-col"
                  data-reveal="soft"
                  style={{ "--reveal-delay": `${index * 55}ms` } as CSSProperties}
                >
                  <div
                    className="relative w-full overflow-hidden bg-card"
                    style={{ aspectRatio: item.ratio }}
                  >
                    <Image
                      src={item.src}
                      alt={`Archive ${item.number}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 4}
                      unoptimized
                    />
                  </div>
                  <p className="pt-2 text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px]">
                    {item.number}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}
