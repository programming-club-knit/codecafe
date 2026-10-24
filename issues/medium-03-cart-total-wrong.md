---
title: "[Medium] Cart total shows nonsense like 04.503.00"
labels: hacktheweb, difficulty: medium, bug, javascript, points: 30
---
## Description
Add a Cold Brew ($4.50) and an Espresso ($3.00) to the cart. The total reads `04.503.00` instead of `7.50`. Quantities are also ignored.

## Expected behaviour
- Total = sum of `price x qty` for every line
- Always displayed with two decimals (`7.50`)
- Floating-point errors never leak into the UI (e.g. `0.1 + 0.2`)

## Acceptance criteria
- [ ] Correct total for any combination of items and quantities
- [ ] Always two decimal places
- [ ] Each line in the cart shows its price with two decimals as well
- [ ] Money maths done in cents (integers) or otherwise rounded safely

## Files
`js/cart.js`

**Difficulty:** Medium | **Points:** 30
