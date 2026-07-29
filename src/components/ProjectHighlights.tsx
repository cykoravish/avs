"use client";

import { useState } from "react";

const PANELS = [
  {
    tag: "01 — Retail",
    title: "Storefronts built for footfall.",
    copy: "Prominent-visibility retail modules and hypermarket-ready floor plates on a live NH-58 high street.",
    detail: "Showrooms · Hypermarkets · Studio retail units with ample frontage",
    image: "/images/panel-retail.jpg",
  },
  {
    tag: "02 — Stay",
    title: "Rooms with a reason to stay.",
    copy: "A hotel, guest rooms and service apartments designed for the modern business traveller.",
    detail: "Hotel · Guest rooms · Service apartments",
    image: "/images/panel-hospitality.jpg",
  },
  {
    tag: "03 — Work",
    title: "Offices that mean business.",
    copy: "Dedicated office spaces and business suites with their own access, away from the retail rush.",
    detail: "Office spaces · Business suites · Dedicated entry & lifts",
    image: "/images/panel-business.jpg",
  },
];

export default function ProjectHighlights() {
  const [active, setActive] = useState(0);

  return (
    <section id="project" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brass" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-2/70">
            03 — Inside The High Street
          </span>
        </div>
        <h2 className="font-display font-bold text-ink text-[9vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight max-w-2xl mb-14 md:mb-16">
          Three addresses under one roof.
        </h2>

        {/* Desktop: expanding street panels */}
        <div className="hidden md:flex h-[560px] gap-[3px] border-y border-line">
          {PANELS.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.tag}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-expanded={isActive}
                className="relative h-full overflow-hidden text-left transition-[flex-basis,flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  flexGrow: isActive ? 3 : 1,
                  flexBasis: 0,
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-out"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    filter: isActive ? "brightness(1)" : "brightness(0.55)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-brass-light mb-3">
                    {p.tag}
                  </span>
                  <h3
                    className={`font-display font-semibold text-paper leading-tight transition-all duration-300 ${
                      isActive ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                    }`}
                    style={{ transitionDelay: isActive ? "150ms" : "0ms" }}
                  >
                    <p className="font-body text-sm text-paper/80 mb-3 max-w-xs">
                      {p.copy}
                    </p>
                    <p className="font-mono text-[11px] tracking-wide text-brass-light">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden flex flex-col gap-[3px]">
          {PANELS.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.tag}
                onClick={() => setActive(isActive ? -1 : i)}
                aria-expanded={isActive}
                className="relative overflow-hidden text-left transition-[height] duration-400"
                style={{ height: isActive ? 340 : 84 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    filter: isActive ? "brightness(1)" : "brightness(0.6)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass-light mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-display font-semibold text-paper text-lg leading-tight">
                    {p.title}
                  </h3>
                  {isActive && (
                    <div className="mt-3">
                      <p className="font-body text-sm text-paper/80 mb-2">{p.copy}</p>
                      <p className="font-mono text-[11px] text-brass-light">{p.detail}</p>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
