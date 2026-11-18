"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function BlendedCta() {
  return (
    <section
      id="contact-cta"
      className="relative w-full bg-[var(--ink-950)] text-[var(--paper)] overflow-hidden select-none border-t border-[var(--border)]"
    >
      {/* Background Blended Visual with Smooth Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/cta-blended-curve.jpg"
            alt="Blended architectural curve and quarry strata"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center opacity-85"
          />
          {/* Edge gradient falloffs */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-950)] via-[var(--ink-950)]/60 to-transparent w-full md:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-950)] via-transparent to-[var(--ink-950)]/40" />
        </div>
      </div>

      {/* Architectural Blueprint Hairline Grid */}
      <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
        <div className="w-full h-full max-w-[var(--container-site)] mx-auto relative px-4 sm:px-6 lg:px-8">
          <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-[1px] bg-[var(--border)]" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-[var(--border)]" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[var(--container-site)] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-between min-h-[520px] lg:min-h-[600px]">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-start pr-0 lg:pr-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-xs)] bg-[var(--accent-soft)] border border-[var(--border-strong)] text-[var(--gold-200)] mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse" aria-hidden="true" />
              <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-wider">
                Direct Quarry Dispatch &amp; Logistics
              </span>
            </div>

            <p className="font-[family-name:var(--font-body)] font-normal text-sm sm:text-base lg:text-[length:var(--fs-md)] text-[var(--warm-200)] leading-relaxed max-w-[500px]">
              Talk to our technical materials team about your compressive load targets, mix designs, and bulk delivery schedules. From high-density 20mm blue metal granite to automated dual-washed manufactured sand, we engineer certified aggregate supply that guarantees structural longevity, on-time batching, and zero contract defaults.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[length:var(--fs-xs)] font-[family-name:var(--font-body)] text-[var(--warm-400)]">
              <span className="inline-flex items-center gap-1.5 text-[var(--gold-200)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-500)]" />
                IS 383:2016 Compliant
              </span>
              <span>·</span>
              <span>Yedapadavu Extraction Complex</span>
              <span>·</span>
              <span>GPS Fleet Tracking</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-between pl-0 lg:pl-12">
            <div className="hidden lg:flex items-center justify-end gap-3">
              <Link
                href={siteConfig.contact.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-xs)] bg-[var(--ink-950)]/60 hover:bg-[var(--ink-950)] border border-[var(--border-strong)] text-[var(--paper)] text-sm font-medium tracking-wide transition-all group min-h-[44px]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[var(--gold-500)] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <div className="px-4 py-2.5 rounded-[var(--radius-xs)] bg-[var(--surface-2)] border border-[var(--border)] text-[var(--gold-200)] text-[length:var(--fs-xs)] font-[family-name:var(--font-display)] font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--green-700)] border border-[var(--gold-500)]" />
                <span>Facility Active</span>
              </div>
            </div>

            <div className="mt-16 lg:mt-auto pt-8">
              <h2 className="font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--fs-4xl)] leading-[1.08] text-[var(--paper)] tracking-tight">
                Grow through unyielding foundations and scalable aggregate solutions
              </h2>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={siteConfig.contact.whatsappQuoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-stretch rounded-[var(--radius-pill)] overflow-hidden border border-[var(--border-strong)] transition-all duration-200 shadow-[var(--shadow-md)] group min-h-[44px]"
                >
                  <span className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[var(--surface)] text-[var(--ink-950)] text-sm sm:text-base font-semibold tracking-wide transition-colors">
                    Request a Quote
                  </span>
                  <span className="px-4 sm:px-5 flex items-center justify-center bg-[var(--gold-500)] text-[var(--ink-950)] transition-colors border-l border-[var(--border)]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="tel:+918422819302"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-[var(--radius-pill)] bg-[var(--surface-2)] border border-[var(--border)] text-[var(--gold-200)] text-sm font-medium transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[var(--gold-500)]" />
                  <span>+91 84228 19302</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
