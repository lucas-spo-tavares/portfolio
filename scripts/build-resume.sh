#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_TEX="$ROOT_DIR/resume.tex"
OUTPUT_DIR="$ROOT_DIR/.tmp/resume-build"
OUTPUT_PDF="$ROOT_DIR/public/Resume.pdf"

if ! command -v pdflatex >/dev/null 2>&1; then
  echo "Error: pdflatex is required to build the resume PDF." >&2
  echo "Install a LaTeX distribution such as TeX Live or MacTeX, then rerun: npm run build:resume" >&2
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$OUTPUT_DIR" "$SOURCE_TEX"

cp "$OUTPUT_DIR/$(basename "${SOURCE_TEX%.tex}").pdf" "$OUTPUT_PDF"

echo "Resume PDF built at $OUTPUT_PDF"
