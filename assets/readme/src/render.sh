#!/bin/bash
# Re-render README images from their HTML sources, pixel-exact.
# Requires: the Kimi WebBridge daemon running, python3, curl.
# Usage:  ./render.sh [name ...]   (no args = all six)
# Output: ../<name>.jpg at the exact dimensions below, JPEG quality 88.
# Edit the HTML, run this, check the JPG, commit both.
set -e
cd "$(dirname "$0")"
PORT="${PORT:-18341}"
SESSION="${SESSION:-img-render}"
WINDOWS_DIR=$(dirname "$(pwd -W)" | sed 's|/$||')
sizes() {
  case "$1" in
    banner)   echo "2560 880" ;;
    agent)    echo "2200 1116" ;;
    blog)     echo "2200 1150" ;;
    clone)    echo "2200 1040" ;;
    briefing) echo "2560 1200" ;;
    signals)  echo "2200 1150" ;;
  esac
}
names="$@"
[ -z "$names" ] && names="banner agent blog clone briefing signals"
python3 -m http.server "$PORT" >/dev/null 2>&1 &
SERVER_PID=$!
trap "kill $SERVER_PID 2>/dev/null" EXIT
sleep 1
req() {
  local f; f=$(mktemp webbridge-req-XXXXXX.json)
  cat > "$f"
  curl -s -X POST http://127.0.0.1:10086/command -H "Content-Type: application/json" --data-binary "@$f"
  rm -f "$f"
}
for name in $names; do
  set -- $(sizes "$name")
  w=$1; h=$2
  req > /dev/null <<EOF
{"action":"cdp","args":{"method":"Emulation.setDeviceMetricsOverride","params":{"height":$h,"width":$w,"deviceScaleFactor":1,"mobile":false}},"session":"$SESSION"}
EOF
  req > /dev/null <<EOF
{"action":"navigate","args":{"url":"http://127.0.0.1:$PORT/$name.html"},"session":"$SESSION"}
EOF
  sleep 2
  echo "--- $name (${w}x${h})"
  req <<EOF
{"action":"screenshot","args":{"format":"jpeg","quality":88,"path":"$WINDOWS_DIR/$name.jpg"},"session":"$SESSION"}
EOF
done
