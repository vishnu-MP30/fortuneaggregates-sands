import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ButtonVariant = "primary" | "forest" | "stage-panel" | "white" | "outline-hero" | "outline" | "ghost";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  withArrow?: boolean;
  arrowInSquare?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  withArrow = false,
  arrowInSquare = false,
  fullWidth = false,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  // Base button styles matching reference layout: crisp rectangular with subtle 4px corners
  const baseStyles =
    "inline-flex items-center justify-center font-[family-name:var(--font-display)] font-semibold uppercase tracking-[var(--tracking-caps)] text-[length:var(--fs-xs)] sm:text-[length:var(--fs-sm)] transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--focus-ring)] select-none rounded-[var(--radius-xs)]";

  const sizeStyles = arrowInSquare
    ? "pl-[var(--space-5)] pr-[var(--space-3)] py-[var(--space-3)] gap-[var(--space-3)]"
    : "px-[var(--space-6)] py-[var(--space-3)] gap-[var(--space-2)]";

  const widthStyles = fullWidth ? "w-full sm:w-auto" : "";

  // Token-driven variants without hardcoded hex or px font sizes
  const variantStyles = {
    primary:
      "bg-[image:var(--grad-gold)] text-[var(--text-on-gold)] shadow-[var(--shadow-sm)] hover:brightness-105 active:brightness-95",
    forest:
      "bg-[var(--green-700)] text-[var(--paper)] hover:bg-[var(--green-800)] shadow-[var(--shadow-sm)]",
    "stage-panel":
      "bg-[var(--paper)] text-[var(--green-700)] hover:bg-[var(--gold-200)] shadow-[var(--shadow-sm)]",
    white:
      "bg-[var(--surface)] text-[var(--ink-950)] hover:bg-[var(--warm-100)] shadow-[var(--shadow-sm)]",
    "outline-hero":
      "border border-[var(--paper)]/50 hover:border-[var(--paper)] text-[var(--paper)] bg-[var(--ink-950)]/40 hover:bg-[var(--ink-950)]/60 backdrop-blur-xs",
    outline:
      "border border-[var(--border-strong)] text-[var(--text-strong)] bg-transparent hover:bg-[var(--surface-2)]",
    ghost:
      "text-[var(--text-strong)] bg-transparent hover:bg-[var(--surface-2)]",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${widthStyles} ${variantStyles} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {withArrow && !arrowInSquare && (
        <ArrowUpRight
          strokeWidth={2}
          className="w-4 h-4 shrink-0 transition-transform duration-[var(--dur-fast)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
          aria-hidden="true"
        />
      )}
      {arrowInSquare && (
        <span
          className="w-[24px] h-[24px] rounded-[var(--radius-xs)] bg-[var(--ink-950)]/15 flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          <ArrowUpRight strokeWidth={2} className="w-3.5 h-3.5" />
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    return (
      <Link
        href={href}
        className={`group ${combinedClasses}`}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${combinedClasses}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
