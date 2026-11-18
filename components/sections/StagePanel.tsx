"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { StagePanelData } from "@/data/site";

export interface StagePanelProps {
  panel: StagePanelData;
  index: number;
  total: number;
}

export function StagePanel({ panel, index, total }: StagePanelProps) {
  const stepNumber = `0${index + 1} /`;

  return (
    <div
      style={{
        zIndex: index + 1,
        top: `calc(var(--header-h, 76px) + ${index * 8}px)`,
      }}
      className="sticky w-full bg-[var(--bg-base)] border-t border-[var(--border)] shadow-[var(--shadow-sm)] transition-all duration-300"
    >
      <div className="w-full max-w-[var(--container-site)] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          {/* =========================================================
              COLUMN 1: Step Counter Column ("01 /", "02 /", "03 /")
              ========================================================= */}
          <div className="lg:col-span-1 flex lg:flex-col items-start justify-start lg:pr-6 lg:border-r lg:border-[var(--border)]">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-xl sm:text-2xl text-[var(--ink-950)] tracking-tight">
              {stepNumber}
            </span>
          </div>

          {/* =========================================================
              COLUMN 2: Portrait Nature Image (Aspect 3:4 / 4:5)
              ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:px-8 xl:px-10 lg:border-r lg:border-[var(--border)]">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] overflow-hidden border border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-sm)] rounded-[var(--radius-md)]">
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />

              {/* Subtle natural vignette */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--ink-950)]/20 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Step indicator watermark in image */}
              <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/75 backdrop-blur-xs text-[length:var(--fs-2xs)] font-[family-name:var(--font-display)] font-semibold text-[var(--gold-200)] tracking-wider select-none">
                STEP {index + 1} OF {total} · YEDAPADAVU
              </div>
            </div>
          </div>

          {/* =========================================================
              COLUMN 3: Step Content (Eyebrow, Title, Body, Button)
              ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between lg:pl-10 xl:pl-14 pt-2 lg:pt-0">
            <div className="space-y-4 sm:space-y-5">
              {/* Category Eyebrow in uppercase bold */}
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--ink-950)]">
                  {panel.eyebrow}
                </span>
                <span className="w-1.5 h-1.5 bg-[var(--ink-950)] inline-block" aria-hidden="true" />
              </div>

              {/* Step Title in bold Montserrat */}
              <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-4xl)] text-[var(--ink-950)] tracking-tight leading-[1.12]">
                {panel.title}
              </h3>

              {/* Description Paragraphs in Quicksand */}
              <div className="space-y-3 pt-2 text-[var(--text-muted)] font-[family-name:var(--font-body)] font-medium text-sm sm:text-base lg:text-[length:var(--fs-md)] leading-relaxed max-w-[520px]">
                <p>{panel.p1}</p>
                <p>{panel.p2}</p>
              </div>

              {/* Quality Standards Bullet Checklist */}
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-[family-name:var(--font-body)] text-[var(--text-body)] font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-700)]" />
                  IS 383:2016 Certified
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-700)]" />
                  Zero Delivery Delays
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-700)]" />
                  Calibrated Weighbridge
                </span>
              </div>
            </div>

            {/* =======================================================
                COMPOUND ACTION BUTTON [ Learn more | → ]
                ======================================================= */}
            <div className="mt-8 pt-4">
              <Link
                href={panel.buttonHref}
                className="inline-flex items-stretch overflow-hidden border border-[var(--ink-950)] group transition-all duration-200 shadow-[var(--shadow-xs)] rounded-[var(--radius-xs)] min-h-[44px]"
              >
                <span className="bg-[var(--ink-950)] group-hover:bg-[var(--green-700)] text-[var(--paper)] px-6 py-3 font-[family-name:var(--font-display)] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center transition-colors">
                  {panel.buttonText}
                </span>
                <span className="bg-[var(--gold-500)] group-hover:bg-[var(--gold-600)] text-[var(--ink-950)] w-12 flex items-center justify-center shrink-0 border-l border-black/15 transition-colors">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
