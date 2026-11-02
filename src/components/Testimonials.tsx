"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "We grew our call volume by 600% within two months of working with The Delivers. The calls are real, qualified, and exclusive.",
    name: "Thomas Wolfmeier",
    role: "Co-President, 911 Rooter & Plumbing",
  },
  {
    quote:
      "No more fighting over shared leads. Every call that comes in is ours alone, and the credit system actually works when a call is bad.",
    name: "Nelson Wolfmeier",
    role: "Owner, 911 Rooter & Plumbing",
  },
  {
    quote:
      "Setup took less than a day and we started getting live transfers almost immediately. The dashboard makes ROI tracking effortless.",
    name: "Maria Chen",
    role: "Operations Manager, BrightPath HVAC",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Check What Our Clients Say
      </h2>

      <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/40 p-10 sm:p-14">
        <p className="text-xl font-medium leading-relaxed text-slate-100 sm:text-2xl">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-8">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-emerald-400">{testimonial.role}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 hover:bg-white/5"
          >
            ←
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index ? "bg-emerald-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 hover:bg-white/5"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
