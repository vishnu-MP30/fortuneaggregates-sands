"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck, Truck, Scale, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function AggregateGrabStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [swayAngle, setSwayAngle] = useState(0);
  const lastScrollY = useRef(0);
  const velocityRef = useRef(0);

  // Scroll listener to calculate progress (0 to 1) and realistic physics sway
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);

      // Calculate scroll velocity for realistic inertia sway
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      velocityRef.current = Math.max(-2, Math.min(2, deltaY * 0.1));
    };

    // Smooth physics loop for micro-sway and momentum easing
    let time = 0;
    const updatePhysics = () => {
      time += 0.028;
      // Damping velocity
      velocityRef.current *= 0.94;

      // Natural continuous cable pendulum sway + scroll momentum tilt
      const naturalSway = Math.sin(time) * 0.75;
      const currentSway = naturalSway + velocityRef.current;
      setSwayAngle(currentSway);

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hook vertical descent calculation within the open center corridor
  const minTop = 80;
  const maxTop = 220;
  const bucketY = minTop + scrollProgress * (maxTop - minTop);

  return (
    <section
      ref={sectionRef}
      id="dispatch-cta"
      className="relative w-full bg-[var(--ink-950)] text-[var(--paper)] select-none min-h-[170vh] lg:min-h-[185vh] border-t border-[var(--border)]"
    >
      {/* Sticky Viewport Container matching night theme dark base */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center py-8 sm:py-12 bg-[var(--ink-950)]">
        {/* Content Container (Standard Page Alignment) */}
        <div className="relative z-10 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          {/* =========================================================
              TOP BAR: Eyebrow + Facility Status & Quick Link
              ========================================================= */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[var(--gold-500)]/20 w-full">
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--paper)]">
                Direct Quarry Dispatch &amp; Logistics
              </span>
              <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] shrink-0 inline-block" aria-hidden="true" />
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-full bg-[var(--ink-950)] border border-[var(--gold-500)]/30 text-[var(--gold-300)] text-xs font-[family-name:var(--font-display)] font-semibold tracking-wider uppercase flex items-center gap-2 shadow-[0_0_12px_rgba(200,151,31,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[var(--gold-400)] animate-pulse" />
                <span>Facility Active · Yedapadavu</span>
              </div>
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] text-xs font-[family-name:var(--font-display)] font-extrabold uppercase tracking-wider transition-all min-h-[36px]"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ink-950)]" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* =========================================================
              CLEAN 3-ZONE ARCHITECTURAL LAYOUT (FREE CENTER FOR HOOK & WIRE)
              ========================================================= */}
          <div className="relative w-full flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-14">
            {/* =====================================================
                LEFT COLUMN: Headline, Copy & Sieve Badges (Left-Aligned)
                ===================================================== */}
            <div className="w-full lg:w-[44%] max-w-[540px] flex flex-col justify-between items-start text-left shrink-0">
              <div>
                <h2 className="font-[family-name:var(--font-display)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[length:var(--fs-3xl)] xl:text-4xl leading-[1.12] text-[var(--paper)] tracking-tight">
                  Grow through unyielding foundations and scalable aggregate solutions
                </h2>

                <p className="mt-4 font-[family-name:var(--font-body)] font-medium text-sm sm:text-base text-[var(--warm-100)] leading-relaxed">
                  Talk to our technical materials team about your compressive load targets, mix designs, and bulk delivery schedules. From high-density 20mm blue metal granite to automated dual-washed manufactured sand, we engineer certified aggregate supply that guarantees structural longevity, on-time batching, and zero contract defaults.
                </p>
              </div>

              {/* Quality & Dispatch Badges (Bottom Aligned) */}
              <div className="mt-8 pt-6 border-t border-[var(--gold-500)]/20 flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-xs font-[family-name:var(--font-body)] text-[var(--paper)]/90 font-medium w-full">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-400)] shrink-0" />
                  <span>IS 383:2016 Compliant</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[var(--gold-400)] shrink-0" />
                  <span>Yedapadavu Quarry Base</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[var(--gold-400)] shrink-0" />
                  <span>GPS Fleet Tracking</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[var(--gold-400)] shrink-0" />
                  <span>Calibrated Weighbridge</span>
                </span>
              </div>
            </div>

            {/* =====================================================
                CENTER CORRIDOR: Dedicated For Hook & Wire
                ===================================================== */}
            <div className="hidden lg:flex flex-col items-center justify-start flex-1 relative self-stretch min-h-[380px] pointer-events-none px-4">
              {/* Overhead Trolley Track Carriage */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-16 h-3 rounded-[2px] bg-[var(--ink-900)] border border-[var(--gold-500)]/40 flex items-center justify-between px-2 shadow-[0_0_12px_rgba(200,151,31,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" />
                  <span className="w-6 h-0.5 bg-[var(--gold-500)]/60 rounded-full" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-400)]" />
                </div>
                <div className="w-4 h-2 bg-[var(--ink-900)] border-x border-[var(--gold-500)]/30" />
              </div>

              {/* Center High-Tensile Steel Crane Cable */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                style={{ height: `${bucketY + 28}px` }}
              >
                <div style={{ width: "14px", height: "100%", display: "flex", justifyContent: "space-between", margin: "0 auto" }}>
                  <div className="crane-wire" style={{ width: "2.5px", height: "100%", backgroundColor: "var(--gold-400)", boxShadow: "0 0 4px rgba(200,151,31,0.5)" }} />
                  <div className="crane-wire" style={{ width: "2.5px", height: "100%", backgroundColor: "var(--gold-400)", boxShadow: "0 0 4px rgba(200,151,31,0.5)" }} />
                </div>
              </div>

              {/* Center Crane Trolley Hoist Hook */}
              <div
                className="absolute left-1/2 pointer-events-none z-30 transition-transform duration-75 ease-out"
                style={{
                  top: `${bucketY}px`,
                  transform: `translateX(-50%) rotate(${swayAngle}deg)`,
                  transformOrigin: "top center",
                }}
              >
                <Image
                  src="/images/crane-hoist-hook-hd.png"
                  alt="Industrial heavy forged steel crane hook and hoist block"
                  width={86}
                  height={296}
                  priority
                  unoptimized
                  className="filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  style={{ width: "86px", height: "auto" }}
                />
              </div>
            </div>

            {/* =====================================================
                RIGHT COLUMN: Balanced Alignment, White Text & Gold CTAs
                ===================================================== */}
            <div className="w-full lg:w-[44%] max-w-[540px] flex flex-col justify-between items-end text-right shrink-0">
              <div className="space-y-6 w-full flex flex-col items-end">
                {/* Highlight 1: Certified Quarry Direct */}
                <div className="flex items-start justify-end gap-4 text-right w-full">
                  <div className="text-right w-full">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-base sm:text-lg text-[var(--paper)] tracking-tight">
                      Certified Quarry-Direct Sourcing
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--warm-100)] leading-relaxed">
                      Direct ex-quarry pricing with zero middleman overhead. Every shipment includes calibrated weighbridge documentation and audit-ready sieve test certificates.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--ink-950)] border border-[var(--gold-500)]/40 text-[var(--gold-400)] shrink-0 shadow-[0_0_12px_rgba(200,151,31,0.15)]">
                    <Scale className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Highlight 2: High-Tonnage Fleet Dispatch */}
                <div className="flex items-start justify-end gap-4 text-right w-full">
                  <div className="text-right w-full">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-base sm:text-lg text-[var(--paper)] tracking-tight">
                      Commercial Heavy Tipper Fleet
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-xs sm:text-sm text-[var(--warm-100)] leading-relaxed">
                      Dedicated multi-axle tipper trucks equipped with real-time GPS tracking, delivering daily high-tonnage feed capacity directly to batching hoppers and highway corridors.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--ink-950)] border border-[var(--gold-500)]/40 text-[var(--gold-400)] shrink-0 shadow-[0_0_12px_rgba(200,151,31,0.15)]">
                    <Truck className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Compound Action Button & Direct Call Desk (Strictly Right-Aligned at Bottom) */}
              <div className="mt-8 pt-6 border-t border-[var(--gold-500)]/20 flex flex-col sm:flex-row items-center justify-end gap-3 w-full">
                <Link
                  href={siteConfig.contact.whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[var(--gold-500)] hover:bg-[var(--gold-400)] text-[var(--ink-950)] font-[family-name:var(--font-display)] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_24px_rgba(200,151,31,0.35)] hover:shadow-[0_0_32px_rgba(200,151,31,0.55)] transition-all min-h-[44px]"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--ink-950)]" strokeWidth={2.5} />
                </Link>

                <Link
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-[var(--ink-950)]/70 hover:bg-[var(--ink-950)] border border-[var(--gold-500)]/40 text-[var(--paper)] text-xs sm:text-sm font-[family-name:var(--font-display)] font-bold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--gold-400)]" strokeWidth={2} />
                  <span>Ask on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
