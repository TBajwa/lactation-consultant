#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

if [ -f "$HOME/.git-credentials" ]; then
  GH_TOKEN=$(sed 's|https://TBajwa:||; s|@github.com.*||' "$HOME/.git-credentials" | tr -d '\n')
  if [ -n "$GH_TOKEN" ]; then
    GIT_TERMINAL_PROMPT=0 git push "https://TBajwa:${GH_TOKEN}@github.com/TBajwa/lactation-consultant.git" main
  fi
fi
