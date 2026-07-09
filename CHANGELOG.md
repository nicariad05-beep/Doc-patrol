# Changelog

## v2.0.0 (2026-06-15)

### Breaking Changes
- Removed the legacy `/v1/auth` endpoint. Migrate to `/v2/auth`.
- Changed the default scan interval from `hourly` to `daily`.

### New Features
- Added support for Notion integration.
- Improved link checking performance.

### Fixed
- Fixed a bug where timeouts weren't being retried. See [issue #42](https://github.com/nicariad05-beep/Doc-patrol/issues/42).

## v1.5.0 (2026-05-01)

### Added
- YAML configuration support. See the [config docs](https://docs.docpatrol.example.com/v1/config).
- Slack notifications.

### Deprecated
- The legacy API will be removed in v2.0. See the [migration guide](https://docs.docpatrol.example.com/migration/v2).

## v1.0.0 (2026-01-10)

Initial release. See the [announcement blog post](https://blog.docpatrol.example.com/announcing-v1).