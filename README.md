# Scheduled blog posts

Not part of the website. GitHub Pages serves the main branch only.

Each stage-N folder holds the complete blog files for that release.
A scheduled task copies stage-N/blog into blog/ on main at the set time:

- stage-2: What are Claude skills? (09/11/26)
- stage-3: No Gap Working (10/11/26)

Before copying, the task checks that the files on main still match the
previous stage, so any edits made by hand are never overwritten.
