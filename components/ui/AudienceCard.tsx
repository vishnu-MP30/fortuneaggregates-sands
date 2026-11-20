"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  // Render the appropriate custom SVG outline icon in crisp white
  const renderIcon = () => {
    const iconType = card.icon || (index === 0 ? "consultants" : index === 1 ? "architecture" : "management");
    const iconClass = "w-14 h-14 text-[var(--paper)] transition-transform duration-300 group-hover:scale-105";

    switch (iconType) {
      case "consultants":
        return <ConsultantsIcon className={iconClass} color="var(--paper)" />;
      case "architecture":
        return <ArchitectureIcon className={iconClass} color="var(--paper)" />;
      case "management":
        return <ManagementIcon className={iconClass} color="var(--paper)" />;
      case "infra":
        return <InfraIcon className={iconClass} color="var(--paper)" />;
      case "dealers":
        return <DealersIcon className={iconClass} color="var(--paper)" />;
      default:
        return <ConsultantsIcon className={iconClass} color="var(--paper)" />;
    }
  };

  return (
    <div
      className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-[20px] border border-white/20 shadow-[var(--shadow-xl)] transition-all duration-300 hover:shadow-[0_20px_48px_rgba(200,151,31,0.35)] hover:scale-[1.01] overflow-hidden"
      style={{
        background: "linear-gradient(145deg, var(--gold-500) 0%, var(--gold-600) 45%, var(--gold-700) 100%)",
      }}
    >
      {/* Top-Right Diagonal Glass Highlight / Sheen */}
      <div
        className="absolute top-0 right-0 w-36 sm:w-44 h-36 sm:h-44 bg-gradient-to-bl from-white/30 via-white/10 to-transparent pointer-events-none rounded-tr-[20px] [clip-path:polygon(100%_0,0_0,100%_100%)]"
        aria-hidden="true"
      />

      {/* Top Section: Icon & Header */}
      <div className="relative z-10">
        {/* Outline SVG icon in Crisp White */}
        <div className="mb-5 inline-flex items-center justify-center">
          {renderIcon()}
        </div>

        {/* Sector Eyebrow with horizontal bar */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--paper)]">
            SECTOR {card.number}
          </span>
          <span className="w-6 h-[2px] bg-white/70 rounded-full inline-block" aria-hidden="true" />
        </div>

        {/* Card Title in Bold White */}
        <h3 className="font-[family-name:var(--font-display)] font-extrabold text-2xl text-[var(--paper)] tracking-tight leading-tight">
          {card.title}
        </h3>

        {/* Body Text in High-Contrast White */}
        <p className="mt-3.5 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--paper)] leading-relaxed">
          {card.body}
        </p>

        {/* Key Aggregate Highlights / Specs */}
        {card.specs && card.specs.length > 0 && (
          <ul className="mt-5 space-y-2.5 pt-4 border-t border-white/20">
            {card.specs.map((spec, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 font-[family-name:var(--font-body)] text-xs font-semibold text-[var(--paper)]"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[var(--paper)]" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Section: Explore More Button */}
      <div className="relative z-10 mt-7 pt-2">
        <button
          type="button"
          onClick={() => onExplore?.(card)}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--gold-200)] hover:bg-[var(--paper)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          aria-label={`Explore more about ${card.title}`}
        >
          <span>EXPLORE MORE</span>
          <ArrowRight className="w-4 h-4 text-[var(--ink-950)]" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
