"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((value) => !value);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-border/70 bg-surface/80 px-4 py-3 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] backdrop-blur">
          <a href="#" className="flex items-center gap-3">
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold">Abdulrahman Safweh</span>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-muted">
                Web and Systems Developer
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-border bg-surface/80 p-2 text-foreground shadow-sm transition hover:bg-surface"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="mt-3 rounded-3xl border border-border bg-surface/95 p-5 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-muted transition hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle className="mt-4 w-full justify-center sm:hidden" />
          </div>
        ) : null}
      </div>
    </header>
  );
}
