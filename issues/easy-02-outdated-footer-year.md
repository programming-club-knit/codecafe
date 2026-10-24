---
title: "[Easy] Footer copyright year is stuck on 2019"
labels: hacktheweb, difficulty: easy, bug, html, javascript, points: 10
---
## Description
Every page's footer says "(c) 2019 CodeCafe". It should always show the current year without anyone editing HTML next January.

## Expected behaviour
Footer shows the current year on **all four pages** (`index`, `menu`, `about`, `contact`).

## Acceptance criteria
- [ ] Year is computed with JavaScript (no hard-coded year left to go stale)
- [ ] The logic lives in one place, not copy-pasted per page
- [ ] If JS is disabled the page still shows a sensible footer

## Files
`js/main.js`, all `*.html`

**Difficulty:** Easy | **Points:** 10
