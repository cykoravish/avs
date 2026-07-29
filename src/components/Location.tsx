"use client";

import { useEffect, useRef, useState } from "react";

const GROUPS = [
  {
    label: "Essentials",
    rows: [
      ["GD Goenka School", "Nearby"],
      ["Yashoda Hospital", "4 min"],
      ["Ghaziabad Tehsil", "1 min"],
      ["DM Office", "1 min"],
    ],
  },
  {
    label: "Transit",
    rows: [
      ["Hindon River Metro", "4 min"],
      ["Rapid Rail Station", "4 min"],
      ["Ghaziabad Railway Stn.", "10 min"],
      ["Anand Vihar ISBT", "30 min"],
    ],
  },
  {
    label: "Wider City",
    rows: [
      ["International Cricket Stadium", "1 min"],
      ["Eastern Peripheral Expwy.", "16 min"],
      ["Noida Sector-62", "24 min"],
      ["NH-1, NH-24 & NH-58", "Direct"],
    ],
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export default function Location() {
  const { ref: leftRef, inView: leftIn } = useInView<HTMLDivElement>();
  const { ref: mapRef, inView: mapIn } = useInView<HTMLDivElement>();

  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-16 items-start">
        {/* Left: ledger */}
        <div ref={leftRef}>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brass" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-2/70">
              05 — Location
            </span>
          </div>
          <h2 className="font-display font-bold text-ink text-[9vw] sm:text-4xl md:text-[38px] leading-[1.1] tracking-tight mb-10">
            On NH-58, on the map.
          </h2>

          <div className="space-y-9">
            {GROUPS.map((g, gi) => (
              <div key={g.label}>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass mb-3">
                  {g.label}
                </p>
                <ul>
                  {g.rows.map(([place, time], i) => (
                    <li
                      key={place}
                      className={`flex items-center gap-3 py-2.5 border-b border-line transition-all duration-500 ease-out ${
                        leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                      }`}
                      style={{
                        transitionDelay: leftIn ? `${(gi * 4 + i) * 60}ms` : "0ms",
                      }}
                    >
                      <span className="h-px w-3 bg-brass shrink-0" />
                      <span className="font-body text-sm text-ink flex-1">{place}</span>
                      <span className="font-mono text-xs text-ink-2/70 tabular-nums">
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: map */}
        <div
          ref={mapRef}
          className={`relative border border-line p-2 md:p-3 bg-white transition-all duration-700 ease-out ${
            mapIn ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
        >
          <div className="relative overflow-hidden">
            <img
              src="/images/location-map.jpg"
              alt="AVS High Street connectivity map — NH-58, Raj Nagar Extension, Ghaziabad"
              className="w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            {/* Pulsing pin marker, approximate position over the project marker */}
            <span className="absolute left-[36%] top-[30%] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute inset-0 rounded-full bg-rust/60 motion-safe:animate-ping" />
              <span className="relative block h-2.5 w-2.5 rounded-full bg-rust border border-paper" />
            </span>
          </div>
          <p className="font-mono text-[11px] text-ink-2/60 tracking-wide px-2 py-2.5">
            Khasara No. 490, 491, 494–497, Noor Nagar, NH-58 Main Road, Raj Nagar
            Extension, Ghaziabad – 201017
          </p>
        </div>
      </div>
    </section>
  );
}
