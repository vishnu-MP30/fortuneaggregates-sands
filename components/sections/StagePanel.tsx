"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { StagePanelData } from "@/data/site";

export interface StagePanelProps {
  panel: StagePanelData;
  index: number;
  total: number;
}

export function StagePanel({ panel, index, total }: StagePanelProps) {
  const stepNumber = `0${index + 1}`;

  return (
    <div
      style={{
        zIndex: index + 10,
        top: "var(--header-h, 76px)",
      }}
      className="sticky w-full min-h-[calc(100vh-var(--header-h,76px))] flex items-center justify-center bg-[var(--ink-950)] border-t border-[var(--border)] shadow-[var(--shadow-2xl)] overflow-hidden py-10 lg:py-0"
    >
      {/* =========================================================
          CONSTANT FAR-RIGHT FOREST GREEN CORNER SHADES
          Every card has the top-right and bottom-right green shades
          outside the contents, framing the right edge
          ========================================================= */}
      {/* Top-Right Far Corner Shade */}
      <div
        className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-64 sm:h-80 md:h-96 lg:h-[420px] pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg viewBox="0 0 360 420" fill="none" className="w-full h-full">
          <polygon
            points="140,0 360,0 360,420 220,420"
            fill="url(#cardGreenGradTop)"
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
            <linearGradient id="cardGreenGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
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
            fill="url(#cardGreenGradBottom)"
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
            <linearGradient id="cardGreenGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--green-900)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="var(--green-700)" />
              <stop offset="100%" stopColor="var(--green-600)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content Container (Centered in Viewport) */}
      <div className="relative z-10 w-full max-w-[var(--container-site)] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* =========================================================
              COLUMN 1: Step Counter Column ("01 /", "02 /", "03 /")
              ========================================================= */}
          <div className="lg:col-span-1 flex lg:flex-col items-start justify-start lg:pr-4">
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl text-[var(--paper)] tracking-tight">
                {stepNumber} <span className="text-[var(--gold-400)]">/</span>
              </span>
              <span className="hidden lg:block w-[1.5px] h-8 bg-[var(--gold-500)]/40 rounded-full" aria-hidden="true" />
            </div>
          </div>

          {/* =========================================================
              COLUMN 2: Vertical Portrait Image with Gold Border & Opposite Corner Green Tabs
              ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:px-4 xl:px-6">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[450px]">
              {/* Top-Left Diagonal Forest Green Corner Tab */}
              <div
                className="absolute -top-3.5 -left-3.5 w-16 sm:w-18 h-16 sm:h-18 pointer-events-none z-20 overflow-visible"
                aria-hidden="true"
              >
                <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
                  <polygon
                    points="0,22 0,72 22,72 72,22 72,0 22,0"
                    fill="url(#panelGreenCornerTop)"
                  />
                  <line
                    x1="0"
                    y1="72"
                    x2="72"
                    y2="0"
                    stroke="var(--gold-500)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient id="panelGreenCornerTop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--green-600)" />
                      <stop offset="100%" stopColor="var(--green-800)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Bottom-Right Diagonal Forest Green Corner Tab */}
              <div
                className="absolute -bottom-3.5 -right-3.5 w-16 sm:w-18 h-16 sm:h-18 pointer-events-none z-20 overflow-visible"
                aria-hidden="true"
              >
                <svg viewBox="0 0 72 72" fill="none" className="w-full h-full">
                  <polygon
                    points="0,72 50,72 72,50 72,0 50,0 0,50"
                    fill="url(#panelGreenCornerBottom)"
                  />
                  <line
                    x1="0"
                    y1="72"
                    x2="72"
                    y2="0"
                    stroke="var(--gold-500)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient id="panelGreenCornerBottom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--green-800)" />
                      <stop offset="100%" stopColor="var(--green-600)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* The Vertical Portrait Image Box with Gold Border and Rounded Corners */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden border-[1.5px] border-[var(--gold-500)] bg-[var(--ink-950)] shadow-[var(--shadow-xl)] rounded-[var(--radius-lg)]">
                <Image
                  src={panel.image}
                  alt={panel.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--ink-950)]/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Step indicator watermark badge */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--ink-950)]/85 backdrop-blur-sm border border-[var(--gold-500)]/40 text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-bold text-[var(--paper)] tracking-wider select-none shadow-[var(--shadow-xs)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" />
                  <span>STEP {index + 1} OF {total} · YEDAPADAVU</span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              COLUMN 3: Step Content (Eyebrow, Title, Body, Button)
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:pl-8 xl:pl-12 pt-4 lg:pt-0">
            {/* Category Eyebrow in uppercase bold with gold square marker */}
            <div className="flex items-center gap-2.5">
              <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--paper)]">
                {panel.eyebrow}
              </span>
              <span className="w-1.5 h-1.5 bg-[var(--gold-500)] inline-block shrink-0" aria-hidden="true" />
            </div>

            {/* Step Title in bold Montserrat, crisp paper white */}
            <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] text-[var(--paper)] tracking-tight leading-[1.12]">
              {panel.title}
            </h3>

            {/* Description Paragraphs in high-contrast warm white */}
            <div className="space-y-3 pt-1 text-[var(--warm-100)] font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] leading-relaxed max-w-[540px]">
              <p>{panel.p1}</p>
              <p>{panel.p2}</p>
            </div>

            {/* Quality Standards Bullet Checklist with green checkmarks and white text */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-[family-name:var(--font-body)] text-[var(--paper)] font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--green-500)] shrink-0" />
                IS 383:2016 Certified
              </span>
              <span className="text-[var(--border-strong)] hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--green-500)] shrink-0" />
                Zero Delivery Delays
              </span>
              <span className="text-[var(--border-strong)] hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--green-500)] shrink-0" />
                Calibrated Weighbridge
              </span>
            </div>

            {/* =======================================================
                SOLID GOLD COMPOUND ACTION BUTTON [ SEE OUR GRADES | → ]
                ======================================================= */}
            <div className="pt-3">
              <Link
                href={panel.buttonHref}
                className="inline-flex items-stretch overflow-hidden bg-[var(--gold-500)] hover:bg-[var(--gold-400)] active:bg-[var(--gold-600)] text-[var(--ink-950)] group transition-all duration-200 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] rounded-[var(--radius-xs)] min-h-[44px]"
              >
                <span className="px-6 py-3 font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center">
                  {panel.buttonText}
                </span>
                <span className="w-12 border-l border-black/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
