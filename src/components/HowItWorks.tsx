"use client";

const STEPS = [
  {
    title: "We Find Them",
    desc: "Our team runs targeted ad campaigns, SEO, and Google Business Profile optimization to reach customers actively searching for your service.",
    icon: "🔍",
  },
  {
    title: "They Call You",
    desc: "Interested customers call your business directly — real-time, high-intent, exclusive calls routed straight to your phone.",
    icon: "📞",
  },
  {
    title: "You Pay Per Call",
    desc: "No setup fees, no monthly fees, no cancellation fees. You only pay for the calls that come in — bad calls are credited back.",
    icon: "💳",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stop Chasing Leads. <span className="text-gradient">Start Answering Calls.</span>
        </h2>
        <p className="mt-4 text-slate-400">
          Don&apos;t pay for clicks. Pay for customer calls — $0 setup, $0 monthly
          service, $0 cancellation fees.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-8"
          >
            <span className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 text-xs font-bold text-white">
              {i + 1}
            </span>
            <div className="mb-4 text-3xl">{step.icon}</div>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
