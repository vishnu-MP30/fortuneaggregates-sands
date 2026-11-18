"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X, ShieldCheck, Check, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: string[];
  applications: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "structural-concrete-pour",
    title: "Structural Concrete Pour & Foundation Casting",
    category: "Precision Placement",
    subtitle: "Continuous high-volume slab casting, foundation pours & rapid pumpability",
    description:
      "Graded aggregates and washed M-Sand optimized for automated Ready-Mix Concrete pumps, ensuring seamless flow, superior slump retention, and monolithic strength across heavy structural pours.",
    image: "/images/golden-hour-concrete-pour.png",
    imageAlt: "Golden-hour structural concrete pour and pumping at active commercial construction site",
    specs: ["IS 383:2016 Compliant", "Optimized Slump Retention", "Zero Deleterious Materials", "High Early Compressive Gain"],
    applications: ["RMC Slabs & Columns", "Commercial Foundations", "Industrial Flooring"],
  },
  {
    id: "quarry-crushing-facility",
    title: "Quarry Crushing & Multi-Deck Screening",
    category: "Quarry Operations",
    subtitle: "Automated cone-crusher processing with precision fraction separation at sunrise",
    description:
      "Triple-stage crushing circuit operating at our Yedapadavu plant, transforming raw basalt granite bedrock into clean, tightly graded coarse aggregate fractions with zero silt contamination.",
    image: "/images/dusty-aggregate-plant-sunrise.png",
    imageAlt: "Heavy aggregate crushing and screening plant operating at sunrise in quarry facility",
    specs: ["Triple-Stage Cone Crushing", "Dry & Wet Sieve Calibrated", "Daily 1,500+ MT Throughput", "Automated Fleet Loading"],
    applications: ["Bulk Supply Dispatch", "Standardized Sieve Fractions", "Wet Mix Macadam (WMM)"],
  },
  {
    id: "mega-infrastructure",
    title: "Heavy Civil & Coastal Infrastructure Corridors",
    category: "Monumental Engineering",
    subtitle: "Continuous high-tonnage supply for highway bridges, flyovers & marine structures",
    description:
      "Scalable quarry extraction and continuous fleet dispatch built to support critical-path coastal Karnataka infrastructure projects requiring audit-ready laboratory test certificates and zero schedule delays.",
    image: "/images/building-tomorrow-sunset.png",
    imageAlt: "Sunset panorama over coastal bridge and massive infrastructure civil engineering development",
    specs: ["MORTH & PWD Specifications", "Third-Party Certified Testing", "Daily 1,500+ Ton Dispatch Capacity", "High-Abrasion Resistance"],
    applications: ["Highway Bridges & Overpasses", "Port & Coastal Retaining Structures", "Industrial Logistics Hubs"],
  },
  {
    id: "rebar-structural-cage",
    title: "Reinforced Concrete Rebar & Cage Fabrication",
    category: "Reinforced Concrete",
    subtitle: "High-density aggregate matrix engineered for dense steel reinforcement cages",
    description:
      "High-density cubical aggregates designed to navigate closely spaced rebar grids without segregation or honeycombing, maximizing steel-to-concrete bonding in heavy civil structures.",
    image: "/images/golden-hour-rebar-work.png",
    imageAlt: "Construction ironworkers fabricating heavy reinforced concrete rebar cages at golden hour",
    specs: ["IS 456 RCC Standard Compliant", "Flakiness Index < 14%", "Low Honeycombing Factor", "Superior Bond Coefficient"],
    applications: ["Seismic Core Walls", "Heavy Column Cages", "Deep Foundation Piles"],
  },
  {
    id: "aggregate-quality-inspection",
    title: "On-Site Aggregate Quality & Field Inspection",
    category: "Quality Control",
    subtitle: "Laboratory sieve verification and physical inspection for zero silt contamination",
    description:
      "Every batch is tested against IS 383 gradation envelopes before truck weigh-in and departure, providing contractors and engineers with verified test slips and uncompromising aggregate uniformity.",
    image: "/images/inspecting-gravel-golden-hour.png",
    imageAlt: "Quality control engineer closely inspecting graded crushed gravel aggregate at golden hour",
    specs: ["Daily Sieve Gradation Audit", "Moisture Content Calibration", "Zero Organic Impurities", "Certified Weighbridge Slips"],
    applications: ["Lab Test Documentation", "Batch-to-Batch Uniformity", "Audit-Ready Quality Assurance"],
  },
];

export function ProjectGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section
      id="projects"
      className="relative w-full bg-[var(--bg-base)] py-16 sm:py-24 lg:py-32 border-t border-[var(--border)] select-none overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* =========================================================
            TOP SECTION HEADER: Justified 2-Column Grid (Title Left, Description Right-Aligned)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 lg:pb-20 border-b border-[var(--border)] items-end">
          {/* Left Column (7 cols): Tag pill + 2-Line Sentence-Space Aligned Headline */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--accent-soft)] border border-[var(--border-strong)] text-[var(--gold-700)] mb-3">
              <span className="w-3.5 h-1.5 rounded-[1px] bg-[var(--gold-500)] shrink-0" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] sm:text-[length:var(--fs-xs)] tracking-wider uppercase">
                Proven execution across high-demand sectors
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-[length:var(--fs-3xl)] lg:text-[length:var(--fs-3xl)] xl:text-[length:var(--fs-3xl)] leading-[1.15] text-[var(--ink-950)] tracking-tight">
              <span className="block whitespace-normal sm:whitespace-nowrap">Precision crushing, rigid schedules</span>
              <span className="block whitespace-normal sm:whitespace-nowrap">and zero delivery defaults</span>
            </h2>
          </div>

          {/* Right Column (5 cols): Supporting Paragraph (Right-Side Aligned) */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:items-end lg:text-right pl-0">
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] text-[var(--text-muted)] leading-relaxed max-w-[460px]">
              Turnkey aggregate quarrying, automated washing, and multi-deck screening engineered to withstand high-demand industrial operations, heavy axle traffic, and severe structural loads.
            </p>
          </div>
        </div>

        {/* =========================================================
            5-IMAGE EXPANSIVE ARCHITECTURAL SHOWCASE
            ========================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-24 space-y-20 sm:space-y-28 lg:space-y-36">
          {/* PAIR 1: Image 1 & Image 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Image 1: Left Aligned */}
            <div
              className="lg:col-span-6 group cursor-pointer"
              onClick={() => setSelectedItem(galleryItems[0])}
            >
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[660px] xl:h-[720px] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-md)] rounded-[var(--radius-md)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg)]">
                <Image
                  src={galleryItems[0].image}
                  alt={galleryItems[0].imageAlt}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase">
                  {galleryItems[0].category}
                </div>
              </div>

              {/* Caption with Arrow */}
              <div className="mt-5 flex items-start justify-between text-[var(--ink-950)] group-hover:text-[var(--green-700)] transition-colors">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                    {galleryItems[0].title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--text-muted)]">
                    {galleryItems[0].subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--gold-500)] shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Image 2: Right Aligned */}
            <div
              className="lg:col-span-6 lg:mt-32 group cursor-pointer"
              onClick={() => setSelectedItem(galleryItems[1])}
            >
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[660px] xl:h-[720px] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-md)] rounded-[var(--radius-md)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg)]">
                <Image
                  src={galleryItems[1].image}
                  alt={galleryItems[1].imageAlt}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase">
                  {galleryItems[1].category}
                </div>
              </div>

              {/* Caption with Arrow */}
              <div className="mt-5 flex items-start justify-between text-[var(--ink-950)] group-hover:text-[var(--green-700)] transition-colors">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                    {galleryItems[1].title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--text-muted)]">
                    {galleryItems[1].subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--gold-500)] shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* IMAGE 3: Center Monumental Feature */}
          <div className="w-full flex justify-center pt-6 lg:pt-12">
            <div
              className="w-full group cursor-pointer"
              onClick={() => setSelectedItem(galleryItems[2])}
            >
              <div className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[680px] xl:h-[760px] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-lg)] rounded-[var(--radius-lg)] transition-shadow duration-300 group-hover:shadow-2xl">
                <Image
                  src={galleryItems[2].image}
                  alt={galleryItems[2].imageAlt}
                  fill
                  priority
                  unoptimized
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase">
                  {galleryItems[2].category}
                </div>

                {/* Subtle cinematic gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--ink-950)]/40 to-transparent pointer-events-none" />
              </div>

              {/* Caption with Arrow */}
              <div className="mt-5 flex items-start justify-between text-[var(--ink-950)] group-hover:text-[var(--green-700)] transition-colors">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">
                    {galleryItems[2].title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm lg:text-base text-[var(--text-muted)]">
                    {galleryItems[2].subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-[var(--gold-500)] shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>

          {/* PAIR 2: Image 4 & Image 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-6 lg:pt-12">
            {/* Image 4: Left Aligned */}
            <div
              className="lg:col-span-6 group cursor-pointer"
              onClick={() => setSelectedItem(galleryItems[3])}
            >
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[660px] xl:h-[720px] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-md)] rounded-[var(--radius-md)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg)]">
                <Image
                  src={galleryItems[3].image}
                  alt={galleryItems[3].imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase">
                  {galleryItems[3].category}
                </div>
              </div>

              {/* Caption with Arrow */}
              <div className="mt-5 flex items-start justify-between text-[var(--ink-950)] group-hover:text-[var(--green-700)] transition-colors">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                    {galleryItems[3].title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--text-muted)]">
                    {galleryItems[3].subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--gold-500)] shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Image 5: Right Aligned */}
            <div
              className="lg:col-span-6 lg:mt-32 group cursor-pointer"
              onClick={() => setSelectedItem(galleryItems[4])}
            >
              <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[660px] xl:h-[720px] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-md)] rounded-[var(--radius-md)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg)]">
                <Image
                  src={galleryItems[4].image}
                  alt={galleryItems[4].imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase">
                  {galleryItems[4].category}
                </div>
              </div>

              {/* Caption with Arrow */}
              <div className="mt-5 flex items-start justify-between text-[var(--ink-950)] group-hover:text-[var(--green-700)] transition-colors">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl lg:text-2xl tracking-tight">
                    {galleryItems[4].title}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--text-muted)]">
                    {galleryItems[4].subtitle}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--gold-500)] shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE SPECIFICATION MODAL
          ========================================================= */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-950)]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border-strong)] shadow-[var(--shadow-lg)] p-6 sm:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider text-[var(--gold-700)] uppercase">
                  {selectedItem.category}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-[var(--ink-950)]">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--ink-950)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="mt-5 space-y-4">
              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Certified Specifications Matrix */}
              <div className="p-4 rounded-[var(--radius-xs)] bg-[var(--surface-2)] border border-[var(--border)] space-y-2.5">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--green-700)]">
                  Certified Laboratory Metrics
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-[family-name:var(--font-body)] text-[var(--text-body)]">
                  {selectedItem.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--gold-700)] shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Applications */}
              <div>
                <h4 className="font-[family-name:var(--font-display)] font-semibold text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Recommended For:
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedItem.applications.map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 rounded-[var(--radius-xs)] bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-body)] font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--border-strong)] text-[var(--text-muted)] hover:bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedItem(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-pill)] bg-[var(--green-700)] hover:bg-[var(--green-800)] text-[var(--gold-200)] text-xs font-semibold uppercase tracking-wider shadow-[var(--shadow-sm)] transition-colors min-h-[44px]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
