# Section skill: Track Record

## Job
This is the proof section — closes the credibility loop opened in About's "18mo /
24mo" ledger by showing the actual buildings. Reused device on purpose: a
horizontal filmstrip the visitor drags/scrolls through, because a track record is
inherently a sequence in time (2017 → now), so a filmstrip/timeline layout is
earned here, unlike a generic use of numbered steps elsewhere.

## Structure — `--ink` band, horizontal scroll-snap filmstrip
Four cards in a row (City Palace, City Square, City Centre, AVS High Street),
horizontally scrollable with scroll-snap, each card: photo, status pill (Delivered
/ Delivered / Ongoing / Launching), project name, one delivery-time stat in mono.
A thin horizontal brass line runs behind the cards like a physical timeline track,
with a small tick + year under each card (2019, 2021, 2024, 2026 — approximate,
derived from founding year + delivery months where stated).
Scroll affordance: fade-edge gradients left/right, plus a drag-to-scroll cursor on
desktop (not just relying on a visible scrollbar).

## Motion
Cards scale down slightly (0.96) when not centered in the viewport horizontally
(simple CSS scroll-driven feel via IntersectionObserver per card), full scale when
centered — gives a subtle "focus" effect while scrubbing through history.

## What to avoid
No repeat of the vertical stat ledger from About — horizontal filmstrip is the
deliberate variation so the page doesn't feel like the same component reused.
