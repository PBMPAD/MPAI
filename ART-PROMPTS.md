# Homepage artwork (for Higgsfield)

The homepage has four painted-art slots. Until a file exists at the path below, the page shows a soft navy/teal/mint stand-in, so nothing breaks. Drop the finished image in at exactly this path and name, and it appears.

Shared style for every image: a soft painted illustration, gouache and watercolour texture, calm and unhurried, gentle daylight. Palette limited to MPAI colours: navy #0F1B2D, teal #19A39A, mint #7FD8CF and cool paper white #F4F7FA, with soft greys between. No people, no text, no logos, no laptops or screens, no warm cream or orange.

| File | Size | Where it shows | Prompt |
|---|---|---|---|
| `images/art/hero-sky.jpg` | 2400 x 1400, landscape | Behind the job card in the hero | A wide open sky of soft mint and pale teal, a few slow drifting clouds in cool paper white, loose foliage of teal and navy leaves framing the far left and right edges, the centre kept calm and empty for a card to sit on. |
| `images/art/jobs-desk.jpg` | 1600 x 1200 | Behind the job examples | A tidy desk by a tall window in morning light, a cup of tea, a notebook and pen, a plant, the view outside of Essex fields in mint and teal. Centre kept quiet for a small card. Navy shadows, paper-white light. |
| `images/art/sky-wide.jpg` | 2400 x 1500, landscape | Behind the three "search box" cards | A high, pale mint sky with layered paper-white clouds, very light and airy, nothing in the lower two-thirds but soft cloud so white cards read clearly. |
| `images/art/landscape.jpg` | 2800 x 1300, landscape, fades to paper white at the top | Foot of the page, behind the closing call and footer | Rolling Essex countryside near Brentwood at dusk: soft hills, hedgerows, a country lane, a distant church spire and woodland. The top third fades into cool paper white #F4F7FA. The bottom quarter is deep navy #0F1B2D in shadow, so white footer text reads on it. Teal and mint fields in between. |

Keep each file under about 400 KB (JPG, quality around 75).

## Homepage hero photo (live since 24/11/26)

This is a separate image from the painted slots above. It is a photo rather than a painting, and it breaks the shared style on purpose: it shows a closed laptop and a phone screen.

| File | Size | Where it shows |
|---|---|---|
| `images/hero-desk.webp` | 2400 x 1355, WebP, about 100 KB | Homepage hero (`home.css`). On desktop it sits to the right behind the headline and fades into the navy. On tablets and phones it is a band across the top, with the text below. |

**The scene:** a tidy desk by a sash window at 4:30 pm. The laptop is closed, the papers are filed upright in an organiser, and there's a mug of tea and a plant. Essex fields are outside the window. A phone in a stand faces the camera and shows:

- 4:30 pm
- ✓ Inbox – 0
- ✓ Quotes – Sent
- ✓ Reports – Done

**How it was made**

1. **Generated** in ElevenLabs with FLUX 3 (`flux-3-image`), 16:9, 1360 x 768. Prompt:

   > Wide 16:9 landscape photograph for a website hero. A tidy wooden desk beside a tall sash window in an English home office, late afternoon light at 4:30 pm, soft low golden-hour sun coming from the right, kept cool in colour. Everything on the desk sits in the right half of the frame. On the desk: a closed silver laptop, lid shut. Next to it a neat desk file organiser holding papers and folders filed upright and tidy. A white mug of tea. A small green potted plant. In front, a smartphone standing upright in a small desk stand, screen facing the camera, sharp and in focus and clearly readable. The phone screen is a calm, minimal dark navy interface with soft mint green accents. Top corner of the phone screen shows the time "4:30 pm". Below, two simple rows each with a mint green tick: first row reads "Inbox: 0 emails waiting", second row reads "All admin tasks done for today". Plenty of space on the phone screen, no other text, no app icons, no logos. Through the window, soft-focus Essex countryside: green fields and hedgerows under a pale sky. The left half of the frame is a plain, empty, softly shadowed wall in deep navy blue tones with nothing in it. Colour grade: cool navy shadows, teal and mint hints, clean white highlights. Shallow depth of field, calm, quiet, editorial photography. No people, no hands, no other text anywhere, no writing on the wall.

2. **Sharpened** 2x with Topaz Image Upscale (Standard V2), giving 2720 x 1536.
3. **Fixed by hand** after generation:
   - The Apple logo on the laptop lid was painted out.
   - The phone screen was redrawn in Inter Medium and angled to match the phone. That replaced the AI's wording with the three lines above.
4. **Saved** as WebP at 2400 wide, quality 80.

**Lessons for next time**

- Don't ask for "space for headline text" in a prompt. The model writes made-up words into that space. Describe a plain empty wall instead.
- AI-drawn text on screens is often misspelt. Expect to redraw any wording yourself, so it's exact and easy to change later.
- Check every image for brand logos, especially on laptops and phones.
- The upscaled original is on the ElevenLabs flow "SxZqTqAUOfvg5SYfvieP" (generation `i3wUppqJCHoBY5DSFtY7`). Start from that if the phone wording needs changing again.
