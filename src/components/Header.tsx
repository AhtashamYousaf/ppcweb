"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 text-sm font-bold text-slate-950">
            TD
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            The Delivers
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+13102954421"
            className="text-sm font-medium text-slate-300 hover:text-white"
          >
            (317) 000-0000
          </a>
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
