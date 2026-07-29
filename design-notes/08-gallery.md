# Section skill: Gallery

## Job
Quick visual payoff, reusing existing assets already extracted from the brochure
(no new copy-heavy explanation needed at this point in the page — visitor has read
enough, let them look).

## Structure — uneven masonry strip, `--paper-2` band
5 images from renders already in /public/images (hero building exterior variants,
panel photos) laid out in a single-row, uneven-width filmstrip similar rhythm to
Track Record but purely visual, no captions competing for attention except a tiny
mono index (01/05 etc. — legitimate here, it's literally an index of frames).
Click/tap opens a simple lightbox (image + close), built with local state, no
external lib.

## Motion
Images scale 1 → 1.04 on hover with a light-brass frame appearing. Lightbox:
fade+scale in overlay, Escape/backdrop click to close.

## What to avoid
No 3rd-party carousel library — keep it dependency-free and light.
