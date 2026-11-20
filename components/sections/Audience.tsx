"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Check, PhoneCall, ShieldCheck, Truck, Scale } from "lucide-react";
import { siteConfig } from "@/data/site";

interface SectorCell {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  specs: string[];
}

export function Audience() {
  const { audience } = siteConfig;
  const [selectedSector, setSelectedSector] = useState<SectorCell | null>(null);

  // 6-Cell Table Structure matching the architectural reference
  const sectorCells: SectorCell[] = [
    {
      number: "01",
      title: "BUILDERS & DEVELOPERS",
      subtitle: "Commercial & High-Rise Structures",
      description:
        "Consistent aggregates that behave the same on every pour, delivered to site strictly when the foundation slab is scheduled.",
      tag: "IS 383:2016 · 20MM & 10MM",
      specs: [
        "Certified IS 383:2016 blue metal",
        "Direct site offloading with tipper fleet",
        "Zero silt washed manufactured sand (M-Sand)",
        "Batch-to-batch sieve uniformity",
      ],
    },
    {
      number: "02",
      title: "CIVIL CONTRACTORS",
      subtitle: "Civil Execution & Foundations",
      description:
        "Steady high-volume supply across the life of a project, with transparent per-ton volume rates and computerized weighbridge slips.",
      tag: "TRANSPARENT RATES · ON-TIME",
      specs: [
        "Contracted per-ton bulk volume rates",
        "Computerized calibrated weighbridge slips",
        "Immediate dispatch for high-speed pours",
        "Zero middleman markup or hidden costs",
      ],
    },
    {
      number: "03",
      title: "RMC BATCHING PLANTS",
      subtitle: "Ready-Mix Concrete Production",
      description:
        "Tight, repeatable grading batch after batch, with automated washing and zero silt so mix designs and cement ratios hold.",
      tag: "AUTOMATED WASHING · ZERO SILT",
      specs: [
        "Strict control over flakiness & elongation (<15%)",
        "Dual-stage cone crushed blue metal",
        "High continuous daily feed capacity",
        "Controlled moisture content for batching",
      ],
    },
    {
      number: "04",
      title: "INFRASTRUCTURE & GOVT",
      subtitle: "Highways, Flyovers & Public Works",
      description:
        "Compliant basalt blue metal, certified sieve test reports, and calibrated weighbridge documentation that pass technical inspections.",
      tag: "MORTH & PWD · CALIBRATED WEIGHT",
      specs: [
        "Full compliance with MORTH & PWD specifications",
        "Laboratory sieve grading documentation",
        "Certified crushing value & impact test reports",
        "Full mining licence & environmental clearances",
      ],
    },
    {
      number: "05",
      title: "MATERIAL DEALERS",
      subtitle: "Authorized Material Resellers",
      description:
        "A quarry partner you can resell with confidence: guaranteed stockpile availability, honest weights, and fast truck turnaround.",
      tag: "BULK STOCKPILE · QUICK TURNAROUND",
      specs: [
        "Priority loading lane for commercial tippers",
        "Accurate electronic weighbridge slips",
        "Consistent yard stockpiles across all fractions",
        "Dependable wholesale credit & payment terms",
      ],
    },
    {
      number: "06",
      title: "INDIVIDUAL HOME BUILDERS",
      subtitle: "Residential Foundation & Masonry",
      description:
        "Direct quarry supply with prompt tipper dispatch to construction plots across Mangaluru, Udupi, Bantwal, and Coastal Karnataka.",
      tag: "MANGALURU · DIRECT DISPATCH",
      specs: [
        "Direct from Yedapadavu quarry to your plot",
        "Clean, silt-free sand for plastering and concrete",
        "Honest weighbridge weight with delivery slip",
        "Friendly WhatsApp support and instant quotes",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-[var(--ink-950)] py-16 sm:py-24 lg:py-28 border-t border-[var(--border)] overflow-hidden select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(200, 151, 31, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(200, 151, 31, 0.08) 1px, transparent 1px),
          radial-gradient(ellipse 70% 50% at 20% 40%, rgba(200, 151, 31, 0.06) 0%, transparent 70%)
        `,
        backgroundSize: "56px 56px, 56px 56px, auto",
      }}
    >
      <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* =========================================================
            TOP SECTION: High-Impact Monumental Display Typography
            Matching Image 1 (Muted top line + Huge White/Gold Display)
            ========================================================= */}
        <div className="max-w-4xl">
          {/* Eyebrow in gold uppercase with architectural dash */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[var(--gold-500)] rounded-full shrink-0" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-[var(--gold-400)]">
              FORTUNE AGGREGATES — COASTAL KARNATAKA
            </span>
          </div>

          {/* Monumental Headline: Muted Top Line + Massive Display Line */}
          <div className="mt-4">
            <span className="block font-[family-name:var(--font-display)] font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[var(--warm-500)]/40 uppercase leading-none select-none">
              ONE STANDARD
            </span>
            <h2 className="mt-1 font-[family-name:var(--font-display)] font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.94] uppercase">
              <span className="text-[var(--paper)]">FIVE </span>
              <span className="italic text-[var(--gold-400)] fas-wordmark-gradient">SECTORS</span>
            </h2>
          </div>

          {/* Supporting Paragraph */}
          <p className="mt-6 font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] text-[var(--warm-100)] leading-relaxed max-w-2xl">
            {audience.description ||
              "Whoever receives the load, the standard does not change: the same grading, honest weights and clean paperwork on every delivery."}
          </p>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#materials"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[var(--radius-xs)] bg-[var(--gold-500)] hover:bg-[var(--gold-400)] active:bg-[var(--gold-600)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all min-h-[44px]"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-[var(--ink-950)]" strokeWidth={2.5} />
            </Link>

            <Link
              href={audience.howItWorksCta.href}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[var(--radius-xs)] border border-[var(--gold-500)]/40 hover:border-[var(--gold-400)] text-[var(--paper)] hover:text-[var(--gold-400)] font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all min-h-[44px]"
            >
              <span>{audience.howItWorksCta.label || "HOW DOES IT WORK"}</span>
            </Link>
          </div>

          {/* Operational Quick Metrics Strip */}
          <div className="mt-10 pt-6 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <span className="block font-[family-name:var(--font-display)] font-black text-xl sm:text-2xl text-[var(--gold-400)]">
                5+
              </span>
              <span className="block font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-2xs)] tracking-wider uppercase text-[var(--warm-300)] mt-0.5">
                SECTORS SERVED
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-black text-xl sm:text-2xl text-[var(--gold-400)]">
                100%
              </span>
              <span className="block font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-2xs)] tracking-wider uppercase text-[var(--warm-300)] mt-0.5">
                IN-HOUSE CRUSHING
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-black text-xl sm:text-2xl text-[var(--gold-400)]">
                YEDAPADAVU
              </span>
              <span className="block font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-2xs)] tracking-wider uppercase text-[var(--warm-300)] mt-0.5">
                MANGALURU BASE
              </span>
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-black text-xl sm:text-2xl text-[var(--gold-400)]">
                IS 383
              </span>
              <span className="block font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-2xs)] tracking-wider uppercase text-[var(--warm-300)] mt-0.5">
                2016 CERTIFIED
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            MIDDLE SECTION: 6-Cell Architectural Table Grid Layout
            Matching Image 2 (Table Structure, Hairline Rules, Badges)
            ========================================================= */}
        <div className="mt-14 sm:mt-16 border border-[var(--border-strong)] rounded-[var(--radius-lg)] bg-[var(--ink-950)]/90 backdrop-blur-xs overflow-hidden shadow-[var(--shadow-xl)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-y divide-[var(--border)]">
            {sectorCells.map((cell, idx) => (
              <div
                key={cell.number}
                onClick={() => setSelectedSector(cell)}
                className={`group relative p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 hover:bg-[var(--surface-2)]/60 cursor-pointer ${
                  idx % 3 !== 2 ? "lg:border-r lg:border-[var(--border)]" : ""
                } ${idx % 2 !== 1 ? "md:border-r md:border-[var(--border)] lg:border-r-0" : ""}`}
              >
                <div>
                  {/* Top: Sector Number + Thin Horizontal Hairline */}
                  <div className="flex items-center justify-between pb-4">
                    <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm text-[var(--gold-400)] tracking-wider">
                      {cell.number}
                    </span>
                    <div className="flex-1 ml-4 h-[1px] bg-[var(--gold-500)]/25 group-hover:bg-[var(--gold-400)]/60 transition-colors" />
                  </div>

                  {/* Cell Title in Bold Uppercase White */}
                  <h3 className="font-[family-name:var(--font-display)] font-extrabold text-lg sm:text-xl text-[var(--paper)] uppercase tracking-wide group-hover:text-[var(--gold-300)] transition-colors">
                    {cell.title}
                  </h3>

                  {/* Body Paragraph */}
                  <p className="mt-3 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--warm-200)] leading-relaxed">
                    {cell.description}
                  </p>
                </div>

                {/* Bottom: Rectangular Outlined Gold Tag Badge */}
                <div className="mt-6 pt-2 flex items-center justify-between">
                  <div className="inline-flex items-center px-3 py-1 rounded-[var(--radius-xs)] border border-[var(--gold-500)]/40 bg-[var(--gold-500)]/5 text-[var(--gold-400)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-2xs)] tracking-wider uppercase group-hover:border-[var(--gold-400)] group-hover:bg-[var(--gold-500)]/15 transition-all">
                    {cell.tag}
                  </div>
                  <span className="font-[family-name:var(--font-display)] font-bold text-xs text-[var(--gold-400)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CALLOUT: Direct Dispatch & Quotation Strip
            ========================================================= */}
        <div className="mt-10 p-6 sm:p-8 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--gold-400)] border border-[var(--gold-500)]/20 shrink-0">
              <Truck className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-[var(--paper)]">
                Need bulk blue metal or M-Sand dispatched to your site?
              </span>
              <span className="block font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--warm-200)] mt-0.5">
                Send your material list and site location. We provide calibrated weighbridge slips and immediate delivery.
              </span>
            </div>
          </div>

          <Link
            href={siteConfig.contact.whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-xs)] bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs uppercase tracking-wider shadow-sm transition-colors shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>REQUEST A QUOTE</span>
          </Link>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE SPECIFICATION DIALOG
          ========================================================= */}
      {selectedSector && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-950)]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedSector(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border-strong)] shadow-[var(--shadow-xl)] p-6 sm:p-8 overflow-hidden text-[var(--paper)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider text-[var(--gold-400)] uppercase">
                  Sector {selectedSector.number} · {selectedSector.subtitle}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-extrabold text-xl sm:text-2xl text-[var(--paper)] uppercase">
                  {selectedSector.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSector(null)}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--warm-300)] hover:text-[var(--paper)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--warm-100)] leading-relaxed">
              {selectedSector.description}
            </p>

            {/* Key Specifications */}
            <div className="mt-5 p-4 rounded-[var(--radius-sm)] bg-[var(--surface-2)] border border-[var(--border)]">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--gold-400)] mb-2.5">
                Supplied Specifications &amp; Quality Assurances:
              </h4>
              <ul className="space-y-2">
                {selectedSector.specs.map((spec, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-[family-name:var(--font-body)] text-[var(--paper)]"
                  >
                    <Check className="w-4 h-4 text-[var(--gold-400)] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedSector(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-xs)] border border-[var(--border-strong)] text-[var(--paper)] hover:bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedSector(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-xs)] bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] text-xs font-extrabold uppercase tracking-wider shadow-sm transition-colors min-h-[44px]"
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
