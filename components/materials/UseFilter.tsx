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
      className="flex flex-wrap items-center justify-center gap-[var(--space-2)] sm:gap-[var(--space-3)] select-none"
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
            className={`inline-flex items-center gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-pill)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] cursor-pointer focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[var(--focus-ring)] ${
              isActive
                ? "bg-[var(--accent-soft)] text-[var(--gold-700)] border border-[var(--gold-500)] shadow-[var(--shadow-glow-soft)]"
                : "bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                isActive ? "text-[var(--gold-600)]" : "text-[var(--text-muted)]"
              }`}
              strokeWidth={2}
              aria-hidden="true"
            />
            <span>{useCase.label}</span>
          </button>
        );
      })}
    </div>
  );
}
