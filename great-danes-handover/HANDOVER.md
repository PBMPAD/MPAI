# Great Danes YFC website: handover

Prepared 19/11/26. Upload this file and `great-danes-concept.html` to a new Claude conversation, then paste the starter prompt at the bottom.

## The brief

1. Review greatdanesyfc.uk against the Impeccable design standard and list positives and negatives.
2. Produce one concept home page.
3. Recommend how to add "Eva", an AI assistant, or an FAQ page with AI search. The club is inundated with queries from new and existing members.
4. Use Brighton and Arsenal as examples of good professional club websites.

## Facts about the club (from the live site, November 2026)

- Great Danes Youth Football Club, est. 1971. Sawyers Hall Lane, Brentwood, Essex CM15 9BY. Great Danes YFC Ltd, company no. 10229637.
- The site is built on MyClubPro. Main menu (13 items): Home, Teams, What's On, News, Events, Gallery, Club Documents, Sponsors, Club Info, Videos, Shop, Contact, Login.
- Teams menu: Mixed Youth Teams, Girls Teams, Mens Team, Womens Team, Soccability Teams, New Intake, Wildcats.
- Girls' teams: U8 Lionesses (Matthew Price), U8 Tigresses (Rob Peters), U10 Girls (Tony Walsh), U12 Girls (Jack Bailey), U15 Girls (Paul Thompson).
- Other teams named on the Sponsors page: Under 7s, U8 Tigers (James Murray), U9 Lions (Ricky Lipman), U10 Jaguars (Faye Callaway), U12 Tigers (Jodi Allen), U15 Jaguars (Louis Nosworthy), U17 Leopards (Paul Thompson), Great Danes FC (Ryan Dewdney), Great Danes Womens FC.
- Sessions and vacancies:
  - **New intake, U5–U6:** Saturdays 09:00–10:00, £5 a session, pay as you go.
  - **Wildcats (girls, school Years 2–3):** Saturdays 08:45–10:00.
  - **U15 Girls:** recruiting.
  - **U16s:** need 2–3 players including a goalkeeper; train Thursdays, play Sundays in the Brentwood League.
- Contacts: info@greatdanesyfc.uk; Paul Thompson (Secretary); Andrew Mitchell (Registration Secretary); Mike Dunning (Great Danes Womens FC manager).
- Club Documents: Astro Schedule 2026–2027, Matchday Information 26–27, Club Honours, Club Code of Conduct.
- Kit sponsors: Cape Electrical & Mechanical, Pangaea, Agilion, Leyton Linen, Buckingham James, Superior Group, Envirotek Construction, WL Developments, Bongow, Bakers.
- Club colours: white shirts, black shorts, black socks. The crest is quartered red and black, with GDFC on the shield, "GREAT DANES" arched around it and 19 / 71 on either side.
- Facts still to confirm:
  - **Accreditation:** the site cites FA Charter Standard (2006) and Community Club status (2015). Charter Standard was replaced by England Football Accreditation in 2021, so check the club's current status.
  - **Membership:** the site says to apply via a "Payments" page that isn't in the main menu.
  - **Safeguarding:** no Welfare Officer or safeguarding policy was visible.

## Impeccable critique of the live site (phone screenshots only, degraded run)

The method comes from github.com/pbakaus/impeccable (`skill/reference/critique.md`, `critique-rubric.md`, `.claude/skills/impeccable/reference/craft-floor.md`). It scores Nielsen's 10 heuristics 0–4 and adds a cognitive-load checklist, persona walk-throughs and P0–P3 issues. The automated detector was not run.

**Score: 14/32 (44%), Poor.** Heuristics 5 and 9 were scored n/a because no forms were reviewed.

| # | Heuristic | Score |
|---|---|---|
| 1 | Visibility of system status | 2 |
| 2 | Match with the real world | 2 |
| 3 | User control | 3 |
| 4 | Consistency | 2 |
| 6 | Recognition rather than recall | 1 |
| 7 | Flexibility and efficiency | 1 |
| 8 | Aesthetic and minimalist design | 2 |
| 10 | Help and documentation | 1 |

**Design specificity:** a category-interchangeable MyClubPro template. All the club's character is in poster images.

**Priority issues:**
- **P0:** The membership route is broken. The home page points to a "Payments" menu item that isn't there.
- **P1:** Key facts (times, prices, phone numbers) are only inside poster images. They can't be searched, read by a screen reader or tapped, and the news cards crop the poster headings.
- **P1:** The home page has no main action. It opens on a stock turf photo.
- **P1:** Empty states throughout:
  - the home fixtures panel defaults to Soccability and shows "No upcoming fixtures"
  - What's On is empty, and so are Events and Videos
  - a match report contains only "Pitch 1"
- **P1:** No FAQ or help centre. Volunteers' personal mobile numbers are published. Safeguarding isn't visible from the home page.

**Cognitive load:** 5 of 8 checks fail (high). The failures are single focus, chunking, visual hierarchy, minimal choices (the 13-item menu) and working memory.

**What works:** the crest, the breadth of the Teams menu, searchable Club Documents, and sponsors credited by team.

**Minor points:**
- The home text says teams start at Under 7, but the intake poster says U5–U6.
- The Gallery opens with 2014/15 photos, so check photo consent and retention.
- Contact cards use silhouette placeholders.
- Sponsor logos on the home page are greyscale.
- "U7'S" has a stray apostrophe.
- Several posters look AI-generated and show red kits that contradict the white kit.

## Concept home page (great-danes-concept.html, version 3)

**Design direction:** the crest and a pavilion noticeboard.
- Libre Caslon Text for headings and Public Sans for body text.
- Crest red and black on cool off-white, deliberately light only (the user is a parent on a phone outdoors).
- No cards, no labels above headings, no coloured side bars and no decorative shapes, following Impeccable's banned-patterns list.

**Sections:**
1. Five-link header with no menu button.
2. Opening section: "Football at Sawyers Hall Lane since 1971", with the Ask Eva box.
3. This Saturday at Sawyers Hall Lane, as a timed noticeboard.
4. Teams with places, in a single table.
5. Find your child's team, by school year.
6. A help centre under four headings: Joining, Match day, Fees and kit, Welfare.
7. Safeguarding panel.
8. Sponsors, as a sentence of names.
9. Footer.

**Placeholders** are in [brackets]: fixtures, subs amount, Welfare Officer name, U11 team, and U15 Girls training time and league. Eva in the concept is a keyword-matching demo, not real AI.

Earlier versions (navy and gold, then red and black with cards) were dropped for looking AI-generated.

## Eva recommendation

- Build one help centre with AI search, with Eva as a button that opens it. Don't start with a separate chatbot.
- Brighton ("Ask Albion" at /help) and Arsenal (help.arsenal.com) both use searchable help centres with categories and contact escalation. Neither runs a live chatbot.
- Steps:
  1. Tag 4 weeks of real queries and write the top 30–40 answers, each owned by a named volunteer.
  2. Publish them as a help centre page grouped by category.
  3. Add AI search that answers only from club content, cites the source page, says "I don't know" otherwise, and logs unanswered questions for the committee.
  4. End every answer with the right role contact.
- Guardrails:
  - Welfare concerns go to the Club Welfare Officer, never to Eva.
  - Parents are told not to enter children's personal or medical data.
  - Chat logs are covered in the privacy notice.
  - The supplier stores data in the UK or EU and doesn't train its models on it.
- **MyClubPro:** ask their support whether custom scripts can be added. If so, add Eva site-wide. If not, host the help centre at help.greatdanesyfc.uk and link it from the menu.
- Off-the-shelf options to evaluate (not tested): OTTO Pilot (ottosport.ai) and the SportsPlus chatbot agent.

## Starter prompt for the new conversation

> I'm picking up a website project for Great Danes Youth Football Club (greatdanesyfc.uk). The attached HANDOVER.md has the brief, the club facts, an Impeccable-method critique of the current site and the Eva recommendation. great-danes-concept.html is the latest concept home page. Read both, then [next task, e.g. "build the Join page and Help centre in the same design" / "write the top 30 FAQ answers for Eva" / "draft an email to MyClubPro asking about script embeds"]. Use British English and keep anything for parents in plain English.

## Update 21/11/26: Impeccable 4.10.0 critique and concept v4

**Critique of the live site (eight pages, phone and desktop):** 16/40 (Poor). The automated detector was blocked in this environment, so the scores come from the design review alone. All ten heuristics were scored this time, so it isn't directly comparable with the earlier 14/32.
- **P0:** the route to join is broken (the "Payments" link doesn't exist).
- **P1:** key facts are locked inside poster images.
- **P1:** there is no help layer.
- **P1:** team pages and fixtures are empty.
- **P2:** teams are named by mascot and coach instead of school year.

**Facts resolved from the live site:**
- The Welfare Officer is Kimberley Hall.
- The site shows the England Football Accredited badge.
- There are 39 teams, U5 to U18 plus adult and Soccability.

**Concept v4** (`great-danes-concept-v4.html`; private artifact https://claude.ai/artifact/4kke6XhRYhrbBGGEz4Si9m):
- This replaces v3's Caslon noticeboard look with "the kit": a white ground, black bands and red squad numbers. The hero is the club's own photo of the girls' team.
- It has four views:
  - **Home:** a team finder by school year, this weekend's times, Ask Eva, every age group, welfare and sponsors.
  - **Join:** four steps and fees.
  - **Help:** 28 answers in six topics, each with a named owner. Eva answers only from these, and hands welfare concerns to a person.
  - **Team page template:** U10 Girls.
- An independent finish review gave the verdict "ship".
- The direction is in `DIRECTION.md` and the design tokens are in `DESIGN.md`.
- Images (`img/`) are gitignored because the photo shows children. They are published only with the artifact.
