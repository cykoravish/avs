# Section skill: Location

## Job
Prove the address. This is the "why here" section for both investors (footfall,
connectivity) and businesses (access). Real brochure data (drive times, highways)
— present as a scan-able distance ledger next to the actual site-connectivity map.

## Structure — split, `--paper` band
- Left (45%): headline "On NH-58, on the map." + a connectivity ledger — a compact
  two-column list of place → time, in mono, grouped loosely (Essentials / Transit /
  City), each row revealing with a thin brass tick sliding in from the left on
  scroll (same family as About's ledger, but rows not big stat numbers — keeps
  variety while staying in the same visual language).
- Right (55%): the actual site-connectivity map (from brochure) in a paper-toned
  frame with a thin brass border, slight hover-zoom. A small pulsing brass dot
  marks the AVS High Street pin over the map image (CSS-positioned, approximate).

## Motion
Map: fade/scale-in on scroll entry (0.97 → 1). Pin: soft pulse ring animation,
continuous, subtle (opacity/scale loop, respects reduced-motion). Ledger rows
stagger in.

## What to avoid
No embedded live Google Map iframe for this pass (keeps it fast + on-brand with
the client's own annotated map graphic); no generic pin-icon list with 10 map-pin
emoji repeated identically.
