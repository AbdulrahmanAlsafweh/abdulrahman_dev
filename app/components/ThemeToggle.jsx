"use client";

import { useEffect, useState } from "react";

const isValidTheme = (value) => value === "light" || value === "dark";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const current = isValidTheme(root.dataset.theme) ? root.dataset.theme : null;
    const initial = isValidTheme(stored) ? stored : current;

    if (isValidTheme(initial)) {
      root.dataset.theme = initial;
      root.style.colorScheme = initial;
      setTheme(initial);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = prefersDark ? "dark" : "light";
      root.dataset.theme = nextTheme;
      root.style.colorScheme = nextTheme;
      setTheme(nextTheme);
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const label = theme === "dark" ? "Dark" : "Light";
  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${nextLabel} mode`}
      className={`inline-flex items-center gap-3 rounded-full border border-border bg-foreground px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition hover:-translate-y-0.5 hover:bg-foreground/90 ${mounted ? "" : "opacity-0 pointer-events-none"} ${className}`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-background text-foreground">
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
            <path
              d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4.5" strokeWidth="2" />
            <path
              d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      <span className="leading-none">{label}</span>
    </button>
  );
}
