"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { materials, Material } from "@/data/materials";
import { siteConfig } from "@/data/site";
import { UseId } from "@/data/uses";
import { UseFilter } from "@/components/materials/UseFilter";
import { MaterialCircle } from "@/components/materials/MaterialCircle";
import { MaterialDetail } from "@/components/materials/MaterialDetail";
import { JobTable } from "@/components/materials/JobTable";

export function Materials() {
  const [activeFilter, setActiveFilter] = useState<UseId>("all");
  const [selectedSlug, setSelectedSlug] = useState<string>(materials[0].slug);
  const panelRef = useRef<HTMLDivElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);

  // Sync with URL Hash on Mount and PopState
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#materials=")) {
        const slug = hash.replace("#materials=", "");
        const match = materials.find((m) => m.slug === slug);
        if (match) {
          setSelectedSlug(match.slug);
        }
      }
    };

    handleHashChange();
    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, []);

  // Update URL Hash when selected material changes (without jumping)
  const selectMaterial = useCallback((slug: string, scroll = false) => {
    setSelectedSlug(slug);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#materials=${slug}`);
    }
    if (scroll && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  // Filter Handler: dims non-matching circles & auto-selects first match
  const handleFilterSelect = (filterId: UseId) => {
    setActiveFilter(filterId);
    if (filterId === "all") return;

    // Find first material matching this filter
    const firstMatch = materials.find((m) => m.uses.includes(filterId));
    if (firstMatch) {
      selectMaterial(firstMatch.slug);
    }
  };

  // Keyboard navigation for role="tablist"
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = materials.findIndex((m) => m.slug === selectedSlug);
    if (currentIndex === -1) return;

    let targetIndex: number | null = null;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % materials.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + materials.length) % materials.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = materials.length - 1;
    }

    if (targetIndex !== null) {
      const nextMaterial = materials[targetIndex];
      selectMaterial(nextMaterial.slug);
      // Focus corresponding tab
      const tabElement = document.getElementById(`tab-${nextMaterial.slug}`);
      tabElement?.focus();
    }
  };

  const selectedIndex = materials.findIndex((m) => m.slug === selectedSlug);
  const currentMaterial: Material =
    materials[selectedIndex >= 0 ? selectedIndex : 0];

  const handlePrev = () => {
    const nextIndex =
      (selectedIndex - 1 + materials.length) % materials.length;
    selectMaterial(materials[nextIndex].slug);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % materials.length;
    selectMaterial(materials[nextIndex].slug);
  };

  return (
    <section
      id="materials"
      className="relative w-full bg-[var(--ink-950)] border-t border-b border-[var(--border)] py-[var(--space-8)] sm:py-[var(--space-9)] lg:py-[var(--space-10)] overflow-hidden"
    >
      {/* Background Image: Authentic Quarry Landscape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/job-table-bg.jpg"
          alt="Fortune Aggregates raw material quarry processing background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep dark overlay to ensure readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--ink-950)]/92 via-[var(--ink-950)]/85 to-[var(--ink-950)]/96"
          aria-hidden="true"
        />
      </div>

      {/* Crushed Rock Foreground at Bottom of Section */}
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 lg:h-36 pointer-events-none z-10 opacity-90">
        <Image
          src="/images/aggregate-pile-real.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Top-Right Angular Shade (Dual-band: Gold + Forest Green Accent Ribbon) */}
      <div className="absolute top-0 right-0 w-36 sm:w-56 lg:w-72 h-36 sm:h-56 lg:h-72 pointer-events-none overflow-hidden z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <polygon
            points="90,0 200,0 200,110 110,200 80,200 50,0"
            fill="var(--green-700)"
            fillOpacity="0.85"
          />
          <line
            x1="50"
            y1="0"
            x2="80"
            y2="200"
            stroke="var(--gold-500)"
            strokeWidth="2"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* =========================================================
            1. HEADER BLOCK (Left-Aligned, Matching Reference 1)
            ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow Tag with Gold Marker Bar */}
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--paper)]">
                Our materials
              </span>
              <span
                className="w-8 h-[3px] bg-[var(--gold-500)] inline-block"
                aria-hidden="true"
              />
            </div>

            {/* H2 Heading in Sentence Case, White + Gold */}
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-4xl md:text-5xl text-[var(--paper)] leading-[1.08] tracking-tight">
              Graded, tested and<br />
              dispatched{" "}
              <span className="text-[var(--gold-400)] fas-wordmark-gradient">
                to spec.
              </span>
            </h2>
          </div>

          {/* Right Explanatory Subtext with Vertical Divider */}
          <div className="flex items-center md:border-l md:border-[var(--gold-500)]/30 md:pl-8 max-w-[380px]">
            <p className="font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--warm-200)]/85 leading-relaxed">
              Graded, tested and dispatched to spec. Pick a material to see its
              size, uses and features.
            </p>
          </div>
        </div>

        {/* =========================================================
            2. USE-CASE FILTER ROW (Pill-shaped tag buttons)
            ========================================================= */}
        <div className="mt-6 sm:mt-8 flex justify-start">
          <UseFilter
            activeFilter={activeFilter}
            onSelectFilter={handleFilterSelect}
          />
        </div>

        {/* =========================================================
            3. CIRCLE SELECTOR ROW (8 circular thumbnails on a connecting track)
            ========================================================= */}
        <div className="mt-8 sm:mt-10 relative w-full">
          {/* Thin gold track line behind the circles at vertical center */}
          <div
            className="absolute left-0 right-0 top-[48px] sm:top-[56px] lg:top-[64px] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)]/30 to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Circle Selector Tablist */}
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Fortune materials selector"
            onKeyDown={handleKeyDown}
            className="relative z-10 flex items-start justify-between w-full overflow-x-auto lg:overflow-visible pt-2 pb-5 scrollbar-none snap-x snap-mandatory lg:snap-none gap-3 sm:gap-4 lg:gap-0"
          >
            {materials.map((material) => {
              const isSelected = material.slug === selectedSlug;
              const isDimmed =
                activeFilter !== "all" && !material.uses.includes(activeFilter);

              return (
                <div key={material.slug} className="snap-center shrink-0">
                  <MaterialCircle
                    material={material}
                    isSelected={isSelected}
                    isDimmed={isDimmed}
                    onSelect={() => selectMaterial(material.slug)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            4. DETAIL PANEL (Two-column card with large image & spec strip)
            ========================================================= */}
        <div ref={panelRef} className="mt-6 sm:mt-8">
          <MaterialDetail
            material={currentMaterial}
            currentIndex={selectedIndex >= 0 ? selectedIndex : 0}
            totalCount={materials.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        {/* =========================================================
            5. "WHICH ONE DO I NEED?" TABLE
            ========================================================= */}
        <JobTable onSelectMaterial={(slug) => selectMaterial(slug, true)} />

        {/* =========================================================
            6. SLIM CTA ROW (Directly after Materials)
            ========================================================= */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-[20px] bg-[var(--ink-950)]/85 backdrop-blur-md border border-[var(--gold-500)]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-body)] font-medium text-base sm:text-lg text-[var(--paper)] text-center sm:text-left">
            Not sure which grade you need?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={siteConfig.contact.whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(200,151,31,0.35)] active:translate-y-[1px] transition-all min-h-[44px]"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Link>
            <Link
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[var(--gold-500)]/50 bg-[var(--ink-950)]/60 hover:border-[var(--gold-400)] text-[var(--paper)] font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[var(--ink-950)] active:translate-y-[1px] transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-[var(--gold-400)]" strokeWidth={2} />
              <span>Ask on WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
