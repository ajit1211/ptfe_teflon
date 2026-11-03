#!/usr/bin/env node
/* Render one page module to stdout (or a summary) without writing any files.
   Usage: node scripts/render-page.mjs src/pages/products/ptfe-rods.mjs [--full] */
import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { SITE } from '../src/config.mjs';
import { renderPage, resetFaqCounter } from '../src/layout.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = process.argv[2];
if (!file) { console.error('usage: node scripts/render-page.mjs <page module> [--full]'); process.exit(2); }

const page = (await import(pathToFileURL(resolve(file)).href)).default;
const prefix = page.rootRelative ? '/' : '../'.repeat(page.path.split('/').filter(Boolean).length);
const r = (t) => (t.startsWith('#') || /^[a-z]+:/i.test(t) ? t : prefix + t || './');
const asset = (p) => {
  if (!existsSync(join(ROOT, p))) throw new Error(`missing asset ${p}`);
  return `${r(p)}?v=${createHash('sha256').update(readFileSync(join(ROOT, p))).digest('hex').slice(0, 10)}`;
};
resetFaqCounter();
const html = renderPage({ page, r, asset, abs: (p) => `${SITE.url}/${p}` });

if (process.argv.includes('--full')) { process.stdout.write(html); process.exit(0); }

const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '')
  .replace(/<header[\s\S]*?<\/header>/, '').replace(/<footer[\s\S]*?<\/footer>/, '')
  .replace(/<nav class="mobile-nav"[\s\S]*?<\/nav>/, '').replace(/<section[^>]*id="enquiry"[\s\S]*?<\/section>/, '')
  .replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ');
const h1 = (html.match(/<h1\b/g) || []).length;
console.log(`OK ${page.path}
  title (${page.title.length} chars): ${page.title}
  description (${page.description.length} chars)
  h1 count: ${h1}
  h2: ${(html.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g) || []).map((h) => h.replace(/<[^>]+>/g, '').trim()).join(' | ')}
  approx. words in page body: ${text.split(' ').filter((w) => /[a-z]/i.test(w)).length}`);
