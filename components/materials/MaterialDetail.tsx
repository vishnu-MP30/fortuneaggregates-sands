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
      className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] p-[var(--space-5)] sm:p-[var(--space-6)] lg:p-[var(--space-7)] transition-colors duration-[var(--dur-base)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-6)] lg:gap-[var(--space-8)] items-center">
        {/* =========================================================
            LEFT COLUMN (45% on lg): Large Circular Image & Concentric Rings
            ========================================================= */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-[var(--space-4)] sm:py-[var(--space-6)]">
          {/* One subtle gold glow behind the active big circle only */}
          <div
            className="absolute w-[280px] sm:w-[360px] lg:w-[440px] h-[280px] sm:h-[360px] lg:h-[440px] rounded-full pointer-events-none -z-0 opacity-40 blur-[32px] bg-[radial-gradient(circle,var(--gold-500)_0%,transparent_70%)]"
            aria-hidden="true"
          />

          {/* Concentric Decorative Rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer faint ring: offset 32px, 40% opacity */}
            <div
              className="absolute w-[344px] sm:w-[424px] lg:w-[504px] h-[344px] sm:h-[424px] lg:h-[504px] rounded-full border border-[var(--gold-300)] opacity-40 pointer-events-none"
              aria-hidden="true"
            />

            {/* Inner ring: offset 16px */}
            <div
              className="absolute w-[312px] sm:w-[392px] lg:w-[472px] h-[312px] sm:h-[392px] lg:h-[472px] rounded-full border border-[var(--gold-300)] pointer-events-none"
              aria-hidden="true"
            />

            {/* Main Circular Image Frame: 440px desktop, 360px tablet, 280px mobile */}
            <div
              key={material.slug}
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-[var(--shadow-lg)] border-4 border-[var(--surface)] ring-2 ring-[var(--gold-500)] animate-[detail-fade_var(--dur-slow)_var(--ease-out)] motion-reduce:animate-none bg-[var(--surface)]"
            >
              <Image
                src={material.image}
                alt={`${material.name} aggregate heap`}
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 440px"
                className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] hover:scale-105"
              />
              {/* Subtle inner lens ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-black/10"
                aria-hidden="true"
              />
            </div>

            {/* Floating round badge at lower right: size in Montserrat 800 on --grad-gold */}
            <div
              className="absolute -bottom-2 right-2 sm:bottom-2 sm:right-6 lg:bottom-4 lg:right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[image:var(--grad-gold)] text-[var(--text-on-gold)] shadow-[var(--shadow-md)] border-2 border-[var(--surface)] flex flex-col items-center justify-center text-center select-none z-10"
              aria-label={`Aggregate size: ${material.size}`}
            >
              <span className="font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] uppercase tracking-tight leading-none">
                {material.size}
              </span>
              <span className="font-[family-name:var(--font-body)] text-[length:var(--fs-2xs)] font-semibold uppercase tracking-wider opacity-85 mt-0.5">
                GRADE
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN (55% on lg): Specifications, Uses, Features & CTAs
            ========================================================= */}
        <div
          key={`content-${material.slug}`}
          className="lg:col-span-7 flex flex-col justify-between h-full pt-[var(--space-2)] animate-[detail-fade_var(--dur-slow)_var(--ease-out)] motion-reduce:animate-none"
        >
          <div>
            {/* Eyebrow: material type */}
            <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] tracking-[var(--tracking-caps)] uppercase text-[var(--gold-700)]">
              {material.type}
            </span>

            {/* H3: material name, Montserrat 800 */}
            <h3 className="mt-[var(--space-2)] font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-2xl)] sm:text-[length:var(--fs-3xl)] uppercase text-[var(--ink-950)] leading-[var(--lh-snug)]">
              {material.name}
            </h3>

            {/* One-line description, Quicksand 500, --fs-lg */}
            <p className="mt-[var(--space-3)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-md)] sm:text-[length:var(--fs-lg)] text-[var(--text-body)] leading-[var(--lh-relaxed)] max-w-[620px]">
              {material.description}
            </p>

            {/* "Best for" row with use-case chips */}
            <div className="mt-[var(--space-5)]">
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-caps)] mb-[var(--space-2)]">
                Best For
              </span>
              <div className="flex flex-wrap gap-[var(--space-2)]">
                {material.uses.map((useId) => {
                  const match = useCases.find((u) => u.id === useId);
                  if (!match) return null;
                  const UseIcon = iconMap[match.icon] || Layers;

                  return (
                    <span
                      key={useId}
                      className="inline-flex items-center gap-[var(--space-1)] px-[var(--space-3)] py-[var(--space-1)] rounded-[var(--radius-pill)] bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-body)] font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)]"
                    >
                      <UseIcon className="w-3.5 h-3.5 text-[var(--gold-600)] shrink-0" strokeWidth={2} />
                      <span>{match.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* "Features" list: 3-4 items with gold Check icon */}
            <div className="mt-[var(--space-5)]">
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-caps)] mb-[var(--space-2)]">
                Key Features
              </span>
              <ul className="space-y-[var(--space-2)] font-[family-name:var(--font-body)] text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--text-body)]">
                {material.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-[var(--space-2)]">
                    <span className="p-0.5 rounded-full bg-[var(--accent-soft)] text-[var(--gold-600)] shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Small Spec Strip of 3 cells separated by hairlines */}
            <div className="mt-[var(--space-6)] grid grid-cols-3 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--surface-2)] overflow-hidden divide-x divide-[var(--border)]">
              <div className="p-[var(--space-3)] sm:p-[var(--space-4)] flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-caps)]">
                  SIZE
                </span>
                <span className="mt-[var(--space-1)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--green-700)]">
                  {material.size}
                </span>
              </div>
              <div className="p-[var(--space-3)] sm:p-[var(--space-4)] flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-caps)]">
                  TYPE
                </span>
                <span className="mt-[var(--space-1)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--green-700)] truncate">
                  {material.type}
                </span>
              </div>
              <div className="p-[var(--space-3)] sm:p-[var(--space-4)] flex flex-col">
                <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] text-[var(--text-muted)] uppercase tracking-[var(--tracking-caps)]">
                  SUPPLY
                </span>
                <span className="mt-[var(--space-1)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] text-[var(--green-700)]">
                  Per MT, ex-yard
                </span>
              </div>
            </div>
          </div>

          {/* Action Row & Pagination Controls */}
          <div className="mt-[var(--space-7)] pt-[var(--space-5)] border-t border-[var(--border)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[var(--space-4)]">
            {/* Primary & Outline Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[var(--space-3)] w-full sm:w-auto">
              <Link
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[image:var(--grad-gold)] text-[var(--text-on-gold)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-sm)] uppercase tracking-[var(--tracking-wide)] shadow-[var(--shadow-sm)] hover:brightness-105 active:brightness-95 transition-all text-center"
              >
                Request a Quote
              </Link>
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-5)] py-[var(--space-3)] rounded-[var(--radius-pill)] border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--green-700)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-sm)] uppercase tracking-[var(--tracking-wide)] hover:bg-[var(--surface-2)] transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 text-[var(--accent)]" />
                <span>Ask on WhatsApp</span>
              </Link>
            </div>

            {/* Pagination Controls at Bottom Right */}
            <div className="flex items-center justify-end sm:justify-start gap-[var(--space-3)] select-none">
              <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] text-[var(--text-muted)] tracking-wider">
                {counterText}
              </span>
              <div className="flex items-center gap-[var(--space-1)]">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous material"
                  className="p-[var(--space-2)] rounded-[var(--radius-pill)] border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)] text-[var(--green-700)] transition-colors focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--focus-ring)] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next material"
                  className="p-[var(--space-2)] rounded-[var(--radius-pill)] border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)] text-[var(--green-700)] transition-colors focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--focus-ring)] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
