"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is pay-per-call lead generation?",
    a: "It's a model where you only pay when a real customer calls your business — not for clicks, impressions, or shared contact forms.",
  },
  {
    q: "Are the calls exclusive to my business?",
    a: "Yes. Every call routed through The Delivers is 100% exclusive to you. We never sell the same call to multiple competitors.",
  },
  {
    q: "How fast can I start receiving calls?",
    a: "Most businesses are live within 24 hours of setting up their profile and funding their account.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. There are no contracts, no setup fees, and no cancellation fees. You can pause or stop anytime.",
  },
  {
    q: "Do you charge monthly fees?",
    a: "No monthly fees. You only pay for the calls you receive, and invalid calls are credited back.",
  },
  {
    q: "What industries do you support?",
    a: "Home services, legal, insurance, financial, medical, automotive, and more — see the Industries section above for the full list.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/40"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-white">{item.q}</span>
                <span
                  className={`ml-4 text-emerald-400 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
