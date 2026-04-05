#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

if [ -f "/home/runner/.git-credentials" ]; then
  GH_TOKEN=$(sed 's|https://TBajwa:||; s|@github.com.*||' "/home/runner/.git-credentials" | tr -d '\n')
  if [ -n "$GH_TOKEN" ]; then
    ASKPASS_SCRIPT=$(mktemp /tmp/git-askpass.XXXXXX.sh)
    cat > "$ASKPASS_SCRIPT" << ASKEOF
#!/bin/bash
case "\$1" in
  *Username*) echo "TBajwa" ;;
  *Password*) echo "$GH_TOKEN" ;;
esac
ASKEOF
    chmod +x "$ASKPASS_SCRIPT"
    GIT_ASKPASS="$ASKPASS_SCRIPT" git push origin main
    rm -f "$ASKPASS_SCRIPT"
  fi
fi
