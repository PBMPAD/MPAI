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

## Update (08/11/26): hero video
- The hero panel behind the desk card now has a looping video: mint sky, drifting clouds, Essex hills with a church spire and cloud shadows. Brand colours only, no people or text. Inspired by the Bankyz, Voxai and Apogee heroes.
- Files: images/video/hero-sky.mp4 (20-second seamless loop, 960x540, about 260 KB) and images/video/hero-sky-poster.jpg (about 20 KB, shows straight away).
- Loads after the rest of the page, only on screens 700px and wider, never with reduced motion or data saver, and pauses when scrolled out of view.
- To change it, edit tools/render_hero.py and re-run it (instructions at the top of the file).

## Update (15/11/26): Home and The five jobs rebuilt
- Home is now "your trade first". A navy first screen asks "What do you run?", with the same business types as the contact page. One tap fills a list of five jobs that is already full, with name and email directly below. Sending a five-job list takes two taps, down from seven.
- Under the list: what happens after you send it (five steps), three boxes (what it costs, who presses send, what you need), Matthew's own results, then the close.
- The five jobs page (jobs.html) is now one Monday: a finished 07:30 morning brief on the sky video, then a timeline with each job shown as what it produces and who presses send. The tap-to-open list has gone.
- Files: home.css and home-ticket.js (Home), jobs.css and jobs-day.js (The five jobs). home.js has gone. site.css still supplies the header, footer, buttons and type for every page.
- The job lists and the rules for typed-in jobs now live in one file, solutions.js, shared by Home and the contact page (mybusiness.js). Change a job there and both pages change.
- Business types: "Accountant or bookkeeper" and "Consultant or adviser" were removed from the lists (MPAI does not sell to professional services). Estate or letting agents and dentists or clinics stay, on both Home and the contact page.
- The header button on Home reads "Pick your five jobs"; other pages keep "Tell me about your business".
- The form on Home sends to the same form service as before, with the same fields, marked "Home page". Without JavaScript the list still shows, with the email address in place of the form.

## Update (15/11/26, later): what software do you use?
- Home and the contact page now ask, optionally, what software the visitor runs their business on. The question and the list follow the business type, and every list ends with "Something else" and "Nothing, just email and spreadsheets".
- Picking one shows one plain line about how I'd work with it. No prices, nothing about how a link is made.
- The answer arrives in the enquiry email as a "software" line with its level beside it.
- The lists and wording are in solutions.js (SYSTEMS, SOFT_ASK, SOFT_LINE). The research, the four levels and the suggested prices are in CRM.md. The prices in CRM.md are not on the site.

## Update (15/11/26, evening): project tools and the linking price
- The software question now also offers to-do and project tools (Asana, monday.com, Trello, ClickUp, Notion, Microsoft Planner), and a second answer can be added with "Use something else as well?".
- New price on the pricing page, under set-up: linking software the client already uses is from £500, priced once Matthew has seen how they use it, and keeping a link working is from £100 a month on top of a care plan. The tool on Home and the contact page still never shows a price.
- The question builds itself from solutions.js (softPicker) and is styled by the .sw rules in site.css.

## Update (15/11/26, late): a sixth and seventh job, and linking priced per person
- Five jobs still come with the set-up. On Home and the contact page a visitor can now add a sixth and a seventh. Once five are chosen the list says each extra one is £200, for one person, and shows the running extra (£200 or £400 on top of the £1,000). This is the only price the list shows.
- The enquiry email has a new "extra jobs" line. The figures and wording are in solutions.js (BASE_JOBS, MAX_JOBS, EXTRA_PRICE, extraLine).
- The pricing page has a new "A sixth or seventh job" line, and linking software is now "from £500 per person".
- The contact page has its send bar back on phones (count and send button under the list), so a phone visitor can send fewer or more than five.

## Update (15/11/26, night): the £200 is for a simple job only
- The extra £200 applies only to a sixth or seventh job marked "Can do" from the ready-made list. A "Let's talk" job, or a job the visitor types in, is always priced separately, and the list and the pricing page both say so.
- The enquiry email's "extra jobs" line now splits the two: how many extra Can do jobs at £200, and how many jobs to price separately.

## Update (23/11/26): four-week trial, five jobs maximum, website prices
- Four-week trial: any one job for £250, for one person, paid before it starts, credited against the £1,000 if the client goes ahead with all five within 30 days. No limit on trial places. Drafts only, nothing sent without the client's OK, no automatic renewal.
- Home: the hero line, the "What it costs" box and the close now mention the trial. The send form asks "How would you like to start?" (all five, or try one job first); picking the trial shows a drop-down of the jobs on the list. The enquiry email gets a "start" line, and the subject starts "Trial request:".
- Pricing: a new "Try it first" card above the set-up, and a "Websites, as an extra" section: one page from £250, four to six pages from £1,000, eight pages or more on request.
- Extra jobs removed: five is now the most a list holds, on Home and the contact page. Jobs a visitor types in are still quoted separately. Figures are in solutions.js (BASE_JOBS, MAX_JOBS, PILOT_PRICE).
- Websites stay a quoted extra (principle 5): no Websites menu item.
- Public pages no longer say Matthew is a surveyor (Home, About, and the "What is an LLM?" post).

## Update (23/11/26, later): before and after on the pricing page
- Under "Websites, as an extra": two before-and-after comparisons with a drag slider, an estate agent and a youth football club. Both are labelled as concepts, with names, places and contact details changed (Larkfield Homes, Sam, Riverside Youth FC, Townsend, 01234 567 890).
- Images are in images/work (agent-* and club-*), desktop and phone versions. The club "before" is a redrawn mock of the old site, not a screenshot.
- Before going live: get both clients' OK, including the agent's property and kitchen photos.
- (23/11/26, night) The club "before" is now a phone redraw of the real home page (crest, black menu bar, the same stock grass photo, the club name card), with names changed. The club comparison shows phone views at every screen size. A three-step "how I work" block sits above the comparisons: your business first, your message in your words, nothing that looks churned out by AI.

## Update (24/11/26): Websites page
- New page websites.html, in the menu after Pricing (Your business, How it works, Pricing, Websites, About, Blog) and in every footer.
- Order: headline "A website that brings in work", before and after (moved from Pricing), prices, a "send me your website, I'll tell you three things I'd fix" form (Formspree, subject "Website check:", source "Websites page"), then a close pointing to the four-week trial.
- Pricing keeps the three website prices with a link to the examples.
- Between 821px and 1100px wide the header button shows its short label so it stays on one line.
