# Section skill: Hero

## Job
One thesis statement: AVS High Street is a serious, on-schedule, address-driven
commercial development. First 3 seconds must read "premium + real place", not
"generic real estate template".

## Content decisions
- Background: dusk render of the actual AVS High Street building (teal-lit facade,
  street level, real signage) — cropped from client brochure. Slow 20s Ken-Burns
  zoom (scale 1 → 1.08), respects reduced-motion.
- Overlay: layered gradient — ink navy at bottom (for text legibility + brand tie),
  transparent at top, plus a very subtle warm-brass wash at 4% opacity over the
  whole image so it doesn't sit as a raw stock photo.
- Eyebrow (mono, letter-spaced): "AVS INFRA · RAJ NAGAR EXTENSION, GHAZIABAD"
- Headline (Bricolage, huge, mask/clip-path reveal on load): "AVS HIGH STREET"
- Subhead: "Timeless Wonder — a GDA-approved high street of retail, hospitality
  and business suites on NH-58."
- CTAs: "Explore The Project" (filled brass, primary) · "Download Brochure"
  (outline, ghost, on dark)
- Bottom-pinned fact strip (mono labels, hairline-separated, NOT icon badges):
  GDA APPROVED   ·   FREEHOLD LAND   ·   NH-58 FRONTAGE   ·   8 ELEVATORS
- "The Measure" rail (see tokens) begins here: tick "01 — ARRIVAL" at hero's
  bottom-left, establishing the device before the rest of the page uses it.

## Motion sequence (load, ~1.2s total, orchestrated not scattered)
1. Background fades in (0–400ms)
2. Eyebrow fades/slides up (200–500ms)
3. Headline reveals via clip-path inset wipe left→right (350–850ms)
4. Subhead + CTAs fade/slide up (700–1000ms)
5. Fact strip + scroll indicator fade in last (950–1200ms)

## What to avoid
No stock-photo skyline collage, no auto-playing carousel of 5 images, no icon
badges in the fact strip (mono text only — keeps it calm and typographic).
