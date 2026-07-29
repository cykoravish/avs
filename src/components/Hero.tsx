"use client";

import { useEffect, useState } from "react";

const FACTS = ["GDA Approved", "Freehold Land", "NH-58 Frontage", "8 High-Speed Elevators"];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Background image with slow Ken Burns zoom */}
      <div
        className={`absolute inset-0 will-change-transform ${
          loaded ? "motion-safe:animate-hero-zoom" : ""
        }`}
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 800ms ease-out",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-brass mix-blend-overlay opacity-[0.06]" />

      {/* The Measure — rail tick starting point */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10">
        <span className="h-16 w-px bg-paper/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-28">
        <p
          className={`font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase text-brass-light mb-5 transition-all duration-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          AVS Infra &nbsp;·&nbsp; Raj Nagar Extension, Ghaziabad
        </p>

        <h1 className="font-display font-extrabold text-paper leading-[0.95] text-[13vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.2vw] tracking-tight">
          <span
            className={`block overflow-hidden`}
          >
            <span
              className={`block transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                loaded ? "translate-x-0" : "-translate-x-[105%]"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              AVS HIGH STREET
            </span>
          </span>
        </h1>

        <p
          className={`mt-6 max-w-xl font-body text-base md:text-lg text-paper/85 transition-all duration-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <em className="not-italic text-brass-light">Timeless Wonder</em> — a GDA-approved
          high street of retail, hospitality and business suites on NH-58.
        </p>

        <div
          className={`mt-9 flex flex-wrap items-center gap-4 transition-all duration-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="#project"
            className="inline-flex items-center px-7 py-3.5 bg-brass text-ink font-body text-sm font-semibold tracking-wide uppercase hover:bg-brass-light transition-colors"
          >
            Explore The Project
          </a>
          <a
            href="/AVS-High-Street-Brochure.pdf"
            className="inline-flex items-center px-7 py-3.5 border border-paper/40 text-paper font-body text-sm font-medium tracking-wide uppercase hover:bg-paper/10 hover:border-paper/70 transition-colors"
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* Fact strip */}
      <div
        className={`relative z-10 border-t border-paper/15 transition-all duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "950ms" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4 flex flex-wrap gap-x-8 gap-y-2">
          {FACTS.map((f, i) => (
            <span
              key={f}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper/75 flex items-center gap-8"
            >
              {i !== 0 && <span className="h-3 w-px bg-paper/20 -ml-8 mr-0 hidden sm:block" />}
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`hidden md:flex absolute right-8 bottom-28 flex-col items-center gap-2 z-10 transition-opacity duration-500 ${
          loaded ? "opacity-70" : "opacity-0"
        }`}
        style={{ transitionDelay: "1050ms" }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper rotate-90 origin-center translate-y-3">
          Scroll
        </span>
        <span className="h-10 w-px bg-paper/50 motion-safe:animate-scroll-line" />
      </div>
    </section>
  );
}
