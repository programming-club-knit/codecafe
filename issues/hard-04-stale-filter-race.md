---
title: "[Hard] Race condition: rapid filter clicks show the wrong items"
labels: hacktheweb, difficulty: hard, bug, javascript, points: 50
---
## Description
Click **Drinks** and immediately click **Snacks**. The Snacks chip is highlighted, but a second later the *drinks* appear. Slow responses overwrite fast ones.

## Steps to reproduce
1. Open `menu.html`.
2. Click **Drinks**, then **Snacks** straight away.
3. Wait ~1 second.

## Your mission
- [ ] The list always matches the **last** chip clicked, no matter how responses arrive
- [ ] In-flight work for outdated requests is cancelled where possible (`AbortController`) or at least ignored
- [ ] The "Brewing..." status only clears when the *latest* request finishes
- [ ] Add an error state (and a Retry button) for failed requests, and make `fetchMenu` able to fail so you can test it
- [ ] Keyboard focus is not lost when the list re-renders
- [ ] Explain the bug and your fix in the PR description

## Files
`js/menu.js`

**Difficulty:** Hard | **Points:** 50
