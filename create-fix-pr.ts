/**
 * Script to create a fix PR for the sample docs.
 * Uses the GitHub integration module to create a branch, fix links, and open a PR.
 */
import { createFixPR } from "/home/team/shared/backend/src/github-integration";

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const OWNER = "nicariad05-beep";
const REPO = "Doc-patrol";

async function main() {
  console.log("Creating fix PR for sample documentation...");

  // Fix: Replace broken docpatrol.example.com URLs with placeholder working URLs
  // and fix the /changelog link
  const changes = [
    {
      path: "docs/index.html",
      content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Doc Patrol Docs</title>
</head>
<body>
  <h1>Doc Patrol Documentation</h1>

  <h2>Getting Started</h2>
  <ul>
    <li><a href="/docs/getting-started">Getting Started Guide</a></li>
    <li><a href="/docs/api-reference">API Reference</a></li>
    <li><a href="/docs/configuration">Configuration Guide</a></li>
  </ul>

  <h2>External Resources</h2>
  <ul>
    <li><a href="https://github.com/nicariad05-beep/Doc-patrol">GitHub Repository</a></li>
    <li><a href="https://github.com/nicariad05-beep/Doc-patrol/issues">Issue Tracker</a></li>
  </ul>

  <h2>Internal Pages</h2>
  <ul>
    <li><a href="/docs/getting-started">Getting Started</a></li>
    <li><a href="/docs/api-reference">API Reference</a></li>
    <li><a href="/docs/configuration">Configuration</a></li>
    <li><a href="/CHANGELOG.md">Changelog</a></li>
  </ul>
</body>
</html>`,
    },
    {
      path: "docs/getting-started.md",
      content: `# Getting Started

Welcome to Doc Patrol! This guide will help you get started with our documentation scanning tool.

## Installation

To install Doc Patrol, run:

\`\`\`bash
npm install -g doc-patrol
\`\`\`

For more details, visit our [GitHub repository](https://github.com/nicariad05-beep/Doc-patrol).

## Quick Start

Create a configuration file:

\`\`\`yaml
api_key: YOUR_API_KEY
scan_interval: daily
\`\`\`

Then run:

\`\`\`bash
doc-patrol scan https://your-docs.com
\`\`\`

## Authentication

See the [authentication guide](https://github.com/nicariad05-beep/Doc-patrol) for setup instructions.

## Troubleshooting

If you run into issues, check the [GitHub issues](https://github.com/nicariad05-beep/Doc-patrol/issues).

## Learn More

- [README](https://github.com/nicariad05-beep/Doc-patrol)
- [Changelog](https://github.com/nicariad05-beep/Doc-patrol/blob/main/CHANGELOG.md)`,
    },
  ];

  const result = await createFixPR(
    { token: TOKEN, owner: OWNER, repo: REPO, baseBranch: "main" },
    changes,
    "[Doc Patrol] Fix broken links in documentation",
    "This PR fixes broken links detected by Doc Patrol's automated scanner.\n\n## Changes\n- Fixed broken external links (docpatrol.example.com → GitHub URLs)\n- Fixed /changelog link to point to CHANGELOG.md\n- Updated getting-started.md with working links\n\n## Issues Fixed\n- 25 links to non-existent docpatrol.example.com domain\n- 1 broken link to /changelog (404)"
  );

  if (result) {
    console.log(`\n✅ PR created successfully!`);
    console.log(`   URL: ${result.prUrl}`);
    console.log(`   Branch: ${result.branchName}`);
  } else {
    console.log("\n❌ Failed to create PR. Check your GitHub token and permissions.");
  }
}

main().catch(console.error);