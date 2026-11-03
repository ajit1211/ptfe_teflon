#!/usr/bin/env node
/* Minimal local preview server that mimics the Vercel config (zero dependencies):
   trailing-slash redirects, directory index.html, 404.html with a 404 status, gzip and the
   cache headers from vercel.json.
     node scripts/serve.mjs [rootDir] [port]      → http://localhost:4173/ */
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const ROOT = resolve(process.argv[2] || join(dirname(fileURLToPath(import.meta.url)), '..'));
const PORT = Number(process.argv[3] || 4173);
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2',
};

function send(req, res, status, file, extra = {}) {
  let body = readFileSync(file);
  const type = TYPES[extname(file)] || 'application/octet-stream';
  const headers = { 'Content-Type': type, ...extra };
  if (/text|javascript|json|xml|svg/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '')) {
    body = gzipSync(body); headers['Content-Encoding'] = 'gzip';
  }
  res.writeHead(status, headers).end(body);
}

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const path = decodeURIComponent(url.pathname);
  const file = join(ROOT, path);
  if (!file.startsWith(ROOT)) return res.writeHead(400).end();
  const cache = path.startsWith('/static/') ? { 'Cache-Control': 'public, max-age=31536000, immutable' } : { 'Cache-Control': 'public, max-age=0, must-revalidate' };

  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!path.endsWith('/')) return res.writeHead(308, { Location: `${path}/${url.search}` }).end();
    if (existsSync(join(file, 'index.html'))) return send(req, res, 200, join(file, 'index.html'), cache);
  } else if (existsSync(file)) {
    return send(req, res, 200, file, cache);
  }
  const notFound = join(ROOT, '404.html');
  if (existsSync(notFound)) return send(req, res, 404, notFound);
  res.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
}).listen(PORT, () => console.log(`Serving ${ROOT} at http://localhost:${PORT}/`));
