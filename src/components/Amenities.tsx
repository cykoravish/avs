"use client";

import { useRef, useState, type MouseEvent } from "react";

function TiltTile({
  image,
  eyebrow,
  title,
  className = "",
}: {
  image: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 6 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setTilt({ x: 0, y: 0 });
      }}
      className={`relative overflow-hidden group [perspective:1000px] ${className}`}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
            hovering ? 1.02 : 1
          })`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out"
          style={{
            backgroundImage: `url(${image})`,
            transform: hovering ? "scale(1.06)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass-light mb-1.5">
          {eyebrow}
        </span>
        <h3 className="font-display font-semibold text-paper text-lg md:text-xl leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}

const FACTS = [
  "24×7 Manned Security & CCTV",
  "Fire Fighting & Alarm System",
  "8 High-Speed Elevators",
  "Wide Access Corridors",
  "Ample Parking Space",
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-paper-2 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-brass" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-2/70">
            04 — Amenities
          </span>
        </div>
        <h2 className="font-display font-bold text-ink text-[9vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight max-w-2xl mb-14 md:mb-16">
          Everything the day needs, on site.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[240px_240px] gap-3">
          <TiltTile
            image="https://images.unsplash.com/photo-1746475611952-1b12c680f3bc?auto=format&fit=crop&w=1200&q=80"
            eyebrow="Pool & Restobar"
            title="Swimming pool with poolside restobar"
            className="md:col-span-2 md:row-span-2 h-[280px] md:h-auto"
          />
          <TiltTile
            image="https://images.unsplash.com/photo-1746739802530-b490abdfc8e6?auto=format&fit=crop&w=1200&q=80"
            eyebrow="Banquet & Celebrations"
            title="Banquet halls & party halls"
            className="md:col-span-1 md:row-span-2 h-[280px] md:h-auto"
          />

          {/* Fact list tile */}
          <div className="md:col-span-1 md:row-span-2 bg-ink p-6 md:p-7 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brass-light mb-4 block">
              Built In
            </span>
            <ul className="space-y-3">
              {FACTS.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 font-body text-[13px] text-paper/80 leading-snug"
                >
                  <span className="mt-[7px] h-px w-3 bg-brass shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <TiltTile
            image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
            eyebrow="24×7 Security"
            title="CCTV monitored, always on watch"
            className="md:col-span-2 h-[200px] md:h-[240px]"
          />
          <TiltTile
            image="https://images.unsplash.com/photo-1755555707515-ac64ed155dfa?auto=format&fit=crop&w=1200&q=80"
            eyebrow="EV Ready"
            title="On-site electric vehicle charging"
            className="md:col-span-2 h-[200px] md:h-[240px]"
          />
        </div>
      </div>
    </section>
  );
}
