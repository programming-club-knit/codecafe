---
title: "[Medium] Dark mode resets on every page load"
labels: hacktheweb, difficulty: medium, bug, javascript, points: 30
---
## Description
The theme toggle works, but the choice is forgotten when navigating to another page or reloading.

## Expected behaviour
- The chosen theme is remembered across pages and reloads.
- First-time visitors get their OS preference (`prefers-color-scheme`).
- No "flash" of the wrong theme while the page loads.

## Acceptance criteria
- [ ] Persisted with `localStorage` (handle it being unavailable)
- [ ] Falls back to the system preference when nothing is stored
- [ ] No visible flash of light theme for dark-mode users
- [ ] Toggle button exposes its state (`aria-pressed`)

## Files
`js/main.js`, `*.html` (hint: where must the theme be applied to avoid a flash?)

**Difficulty:** Medium | **Points:** 30
