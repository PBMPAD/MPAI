# MPAI website: design brief (for Claude Code)

Open this folder in Claude Code and say: "Read BRIEF.md and continue from Next changes."

## What MPAI is
Bespoke Claude set-ups for small businesses. Simple to use, no AI experience needed, gets work done. Founder: Matthew Price, a chartered surveyor who automated his own working day first. The site never names his employer.

## Who it's for
Any small business owner who isn't technical and is busy. Reading level: plain English, no jargon, no hype.

## The one action
Send the "five jobs" form (contact.html). The form emails Matthew only. No call booking.

## Brand
- Name: MPAI, as a brand (never spelt out).
- Colours (from the logo): navy #0F1B2D, teal #19A39A, mint #7FD8CF, paper #F4F7FA, ink #16202C. Dark mode swaps paper and navy.
- Type: Space Grotesk (headings, matches the logo), Atkinson Hyperlegible (body, chosen for readability).
- Voice: plain and friendly, first person ("I set up..."), short sentences, sentence case.
- The memorable element: the "five jobs" list on the home page, struck through one by one on load. Keep everything else quiet.

## Pages
Home, How it works, About, Contact, plus Thanks (after the form).

## Rules
- Prices on the site: set-up is from £1,000 for a sole trader and covers any five of seven jobs (the client picks five); up to two extra jobs of their own are quoted once Matthew has seen them, never included in the £1,000; Keep it running £100 a month (maintenance and support for the existing set-up only; 12 months for the price of 10); Keep it growing is bespoke, price on request, because each build varies in complexity and time. Founding terms stay on the About page. A monthly skill is one small job built in up to an hour; anything bigger is a quoted bespoke build.
- No testimonials, client logos, statistics or time-saving figures until they are real.
- Sending: simple, low-risk emails and chasers (invites, invoice chasers) go out automatically; higher-risk ones Claude drafts and the client approves first. Never promise that everything is checked first.
- Clients need their own paid Claude plan: say so plainly.
- Accessible: keyboard focus visible, labels on every field, works at phone width, respects reduced motion.

## Search engines
The site is currently hidden from search engines (a noindex meta tag on every page and a `_headers` file). To launch publicly: remove the robots meta tag from each page and delete `_headers`, then redeploy.

## Hosting
Static files on Netlify (free). The form uses Netlify Forms (data-netlify="true"), with email notifications to matthew@mpai.site set in the Netlify dashboard. Domain mpai.site pointed at Netlify once registered.

## Placeholders to fill
- [Your photo] on Home and About.
- One personal line on About.
- The email address in the footer once the domain is live.

## Next changes (phase 2)
1. Add the 60-second MPAI explainer video to Home, under the hero, once made (exported MP4, with a poster image and captions).
2. Lead teaser: when a form arrives, Claude matches the five jobs to MPAI's solution patterns and drafts a reply to the sender with a short personalised teaser video link. Matthew approves before it sends. See README for the approach.


## Positioning (03/11/26)
- Local: small businesses in Brentwood and surrounding areas. Service-area business, no address on the site.
- Message: more time for the work that matters. Seven jobs that are the pain points of most small businesses; the client picks any five, from £1,000 for a sole trader, extras quoted.

## Update (03/11/26, later)
- Slogan and Home headline: "More time for the work that matters" (no full stop). It replaces "Do the job, not the admin", which could worry administrators.
- The seven jobs: Your day, briefed; Claude knows your business; Paperwork ready to go; Invoices sent and chased; Meetings and calls turned into actions; Presentations built for each client; Staff expenses, calculated. The client picks any five; the second brain is always set up first.
- Presentations built for each client and Staff expenses, calculated are not built yet. Build and test them, or label them "coming soon", before launch.
- The contact form keeps the name "five-jobs" so Netlify notifications keep working; its checkbox names changed (want-day, want-second-brain, want-paperwork, want-invoices, want-meetings, want-presentations, want-expenses).
- The "Keep it growing" and care plan wording still shows two plans; the business plan has three (£100, £250, £500).
- Site is now indexable by Google (noindex removed), except the thanks page.

## Update (03/11/26, evening)
- Mobile: tabs sit in a burger menu (nav.js, no-JS fallback shows a plain list). Home was cut from about 9,100px to about 4,400px on a phone: the seven job descriptions are tap-to-open on phones, and the repeated "how it works", "what I set up underneath" and care plan blocks were removed from Home (they live on How it works). Page spacing tightened on phones.
- Video: "MPAI in 60 seconds" redrawn for the seven jobs, new headline and "from £1,000"; same music bed; drawn in Inter because Space Grotesk was not available when it was made. Poster refreshed. The video still says "A 30-minute call" to match the site.
- Home CTA heading is now "Ready to get your time back?".
