"use client";

import { useEffect, useState } from "react";

const IMAGES = [
  { src: "/images/hero-bg.jpg", alt: "AVS High Street, dusk exterior" },
  {
    src: "https://images.unsplash.com/photo-1758448500717-2e4bcd79108b?auto=format&fit=crop&w=1200&q=80",
    alt: "Retail arcade interior",
  },
  {
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel guest room",
  },
  {
    src: "https://images.unsplash.com/photo-1746475611952-1b12c680f3bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Rooftop pool & restobar",
  },
  {
    src: "https://images.unsplash.com/photo-1746739802530-b490abdfc8e6?auto=format&fit=crop&w=1200&q=80",
    alt: "Banquet & party hall",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="relative bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brass" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-2/70">
            07 — Gallery
          </span>
        </div>
        <h2 className="font-display font-bold text-ink text-[9vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight max-w-2xl mb-14 md:mb-16">
          A closer look.
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setOpen(i)}
              className="group relative shrink-0 w-[65vw] sm:w-[320px] h-[420px] overflow-hidden border border-line"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-brass transition-all duration-300" />
              <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.15em] text-paper bg-ink/60 px-2 py-1">
                {String(i + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-6 md:p-16 animate-[fadeIn_200ms_ease-out]"
          onClick={() => setOpen(null)}
        >
          <img
            src={IMAGES[open].src}
            alt={IMAGES[open].alt}
            className="max-h-full max-w-full object-contain"
          />
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-6 right-6 md:top-10 md:right-10 text-paper font-mono text-sm tracking-widest uppercase border border-paper/40 px-3 py-2 hover:bg-paper/10"
          >
            Close ✕
          </button>
        </div>
      )}
    </section>
  );
}
