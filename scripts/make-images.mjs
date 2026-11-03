#!/usr/bin/env node
/* Regenerates the raster brand assets from their SVG/HTML sources using a local Chrome
   (headless) and Python Pillow for JPEG/PNG optimisation. Only needed when the logo or
   social image design changes — the outputs are committed.
     node scripts/make-images.mjs
   Set CHROME_PATH if Chrome is not in the default Windows location. */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const TMP = join(tmpdir(), 'skp-images');
mkdirSync(TMP, { recursive: true });

function shot(htmlFile, out, w, h) {
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--default-background-color=00000000', `--window-size=${w},${h}`, `--screenshot=${out}`,
    pathToFileURL(htmlFile).href], { stdio: 'ignore' });
}

const favicon = pathToFileURL(join(ROOT, 'static/images/favicon.svg')).href;
const iconPage = (size, bg) => {
  const f = join(TMP, `icon-${size}-${bg ? 'bg' : 'tr'}.html`);
  writeFileSync(f, `<!DOCTYPE html><html><body style="margin:0;background:${bg || 'transparent'}"><img src="${favicon}" width="${size}" height="${size}" style="display:block"></body></html>`);
  return f;
};

mkdirSync(join(ROOT, 'static/images/icons'), { recursive: true });
mkdirSync(join(ROOT, 'static/images/og'), { recursive: true });

const targets = [
  ['static/images/icons/favicon-48.png', 48, null],
  ['static/images/icons/icon-192.png', 192, null],
  ['static/images/icons/logo-512.png', 512, '#0A0A0A'],
  ['static/images/icons/apple-touch-icon.png', 180, '#0A0A0A'],
];
for (const [out, size, bg] of targets) shot(iconPage(size, bg), join(ROOT, out), size, size);

const ogPng = join(TMP, 'og.png');
shot(join(ROOT, 'scripts/assets/og-image.html'), ogPng, 1200, 630);

const py = `
import sys
from PIL import Image
og = Image.open(sys.argv[1]).convert('RGB')
og.save(sys.argv[2], 'JPEG', quality=86, optimize=True, progressive=True)
for p in sys.argv[3:]:
    Image.open(p).save(p, optimize=True)
`;
execFileSync('python', ['-c', py, ogPng, join(ROOT, 'static/images/og/sk-polymers-og.jpg'),
  ...targets.map(([out]) => join(ROOT, out))], { stdio: 'inherit' });
rmSync(TMP, { recursive: true, force: true });
console.log('Images regenerated.');
