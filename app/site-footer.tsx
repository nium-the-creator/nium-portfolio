import { SOCIAL_LINKS } from "@/lib/contact-links";

type SiteFooterProps = {
  id?: string;
  /** Smaller type scale to match the works page footer in Figma */
  compact?: boolean;
};

export function SiteFooter({ id = "contact", compact }: SiteFooterProps) {
  const linkClass = compact
    ? "text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground transition-opacity hover:opacity-65"
    : "text-[19px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground transition-opacity hover:opacity-65";
  const headingClass = compact
    ? "flex flex-wrap gap-x-2 text-[clamp(1.75rem,4vw,2.4rem)] font-semibold uppercase leading-none tracking-[-3.12px] text-foreground"
    : "flex flex-wrap gap-x-2 text-[clamp(2rem,5vw,2.75rem)] font-semibold uppercase leading-10 tracking-[-3.2px] text-foreground";
  const copyClass = compact
    ? "text-[15px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground"
    : "text-[19px] font-normal uppercase leading-[18px] tracking-[-0.6px] text-foreground";

  return (
    <footer
      id={id}
      className="mt-auto bg-background section-top section-bottom"
      data-reveal
    >
      <div className="page-shell space-y-8">
        <h2 className={headingClass}>
          <span>Get</span>
          <span>in</span>
          <span>touch</span>
        </h2>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <nav
            className="flex flex-wrap gap-x-6 gap-y-4"
            aria-label="Social links"
          >
            {SOCIAL_LINKS.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkClass}
                  {...(external
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <p className={copyClass}>©2026</p>
        </div>
      </div>
    </footer>
  );
}
