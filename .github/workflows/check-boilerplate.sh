#!/bin/bash
# check-boilerplate.sh — Scan repository for hardcoded boilerplate numbers
#
# Memo 060 Phase 8 / PRD-026.
#
# Usage:
#   bash check-boilerplate.sh --pattern '\b(365|288|1575)\b' --excludes "node_modules,dist,..."
#
# Exit codes:
#   0 = no hardcoded boilerplate detected outside whitelist
#   1 = at least one hit, prints offending lines

set -u

PATTERN=""
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

if [ -z "$PATTERN" ]; then
    echo "ERROR: --pattern required"
    exit 2
fi

# Split excludes into:
#   * basename-only directory excludes (passed to grep --exclude-dir)
#   * file-pattern excludes (passed to grep --exclude)
#   * full-path prefix excludes (post-grep filter — needed because grep
#     --exclude-dir only matches against the basename, not the full path)
EXCLUDE_FLAGS=""
PATH_PREFIX_FILTERS=""
IFS=',' read -ra ITEMS <<< "$EXCLUDES"
for item in "${ITEMS[@]}"; do
    item_trim=$(echo "$item" | sed 's/^ *//; s/ *$//')
    [ -z "$item_trim" ] && continue
    case "$item_trim" in
        *.template.md|*.template.mdx|template.txt|stats.json|registry.json|manifest.json|schemas-snapshot.json|refs.json|README.md|DISCLAIMER.md|package-lock.json|*.lock|*.txt)
            EXCLUDE_FLAGS="$EXCLUDE_FLAGS --exclude=$item_trim"
            ;;
        */*)
            # Multi-segment path — use post-grep filter against full path.
            PATH_PREFIX_FILTERS="$PATH_PREFIX_FILTERS|./$item_trim/"
            ;;
        *)
            # Single segment — covers both directory basename and file name.
            EXCLUDE_FLAGS="$EXCLUDE_FLAGS --exclude-dir=$item_trim --exclude=$item_trim"
            ;;
    esac
done

# Scan only source-relevant extensions to reduce noise.
INCLUDE_FLAGS="--include=*.md --include=*.mdx --include=*.astro --include=*.mjs --include=*.js --include=*.ts --include=*.tsx --include=*.json --include=*.yml --include=*.yaml --include=*.txt"

RAW_HITS=$(grep -rnE $INCLUDE_FLAGS $EXCLUDE_FLAGS "$PATTERN" . 2>/dev/null || true)

# Apply path-prefix post-filter.
if [ -n "$PATH_PREFIX_FILTERS" ]; then
    # Strip leading "|" from filter alternation.
    FILTER_RE="${PATH_PREFIX_FILTERS#|}"
    HITS=$(echo "$RAW_HITS" | grep -vE "^($FILTER_RE)" || true)
else
    HITS="$RAW_HITS"
fi

if [ -n "$HITS" ]; then
    echo "::error::Hardcoded boilerplate numbers detected. Use meta.stats pipeline instead."
    echo "$HITS"
    echo ""
    echo "How to fix:"
    echo "  - Replace with {{stats.count_schemas}} / {{stats.count_unique_datasources}} / {{stats.count_tools}} placeholders"
    echo "  - Use a generator script (e.g. render-readme.mjs / sync-stats.mjs) to render the template"
    echo "  - See https://github.com/FlowMCP/flowmcp-schemas-public/blob/main/stats.json for current values"
    exit 1
fi

echo "OK: no hardcoded boilerplate numbers detected (pattern: $PATTERN)"
exit 0
