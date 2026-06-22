#!/bin/bash
# check-outward-facing.sh — Scan outward-facing content for inward-facing leaks.
#
# Blocks internal markers from reaching public, rendered, or GitHub-rendered
# surfaces: internal record IDs, internal decision/chapter references, German
# structure markers on English pages, and the private source-repository name.
#
# Usage:
#   bash check-outward-facing.sh --excludes "node_modules,dist,generated,..."
#   bash check-outward-facing.sh --pattern '<custom-ere>' --excludes "..."
#
# Exit codes:
#   0 = no inward-facing leak detected outside the allowlist
#   1 = at least one leak, prints offending lines
#   2 = bad arguments

set -u

# High-confidence inward markers (low false-positive rate). Bare decision codes
# like "F3" are intentionally NOT matched standalone — they co-occur with the
# record-ID markers below and matching them alone is too noisy to maintain.
DEFAULT_PATTERN='(Memo [0-9]|\bM0[0-9]{2}\b|flowmcp-schemas-private|\bKap\.|\bPRD-[0-9]|Soll-|\bREV-0[0-9])'

PATTERN="$DEFAULT_PATTERN"
EXCLUDES=""

while [ $# -gt 0 ]; do
    case "$1" in
        --pattern)
            PATTERN="$2"
            shift 2
            ;;
        --excludes)
            EXCLUDES="$2"
            shift 2
            ;;
        *)
            echo "Unknown arg: $1"
            exit 2
            ;;
    esac
done

# Split excludes into basename excludes, file-pattern excludes, and full-path
# prefix excludes (post-grep filter — grep --exclude-dir matches basename only).
EXCLUDE_FLAGS=""
PATH_PREFIX_FILTERS=""
IFS=',' read -ra ITEMS <<< "$EXCLUDES"
for item in "${ITEMS[@]}"; do
    item_trim=$(echo "$item" | sed 's/^ *//; s/ *$//')
    [ -z "$item_trim" ] && continue
    case "$item_trim" in
        *.template.md|*.template.mdx|*.template.txt|template.txt|*.lock)
            EXCLUDE_FLAGS="$EXCLUDE_FLAGS --exclude=$item_trim"
            ;;
        */*)
            PATH_PREFIX_FILTERS="$PATH_PREFIX_FILTERS|./$item_trim/"
            ;;
        *)
            EXCLUDE_FLAGS="$EXCLUDE_FLAGS --exclude-dir=$item_trim --exclude=$item_trim"
            ;;
    esac
done

# Outward surface: rendered docs + READMEs/DISCLAIMER/CHANGELOG + Astro
# components. Build-tooling .mjs/.js is intentionally excluded by default to
# avoid flagging legitimate provenance comments; opt in per repo if needed.
INCLUDE_FLAGS="--include=*.md --include=*.mdx --include=*.astro --include=*.txt"

RAW_HITS=$(grep -rnE $INCLUDE_FLAGS $EXCLUDE_FLAGS "$PATTERN" . 2>/dev/null || true)

if [ -n "$PATH_PREFIX_FILTERS" ]; then
    FILTER_RE="${PATH_PREFIX_FILTERS#|}"
    HITS=$(echo "$RAW_HITS" | grep -vE "^($FILTER_RE)" || true)
else
    HITS="$RAW_HITS"
fi

if [ -n "$HITS" ]; then
    echo "::error::Inward-facing content detected on an outward-facing surface."
    echo "$HITS"
    echo ""
    echo "How to fix:"
    echo "  - Remove internal record IDs (Memo NNN, M0NN), decision/chapter refs (PRD-NN, Kap.),"
    echo "    German structure markers (Soll-), and the private source-repository name."
    echo "  - Use neutral, English, outward-safe phrasing (e.g. 'the schemas repository')."
    echo "  - Add a documented allowlist entry only for genuine false positives."
    exit 1
fi

echo "OK: no inward-facing leaks detected (pattern: $PATTERN)"
exit 0
