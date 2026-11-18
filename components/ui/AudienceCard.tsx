"use client";

import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  ConsultantsIcon,
  ArchitectureIcon,
  ManagementIcon,
  InfraIcon,
  DealersIcon,
} from "./ReferenceIcons";

export interface AudienceCardData {
  number: string;
  title: string;
  body: string;
  subtitle?: string;
  specs?: string[];
  icon?: string;
}

export interface AudienceCardProps {
  card: AudienceCardData;
  index: number;
  onExplore?: (card: AudienceCardData) => void;
}

export function AudienceCard({ card, index, onExplore }: AudienceCardProps) {
  // Render the appropriate custom SVG outline icon in warm Sand Gold
  const renderIcon = () => {
    const iconType = card.icon || (index === 0 ? "consultants" : index === 1 ? "architecture" : "management");
    const iconClass = "w-14 h-14 text-[var(--gold-200)] transition-transform duration-300 group-hover:scale-105";

    switch (iconType) {
      case "consultants":
        return <ConsultantsIcon className={iconClass} color="var(--gold-200)" />;
      case "architecture":
        return <ArchitectureIcon className={iconClass} color="var(--gold-200)" />;
      case "management":
        return <ManagementIcon className={iconClass} color="var(--gold-200)" />;
      case "infra":
        return <InfraIcon className={iconClass} color="var(--gold-200)" />;
      case "dealers":
        return <DealersIcon className={iconClass} color="var(--gold-200)" />;
      default:
        return <ConsultantsIcon className={iconClass} color="var(--gold-200)" />;
    }
  };

  return (
    <div
      className="group relative flex flex-col justify-between h-full p-7 sm:p-8 lg:p-9 rounded-[var(--radius-lg)] border border-[var(--gold-500)]/40 shadow-[var(--shadow-md)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(200,151,31,0.28)] hover:border-[var(--gold-400)] overflow-hidden before:absolute before:top-0 before:inset-x-0 before:h-1 before:bg-[var(--gold-400)]"
      style={{
        background: "linear-gradient(155deg, var(--gold-700) 0%, var(--gold-800) 45%, var(--gold-900) 100%)",
      }}
    >
      {/* Top Section: Icon & Header */}
      <div>
        {/* Outline SVG icon in Luminous Gold */}
        <div className="mb-6 inline-flex items-center justify-center">
          {renderIcon()}
        </div>

        {/* Card Title & Sector Number */}
        <div className="space-y-1.5">
          {card.number && (
            <span
              className="block font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] tracking-[var(--tracking-caps)] uppercase"
              style={{ color: "var(--gold-200)" }}
            >
              Sector {card.number}
            </span>
          )}
          <h3
            className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl tracking-tight leading-[1.25]"
            style={{ color: "var(--paper)" }}
          >
            {card.title}
          </h3>
        </div>

        {/* Body Text in Warm Paper Cream for High Readability */}
        <p
          className="mt-4 font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-sm)] leading-relaxed"
          style={{ color: "var(--paper)" }}
        >
          {card.body}
        </p>

        {/* Key Aggregate Highlights / Specs */}
        {card.specs && card.specs.length > 0 && (
          <ul className="mt-5 space-y-2 pt-4 border-t border-[var(--gold-500)]/30">
            {card.specs.map((spec, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] font-medium"
                style={{ color: "var(--paper)" }}
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--gold-300)" }} />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Section: Explore More Button */}
      <div className="mt-8 pt-2">
        <button
          type="button"
          onClick={() => onExplore?.(card)}
          className="inline-flex items-center justify-between gap-3 px-5 py-2.5 rounded-[var(--radius-pill)] bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-glow)] transition-all min-h-[44px] cursor-pointer"
          aria-label={`Explore more about ${card.title}`}
        >
          <span>Explore More</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
