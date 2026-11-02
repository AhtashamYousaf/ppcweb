"use client";

const COLUMNS = [
  {
    title: "Resources",
    links: ["Pricing", "Case Studies", "Industries", "Get Started", "Contact"],
  },
  {
    title: "Company",
    links: ["How We Work", "Reviews", "Success Stories", "FAQ", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Credit & Refund Policy"],
  },
];

const SOCIALS = ["Facebook", "X", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 text-sm font-bold text-slate-950">
                TD
              </span>
              <span className="text-lg font-semibold text-white">The Delivers</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Better exposure. Pay for results. We connect local businesses with
              real, exclusive customer calls.
            </p>
            <p className="mt-4 text-sm text-slate-400">ask@thedelivers.com</p>
            <p className="text-sm text-slate-400">(317) 000-0000</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 The Delivers. All rights reserved.
          </p>
          <div className="flex gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social}
                href="#top"
                className="text-xs text-slate-500 transition-colors hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
