"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: front-end only for now — no backend/CRM wired up yet.
    // Hook this up to an API route / form service before going live.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-16 items-start">
        {/* Left: direct contact */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-brass" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brass-light">
              08 — Enquire
            </span>
          </div>
          <h2 className="font-display font-bold text-paper text-[9vw] sm:text-4xl md:text-[42px] leading-[1.08] tracking-tight mb-8">
            Let&rsquo;s talk
            <br />
            high street.
          </h2>

          <div className="space-y-5 font-mono text-sm text-paper/75">
            <div>
              <p className="text-brass-light text-[10px] tracking-[0.2em] uppercase mb-1">
                Call
              </p>
              <a href="tel:+911206904400" className="hover:text-paper transition-colors">
                +91 120 000 0000
              </a>
            </div>
            <div>
              <p className="text-brass-light text-[10px] tracking-[0.2em] uppercase mb-1">
                Email
              </p>
              <a
                href="mailto:sales@avsinfra.com"
                className="hover:text-paper transition-colors"
              >
                sales@avsinfra.com
              </a>
            </div>
            <div>
              <p className="text-brass-light text-[10px] tracking-[0.2em] uppercase mb-1">
                Site Address
              </p>
              <p className="leading-relaxed max-w-xs">
                Khasara No. 490, 491, 494–497, Noor Nagar, NH-58 Main Road, Raj
                Nagar Extension, Ghaziabad – 201017
              </p>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="bg-paper p-7 md:p-10">
          {submitted ? (
            <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center py-10">
              <span className="h-12 w-12 rounded-full border-2 border-brass flex items-center justify-center mb-5 text-brass text-xl">
                ✓
              </span>
              <p className="font-display font-semibold text-ink text-xl mb-2">
                Thanks — we&rsquo;ll call you back.
              </p>
              <p className="font-body text-sm text-ink-2/70">
                Our team typically responds within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2/70 mb-2 block">
                    Full Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full bg-transparent border-b border-line focus:border-brass outline-none py-2 font-body text-ink placeholder:text-ink-2/30 transition-colors"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2/70 mb-2 block">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border-b border-line focus:border-brass outline-none py-2 font-body text-ink placeholder:text-ink-2/30 transition-colors"
                    placeholder="+91"
                  />
                </label>
              </div>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2/70 mb-2 block">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-transparent border-b border-line focus:border-brass outline-none py-2 font-body text-ink placeholder:text-ink-2/30 transition-colors"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2/70 mb-2 block">
                  Interested In
                </span>
                <select
                  name="interest"
                  defaultValue="Retail"
                  className="w-full bg-transparent border-b border-line focus:border-brass outline-none py-2 font-body text-ink transition-colors"
                >
                  <option>Retail & Showrooms</option>
                  <option>Hospitality</option>
                  <option>Business Suites</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-2/70 mb-2 block">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-line focus:border-brass outline-none py-2 font-body text-ink placeholder:text-ink-2/30 transition-colors resize-none"
                  placeholder="Tell us what you're looking for"
                />
              </label>

              <button
                type="submit"
                className="w-full mt-2 px-7 py-3.5 bg-brass text-ink font-body text-sm font-semibold tracking-wide uppercase hover:bg-brass-light transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
