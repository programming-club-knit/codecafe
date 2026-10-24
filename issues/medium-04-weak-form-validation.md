---
title: "[Medium] Contact form validation is too weak and gives no feedback"
labels: hacktheweb, difficulty: medium, bug, javascript, accessibility, points: 30
---
## Description
The contact form accepts `a@b` as an email, ignores the message field completely and only says "Something went wrong." when it fails.

## Acceptance criteria
- [ ] Name: required, at least 2 characters
- [ ] Email: must be a plausible address (`name@domain.tld`)
- [ ] Message: required, at least 10 characters
- [ ] Inline error text appears under each invalid field (use the `.error` spans)
- [ ] Invalid inputs get `aria-invalid="true"`, and the first invalid field receives focus
- [ ] Errors clear as the user fixes the field
- [ ] Success message is announced to screen readers (`aria-live`)

## Files
`js/contact.js`, `contact.html`

**Difficulty:** Medium | **Points:** 30
