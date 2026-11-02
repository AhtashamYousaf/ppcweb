"use client";

const LOGOS = [
  "360 Plumbing",
  "Jaspey Car Service",
  "MOE Contractors",
  "321 Jetski Rentals",
  "Exploria Resorts",
  "AM Local Guide",
];

export default function LogoStrip() {
  return (
    <section className="border-y border-white/10 bg-slate-900/40 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Join 2,000+ businesses using The Delivers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-sm font-semibold tracking-wide text-slate-400 opacity-80"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
