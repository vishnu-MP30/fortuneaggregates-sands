"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X, Check, ShieldCheck, Truck, Scale, PhoneCall } from "lucide-react";
import { siteConfig } from "@/data/site";
import { AudienceCard, AudienceCardData } from "@/components/ui/AudienceCard";
import { AlertBadgeIcon } from "@/components/ui/ReferenceIcons";

type TabMode = "featured" | "all" | "01" | "02" | "03" | "04" | "05";

export function Audience() {
  const { audience } = siteConfig;
  const [activeTab, setActiveTab] = useState<TabMode>("featured");
  const [selectedCard, setSelectedCard] = useState<AudienceCardData | null>(null);

  // Convert pillars to card format
  const pillarCards: AudienceCardData[] = audience.pillars.map((pillar) => ({
    number: pillar.number,
    title: pillar.title,
    body: pillar.description,
    subtitle: pillar.subtitle,
    specs: pillar.specs,
    icon: pillar.icon,
  }));

  // Get active cards based on tab selection
  const getDisplayedCards = (): AudienceCardData[] => {
    if (activeTab === "featured") {
      return pillarCards;
    }
    if (activeTab === "all") {
      return audience.cards;
    }
    const single = audience.cards.find((c) => c.number === activeTab);
    return single ? [single] : pillarCards;
  };

  const displayedCards = getDisplayedCards();

  const handleOpenModal = (card: AudienceCardData) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[var(--bg-base)] py-[var(--space-8)] sm:py-[var(--space-9)] border-t border-[var(--border)] overflow-hidden select-none"
    >
      <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* =========================================================
            TOP SECTION: Split 2-Column Header (Left-Aligned, No Intrusive Vertical Hairlines)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-6)] lg:gap-[var(--space-10)] pb-[var(--space-7)] sm:pb-[var(--space-8)] border-b border-[var(--border)] items-end">
          {/* Left Column: Tag chip + 2-Line Sentence-Space Aligned Headline */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-[var(--space-6)]">
            {/* Tag chip: "Who we serve" (--accent-soft, gold bar, --gold-700 text) */}
            <div className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-3)] py-[var(--space-1)] rounded-[var(--radius-pill)] bg-[var(--accent-soft)] border border-[var(--border-strong)]">
              <span className="w-1.5 h-3.5 bg-[var(--gold-500)] rounded-full shrink-0" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] tracking-[var(--tracking-caps)] uppercase text-[var(--gold-700)]">
                {audience.tag}
              </span>
            </div>

            {/* Main Headline: Strictly 2-Line Sentence Structure */}
            <h2 className="mt-[var(--space-4)] font-[family-name:var(--font-display)] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] leading-[1.12] text-[var(--green-700)] tracking-tight">
              <span className="block">Five kinds of customer.</span>
              <span className="block">One standard for all of them.</span>
            </h2>
          </div>

          {/* Right Column: Supporting Paragraph + Solid CTA Button */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start pl-0">
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] text-[var(--text-muted)] leading-relaxed max-w-[520px]">
              {audience.description}
            </p>

            {/* Button */}
            <div className="mt-[var(--space-6)]">
              <Link
                href={audience.howItWorksCta.href}
                className="inline-flex items-center gap-[var(--space-3)] px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[var(--ink-950)] hover:bg-[var(--ink-900)] text-[var(--paper)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] shadow-[var(--shadow-sm)] hover:shadow transition-all group min-h-[44px]"
              >
                <span>{audience.howItWorksCta.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            CATEGORY SELECTOR
            ========================================================= */}
        <div className="mt-[var(--space-6)] flex flex-wrap items-center justify-between gap-[var(--space-3)] pb-[var(--space-2)]">
          <div className="flex flex-wrap items-center gap-[var(--space-2)]">
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className={`px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-pill)] text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold tracking-wider uppercase transition-all min-h-[36px] cursor-pointer ${
                activeTab === "featured"
                  ? "bg-[var(--ink-950)] text-[var(--paper)] shadow-[var(--shadow-xs)]"
                  : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--ink-950)]/40"
              }`}
            >
              Featured Solutions (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-pill)] text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold tracking-wider uppercase transition-all min-h-[36px] cursor-pointer ${
                activeTab === "all"
                  ? "bg-[var(--ink-950)] text-[var(--paper)] shadow-[var(--shadow-xs)]"
                  : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--ink-950)]/40"
              }`}
            >
              All 5 Sectors
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-[var(--space-2)] text-[length:var(--fs-xs)] font-[family-name:var(--font-body)] text-[var(--text-muted)]">
            <span>Filter by customer:</span>
            {audience.cards.map((card) => (
              <button
                key={card.number}
                type="button"
                onClick={() => setActiveTab(card.number as TabMode)}
                className={`px-[var(--space-2)] py-[var(--space-1)] rounded-[var(--radius-sm)] text-[length:var(--fs-xs)] font-semibold uppercase transition-colors cursor-pointer ${
                  activeTab === card.number
                    ? "bg-[var(--gold-500)] text-[var(--text-on-gold)]"
                    : "text-[var(--text-muted)] hover:text-[var(--ink-950)] hover:bg-[var(--accent-soft)]"
                }`}
              >
                {card.number} {card.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================
            MIDDLE SECTION: 3-Column Service / Customer Card Grid
            ========================================================= */}
        <div className="mt-[var(--space-6)]">
          <div
            className={`grid gap-[var(--space-6)] lg:gap-[var(--space-7)] ${
              displayedCards.length === 1
                ? "grid-cols-1 max-w-xl mx-auto"
                : displayedCards.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                : displayedCards.length <= 3
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {displayedCards.map((card, index) => (
              <div key={card.number || card.title} className="h-full">
                <AudienceCard
                  card={card}
                  index={index}
                  onExplore={handleOpenModal}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CALLOUT BANNER: Rounded Elevated Card with Badge
            ========================================================= */}
        <div className="mt-[var(--space-8)] sm:mt-[var(--space-9)] w-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-[var(--space-6)] sm:p-[var(--space-7)] lg:p-[var(--space-8)] shadow-[var(--shadow-sm)] flex flex-col lg:flex-row items-center justify-between gap-[var(--space-6)] lg:gap-[var(--space-8)]">
          {/* Left: Circular alert badge + partner text */}
          <div className="flex items-center gap-[var(--space-4)] sm:gap-[var(--space-5)] w-full lg:w-auto flex-1">
            <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] flex items-center justify-center shrink-0">
              <AlertBadgeIcon className="w-6 h-6 text-[var(--gold-700)]" />
            </div>
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--text-body)] leading-relaxed max-w-[620px]">
              {audience.callout.text}
            </p>
          </div>

          {/* Right: Solid Action Button + Secondary Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[var(--space-3)] sm:gap-[var(--space-4)] w-full lg:w-auto shrink-0">
            <Link
              href={audience.callout.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[image:var(--grad-gold)] hover:brightness-105 text-[var(--text-on-gold)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] shadow-[var(--shadow-glow)] transition-all group min-h-[44px]"
            >
              <span>{audience.callout.primaryCta.label}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href={audience.callout.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-pill)] border border-[var(--green-700)] text-[var(--green-700)] hover:bg-[var(--accent-2-soft)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] transition-all min-h-[44px]"
            >
              {audience.callout.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE SPECIFICATION MODAL (Triggered by Explore More)
          ========================================================= */}
      {selectedCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-[var(--space-4)] bg-[var(--ink-950)]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-xl bg-[var(--surface)] rounded-[var(--radius-lg)] border border-[var(--border-strong)] shadow-[var(--shadow-lg)] p-[var(--space-6)] sm:p-[var(--space-8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-[var(--space-4)] border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] tracking-wider text-[var(--gold-700)] uppercase">
                  Sector {selectedCard.number || "01"} Specifications
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-[var(--green-700)]">
                  {selectedCard.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--green-700)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="mt-[var(--space-5)] space-y-[var(--space-4)]">
              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {selectedCard.body}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="p-[var(--space-4)] rounded-[var(--radius-md)] bg-[var(--surface-2)] border border-[var(--border)] space-y-2.5">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] uppercase tracking-wider text-[var(--green-700)]">
                  Certified Quality & Delivery Standards
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[length:var(--fs-xs)] font-[family-name:var(--font-body)] text-[var(--text-body)]">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--gold-600)] shrink-0" />
                    <span>IS 383:2016 Compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[var(--gold-600)] shrink-0" />
                    <span>Calibrated Weighbridge Slips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[var(--gold-600)] shrink-0" />
                    <span>Dedicated Tipper Fleet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--gold-600)] shrink-0" />
                    <span>Flakiness & Elongation &lt; 15%</span>
                  </li>
                </ul>
              </div>

              {/* Available Grades */}
              <div>
                <h4 className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-wider text-[var(--text-muted)]">
                  Common Material Grades For This Sector:
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "20mm Blue Metal",
                    "10mm Aggregate",
                    "40mm Hand Broken",
                    "Washed M-Sand",
                    "Plastering Sand (P-Sand)",
                    "Wet Mix Macadam (WMM)",
                    "Granular Sub-Base (GSB)",
                  ].map((grade) => (
                    <span
                      key={grade}
                      className="px-2.5 py-1 rounded-[var(--radius-xs)] bg-[var(--surface)] border border-[var(--border)] text-[length:var(--fs-xs)] text-[var(--text-body)] font-medium"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-[var(--space-6)] pt-[var(--space-4)] border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-end gap-[var(--space-3)]">
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--border-strong)] text-[var(--text-muted)] hover:bg-[var(--surface-2)] text-[length:var(--fs-xs)] font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-pill)] bg-[var(--green-700)] hover:bg-[var(--green-800)] text-[var(--gold-200)] text-[length:var(--fs-xs)] font-semibold uppercase tracking-wider shadow-[var(--shadow-sm)] min-h-[44px]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Material Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
