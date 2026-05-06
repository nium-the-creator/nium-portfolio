import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

const services = [
  { title: "Brand Identity Design", image: "/figma/service-0.png" },
  { title: "Art Direction", image: "/figma/service-1.png" },
  { title: "Brand Strategy", image: "/figma/service-2.png" },
  { title: "Campaign Management", image: "/figma/service-3.png" },
  { title: "Packaging", image: "/figma/service-4.png" },
  { title: "UI/UX", image: "/figma/service-5.png" },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-[#fafaf8] text-[#0f0f0f]">
      <SiteHeader />

      <main className="flex-1">
        <section
          id="home"
          className="flex min-h-[min(100vh,1200px)] flex-col items-center justify-center gap-8 px-6 py-16 text-center md:gap-12"
          data-reveal="section"
        >
          <div className="flex w-full max-w-xl flex-col items-center gap-2 md:items-start md:text-left">
            <div className="flex items-center gap-2 text-[25px] font-medium lowercase text-black">
              <span className="typing-line">
                Hey, welcome to my portfolio page
              </span>
              <span className="hidden h-[34px] w-px shrink-0 sm:block">
                <Image
                  src="/figma/cursor-line.svg"
                  alt=""
                  width={1}
                  height={35}
                  className="h-[34px] w-auto"
                />
              </span>
            </div>
          </div>

          <p className="text-[20px] font-medium uppercase leading-normal text-black">
            i am
          </p>

          <h1 className="flex flex-col items-center gap-2 px-2 sm:flex-row sm:gap-4 md:gap-6">
            <span className="text-center text-[clamp(3.5rem,14vw,10.3rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-[#0f0f0f]">
              adonis
            </span>
            <span className="text-center text-[clamp(3.5rem,14vw,10.3rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-[#0f0f0f]">
              dominium
            </span>
          </h1>

          <p className="max-w-xl text-[20px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#0f0f0f]">
            Creative designer and visual strategist
          </p>
        </section>

        <div className="h-16 w-full bg-[#e2e2e2]" aria-hidden />

        <section
          id="intro"
          className="page-shell pb-8 pt-12"
          data-reveal="section"
        >
          <div className="relative overflow-hidden rounded-t-2xl bg-black md:min-h-[520px]">
            <div className="pointer-events-none absolute bottom-12 right-12 z-20 hidden lg:block">
              <Image
                src="/figma/intro-icon.svg"
                alt=""
                width={93}
                height={93}
              />
            </div>
            <div className="reveal-group relative z-10 grid gap-12 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:p-12 lg:p-16">
              <div
                className="relative mx-auto w-full max-w-[691px] md:mx-0"
                data-reveal="soft"
                style={{ "--reveal-delay": "80ms" } as CSSProperties}
              >
                <div className="relative aspect-[691/482] w-full overflow-hidden rounded-[33px] bg-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/figma/intro-icon.svg"
                      alt=""
                      width={94}
                      height={94}
                      className="opacity-90"
                    />
                  </div>
                </div>
                <Image
                  src="/figma/intro-decoration.svg"
                  alt=""
                  width={938}
                  height={566}
                  className="pointer-events-none absolute -bottom-8 left-1/2 hidden w-[min(100%,520px)] -translate-x-1/3 md:block"
                />
              </div>
              <div
                className="relative z-10 flex flex-col items-center gap-6 text-center text-white md:items-start md:text-left"
                data-reveal
                style={{ "--reveal-delay": "160ms" } as CSSProperties}
              >
                <p className="max-w-[606px] text-[clamp(1.75rem,4vw,3.125rem)] font-medium leading-[1.05]">
                  I am all about deep dives and strange scapes
                </p>
                <p className="max-w-xl text-[clamp(1.125rem,2.5vw,2rem)] font-normal capitalize leading-normal">
                  I&apos;m a freelance Creative blending UI/UX, graphic design, and
                  visual media to help brands find their edge.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="flex flex-wrap gap-x-2 text-[clamp(2rem,5vw,2.8rem)] font-semibold uppercase leading-10 tracking-[-3.2px] text-[#0f0f0f]">
              <span>Selected</span>
              <span>Works</span>
            </h2>
            <Link
              href="/works"
              className="relative w-fit text-[20px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#0f0f0f] after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-[#0f0f0f]"
            >
              See all works
            </Link>
          </div>
        </section>

        <section
          id="works"
          className="bg-[linear-gradient(181deg,#fff_40.67%,#fefbf0_22.49%,#840be9_105.44%)] px-6 py-16"
          data-reveal="section"
        >
          <div className="reveal-group mx-auto grid max-w-[1920px] gap-8 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="relative flex min-h-[420px] flex-col justify-end rounded-xl bg-white md:min-h-[520px] lg:min-h-[729px]"
                data-reveal="soft"
                style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              >
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <Image
                    src="/figma/work-arrow.svg"
                    alt=""
                    width={15}
                    height={17}
                    className="shrink-0"
                  />
                  <span className="text-[43px] font-bold leading-[31px] text-black">
                    O WA
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="archives"
          className="page-shell section-y"
          data-reveal="section"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold uppercase leading-10 tracking-[-3.2px] text-[#0f0f0f]">
            Services
          </h2>
          <div className="reveal-group mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative aspect-[4/5] overflow-hidden bg-neutral-200"
                data-reveal="soft"
                style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent p-6 pt-16">
                  <h3 className="text-[clamp(1.5rem,3vw,2.8rem)] font-medium uppercase leading-none tracking-[-1.2px] text-[#0f0f0f]">
                    {s.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-shell section-y" data-reveal="section">
          <h2 className="text-[40px] font-semibold uppercase leading-10 tracking-[-3.2px] text-[#0f0f0f]">
            Info
          </h2>
          <div className="reveal-group mt-12 flex flex-col gap-12 lg:flex-row">
            <div
              className="flex-1 space-y-12 lg:max-w-3xl"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              <InfoRow
                label="What I do"
                body={
                  <>
                    I&apos;m a freelance Creative blending UI/UX, graphic design,
                    and visual media to help brands find their edge, helping brands
                    find clarity and express it through strong, thoughtful design.
                  </>
                }
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <p className="w-full shrink-0 text-[18px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b] sm:max-w-[200px] lg:max-w-[240px]">
                  My background
                </p>
                <div className="space-y-6 text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-[#0f0f0f]">
                  <p>
                    I started by working across graphic design and digital visuals,
                    gradually expanding into{" "}
                    <strong className="font-bold">
                      art direction, social media systems, packaging, and visual
                      media
                    </strong>{" "}
                    as the need for clarity at scale became obvious. Over time, my
                    role shifted from execution to direction — shaping how ideas
                    are structured, how stories are told, and how visuals carry
                    meaning across platforms.
                  </p>
                  <p>
                    Today, I operate as a{" "}
                    <strong className="font-bold">
                      Creative Director and Visual Strategist
                    </strong>
                    , collaborating with brands to define direction, build cohesive
                    visual systems, and ensure consistency from screen to shelf. My
                    work is informed by culture, narrative, and context, with a
                    focus on intentional design rather than surface-level
                    aesthetics.
                  </p>
                </div>
              </div>
              <InfoRow
                label="My approach"
                body="I design with intent first — building clear, scalable visual systems that align strategy, story, and execution."
              />
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <p className="w-full shrink-0 text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b] sm:max-w-[200px] lg:max-w-[240px]">
                  Career
                </p>
                <ul className="space-y-4 text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-[#0f0f0f]">
                  <li>{`(2021 - 2023) Lead Designer at The Maestro's Crib`}</li>
                  <li>(2023 – 2024) Independent Brand Designer</li>
                  <li>(2024) Design Intern at Babtech Computers</li>
                  <li>
                    (2025 – now) Founder & Creative Director at Manjala Culture
                  </li>
                  <li>(2026 - now) Design Lead at The G.R.I.T. Community</li>
                </ul>
              </div>
            </div>
            <div
              className="relative mx-auto w-full max-w-md shrink-0 overflow-hidden lg:mx-0 lg:w-[380px] lg:max-w-none xl:w-[420px]"
              data-reveal="soft"
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              <div className="relative aspect-[613/767] w-full">
                <Image
                  src="/figma/profile.png"
                  alt="Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function InfoRow({
  label,
  body,
}: {
  label: string;
  body: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
      <p className="w-full shrink-0 text-[18px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b] sm:max-w-[200px] lg:max-w-[240px]">
        {label}
      </p>
      <p className="max-w-3xl text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-[#0f0f0f]">
        {body}
      </p>
    </div>
  );
}
