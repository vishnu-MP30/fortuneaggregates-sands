"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Toggle Button (Top Right Menu) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-[var(--paper)] rounded-[var(--radius-xs)] border border-[var(--border-strong)] bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] cursor-pointer flex items-center justify-center min-h-[44px] min-w-[44px] shadow-[var(--shadow-xs)]"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <Menu strokeWidth={2.2} className="w-5 h-5 text-[var(--paper)]" />
      </button>

      {/* Full-Height Drawer Portalled to document.body (Highest z-index, covers everything cleanly) */}
      {isOpen && mounted && createPortal(
        <div className="fixed inset-0" style={{ zIndex: 99999 }}>
          {/* Full-screen backdrop overlay */}
          <div
            className="fixed inset-0 bg-[var(--ink-950)]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container: Always positioned at top-0 right-0 with solid document paper background */}
          <aside
            className="fixed top-0 right-0 bottom-0 w-full max-w-[360px] h-screen bg-[var(--bg-base)] shadow-[var(--shadow-xl)] border-l border-[var(--border)] flex flex-col justify-between p-6 overflow-y-auto"
            style={{ zIndex: 100000 }}
          >
            {/* Drawer Header with Logo and Close [X] Option on Top Right */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <Link
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/brand/icon-badge.png"
                    alt="Fortune Logo Badge"
                    width={38}
                    height={38}
                    className="shrink-0 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-[family-name:var(--font-display)] font-extrabold text-base tracking-[var(--tracking-wordmark)] uppercase fas-wordmark-gradient leading-none">
                      {siteConfig.wordmark}
                    </span>
                    <span className="mt-1 font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-2xs)] tracking-[var(--tracking-wide)] text-[var(--paper)] uppercase leading-none">
                      {siteConfig.wordmarkSub}
                    </span>
                  </div>
                </Link>

                {/* Closing Option on Top Right */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-[var(--radius-xs)] border border-[var(--border-strong)] bg-[var(--surface)] hover:bg-[var(--surface-2)] text-[var(--paper)] transition-colors cursor-pointer flex items-center justify-center shadow-xs"
                  aria-label="Close navigation menu"
                >
                  <X strokeWidth={2.5} className="w-5 h-5 text-[var(--paper)]" />
                </button>
              </div>

              {/* Navigation Links (Fully Clickable & Closes Drawer on Navigation) */}
              <nav className="mt-6 flex flex-col gap-2">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 px-3.5 font-[family-name:var(--font-display)] font-bold text-sm tracking-[var(--tracking-caps)] uppercase text-[var(--paper)] hover:text-[var(--gold-400)] hover:bg-[var(--surface-2)] rounded-[var(--radius-xs)] border-b border-[var(--border)] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="mt-6">
                <Button
                  href={siteConfig.hero.primaryCta.href}
                  variant="primary"
                  withArrow
                  fullWidth
                  onClick={() => setIsOpen(false)}
                >
                  {siteConfig.hero.primaryCta.label}
                </Button>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="pt-6 mt-6 border-t border-[var(--border)] font-[family-name:var(--font-body)] text-xs text-[var(--text-muted)] space-y-2">
              <div className="flex items-center gap-2">
                <Phone strokeWidth={2} className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span className="text-[var(--text-strong)] font-semibold">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail strokeWidth={2} className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin strokeWidth={2} className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.addressShort}</span>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
