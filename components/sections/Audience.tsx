"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Check, Users, PhoneCall } from "lucide-react";
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
            TOP SECTION: Split 2-Column Header (Left-Aligned with Divider Line)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-[var(--border)] items-end">
          {/* Left Column: Tag chip + 2-Line Headline */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Tag chip: "WHO WE SERVE" with Users icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--ink-950)] border border-[var(--gold-500)]/40 shadow-xs">
              <Users className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" />
              <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider uppercase text-[var(--gold-400)]">
                {audience.tag}
              </span>
            </div>

            {/* Main Headline in Crisp Paper White */}
            <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] leading-[1.12] text-[var(--paper)] tracking-tight">
              <span className="block">Five kinds of customer.</span>
              <span className="block">One standard for all of them.</span>
            </h2>
          </div>

          {/* Right Column: Supporting Paragraph + Solid Gold CTA Button */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start pl-0 lg:pl-8 lg:border-l lg:border-[var(--gold-500)]/30">
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--paper)] leading-relaxed max-w-[520px]">
              {audience.description}
            </p>

            {/* How Does It Work Button in Solid Gold */}
            <div className="mt-6">
              <Link
                href={audience.howItWorksCta.href}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] active:bg-[var(--gold-600)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all group min-h-[44px]"
              >
                <span>{audience.howItWorksCta.label}</span>
                <ArrowRight className="w-4 h-4 text-[var(--ink-950)] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            CATEGORY SELECTOR & SECTOR NAVIGATION BAR
            ========================================================= */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[var(--border)]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("featured")}
              className={`font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "featured"
                  ? "text-[var(--gold-400)]"
                  : "text-[var(--paper)] hover:text-[var(--gold-400)]"
              }`}
            >
              FEATURED SOLUTIONS [3]
            </button>

            <span className="text-[var(--border-strong)]" aria-hidden="true">|</span>

            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded-full border text-xs font-[family-name:var(--font-display)] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[var(--gold-500)] text-[var(--ink-950)] border-[var(--gold-500)]"
                  : "border-[var(--gold-500)] text-[var(--gold-400)] hover:bg-[var(--gold-500)]/15"
              }`}
            >
              ALL 5 SECTORS
            </button>

            <span className="text-[var(--border-strong)]" aria-hidden="true">|</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-[family-name:var(--font-display)] font-bold uppercase tracking-wider text-[var(--paper)]/80">
            {["INFRA DEVELOPERS", "RMC & PRECAST", "EPC CONTRACTORS", "GOVERNMENT", "DEALERS", "INDIVIDUAL BUYERS"].map((sector) => (
              <span
                key={sector}
                className="hover:text-[var(--gold-400)] transition-colors cursor-pointer"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================
            MIDDLE SECTION: 3-Column Luxury Gold Customer Card Grid
            ========================================================= */}
        <div className="mt-8">
          <div
            className={`grid gap-6 lg:gap-7 ${
              displayedCards.length === 1
                ? "grid-cols-1 max-w-xl mx-auto"
                : displayedCards.length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
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
        <div className="mt-12 sm:mt-16 w-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] p-6 sm:p-7 lg:p-8 shadow-[var(--shadow-sm)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left: Circular alert badge + partner text */}
          <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto flex-1">
            <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] flex items-center justify-center shrink-0">
              <AlertBadgeIcon className="w-6 h-6 text-[var(--gold-400)]" />
            </div>
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--warm-100)] leading-relaxed max-w-[620px]">
              {audience.callout.text}
            </p>
          </div>

          {/* Right: Solid Action Button + Secondary Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
            <Link
              href={audience.callout.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all group min-h-[44px]"
            >
              <span>{audience.callout.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 text-[var(--ink-950)] transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>

            <Link
              href={audience.callout.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--gold-500)]/40 text-[var(--gold-400)] hover:bg-[var(--surface-2)] font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider transition-all min-h-[44px]"
            >
              <span>{audience.callout.secondaryCta.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE SPECIFICATION MODAL
          ========================================================= */}
      {selectedCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-950)]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border-strong)] shadow-[var(--shadow-xl)] p-6 sm:p-8 overflow-hidden text-[var(--paper)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider text-[var(--gold-400)] uppercase">
                  Sector {selectedCard.number} Overview
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-extrabold text-xl sm:text-2xl text-[var(--paper)]">
                  {selectedCard.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--warm-300)] hover:text-[var(--paper)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--warm-100)] leading-relaxed">
              {selectedCard.body}
            </p>

            {/* Key Specifications */}
            {selectedCard.specs && selectedCard.specs.length > 0 && (
              <div className="mt-5 p-4 rounded-[var(--radius-sm)] bg-[var(--surface-2)] border border-[var(--border)]">
                <h4 className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--gold-400)] mb-2.5">
                  Supplied Specifications &amp; Assurances:
                </h4>
                <ul className="space-y-2">
                  {selectedCard.specs.map((spec, i) => (
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
            )}

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[var(--border-strong)] text-[var(--paper)] hover:bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] text-xs font-extrabold uppercase tracking-wider shadow-sm transition-colors min-h-[44px]"
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
