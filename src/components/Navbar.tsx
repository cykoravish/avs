"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "High Street", href: "#project" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Wordmark({ light }: { light: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <span
        className={`font-display font-extrabold text-2xl md:text-[28px] tracking-tight transition-colors ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        AVS
      </span>
      <span
        className={`h-6 w-px transition-colors ${
          light ? "bg-paper/40" : "bg-ink/25"
        }`}
      />
      <span
        className={`font-mono text-[10px] tracking-[0.25em] uppercase leading-tight transition-colors ${
          light ? "text-paper/80" : "text-ink-2"
        }`}
      >
        Infra
        <br />
        High&nbsp;Street
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer automatically if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // While the drawer is open we always want light (white) text/icons, since the
  // drawer sits on a solid dark panel regardless of scroll position.
  const light = open ? true : !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          open
            ? "bg-ink border-b border-paper/10"
            : scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(16,32,59,0.04)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-20 flex items-center justify-between">
          <Wordmark light={light} />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative font-body text-[13px] tracking-wide uppercase transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-brass after:transition-all hover:after:w-full ${
                    light ? "text-paper/90 hover:text-paper" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center px-5 py-2.5 font-body text-[13px] font-medium tracking-wide uppercase transition-colors ${
                light
                  ? "bg-brass text-ink hover:bg-brass-light"
                  : "bg-ink text-paper hover:bg-ink-2"
              }`}
            >
              Enquire Now
            </a>

            {/* Mobile toggle */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-[60] w-11 h-11 -mr-1 flex items-center justify-center group"
            >
              <span
                className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 group-active:scale-90 transition-transform duration-200 ease-out ${
                  light ? "bg-paper/10" : "bg-ink/5"
                }`}
              />
              <span className="relative w-6 h-5 flex flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-px w-6 transition-all duration-300 ease-out ${
                    open ? "translate-y-[3px] rotate-45" : ""
                  } ${light ? "bg-paper" : "bg-ink"}`}
                />
                <span
                  className={`block h-px w-6 transition-all duration-300 ease-out ${
                    open ? "-translate-y-[3px] -rotate-45" : ""
                  } ${light ? "bg-paper" : "bg-ink"}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer — rendered as a sibling of <header>, NOT nested inside it.
          (Nesting it inside the header broke fixed positioning once the header
          gained backdrop-blur on scroll: backdrop-filter creates a new containing
          block for fixed descendants, which clipped the drawer to the header's
          own height and let page content show through underneath.)
          z-40, below the header's z-50, so the close button always stays on
          top and clickable instead of being painted over by the drawer. */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-10 justify-between">
          <ul className="flex flex-col gap-5">
            {LINKS.map((l, i) => (
              <li
                key={l.href}
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group/link inline-flex items-center gap-3 font-display text-3xl font-semibold text-paper transition-colors duration-200 hover:text-brass-light"
                >
                  <span
                    className="text-brass-light opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                    aria-hidden
                  >
                    →
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`w-full text-center px-6 py-4 bg-brass text-ink font-body text-sm font-medium tracking-wide uppercase transition-all duration-500 ease-out hover:bg-brass-light active:scale-[0.98] ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: open ? "480ms" : "0ms" }}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
}