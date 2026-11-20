"use client";

import React from "react";
import { Layers, Building2, BrickWall, LayoutGrid, Route, LucideIcon } from "lucide-react";
import { useCases, UseId } from "@/data/uses";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Building2,
  BrickWall,
  LayoutGrid,
  Route,
};

export interface UseFilterProps {
  activeFilter: UseId;
  onSelectFilter: (filterId: UseId) => void;
}

export function UseFilter({ activeFilter, onSelectFilter }: UseFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter materials by use case"
      className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 select-none"
    >
      {useCases.map((useCase) => {
        const Icon = iconMap[useCase.icon] || Layers;
        const isActive = activeFilter === useCase.id;

        return (
          <button
            key={useCase.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelectFilter(useCase.id)}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full font-[family-name:var(--font-display)] text-xs sm:text-sm tracking-wide transition-all duration-[var(--dur-base)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] ${
              isActive
                ? "bg-[var(--gold-500)] text-[var(--ink-950)] font-extrabold border border-[var(--gold-400)] shadow-[0_0_20px_rgba(200,151,31,0.4)]"
                : "bg-[var(--ink-950)]/70 text-[var(--paper)]/90 border border-[var(--border-strong)] hover:border-[var(--gold-500)]/50 hover:text-[var(--paper)] hover:bg-[var(--ink-950)]/90 font-medium"
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                isActive ? "text-[var(--ink-950)]" : "text-[var(--gold-400)]"
              }`}
              strokeWidth={isActive ? 2.5 : 2}
              aria-hidden="true"
            />
            <span>{useCase.label}</span>
          </button>
        );
      })}
    </div>
  );
}
