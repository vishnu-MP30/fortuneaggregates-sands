"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { materials, Material } from "@/data/materials";
import { siteConfig } from "@/data/site";
import { UseId } from "@/data/uses";
import { SectionTag } from "@/components/ui/SectionTag";
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
      className="relative w-full bg-[var(--bg-base)] border-t border-b border-[var(--border)] py-[var(--space-8)] sm:py-[var(--space-9)] lg:py-[var(--space-10)] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
        {/* =========================================================
            1. HEADER BLOCK (Left-Aligned, Matching Above Sections)
            ========================================================= */}
        <div className="flex flex-col items-start text-left">
          {/* Eyebrow Tag with Square Marker matching Image 1 */}
          <div className="flex items-center gap-2 text-[var(--ink-950)]">
            <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase">
              Our materials
            </span>
            <span
              className="w-2 h-2 bg-[var(--ink-950)] shrink-0 inline-block"
              aria-hidden="true"
            />
          </div>

          {/* H2 Heading in Sentence Case and Ink-950 Black */}
          <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] text-[var(--ink-950)] leading-[1.12] tracking-tight">
            The right grade for every pour
          </h2>

          {/* Subtext */}
          <p className="mt-3 font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] text-[var(--text-muted)] max-w-[620px] leading-relaxed">
            Graded, tested and dispatched to spec. Pick a material to see its
            size, uses and features.
          </p>
        </div>

        {/* =========================================================
            2. USE-CASE FILTER ROW (Pill-shaped tag buttons)
            ========================================================= */}
        <div className="mt-[var(--space-6)] sm:mt-[var(--space-7)] flex justify-start">
          <UseFilter
            activeFilter={activeFilter}
            onSelectFilter={handleFilterSelect}
          />
        </div>

        {/* =========================================================
            3. CIRCLE SELECTOR ROW (8 circular thumbnails on a connecting track)
            ========================================================= */}
        <div className="mt-[var(--space-7)] sm:mt-[var(--space-8)] relative w-full">
          {/* Thin 1px --border track line behind the circles at exact vertical center */}
          <div
            className="absolute left-0 right-0 top-[48px] sm:top-[56px] lg:top-[64px] h-[1px] bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Circle Selector Tablist */}
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Fortune materials selector"
            onKeyDown={handleKeyDown}
            className="relative z-10 flex items-start justify-between w-full overflow-x-auto lg:overflow-visible pt-[var(--space-2)] pb-[var(--space-5)] scrollbar-none snap-x snap-mandatory lg:snap-none gap-[var(--space-3)] sm:gap-[var(--space-4)] lg:gap-0"
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
        <div ref={panelRef} className="mt-[var(--space-6)] sm:mt-[var(--space-8)]">
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
        <div className="mt-[var(--space-8)] sm:mt-[var(--space-9)] p-[var(--space-5)] sm:p-[var(--space-6)] rounded-[var(--radius-xl)] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex flex-col sm:flex-row items-center justify-between gap-[var(--space-4)]">
          <p className="font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-lg)] text-[var(--ink-950)] text-center sm:text-left">
            Not sure which grade you need?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[var(--space-3)]">
            <Link
              href={siteConfig.contact.whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-5)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[image:var(--grad-gold)] text-[var(--text-on-gold)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-sm)] uppercase tracking-[var(--tracking-caps)] shadow-[var(--shadow-glow)] hover:brightness-105 active:translate-y-[1px] transition-all min-h-[44px]"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-5)] py-[var(--space-3)] rounded-[var(--radius-pill)] border border-[var(--border-strong)] bg-[var(--surface-2)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-sm)] uppercase tracking-[var(--tracking-caps)] hover:bg-[var(--surface)] active:translate-y-[1px] transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-[var(--accent)]" strokeWidth={2} />
              <span>Ask on WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
