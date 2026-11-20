import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function TopBar() {
  const { contact } = siteConfig;

  return (
    <div className="w-full bg-[var(--ink-950)] border-b border-[var(--border)] h-[var(--space-7)] flex items-center select-none">
      <div className="w-full max-w-[var(--container-site)] mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-7)] flex items-center justify-between text-[length:var(--fs-sm)] font-[family-name:var(--font-body)] font-medium text-[var(--paper)]">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-[var(--space-4)] sm:gap-[var(--space-5)]">
          {/* Email: Hidden below 768px */}
          <Link
            href={`mailto:${contact.email}`}
            className="hidden md:inline-flex items-center gap-[var(--space-2)] text-[var(--paper)] hover:text-[var(--gold-300)] transition-colors duration-[var(--dur-base)]"
          >
            <Mail strokeWidth={2} className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" aria-hidden="true" />
            <span className="text-[var(--paper)]">{contact.email}</span>
          </Link>

          {/* Divider: Hidden below 768px */}
          <span className="hidden md:inline text-[var(--border-strong)]" aria-hidden="true">
            |
          </span>

          {/* Phone: Visible on all screens */}
          <Link
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex items-center gap-[var(--space-2)] font-medium text-[var(--paper)] hover:text-[var(--gold-300)] transition-colors duration-[var(--dur-base)]"
          >
            <Phone strokeWidth={2} className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" aria-hidden="true" />
            <span className="text-[var(--paper)]">{contact.phone}</span>
          </Link>

          {/* Divider: Hidden below 768px */}
          <span className="hidden md:inline text-[var(--border-strong)]" aria-hidden="true">
            |
          </span>

          {/* Location: Hidden below 768px */}
          <div className="hidden md:inline-flex items-center gap-[var(--space-2)] text-[var(--paper)]">
            <MapPin strokeWidth={2} className="w-3.5 h-3.5 text-[var(--gold-400)] shrink-0" aria-hidden="true" />
            <span className="text-[var(--paper)]">{contact.addressShort}</span>
          </div>
        </div>

        {/* Right: WhatsApp Quick Link */}
        <div className="flex items-center gap-[var(--space-3)] sm:gap-[var(--space-4)]">
          <Link
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[var(--space-2)] text-[var(--paper)] hover:text-[var(--gold-300)] transition-colors duration-[var(--dur-base)]"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle strokeWidth={2} className="w-4 h-4 text-[var(--gold-400)] shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline text-[var(--paper)]">WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
