"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemePreviewToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("fortune_theme_preview");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("fortune_theme_preview", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <aside
      aria-label="Theme Preview Switcher"
      className="fixed bottom-6 left-6 z-[99999] flex items-center p-1 rounded-[var(--radius-pill)] bg-[var(--ink-950)]/90 backdrop-blur-md border border-[var(--gold-400)]/40 shadow-2xl select-none"
    >
      <button
        type="button"
        onClick={() => toggleTheme("light")}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-[family-name:var(--font-display)] font-bold uppercase tracking-wider transition-all cursor-pointer ${
          theme === "light"
            ? "bg-[var(--gold-500)] text-[var(--ink-950)] shadow-xs"
            : "text-[var(--warm-200)] hover:text-[var(--gold-200)]"
        }`}
        aria-pressed={theme === "light"}
      >
        <Sun className="w-3.5 h-3.5" />
        <span>Paper</span>
      </button>

      <button
        type="button"
        onClick={() => toggleTheme("dark")}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-[family-name:var(--font-display)] font-bold uppercase tracking-wider transition-all cursor-pointer ${
          theme === "dark"
            ? "bg-[var(--gold-500)] text-[var(--ink-950)] shadow-xs"
            : "text-[var(--warm-200)] hover:text-[var(--gold-200)]"
        }`}
        aria-pressed={theme === "dark"}
      >
        <Moon className="w-3.5 h-3.5" />
        <span>Night Ink</span>
      </button>
    </aside>
  );
}
