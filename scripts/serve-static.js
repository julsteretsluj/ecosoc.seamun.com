#!/usr/bin/env node
/**
 * Minimal static file server (no npm deps). Serves project root so you can
 * open index.html, overview.html, etc. in the browser.
 * Usage: node scripts/serve-static.js
 * Then open: http://127.0.0.1:3080/
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT) || 3080;
const ROOT = path.resolve(__dirname, "..");

const MIMES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function serve(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end();
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === "ENOENT" ? 404 : 500).end();
      return;
    }
    const ext = path.extname(filePath);
    const type = MIMES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

const server = http.createServer(serve);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Static server: http://127.0.0.1:${PORT}/`);
  console.log(`  (Open index.html, overview.html, etc. in your browser)`);
});
