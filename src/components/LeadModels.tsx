"use client";

import { useState } from "react";

const MODELS = [
  {
    key: "cpl",
    name: "CPL",
    title: "Cost Per Lead",
    desc: "Exclusive, verified leads delivered to you in real time. No sharing, no bidding wars.",
  },
  {
    key: "cpa",
    name: "CPA",
    title: "Cost Per Acquisition",
    desc: "Pay only when a lead converts into a paying customer. Performance-based, zero waste.",
  },
  {
    key: "ppa",
    name: "PPA",
    title: "Pay Per Appointment",
    desc: "Pre-qualified appointments placed directly on your calendar, ready to close.",
  },
  {
    key: "aged",
    name: "AGED",
    title: "Aged Lead Forms",
    desc: "Discounted, previously generated leads — perfect for reactivation campaigns.",
  },
];

export default function LeadModels() {
  const [active, setActive] = useState(MODELS[0].key);
  const current = MODELS.find((m) => m.key === active) ?? MODELS[0];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Choose How You Want to Grow
        </h2>
        <p className="mt-4 text-slate-400">
          Four performance-based lead generation models. Pick the one that fits your
          business, or mix and match.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-4">
        {MODELS.map((model) => (
          <button
            key={model.key}
            onClick={() => setActive(model.key)}
            className={`rounded-xl border px-4 py-4 text-left transition-colors ${
              active === model.key
                ? "border-blue-500/50 bg-blue-500/10"
                : "border-white/10 bg-slate-900/40 hover:border-white/20"
            }`}
          >
            <span
              className={`text-xs font-bold tracking-widest ${
                active === model.key ? "text-emerald-400" : "text-slate-500"
              }`}
            >
              {model.name}
            </span>
            <p className="mt-1 text-sm font-semibold text-white">{model.title}</p>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/40 p-8 text-center">
        <p className="text-lg text-slate-200">{current.desc}</p>
      </div>
    </section>
  );
}
