#!/usr/bin/env node
/* Validates the generated site (run after `node build.mjs`). Zero dependencies.
     node scripts/validate.mjs
   Checks every generated HTML page for: one <title> / description / canonical / H1, lengths,
   duplicate titles and descriptions, canonical = og:url = sitemap URL, valid JSON-LD,
   heading order, image alt text, every internal link and asset resolving to a file,
   cache-buster hashes matching file contents, sitemap/robots consistency, and banned
   unverified claims. Exits non-zero on any error. */
import { createHash } from 'node:crypto';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/config.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = readFileSync(join(ROOT, '.generated-files'), 'utf8').split('\n').filter((f) => f.endsWith('.html'));
const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${f}: ${m}`);
const warn = (f, m) => warnings.push(`${f}: ${m}`);

// Claims the owner has not verified — they must not appear in published pages.
const BANNED = [
  /\bISO\s*9001\b/i, /\bISO[- ]certified\b/i, /\bFDA[- ](approved|compliant|certified)\b/i, /\bRoHS\b/, /\bREACH\b/,
  /\b\d{2,4}\+\s*(years|clients|projects|customers|states)\b/i, /years of excellence/i, /\bplaceholder\b/i,
  /\btest certificates?\b[^.]*\bevery (order|batch)\b/i, /\bNo\.\s*1\b/i, /\bworld[- ]class\b/i, /\bleading (manufacturer|supplier)\b/i,
];

const titles = new Map();
const descs = new Map();
const canonicals = new Set();
const fileUrl = (f) => (f === 'index.html' ? '' : f.replace(/index\.html$/, ''));

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

function resolveTarget(fromFile, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return null;
  let p = clean.startsWith('/') ? clean.slice(1) : posix.normalize(posix.join(posix.dirname(fromFile), clean));
  if (p === '.' || p === '') p = 'index.html';
  else if (p.endsWith('/')) p += 'index.html';
  else if (existsSync(join(ROOT, p)) && statSync(join(ROOT, p)).isDirectory()) p += '/index.html';
  return p;
}

for (const f of files) {
  const html = readFileSync(join(ROOT, f), 'utf8');
  const is404 = f === '404.html';
  const one = (re, label) => {
    const m = [...html.matchAll(re)];
    if (m.length !== 1) err(f, `expected 1 ${label}, found ${m.length}`);
    return m[0] ? decode(m[0][1]) : '';
  };

  const title = one(/<title>([^<]*)<\/title>/g, '<title>');
  const desc = one(/<meta name="description" content="([^"]*)"/g, 'meta description');
  if (title.length > 65) warn(f, `title is ${title.length} chars (may truncate): ${title}`);
  if (desc.length < 110 || desc.length > 165) warn(f, `description is ${desc.length} chars`);
  if (titles.has(title)) err(f, `duplicate title with ${titles.get(title)}`); else titles.set(title, f);
  if (descs.has(desc)) err(f, `duplicate description with ${descs.get(desc)}`); else descs.set(desc, f);
  if ((html.match(/<h1\b/g) || []).length !== 1) err(f, `expected exactly 1 <h1>, found ${(html.match(/<h1\b/g) || []).length}`);

  const expected = `${SITE.url}/${fileUrl(f)}`;
  if (is404) {
    if (!/<meta name="robots" content="noindex/.test(html)) err(f, '404 page must be noindex');
  } else {
    const canonical = one(/<link rel="canonical" href="([^"]*)"/g, 'canonical');
    if (canonical !== expected) err(f, `canonical ${canonical} ≠ ${expected}`);
    const og = one(/<meta property="og:url" content="([^"]*)"/g, 'og:url');
    if (og !== canonical) err(f, `og:url ${og} ≠ canonical`);
    canonicals.add(canonical);
  }
  for (const m of ['og:title', 'og:description', 'og:image', 'twitter:card', 'twitter:image']) {
    if (!html.includes(`"${m}"`)) err(f, `missing ${m}`);
  }

  // JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1]);
      const graph = data['@graph'] || [data];
      for (const node of graph) {
        if (!node['@type']) err(f, 'JSON-LD node without @type');
        if (node['@type'] === 'BreadcrumbList') {
          node.itemListElement.forEach((li, i) => { if (li.position !== i + 1 || !li.item.startsWith(SITE.url)) err(f, 'bad BreadcrumbList item'); });
        }
        if (/Review|AggregateRating|Product|FAQPage/.test(JSON.stringify(node['@type']))) err(f, `unexpected schema type ${node['@type']}`);
      }
    } catch (e) { err(f, `invalid JSON-LD: ${e.message}`); }
  }

  // heading order (no jumps of more than one level downward)
  let last = 0;
  for (const m of html.matchAll(/<h([1-6])\b/g)) {
    const lvl = Number(m[1]);
    if (last && lvl > last + 1) { err(f, `heading jumps from h${last} to h${lvl}`); break; }
    last = lvl;
  }

  // images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/\salt="/.test(tag)) err(f, `img without alt: ${tag.slice(0, 80)}`);
    if (!/id="(lightboxImg)"/.test(tag) && !(/\swidth="\d+"/.test(tag) && /\sheight="\d+"/.test(tag))) err(f, `img without width/height: ${tag.slice(0, 80)}`);
  }

  // internal links + assets
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = decode(m[1]);
    if (/^(https?:|mailto:|tel:|#|data:)/.test(href)) {
      if (href.startsWith('#') && href.length > 1 && !html.includes(`id="${href.slice(1)}"`)) err(f, `broken in-page anchor ${href}`);
      continue;
    }
    const target = resolveTarget(f, href);
    if (!target) continue;
    if (!existsSync(join(ROOT, target))) { err(f, `broken link/asset ${href} → ${target}`); continue; }
    const hash = (href.match(/\?v=([0-9a-f]+)/) || [])[1];
    if (hash) {
      const actual = createHash('sha256').update(readFileSync(join(ROOT, target))).digest('hex').slice(0, 10);
      if (actual !== hash) err(f, `stale cache-buster for ${target} (rebuild needed)`);
    }
    const anchor = href.split('#')[1];
    if (anchor && target.endsWith('.html')) {
      const other = readFileSync(join(ROOT, target), 'utf8');
      if (!other.includes(`id="${anchor}"`)) err(f, `link ${href} points to missing anchor`);
    }
  }

  // unverified claims
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of BANNED) if (re.test(text)) err(f, `contains unverified claim matching ${re}`);
  if (/github\.io/.test(html)) err(f, 'references the old GitHub Pages URL');
}

// sitemap + robots
const sitemap = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
const locs = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
for (const c of canonicals) if (!locs.has(c)) err('sitemap.xml', `missing ${c}`);
for (const l of locs) if (!canonicals.has(l)) err('sitemap.xml', `lists ${l} which is not an indexable page`);
const robots = readFileSync(join(ROOT, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${SITE.url}/sitemap.xml`)) err('robots.txt', 'missing Sitemap line');
if (/Disallow:\s*\/\s*$/m.test(robots)) err('robots.txt', 'blocks the whole site');
JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));
JSON.parse(readFileSync(join(ROOT, 'site.webmanifest'), 'utf8'));

for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\nChecked ${files.length} pages, ${locs.size} sitemap URLs: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
