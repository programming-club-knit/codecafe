# Contributing to HackTheWeb

## Workflow

1. **Fork** this repository and clone your fork.
2. Create a branch: `git checkout -b fix/<issue-number>-short-name`
3. Make your fix. Test it in the browser (desktop and mobile device mode).
4. Commit with a clear message: `Fix broken barista image (#1)`
5. Push and open a Pull Request against `main`. Fill in the PR template and write `Closes #<number>`.

## Claiming issues

- Comment on the issue to claim it. The first comment wins.
- Claims expire after **45 minutes** without a draft PR or update, then someone else may take it.
- Max **2 open claims** per participant at a time.

## Scoring

- Points come from the issue's label (10 / 30 / 50) and are awarded when the PR is **merged**.
- Every acceptance-criteria checkbox must be met. Partial fixes are sent back for changes.
- Bonus **+5** for a PR description that clearly explains the root cause.
- **-5** if the PR touches files unrelated to the issue.
- Ties are broken by the earliest merge time.

## Code style

- 2-space indentation, `const`/`let` (never `var`), semicolons, single quotes in JS.
- Semantic HTML first. Use ARIA only when native elements can't do the job.
- Keep CSS in `css/style.css` and use the existing CSS variables for colours.
- No inline styles or inline event handlers.

## What not to do

- No frameworks, bundlers or npm dependencies.
- Don't reformat whole files. Diffs must stay small and reviewable.
- Don't copy another participant's PR. Plagiarism means disqualification.
