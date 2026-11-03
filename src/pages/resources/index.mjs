import { pageHero, linkCards, relatedProducts, ctaBand } from '../../layout.mjs';
import { ARTICLES } from '../../data/catalogue.mjs';

export default {
  path: 'resources/',
  nav: 'resources',
  schemaType: 'CollectionPage',
  title: 'PTFE Technical Guides for Engineers & Buyers | SK Polymers',
  description: 'Practical PTFE guides: material properties, virgin vs filled grades, chemical resistance, PTFE vs PEEK, gasket selection and machining PTFE to tolerance.',
  breadcrumbs: [['Resources', 'resources/']],
  updated: '2026-11-03',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Resources · Technical Guides',
  title: 'PTFE <span class="hl">Technical Guides</span>',
  lede: 'Plain-language engineering guides to help you choose, specify and buy PTFE parts — written for design engineers, maintenance teams and procurement.',
  actions: '',
})}

<section class="section section-light" aria-labelledby="guidesListTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">All Guides</p>
      <h2 class="section-title" id="guidesListTitle">Choose a <span class="hl">Topic</span></h2>
      <p class="section-lede">Typical values in these guides come from published material data and are intended for design guidance. Always confirm suitability for your operating conditions.</p>
    </div>
    ${linkCards(c, ARTICLES.map((a) => ({ path: a.path, title: a.title, text: a.blurb, label: 'Guide' })))}
  </div>
</section>

${relatedProducts(c, ['ptfe-sheets', 'ptfe-gaskets', 'custom-ptfe-machining'], 'Products <span class="hl">Covered</span>')}
${ctaBand(c, { eyebrow: 'Technical Support', title: 'Have a Material Question?', lede: 'Send us your operating conditions and we will help you choose the right PTFE grade and product form.' })}`,
};
