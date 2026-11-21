# Great Danes YFC concept: design system (v4)

Written 21/11/26 from the built concept (`great-danes-concept-v4.html`), so it describes what was built rather than a plan.

## World

The kit. White shirt ground, black panel bands (header rule, opening band, page heads, footer), crest red for squad-number numerals, the main action and links. Light only: parents read it outdoors on a phone.

## Colour tokens

| Token | Value | Use |
|---|---|---|
| `--shirt` | #ffffff | Page ground |
| `--mist` | #f1f2f4 | Welfare band, Eva replies |
| `--ink` | #111214 | Text, rules, secondary buttons |
| `--soft` | #4a4d55 | Secondary text (8:1 on white) |
| `--rule` | #d5d8dd | Hairlines |
| `--red` | #d21f2b | Numerals, primary buttons (5.3:1 with white) |
| `--red-ink` | #b0141f | Links and red text |
| `--panel` | #111214 | Black bands |
| `--on-panel-soft` | #c9ccd2 | Secondary text on black |

Red on black is about 4:1, so it is only used at display size.

## Type

Archivo (Google Fonts, variable width and weight).
- Squad numbers: width 125%, weight 900, red, up to 176px.
- Headings: width 112–118%, weight 800–900, tracking -0.02em to -0.03em.
- Text: width 100%, 17px, line height 1.55, measure under 70ch.

## Components

- **Buttons:** square, 2px border. Primary is red; secondary is an ink outline (white outline on black).
- **Facts lists:** label and value rows divided by hairlines under a 2px ink rule. These stack on phones.
- **Tables:** stack into label and value rows below 720px.
- **Help answers:** expand with a red chevron. Each category names the volunteer who looks after it.
- **Eva box:** a square search field with an ink Ask button. Replies sit in a mist box. Welfare replies get a red border and always hand over to the Welfare Officer.
- **Empty states:** a dashed box that says why there's nothing there, with two next steps.
- **No:** cards as page structure, shadows, labels above headings, coloured side bars, or emoji.

## Motion

One authored moment: the squad number slides up when a school year is picked (0.55s, ease-out). It is off under reduced motion.

## Rasters

- `img/team-celebration.jpg`: from the club's own website, supplied by Matthew Price on 21/11/26.
- `img/crest.jpg` and `img/crest-160.jpg`: the club crest, from greatdanesyfc.uk.

Both are kept out of the public repo (`img/` is gitignored) and published only with the private artifact.
