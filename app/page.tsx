import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IntroMedia } from "./intro-media";
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

const selectedWorks = [
  { title: "THE CLARITY TABLE", slug: "the-clarity-table" },
  { title: "G.R.I.T.", slug: "grit" },
  { title: "ZCASH.ME", slug: "zcash-me" },
  { title: "LUXURY LOFTS", slug: "luxury-lofts" },
  { title: "OWA", slug: "owa" },
  { title: "MANJALA CULTURE", slug: "manjala-culture" },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        <section
          id="home"
          className="flex min-h-[min(100vh,1200px)] flex-col items-center justify-center gap-8 px-6 py-16 text-center md:gap-12"
          data-reveal="section"
        >
          <div className="flex w-full max-w-xl justify-center">
            <div className="flex items-center justify-center gap-2 text-center text-[clamp(0.75rem,4vw,1.5625rem)] font-medium lowercase text-foreground">
              <span className="typing-line">
                Hey, welcome to my portfolio page
              </span>
            </div>
          </div>

          <p className="text-[20px] font-medium uppercase leading-normal text-foreground">
            i am
          </p>

          <h1 className="flex flex-col items-center gap-2 px-2 xl:flex-row xl:gap-6">
            <span className="text-center text-[clamp(3.5rem,14vw,10.3rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-foreground">
              adonis
            </span>
            <span className="text-center text-[clamp(3.5rem,14vw,10.3rem)] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-foreground">
              dominium
            </span>
          </h1>

          <p className="max-w-xl text-[20px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground">
            Creative designer and visual strategist
          </p>
        </section>

        <div className="h-16 w-full bg-divider" aria-hidden />

        <section
          id="intro"
          className="page-shell pb-8 pt-12"
          data-reveal="section"
        >
          <div className="intro-panel relative overflow-hidden rounded-t-2xl bg-black">
            <div className="intro-motion-layer" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="reveal-group relative z-10 grid min-h-[520px] gap-12 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:p-12 lg:min-h-[640px] lg:p-16">
              <div className="relative mx-auto w-full max-w-[691px] md:mx-0">
                <IntroMedia videoSrc="/figma/intro-generated.mp4" />
                <div
                  className="intro-illustration-badge"
                  aria-hidden="true"
                >
                  <span className="intro-illustration-mark">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-6 text-center text-white md:items-start md:text-left">
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
            <h2 className="flex flex-wrap gap-x-2 text-[clamp(2rem,5vw,2.8rem)] font-semibold uppercase leading-10 tracking-[-3.2px] text-foreground">
              <span>Selected</span>
              <span>Works</span>
            </h2>
            <Link
              href="/works"
              className="relative w-fit text-[20px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground after:absolute after:inset-x-0 after:bottom-0 after:border-b after:border-foreground"
            >
              See all works
            </Link>
          </div>
        </section>

        <section
          id="works"
          className="bg-[linear-gradient(181deg,#0B0B0D_40.67%,#1A1F24_72%,rgba(58,110,165,0.15)_105.44%)] px-6 py-10 md:py-12"
        >
          <div className="reveal-group mx-auto grid max-w-[1920px] gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {selectedWorks.map((project, i) => (
              <article
                key={project.slug}
              className="selected-work-card relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-xl border border-divider bg-card p-5 shadow-[0_18px_56px_rgba(0,0,0,0.3)] sm:min-h-[260px] md:min-h-[300px] md:p-6 lg:min-h-[340px] xl:min-h-[380px]"
                style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
              >
                <div className="selected-work-card__wash" aria-hidden="true" />
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src="/figma/work-arrow.svg"
                    alt=""
                    width={15}
                    height={17}
                    className="shrink-0"
                  />
                </div>
                <div className="relative z-10 flex flex-1 items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/figma/work-arrow.svg"
                      alt=""
                      width={15}
                      height={17}
                      className="shrink-0"
                    />
                    <span className="max-w-[16ch] text-[clamp(1.5rem,3vw,2.7rem)] font-bold leading-[0.92] text-foreground">
                      {project.title}
                    </span>
                  </div>
                </div>
                <p className="relative z-10 max-w-[22ch] text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted">
                  Selected project
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="archives"
          className="page-shell section-y"
          data-reveal="section"
        >
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold uppercase leading-10 tracking-[-3.2px] text-foreground">
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
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent p-6 pt-16">
                  <h3 className="text-[clamp(1.5rem,3vw,2.8rem)] font-medium uppercase leading-none tracking-[-1.2px] text-foreground">
                    {s.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-shell section-y" data-reveal="section">
          <h2 className="text-[40px] font-semibold uppercase leading-10 tracking-[-3.2px] text-foreground">
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
                <p className="w-full shrink-0 text-[18px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted sm:max-w-[200px] lg:max-w-[240px]">
                  My background
                </p>
                <div className="space-y-6 text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-foreground">
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
                <p className="w-full shrink-0 text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted sm:max-w-[200px] lg:max-w-[240px]">
                  Career
                </p>
                 <ul className="space-y-4 text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-foreground">
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
      <p className="w-full shrink-0 text-[18px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted sm:max-w-[200px] lg:max-w-[240px]">
        {label}
      </p>
      <p className="max-w-3xl text-[19px] font-medium leading-[19.2px] tracking-[-0.64px] text-foreground">
        {body}
      </p>
    </div>
  );
}
