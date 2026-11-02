"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    headline: "Get New Customers. Only Pay Per Call.",
    subhead:
      "Pay when a real customer calls you — no monthly fees, no signup fees, no contracts.",
  },
  {
    headline: "Join 2,000+ Businesses Growing With The Delivers.",
    subhead: "Get started today and start answering better calls, not chasing cold leads.",
  },
  {
    headline: "Real-Time Call Transfers. High-Intent Customers.",
    subhead: "We run the marketing and route live calls straight to your phone.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[active];

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 0%, rgba(59,130,246,0.25) 0%, rgba(2,6,23,0) 60%), radial-gradient(50% 50% at 90% 10%, rgba(52,211,153,0.2) 0%, rgba(2,6,23,0) 60%)",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-300">
          Pay Per Call Lead Generation
        </span>

        <h1
          key={active}
          className="animate-fade-up max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          <span className="text-gradient">{slide.headline}</span>
        </h1>

        <p
          key={`sub-${active}`}
          className="animate-fade-up mt-6 max-w-2xl text-lg text-slate-300"
        >
          {slide.subhead}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#demo"
            className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.03]"
          >
            Schedule A Free Demo
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-emerald-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            ["$0", "Setup Fees"],
            ["$0", "Monthly Fees"],
            ["0", "Contracts"],
            ["24h", "Avg. Setup Time"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="mt-1 text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
