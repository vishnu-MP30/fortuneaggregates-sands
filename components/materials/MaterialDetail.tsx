"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Layers,
  Building2,
  BrickWall,
  LayoutGrid,
  Route,
  LucideIcon,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Material } from "@/data/materials";
import { useCases } from "@/data/uses";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Building2,
  BrickWall,
  LayoutGrid,
  Route,
};

export interface MaterialDetailProps {
  material: Material;
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export function MaterialDetail({
  material,
  currentIndex,
  totalCount,
  onPrev,
  onNext,
}: MaterialDetailProps) {
  const counterText = `${String(currentIndex + 1).padStart(2, "0")} / ${String(
    totalCount
  ).padStart(2, "0")}`;

  const quoteUrl = `https://api.whatsapp.com/send/?phone=918422819302&text=Hello%20Fortune%20Aggregates%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20${encodeURIComponent(
    material.name
  )}.`;
  const waUrl = `https://api.whatsapp.com/send/?phone=918422819302&text=Hello%20Fortune%20Aggregates%2C%20I%20would%20like%20to%20ask%20about%20${encodeURIComponent(
    material.name
  )}.`;

  return (
    <div
      role="tabpanel"
      id={`panel-${material.slug}`}
      aria-labelledby={`tab-${material.slug}`}
      className="relative w-full rounded-[24px] bg-[var(--ink-950)]/90 backdrop-blur-xl border border-[var(--gold-500)]/35 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-6 sm:p-8 lg:p-10 overflow-hidden transition-colors duration-[var(--dur-base)]"
    >
      {/* Top-Right Angular Shade (Dual-band: Gold + Forest Green Accent Ribbon) */}
      <div className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none overflow-hidden z-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 140 140"
          fill="none"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,0 140,0 140,90 90,140 70,140 30,0"
            fill="var(--green-700)"
            fillOpacity="0.85"
          />
          <line
            x1="30"
            y1="0"
            x2="70"
            y2="140"
            stroke="var(--gold-500)"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* =========================================================
            LEFT COLUMN: Large Circular Image & Concentric Golden Rings
            ========================================================= */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4 sm:py-6">
          {/* Subtle gold radial glow behind the active circle */}
          <div
            className="absolute w-[280px] sm:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[420px] rounded-full pointer-events-none opacity-40 blur-[36px] bg-[radial-gradient(circle,var(--gold-500)_0%,transparent_70%)]"
            aria-hidden="true"
          />

          {/* Concentric Decorative Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer concentric ring */}
            <div
              className="absolute w-[310px] sm:w-[380px] lg:w-[440px] h-[310px] sm:h-[380px] lg:h-[440px] rounded-full border border-[var(--gold-500)]/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner concentric ring */}
            <div
              className="absolute w-[280px] sm:w-[345px] lg:w-[400px] h-[280px] sm:h-[345px] lg:h-[400px] rounded-full border border-[var(--gold-500)]/50 pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Circular Image Frame */}
            <div
              key={material.slug}
              className="relative w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.85)] border-2 border-[var(--gold-500)] ring-4 ring-[var(--gold-500)]/20 bg-[var(--ink-950)] animate-[detail-fade_var(--dur-slow)_var(--ease-out)] motion-reduce:animate-none"
            >
              <Image
                src={material.image}
                alt={`${material.name} aggregate heap`}
                fill
                priority
                sizes="(max-width: 640px) 250px, (max-width: 1024px) 310px, 360px"
                className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] hover:scale-105"
              />
              {/* Subtle inner lens ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-white/10"
                aria-hidden="true"
              />
            </div>

            {/* Floating round badge at lower right: size in bold on gold gradient */}
            <div
              className="absolute -bottom-2 right-2 sm:bottom-2 sm:right-6 lg:bottom-4 lg:right-6 w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[image:var(--grad-gold)] text-[var(--ink-950)] shadow-[0_8px_24px_rgba(0,0,0,0.6)] border-2 border-[var(--ink-950)] flex flex-col items-center justify-center text-center select-none z-10"
              aria-label={`Aggregate size: ${material.size}`}
            >
              <span className="font-[family-name:var(--font-display)] font-black text-sm sm:text-base uppercase tracking-tight leading-none text-[var(--ink-950)]">
                {material.size}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[length:var(--fs-2xs)] font-extrabold uppercase tracking-widest text-[var(--ink-950)] mt-0.5">
                GRADE
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: Specifications, Uses, Features & CTAs
            ========================================================= */}
        <div
          key={`content-${material.slug}`}
          className="lg:col-span-7 flex flex-col justify-between h-full pt-2 animate-[detail-fade_var(--dur-slow)_var(--ease-out)] motion-reduce:animate-none"
        >
          <div>
            {/* Eyebrow: material type */}
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--gold-400)]">
                {material.type}
              </span>
              <span
                className="w-5 h-[2px] bg-[var(--gold-500)] inline-block"
                aria-hidden="true"
              />
            </div>

            {/* H3: material name, bold uppercase */}
            <h3 className="mt-2 font-[family-name:var(--font-display)] font-black text-2xl sm:text-3xl lg:text-4xl uppercase text-[var(--paper)] leading-tight tracking-tight">
              {material.name}
            </h3>

            {/* One-line description */}
            <p className="mt-3 font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--warm-200)]/90 leading-relaxed max-w-[620px]">
              {material.description}
            </p>

            {/* "Best for" row with use-case chips */}
            <div className="mt-5">
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-xs text-[var(--gold-400)] uppercase tracking-[var(--tracking-caps)] mb-2">
                BEST FOR
              </span>
              <div className="flex flex-wrap gap-2">
                {material.uses.map((useId) => {
                  const match = useCases.find((u) => u.id === useId);
                  if (!match) return null;
                  const UseIcon = iconMap[match.icon] || Layers;

                  return (
                    <span
                      key={useId}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--ink-950)]/70 border border-[var(--gold-500)]/30 text-[var(--paper)] font-[family-name:var(--font-body)] font-semibold text-xs"
                    >
                      <UseIcon
                        className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0"
                        strokeWidth={2}
                      />
                      <span>{match.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* "Features" list with gold Check icon */}
            <div className="mt-5">
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-xs text-[var(--gold-400)] uppercase tracking-[var(--tracking-caps)] mb-2">
                KEY FEATURES
              </span>
              <ul className="space-y-2 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--paper)]/95">
                {material.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[var(--gold-500)]/20 text-[var(--gold-400)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check
                        className="w-3 h-3 stroke-[3]"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spec Strip of 3 cells */}
            <div className="mt-6 grid grid-cols-3 border border-[var(--gold-500)]/35 rounded-xl bg-[var(--ink-950)]/60 divide-x divide-[var(--gold-500)]/25 overflow-hidden backdrop-blur-sm">
              <div className="p-3 sm:p-4 flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-2xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)]">
                  SIZE
                </span>
                <span className="mt-1 font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-[var(--paper)]">
                  {material.size}
                </span>
              </div>
              <div className="p-3 sm:p-4 flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-2xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)]">
                  TYPE
                </span>
                <span className="mt-1 font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-[var(--paper)] truncate">
                  {material.type}
                </span>
              </div>
              <div className="p-3 sm:p-4 flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-2xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)]">
                  SUPPLY
                </span>
                <span className="mt-1 font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm text-[var(--paper)]">
                  Per MT, ex-yard
                </span>
              </div>
            </div>
          </div>

          {/* Action Row & Pagination Controls */}
          <div className="mt-7 pt-5 border-t border-[var(--gold-500)]/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Primary & Outline Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_24px_rgba(200,151,31,0.35)] hover:shadow-[0_0_32px_rgba(200,151,31,0.55)] transition-all text-center"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </Link>
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full border border-[var(--gold-500)]/50 bg-[var(--ink-950)]/60 hover:border-[var(--gold-400)] hover:bg-[var(--ink-950)] text-[var(--paper)] font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 text-[var(--gold-400)]" />
                <span>Ask on WhatsApp</span>
              </Link>
            </div>

            {/* Pagination Controls at Bottom Right */}
            <div className="flex items-center justify-end sm:justify-start gap-3 select-none">
              <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm text-[var(--paper)]/80 tracking-wider">
                {counterText}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous material"
                  className="p-2.5 rounded-full border border-[var(--gold-500)]/40 hover:border-[var(--gold-400)] bg-[var(--ink-950)]/70 hover:bg-[var(--ink-950)] text-[var(--paper)] hover:text-[var(--gold-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next material"
                  className="p-2.5 rounded-full border border-[var(--gold-500)]/40 hover:border-[var(--gold-400)] bg-[var(--ink-950)]/70 hover:bg-[var(--ink-950)] text-[var(--paper)] hover:text-[var(--gold-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
