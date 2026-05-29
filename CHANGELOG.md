# Changelog

All notable changes to the FlowMCP GitHub organization profile generator are documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

> This repo renders `profile/README.md` from `refs.resolved.json` (fetched from `flowmcp-spec`) and a template. Most content changes are auto-synced — this changelog captures repo-level changes (script logic, workflows, generator structure).

## [Unreleased]

### Added
- `LICENSE` file (MIT) on disk.
- `package.json`: `description`, `author`, `repository`, `bugs`, `homepage`, `engines.node>=22`.

### Changed
- `package.json.license` `ISC` → `MIT` (FlowMCP convention).

## [1.0.0]

### Added
- BadgeTable-driven profile generator (`badgetable` dependency).
- `scripts/fetch-refs.mjs` reads `refs.resolved.json` from `flowmcp-spec`.
- `Update README on Commit` workflow.
- `Lint Boilerplate` reusable workflow (Memo 060 PRD-026).

### Notes
- Retrospective entry — pre-CHANGELOG history captured via git log only.
