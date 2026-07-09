# Configuration Guide

## Environment Variables

Set the following environment variables to configure Doc Patrol:

```bash
export DOCPATROL_API_KEY="your-api-key"
export DOCPATROL_SCAN_INTERVAL="daily"
export DOCPATROL_LOG_LEVEL="info"
```

## YAML Configuration

Create a `docpatrol.yaml` file:

```yaml
api_key: ${DOCPATROL_API_KEY}
scan:
  interval: daily
  timeout: 30000
  max_pages: 100
notifications:
  slack_webhook: "https://hooks.slack.com/services/T00/B00/xxxxx"
  email: "admin@example.com"
```

For all configuration options, see the [full config reference](https://docs.docpatrol.example.com/config/reference).

## Integrations

### GitHub

Connect your GitHub account using the [GitHub setup guide](https://docs.docpatrol.example.com/integrations/github/setup).

### Notion

For Notion integration, see the [Notion guide](https://docs.docpatrol.example.com/integrations/notion).

## Upgrading

If you're upgrading from v0.x, read the [migration guide](https://docs.docpatrol.example.com/migration/v1).

## Troubleshooting

Common issues and solutions:

- **Connection refused**: Check your firewall settings
- **API key invalid**: Regenerate your key in the [dashboard](https://app.docpatrol.example.com/settings)
- **Scan timeout**: Increase the timeout in your config

For more help, visit our [community forum](https://community.docpatrol.example.com) or [support page](https://support.docpatrol.example.com/tickets/new).

## Screenshots

![Dashboard screenshot](https://cdn.docpatrol.example.com/screenshots/dashboard-v1.png)
![Scan results](https://cdn.docpatrol.example.com/screenshots/scan-results-v1.png)