import { pageHero, dataTable, chips, faqSection, relatedArticles, icon, esc } from '../../layout.mjs';
import { PRODUCTS } from '../../data/catalogue.mjs';
import { GRADE_HEAD, GRADE_ROWS, GRADE_NOTE } from '../../data/ptfe.mjs';

export default {
  path: 'products/',
  nav: 'products',
  schemaType: 'CollectionPage',
  title: 'PTFE Products Manufacturer – Sheets, Rods, Gaskets | SK Polymers',
  description: 'PTFE (Teflon) products from SK Polymers: sheets, rods, tubes, gaskets, bushes, seals, turling and custom-machined parts in virgin and filled grades. Get a quote.',
  breadcrumbs: [['Products', 'products/']],
  updated: '2026-11-03',
  enquiry: '',
  waTopic: 'PTFE products',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Products · PTFE &amp; Teflon',
  title: 'PTFE <span class="hl">Products</span>',
  lede: 'Every product we make starts as PTFE — virgin or filled. Choose the form that suits your part: sheet for gaskets and pads, rod for turned components, tube for fluid lines, or finished seals, bushes and machined parts.',
})}

<section class="section section-light" aria-labelledby="rangeTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Product Range</p>
      <h2 class="section-title" id="rangeTitle">Choose a <span class="hl">Product Form</span></h2>
      <p class="section-lede">Each product page covers grades, applications, supply options and what to include in an enquiry.</p>
    </div>
    <div class="product-grid">
${PRODUCTS.map((p, i) => `      <article class="product-card">
        <div class="product-media"><img src="${c.asset(p.img)}" alt="${esc(p.alt)}" loading="${i < 4 ? 'eager' : 'lazy'}" width="640" height="480" decoding="async"></div>
        <div class="product-body">
          <div class="product-meta"><span class="product-no">0${i + 1}</span><span class="product-tag">${esc(p.tag)}</span></div>
          <h3 class="product-name"><a href="${c.r(p.path)}">${esc(p.name)}</a></h3>
          <p class="product-desc">${esc(p.card)}</p>
          <div class="product-actions">
            <a class="link-btn" href="${c.r(p.path)}" aria-label="View Details: ${esc(p.name)}">View Details ${icon('arrow-right')}</a>
            <button class="link-btn link-btn-accent" type="button" data-enquire="${p.slug}" aria-label="Enquire Now: ${esc(p.name)}">Enquire Now</button>
          </div>
        </div>
      </article>`).join('\n')}
    </div>
  </div>
</section>

<section class="section section-tint" aria-labelledby="selectTitle">
  <div class="container content-layout">
    <div class="prose">
      <h2 id="selectTitle">Which PTFE product form do you need?</h2>
      ${dataTable(['If you need…', 'Start with', 'Why'], [
        [`Flange gaskets, washers, liners or slide pads`, `<a href="${c.r('products/ptfe-sheets/')}">PTFE sheet</a> or <a href="${c.r('products/ptfe-gaskets/')}">cut gaskets</a>`, 'Flat parts are cut from moulded or skived sheet.'],
        [`Turned parts — valve seats, spacers, bushes`, `<a href="${c.r('products/ptfe-rods/')}">PTFE rod</a>`, 'Rod is the most economical stock for round machined parts.'],
        [`Corrosive fluid transfer, sleeving or instrument lines`, `<a href="${c.r('products/ptfe-tubes/')}">PTFE tube or pipe</a>`, 'Inert bore with a wide temperature range.'],
        [`Dry-running, low-friction bearings`, `<a href="${c.r('products/ptfe-bushes/')}">PTFE bushes</a>`, 'Self-lubricating; filled grades carry more load.'],
        [`Seals for aggressive media or extreme temperature`, `<a href="${c.r('products/ptfe-seals/')}">PTFE seals &amp; O-rings</a>`, 'Works where elastomers swell or harden.'],
        [`A part made to your drawing`, `<a href="${c.r('services/custom-ptfe-machining/')}">Custom machining</a>`, 'We select the stock and machine the finished part.'],
      ])}

      <h2>PTFE grades we work with</h2>
      <p>Every product form is available in virgin PTFE, and most in filled grades. Fillers change how PTFE behaves under load, wear and heat — a quick comparison:</p>
      ${dataTable(GRADE_HEAD, GRADE_ROWS, GRADE_NOTE)}
      <p>For a deeper comparison, read <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>.</p>

      <h2 id="ptfe-turling" class="anchor-target">PTFE turling and granules</h2>
      <p>Machining PTFE produces clean turnings (turling). We supply PTFE turling and granules in bulk for reprocessing, resin blending, powder sintering and filler compounding. Material can be sorted by grade — virgin turnings are kept separate from filled grades.</p>
      ${chips(['Virgin turning scrap', 'Mixed filled turnings', 'Granulated PTFE', 'Bulk packing', 'Sorted by grade', 'Granule size on request'])}
      <p>Send the grade, quantity and intended use, and we will confirm what is available.</p>
    </div>

    <aside class="content-aside" aria-label="Product quick links">
      <div class="aside-card">
        <p class="aside-title">Products</p>
        <nav class="aside-links" aria-label="Product pages">
${PRODUCTS.map((p) => `          <a href="${c.r(p.path)}">${esc(p.name)}</a>`).join('\n')}
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Not sure what you need?</p>
        <p>Describe the application — media, temperature, load — and we will suggest a product and grade.</p>
        <a class="btn btn-accent" href="#enquiry" data-quote-trigger>Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Product <span class="hl">FAQs</span>',
  items: [
    { q: 'Is Teflon the same as PTFE?', a: 'Teflon™ is a trademark of The Chemours Company for its fluoropolymer products, including PTFE. In everyday industrial use “Teflon sheet” or “Teflon rod” usually means PTFE. We manufacture and supply PTFE products; we do not sell the branded product.' },
    { q: 'Can you supply both stock shapes and finished parts?', a: `Yes — sheets, rods and tubes as stock or cut to size, and finished gaskets, seals, bushes and <a href="${c.r('services/custom-ptfe-machining/')}">machined components</a> made to your drawing.` },
    { q: 'Which grade should I choose?', a: 'Virgin PTFE gives the best chemical resistance and electrical insulation. Choose a filled grade when the part carries load, wears against another surface or must resist creep. Share the application and we will recommend a grade.' },
    { q: 'Do you sell PTFE scrap or turling?', a: 'Yes. We supply PTFE turnings and granules in bulk, sorted by grade, for reprocessing and compounding.' },
  ],
})}

${relatedArticles(c, ['ptfe-properties', 'virgin-vs-filled-ptfe', 'ptfe-chemical-resistance'])}`,
};
