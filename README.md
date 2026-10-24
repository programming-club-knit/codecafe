# HackTheWeb: CodeCafe

Welcome to **HackTheWeb**! CodeCafe is a small coffee-shop website built with plain **HTML, CSS and JavaScript**. No frameworks, no build step. It is also full of bugs, rough edges and missing features. Your job: find them, fix them, and open a Pull Request.

## How it works

1. Pick an issue from the **Issues** tab. Each one is labelled by difficulty.
2. Comment `I'd like to work on this` so nobody duplicates your effort. First come, first served.
3. Fix it, open a PR that says `Closes #<issue number>`.
4. A reviewer checks the acceptance criteria. Merged PR = points.

| Level  | Label                | Points | What to expect                                   |
|--------|----------------------|--------|--------------------------------------------------|
| Easy   | `difficulty: easy`   | 10     | Typos, broken paths, small CSS and HTML fixes    |
| Medium | `difficulty: medium` | 30     | JavaScript logic bugs, forms, state, responsive  |
| Hard   | `difficulty: hard`   | 50     | Security, accessibility, async races, persistence |

Rules and scoring details are in [CONTRIBUTING.md](CONTRIBUTING.md).

## Run it locally

No install is needed for most pages, but use a local server so `localStorage` and URLs behave like a real site:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>. Or use `npx serve`, or the VS Code **Live Server** extension.

## Project structure

```
index.html  menu.html  about.html  contact.html
css/style.css          all styles, light and dark theme via CSS variables
js/main.js             theme toggle, mobile nav (shared by every page)
js/data.js             menu data
js/menu.js             menu loading, filtering, search
js/cart.js             shopping cart + drawer
js/contact.js          contact form
assets/                images
issues/                issue descriptions (organizers use these to create GitHub issues)
```

## Ground rules

- Plain HTML/CSS/JS only. No new libraries or frameworks.
- One issue per PR, keep changes focused.
- Don't "fix" things that aren't in an issue. Spotted another bug? Tell an organizer, and it may become a bonus issue.
- Be kind in reviews and comments.

Happy hacking!
