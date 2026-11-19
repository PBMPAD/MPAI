# Fixtures by screenshot: how the secretary updates the site

Prepared 19/11/26. This is how the concept page gets its fixtures, and the pattern a real build would copy.

## The idea

When the league publishes the fixture list, the club secretary takes a screenshot of it from FA Full-Time and gives it to a Claude chat. Claude reads it, shows what it found for checking, and on a yes saves it. The home page "This week" row and Eva read from the same saved list. Only the team, the day and the opponent are saved. Kick-off times are not needed: they arrive late, and the page says "Kick-off time to be confirmed".

## What is saved for each fixture

| Field | Example |
|---|---|
| `team` | U8 Lionesses |
| `date` | 2026-11-21 |
| `opponent` | Brentwood Town U8 |
| `home` | true (home) or false (away) |

The `team` must be spelled exactly as one of the club's team names, or Eva and the page won't match it: Under 7s, U8 Tigers, U8 Lionesses, U8 Tigresses, U9 Lions, U10 Jaguars, U10 Girls, U12 Tigers, U12 Girls, U15 Jaguars, U15 Girls, Under 16s, U17 Leopards. Teams not on this list (Great Danes FC, Great Danes Womens FC, Soccability, U11) need adding to the page first.

## The prompt the secretary pastes, with the screenshot

> This is the Great Danes YFC fixtures workflow. I've attached a screenshot of our fixtures from FA Full-Time. Read it and list every fixture for our teams as: team, date (dd/mm/yy), opponent, home or away. Use only these team names: [paste the list above]. Ignore times, referees, names of people and anything else. Show me the list as a table and tell me anything you could not read or match. When I say yes, save them to the fixtures list on the artifact [link]. Replace any existing fixture for the same team and date. Do not save anything until I say yes.

## What Claude does in that chat

1. Reads the screenshot and builds the table. Anything unclear is flagged, not guessed.
2. Waits for the secretary to say yes.
3. Saves one entry per fixture, named like `u8-lionesses-2026-11-21`, so sending the same screenshot twice updates rather than duplicates.
4. Optionally removes fixtures older than today.

## What this needs

- **For the concept page:** whoever runs the chat needs a Claude account with edit access to the published page, because saving is a write to that page's store. Viewers can read but not write.
- **For the real site:** the same pattern, but the saved list has to reach MyClubPro or wherever the live site runs. Ask MyClubPro whether fixtures can be uploaded as a CSV or pasted in. If so, Claude can produce that file from the screenshot in the same chat and the secretary uploads it. This is the same question as the script-embed question in `HANDOVER.md`.
- **Privacy check:** a Full-Time screenshot can show names of referees or officials. The prompt says to ignore them and save only team, date and opponent. Keep child names out of the screenshot.
