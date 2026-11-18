"use client";

import React from "react";
import Image from "next/image";

export function BrandCard() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-[var(--space-7)] bg-[var(--ink-900)] border border-[var(--border-strong)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] fas-dust overflow-hidden select-none transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)]">
      {/* Subtle warm rim light to blend naturally with gold background */}
      <div
        className="absolute inset-0 rounded-[var(--radius-xl)] pointer-events-none ring-1 ring-inset ring-[var(--gold-500)]/20"
        aria-hidden="true"
      />

      {/* 1. Badge Image: 92px */}
      <div className="relative w-[92px] h-[92px] shrink-0">
        <Image
          src="/brand/icon-badge.png"
          alt="Fortune Aggregates and Sands seal"
          width={92}
          height={92}
          priority
          className="w-[92px] h-[92px] object-contain drop-shadow-[0_4px_16px_rgba(200,151,31,0.22)]"
        />
      </div>

      {/* 2. "AGGREGATES AND SANDS": Montserrat 600, uppercase, --tracking-caps, --fs-sm, colour --gold-200 */}
      <span className="mt-[var(--space-5)] font-[family-name:var(--font-display)] font-semibold uppercase tracking-[var(--tracking-caps)] text-[length:var(--fs-sm)] text-[var(--gold-200)]">
        AGGREGATES AND SANDS
      </span>

      {/* 3. "Strength You Can Build On": Quicksand 500, --fs-lg, colour --amber-400 */}
      <span className="mt-[var(--space-2)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-lg)] text-[var(--amber-400)]">
        Strength You Can Build On
      </span>
    </div>
  );
}
