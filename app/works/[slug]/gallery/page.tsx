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
      {
        title: "Discovery mood",
        phase: "Process",
        type: "image",
        src: "/figma/archive-001.jpg",
      },
      {
        title: "Visual references",
        phase: "Process",
        type: "image",
        src: "/figma/archive-002.png",
      },
      {
        title: "Motion exploration",
        phase: "Process",
        type: "video",
        src: "/figma/intro-generated.mp4",
      },
      {
        title: "Tone and direction",
        phase: "Process",
        type: "image",
        src: "/figma/archive-003.jpg",
      },
      {
        title: "Campaign texture",
        phase: "Process",
        type: "image",
        src: "/figma/archive-004.jpg",
      },
      {
        title: "Identity system",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-0.png",
      },
      {
        title: "Art direction",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-1.png",
      },
      {
        title: "Strategy moments",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-2.png",
      },
      {
        title: "Campaign rollout",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-3.png",
      },
      {
        title: "Applied materials",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-4.png",
      },
      {
        title: "Digital presence",
        phase: "Finished system",
        type: "image",
        src: "/figma/service-5.png",
      },
      {
        title: "System in motion",
        phase: "Finished system",
        type: "video",
        src: "/figma/intro-generated.mp4",
      },
    ],
  },
} as const;

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectGalleryPage({ params }: Props) {
  const { slug } = await params;
  const gallery = GALLERIES[slug as keyof typeof GALLERIES];
  if (!gallery) notFound();

  return (
    <div className="relative flex min-h-full flex-col bg-[#fafaf8] text-[#0f0f0f]">
      <header className="sticky top-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4">
          <div className="flex flex-1 items-center">
            <Link
              href={gallery.backHref}
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
              <span>back to project</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <Link
              href="/"
              className="text-[clamp(1.25rem,2.5vw,2.375rem)] font-extrabold uppercase leading-[1] tracking-[-0.6px] text-[#0f0f0f]"
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
            <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b]">
              {gallery.eyebrow}
            </p>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] font-medium uppercase leading-[0.9] tracking-[-0.06em]">
                {gallery.title}
              </h1>
              <p className="max-w-2xl text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-normal tracking-[-0.64px] text-[#0f0f0f]">
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e2e2e2]">
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
                    <p className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b]">
                      {item.phase}
                    </p>
                    <h2 className="text-[clamp(1.35rem,2vw,2.25rem)] font-medium uppercase leading-none tracking-[-1.2px]">
                      {item.title}
                    </h2>
                  </div>
                  <span className="text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-[#6b6b6b]">
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
