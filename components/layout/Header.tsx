import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg-base)]/95 backdrop-blur-md border-b border-[var(--border)] select-none">
      <div className="w-full max-w-[1440px] mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)] h-[76px] flex items-center justify-between">
        {/* Left: Badge Logo + CSS Wordmark */}
        <Link href="/" className="flex items-center gap-[var(--space-3)] group" aria-label="Fortune Aggregates and Sands Home">
          <Image
            src="/brand/icon-badge.png"
            alt="Fortune Logo Badge"
            width={42}
            height={42}
            className="shrink-0 object-contain transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] group-hover:scale-105"
            priority
          />
          <div className="flex flex-col justify-center">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-[length:var(--fs-lg)] sm:text-[length:var(--fs-xl)] tracking-[var(--tracking-wordmark)] uppercase fas-wordmark-gradient leading-none">
              {siteConfig.wordmark}
            </span>
            <span className="mt-1 font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] tracking-[var(--tracking-wide)] text-[var(--paper)] uppercase leading-none">
              {siteConfig.wordmarkSub}
            </span>
          </div>
        </Link>

        {/* Centre Nav (Clean visible text navigation outside hero image) */}
        <nav className="hidden md:flex items-center gap-[var(--space-4)] lg:gap-[var(--space-6)]" aria-label="Main Navigation">
          {siteConfig.navigation.map((item, index) => {
            const isFirst = index === 0;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-[var(--space-2)] font-[family-name:var(--font-display)] font-bold text-[length:var(--fs-xs)] tracking-[var(--tracking-caps)] uppercase transition-colors duration-[var(--dur-base)] ease-[var(--ease-out)] ${isFirst
                  ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                  : "text-[var(--paper)] hover:text-[var(--accent)] border-b-2 border-transparent hover:border-[var(--accent)]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Solid Action Button + Mobile Drawer Toggle */}
        <div className="flex items-center gap-[var(--space-3)]">
          <div className="hidden sm:inline-flex">
            <Button
              href={siteConfig.hero.primaryCta.href}
              variant="primary"
              withArrow
            >
              {siteConfig.hero.primaryCta.label}
            </Button>
          </div>

          {/* Navigation drawer toggle */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
