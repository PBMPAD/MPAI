MPAI site additions, 07/11/26

This is an additions pack, not a full copy of the site. It adds a blog, the first post and a badges page. It was built without access to mpai-website-updated-v7.zip, so the existing pages are untouched.

WHAT IS IN IT
  blog/index.html                       Blog page
  blog/a-year-with-claude/index.html    First post
  badges/index.html                     Badges page (reads badges-data.js)
  badges/badges-data.js                 The list of badges. Add one line per new badge.
  mpai-extras.css                       Styles for the new pages (MPAI navy and teal)
  snippets/                             Three small pieces to paste into the existing pages

HOW TO ADD IT
  1. Copy blog, badges and mpai-extras.css into the root of the site, next to the home page.
  2. Paste snippets/nav-blog-link.html into the nav of every existing page.
  3. Paste snippets/home-chip.html under the hero buttons on the home page.
  4. Paste snippets/footer-line.html into the footer of every page.

TO ADD A NEW BADGE
  Open badges/badges-data.js and add one line with the course name and the verify link from the badge PDF.

CHECK BEFORE GOING LIVE
  - The new pages use their own stylesheet in the MPAI colours, so they will look close to the rest of the site but not identical until they are merged with the site's own styles.
  - Nav links use mpai.site/how-it-works, /about and /contact, as on the live site.
  - The home page has no logo image, so the new pages use the word MPAI.
