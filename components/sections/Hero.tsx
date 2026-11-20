import React from "react";
import Image from "next/image";
import { ShieldCheck, Layers, Scale, Truck } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-var(--space-7)-76px)] min-h-[750px] flex flex-col justify-between overflow-x-hidden select-none bg-[var(--ink-950)]">
      {/* Background Photo: Cinematic Golden-Hour Quarry Extraction & Plant */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-quarry-golden.jpg"
          alt="Fortune Aggregates quarry crushing complex and heavy loader in Mangaluru"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center lg:object-[center_right] contrast-[1.06] saturate-[1.12] brightness-[1.02]"
        />

        {/* Cinematic Gradient Overlay: Deep ink on left for high typography readability, natural warm lighting on right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, 
                color-mix(in srgb, var(--ink-950) 94%, transparent) 0%, 
                color-mix(in srgb, var(--ink-950) 82%, transparent) 40%, 
                color-mix(in srgb, var(--ink-950) 25%, transparent) 68%, 
                transparent 88%
              ),
              linear-gradient(to top, 
                color-mix(in srgb, var(--ink-950) 94%, transparent) 0%, 
                color-mix(in srgb, var(--ink-950) 45%, transparent) 24%, 
                transparent 42%
              )
            `,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] pt-[var(--space-8)] sm:pt-[var(--space-9)] lg:pt-[var(--space-10)] flex flex-col justify-center min-w-0">
        <div className="max-w-[720px] flex flex-col min-w-0">
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-xs)] bg-[var(--surface-2)]/80 backdrop-blur-sm border border-[var(--gold-500)]/40 text-[var(--paper)] mb-4 w-fit shadow-[var(--shadow-xs)]">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse shrink-0" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] text-[var(--paper)]">
              {hero.eyebrow}
            </span>
          </div>

          {/* H1 3-line Headline in White + Gold Accent */}
          <h1 className="animate-hero-1 font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-3xl)] sm:text-[length:var(--fs-4xl)] lg:text-[length:var(--fs-5xl)] leading-[var(--lh-tight)] uppercase text-[var(--paper)]">
            {hero.headline.line1}
            <br />
            {hero.headline.line2}
            <br />
            <span className="fas-wordmark-gradient">{hero.headline.highlight}</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="animate-hero-2 mt-[var(--space-4)] sm:mt-[var(--space-5)] max-w-[560px] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] lg:text-[length:var(--fs-lg)] text-[var(--warm-100)] leading-[var(--lh-relaxed)]">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="animate-hero-3 mt-[var(--space-6)] sm:mt-[var(--space-7)] flex flex-col sm:flex-row items-stretch sm:items-center gap-[var(--space-3)] sm:gap-[var(--space-4)]">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              withArrow
              fullWidth
            >
              {hero.primaryCta.label}
            </Button>

            <Button
              href={hero.secondaryCta.href}
              variant="outline-hero"
              fullWidth
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Realistic Metrics Strip across Hero Bottom */}
      <div className="relative z-20 w-full max-w-[1440px] mr-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] pb-[var(--space-6)] sm:pb-[var(--space-7)] pt-[var(--space-6)]">
        <div className="max-w-[1180px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)] lg:gap-0 lg:divide-x lg:divide-[var(--border-strong)] bg-[var(--ink-950)]/85 backdrop-blur-md border border-[var(--border-strong)] rounded-[var(--radius-lg)] p-[var(--space-4)] sm:p-[var(--space-5)] shadow-[var(--shadow-xl)]">
          {/* Metric 1: IS 383 Graded */}
          <div className="flex items-start gap-[var(--space-3)] lg:px-[var(--space-4)]">
            <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--gold-400)] shrink-0 mt-0.5 border border-[var(--gold-500)]/25 shadow-sm">
              <ShieldCheck className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--paper)] tracking-wide uppercase">
                IS 383 Graded
              </span>
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--gold-400)] tracking-wider uppercase mt-0.5">
                Lab-Tested Uniformity
              </span>
              <span className="block font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] text-[var(--warm-200)] mt-1 leading-[var(--lh-normal)]">
                Every batch certified for strict sieve grading &amp; zero silt.
              </span>
            </div>
          </div>

          {/* Metric 2: In-House Processing */}
          <div className="flex items-start gap-[var(--space-3)] lg:px-[var(--space-4)]">
            <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--gold-400)] shrink-0 mt-0.5 border border-[var(--gold-500)]/25 shadow-sm">
              <Layers className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--paper)] tracking-wide uppercase">
                In-House Processing
              </span>
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--gold-400)] tracking-wider uppercase mt-0.5">
                Yedapadavu Quarry Base
              </span>
              <span className="block font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] text-[var(--warm-200)] mt-1 leading-[var(--lh-normal)]">
                Primary blasting, 3-stage cone crushing &amp; automated washing.
              </span>
            </div>
          </div>

          {/* Metric 3: Reliable Supply */}
          <div className="flex items-start gap-[var(--space-3)] lg:px-[var(--space-4)]">
            <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--gold-400)] shrink-0 mt-0.5 border border-[var(--gold-500)]/25 shadow-sm">
              <Scale className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--paper)] tracking-wide uppercase">
                Reliable Supply
              </span>
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--gold-400)] tracking-wider uppercase mt-0.5">
                Scalable Bulk Tonnage
              </span>
              <span className="block font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] text-[var(--warm-200)] mt-1 leading-[var(--lh-normal)]">
                Continuous daily feed capacity for high-volume RMC batching.
              </span>
            </div>
          </div>

          {/* Metric 4: Quick Dispatch */}
          <div className="flex items-start gap-[var(--space-3)] lg:px-[var(--space-4)]">
            <div className="p-2.5 rounded-[var(--radius-sm)] bg-[var(--surface-2)] text-[var(--gold-400)] shrink-0 mt-0.5 border border-[var(--gold-500)]/25 shadow-sm">
              <Truck className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-sm)] sm:text-[length:var(--fs-md)] text-[var(--paper)] tracking-wide uppercase">
                Quick Dispatch
              </span>
              <span className="block font-[family-name:var(--font-body)] font-semibold text-[length:var(--fs-xs)] text-[var(--gold-400)] tracking-wider uppercase mt-0.5">
                GPS Fleet &amp; Weighbridge
              </span>
              <span className="block font-[family-name:var(--font-body)] text-[length:var(--fs-xs)] text-[var(--warm-200)] mt-1 leading-[var(--lh-normal)]">
                Calibrated weighbridge slips with immediate regional transport.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip: STRENGTH YOU CAN BUILD ON */}
      <div className="relative z-20 w-full py-4 sm:py-5 border-t border-[var(--border)] text-center bg-[var(--ink-950)]/90 backdrop-blur-xs">
        <span className="font-[family-name:var(--font-display)] font-extrabold text-sm sm:text-base lg:text-lg uppercase tracking-[0.22em] text-[var(--gold-400)]">
          {hero.stripText || "STRENGTH YOU CAN BUILD ON"}
        </span>
      </div>
    </section>
  );
}
