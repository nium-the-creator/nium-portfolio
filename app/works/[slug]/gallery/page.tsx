import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MexicoCityClock } from "../../../mexico-city-clock";

const GALLERIES = {
  "the-clarity-table": {
    title: "The Clarity Table",
    eyebrow: "Project gallery",
    description:
      "A visual walkthrough of the faith-rooted podcast identity, from early exploration and campaign direction to the finished system in use.",
    backHref: "/works/the-clarity-table",
    items: [
      { title: "Discovery mood", phase: "Process", type: "image", src: "/figma/archive-001.jpg" },
      { title: "Visual references", phase: "Process", type: "image", src: "/figma/archive-002.png" },
      { title: "Motion exploration", phase: "Process", type: "video", src: "/figma/intro-generated.mp4" },
      { title: "Tone and direction", phase: "Process", type: "image", src: "/figma/archive-003.jpg" },
      { title: "Campaign texture", phase: "Process", type: "image", src: "/figma/archive-004.jpg" },
      { title: "Identity system", phase: "Finished system", type: "image", src: "/figma/service-0.png" },
      { title: "Art direction", phase: "Finished system", type: "image", src: "/figma/service-1.png" },
      { title: "Strategy moments", phase: "Finished system", type: "image", src: "/figma/service-2.png" },
      { title: "Campaign rollout", phase: "Finished system", type: "image", src: "/figma/service-3.png" },
      { title: "Applied materials", phase: "Finished system", type: "image", src: "/figma/service-4.png" },
      { title: "Digital presence", phase: "Finished system", type: "image", src: "/figma/service-5.png" },
      { title: "System in motion", phase: "Finished system", type: "video", src: "/figma/intro-generated.mp4" },
    ],
  },
  "grit": {
    title: "G.R.I.T.",
    eyebrow: "Project gallery",
    description:
      "A raw, high-impact collection of community visual guidelines, apparel print studies, and industrial design elements.",
    backHref: "/works/grit",
    items: [
      { title: "Raw structural textures", phase: "Process", type: "image", src: "/figma/archive-005.jpg" },
      { title: "Community guidelines", phase: "Process", type: "image", src: "/figma/archive-006.jpg" },
      { title: "Motion experiments", phase: "Process", type: "video", src: "/figma/intro-generated.mp4" },
      { title: "Typography lockups", phase: "Finished system", type: "image", src: "/figma/service-1.png" },
      { title: "Streetwear graphics", phase: "Finished system", type: "image", src: "/figma/archive-007.jpg" },
      { title: "Print publication zine", phase: "Finished system", type: "image", src: "/figma/archive-008.jpg" },
    ],
  },
  "zcash-me": {
    title: "Zcash.me",
    eyebrow: "Project gallery",
    description:
      "Stark dark-mode layouts, interactive payment flows, and micro-animations designed for Gen-Z finance.",
    backHref: "/works/zcash-me",
    items: [
      { title: "Sitemap and UX wires", phase: "Process", type: "image", src: "/figma/archive-003.jpg" },
      { title: "Color palette test", phase: "Process", type: "image", src: "/figma/archive-004.jpg" },
      { title: "Interactive flow", phase: "Finished system", type: "video", src: "/figma/intro-generated.mp4" },
      { title: "Main transactions screen", phase: "Finished system", type: "image", src: "/figma/service-5.png" },
      { title: "Peer-to-peer widget", phase: "Finished system", type: "image", src: "/figma/archive-002.png" },
    ],
  },
  "luxury-lofts": {
    title: "Luxury Lofts",
    eyebrow: "Project gallery",
    description:
      "Bespoke, media-rich editorial booking layout designs paired with elegant unboxing artifacts.",
    backHref: "/works/luxury-lofts",
    items: [
      { title: "Architectural references", phase: "Process", type: "image", src: "/figma/archive-007.jpg" },
      { title: "Cardboard paper unboxing", phase: "Process", type: "image", src: "/figma/archive-008.jpg" },
      { title: "Digital layout prototype", phase: "Finished system", type: "image", src: "/figma/service-4.png" },
      { title: "Guest check-in suite", phase: "Finished system", type: "image", src: "/figma/archive-001.jpg" },
    ],
  },
  "owa": {
    title: "OWA",
    eyebrow: "Project gallery",
    description:
      "Hand-drawn organic patterns, heritage terracotta color systems, and modern Parisian runways.",
    backHref: "/works/owa",
    items: [
      { title: "Cultural moodboard", phase: "Process", type: "image", src: "/figma/archive-001.jpg" },
      { title: "Indigo dye swatches", phase: "Process", type: "image", src: "/figma/archive-005.jpg" },
      { title: "Embroidery pattern tests", phase: "Process", type: "image", src: "/figma/archive-006.jpg" },
      { title: "Finished fashion brand mark", phase: "Finished system", type: "image", src: "/figma/service-0.png" },
      { title: "Editorial photography series", phase: "Finished system", type: "image", src: "/figma/archive-002.png" },
    ],
  },
  "manjala-culture": {
    title: "Manjala Culture",
    eyebrow: "Project gallery",
    description:
      "A modular, grid-centric publishing system rendering fine art and West African narratives with rhythmic typography.",
    backHref: "/works/manjala-culture",
    items: [
      { title: "Street culture archiving", phase: "Process", type: "image", src: "/figma/archive-002.png" },
      { title: "Rhythm and grids study", phase: "Process", type: "image", src: "/figma/archive-003.jpg" },
      { title: "Launch campaign motion", phase: "Process", type: "video", src: "/figma/intro-generated.mp4" },
      { title: "Brand strategy layouts", phase: "Finished system", type: "image", src: "/figma/service-2.png" },
      { title: "Heavy grotesque typesetting", phase: "Finished system", type: "image", src: "/figma/archive-008.jpg" },
    ],
  },
  "ivealth": {
    title: "Ivealth",
    eyebrow: "Project gallery",
    description:
      "Soft sage-green investment dashboards and clean SVG visualizers that make wealth building intuitive.",
    backHref: "/works/ivealth",
    items: [
      { title: "User persona studies", phase: "Process", type: "image", src: "/figma/archive-004.jpg" },
      { title: "Clean dashboard layouts", phase: "Finished system", type: "image", src: "/figma/service-5.png" },
      { title: "Financial education cards", phase: "Finished system", type: "image", src: "/figma/archive-003.jpg" },
    ],
  },
  "retrorave-festivals": {
    title: "Retrorave Festivals",
    eyebrow: "Project gallery",
    description:
      "Acid-pink gradients overlaying heavy glitch-text grids and dynamic offline print rollouts.",
    backHref: "/works/retrorave-festivals",
    items: [
      { title: "Analog Xerox scan testing", phase: "Process", type: "image", src: "/figma/archive-006.jpg" },
      { title: "Neon gradient spectrums", phase: "Process", type: "image", src: "/figma/archive-007.jpg" },
      { title: "Main campaign graphic", phase: "Finished system", type: "image", src: "/figma/service-3.png" },
      { title: "Offline giant print posters", phase: "Finished system", type: "image", src: "/figma/archive-005.jpg" },
      { title: "Stage motion visuals", phase: "Finished system", type: "video", src: "/figma/intro-generated.mp4" },
    ],
  },
} as const;

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectGalleryPage({ params }: Props) {
  const { slug } = await params;
  const gallery = GALLERIES[slug as keyof typeof GALLERIES];
  if (!gallery) notFound();

  return (
    <div className="relative flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4">
          <div className="flex flex-1 items-center">
            <Link
              href={gallery.backHref}
              className="flex items-center gap-3 rounded-full border-2 border-divider px-4 py-2 text-[clamp(0.875rem,1.5vw,1.125rem)] font-normal leading-tight transition-opacity hover:opacity-70"
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
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>back to project</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Link
              href="/"
              className="text-[clamp(1.25rem,2.5vw,2.375rem)] font-extrabold uppercase leading-[1] tracking-[-0.6px] text-foreground"
            >
              NIUM©
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <MexicoCityClock />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-[1920px] flex-col gap-10 px-5 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="flex flex-col gap-4">
            <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted">
              {gallery.eyebrow}
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em]">
                {gallery.title}
              </h1>
              <p className="max-w-2xl text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-normal tracking-[-0.64px] text-foreground">
                {gallery.description}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gallery.items.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`group flex flex-col gap-4 ${
                  index === 0 || index === 7 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card">
                  {item.type === "video" ? (
                    <video
                      className="h-full w-full object-cover"
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted">
                      {item.phase}
                    </p>
                    <h2 className="text-[clamp(1.35rem,2vw,2.25rem)] font-medium uppercase leading-none tracking-[-1.2px]">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
