"use client";

import React from "react";
import { siteConfig } from "@/data/site";
import { StagePanel } from "./StagePanel";

export function StagePanels() {
  const { stagePanels } = siteConfig;

  return (
    <section id="process" className="relative w-full bg-[var(--bg-base)] border-t border-[var(--border)] select-none overflow-visible">
      {/* =========================================================
          CONSTANT FAR-RIGHT FOREST GREEN CORNER SHADES
          Top-Right & Bottom-Right Diagonal Accents with Gold Hairlines
          Positioned on the section background outside the content cards
          ========================================================= */}
      {/* Top-Right Far Corner Shade */}
      <div
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-64 sm:h-80 md:h-96 lg:h-[420px] pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 360 420" fill="none" className="w-full h-full">
          <polygon
            points="140,0 360,0 360,420 220,420"
            fill="url(#stageGreenGradTop)"
          />
          <line
            x1="140"
            y1="0"
            x2="220"
            y2="420"
            stroke="var(--gold-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="stageGreenGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--green-600)" />
              <stop offset="50%" stopColor="var(--green-700)" />
              <stop offset="100%" stopColor="var(--green-900)" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom-Right Far Corner Shade */}
      <div
        className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-64 sm:h-80 md:h-96 lg:h-[420px] pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 360 420" fill="none" className="w-full h-full">
          <polygon
            points="220,0 360,0 360,420 140,420"
            fill="url(#stageGreenGradBottom)"
          />
          <line
            x1="220"
            y1="0"
            x2="140"
            y2="420"
            stroke="var(--gold-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="stageGreenGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--green-900)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--green-700)" />
              <stop offset="100%" stopColor="var(--green-600)" />
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
