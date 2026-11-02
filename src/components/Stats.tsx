"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2000, suffix: "+", label: "Happy Local Businesses" },
  { value: 250000, suffix: "+", label: "Calls Generated" },
  { value: 600, suffix: "%", label: "Call Volume Growth Reported" },
  { value: 24, suffix: "h", label: "Average Setup Time" },
];

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [start, target, duration]);

  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, visible);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-4xl font-bold text-gradient sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm text-slate-400">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-2 gap-10 rounded-3xl border border-white/10 bg-slate-900/40 px-6 py-14 sm:grid-cols-4">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
