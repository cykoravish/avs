"use client";

import { useEffect, useRef, useState } from "react";

const LEDGER = [
  { value: "2017", label: "AVS Infra founded" },
  { value: "18 MO", label: "AVS City Palace — delivered" },
  { value: "24 MO", label: "AVS City Square — delivered" },
  { value: "03", label: "Projects completed or underway" },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>();
  const { ref: ledgerRef, inView: ledgerIn } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-ink overflow-hidden">
      {/* subtle texture: single thin diagonal brass line */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 w-[140%] h-[2px] bg-brass/10 rotate-[-8deg] origin-left"
        aria-hidden
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-10">
        {/* Left: intro */}
        <div
          ref={leftRef}
          className={`lg:col-span-2 transition-all duration-700 ease-out ${
            leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brass" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brass-light">
              02 — The Developer
            </span>
          </div>

          <h2 className="font-display font-bold text-paper text-[8vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight mb-7">
            Built on schedule,
            <br />
            since 2017.
          </h2>

          <div className="space-y-4 font-body text-[15px] md:text-base text-paper/70 leading-relaxed max-w-md">
            <p>
              AVS Infra emerged in 2017 with a simple discipline: set the benchmark,
              then deliver against it. That focus on premium commercial projects,
              handed over with unmatched quality and punctuality, is what the group
              is known for across Ghaziabad.
            </p>
            <p>
              AVS High Street continues that record — a GDA-approved high street
              built the same way every project before it was: on time, and built
              to last.
            </p>
          </div>
        </div>

        {/* Right: stat ledger */}
        <div ref={ledgerRef} className="lg:col-span-3 lg:pt-2">
          <dl className="border-t border-paper/15">
            {LEDGER.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[auto_1fr] sm:grid-cols-[160px_1fr] items-baseline gap-6 py-6 md:py-7 border-b border-paper/15 transition-all duration-500 ease-out ${
                  ledgerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: ledgerIn ? `${i * 90}ms` : "0ms" }}
              >
                <dt className="font-mono text-3xl md:text-4xl font-medium text-brass tabular-nums">
                  {row.value}
                </dt>
                <dd className="font-body text-sm md:text-[15px] text-paper/70 tracking-wide">
                  {row.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
