"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { StagePanel } from "./StagePanel";

export function StagePanels() {
  const { stagePanels } = siteConfig;

  return (
    <section id="process" className="relative w-full bg-[var(--bg-base)] border-t border-[var(--border)] select-none">
      {/* =========================================================
          FULL-BLEED EDGE-TO-EDGE PANORAMIC NATURE BANNER
          Spans 100% full width from left to right edge
          Uses the user's authentic crushing plant & blue metal panorama
          ========================================================= */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-base)]">
        <Image
          src="/images/quarry-crushing-panorama.jpg"
          alt="Fortune Aggregates industrial cone crushing plant, conveyor systems, and blue metal aggregate stockpiles in Yedapadavu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Facility Location Badge in bottom right */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 px-3 py-1.5 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase select-none shadow-[var(--shadow-sm)]">
          YEDAPADAVU CRUSHING FACILITY · MANGALURU
        </div>
      </div>

      {/* =========================================================
          SECTION HEADER: Eyebrow + Large Display Headline
          ========================================================= */}
      <div className="w-full max-w-[var(--container-site)] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 text-[var(--ink-950)]">
          <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase">
            SOLUTIONS & PROCESS
          </span>
          <span className="w-2 h-2 bg-[var(--ink-950)] inline-block" aria-hidden="true" />
        </div>

        <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] text-[var(--ink-950)] tracking-tight leading-[1.1]">
          Sustainable crushing & precision grading for lasting structures
        </h2>
      </div>

      {/* =========================================================
          STEP-BY-STEP STACKED SCROLLING PANELS (01 /, 02 /, 03 /)
          ========================================================= */}
      <div className="relative w-full">
        {stagePanels.map((panel, index) => (
          <StagePanel
            key={panel.title}
            panel={panel}
            index={index}
            total={stagePanels.length}
          />
        ))}
      </div>
    </section>
  );
}
