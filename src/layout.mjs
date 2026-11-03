/* Shared page chrome and components. Every function returns an HTML string.
   `c` is the per-page context created in build.mjs:
     c.r(path)     → link relative to the current page ('' = home, 'products/' …)
     c.asset(path) → relative link to a static file with a ?v=<content hash> cache-buster
     c.abs(path)   → absolute production URL (SITE.url + '/' + path)
     c.page        → the page definition object */
import { SITE, BUSINESS, INTEGRATIONS, WA_DEFAULT_TEXT } from './config.mjs';
import { PRODUCTS, ENQUIRY_OPTIONS, ARTICLES } from './data/catalogue.mjs';
import { SPRITE } from './sprite.mjs';
import { jsonLd } from './seo.mjs';

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const icon = (name, cls = 'icon') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

export const waHref = (text = WA_DEFAULT_TEXT) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
export const telHref = `tel:${BUSINESS.phone}`;
export const mailHref = `mailto:${BUSINESS.email}`;

export const addressLines = () => {
  const a = BUSINESS.address;
  return [a.unit, a.streetAddress, [a.locality, a.postalCode].filter(Boolean).join(' '), a.region, a.countryName].filter(Boolean);
};

const NAV = [
  { key: 'products', label: 'Products', path: 'products/' },
  { key: 'services', label: 'Services', path: 'services/' },
  { key: 'industries', label: 'Industries', path: 'industries/' },
  { key: 'resources', label: 'Resources', path: 'resources/' },
  { key: 'about', label: 'About', path: 'about/' },
  { key: 'contact', label: 'Contact', path: 'contact/' },
];

const BRAND_MARK = '<svg viewBox="0 0 40 40" fill="none"><path d="M20 4 33 11.5v15L20 34 7 26.5v-15z" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="5" stroke="currentColor" stroke-width="2" opacity=".55"/></svg>';

/* ── <head> ─────────────────────────────────────────────── */
function head(c) {
  const p = c.page;
  const canonical = c.abs(p.path);
  const ogImage = c.abs(p.ogImage || SITE.ogImage);
  const robots = p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1';
  const ga = INTEGRATIONS.gaMeasurementId;
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0A0A0A">
<!-- Scroll/load animations start from a hidden state, so only arm them when JS can finish them. -->
<script>document.documentElement.classList.add('js')</script>

<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<meta name="robots" content="${robots}">
${p.noindex ? '' : `<link rel="canonical" href="${canonical}">\n`}
<meta property="og:type" content="${p.article ? 'article' : 'website'}">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="${SITE.locale}">
<meta property="og:title" content="${esc(p.ogTitle || p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="${SITE.ogImageWidth}">
<meta property="og:image:height" content="${SITE.ogImageHeight}">
<meta property="og:image:alt" content="SK Polymers — PTFE &amp; Teflon products manufacturer">
${p.article ? `<meta property="article:published_time" content="${p.published}">\n<meta property="article:modified_time" content="${p.updated}">\n` : ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.ogTitle || p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${ogImage}">
${INTEGRATIONS.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(INTEGRATIONS.googleSiteVerification)}">\n` : ''}${INTEGRATIONS.bingSiteVerification ? `<meta name="msvalidate.01" content="${esc(INTEGRATIONS.bingSiteVerification)}">\n` : ''}
<link rel="icon" href="${c.asset('static/images/favicon.svg')}" type="image/svg+xml">
<link rel="icon" href="${c.asset('static/images/icons/favicon-48.png')}" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="${c.asset('static/images/icons/apple-touch-icon.png')}">
<link rel="manifest" href="${c.r('site.webmanifest')}">
<link rel="preload" href="${c.r('static/fonts/inter-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${c.r('static/fonts/space-grotesk-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${c.asset('static/css/style.css')}">
${ga ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(ga)}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(ga)}');</script>
` : ''}
<script type="application/ld+json">
${jsonLd(c)}
</script>
</head>`;
}

/* ── header + mobile nav ────────────────────────────────── */
function header(c) {
  const p = c.page;
  const quoteHref = p.enquiry !== undefined ? '#enquiry' : `${c.r('contact/')}#enquiry`;
  const link = (n) => {
    const on = p.nav === n.key;
    const current = p.path === n.path ? ' aria-current="page"' : '';
    return `<a href="${c.r(n.path)}"${on ? ' class="is-active"' : ''}${current}>${n.label}</a>`;
  };
  return `<a class="skip-link" href="#main">Skip to main content</a>

${SPRITE}

<div class="scroll-progress" id="scrollProgress" role="presentation"><span></span></div>

<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a class="brand" href="${c.r('')}">
      <span class="brand-mark" aria-hidden="true">${BRAND_MARK}</span>
      <span class="brand-text">
        <span class="brand-name">SK <em>Polymers</em></span>
        <span class="brand-sub">PTFE &amp; Teflon Manufacturing</span>
      </span>
    </a>

    <nav class="primary-nav" id="primaryNav" aria-label="Primary">
      <ul>
        ${NAV.map((n) => `<li>${link(n)}</li>`).join('\n        ')}
      </ul>
      <span class="nav-indicator" id="navIndicator" aria-hidden="true"></span>
    </nav>

    <div class="header-actions">
      <a class="header-phone" href="${telHref}" aria-label="Call SK Polymers on ${BUSINESS.phoneDisplay}">
        ${icon('phone')}
        <span>${BUSINESS.phoneDisplay}</span>
      </a>
      <a class="btn btn-accent btn-sm" href="${quoteHref}" data-quote-trigger>Get a Quote</a>
      <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
        <span class="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
    </div>
  </div>
</header>

<div class="mobile-nav-backdrop" id="mobileNavBackdrop" hidden></div>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile" hidden>
  <div class="mobile-nav-head">
    <span class="eyebrow">Menu</span>
    <button class="icon-btn" id="navClose" aria-label="Close menu">${icon('close')}</button>
  </div>
  <ul class="mobile-nav-list">
    <li><a href="${c.r('')}"><span class="idx">00</span> Home</a></li>
    ${NAV.map((n, i) => `<li><a href="${c.r(n.path)}"${p.path === n.path ? ' aria-current="page"' : ''}><span class="idx">0${i + 1}</span> ${n.label}</a></li>`).join('\n    ')}
  </ul>
  <div class="mobile-nav-foot">
    <a class="btn btn-accent btn-block" href="${quoteHref}" data-quote-trigger>Request a Free Quote</a>
    <div class="mobile-nav-links">
      <a href="${telHref}">${icon('phone')} Call us</a>
      <a href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp</a>
    </div>
  </div>
</nav>`;
}

/* ── footer + floating actions ──────────────────────────── */
function footer(c) {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand brand-footer" href="${c.r('')}">
        <span class="brand-mark" aria-hidden="true">${BRAND_MARK}</span>
        <span class="brand-text"><span class="brand-name">SK <em>Polymers</em></span></span>
      </a>
      <p class="footer-about">Manufacturer of PTFE &amp; Teflon products — sheets, rods, tubes, gaskets, bushes, seals and custom-machined components — from Babosa Industrial Park, Kalyan Bhiwandi Bypass, Maharashtra.</p>
      <a class="footer-wa" href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} Chat on WhatsApp</a>
    </div>

    <nav class="footer-col" aria-label="Products">
      <h2 class="footer-title">Products</h2>
      <ul>
        ${PRODUCTS.filter((p) => p.path.startsWith('products/') && !p.path.includes('#')).map((p) => `<li><a href="${c.r(p.path)}">${esc(p.name)}</a></li>`).join('\n        ')}
        <li><a href="${c.r('products/')}">All PTFE products</a></li>
      </ul>
    </nav>

    <nav class="footer-col" aria-label="Company">
      <h2 class="footer-title">Company</h2>
      <ul>
        <li><a href="${c.r('services/custom-ptfe-machining/')}">Custom PTFE Machining</a></li>
        <li><a href="${c.r('services/')}">Manufacturing Services</a></li>
        <li><a href="${c.r('industries/')}">Industries Served</a></li>
        <li><a href="${c.r('about/')}">About SK Polymers</a></li>
        <li><a href="${c.r('contact/')}">Contact &amp; Enquiries</a></li>
      </ul>
    </nav>

    <nav class="footer-col" aria-label="Technical resources">
      <h2 class="footer-title">Resources</h2>
      <ul>
        ${ARTICLES.map((a) => `<li><a href="${c.r(a.path)}">${esc(a.title.split(':')[0])}</a></li>`).join('\n        ')}
      </ul>
    </nav>

    <div class="footer-col">
      <h2 class="footer-title">Contact</h2>
      <ul class="footer-contact">
        <li>${icon('phone')}<a href="${telHref}">${BUSINESS.phoneDisplay}</a></li>
        <li>${icon('mail')}<a href="${mailHref}">${BUSINESS.email}</a></li>
        <li>${icon('pin')}<span>${addressLines().map(esc).join(',<br>')}</span></li>
        <li>${icon('clock')}<span>${BUSINESS.hoursShort}</span></li>
      </ul>
    </div>
  </div>

  <div class="container footer-bottom">
    <p>© <span id="year">${year}</span> SK Polymers. All rights reserved.</p>
    <p class="footer-legal">
      <a class="linklike" href="${c.r('privacy/')}">Privacy Policy</a>
      <span aria-hidden="true">·</span>
      <a class="linklike" href="${c.r('terms/')}">Terms of Use</a>
    </p>
  </div>
</footer>

<a class="whatsapp-float" href="${waHref()}" target="_blank" rel="noopener" aria-label="Chat with SK Polymers on WhatsApp">
  ${icon('whatsapp')}
  <span class="whatsapp-tip" aria-hidden="true">Chat on WhatsApp</span>
</a>

<button class="to-top" id="toTop" type="button" aria-label="Back to top">
  ${icon('arrow-up')}
</button>`;
}

const LIGHTBOX = `<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" hidden>
  <div class="modal-backdrop" data-close-lightbox></div>
  <figure class="lightbox-figure">
    <img id="lightboxImg" alt="">
    <figcaption id="lightboxCaption"></figcaption>
  </figure>
  <button class="icon-btn lightbox-close" type="button" data-close-lightbox aria-label="Close viewer">${icon('close')}</button>
  <button class="icon-btn lightbox-nav lightbox-prev" type="button" id="lbPrev" aria-label="Previous image">${icon('chev-left')}</button>
  <button class="icon-btn lightbox-nav lightbox-next" type="button" id="lbNext" aria-label="Next image">${icon('chev-right')}</button>
  <p class="lightbox-count" id="lightboxCount"></p>
</div>`;

/* ── full document ──────────────────────────────────────── */
export function renderPage(c) {
  const p = c.page;
  const body = p.body(c);
  const enquiry = p.enquiry !== undefined ? enquirySection(c, { product: p.enquiry, ...(p.enquiryOptions || {}) }) : '';
  return `<!DOCTYPE html>
<!-- Generated by build.mjs from src/ — edit the source files, not this output. -->
<html lang="${SITE.lang}">
${head(c)}
<body>

${header(c)}

<main id="main">
${body}
${enquiry}
</main>

${footer(c)}
${p.gallery ? `\n${LIGHTBOX}\n` : ''}
<script src="${c.asset('static/js/style.js')}" defer></script>
</body>
</html>
`;
}

/* ── components for page bodies ─────────────────────────── */

export function breadcrumbs(c) {
  const trail = [['Home', ''], ...(c.page.breadcrumbs || [])];
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        ${trail.map(([name, path], i) => i === trail.length - 1
          ? `<li><span aria-current="page">${esc(name)}</span></li>`
          : `<li><a href="${c.r(path)}">${esc(name)}</a></li>`).join('\n        ')}
      </ol>
    </nav>`;
}

/* Compact dark hero for inner pages: breadcrumb, eyebrow, H1, lede, actions, optional illustration. */
export function pageHero(c, { eyebrow = '', title, lede = '', actions, media } = {}) {
  const defaultActions = `<a class="btn btn-accent" href="${c.page.enquiry !== undefined ? '#enquiry' : `${c.r('contact/')}#enquiry`}" data-quote-trigger>Request a Quote ${icon('arrow-right')}</a>
        <a class="btn btn-ghost" href="${waHref(`Hello SK Polymers, I have an enquiry about ${c.page.waTopic || 'PTFE products'}.`)}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp</a>`;
  return `<section class="page-hero${media ? ' page-hero-media' : ''}" aria-labelledby="pageTitle">
  <div class="hero-bg" aria-hidden="true"><span class="hero-grid"></span><span class="hero-glow"></span></div>
  <div class="container page-hero-inner">
    <div class="page-hero-copy">
      ${breadcrumbs(c)}
      ${eyebrow ? `<p class="eyebrow eyebrow-accent"><span class="eyebrow-rule" aria-hidden="true"></span>${eyebrow}</p>` : ''}
      <h1 class="page-title" id="pageTitle">${title}</h1>
      ${lede ? `<p class="page-lede">${lede}</p>` : ''}
      <div class="hero-actions">
        ${actions === undefined ? defaultActions : actions}
      </div>
    </div>
    ${media ? `<div class="page-hero-visual"><img src="${c.asset(media.src)}" alt="${esc(media.alt)}" width="${media.width || 640}" height="${media.height || 480}" fetchpriority="high"></div>` : ''}
  </div>
</section>`;
}

/* Accessible FAQ accordion (same markup/behaviour as the home page). Answers stay in the HTML for crawlers. */
let faqCounter = 0;
export function faqList(items) {
  return `<div class="faq-list">
${items.map(({ q, a }) => {
    const n = ++faqCounter;
    return `      <div class="faq-item">
        <h3><button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-a${n}" id="faq-q${n}">${q}<span class="faq-icon" aria-hidden="true"></span></button></h3>
        <div class="faq-a" id="faq-a${n}" role="region" aria-labelledby="faq-q${n}" hidden>
          ${a.trim().startsWith('<') ? a : `<p>${a}</p>`}
        </div>
      </div>`;
  }).join('\n')}
    </div>`;
}
export const resetFaqCounter = () => { faqCounter = 0; };

export function faqSection(c, { title = 'Frequently <span class="hl">Asked</span>', lede = '', items, tint = false }) {
  return `<section class="section ${tint ? 'section-tint' : 'section-light'}" aria-labelledby="faqTitle">
  <div class="container faq-layout">
    <div class="faq-intro">
      <p class="eyebrow">Common Questions</p>
      <h2 class="section-title" id="faqTitle">${title}</h2>
      ${lede ? `<p class="section-lede">${lede}</p>` : ''}
      <a class="btn btn-dark" href="${c.page.enquiry !== undefined ? '#enquiry' : `${c.r('contact/')}#enquiry`}" data-quote-trigger>Ask a Question ${icon('arrow-right')}</a>
    </div>
    ${faqList(items)}
  </div>
</section>`;
}

/* Grid of link cards — used for related products, articles and services. items: [{path, title, text, label}] */
export function linkCards(c, items, { headingLevel = 3 } = {}) {
  const h = `h${headingLevel}`;
  return `<ul class="link-grid">
${items.map((it) => `      <li><a class="link-card" href="${c.r(it.path)}">
        ${it.label ? `<span class="link-card-label">${esc(it.label)}</span>` : ''}
        <${h} class="link-card-title">${esc(it.title)}</${h}>
        ${it.text ? `<span class="link-card-text">${esc(it.text)}</span>` : ''}
        <span class="link-card-more">Read more ${icon('arrow-right')}</span>
      </a></li>`).join('\n')}
    </ul>`;
}

export function relatedProducts(c, slugs, title = 'Related <span class="hl">Products</span>') {
  const items = slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean)
    .map((p) => ({ path: p.path, title: p.name, text: p.card, label: p.tag }));
  return `<section class="section section-tint" aria-labelledby="relatedTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Keep Exploring</p>
      <h2 class="section-title" id="relatedTitle">${title}</h2>
    </div>
    ${linkCards(c, items)}
  </div>
</section>`;
}

export function relatedArticles(c, slugs, title = 'Technical <span class="hl">Guides</span>') {
  const items = slugs.map((s) => ARTICLES.find((a) => a.slug === s)).filter(Boolean)
    .map((a) => ({ path: a.path, title: a.title, text: a.blurb, label: 'Guide' }));
  return `<section class="section section-light" aria-labelledby="guidesTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Resources</p>
      <h2 class="section-title" id="guidesTitle">${title}</h2>
    </div>
    ${linkCards(c, items)}
  </div>
</section>`;
}

/* Two-column key/value table. rows: [[label, value], …] — values may contain HTML. */
export function specTable(rows, caption = '') {
  return `<div class="table-wrap"><table class="spec-table">
      ${caption ? `<caption>${caption}</caption>` : ''}
      <tbody>
${rows.map(([k, v]) => `        <tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('\n')}
      </tbody>
    </table></div>`;
}

/* Multi-column table. head: [..], rows: [[..], ..] */
export function dataTable(head, rows, caption = '') {
  return `<div class="table-wrap"><table class="data-table">
      ${caption ? `<caption>${caption}</caption>` : ''}
      <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>
${rows.map((r) => `        <tr>${r.map((v, i) => (i === 0 ? `<th scope="row">${v}</th>` : `<td>${v}</td>`)).join('')}</tr>`).join('\n')}
      </tbody>
    </table></div>`;
}

export const chips = (items) => `<ul class="spec-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

/* Dark call-to-action band. */
export function ctaBand(c, { eyebrow = 'Custom Requirements', title = 'Need Custom PTFE Components?', lede = 'Send your dimensions, drawing or application details. We will recommend a suitable grade and quote for manufacture.' } = {}) {
  return `<section class="cta" aria-labelledby="ctaTitle">
  <div class="cta-bg" aria-hidden="true"><span class="cta-grid"></span><span class="cta-sweep"></span></div>
  <div class="container cta-inner">
    <p class="eyebrow eyebrow-accent">${eyebrow}</p>
    <h2 class="cta-title" id="ctaTitle">${title}</h2>
    <p class="cta-lede">${lede}</p>
    <div class="cta-actions">
      <a class="btn btn-accent" href="${c.page.enquiry !== undefined ? '#enquiry' : `${c.r('contact/')}#enquiry`}" data-quote-trigger>Request a Free Quote ${icon('arrow-right')}</a>
      <a class="btn btn-ghost" href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp Us</a>
      <a class="btn btn-ghost" href="${telHref}">${icon('phone')} ${BUSINESS.phoneDisplay}</a>
    </div>
  </div>
</section>`;
}

/* Contact rows used on the home page and contact page. */
export function contactList() {
  return `<ul class="contact-list">
          <li class="contact-row">
            <span class="contact-icon">${icon('phone')}</span>
            <span class="contact-body"><span class="contact-label">Phone</span><a class="contact-value" href="${telHref}">${BUSINESS.phoneDisplay}</a></span>
          </li>
          <li class="contact-row">
            <span class="contact-icon">${icon('whatsapp')}</span>
            <span class="contact-body"><span class="contact-label">WhatsApp</span><a class="contact-value" href="${waHref()}" target="_blank" rel="noopener">${BUSINESS.phoneDisplay}</a></span>
          </li>
          <li class="contact-row">
            <span class="contact-icon">${icon('mail')}</span>
            <span class="contact-body"><span class="contact-label">Email</span><a class="contact-value" href="${mailHref}">${BUSINESS.email}</a></span>
          </li>
          <li class="contact-row">
            <span class="contact-icon">${icon('pin')}</span>
            <span class="contact-body"><span class="contact-label">Location</span><span class="contact-value">${addressLines().map(esc).join(', ')}</span><a class="contact-maplink" href="${BUSINESS.mapsLink}" target="_blank" rel="noopener">Open in Google Maps</a></span>
          </li>
          <li class="contact-row">
            <span class="contact-icon">${icon('clock')}</span>
            <span class="contact-body"><span class="contact-label">Business Hours</span><span class="contact-value">${BUSINESS.hoursDisplay}</span></span>
          </li>
        </ul>`;
}

/* The enquiry form. Delivery is email-based: style.js validates, then opens the visitor's
   mail client with the enquiry pre-filled (no backend). */
export function enquiryForm(product = '') {
  return `<form class="enquiry-form" id="enquiryForm" novalidate data-mailto="${BUSINESS.email}" data-whatsapp="${BUSINESS.whatsapp}" data-phone="${BUSINESS.phoneDisplay}">
          <p class="form-intro">Send your requirement — sizes, grade, quantity or a drawing reference — and we will reply with a quotation.</p>

          <div class="form-row">
            <div class="field">
              <label for="f-name">Full Name <span class="req" aria-hidden="true">*</span></label>
              <input id="f-name" name="name" type="text" autocomplete="name" required aria-describedby="e-name">
              <p class="field-error" id="e-name" hidden>Please enter your name.</p>
            </div>
            <div class="field">
              <label for="f-company">Company</label>
              <input id="f-company" name="company" type="text" autocomplete="organization">
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-phone">Phone <span class="req" aria-hidden="true">*</span></label>
              <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required aria-describedby="e-phone">
              <p class="field-error" id="e-phone" hidden>Please enter a valid phone number.</p>
            </div>
            <div class="field">
              <label for="f-email">Email <span class="req" aria-hidden="true">*</span></label>
              <input id="f-email" name="email" type="email" autocomplete="email" required aria-describedby="e-email">
              <p class="field-error" id="e-email" hidden>Please enter a valid email address.</p>
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="f-product">Product / Service</label>
              <select id="f-product" name="product">
                <option value="">Select an option</option>
                ${ENQUIRY_OPTIONS.map((o) => `<option value="${o.value}"${o.value === product ? ' selected' : ''}>${esc(o.label)}</option>`).join('\n                ')}
              </select>
            </div>
            <div class="field">
              <label for="f-qty">Quantity</label>
              <input id="f-qty" name="quantity" type="text" placeholder="e.g. 50 pcs / 200 kg">
            </div>
          </div>

          <div class="field">
            <label for="f-message">Requirement <span class="req" aria-hidden="true">*</span></label>
            <textarea id="f-message" name="message" rows="4" required aria-describedby="e-message" placeholder="Dimensions, grade, operating temperature/media, drawing details or application."></textarea>
            <p class="field-error" id="e-message" hidden>Please describe your requirement (at least 10 characters).</p>
          </div>

          <button class="btn btn-accent btn-block" type="submit" id="formSubmit">
            <span class="btn-label">Prepare Enquiry Email</span>
            ${icon('arrow-right', 'icon btn-icon')}
            <span class="spinner" aria-hidden="true"></span>
          </button>

          <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
          <p class="form-alt">The button opens your email app with the enquiry filled in. Prefer chat? <a href="${waHref()}" target="_blank" rel="noopener">Message us on WhatsApp</a> or call <a href="${telHref}">${BUSINESS.phoneDisplay}</a>.</p>
        </form>`;
}

export function enquirySection(c, { product = '', title = 'Request a <span class="hl">Quote</span>', lede = 'Tell us what you need. Drawings can be shared by email or WhatsApp after you send the enquiry.' } = {}) {
  return `<section class="section section-light" id="enquiry" aria-labelledby="enquiryTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Enquiry</p>
      <h2 class="section-title" id="enquiryTitle">${title}</h2>
      <p class="section-lede">${lede}</p>
    </div>
    <div class="contact-grid">
      <div class="contact-info">
        ${contactList()}
      </div>
      <div class="contact-form-wrap">
        ${enquiryForm(product)}
      </div>
    </div>
  </div>
</section>`;
}
