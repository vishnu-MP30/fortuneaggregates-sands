"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { StagePanel } from "./StagePanel";

export function StagePanels() {
  const { stagePanels } = siteConfig;

  return (
    <section id="process" className="relative w-full bg-[var(--bg-base)] border-t border-[var(--border)] select-none overflow-visible">
      {/* =========================================================
          CONSTANT FAR-RIGHT FOREST GREEN CORNER SHADE
          Sleek, narrow diagonal Forest Green ribbon with gold hairline at top-right
          ========================================================= */}
      <div
        className="absolute top-0 right-0 w-24 sm:w-32 md:w-36 h-36 sm:h-48 md:h-56 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 180" fill="none" className="w-full h-full">
          {/* Narrow Forest Green ribbon */}
          <polygon
            points="30,0 60,0 120,135 120,180 110,180"
            fill="url(#stageGreenGradTop)"
          />
          {/* Fine Gold Accent Boundary Line */}
          <line
            x1="30"
            y1="0"
            x2="110"
            y2="180"
            stroke="var(--gold-500)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="stageGreenGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--green-600)" />
              <stop offset="50%" stopColor="var(--green-700)" />
              <stop offset="100%" stopColor="var(--green-900)" stopOpacity="0.85" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================
          SECTION HEADER: Eyebrow + Large Display Headline
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
          Each panel renders cleanly as user scrolls
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
