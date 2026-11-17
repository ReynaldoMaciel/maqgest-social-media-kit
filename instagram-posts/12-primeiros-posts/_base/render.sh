#!/bin/zsh
# Uso: _base/render.sh <pasta-do-post> [altura=1350]
# Renderiza slides/*.html em export/*.png com o Chrome headless.
set -e
POST=${1:A}; H=${2:-1350}
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
mkdir -p "$POST/export"
for f in "$POST"/slides/*.html; do
  n=${f:t:r}
  "$CHROME" --headless --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=1 --window-size=1080,$H --virtual-time-budget=8000 \
    --screenshot="$POST/export/$n.png" "file://$f" >/dev/null 2>&1
  echo "export/$n.png"
done
