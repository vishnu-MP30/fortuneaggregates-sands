"use client";

import React, { useEffect, useRef, useState } from "react";
import { AudienceCard, AudienceCardData } from "./AudienceCard";

interface AudienceListProps {
  cards: AudienceCardData[];
  onExplore?: (card: AudienceCardData) => void;
}

export function AudienceList({ cards, onExplore }: AudienceListProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {cards.map((card, index) => (
        <div
          key={card.number || card.title}
          className={`h-full transition-all duration-500 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <AudienceCard card={card} index={index} onExplore={onExplore} />
        </div>
      ))}
    </div>
  );
}
