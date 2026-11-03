import { icon } from '../layout.mjs';
import { PRODUCTS } from '../data/catalogue.mjs';

/* Served by Vercel with a 404 status for any unknown URL, so links are root-relative. */
export default {
  path: '',
  output: '404.html',
  rootRelative: true,
  noindex: true,
  title: 'Page Not Found | SK Polymers',
  description: 'The page you were looking for could not be found. Browse SK Polymers PTFE sheets, rods, gaskets, seals and machined parts, or contact us for help.',
  body: (c) => `
<section class="page-hero" aria-labelledby="pageTitle">
  <div class="hero-bg" aria-hidden="true"><span class="hero-grid"></span><span class="hero-glow"></span></div>
  <div class="container page-hero-inner">
    <div class="page-hero-copy">
      <p class="eyebrow eyebrow-accent"><span class="eyebrow-rule" aria-hidden="true"></span>Error 404</p>
      <h1 class="page-title" id="pageTitle">Page <span class="hl">Not Found</span></h1>
      <p class="page-lede">The page may have moved when our site was reorganised. Try one of the links below, or contact us and we will help you find the right PTFE product.</p>
      <div class="hero-actions">
        <a class="btn btn-accent" href="${c.r('')}">Go to Home ${icon('arrow-right')}</a>
        <a class="btn btn-ghost" href="${c.r('contact/')}">Contact Us</a>
      </div>
    </div>
  </div>
</section>
<section class="section section-light" aria-labelledby="popularTitle">
  <div class="container">
    <div class="section-head"><h2 class="section-title" id="popularTitle">Popular <span class="hl">Pages</span></h2></div>
    <ul class="link-grid">
${PRODUCTS.map((p) => `      <li><a class="link-card" href="${c.r(p.path)}"><span class="link-card-label">${p.tag}</span><span class="link-card-title">${p.name.replace('&', '&amp;')}</span></a></li>`).join('\n')}
    </ul>
  </div>
</section>`,
};
