"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  return (
    <nav className="fixed top-0 w-full bg-surface/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Abdulrahman<span className="text-primary">Safweh</span>
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#skills" className="hover:text-primary">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-primary hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          {/* Icon: hamburger vs close */}
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

      {/* Mobile dropdown panel */}
      {open ? (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full inset-x-0 bg-surface border-t border-border shadow-lg px-6 py-4"
        >
          <div className="flex flex-col space-y-4 text-sm font-medium">
            <a href="#about" onClick={close} className="hover:text-primary">
              About
            </a>
            <a href="#skills" onClick={close} className="hover:text-primary">
              Skills
            </a>
            <a href="#projects" onClick={close} className="hover:text-primary">
              Projects
            </a>
            <a href="#services" onClick={close} className="hover:text-primary">
              Services
            </a>
            <a href="#contact" onClick={close} className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
