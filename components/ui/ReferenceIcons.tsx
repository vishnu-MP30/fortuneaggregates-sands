import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

/**
 * Custom line icons precisely matching Reference 1 & Reference 2 aesthetic.
 * Clean 1.75px architectural line art in Fortune Gold (var(--gold-500)) and brand palette.
 */

// 1. Construction consultants & builders (3 figures in safety hard hats)
export function ConsultantsIcon({ className = "w-12 h-12", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Center Worker Hard Hat */}
      <path d="M25 21c0-4.4 3.1-8 7-8s7 3.6 7 8v2H25v-2z" />
      <path d="M22 23h20v2H22z" />
      <circle cx="32" cy="18" r="1.5" />
      {/* Center Face & Shoulders */}
      <path d="M28 25v3c0 2.2 1.8 4 4 4s4-1.8 4-4v-3" />
      <path d="M23 44v-4c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v4" />
      {/* Center Vest Lines */}
      <path d="M29 34l3 6 3-6" />
      <path d="M32 40v4" />

      {/* Left Worker */}
      <path d="M11 27c0-3.3 2.2-6 5-6s5 2.7 5 6v2H11v-2z" />
      <path d="M9 29h14v2H9z" />
      <path d="M13 31v2c0 1.7 1.3 3 3 3s3-1.3 3-3v-2" />
      <path d="M7 44v-3c0-2.8 2.2-5 5-5h3" />
      <path d="M12 37l2 4" />

      {/* Right Worker */}
      <path d="M43 27c0-3.3 2.2-6 5-6s5 2.7 5 6v2H43v-2z" />
      <path d="M41 29h14v2H41z" />
      <path d="M45 31v2c0 1.7 1.3 3 3 3s3-1.3 3-3v-2" />
      <path d="M47 36h3c2.8 0 5 2.2 5 5v3" />
      <path d="M50 37l-2 4" />
    </svg>
  );
}

// 2. Architecture & building (Building facade with scaffolding grid and precision gauge)
export function ArchitectureIcon({ className = "w-12 h-12", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Main Structure Base */}
      <path d="M14 48V25l18-12 18 12v23H14z" />
      {/* Roof Scaffolding Grid */}
      <path d="M20 18h24" />
      <path d="M23 14v10" />
      <path d="M29 10v14" />
      <path d="M35 10v14" />
      <path d="M41 14v10" />
      {/* Windows on left facade */}
      <rect x="20" y="28" width="8" height="8" rx="1" />
      <line x1="24" y1="28" x2="24" y2="36" />
      <line x1="20" y1="32" x2="28" y2="32" />
      {/* Door */}
      <path d="M22 48v-6h8v6" />
      {/* Compass / Measurement Dial on right */}
      <circle cx="44" cy="38" r="7" />
      <path d="M44 34v4l3 2" />
      <path d="M39 33l-2-2" />
      <path d="M49 43l2 2" />
      {/* Ground Foundation Line */}
      <line x1="10" y1="48" x2="54" y2="48" />
    </svg>
  );
}

// 3. Construction management (Site engineer with safety helmet + high-rise building with crane)
export function ManagementIcon({ className = "w-12 h-12", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Supervisor Hard Hat (Left) */}
      <path d="M15 22c0-3.9 2.7-7 6-7s6 3.1 6 7v2H15v-2z" />
      <path d="M12 24h18v2H12z" />
      <circle cx="21" cy="19" r="1.5" />
      {/* Supervisor Face & Body */}
      <path d="M18 26v3c0 1.7 1.3 3 3 3s3-1.3 3-3v-3" />
      <path d="M13 48v-4c0-3.3 2.7-6 6-6h4c2.2 0 4.1 1.2 5.1 3" />
      <path d="M18 38l3 4 3-4" />

      {/* Skyscraper / High Rise Tower (Right) */}
      <rect x="34" y="16" width="20" height="32" rx="1" />
      {/* 3x2 Grid Windows */}
      <circle cx="40" cy="22" r="1.5" />
      <circle cx="48" cy="22" r="1.5" />
      <circle cx="40" cy="29" r="1.5" />
      <circle cx="48" cy="29" r="1.5" />
      <circle cx="40" cy="36" r="1.5" />
      <circle cx="48" cy="36" r="1.5" />
      <circle cx="40" cy="43" r="1.5" />
      <circle cx="48" cy="43" r="1.5" />

      {/* Crane on top */}
      <path d="M38 16V10h14" />
      <path d="M46 10l6 6" />
      <line x1="52" y1="10" x2="52" y2="13" />

      {/* Base Line */}
      <line x1="10" y1="48" x2="56" y2="48" />
    </svg>
  );
}

// 4. Infrastructure & highway works (Bridge arch, road alignment & paving roller)
export function InfraIcon({ className = "w-12 h-12", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Deck of the Bridge */}
      <path d="M10 24h44" />
      <path d="M10 27h44" />
      {/* Structural Piers */}
      <path d="M16 27v17" />
      <path d="M48 27v17" />
      {/* Center Arch */}
      <path d="M16 44c0-8.8 7.2-16 16-16s16 7.2 16 16" />
      {/* Vertical suspension cables */}
      <line x1="24" y1="27" x2="24" y2="32" />
      <line x1="32" y1="27" x2="32" y2="28" />
      <line x1="40" y1="27" x2="40" y2="32" />
      {/* Roadway & Center Divider Dashes */}
      <line x1="10" y1="48" x2="54" y2="48" />
      <line x1="28" y1="44" x2="36" y2="44" strokeDasharray="2 2" />
    </svg>
  );
}

// 5. Authorized material dealers (Commercial tipper truck & certified weighbridge scale)
export function DealersIcon({ className = "w-12 h-12", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Truck Cargo Bed */}
      <path d="M12 24h24v16H12z" />
      <path d="M12 28h24" />
      {/* Truck Cabin */}
      <path d="M36 28h10l6 7v5H36v-12z" />
      <path d="M40 31h5l3 4h-8v-4z" />
      {/* Wheels */}
      <circle cx="20" cy="43" r="4" />
      <circle cx="28" cy="43" r="4" />
      <circle cx="46" cy="43" r="4" />
      {/* Certified Weighbridge Plate */}
      <line x1="8" y1="48" x2="56" y2="48" />
      <path d="M16 48v3" />
      <path d="M48 48v3" />
    </svg>
  );
}

// 6. Alert / info icon for the bottom callout strip (matching Reference 2 badge)
export function AlertBadgeIcon({ className = "w-6 h-6", color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2.5} />
    </svg>
  );
}

