"use client";

export default function FinalCTA() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-slate-900 to-emerald-500/20 px-8 py-16 text-center sm:px-16">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Stop Chasing and Start Closing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Join hundreds of home service and professional businesses getting
          real, exclusive calls with The Delivers. No credit card required, no
          contracts.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:ask@thedelivers.com"
            className="rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.03]"
          >
            Get Started
          </a>
          <a
            href="tel:+13102954421"
            className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Call (317) 000-0000
          </a>
        </div>
      </div>
    </section>
  );
}
