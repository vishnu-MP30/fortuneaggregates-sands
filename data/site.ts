// Fortune Aggregates and Sands — Site Content Data Source
// Business information, navigation, and client-approved copy.
// Items marked with // PLACEHOLDER await client confirmation.

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroCardData {
  title: string;
  caption: string;
  image: string; // PLACEHOLDER
  alt: string;
  href: string;
}

export interface StagePanelData {
  eyebrow: string;
  title: string;
  p1: string;
  p2: string;
  buttonText: string;
  buttonHref: string;
  watermark: "mountain" | "scale" | "truck";
  image: string; // PLACEHOLDER
  imageAlt: string;
}

export interface AudienceCustomerCard {
  number: string;
  title: string;
  body: string;
  subtitle?: string;
  specs?: string[];
  icon?: string;
}

export interface AudiencePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  icon: "consultants" | "architecture" | "management" | "infra" | "dealers";
}

export interface AudienceData {
  tag: string;
  headline: string;
  description: string;
  howItWorksCta: {
    label: string;
    href: string;
  };
  pillars: AudiencePillar[];
  cards: AudienceCustomerCard[];
  callout: {
    text: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  wordmarkSub: string;
  tagline: string;
  proprietor: string;
  contact: {
    email: string;
    phone: string;
    phoneRaw: string;
    whatsappUrl: string;
    whatsappQuoteUrl: string;
    address: string;
    addressShort: string;
    mapsUrl: string; // CONFIRM: replace with the client's Google Business Profile link.
    instagramUrl: string; // PLACEHOLDER
  };
  navigation: NavItem[];
  promises: string[];
  hero: {
    eyebrow: string;
    headline: {
      line1: string;
      line2: string;
      highlight: string;
    };
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    stripText: string;
    cards: HeroCardData[];
  };
  about: {
    sectionLabel: string;
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    leadParagraph?: string;
    approach?: {
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
    };
    company?: {
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
    };
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    checklist: string[];
    image: string;
    imageAlt: string;
    badgeText: string;
    coverageTitle: string;
    coverageSub: string;
  };
  stagePanels: StagePanelData[];
  audience: AudienceData;
}

export const siteConfig: SiteConfig = {
  name: "Fortune Aggregates and Sands",
  wordmark: "FORTUNE",
  wordmarkSub: "AGGREGATES AND SANDS",
  tagline: "Strength You Can Build On",
  proprietor: "Bibin Thomas",
  contact: {
    email: "fortuneaggregatesands@gmail.com",
    phone: "+91 84228 19302",
    phoneRaw: "+918422819302",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=918422819302",
    whatsappQuoteUrl: "https://api.whatsapp.com/send/?phone=918422819302&text=Hello%20Fortune%20Aggregates%2C%20I%20would%20like%20to%20request%20a%20quote.",
    address: "Sashtav Rd, Yedapadavu, Mangaluru, Karnataka – 574144",
    addressShort: "Sashtav Rd, Yedapadavu, Mangaluru – 574144",
    mapsUrl: "https://maps.google.com/?q=Sashtav+Rd,+Yedapadavu,+Mangaluru,+Karnataka+574144", // CONFIRM: replace with the client's Google Business Profile link.
    instagramUrl: "https://instagram.com/fortuneaggregatesands", // PLACEHOLDER
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Materials", href: "#materials" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  promises: [
    "Consistent grading: every load matches the grade on the challan.",
    "Reliable supply: delivered when committed. If we will be late, we call first.",
    "Honest weights & pricing: a weighbridge slip with every load. Rates stated in writing.",
    "Compliant, for the long term: licences, tax and records kept in order. We plan to be here.",
  ],
  hero: {
    eyebrow: "MANGALURU · COASTAL KARNATAKA",
    headline: {
      line1: "Built to Spec,",
      line2: "Every Single",
      highlight: "Load.",
    },
    description:
      "IS 383 graded blue metal, washed M-Sand, chips and GSB. Quarried, crushed and screened in-house, so what you order is exactly what arrives.",
    primaryCta: {
      label: "Request a Quote",
      href: "https://api.whatsapp.com/send/?phone=918422819302&text=Hello%20Fortune%20Aggregates%2C%20I%20would%20like%20to%20request%20a%20quote.",
    },
    secondaryCta: {
      label: "View Materials",
      href: "#materials",
    },
    stripText: "STRENGTH YOU CAN BUILD ON",
    cards: [
      {
        title: "20mm Blue Metal",
        caption: "RCC grade",
        image: "/images/mat-bluemetal.jpg", // PLACEHOLDER
        alt: "20mm graded blue metal aggregate for reinforced concrete",
        href: "#materials",
      },
      {
        title: "Manufactured Sand",
        caption: "Washed · silt-free",
        image: "/images/mat-msand.jpg", // PLACEHOLDER
        alt: "Washed manufactured sand for masonry and plastering",
        href: "#materials",
      },
    ],
  },
  about: {
    sectionLabel: "01 · BRAND FOUNDATION",
    eyebrow: "ONE QUARRY. ONE UNCOMPROMISING STANDARD.",
    headline: "The Power of Integrated Crushing",
    leadParagraph:
      "Combining multi-stage cone crushing, automated washing, and certified weighbridge dispatch to deliver aggregates with greater speed, certainty, and structural precision.",
    approach: {
      title: "APPROACH",
      description:
        "A quality-first crushing process that integrates every stage of quarry extraction into a certified system designed for precision grading, zero silt, and unyielding strength.",
      ctaLabel: "Learn more",
      ctaHref: "#process",
    },
    company: {
      title: "CAPABILITY",
      description:
        "Built around transparency and dependable dispatch, pairing in-house quarrying with certified laboratory testing to deliver audit-ready loads with confidence and clarity.",
      ctaLabel: "Learn more",
      ctaHref: "#services",
    },
    paragraphs: [
      "From initial earthwork to final structural concrete, our production team coordinates multi-stage cone crushing and precision screening to supply graded aggregates on schedule and strictly within specification.",
      "We manage every phase of aggregate production in-house at our Yedapadavu facility, pairing heavy crushing machinery with certified laboratory sieve testing. Every metric ton dispatched meets exact IS 383 grading criteria with transparent weighbridge documentation.",
    ],
    primaryCta: {
      label: "Discover More",
      href: "#materials",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "#contact",
    },
    checklist: [
      "Consistent IS 383 grading",
      "In-house weighbridge slips",
      "Washed & silt-free M-Sand",
      "On-time site dispatch",
      "Lab-tested crushing value",
      "Compliant mining licences",
    ],
    image: "/images/panel-quarry.jpg", // High-res natural quarry rock extraction shot
    imageAlt:
      "Natural basalt quarry rock extraction and heavy excavator loading stone at Yedapadavu facility",
    badgeText: "STRENGTH YOU CAN BUILD ON · FORTUNE AGGREGATES AND SANDS · ",
    coverageTitle: "COASTAL KARNATAKA DIRECT DISPATCH",
    coverageSub: "Mangaluru · Udupi · Bantwal · Moodbidri",
  },
  stagePanels: [
    {
      eyebrow: "Quarried and crushed",
      title: "From rock to graded stone",
      p1: "We quarry rock and crush it into aggregates at our base in Yedapadavu, Mangaluru, Karnataka. Operations are linked to Kerala, so we supply builders across the region.", // DRAFT
      p2: "Construction aggregates and manufactured sand, made in-house. [CONFIRM: grades]",
      buttonText: "Our Materials",
      buttonHref: "/materials",
      watermark: "mountain",
      image: "/images/panel-quarry.jpg", // PLACEHOLDER
      imageAlt: "Basalt rock extraction and heavy excavator loading stone at Yedapadavu quarry",
    },
    {
      eyebrow: "Washed and graded",
      title: "Graded to match the challan",
      p1: "We wash and grade every material, so each load matches the grade on the challan.", // client promise 1
      p2: "Tight, repeatable grading, batch after batch, so mix designs hold.", // client slide, RMC plants
      buttonText: "See Our Grades",
      buttonHref: "/materials",
      watermark: "scale",
      image: "/images/panel-grading.jpg", // PLACEHOLDER
      imageAlt: "Automated multi-deck vibrating screen and washing system sorting aggregates",
    },
    {
      eyebrow: "Delivered, load after load",
      title: "Weighed, written down, on time",
      p1: "Delivered when committed. If we will be late, we call first.", // client promise 2
      p2: "A weighbridge slip comes with every load, and rates are stated in writing.", // client promise 3
      buttonText: "Request a Quote",
      buttonHref: "/quote",
      watermark: "truck",
      image: "/images/panel-dispatch.jpg", // PLACEHOLDER
      imageAlt: "Heavy commercial multi-axle tipper truck loaded with graded blue metal on certified weighbridge",
    },
  ],
  audience: {
    tag: "Who we serve",
    headline: "Five kinds of customer. One standard for all of them.",
    description:
      "Whoever receives the load, the standard does not change: the same grading, honest weights and clean paperwork on every delivery.", // DRAFT
    howItWorksCta: {
      label: "How Does It Work?",
      href: "#process",
    },
    pillars: [
      {
        id: "consultants",
        number: "01",
        title: "Construction consultants & builders",
        subtitle: "Residential & Commercial Foundations",
        description:
          "Given the increasing structural complexity of modern construction, our graded blue metal ensures uniform load-bearing strength and zero deflection on every pour.",
        specs: ["IS 383:2016 Compliant // DRAFT", "20mm & 10mm Graded Stones", "Washed Manufactured Sand (M-Sand)"],
        icon: "consultants",
      },
      {
        id: "architecture",
        number: "02",
        title: "Architecture & civil engineering",
        subtitle: "High-Rise, Bridges & Heavy Infra",
        description:
          "Architecture demands uncompromising material integrity. We supply precision-graded aggregates and stone dust engineered to withstand heavy seismic and dynamic stresses.",
        specs: ["High Compressive Strength", "<15% Flakiness & Elongation", "Lab Test Reports // PLACEHOLDER"],
        icon: "architecture",
      },
      {
        id: "management",
        number: "03",
        title: "Construction management & RMC",
        subtitle: "Batching Plants & Bulk Contractors",
        description:
          "Professional batching relies on consistent particle distribution. Our automated washing and screening guarantees repeatable mix designs without cement waste.",
        specs: ["Automated Double Washing", "Electronic Weighbridge Slips", "Dedicated Multi-Axle Fleet"],
        icon: "management",
      },
    ],
    cards: [
      {
        number: "01",
        title: "Builders",
        subtitle: "Commercial & High-Rise Structures",
        body: "Material that behaves the same on every pour, at the site when the slab is scheduled.",
        specs: ["Consistent grading across pours", "Direct site offloading", "Certified IS 383 compliance"],
        icon: "consultants",
      },
      {
        number: "02",
        title: "Contractors",
        subtitle: "Civil & Commercial Execution",
        body: "Steady supply across the life of a project, with clear rates and clean paperwork.",
        specs: ["Transparent volume rates", "Zero delivery bottlenecks", "Standardized dispatch slips"],
        icon: "architecture",
      },
      {
        number: "03",
        title: "RMC plants",
        subtitle: "Ready-Mix Batching Units",
        body: "Tight, repeatable grading batch after batch, so mix designs hold.",
        specs: ["Tight particle distribution", "Automated washing with zero silt", "Continuous high-tonnage supply"],
        icon: "management",
      },
      {
        number: "04",
        title: "Infra & govt works",
        subtitle: "Highways, Flyovers & Public Works",
        body: "Compliant material, test certificates and documents that pass inspection.",
        specs: ["MORTH & PWD specification", "Sieve test documentation // PLACEHOLDER", "Weighbridge certified tonnage"],
        icon: "infra",
      },
      {
        number: "05",
        title: "Dealers",
        subtitle: "Authorized Material Resellers",
        body: "A supplier they can resell with confidence: steady stock, honest weights, fair terms.",
        specs: ["Guaranteed stockpile availability", "Certified calibrated weighbridge", "Fast truck turnaround times"],
        icon: "dealers",
      },
    ],
    callout: {
      text: "Send your material list and site PIN. We'll quote within the hour.", // DRAFT
      primaryCta: {
        label: "Request a Quote",
        href: "https://api.whatsapp.com/send/?phone=918422819302&text=Hello%20Fortune%20Aggregates%2C%20I%20would%20like%20to%20request%20a%20quote.",
      },
      secondaryCta: {
        label: "Ask on WhatsApp",
        href: "https://wa.me/918422819302?text=Hi%2C%20I%20need%20a%20quote",
      },
    },
  },
};

