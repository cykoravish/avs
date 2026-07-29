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
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden relative z-[60] w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  open ? "translate-y-[3px] rotate-45" : ""
                } ${light ? "bg-paper" : "bg-ink"}`}
              />
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                } ${light ? "bg-paper" : "bg-ink"}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer — rendered as a sibling of <header>, NOT nested inside it.
          (Nesting it inside the header broke fixed positioning once the header
          gained backdrop-blur on scroll: backdrop-filter creates a new containing
          block for fixed descendants, which clipped the drawer to the header's
          own height and let page content show through underneath.) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-ink transition-transform duration-400 ease-out ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-10 justify-between">
          <ul className="flex flex-col gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="w-full text-center px-6 py-4 bg-brass text-ink font-body text-sm font-medium tracking-wide uppercase"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </>
  );
}
