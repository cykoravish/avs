"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    image: "/images/track-citypalace.jpg",
    status: "Delivered",
    year: "2019",
    name: "AVS City Palace",
    stat: "18 MO turnaround",
  },
  {
    image: "/images/track-citysquare.jpg",
    status: "Delivered",
    year: "2022",
    name: "AVS City Square",
    stat: "24 MO turnaround",
  },
  {
    image: "/images/track-citycentre.jpg",
    status: "Ongoing",
    year: "2025",
    name: "AVS City Centre",
    stat: "Under construction",
  },
  {
    image: "/images/track-highstreet.jpg",
    status: "Launching",
    year: "2026",
    name: "AVS High Street",
    stat: "GDA approved · freehold",
  },
];

function FilmCard({ p }: { p: (typeof PROJECTS)[number] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setFocused(e.intersectionRatio > 0.6),
      { threshold: [0, 0.6, 1], root: el.closest("[data-filmstrip]") }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="snap-center shrink-0 w-[78vw] sm:w-[360px] transition-transform duration-500 ease-out"
      style={{ transform: `scale(${focused ? 1 : 0.94})` }}
    >
      <div className="relative h-[220px] overflow-hidden mb-4">
        <img
          src={p.image}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <span
          className={`absolute top-3 left-3 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 ${
            p.status === "Delivered"
              ? "bg-brass text-ink"
              : "bg-paper/15 text-paper border border-paper/40"
          }`}
        >
          {p.status}
        </span>
      </div>
      <p className="font-mono text-[11px] tracking-[0.2em] text-brass-light mb-1.5">
        {p.year}
      </p>
      <h3 className="font-display font-semibold text-paper text-xl mb-1.5">
        {p.name}
      </h3>
      <p className="font-body text-sm text-paper/60">{p.stat}</p>
    </div>
  );
}

export default function TrackRecord() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brass" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brass-light">
            06 — Track Record
          </span>
        </div>
        <h2 className="font-display font-bold text-paper text-[9vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight max-w-2xl">
          A record measured in months, not excuses.
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-ink to-transparent z-10" />

        <div
          data-filmstrip
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 pb-6 cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((p) => (
            <FilmCard key={p.name} p={p} />
          ))}
          <div className="shrink-0 w-1 md:w-2" />
        </div>
      </div>
    </section>
  );
}
