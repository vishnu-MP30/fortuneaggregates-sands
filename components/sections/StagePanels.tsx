"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { StagePanel } from "./StagePanel";

export function StagePanels() {
  const { stagePanels } = siteConfig;

  return (
    <section id="process" className="relative w-full bg-[var(--bg-base)] border-t border-[var(--border)] select-none overflow-visible">
      {/* =========================================================
          FULL-BLEED EDGE-TO-EDGE PANORAMIC NATURE BANNER
          Spans 100% full width from left to right edge
          High-definition authentic crushing plant & blue metal panorama
          ========================================================= */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[540px] overflow-hidden border-b border-[var(--border)] bg-[var(--ink-950)]">
        <Image
          src="/images/quarry-crushing-panorama-hd.jpg"
          alt="Fortune Aggregates industrial cone crushing plant, conveyor systems, and blue metal aggregate stockpiles in Yedapadavu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle cinematic gradient vignette at bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[var(--ink-950)]/50 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Facility Location Badge in bottom right */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 px-3.5 py-1.5 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/85 backdrop-blur-xs border border-[var(--gold-500)]/30 text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider uppercase select-none shadow-[var(--shadow-sm)]">
          YEDAPADAVU CRUSHING FACILITY · MANGALURU
        </div>
      </div>

      {/* =========================================================
          SECTION HEADER: Eyebrow + Large Display Headline
          Clean Night Ink background without right-side green shade
          ========================================================= */}
      <div className="relative z-10 w-full max-w-[var(--container-site)] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[var(--paper)]">
            SOLUTIONS &amp; PROCESS
          </span>
          <span className="w-8 h-[2.5px] bg-[var(--gold-500)] rounded-full shrink-0" aria-hidden="true" />
        </div>

        <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] tracking-tight leading-[1.12]">
          <span className="text-[var(--paper)]">Sustainable crushing &amp; precision grading for </span>
          <span className="block sm:inline text-[var(--gold-400)] fas-wordmark-gradient">lasting structures</span>
        </h2>
      </div>

      {/* =========================================================
          STEP-BY-STEP STACKED SCROLLING PANELS (01 /, 02 /, 03 /)
          Each panel is sticky, min-h-[calc(100vh-var(--header-h,76px))],
          completely covering the previous card one-by-one as user scrolls
          ========================================================= */}
      <div className="relative z-10 w-full">
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
