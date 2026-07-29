# Section skill: Navbar

## Job
Get out of the way over the hero, then become a normal utility bar once scrolled.
Only 6 destinations exist on this site — do not over-build the nav.

## Structure
- Left: wordmark lockup, built in type (not the flattened brochure logo image) —
  "AVS" in Bricolage Grotesque bold + a vertical hairline + "INFRA" in Plex Mono
  small caps underneath-right. Renders crisp at any size, works on transparent bg.
- Center-right: Home · About · High Street · Amenities · Gallery · Contact
- Right: "Enquire Now" button — filled brass on transparent state, filled ink on
  solid state. This is the one accent-colored control in the bar.

## States
- Top of hero: transparent bg, white/paper text, no shadow.
- After ~60px scroll: bg turns `--paper` at 90% opacity + backdrop-blur, text turns
  `--ink`, hairline bottom border appears. Transition 300ms ease.
- Active link: 2px brass underline offset, not a filled pill (keeps it editorial).

## Mobile
Hamburger → full-height drawer sliding from right, `--ink` background, links in
large Bricolage type, Enquire Now button pinned at drawer bottom.

## What to avoid
No mega-menu, no dropdown chevrons (flat 6-link list only), no logo image asset.
