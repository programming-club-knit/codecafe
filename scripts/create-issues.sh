#!/usr/bin/env bash
# Creates the HackTheWeb labels and one GitHub issue per file in ../issues.
# Requires the GitHub CLI (https://cli.github.com) and `gh auth login`.
# Usage: ./scripts/create-issues.sh your-org/hack-the-web
set -euo pipefail

REPO_ARG=()
[ -n "${1:-}" ] && REPO_ARG=(--repo "$1")
cd "$(dirname "$0")/.."

for l in hacktheweb:1d76db easy:0e8a16 medium:fbca04 hard:d93f0b bug:d73a4a enhancement:a2eeef \
         security:b60205 accessibility:5319e7 html:e34c26 css:563d7c javascript:f1e05a \
         10-points:ededed 25-points:ededed 50-points:ededed; do
  gh label create "${l%%:*}" --color "${l##*:}" --force "${REPO_ARG[@]}" >/dev/null
done

for f in issues/*.md; do
  title=$(sed -n 's/^title: "\(.*\)"\r\{0,1\}$/\1/p' "$f" | head -1)
  labels=$(sed -n 's/^labels: \(.*\)$/\1/p' "$f" | head -1 | tr -d '\r')
  body=$(awk '/^---\r?$/{c++; next} c>=2{print}' "$f")
  gh issue create --title "$title" --label "$labels" --body "$body" "${REPO_ARG[@]}"
done
echo "Done."
