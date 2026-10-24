---
title: "[Hard] Cart is lost on reload and not shared between tabs"
labels: hacktheweb, difficulty: hard, enhancement, javascript, points: 50
---
## Description
The cart lives only in a JavaScript array. Refreshing the page empties it, and a second tab has a different cart.

## Your mission
- [ ] Persist the cart so a refresh keeps it
- [ ] Keep multiple open tabs in sync in real time (hint: the `storage` event)
- [ ] Survive corrupted or malicious storage content (`{bad json`, wrong types, negative quantities, unknown item ids) without crashing, and quietly start from an empty cart
- [ ] Prices are re-read from `MENU`, not trusted from storage (otherwise anyone can edit prices in DevTools)
- [ ] Storage use is wrapped in `try/catch` (private mode, quota exceeded)
- [ ] Cart badge and total update after syncing
- [ ] Write your approach in the PR description

## Files
`js/cart.js`

**Difficulty:** Hard | **Points:** 50
