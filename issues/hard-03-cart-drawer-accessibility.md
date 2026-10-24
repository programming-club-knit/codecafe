---
title: "[Hard] Cart drawer is not keyboard or screen-reader accessible"
labels: hacktheweb, difficulty: hard, accessibility, javascript, css, points: 50
---
## Description
The cart drawer only works with a mouse. Keyboard and screen-reader users can't use it properly.

## Problems to fix
- The close "button" is a `<div>`
- Focus doesn't move into the drawer when it opens
- Tab can escape to the page behind it
- `Escape` does nothing
- When closed, the off-screen drawer's buttons are still reachable with Tab
- Nothing announces that the cart changed
- Focus isn't returned to the "Cart" button on close

## Acceptance criteria
- [ ] Drawer has `role="dialog"`, `aria-modal="true"` and an accessible name
- [ ] Real `<button>` for close
- [ ] Focus moves in on open, is **trapped** while open, and returns on close
- [ ] `Escape` and clicking a backdrop close it
- [ ] Closed drawer is hidden from assistive tech and the tab order (`hidden`, `inert` or `visibility`)
- [ ] Cart count/total changes are announced via a polite live region
- [ ] Respect `prefers-reduced-motion`
- [ ] No new dependencies

## Files
`menu.html`, `js/cart.js`, `css/style.css`

**Difficulty:** Hard | **Points:** 50
