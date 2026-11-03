#!/usr/bin/env node
/* ============================================================
   SK Polymers static site generator — zero dependencies (Node 18+).

     node build.mjs                          build with SITE_URL from src/config.mjs
     SITE_URL=https://www.example.in node build.mjs   build for another origin

   Reads page modules from src/pages/**, renders them through src/layout.mjs and
   writes plain HTML into the repository root (index.html, products/…/index.html,
   …) together with sitemap.xml, robots.txt and vercel.json. The generated files are
   committed, so Vercel serves the site as static files with no build step.
   ============================================================ */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, unlinkSync, rmdirSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE } from './src/config.mjs';
import { renderPage, resetFaqCounter } from './src/layout.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = join(ROOT, 'src', 'pages');
const MANIFEST = join(ROOT, '.generated-files');

/* ── load page modules ──────────────────────────────────── */
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return e.name.endsWith('.mjs') ? [full] : [];
  });
}

const pages = [];
for (const file of walk(PAGES_DIR).sort()) {
  const mod = await import(pathToFileURL(file).href);
  const page = mod.default;
  if (!page) throw new Error(`${relative(ROOT, file)} has no default export`);
  for (const key of ['path', 'title', 'description', 'body']) {
    if (page[key] === undefined) throw new Error(`${relative(ROOT, file)} is missing "${key}"`);
  }
  if (page.path !== '' && !page.path.endsWith('/')) throw new Error(`${relative(ROOT, file)}: path must end with "/"`);
  page.source = relative(ROOT, file).split(sep).join('/');
  pages.push(page);
}
const seen = new Set();
for (const p of pages) {
  const key = p.output || p.path;
  if (seen.has(key)) throw new Error(`Duplicate page path: ${key}`);
  seen.add(key);
}

/* ── context helpers ────────────────────────────────────── */
const hashCache = new Map();
function hashOf(path) {
  if (!hashCache.has(path)) {
    const file = join(ROOT, path);
    if (!existsSync(file)) throw new Error(`Missing asset referenced by a page: ${path}`);
    hashCache.set(path, createHash('sha256').update(readFileSync(file)).digest('hex').slice(0, 10));
  }
  return hashCache.get(path);
}

function contextFor(page) {
  // 404.html is served for arbitrary URLs, so it uses root-relative links; every other page uses
  // relative links, which keeps the output working on any host or sub-path (Vercel, previews, GitHub Pages).
  const prefix = page.rootRelative ? '/' : '../'.repeat(page.path.split('/').filter(Boolean).length);
  const r = (target) => {
    if (target.startsWith('#') || /^[a-z]+:/i.test(target)) return target;
    return prefix + target || './';
  };
  return {
    page,
    r,
    asset: (path) => `${r(path)}?v=${hashOf(path)}`,
    abs: (path) => `${SITE.url}/${path}`,
  };
}

/* ── render pages ───────────────────────────────────────── */
const written = [];
function write(rel, content) {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content.replace(/[ \t]+$/gm, ''), 'utf8');
  written.push(rel.split(sep).join('/'));
}

for (const page of pages) {
  resetFaqCounter();
  const out = page.output || (page.path === '' ? 'index.html' : `${page.path}index.html`);
  write(out, renderPage(contextFor(page)));
}

/* ── sitemap.xml + robots.txt ───────────────────────────── */
const indexable = pages.filter((p) => !p.noindex).sort((a, b) => a.path.localeCompare(b.path));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url>
    <loc>${SITE.url}/${p.path}</loc>${p.updated ? `\n    <lastmod>${p.updated}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>
`);

write('robots.txt', `# ${SITE.name}
User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`);

/* ── vercel.json ────────────────────────────────────────── */
const siteHost = new URL(SITE.url).host;
const hostRedirects = SITE.legacyHosts
  .filter((h) => h !== siteHost)
  .map((h) => ({ source: '/:path*', has: [{ type: 'host', value: h }], destination: `${SITE.url}/:path*`, permanent: true }));

const vercel = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  cleanUrls: true,
  trailingSlash: true,
  redirects: [
    ...hostRedirects,
    // The old single-page site was linked as /index.html in places; keep one canonical home URL.
    { source: '/index.html', destination: '/', permanent: true },
  ],
  headers: [
    {
      source: '/static/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/(site.webmanifest|robots.txt|sitemap.xml)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
    },
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
      ],
    },
  ],
};
write('vercel.json', `${JSON.stringify(vercel, null, 2)}\n`);

/* ── remove stale output from previous builds ───────────── */
if (existsSync(MANIFEST)) {
  const previous = readFileSync(MANIFEST, 'utf8').split('\n').filter(Boolean);
  for (const rel of previous) {
    if (written.includes(rel)) continue;
    const file = join(ROOT, rel);
    if (existsSync(file)) {
      unlinkSync(file);
      console.log(`removed stale ${rel}`);
      let dir = dirname(file);
      while (dir !== ROOT && readdirSync(dir).length === 0) { rmdirSync(dir); dir = dirname(dir); }
    }
  }
}
writeFileSync(MANIFEST, `${written.sort().join('\n')}\n`, 'utf8');

console.log(`Built ${pages.length} pages for ${SITE.url} (${indexable.length} in sitemap).`);
