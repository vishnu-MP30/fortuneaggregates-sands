"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PhoneCall, X } from "lucide-react";
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

  // Progressive Scroll-Driven Expansion (0 = 1:1 Top-Left Square -> 1 = Full 4:5 Bleed)
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
  // Square in 4:5 frame: 38% width, 30.4% height (0.38 * 4/5 = 0.304 -> perfect 1:1)
  // Expands linearly to 100% width and 100% height
  const currentWidthPercent = Math.min(100, Math.max(38, 38 + scrollProgress * 62));
  const currentHeightPercent = Math.min(100, Math.max(30.4, 30.4 + scrollProgress * 69.6));

  const handleOpenApproach = () => {
    setModalContent({
      title: "Our Quality-First Crushing Approach",
      description:
        about.approach?.description ||
        "A quality-first crushing process that integrates every stage of quarry extraction into a certified system designed for precision grading, zero silt, and unyielding strength.",
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
        "Built around transparency and dependable dispatch, pairing in-house quarrying with certified laboratory testing to deliver audit-ready loads with confidence and clarity.",
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* =========================================================
                LEFT COLUMN: Clean Left-Aligned Architectural Content
                ========================================================= */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 sm:space-y-10 lg:space-y-12">
              {/* Top Block: Eyebrow + 2-Line Headline + Lead Paragraph */}
              <div className="space-y-5 sm:space-y-6">
                {/* Eyebrow Tag with Square Marker matching reference */}
                <div className="flex items-center gap-2 text-[var(--ink-950)]">
                  <span className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase">
                    {about.eyebrow}
                  </span>
                  <span
                    className="w-2 h-2 bg-[var(--ink-950)] shrink-0 inline-block"
                    aria-hidden="true"
                  />
                </div>

                {/* Display Headline: Strictly 2-Line Architectural Layout */}
                <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--fs-4xl)] leading-[1.08] text-[var(--ink-950)] tracking-tight">
                  <span className="block">The Power of</span>
                  <span className="block">Integrated Crushing</span>
                </h2>

                {/* Lead Paragraph */}
                <p className="font-[family-name:var(--font-body)] font-medium text-base sm:text-lg lg:text-[length:var(--fs-lg)] text-[var(--text-muted)] leading-relaxed max-w-[620px]">
                  {about.leadParagraph || about.paragraphs[0]}
                </p>
              </div>

              {/* Bottom Block: Split 2-Column Cards (APPROACH / CAPABILITY) */}
              <div className="pt-8 sm:pt-10 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
                {/* Left Card: APPROACH */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--ink-950)]">
                        {about.approach?.title || "APPROACH"}
                      </h3>
                      <span className="w-1.5 h-1.5 bg-[var(--ink-950)] inline-block" aria-hidden="true" />
                    </div>

                    <p className="mt-2 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {about.approach?.description ||
                        "A quality-first crushing process that integrates every stage of quarry extraction into a certified system designed for precision grading, zero silt, and unyielding strength."}
                    </p>
                  </div>

                  {/* Clean Boxed Architectural Button: [ Learn more | → ] */}
                  <div className="mt-6 sm:mt-8">
                    <button
                      type="button"
                      onClick={handleOpenApproach}
                      className="inline-flex items-stretch bg-[image:var(--grad-gold)] hover:brightness-105 active:brightness-95 text-[var(--white)] transition-all duration-200 group text-xs sm:text-sm font-[family-name:var(--font-display)] font-semibold uppercase tracking-wider rounded-[var(--radius-xs)] overflow-hidden min-h-[44px] cursor-pointer shadow-[var(--shadow-sm)]"
                    >
                      <span className="px-4 py-2.5 flex items-center text-[var(--white)]">
                        {about.approach?.ctaLabel || "Learn more"}
                      </span>
                      <span className="w-10 border-l border-white/25 flex items-center justify-center shrink-0 text-[var(--white)]">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-[var(--white)]" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Card: COMPANY / CAPABILITY */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--ink-950)]">
                        {about.company?.title || "CAPABILITY"}
                      </h3>
                      <span className="w-1.5 h-1.5 bg-[var(--ink-950)] inline-block" aria-hidden="true" />
                    </div>

                    <p className="mt-2 font-[family-name:var(--font-body)] font-medium text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {about.company?.description ||
                        "Built around transparency and dependable dispatch, pairing in-house quarrying with certified laboratory testing to deliver audit-ready loads with confidence and clarity."}
                    </p>
                  </div>

                  {/* Clean Boxed Architectural Button: [ Learn more | → ] */}
                  <div className="mt-6 sm:mt-8">
                    <button
                      type="button"
                      onClick={handleOpenCompany}
                      className="inline-flex items-stretch bg-[image:var(--grad-gold)] hover:brightness-105 active:brightness-95 text-[var(--white)] transition-all duration-200 group text-xs sm:text-sm font-[family-name:var(--font-display)] font-semibold uppercase tracking-wider rounded-[var(--radius-xs)] overflow-hidden min-h-[44px] cursor-pointer shadow-[var(--shadow-sm)]"
                    >
                      <span className="px-4 py-2.5 flex items-center text-[var(--white)]">
                        {about.company?.ctaLabel || "Learn more"}
                      </span>
                      <span className="w-10 border-l border-white/25 flex items-center justify-center shrink-0 text-[var(--white)]">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 text-[var(--white)]" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                RIGHT COLUMN: Clean Architectural Expanding Image with Dynamic Corner Wire Guides
                Matches Reference 1 (media_1794984314641_8d37d688.jpg)
                ========================================================= */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              {/* Outer Architectural Grid Container with extended registration hairlines */}
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
                {/* Extended Hairline Cross Guides (Outer Frame) */}
                <div
                  className="absolute -top-6 -bottom-6 left-0 w-[1px] bg-[var(--border-strong)] pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-6 -bottom-6 right-0 w-[1px] bg-[var(--border-strong)] pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-6 -right-6 top-0 h-[1px] bg-[var(--border-strong)] pointer-events-none z-20"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-6 -right-6 bottom-0 h-[1px] bg-[var(--border-strong)] pointer-events-none z-20"
                  aria-hidden="true"
                />

                {/* DYNAMIC MOVING CORNER WIRE LINES (track the right and bottom edges of the image) */}
                {/* Vertical Wire Line: extends from -top-6 to -bottom-6, moves horizontally with currentWidthPercent */}
                <div
                  className="absolute -top-6 -bottom-6 w-[1px] bg-[var(--border-strong)] pointer-events-none z-20 transition-[left] duration-75 ease-out"
                  style={{ left: `${currentWidthPercent}%` }}
                  aria-hidden="true"
                />
                {/* Horizontal Wire Line: extends from -left-6 to -right-6, moves vertically with currentHeightPercent */}
                <div
                  className="absolute -left-6 -right-6 h-[1px] bg-[var(--border-strong)] pointer-events-none z-20 transition-[top] duration-75 ease-out"
                  style={{ top: `${currentHeightPercent}%` }}
                  aria-hidden="true"
                />

                {/* The 4:5 Aspect Ratio Clean Canvas (Pure clean paper background, zero dense grid) */}
                <div className="relative aspect-[4/5] w-full border border-[var(--border-strong)] bg-[var(--bg-base)] overflow-hidden shadow-[var(--shadow-sm)] [overflow-anchor:none]">
                  {/* THE DYNAMICALLY EXPANDING PICTURE CONTAINER */}
                  <div
                    className="absolute top-0 left-0 overflow-hidden shadow-[var(--shadow-xs)] transition-[width,height] duration-75 ease-out z-10 [overflow-anchor:none]"
                    style={{
                      width: `${currentWidthPercent}%`,
                      height: `${currentHeightPercent}%`,
                    }}
                  >
                    <Image
                      src={about.image}
                      alt={about.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      priority
                      className="object-cover object-center"
                    />

                    {/* Subtle warm tint overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-[var(--ink-950)]/20 via-transparent to-transparent pointer-events-none"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--ink-950)]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setModalContent(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[var(--surface)] rounded-[var(--radius-md)] border border-[var(--border-strong)] shadow-[var(--shadow-lg)] p-6 sm:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border)]">
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-xs tracking-wider text-[var(--gold-700)] uppercase">
                  Fortune Integrated System
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-display)] font-bold text-xl sm:text-2xl text-[var(--ink-950)]">
                  {modalContent.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="p-1.5 rounded-full hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--ink-950)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {modalContent.description}
            </p>

            {/* Key Operational Points */}
            <div className="mt-5 p-4 rounded-[var(--radius-sm)] bg-[var(--surface-2)] border border-[var(--border)]">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-wider text-[var(--green-700)] mb-2.5">
                Key Operational Safeguards:
              </h4>
              <ul className="space-y-2">
                {modalContent.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-[family-name:var(--font-body)] text-[var(--text-body)]"
                  >
                    <Check className="w-4 h-4 text-[var(--green-700)] shrink-0 mt-0.5" />
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
                className="w-full sm:w-auto px-5 py-2.5 rounded-[var(--radius-pill)] border border-[var(--border-strong)] text-[var(--text-muted)] hover:bg-[var(--surface-2)] text-xs font-semibold uppercase tracking-wider min-h-[44px] cursor-pointer"
              >
                Close
              </button>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setModalContent(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-pill)] bg-[var(--green-700)] hover:bg-[var(--green-800)] text-[var(--gold-200)] text-xs font-semibold uppercase tracking-wider shadow-[var(--shadow-sm)] transition-colors min-h-[44px]"
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
