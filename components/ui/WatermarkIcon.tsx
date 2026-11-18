import React from "react";
import { Mountain, Scale, Truck, LucideIcon } from "lucide-react";

export type WatermarkIconName = "mountain" | "scale" | "truck";

interface WatermarkIconProps {
  name: WatermarkIconName;
  className?: string;
}

const iconMap: Record<WatermarkIconName, LucideIcon> = {
  mountain: Mountain,
  scale: Scale,
  truck: Truck,
};

export function WatermarkIcon({ name, className = "" }: WatermarkIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return (
    <div
      className={`pointer-events-none select-none text-[var(--gold-300)] opacity-12 ${className}`}
      aria-hidden="true"
    >
      <IconComponent strokeWidth={1.25} className="w-full h-full" />
    </div>
  );
}

