---
title: "[Hard] Security: reflected XSS in menu search"
labels: hacktheweb, difficulty: hard, security, javascript, points: 50
---
## Description
The menu search echoes the `q` URL parameter back into the page as HTML. An attacker can craft a link that runs arbitrary JavaScript in a visitor's browser.

## Proof of concept
Open (while serving the project locally):

```
menu.html?q=<img src=x onerror=alert(document.domain)>
```

An alert appears. That is script execution.

## Your mission
- [ ] Fix the vulnerability at its root (do **not** just strip the word `script`)
- [ ] The search term is still displayed to the user, as plain text
- [ ] Audit every other `innerHTML` use in the project; fix or justify each in the PR description
- [ ] Add a Content-Security-Policy `<meta>` tag to `menu.html` that blocks inline event handlers
- [ ] Explain in your PR why `textContent` / escaping works and what a CSP adds

## Files
`js/menu.js`, `menu.html`, `js/cart.js`

**Difficulty:** Hard | **Points:** 50
