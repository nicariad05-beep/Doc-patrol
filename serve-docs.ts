/**
 * Simple HTTP server for sample documentation.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DOCS_DIR = "/home/agent-backend-engineer-scanner/Doc-patrol";

Bun.serve({
  port: 3333,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    if (path === "/") path = "/docs/index.html";

    const fullPath = join(DOCS_DIR, path);
    if (existsSync(fullPath)) {
      const content = readFileSync(fullPath, "utf-8");
      const mime = fullPath.endsWith(".html") ? "text/html" : "text/plain";
      return new Response(content, {
        headers: { "Content-Type": mime },
      });
    }

    // Try .md extension for markdown files
    const mdPath = fullPath + ".md";
    if (existsSync(mdPath)) {
      const content = readFileSync(mdPath, "utf-8");
      return new Response(content, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log("Docs server running on http://0.0.0.0:3333");