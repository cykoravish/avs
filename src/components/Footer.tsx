const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "High Street", href: "#project" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-xl text-paper">AVS</span>
          <span className="h-5 w-px bg-paper/25" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60 leading-tight">
            Infra
            <br />
            High&nbsp;Street
          </span>
        </div>

        <ul className="flex flex-wrap gap-x-7 gap-y-2">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-[13px] text-paper/60 hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {["Instagram", "LinkedIn", "Facebook"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono text-[11px] tracking-wide uppercase text-paper/50 hover:text-brass-light transition-colors"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 md:gap-8 justify-between">
          <p className="font-mono text-[11px] text-paper/40 leading-relaxed max-w-2xl">
            Disclaimer: Images used are for artistic impression to convey a
            conceptual sense of possible lifestyle and may be changed at the
            developer&rsquo;s discretion; they are not a legal commitment on
            design or specifications.
          </p>
          <p className="font-mono text-[11px] text-paper/40 whitespace-nowrap">
            © {new Date().getFullYear()} Nakshatr Infratech LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
