"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface JobRecommendation {
  job: string;
  materialName: string;
  slug: string;
  size: string;
}

export const jobRecommendations: JobRecommendation[] = [
  {
    job: "Foundations & PCC",
    materialName: "40mm blue metal",
    slug: "40mm-blue-metal",
    size: "40mm",
  },
  {
    job: "RCC columns, beams, slabs",
    materialName: "20mm blue metal",
    slug: "20mm-blue-metal",
    size: "20mm",
  },
  {
    job: "Thin slabs, lintels, precast",
    materialName: "12mm aggregate",
    slug: "12mm-aggregate",
    size: "12mm",
  },
  {
    job: "Paver & hollow blocks",
    materialName: "6mm chips, stone dust",
    slug: "6mm-chips",
    size: "6mm / 0 to 4mm",
  },
  {
    job: "Brick & block masonry",
    materialName: "Manufactured sand",
    slug: "manufactured-sand",
    size: "0 to 4.75mm",
  },
  {
    job: "Wall plastering",
    materialName: "Plastering sand",
    slug: "plastering-sand",
    size: "fine",
  },
  {
    job: "Roads & sub-base",
    materialName: "GSB",
    slug: "gsb",
    size: "graded mix",
  },
];

export interface JobTableProps {
  onSelectMaterial: (slug: string) => void;
}

export function JobTable({ onSelectMaterial }: JobTableProps) {
  return (
    <div className="w-full mt-[var(--space-8)] sm:mt-[var(--space-10)]">
      {/* Outer Card with Authentic Quarry & Construction Landscape Background */}
      <div className="relative w-full rounded-[var(--radius-xl)] border border-[var(--gold-500)]/35 shadow-[var(--shadow-lg)] overflow-hidden">
        {/* Background Photo with Dark Toned Overlay for High Contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/job-table-bg.jpg"
            alt="Fortune Aggregates construction materials stockpiles and site execution"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep dark gradient overlay ensuring 100% text contrast and readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--ink-950)]/94 via-[var(--ink-950)]/90 to-[var(--ink-950)]/94 backdrop-blur-xs pointer-events-none"
            aria-hidden="true"
          />
          {/* Subtle top gold accent bar */}
          <div
            className="absolute top-0 inset-x-0 h-1 bg-[image:var(--grad-gold)]"
            aria-hidden="true"
          />
        </div>

        {/* Content Container (Expanded horizontally, sleek compact height) */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-strong)] pb-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span
                  className="w-2 h-2 rounded-full bg-[var(--gold-400)] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] tracking-[var(--tracking-caps)] text-[var(--gold-300)] uppercase">
                  Material Specification Reference
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl lg:text-[length:var(--fs-2xl)] text-[var(--paper)] tracking-tight">
                Which one do I need?
              </h3>
            </div>
            <span className="font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--gold-200)]">
              Quick Application Guide
            </span>
          </div>

          {/* Desktop & Tablet Table (Expanded horizontally across container width) */}
          <div className="hidden sm:block w-full overflow-x-auto bg-[var(--ink-950)]/60 rounded-[var(--radius-lg)] border border-[var(--border-strong)] p-2 sm:p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-strong)]">
                  <th className="py-3.5 px-6 font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)] w-[36%]">
                    Job / Application
                  </th>
                  <th className="py-3.5 px-6 font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)] w-[44%]">
                    Recommended Grade
                  </th>
                  <th className="py-3.5 px-6 font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] text-[var(--gold-300)] uppercase tracking-[var(--tracking-caps)] text-right w-[20%]">
                    Graded Size
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {jobRecommendations.map((row) => (
                  <tr
                    key={row.job}
                    onClick={() => onSelectMaterial(row.slug)}
                    className="group cursor-pointer hover:bg-[var(--gold-500)]/15 transition-colors duration-150"
                  >
                    <td className="py-3.5 px-6 font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-sm)] text-[var(--paper)] group-hover:text-[var(--white)]">
                      {row.job}
                    </td>
                    <td className="py-3.5 px-6 font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-sm)] text-[var(--gold-200)] group-hover:text-[var(--paper)]">
                      <span className="inline-flex items-center gap-1.5 underline decoration-dotted decoration-[var(--gold-400)]/60 underline-offset-4 group-hover:decoration-[var(--gold-300)]">
                        {row.materialName}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--gold-300)] transition-all -translate-x-1 group-hover:translate-x-0" />
                      </span>
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-block px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--ink-950)] border border-[var(--gold-500)]/40 text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-bold text-[var(--paper)] group-hover:border-[var(--gold-300)] transition-colors">
                        {row.size}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards (visible below 640px) */}
          <div className="block sm:hidden space-y-3">
            {jobRecommendations.map((row) => (
              <button
                key={row.job}
                type="button"
                onClick={() => onSelectMaterial(row.slug)}
                className="w-full text-left p-4 rounded-[var(--radius-md)] border border-[var(--gold-500)]/30 bg-[var(--ink-950)]/85 hover:bg-[var(--gold-500)]/15 transition-colors shadow-sm cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] font-bold text-sm text-[var(--paper)]">
                    {row.job}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-xs text-[var(--paper)] bg-[var(--ink-900)] px-2.5 py-0.5 rounded border border-[var(--gold-500)]/40 font-bold">
                    {row.size}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs font-[family-name:var(--font-body)] text-[var(--gold-200)]">
                  <span>
                    Use: <strong className="text-[var(--paper)]">{row.materialName}</strong>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" />
                </div>
              </button>
            ))}
          </div>

          {/* Table Footer */}
          <div className="mt-6 pt-4 border-t border-[var(--border-strong)] flex items-center justify-between text-xs sm:text-sm">
            <span className="font-[family-name:var(--font-body)] text-[var(--gold-200)]/80 hidden sm:inline">
              Click any row to view full specifications, sieve gradation curves & applications
            </span>
            <Link
              href="/materials"
              className="inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-semibold text-[var(--gold-300)] hover:text-[var(--gold-200)] transition-colors group ml-auto"
            >
              <span>View all materials</span>
              <ArrowRight className="w-4 h-4 text-[var(--gold-400)] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
