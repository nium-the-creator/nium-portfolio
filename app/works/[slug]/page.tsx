import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../site-footer";
import { MexicoCityClock } from "../../mexico-city-clock";

type RealityShot = {
  title: string;
  src: string;
  alt: string;
  layout?: "large" | "wide" | "tall" | "standard";
  objectPosition?: string;
};

const PROJECTS_DATA = {
  "the-clarity-table": {
    title: "The Clarity Table",
    summary: "Where clarity begins",
    services: ["Brand Identity Design", "Brand Strategy"],
    client: "Oaihimire Osezua",
    location: "Benin, Nigeria",
    year: "2026",
    credits: "nil",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/the-clarity-table/gallery",
    info: "The Clarity Table is a faith-rooted podcast for young adults navigating personal development, discipline, and intentional living. I developed the brand strategy, identity, and campaign for a space where people hear real conversations from voices their own age - grounded in a God-centered approach.",
    heroImage:
      "/figma/the-clarity-table/Banner Image.png",
    quote: "Clarity for the raging mind-the calm",
    quoteBody:
      "A faith-rooted podcast identity shaped around honest conversations, practical growth, and a visual system that feels youthful without losing spiritual depth.",
    challengeLabel: "The Search",
    challenge:
      "Osezua came with a vision: a podcast that held space for young adults asking real questions about growth, faith, and how to live with intention. The audience - teens and young adults - needed to see themselves in the brand. It had to feel vibrant and contemporary without losing the spiritual weight behind it. The challenge was building an identity that could carry both the energy of youth culture and the grounded wisdom of a God-centered worldview.",
    howAddressedLabel: "The Table",
    howAddressed:
      "I developed a brand strategy and identity that positioned The Clarity Table as a gathering - not just a show. Drawing from the Proverbs principle of counsel, the visual and verbal language was built to feel like an invitation to sit down, speak freely, and leave with something. The campaign extended this into how the podcast would show up in the world - creating a consistent presence that could speak directly to a generation hungry for honest, faith-rooted conversation.",
    relatedProjects: [
      {
        title: "G.R.I.T.",
        slug: "/works/grit",
        description:
          "Built to move — a brand for those who won't stop regardless",
      },
      {
        title: "MANJALA CULTURE",
        slug: "/works/manjala-culture",
        description:
          "Built from culture, made to move",
      },
      {
        title: "Zcash.me",
        slug: "/works/zcash-me",
        description:
          "Designed on a dare — clarity for a product that deserved to be understood",
      },
    ],
  },
  "grit": {
    title: "G.R.I.T.",
    summary: "Built to move — a brand for those who won't stop regardless",
    services: ["Brand Identity Design", "Brand Strategy", "Social Media Design"],
    client: "The G.R.I.T. Community",
    location: "Nigeria",
    year: "2026",
    credits: "Dynamic",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/grit/gallery",
    info: "G.R.I.T. is an undergraduate community built on Growth, Resilience, Intentionality, Tenacity, and Community. As Design Co-Lead, I led the brand identity, palette, typography, and ideation — extending the visual language into social media graphics for their podcast and their very first cohort.",
    heroImage:
      "/figma/service-1.png",
    quote: "Built to move",
    quoteBody:
      "A brand for those who won't stop regardless.",
    challengeLabel: "The Raw Material",
    challenge:
      "G.R.I.T. had the philosophy, the people, and the conviction. What they didn't yet have was a visual identity strong enough to carry it. Their audience — undergraduates — needed to see a community that looked as serious as the commitment it was asking of them. The brand had to communicate grit in the truest sense: not polished for its own sake, but purposeful, bold, and built to push people forward.",
    howAddressedLabel: "The Work",
    howAddressed:
      "Volunteering as Design Co-Lead, my co-lead and I built the brand together — ideas shared, directions debated, decisions made as a unit. I took the lead on the main logo concept, ideation, palette development, and typography, while she drove the campaigns and laid down the social media visual framework and templates that now define how G.R.I.T. shows up online. Together, we extended the identity into graphics for their podcast and their very first cohort — giving the community a face that matched the movement they were building. One that says, without apology: Move Forward. Regardless.",
    relatedProjects: [
      {
        title: "THE CLARITY TABLE",
        slug: "/works/the-clarity-table",
        description:
          "Where clarity begins",
      },
      {
        title: "RETRORAVE FESTIVALS",
        slug: "/works/retrorave-festivals",
        description:
          "Past sounds. Future nights.",
      },
      {
        title: "MANJALA CULTURE",
        slug: "/works/manjala-culture",
        description:
          "Built from culture, made to move",
      },
    ],
  },
  "zcash-me": {
    title: "Zcash.me",
    summary: "Designed on a dare — clarity for a product that deserved to be understood",
    services: ["UX Design"],
    client: "Zcash.me",
    location: "—",
    year: "2026",
    credits: "nil",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/zcash-me/gallery",
    info: "Zcash.me is a link-in-bio directory tool built for the Zcash ecosystem — a space where users create profile pages, verify their socials, and transfer ZEC. When the founder put out an open call on Twitter for designers to take a shot at reimagining the website, I took it. I won. The redesign covered the full website, built around one goal — making it immediately clear what Zcash.me is and what people are actually doing there.",
    heroImage:
      "/figma/service-5.png",
    quote: "Designed on a dare",
    quoteBody:
      "Clarity for a product that deserved to be understood",
    challengeLabel: "The Gap",
    challenge:
      "Zcash.me had a product worth knowing about. The website wasn't doing it justice. Pages sat without content, the landing page said little about what the platform actually was, and there was no about section to orient a first-time visitor. Someone could land on the page, scroll through it, and still leave without understanding what Zcash.me was or why it mattered. The founder saw it too — and put out an open call on Twitter for designers and developers to take their best shot at a redesign.",
    howAddressedLabel: "The Redesign",
    howAddressed:
      "I took the challenge as seriously as any client brief. My approach was grounded in one question — what does a first-time visitor need to know, and how quickly can the design tell them? I restructured the full website around clarity and orientation, filling the content gaps, building out an about section, and redesigning the landing page to actually communicate what Zcash.me is and what people are doing on it. No assumptions, no jargon — just a cleaner, more honest presentation of a product that already had something to say. The founder agreed. I won the challenge.",
    relatedProjects: [
      {
        title: "IVEALTH",
        slug: "/works/ivealth",
        description:
          "Invest with everyday clarity",
      },
      {
        title: "LUXURY LOFTS",
        slug: "/works/luxury-lofts",
        description:
          "Elevated living, quietly refined",
      },
      {
        title: "G.R.I.T.",
        slug: "/works/grit",
        description:
          "Built to move — a brand for those who won't stop regardless",
      },
    ],
  },
  "luxury-lofts": {
    title: "Luxury Lofts",
    summary: "Elevated living, quietly refined",
    services: [
      "Brand Identity Design",
      "Brand Strategy",
      "Marketing Collateral",
      "Art Direction",
    ],
    client: "Luxury Lofts",
    location: "Rivers, Nigeria",
    year: "2026",
    credits: "nil",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/luxury-lofts/gallery",
    info: "Luxury Lofts is a premium shortlet apartment brand built for the discerning traveler. I developed their brand identity from scratch — crafting a visual direction rooted in Modern Glam and Luxury Minimalism that translated seamlessly across logo, color, typography, and social media materials. A brand built to look and feel exactly like what it promises. *Where luxury lives.*",
    heroImage:
      "/figma/service-4.png",
    quote: "Polished from the ground up",
    quoteBody:
      "An identity as refined as the space itself",
    challengeLabel: "The Address",
    challenge:
      "Luxury Lofts had the product — premium shortlet apartments with interiors that spoke for themselves. What they didn't yet have was a brand to match. Coming in with no existing identity, they needed to be built from scratch in a way that communicated professionalism and polish immediately. In a market where trust is everything and first impressions are made before a guest ever steps through the door, the brand had to do serious work.",
    howAddressedLabel: "The Interior",
    howAddressed:
      "Working remotely, I developed the full brand identity — taking my cue directly from the spaces Luxury Lofts curated. The visual direction drew from Modern Glam and Luxury Minimalism, mirroring the aesthetic language of their apartment interiors and translating it into a cohesive brand system. The logo, color palette, and typography were each considered as a whole — nothing loud, nothing accidental, everything intentional. Social media materials extended the system into how the brand would show up and speak daily. It was my first real estate project, and watching an entire visual direction come together across every touchpoint — remotely — was something else entirely. *Where luxury lives.*",
    relatedProjects: [
      {
        title: "OWA",
        slug: "/works/owa",
        description:
          "Culture in every curve",
      },
      {
        title: "Zcash.me",
        slug: "/works/zcash-me",
        description:
          "Designed on a dare — clarity for a product that deserved to be understood",
      },
      {
        title: "IVEALTH",
        slug: "/works/ivealth",
        description:
          "Invest with everyday clarity",
      },
    ],
  },
  "owa": {
    title: "OWA",
    summary: "Culture in every curve",
    services: ["Brand Identity Design", "Campaign Management"],
    client: "Owa Fashion House",
    location: "Paris, France",
    year: "2025",
    credits: "Daniel M. Photography",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/owa/gallery",
    info: "An avant-garde fashion brand blending West African textile heritage with contemporary European silhouettes. The brand identity design employs hand-drawn logo marks, rich earthy color palettes (terracotta, deep indigo), and editorial print campaigns.",
    heroImage:
      "/figma/service-0.png",
    quote: "Heritage woven into modern threads",
    quoteBody:
      "An identity that honors African storytelling traditions while occupying space in premium global fashion capitals with pride, elegance, and graphic clarity.",
    challengeLabel: "The Fusion",
    challenge:
      "Ethnic heritage brands are often pigeonholed into overly traditional or tourist-focused aesthetics. OWA needed to command respect on the Parisian runways, standing side-by-side with heritage European luxury houses, while proudly and authentically retaining its cultural roots.",
    howAddressedLabel: "The Thread",
    howAddressed:
      "We designed a hybrid serif wordmark that subtly integrates organic textile patterns into the letterforms. The campaign rollout involved a series of high-contrast editorial photography layouts and high-tactility hangtags utilizing embossed indigo papers.",
    relatedProjects: [
      {
        title: "LUXURY LOFTS",
        slug: "/works/luxury-lofts",
        description:
          "Elevated living, quietly refined",
      },
      {
        title: "MANJALA CULTURE",
        slug: "/works/manjala-culture",
        description:
          "Built from culture, made to move",
      },
      {
        title: "THE CLARITY TABLE",
        slug: "/works/the-clarity-table",
        description:
          "Where clarity begins",
      },
    ],
  },
  "manjala-culture": {
    title: "Manjala Culture",
    summary: "Built from culture, made to move",
    services: ["Art Direction", "Brand Strategy"],
    client: "Manjala Culture Studio",
    location: "Lagos, Nigeria",
    year: "2025",
    credits: "Babtech Computers Co.",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/manjala-culture/gallery",
    info: "Manjala Culture is a cultural research and design agency that shapes how contemporary African narratives are documented and shared. The design strategy emphasizes bold archiving, raw typography, and modular editorial grids that feel both historic and highly futuristic.",
    heroImage:
      "/figma/service-2.png",
    quote: "Documenting the present to shape the future",
    quoteBody:
      "A radical publishing and brand system designed to give visual weight, rhythm, and clarity to contemporary stories coming out of West Africa.",
    challengeLabel: "The Narrative",
    challenge:
      "African design is incredibly diverse, yet globally it is often flattened into generic cliches. Manjala needed an identity that was highly flexible, enabling it to act as an archival host for fine art, music, street culture, and fashion without overshadowing the stories themselves.",
    howAddressedLabel: "The Frame",
    howAddressed:
      "We built a modular, grid-centric brand strategy. The brand operates with an ultra-minimal black-and-white frame system that allows high-chroma imagery to pop, combined with custom heavy grotesque typefaces that give editorial layouts a commanding, authoritative presence.",
    relatedProjects: [
      {
        title: "G.R.I.T.",
        slug: "/works/grit",
        description:
          "Built to move — a brand for those who won't stop regardless",
      },
      {
        title: "OWA",
        slug: "/works/owa",
        description:
          "Culture in every curve",
      },
      {
        title: "RETRORAVE FESTIVALS",
        slug: "/works/retrorave-festivals",
        description:
          "Past sounds. Future nights.",
      },
    ],
  },
  "ivealth": {
    title: "Ivealth",
    summary: "Invest with everyday clarity",
    services: ["UI/UX", "Brand Identity Design"],
    client: "Ivealth Group",
    location: "Delaware, USA",
    year: "2026",
    credits: "Babtech Solutions",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/ivealth/gallery",
    info: "A modern investment portal designed to make fractional stock and asset ownership accessible to young professionals. The design features soft green gradients, clean financial dashboards, and educational modules that demystify asset allocation.",
    heroImage:
      "/figma/service-5.png",
    quote: "Wealth building, made beautifully clear",
    quoteBody:
      "A user-centric fintech interface that replaces stressful spreadsheets with fluid interactive charts, helping everyday people invest with confidence.",
    challengeLabel: "The Intimidation",
    challenge:
      "Investing is inherently intimidating and carries a steep learning curve. Existing retail investment platforms are either oversimplified (treating trading like a casino) or cluttered with institutional terminal interfaces. We needed to create a calm, educational, yet highly precise dashboard.",
    howAddressedLabel: "The Oasis",
    howAddressed:
      "We established a calming design language called 'Financial Oasis'—using premium sage green, warm cream backdrops, and soft rounded widgets. The dashboard utilizes high-clarity SVG visualizers that render portfolio metrics in beautiful, interactive charts.",
    relatedProjects: [
      {
        title: "Zcash.me",
        slug: "/works/zcash-me",
        description:
          "Designed on a dare — clarity for a product that deserved to be understood",
      },
      {
        title: "LUXURY LOFTS",
        slug: "/works/luxury-lofts",
        description:
          "Elevated living, quietly refined",
      },
      {
        title: "THE CLARITY TABLE",
        slug: "/works/the-clarity-table",
        description:
          "Where clarity begins",
      },
    ],
  },
  "retrorave-festivals": {
    title: "Retrorave Festivals",
    summary: "Past sounds. Future nights.",
    services: [
      "Brand Identity Design",
      "Brand Strategy",
      "Campaign Development",
      "Creative Direction",
    ],
    client: "Retrorave Festivals",
    location: "Lagos, Nigeria",
    year: "2026",
    credits: "Mascot Illustration — Artgod\nPoster Design (Kaz's Compound) — Vax",
    identitySystems: true,
    liveSiteUrl: "#",
    galleryUrl: "/works/retrorave-festivals/gallery",
    info: "Retrorave Festivals is an entertainment brand built on a simple but powerful truth — old isn't boring, it's a lifestyle. A proof of time. Of lived experiences that refuse to be forgotten. I led the rebrand, building a full brand strategy, identity, and campaign system for a party experience that brings young people of diverse backgrounds together through retro culture, music, art, and fashion. The kind of brand that doesn't just throw parties — it creates a world you want to keep coming back to. Party like it's yesterday.",
    heroImage:
      "/figma/service-3.png",
    quote: "The old made electric",
    quoteBody:
      "A brand for those who never forgot the feeling",
    challengeLabel: "The Frequency",
    challenge:
      "Retrorave Festivals had something most brands spend years trying to manufacture — a genuine point of view. In a party scene where events blur into one another and every flyer looks the same, they were sitting on a lane entirely their own: a space for young people who felt unseen by the current wave. The old souls. The ones who knew every lyric to songs that came before them. The ones who showed up to parties and left feeling nothing.\n\nBut a point of view without the right brand to carry it is just an idea. Retrorave needed a rebrand that could do the vision justice — an identity strong enough to travel across cities, translate across different crowds and venues, and still land with the same feeling every single time. The challenge wasn't just aesthetic. It was building a universe.",
    howAddressedLabel: "The Set",
    howAddressed:
      "I led the rebrand from the ground up — developing the brand strategy, visual identity, and creative direction with one anchor: the tension between nostalgia and now. The goal was never to recreate the past. It was to take what the past felt like and make it electric for the present. The visual language had to feel timeless but alive — pulling deeply from retro culture without becoming a costume of it.\n\nCollaboration was central to the process. Working with Artgod, we developed a mascot that gave Retrorave a face — a character with enough personality to anchor the entire universe and show up consistently across touchpoints. The brand now had something to rally around.\n\nFrom there, the work extended into campaigns for individual events — each one given its own world while staying unmistakably Retrorave. Vibe Rush brought the energy to Adeleke University in Ede as a fresher's party, meeting a new audience exactly where they were. Kaz's Compound took it to Flow Lounge in Wuse II, Abuja — a more intimate, charged night with Vax contributing poster design that held its own within the broader visual system.\n\nEvery event. Its own world. Every world. Unmistakably Retrorave. Party like it's yesterday.",
    relatedProjects: [
      {
        title: "MANJALA CULTURE",
        slug: "/works/manjala-culture",
        description:
          "Built from culture, made to move",
      },
      {
        title: "G.R.I.T.",
        slug: "/works/grit",
        description:
          "Built to move — a brand for those who won't stop regardless",
      },
      {
        title: "Zcash.me",
        slug: "/works/zcash-me",
        description:
          "Designed on a dare — clarity for a product that deserved to be understood",
      },
    ],
  },
} as const;

type ProjectSlug = keyof typeof PROJECTS_DATA;

const DEFAULT_REALITY_SHOTS: RealityShot[] = [
  {
    title: "Hero application",
    src: "/figma/service-0.png",
    alt: "Brand application image",
    layout: "large",
  },
  {
    title: "Campaign detail",
    src: "/figma/archive-001.jpg",
    alt: "Campaign detail image",
    layout: "tall",
  },
  {
    title: "Visual system",
    src: "/figma/service-1.png",
    alt: "Visual system image",
  },
  {
    title: "Texture study",
    src: "/figma/archive-003.jpg",
    alt: "Texture study image",
  },
  {
    title: "Applied touchpoint",
    src: "/figma/service-4.png",
    alt: "Applied touchpoint image",
    layout: "wide",
  },
  {
    title: "Digital moment",
    src: "/figma/service-5.png",
    alt: "Digital moment image",
    layout: "tall",
  },
  {
    title: "Campaign rollout",
    src: "/figma/service-3.png",
    alt: "Campaign rollout image",
  },
  {
    title: "Editorial direction",
    src: "/figma/archive-008.jpg",
    alt: "Editorial direction image",
  },
  {
    title: "Reference wall",
    src: "/figma/archive-002.png",
    alt: "Reference wall image",
    layout: "wide",
  },
  {
    title: "Brand atmosphere",
    src: "/figma/archive-005.jpg",
    alt: "Brand atmosphere image",
  },
];

const REALITY_SHOTS: Partial<Record<ProjectSlug, RealityShot[]>> = {
  "the-clarity-table": [
    {
      title: "Concept study",
      src: "/figma/the-clarity-table/1.png",
      alt: "The Clarity Table concept study",
      layout: "large",
    },
    {
      title: "Brand identity system",
      src: "/figma/the-clarity-table/2.png",
      alt: "The Clarity Table brand identity system",
      layout: "tall",
    },
    {
      title: "Color and tone reference",
      src: "/figma/the-clarity-table/3.png",
      alt: "The Clarity Table color and tone reference",
    },
    {
      title: "Strategic visual details",
      src: "/figma/the-clarity-table/4.png",
      alt: "The Clarity Table strategic visual details",
    },
    {
      title: "Brand typography",
      src: "/figma/the-clarity-table/5.png",
      alt: "The Clarity Table brand typography",
    },
    {
      title: "Digital rollout layout",
      src: "/figma/the-clarity-table/6.png",
      alt: "The Clarity Table digital rollout layout",
      layout: "wide",
    },
    {
      title: "Platform design cues",
      src: "/figma/the-clarity-table/7.png",
      alt: "The Clarity Table platform design cues",
      layout: "tall",
    },
    {
      title: "Tactile elements",
      src: "/figma/the-clarity-table/8.png",
      alt: "The Clarity Table tactile elements",
    },
    {
      title: "Campaign strategy artwork",
      src: "/figma/the-clarity-table/9.png",
      alt: "The Clarity Table campaign strategy artwork",
    },
    {
      title: "Finished brand moments",
      src: "/figma/the-clarity-table/10.png",
      alt: "The Clarity Table finished brand moments",
      layout: "wide",
    },
  ],
  "grit": [
    {
      title: "Typography lockup",
      src: "/figma/service-1.png",
      alt: "G.R.I.T. community typography lockup",
      layout: "large",
    },
    {
      title: "Raw texture board",
      src: "/figma/archive-005.jpg",
      alt: "Raw grunge texture board for G.R.I.T.",
      layout: "tall",
    },
    {
      title: "Community guidelines",
      src: "/figma/archive-006.jpg",
      alt: "G.R.I.T. community brand guidelines sheet",
    },
    {
      title: "Streetwear graphics",
      src: "/figma/archive-007.jpg",
      alt: "G.R.I.T. streetwear print mockup",
      layout: "wide",
    },
    {
      title: "Zine layouts",
      src: "/figma/archive-008.jpg",
      alt: "G.R.I.T. publication layout details",
      layout: "tall",
    },
    {
      title: "Process notes",
      src: "/figma/archive-001.jpg",
      alt: "Design process notes for G.R.I.T.",
    },
  ],
  "zcash-me": [
    {
      title: "Transactions dashboard",
      src: "/figma/service-5.png",
      alt: "Zcash.me transactions dashboard screen",
      layout: "large",
    },
    {
      title: "Sitemap & UX wires",
      src: "/figma/archive-003.jpg",
      alt: "Zcash.me initial wireframes layout map",
      layout: "tall",
    },
    {
      title: "Color system test",
      src: "/figma/archive-004.jpg",
      alt: "Sleek dark mode color palette configuration",
    },
    {
      title: "Peer-to-peer widget",
      src: "/figma/archive-002.png",
      alt: "Zcash.me instant peer-to-peer transaction widget",
      layout: "wide",
    },
    {
      title: "Flow study",
      src: "/figma/archive-001.jpg",
      alt: "User interaction flow study",
    },
  ],
  "luxury-lofts": [
    {
      title: "Digital check-in suite",
      src: "/figma/service-4.png",
      alt: "Luxury Lofts web check-in application design",
      layout: "large",
    },
    {
      title: "Architectural detail",
      src: "/figma/archive-007.jpg",
      alt: "Luxury Lofts interior architectural cues",
      layout: "tall",
    },
    {
      title: "Unboxing materials",
      src: "/figma/archive-008.jpg",
      alt: "Tactile unboxing paper assets",
      layout: "wide",
    },
    {
      title: "Guest suite mood",
      src: "/figma/archive-001.jpg",
      alt: "Luxury guest suite atmosphere board",
    },
    {
      title: "Clean stationery",
      src: "/figma/archive-003.jpg",
      alt: "Minimalist brand stationery overview",
    },
  ],
  "owa": [
    {
      title: "Parisian runway",
      src: "/figma/archive-002.png",
      alt: "OWA runway look editorial graphic",
      layout: "large",
    },
    {
      title: "Cultural board",
      src: "/figma/archive-001.jpg",
      alt: "West African textile culture moodboard",
      layout: "tall",
    },
    {
      title: "Indigo dye swatches",
      src: "/figma/archive-005.jpg",
      alt: "Indigo color dye swatches",
    },
    {
      title: "Fashion mark concept",
      src: "/figma/service-0.png",
      alt: "OWA fashion mark concept typography",
      layout: "wide",
    },
    {
      title: "Pattern tests",
      src: "/figma/archive-006.jpg",
      alt: "Organic fabric pattern test blocks",
    },
  ],
  "manjala-culture": [
    {
      title: "Brand strategy pages",
      src: "/figma/service-2.png",
      alt: "Manjala Culture brand strategy book page",
      layout: "large",
    },
    {
      title: "Street archiving",
      src: "/figma/archive-002.png",
      alt: "Street culture visual archiving detail",
      layout: "tall",
    },
    {
      title: "Grids & structures",
      src: "/figma/archive-003.jpg",
      alt: "Visual rhythm and grids study layout",
    },
    {
      title: "Grotesque type study",
      src: "/figma/archive-008.jpg",
      alt: "Custom heavy grotesque type pairing study",
      layout: "wide",
    },
    {
      title: "Textured reference",
      src: "/figma/archive-001.jpg",
      alt: "Print texture study",
    },
  ],
  "ivealth": [
    {
      title: "Investment dashboard UI",
      src: "/figma/service-5.png",
      alt: "Ivealth asset-allocation dashboard UI screen",
      layout: "large",
    },
    {
      title: "User research maps",
      src: "/figma/archive-004.jpg",
      alt: "Ivealth user journey and persona maps",
      layout: "tall",
    },
    {
      title: "Wealth-building cards",
      src: "/figma/archive-003.jpg",
      alt: "Educational fractional ownership cards",
      layout: "wide",
    },
    {
      title: "Visual guidelines",
      src: "/figma/archive-002.png",
      alt: "Fintech interface graphic assets",
    },
  ],
  "retrorave-festivals": [
    {
      title: "Main campaign graphic",
      src: "/figma/service-3.png",
      alt: "Retrorave main campaign key art graphic",
      layout: "large",
    },
    {
      title: "Analog Xerox textures",
      src: "/figma/archive-006.jpg",
      alt: "Xerox scanned analog print textures",
      layout: "tall",
    },
    {
      title: "Poster installations",
      src: "/figma/archive-005.jpg",
      alt: "Offline street poster print installations",
      layout: "wide",
    },
    {
      title: "Neon spectrum studies",
      src: "/figma/archive-007.jpg",
      alt: "Glow details and neon spectrum color maps",
    },
    {
      title: "Retro typography logo",
      src: "/figma/archive-002.png",
      alt: "Logo design inspired by retro club visuals",
    },
  ],
};

function getProjectFromHref(href: string) {
  const slug = href.replace(/^\/works\//, "");
  return slug in PROJECTS_DATA ? PROJECTS_DATA[slug as ProjectSlug] : undefined;
}

function getBentoClass(layout: RealityShot["layout"]) {
  switch (layout) {
    case "large":
      return "md:col-span-2 md:row-span-2";
    case "wide":
      return "md:col-span-2";
    case "tall":
      return "md:row-span-2";
    default:
      return "";
  }
}

type Props = { params: Promise<{ slug: string }> };

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS_DATA[slug as keyof typeof PROJECTS_DATA];
  if (!project) notFound();
  const realityShots =
    REALITY_SHOTS[slug as ProjectSlug] ?? DEFAULT_REALITY_SHOTS;

  return (
    <div className="relative flex min-h-full flex-col bg-background text-foreground">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
        <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4">
          {/* Back button */}
          <div className="flex flex-1 items-center">
            <Link
              href="/works"
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
              <span>back to works</span>
            </Link>
          </div>

          {/* Logo center */}
          <div className="flex flex-1 items-center justify-center">
            <Link
              href="/"
              className="text-[clamp(1.25rem,2.5vw,2.375rem)] font-extrabold uppercase leading-[1] tracking-[-0.6px] text-foreground"
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
            <h1 className="flex flex-wrap gap-x-2 text-[clamp(2.5rem,6vw,4.5rem)] font-medium uppercase leading-[0.88] tracking-[-5.12px] text-foreground">
              {project.title.split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </h1>
            <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium tracking-[-0.64px] text-muted">
              {project.summary}
            </p>
          </div>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1872/480" }}>
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
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
                  <p key={s} className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-foreground">
                    {s}
                  </p>
                ))}
              </DetailGroup>

              <DetailGroup label="Client">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-foreground">
                  {project.client}
                </p>
              </DetailGroup>

              <DetailGroup label="Location">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-foreground">
                  {project.location}
                </p>
              </DetailGroup>

              <DetailGroup label="Year">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-foreground">
                  {project.year}
                </p>
              </DetailGroup>

              <DetailGroup label="Credits and contributions">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-light leading-[2.5rem] tracking-[-0.64px] text-foreground whitespace-pre-line">
                  {project.credits}
                </p>
              </DetailGroup>
            </div>

            {/* Right column: info + link */}
            <div className="flex flex-1 flex-col gap-10">
              <DetailGroup label="Info">
                <p className="text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-[2.5rem] tracking-[-0.64px] text-foreground">
                  {project.info}
                </p>
              </DetailGroup>

              {project.identitySystems && (
                <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-normal uppercase leading-[2rem] tracking-[-0.6px] text-muted">
                  Identity Systems
                </p>
              )}

              <a
                href={project.liveSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[clamp(1rem,1.5vw,1.5625rem)] font-medium leading-tight tracking-[-0.64px] text-accent underline decoration-solid transition-opacity hover:opacity-65"
              >
                See live project
              </a>
            </div>
          </div>
        </section>

        {/* Accent steel-blue section */}
        <section className="bg-accent py-20 text-foreground">
          {/* Quote */}
          <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-8 px-10 pb-20 md:flex-row md:items-start md:gap-8">
            <h2 className="max-w-[494px] shrink-0 text-[clamp(1.75rem,3.5vw,3.0625rem)] font-bold leading-normal text-white">
              {project.quote}
            </h2>
            <p className="flex-1 text-[clamp(1.125rem,2.5vw,2rem)] font-normal leading-[50px] text-white opacity-85">
              {project.quoteBody}
            </p>
          </div>

          {/* Challenge + How I addressed it */}
          <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-12 px-10 pb-20 md:flex-row md:gap-12">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-extrabold uppercase leading-[2rem] tracking-[-0.6px] text-foreground">
                {project.challengeLabel}
              </p>
              <p className="text-[clamp(1rem,2vw,2rem)] font-medium leading-[50px] tracking-[-0.64px] text-white whitespace-pre-line">
                {project.challenge}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-extrabold uppercase leading-[2rem] tracking-[-0.6px] text-foreground">
                {project.howAddressedLabel}
              </p>
              <p className="text-[clamp(1rem,2vw,2rem)] font-medium leading-[50px] tracking-[-0.64px] text-white whitespace-pre-line">
                {project.howAddressed}
              </p>
            </div>
          </div>

          {/* In the wild gallery - redesigned to slate bg-card */}
          <div className="bg-card py-9">
            <div className="mx-auto mb-12 flex w-full max-w-[1920px] flex-col gap-6 px-10 text-foreground md:flex-row md:items-end md:justify-between">
              <p className="max-w-5xl text-center text-[clamp(1.5rem,3vw,3.0625rem)] font-semibold uppercase leading-none tracking-[-1.568px] md:text-left">
                {project.title === "The Clarity Table" ? "Clarity" : project.title} in Reality - The brand out in the wild!
              </p>
              <Link
                href={project.galleryUrl}
                className="w-fit shrink-0 text-[clamp(1rem,1.5vw,1.5625rem)] font-medium uppercase leading-tight tracking-[-0.64px] text-accent underline decoration-solid transition-opacity hover:opacity-70"
              >
                View gallery
              </Link>
            </div>
            <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-3 px-5 sm:grid-cols-2 md:auto-rows-[170px] md:grid-cols-4 md:gap-4 md:px-10 lg:auto-rows-[210px] xl:auto-rows-[250px]">
              {realityShots.map((shot, i) => (
                <figure
                  key={`${shot.title}-${i}`}
                  className={`group relative min-h-[260px] overflow-hidden rounded-2xl bg-background shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:min-h-0 ${getBentoClass(shot.layout)}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    style={{ objectPosition: shot.objectPosition ?? "center" }}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                    <span className="max-w-[16ch] text-[15px] font-medium uppercase leading-[1.05] tracking-[-0.4px] text-white">
                      {shot.title}
                    </span>
                    <span className="text-[13px] font-normal uppercase leading-none tracking-[-0.4px] text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* See more projects */}
        <section className="mx-auto w-full max-w-[1920px] px-5 pb-20 pt-24 md:pb-24 md:pt-40">
          <h2 className="mb-8 flex flex-wrap gap-x-2 text-[clamp(2rem,5vw,3.0625rem)] font-semibold uppercase leading-[2.5rem] tracking-[-3.2px] text-foreground">
            <span>See</span>
            <span>More</span>
            <span>projects</span>
          </h2>

          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex flex-1 flex-wrap gap-8 lg:gap-5">
              {project.relatedProjects.map((rp) => {
                const relatedProject = getProjectFromHref(rp.slug);

                return (
                  <Link
                    key={rp.title}
                    href={rp.slug}
                    className="group flex w-full flex-col gap-4 sm:w-[calc(50%-1rem)] lg:w-[clamp(200px,30%,500px)]"
                  >
                    <div className="aspect-[500/607] w-full rounded-2xl bg-card transition-opacity group-hover:opacity-85" />
                    <div className="flex items-center gap-2 px-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        className="shrink-0"
                        aria-hidden
                      >
                        <circle cx="11" cy="11" r="11" fill="var(--accent)" />
                        <path
                          d="M7 11h8M12 8l3 3-3 3"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-[clamp(1.25rem,2.5vw,2.1875rem)] font-medium leading-normal text-foreground">
                        {rp.title}
                      </span>
                    </div>
                    <p className="text-[clamp(1rem,2vw,1.875rem)] font-normal leading-normal text-muted">
                      {relatedProject?.summary ?? rp.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            <div className="flex shrink-0 items-center justify-center lg:self-stretch">
              <Link
                href="/works"
                className="text-center text-[clamp(1.5rem,2.5vw,2.0625rem)] font-medium uppercase leading-[1.05] text-foreground transition-opacity hover:opacity-65"
              >
                View all<br />projects
              </Link>
            </div>
          </div>

          <p className="mt-20 text-center text-[clamp(1.125rem,2vw,1.8125rem)] font-normal leading-[2.5rem] text-foreground">
            Loved this project? Let&apos;s make{" "}
            <span className="underline decoration-micro-accent decoration-wavy [text-underline-offset:4px]">
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
      <p className="text-[clamp(0.875rem,1.25vw,1.5rem)] font-normal uppercase leading-[2rem] tracking-[-0.6px] text-muted">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}
