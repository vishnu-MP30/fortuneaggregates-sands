import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroCardData } from "@/data/site";

export interface HeroCardProps {
  card: HeroCardData;
}

export function HeroCard({ card }: HeroCardProps) {
  return (
    <Link
      href={card.href}
      className="group block w-[230px] sm:w-[250px] shrink-0 bg-[var(--surface)] rounded-[var(--radius-xs)] border border-[var(--border)] shadow-[var(--shadow-md)] overflow-hidden transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-lg)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)]"
      aria-label={`${card.title} - ${card.caption}`}
    >
      {/* Card Image Container with Top-Right Square Accent Badge */}
      <div className="relative w-full h-[135px] sm:h-[145px] overflow-hidden bg-[var(--surface-2)]">
        <Image
          src={card.image}
          alt={card.alt}
          width={250}
          height={145}
          className="w-full h-full object-cover transition-transform duration-[var(--dur-slow)] ease-[var(--ease-out)] group-hover:scale-105"
        />
        {/* Accent square badge with ArrowUpRight at top-right corner */}
        <div
          className="absolute top-[var(--space-2)] right-[var(--space-2)] w-[30px] h-[30px] rounded-[var(--radius-xs)] bg-[image:var(--grad-gold)] text-[var(--ink-950)] flex items-center justify-center shadow-[var(--shadow-sm)] transition-transform duration-[var(--dur-fast)] group-hover:scale-105"
          aria-hidden="true"
        >
          <ArrowUpRight strokeWidth={2} className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content Area matching Construx reference layout */}
      <div className="p-[var(--space-3)] sm:p-[var(--space-4)] bg-[var(--surface)]">
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] text-[var(--text-strong)] tracking-[var(--tracking-wide)] uppercase line-clamp-1">
          {card.title}
        </h3>
        <p className="mt-[var(--space-1)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-2xs)] sm:text-[length:var(--fs-xs)] text-[var(--text-muted)] line-clamp-1">
          {card.caption}
        </p>
      </div>
    </Link>
  );
}
