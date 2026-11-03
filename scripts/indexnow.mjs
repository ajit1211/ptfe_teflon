#!/usr/bin/env node
/* Notifies IndexNow search engines (Bing, Yandex, Seznam, Naver …) about every URL in the
   sitemap. Run AFTER the deployment is live — the engines fetch /<key>.txt to confirm ownership.
     node scripts/indexnow.mjs
   Google does not use IndexNow; for Google use Search Console (see DEPLOYMENT.md). */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, INTEGRATIONS } from '../src/config.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const key = INTEGRATIONS.indexNowKey;
if (!key) { console.error('No indexNowKey in src/config.mjs'); process.exit(1); }

const keyUrl = `${SITE.url}/${key}.txt`;
const live = await fetch(keyUrl).then((r) => (r.ok ? r.text() : '')).catch(() => '');
if (live.trim() !== key) { console.error(`Key file not live at ${keyUrl} — deploy first.`); process.exit(1); }

const urlList = [...readFileSync(join(ROOT, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE.url).host, key, keyLocation: keyUrl, urlList }),
});
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 400) console.log(await res.text());
process.exit(res.status >= 400 ? 1 : 0);
