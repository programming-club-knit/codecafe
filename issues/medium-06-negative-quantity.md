---
title: "[Medium] Cart quantity can go negative"
labels: hacktheweb, difficulty: medium, bug, javascript, points: 30
---
## Description
Pressing the **-** button on an item with quantity 1 takes it to `0`, then `-1`, `-2`... and the item never leaves the cart.

## Expected behaviour
- Decreasing from 1 removes the line from the cart
- An empty cart shows a friendly "Your cart is empty" message
- Cart badge and total stay correct

## Acceptance criteria
- [ ] Quantity can never be below 1 while a line exists
- [ ] Line removed when decremented from 1
- [ ] Empty-state message displayed
- [ ] Optional bonus: a "Remove" button per line

## Files
`js/cart.js`

**Difficulty:** Medium | **Points:** 30
