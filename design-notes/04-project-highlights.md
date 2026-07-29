# Section skill: Project Highlights (Retail / Hospitality / Business Suites)

## Job
This is the "what can I actually do here" section — the three real offerings inside
AVS High Street. Needs to be the most attention-grabbing, tactile moment on the page
after the hero, since this is where a retail brand / investor / business owner
self-identifies which pillar applies to them.

## Signature interaction — expanding street panels
Three tall panels sit side by side like storefronts on a street (true to "High
Street" branding). At rest they're equal width, image visible, title only. On
hover/focus (tap on mobile, cycles), the active panel flex-grows to ~50% width,
its image brightens, and full copy + a "View Details" link slide in; the other two
panels compress and dim slightly. This literally recreates the feeling of walking
down a high street and a storefront catching your eye — the interaction *is* the
message, not decoration on top of it.

On mobile: panels stack vertically, each collapsed to a title bar; tapping expands
it accordion-style (only one open at a time), others collapse.

## Content (three panels, in this order — retail is the literal high street, so it
leads)
1. **Retail & Showrooms** — "Storefronts built for footfall." Prominent visibility
   modules, studio units, hypermarket-ready floor plates.
2. **Hospitality** — "Rooms with a reason to stay." Hotel, guest rooms & service
   apartments for business travellers.
3. **Business Suites** — "Offices that mean business." Office spaces & business
   suites with dedicated access.

Each panel: eyebrow mono tag ("01 RETAIL" / "02 STAY" / "03 WORK" — here a sequence
is real, since it's literally three ordered storefronts), display title, one-line
copy, appears-on-expand detail line.

## Visual
Background photo per panel (cropped brochure renders) with a bottom-to-top ink
gradient always present for title legibility; brightens on expand. Divider between
panels is a hairline brass rule, echoing the storefront-facade rhythm.

## Motion
Width transitions on flex-basis, 500ms cubic-bezier(0.22,1,0.36,1) — snappy but not
bouncy. Image scale 1 → 1.05 on the active panel only. Text for the expanded panel
fades/slides in with ~150ms extra delay so it doesn't smear during the width
transition.

## What to avoid
No generic 3-icon-card grid, no identical treatment for all three at all times —
the whole point is asymmetry driven by attention.
