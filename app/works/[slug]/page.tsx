import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../site-footer";
import { MexicoCityClock } from "../../mexico-city-clock";

const PROJECTS_DATA = {
  "the-clarity-table": {
    title: "The Clarity Table",
    services: ["Brand Identity Design", "Brand Strategy"],
    client: "The Clarity Table",
    location: "Benin, Nigeria",
    year: "2026",
    credits: "nil",
    identitySystems: true,
    liveSiteUrl: "#",
    info: "Nopal Tech, a sustainable agriculture SaaS startup, needed a future forward brand identity. I designed a clean, modern logo, visual system for presentations and pitch decks, and website assets that helped position them as leaders in their field.",
    heroImage:
      "https://www.figma.com/api/mcp/asset/457183d5-c93a-4704-88c6-5441d91b34c3",
    quote: "Clarity for the raging mind-the calm",
    challenge:
      "Nopal Tech, a sustainable agriculture SaaS startup, needed a future forward brand identity. I designed a clean, modern logo, visual system for presentations and pitch decks, and website assets that helped position them as leaders in their field.",
    howAddressed:
      "Nopal Tech, a sustainable agriculture SaaS startup, needed a future forward brand identity. I designed a clean, modern logo, visual system for presentations and pitch decks, and website assets that helped position them as leaders in their field.",
    relatedProjects: [
      {
        title: "Jefe de Corte (Cutboss)",
        slug: "#",
        description:
          "Some balderdash and scum about the brand, just a vague opinion.",
      },
      {
        title: "The Light ~ Octo Dux.",
        slug: "#",
        description:
          "Some balderdash and scum about the brand, just a vague opinion.",
      },
      {
        title: "Manjala Culture",
        slug: "#",
        description:
          "Some balderdash and scum about the brand, just a vague opinion.",
      },
    ],
  },
} as const;

type Props = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];
  if (!project) notFound();

  return (
    <div className="relative flex min-h-full flex-col bg-[#fafaf8]">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4">
          {/* Back button */}
          <div className="flex flex-1 items-center">
            <Link
              href="/works"
              className="flex items-center gap-3 rounded-full border-2 border-black px-4 py-2 text-[clamp(0.875rem,1.5vw,1.125rem)] font-normal leading-tight transition-opacity hover:opacity-70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 29 29"
                fill="none"
                className="shrink-0 rotate-180"
                aria-hidden
              >
                <path
                  d="M14.5 3L3 14.5L14.5 26M3 14.5H26"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>back to works</span>
            </Link>
          </div>

          {/* Logo center */}
          <div className="flex flex-1 items-center justify-center">
            <Link
              href="/"
              className="text-[clamp(1.25rem,2.5vw,2.375rem)] font-extrabold uppercase leading-[1] tracking-[-0.6px] text-[#0f0f0f]"
            >
              NIUM©
            </Link>
          </div>

          {/* Clock */}
          <div className="flex flex-1 items-center justify-end">
            <MexicoCityClock />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-[1920px] px-5 pt-16 md:pt-24">
          <div className="flex flex-wrap items-end justify-between gap-3 pb-5">
            <h1 className="flex flex-wrap gap-x-2 text-[clamp(2.5rem,6vw,4.5rem)] font-medium uppercase leading-[0.88] tracking-[-5.12px] text-[#0f0f0f]">
              <span>The</span>
              <span>Clarity</span>
              <span>Table</span>
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium tracking-[-0.64px] text-[#6b6b6b]">
              where Clarity begins
            </p>
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1872/480" }}>
            <Image
              src={project.heroImage}
              alt="The Clarity Table hero"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              unoptimized
            />
          </div>
        </section>

        {/* Details */}
        <section className="mx-auto w-full max-w-[1920px] px-5 pb-8 pt-16 md:pb-12 md:pt-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
            {/* Left column: meta */}
            <div className="flex flex-1 flex-col gap-10">
              <DetailGroup label="Services">
                {project.services.map((s) => (
                  <p key={s} className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                    {s}
                  </p>
                ))}
              </DetailGroup>

              <DetailGroup label="Client">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                  {project.client}
                </p>
              </DetailGroup>

              <DetailGroup label="Location">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                  {project.location}
                </p>
              </DetailGroup>

              <DetailGroup label="Year">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                  {project.year}
                </p>
              </DetailGroup>

              <DetailGroup label="Credits and contributions">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-light leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                  {project.credits}
                </p>
              </DetailGroup>
            </div>

            {/* Right column: info + link */}
            <div className="flex flex-1 flex-col gap-10">
              <DetailGroup label="Info">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-[#0f0f0f]">
                  {project.info}
                </p>
              </DetailGroup>

              {project.identitySystems && (
                <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-normal uppercase leading-[2rem] tracking-[-0.6px] text-[#6b6b6b]">
                  Identity Systems
                </p>
              )}

              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-tight tracking-[-0.64px] text-[#0f0f0f] underline decoration-solid transition-opacity hover:opacity-65"
              >
                See live project
              </a>
            </div>
          </div>
        </section>

        {/* Blue section */}
        <section className="bg-[#0944d8] py-20">
          {/* Quote */}
          <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-8 px-10 pb-20 md:flex-row md:items-start md:gap-8">
            <h2 className="max-w-[494px] shrink-0 text-[clamp(1.75rem,3.5vw,3.0625rem)] font-bold leading-normal text-white">
              {project.quote}
            </h2>
            <p className="flex-1 text-[clamp(1.125rem,2.5vw,2rem)] font-normal leading-[50px] text-white opacity-60">
              Nopal Tech, a sustainable agriculture SaaS startup, needed a future forward brand identity designed in clean, modern style — a visual system for presentations and pitch decks, and website assets that helped position them as leaders in their field.
            </p>
          </div>

          {/* Challenge + How I addressed it */}
          <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-12 px-10 pb-20 md:flex-row md:gap-12">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-extrabold uppercase leading-[2rem] tracking-[-0.6px] text-[#ffe100]">
                The Challenge
              </p>
              <p className="text-[clamp(1rem,2vw,2rem)] font-medium leading-[50px] tracking-[-0.64px] text-white">
                {project.challenge}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-extrabold uppercase leading-[2rem] tracking-[-0.6px] text-[#ffe100]">
                How I addressed it
              </p>
              <p className="text-[clamp(1rem,2vw,2rem)] font-medium leading-[50px] tracking-[-0.64px] text-white">
                {project.howAddressed}
              </p>
            </div>
          </div>

          {/* In the wild gallery */}
          <div className="bg-[#5cf03e] py-9">
            <p className="mb-12 text-center text-[clamp(1.5rem,3vw,3.0625rem)] font-semibold uppercase leading-none tracking-[-1.568px] text-white">
              Clarity in Reality — The brand out in the wild!
            </p>
            <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-10 px-10 md:grid-cols-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-[500px] rounded-2xl bg-white md:h-[600px] lg:h-[700px] ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* See more projects */}
        <section className="mx-auto w-full max-w-[1920px] px-5 pb-20 pt-24 md:pb-24 md:pt-40">
          <h2 className="mb-8 flex flex-wrap gap-x-2 text-[clamp(2rem,5vw,3.0625rem)] font-semibold uppercase leading-[2.5rem] tracking-[-3.2px] text-[#0f0f0f]">
            <span>See</span>
            <span>More</span>
            <span>projects</span>
          </h2>

          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex flex-1 flex-wrap gap-8 lg:gap-5">
              {project.relatedProjects.map((rp) => (
                <Link
                  key={rp.title}
                  href={rp.slug}
                  className="group flex w-full flex-col gap-4 sm:w-[calc(50%-1rem)] lg:w-[clamp(200px,30%,500px)]"
                >
                  <div className="aspect-[500/607] w-full rounded-2xl bg-[#d9d9d9] transition-opacity group-hover:opacity-85" />
                  <div className="flex items-center gap-2 px-1">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      className="shrink-0"
                      aria-hidden
                    >
                      <circle cx="11" cy="11" r="11" fill="#0f0f0f" />
                      <path
                        d="M7 11h8M12 8l3 3-3 3"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[clamp(1.25rem,2.5vw,2.1875rem)] font-medium leading-normal text-black">
                      {rp.title}
                    </span>
                  </div>
                  <p className="text-[clamp(1rem,2vw,1.875rem)] font-normal leading-normal text-black">
                    {rp.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex shrink-0 items-center justify-center lg:self-stretch">
              <Link
                href="/works"
                className="text-center text-[clamp(1.5rem,2.5vw,2.0625rem)] font-medium uppercase leading-[1.05] text-black transition-opacity hover:opacity-65"
              >
                View all<br />projects
              </Link>
            </div>
          </div>

          <p className="mt-20 text-center text-[clamp(1.125rem,2vw,1.8125rem)] font-normal leading-[2.5rem] text-black">
            Loved this project? Let&apos;s make{" "}
            <span className="underline decoration-[#840be9] decoration-wavy [text-underline-offset:4px]">
              magic
            </span>
          </p>
        </section>
      </main>

      <SiteFooter compact />
    </div>
  );
}

function DetailGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-normal uppercase leading-[2rem] tracking-[-0.6px] text-[#6b6b6b]">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}
