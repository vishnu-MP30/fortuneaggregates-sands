"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { BrandCard } from "@/components/footer/BrandCard";
import { ContactCard } from "@/components/footer/ContactCard";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Materials", href: "#materials" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full bg-[var(--gold-500)] text-[var(--ink-950)] select-none border-t border-[var(--ink-950)]/20 pt-[var(--space-9)] overflow-hidden"
    >
      <div className="w-full max-w-[1240px] mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-7)]">
        {/* =========================================================
            ROW 1: THE TWO CARDS (38% / 62% Grid on Desktop)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-5)] items-stretch">
          {/* Brand Card: ~38% (5 of 12 columns) */}
          <div className="lg:col-span-5 flex">
            <BrandCard />
          </div>

          {/* Contact Card: ~62% (7 of 12 columns) */}
          <div className="lg:col-span-7 flex">
            <ContactCard />
          </div>
        </div>

        {/* =========================================================
            ROW 2: ONE SLIM LINE (Nav Links + Single Primary CTA)
            ========================================================= */}
        <div className="mt-[var(--space-8)] pt-[var(--space-6)] border-t border-[var(--ink-950)]/15 flex flex-col md:flex-row items-center justify-between gap-[var(--space-5)]">
          {/* Left: Horizontal list of nav links */}
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center md:justify-start gap-[var(--space-4)] sm:gap-[var(--space-6)] font-[family-name:var(--font-display)] font-semibold uppercase text-[length:var(--fs-xs)] tracking-[var(--tracking-caps)] text-[var(--ink-950)]"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:underline underline-offset-4 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Only CTA in the footer - Primary-style pill button */}
          <div className="shrink-0 w-full sm:w-auto flex justify-center">
            <Link
              href={siteConfig.contact.whatsappQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[var(--space-2)] px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[var(--ink-950)] hover:bg-[var(--ink-900)] text-[var(--gold-200)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] transition-colors shadow-[var(--shadow-sm)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] w-full sm:w-auto"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--gold-500)] shrink-0" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* =========================================================
            ROW 3: LEGAL LINE
            ========================================================= */}
        <div className="mt-[var(--space-5)] flex items-center justify-center md:justify-start">
          <p className="font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-xs)] text-[var(--ink-950)]">
            © 2026 Fortune Aggregates and Sands. All rights reserved.
          </p>
        </div>
      </div>

      {/* =========================================================
          ROW 4: THE GIANT WORDMARK (UNCHANGED)
          ========================================================= */}
      <div className="w-full mt-[var(--space-8)] pb-2 sm:pb-4 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-7)] flex flex-col items-center">
          {/* Hairline above it */}
          <div className="w-full flex items-center justify-between pb-3 border-b border-[var(--ink-950)]/15">
            <div className="flex items-center gap-2 font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] tracking-[var(--tracking-caps)] uppercase text-[var(--ink-950)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink-950)]" aria-hidden="true" />
              <span>STRENGTH YOU CAN BUILD ON</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] tracking-[var(--tracking-caps)] uppercase text-[var(--ink-950)]">
                AGGREGATES AND SANDS
              </span>
            </div>
          </div>

          {/* Big Expanded "FORTUNE" text across the bottom */}
          <div className="w-full text-center overflow-hidden">
            <span
              className="block w-full text-center font-[family-name:var(--font-display)] font-black text-[clamp(2.5rem,15.2vw,13.5rem)] leading-[0.76] tracking-[-0.04em] text-[var(--ink-950)] uppercase select-none transition-transform duration-700 ease-out hover:scale-[1.01]"
              style={{
                letterSpacing: "-0.04em",
                transformOrigin: "center bottom",
              }}
            >
              FORTUNE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
