"use client";

import React from "react";
import Image from "next/image";
import { Material } from "@/data/materials";

export interface MaterialCircleProps {
  material: Material;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: () => void;
}

export function MaterialCircle({
  material,
  isSelected,
  isDimmed,
  onSelect,
}: MaterialCircleProps) {
  return (
    <button
      type="button"
      role="tab"
      id={`tab-${material.slug}`}
      aria-selected={isSelected}
      aria-controls={`panel-${material.slug}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={onSelect}
      className={`group flex flex-col items-center shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-lg)] p-[var(--space-2)] transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] select-none ${
        isDimmed ? "opacity-35 hover:opacity-75" : "opacity-100"
      }`}
    >
      {/* Circular Thumbnail Container with Clean Bezel & Layered Framing */}
      <div
        className={`relative rounded-full transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] ${
          /* Responsive circle diameters: 112px desktop, 96px tablet (<1024px), 80px mobile (<640px) */
          "w-[80px] h-[80px] sm:w-[96px] sm:h-[96px] lg:w-[112px] lg:h-[112px]"
        } ${
          isSelected
            ? "scale-[1.08] ring-[3px] ring-[var(--gold-500)] ring-offset-[6px] ring-offset-[var(--surface-2)] shadow-[var(--shadow-glow)] -translate-y-1"
            : "ring-1 ring-[var(--border-strong)] shadow-[var(--shadow-sm)] hover:ring-2 hover:ring-[var(--gold-300)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
        }`}
      >
        {/* Inner Bezel Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--surface)] bg-[var(--surface)]">
          <Image
            src={material.image}
            alt={`${material.name} aggregate heap`}
            fill
            sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
            className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-108"
          />
          {/* Subtle inner lens ring for photographic depth */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-black/10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Material Label and Size beneath */}
      <div className="mt-[var(--space-3)] flex flex-col items-center text-center max-w-[124px]">
        <span
          className={`font-[family-name:var(--font-display)] text-[length:var(--fs-sm)] transition-colors leading-[var(--lh-snug)] ${
            isSelected
              ? "font-[var(--fw-black)] text-[var(--ink-950)] scale-[1.02]"
              : "font-[var(--fw-semibold)] text-[var(--text-body)] group-hover:text-[var(--ink-950)]"
          }`}
        >
          {material.name}
        </span>
        <span
          className={`font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] mt-[var(--space-1)] transition-colors ${
            isSelected
              ? "text-[var(--gold-700)] font-bold"
              : "text-[var(--text-muted)]"
          }`}
        >
          {material.size}
        </span>
      </div>
    </button>
  );
}
