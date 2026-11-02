"use client";

import { useMemo, useState } from "react";

const CATEGORIES = [
  "All",
  "Home Services",
  "Legal",
  "Insurance",
  "Financial",
  "Medical",
  "Automotive",
] as const;

const INDUSTRIES: { name: string; category: (typeof CATEGORIES)[number]; blurb: string }[] = [
  { name: "Plumbing", category: "Home Services", blurb: "Fix more plumbing and drainage issues with direct calls." },
  { name: "HVAC", category: "Home Services", blurb: "Comfort calls in winter or summer, year-round." },
  { name: "Electrician", category: "Home Services", blurb: "Get small and major electrician jobs today." },
  { name: "Roofing", category: "Home Services", blurb: "Book more roofing inspections and repairs." },
  { name: "Solar Installation", category: "Home Services", blurb: "Per-customer-call pricing for solar installs." },
  { name: "Pest Control", category: "Home Services", blurb: "Answer more pest removal calls near you." },
  { name: "Garage Door Repair", category: "Home Services", blurb: "Quicker garage door repair and replacement calls." },
  { name: "Water Damage Restoration", category: "Home Services", blurb: "Emergency water, mold, and fire repair calls." },
  { name: "Personal Injury", category: "Legal", blurb: "Convert accident inquiries into real clients." },
  { name: "Criminal Defense", category: "Legal", blurb: "DUI and offense case calls, pre-qualified." },
  { name: "Immigration", category: "Legal", blurb: "Connect with clients navigating immigration cases." },
  { name: "Auto Insurance", category: "Insurance", blurb: "New policy shoppers calling in real time." },
  { name: "Home Insurance", category: "Insurance", blurb: "Calls from new homeowners seeking coverage." },
  { name: "Medicare", category: "Insurance", blurb: "Connect with seniors needing plan guidance." },
  { name: "Final Expense", category: "Insurance", blurb: "Compassionate, qualified final expense calls." },
  { name: "Tax Debt Relief", category: "Financial", blurb: "Calls from people seeking tax resolution help." },
  { name: "Credit Repair", category: "Financial", blurb: "High-intent calls from credit-conscious customers." },
  { name: "Debt Settlement", category: "Financial", blurb: "Connect with customers ready to settle debt." },
  { name: "Dentist", category: "Medical", blurb: "Send more new-patient calls to your practice." },
  { name: "Home Care", category: "Medical", blurb: "Families looking for trusted in-home care." },
  { name: "Auto Repair", category: "Automotive", blurb: "Local drivers calling for repairs today." },
  { name: "Towing", category: "Automotive", blurb: "Emergency roadside and towing calls, routed fast." },
  { name: "Windshield Replacement", category: "Automotive", blurb: "Get more calls to repair car windshields." },
];

export default function Industries() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? INDUSTRIES
        : INDUSTRIES.filter((industry) => industry.category === active),
    [active]
  );

  return (
    <section id="industries" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How Can We Help?
        </h2>
        <p className="mt-4 text-slate-400">
          We generate exclusive pay-per-call leads across dozens of industries.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-transparent bg-gradient-to-r from-blue-600 to-emerald-500 text-white"
                : "border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((industry) => (
          <div
            key={industry.name}
            className="rounded-xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-blue-500/30"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              {industry.category}
            </span>
            <h3 className="mt-2 text-base font-semibold text-white">{industry.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{industry.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
