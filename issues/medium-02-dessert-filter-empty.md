---
title: "[Medium] Desserts filter shows an empty menu"
labels: hacktheweb, difficulty: medium, bug, javascript, points: 30
---
## Description
On the menu page the **Desserts** chip shows "Nothing here yet" even though desserts exist.

## Steps to reproduce
1. Open `menu.html` (serve it locally, see README).
2. Click **Desserts**.

## Expected behaviour
All three desserts are listed.

## Acceptance criteria
- [ ] Desserts filter works
- [ ] Fix the root cause so that a mismatch between a button and the data can't silently produce an empty list again (e.g. derive the chips from the data, or show a clear dev warning)
- [ ] Active chip is announced with `aria-pressed`

## Files
`js/menu.js`, `js/data.js`, `menu.html`

**Difficulty:** Medium | **Points:** 30
