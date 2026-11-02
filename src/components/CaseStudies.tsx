"use client";

const CASES = [
  { name: "360 Plumbing Inc.", tag: "Plumbing", result: "Tripled Google Business Profile call traffic in 60 days." },
  { name: "Jaspey Car Service", tag: "Automotive", result: "Jumped to the top 3 local search rankings for 'car service near me'." },
  { name: "MOE Contractors", tag: "Remodeling", result: "Doubled booked estimates through optimized Google ranking." },
  { name: "321 Jetski Rentals", tag: "Travel & Leisure", result: "Grew seasonal bookings with consistent top-of-map visibility." },
  { name: "AM Local Guide", tag: "City Guide", result: "Built long-term domain authority and recurring call volume." },
  { name: "Exploria Resorts", tag: "Hospitality", result: "Increased hotel reservation calls across multiple properties." },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real Results, Real Businesses
        </h2>
        <p className="mt-4 text-slate-400">
          A look at how businesses across industries grew with The Delivers.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map((item) => (
          <div
            key={item.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-blue-400">
              {item.tag}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-3 flex-1 text-sm text-slate-400">{item.result}</p>
            <span className="mt-4 text-sm font-medium text-emerald-400">
              Read case study →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
