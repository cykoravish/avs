# Section skill: Amenities

## Job
Show the lifestyle layer quickly — this is a scan-able section, not a read-every-word
one. Visitor should get the full amenity picture in a glance while enjoying a bit of
tactile motion.

## Structure — asymmetric bento grid, `--paper-2` band
Not a uniform 4-icon-card row. Mixed-size tiles on a grid: two large photo tiles
(Pool & Restobar, Banquet & Party Halls) and two supporting photo tiles (Security,
EV Charging), plus one text-only tile listing the smaller facts (8 elevators, wide
corridors, ample parking, fire-fighting & alarm) as a mono list — keeps us from
needing a photo for every single bullet in the brochure.

Grid (desktop): 
```
[ POOL  (large, 2x2) ] [ BANQUET (large, 2x2) ] [ FACT LIST (1x2, text tile) ]
[ SECURITY (1x1) ]     [ EV CHARGE (1x1) ]
```
Mobile: stack, large tiles first, fact list last.

## Motion — tilt + reveal
Each photo tile: on hover (desktop) subtle 3D tilt following cursor (max ~6deg,
translateZ feel via perspective), image scales 1→1.06, a caption strip slides up
from the bottom edge. On scroll-in, tiles fade/rise with a small stagger by grid
position (not left-to-right only — feels more alive on a bento layout).
Fact-list tile: rows fade in top-to-bottom with a thin brass tick per row (small
echo of "The Measure" rail, used sparingly here).

## Copy
Captions stay to 3-4 words + one supporting line, mono eyebrow per tile
("POOL & RESTOBAR", "BANQUET & CELEBRATIONS", "24×7 SECURITY", "EV READY").

## What to avoid
No uniform 6-icon grid with identical card chrome — the mixed sizing IS the design
decision here, keep it deliberately asymmetric.
