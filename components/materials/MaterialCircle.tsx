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
      className={`group flex flex-col items-center shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] rounded-xl p-2 transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] select-none ${
        isDimmed ? "opacity-30 hover:opacity-75" : "opacity-100"
      }`}
    >
      {/* Circular Thumbnail Container */}
      <div
        className={`relative rounded-full transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] ${
          "w-[84px] h-[84px] sm:w-[100px] sm:h-[100px] lg:w-[116px] lg:h-[116px]"
        } ${
          isSelected
            ? "scale-[1.06] ring-[3px] ring-[var(--gold-500)] ring-offset-2 ring-offset-[var(--ink-950)] shadow-[0_0_28px_rgba(200,151,31,0.65)] -translate-y-1"
            : "ring-1 ring-[var(--gold-500)]/35 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:ring-2 hover:ring-[var(--gold-400)]/70 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.7)]"
        }`}
      >
        {/* Inner Bezel Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-[var(--gold-500)]/40 bg-[var(--ink-950)]">
          <Image
            src={material.image}
            alt={`${material.name} aggregate heap`}
            fill
            sizes="(max-width: 640px) 84px, (max-width: 1024px) 100px, 116px"
            className="object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-110"
          />
          {/* Subtle inner lens ring */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-white/10"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Material Label and Size beneath */}
      <div className="mt-3 flex flex-col items-center text-center max-w-[124px]">
        <span
          className={`font-[family-name:var(--font-display)] text-xs sm:text-sm transition-colors leading-tight ${
            isSelected
              ? "font-black text-[var(--gold-400)] scale-[1.02]"
              : "font-bold text-[var(--paper)] group-hover:text-[var(--gold-400)]"
          }`}
        >
          {material.name}
        </span>
        <span
          className={`font-[family-name:var(--font-body)] text-[length:var(--fs-2xs)] sm:text-xs mt-1 transition-colors ${
            isSelected
              ? "text-[var(--gold-300)] font-bold"
              : "text-[var(--warm-200)]/60"
          }`}
        >
          {material.size}
        </span>
      </div>
    </button>
  );
}
