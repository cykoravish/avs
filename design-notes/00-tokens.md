# AVS High Street — Design Tokens

## Subject
AVS High Street: a GDA-approved mixed-use high street (retail arcade + hotel/serviced
apartments + business suites) on NH-58, Raj Nagar Extension, Ghaziabad, by AVS Infra
(est. 2017). Audience: retail brands/investors scouting shop space, business owners
looking for office suites, HNI investors. Tone: confident, urban, architectural —
a live commercial boulevard, not a soft residential lifestyle brand.

Brand thread already established by the client's brochure: "Timeless Wonder" / time as
a motif (hourglass imagery, clock imagery). We keep the *idea* of time — measured
progress, punctuality, "on schedule" — but drop the literal hourglass/clock clip-art
and translate it into one structural device (see Signature, below).

## Color
- `--paper`   #FAF8F3 — warm off-white base (not the AI-cliché #F4F1EA cream)
- `--ink`     #10203B — deep navy (from AVS logo), primary text / dark sections
- `--ink-2`   #2B3B58 — secondary navy, muted text on dark
- `--brass`   #B4863B — muted brass/bronze accent, CTAs & highlights (not bright gold)
- `--rust`    #B23A2A — signal red from the logo mark, used sparingly (badges, one CTA)
- `--line`    #E4DDCE — hairline dividers on paper background
- `--paper-2` #F1ECE1 — slightly deeper paper tone for section banding

Rejected: terracotta/#D97757 + cream + serif combo (flagged AI default). Rejected:
near-black + acid accent (wrong tone for an address-driven commercial brand).

## Type
- Display: **Bricolage Grotesque** — geometric grotesk with quirky ink-trap character,
  used at large sizes for headlines. Architectural, urban, not soft/lifestyle-serif.
- Body: **Inter** — neutral workhorse for paragraphs, nav, buttons.
- Utility/mono: **IBM Plex Mono** — eyebrows, stats, addresses, timestamps. Ties the
  "time/measured" brand idea to type instead of icon clip-art.

Scale: display uses tight tracking at large sizes (clamp-based fluid type), body stays
16–18px/1.6 line-height. Utility mono is always uppercase, letter-spaced, small.

## Layout concept
Asymmetric, editorial grid — not centered-card-grid default. Generous negative space on
`--paper`. Sections alternate `--paper` / `--paper-2` / `--ink` banding to create rhythm
instead of uniform white cards.

## Signature element — "The Measure"
A slim vertical rule that runs down the left edge of the content column from the hero
through the page, with small tick marks at each section start and a short mono label
(e.g. "01 — ARRIVAL", "LOCATION", "TRACK RECORD") next to the tick — like survey/site-plan
annotation, not a numbered-steps template. It literally reads as a measuring line down
a site elevation drawing, which is true to an architectural/construction brand and
replaces the brochure's literal hourglass with something structural and premium.
On mobile the rule collapses to a small top eyebrow per section instead of a full rail.

## Motion
One orchestrated hero load sequence (headline mask-reveal + slow background zoom), then
restrained scroll-reveals (fade/slide-up, 400ms, no bounce) and hover micro-interactions
only. Respect `prefers-reduced-motion`.
