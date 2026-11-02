"use client";

const ROWS = [
  { label: "Lead Type", us: "Live phone call transfer", them: "Email / text notification" },
  { label: "Exclusivity", us: "100% exclusive to you", them: "Shared with 3–5 businesses" },
  { label: "Monthly Fees", us: "$0", them: "$50 – $300 / month" },
  { label: "Contracts", us: "None, cancel anytime", them: "Annual commitments" },
  { label: "Bad Lead Policy", us: "Credits returned automatically", them: "Refunds fought over" },
];

export default function Comparison() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Tired of Fighting Over Shared Leads?
        </h2>
        <p className="mt-4 text-slate-400">
          Here&apos;s how The Delivers compares to traditional lead generation
          platforms.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-900/60 text-slate-400">
              <th className="px-6 py-4 font-medium">Feature</th>
              <th className="px-6 py-4 font-semibold text-emerald-400">The Delivers</th>
              <th className="px-6 py-4 font-medium">Other Platforms</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-slate-950" : "bg-slate-900/30"}
              >
                <td className="px-6 py-4 font-medium text-white">{row.label}</td>
                <td className="px-6 py-4 text-emerald-300">
                  <span className="mr-2">✓</span>
                  {row.us}
                </td>
                <td className="px-6 py-4 text-slate-500">
                  <span className="mr-2">✕</span>
                  {row.them}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
