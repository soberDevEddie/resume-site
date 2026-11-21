#!/usr/bin/env bash
# Rebuilds Eduardo-Ocampo-Resume.pdf from resume.html using headless Chrome (macOS).
# Usage: ./resume-pdf/build.sh
set -euo pipefail

cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  --print-to-pdf="Eduardo-Ocampo-Resume.pdf" \
  "file://$PWD/resume.html" 2>/dev/null

echo "Wrote $PWD/Eduardo-Ocampo-Resume.pdf"
