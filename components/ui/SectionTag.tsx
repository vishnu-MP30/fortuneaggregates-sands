import React from "react";

export interface SectionTagProps {
  label: string;
  className?: string;
}

export function SectionTag({ label, className = "" }: SectionTagProps) {
  return (
    <div
      className={`inline-flex items-center gap-[var(--space-3)] px-[var(--space-3)] py-[var(--space-1)] rounded-[var(--radius-xs)] bg-[var(--accent-soft)] select-none ${className}`}
    >
      {/* 40px by 10px gold-500 bar */}
      <span
        className="w-[40px] h-[10px] rounded-[var(--radius-xs)] bg-[var(--gold-500)] shrink-0"
        aria-hidden="true"
      />
      {/* Text in Quicksand 600, color gold-700 */}
      <span className="font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-sm)] text-[var(--gold-700)] uppercase tracking-[var(--tracking-wide)]">
        {label}
      </span>
    </div>
  );
}

