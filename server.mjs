import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(projectRoot, process.argv[2] || ".");
const mime = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif",
  ".mp4": "video/mp4", ".pdf": "application/pdf", ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8"
};

const app = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    const fullPath = path.resolve(siteRoot, `.${requestedPath}`);
    const relativePath = path.relative(siteRoot, fullPath);
    if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    const info = await stat(fullPath);
    const filePath = info.isDirectory() ? path.join(fullPath, "index.html") : fullPath;
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mime[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cache-Control": filePath.endsWith(".html") ? "no-cache" : "public, max-age=3600"
    });
    response.end(content);
  } catch (error) {
    const status = error.code === "ENOENT" ? 404 : 500;
    response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(status === 404 ? "Not found" : "Server error");
  }
});

const port = Number(process.env.PORTFOLIO_PORT || 4173);
app.listen(port, "127.0.0.1", () => {
  console.log(`Riyansh Gupta portfolio ready at http://localhost:${port}`);
  console.log(`Serving ${siteRoot}`);
});
