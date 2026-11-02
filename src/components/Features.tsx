"use client";

const FEATURES = [
  { title: "Call Log", desc: "Every call tracked, timestamped, and organized in one dashboard.", icon: "📋" },
  { title: "Full Recordings", desc: "Listen to every call for quality checks, training, and disputes.", icon: "🎧" },
  { title: "One-Click Credit Requests", desc: "Flag a bad call and request a credit directly from your dashboard.", icon: "⚡" },
  { title: "Built-In Mini CRM", desc: "Grade leads hot, warm, or cold, add notes, and track ROI per call.", icon: "📊" },
  { title: "Multi-Profile Support", desc: "Manage multiple locations or service areas from a shared credit pool.", icon: "🏢" },
  { title: "Pause Anytime", desc: "Turn call volume up or down, or pause entirely — no penalties.", icon: "⏸️" },
];

export default function Features() {
  return (
    <section className="border-y border-white/10 bg-slate-900/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 text-slate-400">
            A real-time dashboard built for service businesses that want control,
            not guesswork.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
              <h3 className="text-base font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
