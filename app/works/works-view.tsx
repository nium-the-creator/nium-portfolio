"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const FILTER_OPTIONS = [
  { id: "all", label: "All works" },
  { id: "brand-identity", label: "Brand Identity Design" },
  { id: "art-direction", label: "Art Direction" },
  { id: "brand-strategy", label: "Brand Strategy" },
  { id: "campaign", label: "Campaign Management" },
  { id: "packaging", label: "Packaging" },
  { id: "ui-ux", label: "UI/UX" },
] as const;

type FilterId = (typeof FILTER_OPTIONS)[number]["id"];

type Project = {
  title: string;
  client: string;
  detailTags: string[];
  filterIds: FilterId[];
};

const PROJECTS: Project[] = [
  {
    title: "THE CLARITY TABLE",
    client: "Retrorave Festivals",
    detailTags: [
      "Brand Identity Design",
      "Art Direction",
      "Campaign Management",
    ],
    filterIds: ["brand-identity", "art-direction", "campaign"],
  },
  {
    title: "G.R.I.T.",
    client: "Eco-Conscious Fashion",
    detailTags: [
      "Visual Merchandising",
      "Social Media Strategy",
      "Content Creation",
    ],
    filterIds: ["art-direction", "brand-strategy", "campaign"],
  },
  {
    title: "ZCASH.ME",
    client: "Tech Innovations Summit",
    detailTags: [
      "User Experience Design",
      "Interactive Media",
      "Product Launch Strategy",
    ],
    filterIds: ["ui-ux", "brand-strategy"],
  },
  {
    title: "LUXURY LOFTS",
    client: "Tech Innovations Summit",
    detailTags: [
      "User Experience Design",
      "Interactive Media",
      "Product Launch Strategy",
    ],
    filterIds: ["ui-ux", "packaging"],
  },
  {
    title: "OWA",
    client: "Retrorave Festivals",
    detailTags: [
      "Brand Identity Design",
      "Art Direction",
      "Campaign Management",
    ],
    filterIds: ["brand-identity", "campaign"],
  },
  {
    title: "MANJALA CULTURE",
    client: "Eco-Conscious Fashion",
    detailTags: [
      "Visual Merchandising",
      "Social Media Strategy",
      "Content Creation",
    ],
    filterIds: ["art-direction", "brand-strategy"],
  },
  {
    title: "IVEALTH",
    client: "Tech Innovations Summit",
    detailTags: [
      "User Experience Design",
      "Interactive Media",
      "Product Launch Strategy",
    ],
    filterIds: ["ui-ux", "brand-identity"],
  },
  {
    title: "RETRORAVE FESTIVALS",
    client: "Tech Innovations Summit",
    detailTags: [
      "User Experience Design",
      "Interactive Media",
      "Product Launch Strategy",
    ],
    filterIds: ["campaign", "brand-identity", "art-direction"],
  },
];

const PER_PAGE = 3;

export function WorksView() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.filterIds.includes(filter));
  }, [filter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => {
    setPage((p) => Math.min(p, pageCount));
  }, [pageCount]);

  const safePage = Math.min(page, pageCount);
  const sliceStart = (safePage - 1) * PER_PAGE;
  const pageItems = filtered.slice(sliceStart, sliceStart + PER_PAGE);

  const setFilterAndReset = (id: FilterId) => {
    setFilter(id);
    setPage(1);
  };

  return (
    <div className="bg-[#fafaf8] text-[#0f0f0f]">
      <section className="mx-auto w-full max-w-[1920px] px-5 pb-16 pt-24 md:pb-[60px] md:pt-[160px]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="flex flex-wrap gap-x-2 text-[clamp(2.5rem,8vw,4rem)] font-medium uppercase leading-[1] tracking-[-5.12px] text-[#0f0f0f]">
              <span>All</span>
              <span>works</span>
            </h1>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-4">
              <div className="flex shrink-0 flex-col">
                <button
                  type="button"
                  onClick={() => setFilterAndReset("all")}
                  className={`relative py-1 text-left text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-colors ${
                    filter === "all" ? "text-[#0f0f0f]" : "text-[#6b6b6b]"
                  }`}
                >
                  All works
                  {filter === "all" ? (
                    <span className="absolute inset-x-0 bottom-0 border-b border-[#0f0f0f]" />
                  ) : null}
                </button>
              </div>
              <div className="flex flex-1 flex-wrap gap-x-4 gap-y-3">
                {FILTER_OPTIONS.filter((f) => f.id !== "all").map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFilterAndReset(f.id)}
                    className={`relative py-1 text-left text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] transition-colors ${
                      filter === f.id ? "text-[#0f0f0f]" : "text-[#6b6b6b]"
                    }`}
                  >
                    {f.label}
                    {filter === f.id ? (
                      <span className="absolute inset-x-0 bottom-0 border-b border-[#0f0f0f]" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:gap-x-8 md:gap-y-12 lg:grid-cols-2 lg:gap-x-12">
            {pageItems.map((project) => (
              <article key={project.title}>
                <Link
                  href="#"
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#840be9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf8]"
                >
                  <div className="relative aspect-[865/982] w-full overflow-hidden bg-[#121212]">
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/55 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <div className="flex items-end justify-between gap-4 text-white">
                        <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px]">
                          {project.client}
                        </p>
                        <ul className="text-right text-[16px] font-medium leading-[19.2px] tracking-[-0.64px]">
                          {project.detailTags.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 flex items-center gap-6 px-1 sm:gap-8 sm:px-5">
                    <Image
                      src="/figma/works-card-arrow.svg"
                      alt=""
                      width={46}
                      height={52}
                      className="shrink-0"
                    />
                    <span className="text-[clamp(2rem,7vw,4.125rem)] font-bold leading-[31px] text-black">
                      {project.title}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {pageCount > 1 ? (
          <>
            <div
              className="my-16 border-t border-[#e2e2e2] md:my-20"
              aria-hidden
            />
            <div className="flex justify-center">
              <div className="flex items-center gap-4 rounded-[41px] bg-white px-4 py-2 sm:gap-6 sm:px-4">
                <button
                  type="button"
                  aria-label="Previous page"
                  disabled={safePage <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="flex size-14 shrink-0 items-center justify-center disabled:opacity-35 sm:size-16"
                >
                  <Image
                    src="/figma/pagination-prev.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="size-14 sm:size-16"
                  />
                </button>
                <div className="flex h-[100px] items-center gap-6 rounded-[60px] bg-black px-6 sm:gap-12 sm:px-10">
                  {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                    (n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setPage(n)}
                        className={`flex size-[72px] items-center justify-center rounded-[71px] text-[clamp(3rem,8vw,4.875rem)] font-medium text-white sm:size-[105px] ${
                          safePage === n ? "bg-[#840be9]" : "bg-transparent"
                        }`}
                      >
                        {n}
                      </button>
                    ),
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={safePage >= pageCount}
                  onClick={() =>
                    setPage((p) => Math.min(pageCount, p + 1))
                  }
                  className="flex size-14 shrink-0 items-center justify-center disabled:opacity-35 sm:size-16"
                >
                  <Image
                    src="/figma/pagination-next.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="size-14 sm:size-16"
                  />
                </button>
              </div>
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}
