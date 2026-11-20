"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers, ShieldCheck, ArrowRight, Check, PhoneCall, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function AboutOverview() {
  const { about } = siteConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    points: string[];
  } | null>(null);

  // Progressive Scroll-Driven Expansion (Starts at initial focused box -> expands to 100% full bleed)
  // Stable calculation using document coordinates to eliminate any layout-shift or scroll-anchoring jitter
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          const el = sectionRef.current;
          const rect = el.getBoundingClientRect();
          const scrollTop = window.scrollY || window.pageYOffset;
          const elementTop = rect.top + scrollTop;
          const elementHeight = el.offsetHeight;
          const windowHeight = window.innerHeight;

          const totalScrollable = elementHeight - windowHeight;
          if (totalScrollable <= 0) {
            setScrollProgress(0);
            ticking = false;
            return;
          }

          // Progress begins when section top reaches viewport top
          const currentScroll = scrollTop - elementTop;
          const rawProgress = currentScroll / totalScrollable;
          const progress = Math.max(0, Math.min(1, rawProgress));

          setScrollProgress((prev) => {
            if (Math.abs(prev - progress) < 0.005) return prev;
            return progress;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Compute interpolated width and height percentages
  // Initial focused box: 42% width, 38% height
  // Smoothly expands to 100% width and 100% height as user scrolls through the section
  const currentWidthPercent = Math.min(100, Math.max(42, 42 + scrollProgress * 58));
  const currentHeightPercent = Math.min(100, Math.max(38, 38 + scrollProgress * 62));

  const handleOpenApproach = () => {
    setModalContent({
      title: "Our Quality-First Crushing Approach",
      description:
        about.approach?.description ||
        "A quality-first crushing process that integrates every stage of quarry operations into a unified system designed for consistent grading, zero silt, and unyielding strength.",
      points: [
        "In-house primary jaw and multi-deck secondary cone crushing lines",
        "Dual-stage high-pressure vibrating screens and automated sand washing",
        "Grading tested against IS 383:2016 specifications every dispatch cycle",
        "Strict control over flakiness and elongation indices (< 15%)",
      ],
    });
  };

  const handleOpenCompany = () => {
    setModalContent({
      title: "Fortune Quarry & Processing Capability",
      description:
        about.company?.description ||
        "Built around high-capacity and dependable dispatch, pairing in-house quarrying with certified weighbridge loading to deliver bulk-ready loads with confidence and on time.",
      points: [
        "Self-owned granite quarry facility located at Yedapadavu, Mangaluru",
        "Calibrated electronic weighbridge with automated challan slip printing",
        "High-capacity commercial multi-axle tipper fleet for site deliveries",
        "Zero middleman markup with transparent per-ton volume contracts",
      ],
    });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-[var(--bg-base)] border-t border-[var(--border)] overflow-visible select-none lg:min-h-[175vh]"
    >
      {/* Sticky Viewport Container on desktop */}
      <div className="lg:sticky lg:top-0 w-full lg:min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
            {/* =========================================================
                LEFT COLUMN: Clean Architectural Content
                ========================================================= */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10">
              {/* Top Block: Eyebrow + 2-Line Headline + Lead Paragraph */}
              <div className="space-y-5 sm:space-y-6">
                {/* Eyebrow Tag with Gold Divider Bar matching reference */}
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase text-[var(--paper)]">
                    {about.eyebrow}
                  </span>
                  <span
                    className="w-8 h-[2.5px] bg-[var(--gold-500)] shrink-0 inline-block rounded-full"
                    aria-hidden="true"
                  />
                </div>

                {/* Display Headline: White "The Power of" + Gold "Integrated Crushing" */}
                <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--fs-4xl)] leading-[1.08] tracking-tight">
                  <span className="block text-[var(--paper)]">The Power of</span>
                  <span className="block text-[var(--gold-400)] fas-wordmark-gradient">
                    Integrated Crushing
                  </span>
                </h2>

                {/* Lead Paragraph in high-contrast warm white */}
                <p className="font-[family-name:var(--font-body)] font-medium text-base sm:text-lg lg:text-[length:var(--fs-lg)] text-[var(--warm-100)] leading-relaxed max-w-[620px]">
                  {about.leadParagraph || about.paragraphs[0]}
                </p>
              </div>

              {/* Bottom Block: Split 2-Column Cards (APPROACH / CAPABILITY) */}
              <div className="pt-8 sm:pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                {/* Left Card: APPROACH */}
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2.5 pb-2">
                      <div className="p-1.5 rounded-[var(--radius-xs)] bg-[var(--surface-2)] border border-[var(--gold-500)]/30 text-[var(--gold-400)] shrink-0">
                        <Layers className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--gold-400)]">
                        {about.approach?.title || "APPROACH"}
                      </h3>
                    </div>

                    <p className="mt-2 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--warm-100)] leading-relaxed">
                      {about.approach?.description ||
                        "A quality-first crushing process that integrates every stage of quarry operations into a unified system designed for consistent grading, zero silt, and unyielding strength."}
                    </p>
                  </div>

                  {/* Solid Gold Architectural Button: [ LEARN MORE  → ] */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleOpenApproach}
                      className="inline-flex items-center justify-center gap-2.5 bg-[var(--gold-500)] hover:bg-[var(--gold-400)] active:bg-[var(--gold-600)] text-[var(--ink-950)] transition-all duration-200 text-xs sm:text-sm font-[family-name:var(--font-display)] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[var(--radius-xs)] cursor-pointer shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
                    >
                      <span>{about.approach?.ctaLabel || "LEARN MORE"}</span>
                      <ArrowRight className="w-4 h-4 text-[var(--ink-950)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                {/* Right Card: COMPANY / CAPABILITY */}
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2.5 pb-2">
                      <div className="p-1.5 rounded-[var(--radius-xs)] bg-[var(--surface-2)] border border-[var(--gold-500)]/30 text-[var(--gold-400)] shrink-0">
                        <ShieldCheck className="w-4 h-4" strokeWidth={2.2} />
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--gold-400)]">
                        {about.company?.title || "CAPABILITY"}
                      </h3>
                    </div>

                    <p className="mt-2 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--warm-100)] leading-relaxed">
                      {about.company?.description ||
                        "Built around high-capacity and dependable dispatch, pairing in-house quarrying with certified weighbridge loading to deliver bulk-ready loads with confidence and on time."}
                    </p>
                  </div>

                  {/* Solid Gold Architectural Button: [ LEARN MORE  → ] */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleOpenCompany}
                      className="inline-flex items-center justify-center gap-2.5 bg-[var(--gold-500)] hover:bg-[var(--gold-400)] active:bg-[var(--gold-600)] text-[var(--ink-950)] transition-all duration-200 text-xs sm:text-sm font-[family-name:var(--font-display)] font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[var(--radius-xs)] cursor-pointer shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]"
                    >
                      <span>{about.company?.ctaLabel || "LEARN MORE"}</span>
                      <ArrowRight className="w-4 h-4 text-[var(--ink-950)] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                RIGHT COLUMN: Architectural Expanding Image with Constant
                Forest Green Corner Shades and Gold Hairline Grid
                ========================================================= */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center relative">
              {/* Outer Architectural Container with constant forest green geometric corner shades */}
              <div className="relative w-full max-w-[560px] xl:max-w-[580px]">
                {/* 1. CONSTANT OPPOSITE CORNER ACCENT: Top-Left Forest Green Diagonal Shade & Gold Edge */}
                <div
                  className="absolute -top-10 -left-10 sm:-top-12 sm:-left-12 w-48 sm:w-60 h-64 sm:h-76 pointer-events-none z-0 overflow-visible"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 200 240" fill="none" className="w-full h-full">
                    {/* Forest Green Gradient Polygon */}
                    <polygon
                      points="65,0 160,0 35,240 0,240 0,60"
                      fill="url(#forestGreenGradTop)"
                    />
                    {/* Crisp Gold Accent Boundary Line */}
                    <line
                      x1="160"
                      y1="0"
                      x2="35"
                      y2="240"
                      stroke="var(--gold-500)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="forestGreenGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--green-600)" />
                        <stop offset="50%" stopColor="var(--green-700)" />
                        <stop offset="100%" stopColor="var(--green-900)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* 2. CONSTANT OPPOSITE CORNER ACCENT: Bottom-Right Forest Green Diagonal Shade & Gold Edge */}
                <div
                  className="absolute -bottom-10 -right-10 sm:-bottom-12 sm:-right-12 w-48 sm:w-60 h-64 sm:h-76 pointer-events-none z-0 overflow-visible"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 200 240" fill="none" className="w-full h-full">
                    {/* Forest Green Gradient Polygon */}
                    <polygon
                      points="165,0 200,0 200,240 40,240"
                      fill="url(#forestGreenGradBottom)"
                    />
                    {/* Crisp Gold Accent Boundary Line */}
                    <line
                      x1="165"
                      y1="0"
                      x2="40"
                      y2="240"
                      stroke="var(--gold-500)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="forestGreenGradBottom" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--green-900)" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="var(--green-700)" />
                        <stop offset="100%" stopColor="var(--green-600)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* 3. Architectural Extended Hairline Cross Guides (Outer Frame) */}
                <div
                  className="absolute -top-6 -bottom-6 left-0 w-[1.5px] bg-[var(--gold-500)]/40 pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-8 -bottom-8 right-0 w-[1.5px] bg-[var(--gold-500)]/80 pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-6 -right-8 top-0 h-[1.5px] bg-[var(--gold-500)]/80 pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-8 -right-6 bottom-0 h-[1.5px] bg-[var(--gold-500)]/80 pointer-events-none z-20"
                  aria-hidden="true"
                />

                {/* 4. DYNAMIC MOVING CORNER WIRE LINES (track the right and bottom edges of the image) */}
                <div
                  className="absolute -top-6 -bottom-6 w-[1px] bg-[var(--gold-500)]/40 pointer-events-none z-20 transition-[left] duration-75 ease-out"
                  style={{ left: `${currentWidthPercent}%` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-6 -right-6 h-[1px] bg-[var(--gold-500)]/40 pointer-events-none z-20 transition-[top] duration-75 ease-out"
                  style={{ top: `${currentHeightPercent}%` }}
                  aria-hidden="true"
                />

                {/* 5. The Clean Architectural Canvas with Expanding Image */}
                <div className="relative aspect-[16/11] w-full border border-[var(--gold-500)]/30 bg-[var(--ink-950)] overflow-hidden shadow-[var(--shadow-xl)] [overflow-anchor:none]">
                  {/* THE DYNAMICALLY EXPANDING PICTURE CONTAINER */}
                  <div
                    className="absolute top-0 left-0 overflow-hidden shadow-[var(--shadow-md)] transition-[width,height] duration-75 ease-out z-10 [overflow-anchor:none]"
                    style={{
                      width: `${currentWidthPercent}%`,
                      height: `${currentHeightPercent}%`,
                    }}
                  >
                    <Image
                      src={about.image}
                      alt={about.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 580px"
                      priority
                      className="object-cover object-center"
                    />

                    {/* Subtle warm tint overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-[var(--ink-950)]/30 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE SPECIFICATION / DETAILS MODAL
          ========================================================= */}
      {modalContent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-950)]/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalContent(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border-strong)] shadow-[var(--shadow-xl)] p-6 sm:p-8 overflow-hidden text-[var(--paper)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider text-[var(--gold-400)] uppercase">
                  Fortune Integrated System
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-[var(--paper)]">
                  {modalContent.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--warm-300)] hover:text-[var(--paper)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--warm-100)] leading-relaxed">
              {modalContent.description}
            </p>

            {/* Key Operational Points */}
            <div className="mt-5 p-4 rounded-[var(--radius-sm)] bg-[var(--surface-2)] border border-[var(--border)]">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--gold-400)] mb-2.5">
                Key Operational Safeguards:
              </h4>
              <ul className="space-y-2">
                {modalContent.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-[family-name:var(--font-body)] text-[var(--paper)]"
                  >
                    <Check className="w-4 h-4 text-[var(--gold-400)] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--border-strong)] text-[var(--paper)] hover:bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalContent(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-pill)] bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] text-xs font-bold uppercase tracking-wider shadow-[var(--shadow-sm)] transition-colors min-h-[44px]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
