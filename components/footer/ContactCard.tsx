"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "@/data/site";

export function ContactCard() {
  const { contact } = siteConfig;
  const [qrSize, setQrSize] = useState(130);

  // Responsive QR code size: 130px on desktop (>=1440), 112px on 1024-1439
  useEffect(() => {
    const updateQrSize = () => {
      if (window.innerWidth < 1440 && window.innerWidth >= 1024) {
        setQrSize(112);
      } else {
        setQrSize(130);
      }
    };
    updateQrSize();
    window.addEventListener("resize", updateQrSize);
    return () => window.removeEventListener("resize", updateQrSize);
  }, []);

  const logoSize = Math.round(qrSize * 0.22);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-[var(--space-6)] sm:p-[var(--space-7)] bg-[var(--ink-900)] border border-[var(--border-strong)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] fas-dust overflow-hidden select-none transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)]">
      {/* Subtle warm rim light to blend naturally with gold background */}
      <div
        className="absolute inset-0 rounded-[var(--radius-xl)] pointer-events-none ring-1 ring-inset ring-[var(--gold-500)]/20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-[var(--space-6)] lg:gap-[var(--space-7)] h-full">
        {/* =========================================================
            LEFT COLUMN: QR CODE (Hidden under 768px and on touch devices)
            ========================================================= */}
        <div className="hidden md:flex flex-col items-center shrink-0">
          {/* QR Tile */}
          <div className="bg-[var(--ink-950)] rounded-[var(--radius-md)] p-[var(--space-3)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex items-center justify-center">
            <QRCodeSVG
              value={contact.mapsUrl}
              size={qrSize}
              level="H"
              bgColor="transparent"
              fgColor="currentColor"
              className="text-[var(--gold-500)]"
              imageSettings={{
                src: "/brand/icon-badge.png",
                height: logoSize,
                width: logoSize,
                excavate: true,
              }}
            />
          </div>

          {/* Caption & Map Link */}
          <span className="mt-[var(--space-2)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-xs)] text-[var(--amber-400)] text-center">
            Scan for location
          </span>
          <Link
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-xs)] text-[var(--gold-300)] hover:text-[var(--gold-200)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)]"
          >
            <MapPin className="w-3.5 h-3.5 text-[var(--gold-500)] shrink-0" strokeWidth={2} />
            <span>Open in Maps</span>
          </Link>
        </div>

        {/* =========================================================
            RIGHT COLUMN: CONTACT DETAILS STACK
            ========================================================= */}
        <div className="flex-1 flex flex-col justify-between w-full space-y-[var(--space-4)]">
          {/* 1. Name: Bibin Thomas */}
          <div>
            <h3 className="font-[family-name:var(--font-body)] font-bold text-[length:var(--fs-xl)] sm:text-[length:var(--fs-2xl)] text-[var(--gold-200)] tracking-tight leading-[var(--lh-tight)]">
              {siteConfig.proprietor}
            </h3>
          </div>

          {/* 2. Three Link Rows (44px min tap height) */}
          <div className="flex flex-col space-y-[var(--space-1)]">
            {/* Phone */}
            <Link
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-[var(--space-3)] min-h-[44px] text-[var(--gold-300)] hover:text-[var(--gold-200)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-md)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)]"
            >
              <Phone className="w-[18px] h-[18px] text-[var(--gold-500)] shrink-0" strokeWidth={2} />
              <span>{contact.phone}</span>
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-[var(--space-3)] min-h-[44px] text-[var(--gold-300)] hover:text-[var(--gold-200)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-md)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)] break-all"
            >
              <Mail className="w-[18px] h-[18px] text-[var(--gold-500)] shrink-0" strokeWidth={2} />
              <span>{contact.email}</span>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/918422819302?text=Hi%2C%20I%20need%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[var(--space-3)] min-h-[44px] text-[var(--gold-300)] hover:text-[var(--gold-200)] font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-md)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)]"
            >
              <MessageCircle className="w-[18px] h-[18px] text-[var(--gold-500)] shrink-0" strokeWidth={2} />
              <span>WhatsApp</span>
            </Link>
          </div>

          {/* 3. Hairline and Address */}
          <address className="not-italic pt-[var(--space-3)] border-t border-[var(--border)]">
            <Link
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-[family-name:var(--font-body)] font-medium text-[length:var(--fs-sm)] text-[var(--amber-400)] hover:text-[var(--gold-200)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] rounded-[var(--radius-xs)] leading-[var(--lh-normal)]"
            >
              <span>Sashtav Rd, Yedapadavu,</span>
              <br />
              <span>Mangaluru, Karnataka – 574144</span>
            </Link>
          </address>

          {/* Mobile Only (<768px): Full-Width "Get Directions" Button */}
          <div className="block md:hidden pt-[var(--space-2)]">
            <Link
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] px-[var(--space-4)] py-[var(--space-3)] rounded-[var(--radius-pill)] bg-[var(--ink-950)] text-[var(--gold-200)] font-[family-name:var(--font-display)] font-semibold text-[length:var(--fs-xs)] uppercase tracking-[var(--tracking-caps)] inline-flex items-center justify-center gap-[var(--space-2)] shadow-[var(--shadow-sm)] hover:bg-[var(--ink-900)] transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)]"
            >
              <MapPin className="w-4 h-4 text-[var(--gold-500)]" strokeWidth={2} />
              <span>Get Directions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
