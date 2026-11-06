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
DAEMON="${DAEMON_URL:-http://127.0.0.1:10086}"

# Portable absolute output dir (POSIX everywhere); converted to a Windows
# path only where the Windows browser daemon needs one.
SRC_ABS="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$(dirname "$SRC_ABS")"
case "$(uname -s)" in
  MINGW*|MSYS*|CYGWIN*)
    if command -v cygpath >/dev/null 2>&1; then OUT_DIR="$(cygpath -m "$OUT_DIR")";
    else OUT_DIR="$(printf '%s' "$OUT_DIR" | sed -E 's|^/([a-zA-Z])/(.*)$|\1:/\2|')"; fi ;;
esac

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
# Every daemon reply is an envelope: {"ok":true,...} or {"ok":false,...}.
# curl succeeds on transport alone, so check the envelope and stop on ok:false.
req() {
  local f out; f=$(mktemp "${TMPDIR:-/tmp}/webbridge-req-XXXXXX.json")
  cat > "$f"
  out=$(curl -s -X POST "$DAEMON/command" -H "Content-Type: application/json" --data-binary "@$f")
  rm -f "$f"
  printf '%s' "$out"
}
need_ok() {
  case "$1" in
    *'"ok":true'*) printf '%s\n' "$1" ;;
    *) echo "WebBridge call failed, stopping: $1" >&2; exit 1 ;;
  esac
}
for name in $names; do
  set -- $(sizes "$name")
  w=$1; h=$2
  need_ok "$(req <<EOF
{"action":"cdp","args":{"method":"Emulation.setDeviceMetricsOverride","params":{"height":$h,"width":$w,"deviceScaleFactor":1,"mobile":false}},"session":"$SESSION"}
EOF
)" > /dev/null
  need_ok "$(req <<EOF
{"action":"navigate","args":{"url":"http://127.0.0.1:$PORT/$name.html"},"session":"$SESSION"}
EOF
)" > /dev/null
  sleep 2
  echo "--- $name (${w}x${h})"
  need_ok "$(req <<EOF
{"action":"screenshot","args":{"format":"jpeg","quality":88,"path":"$OUT_DIR/$name.jpg"},"session":"$SESSION"}
EOF
)"
done
