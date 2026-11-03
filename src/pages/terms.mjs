import { pageHero } from '../layout.mjs';
import { BUSINESS } from '../config.mjs';

export default {
  path: 'terms/',
  title: 'Terms of Use | SK Polymers',
  description: 'Terms of use for the SK Polymers website, including how product information, technical guidance and specifications on this site should be used.',
  breadcrumbs: [['Terms of Use', 'terms/']],
  updated: '2026-11-03',
  body: (c) => `
${pageHero(c, { eyebrow: 'Legal', title: 'Terms of <span class="hl">Use</span>', lede: 'Last updated 3 November 2026.', actions: '' })}

<section class="section section-light" aria-label="Terms of use">
  <div class="container">
    <div class="prose">
      <p>The content of this website is provided for general information about SK Polymers’ products and manufacturing services.</p>

      <h2>Product information</h2>
      <p>Specifications, grades, dimensions and size ranges shown on this site are indicative. Confirmed specifications, pricing and delivery times are provided in a written quotation for your specific requirement.</p>

      <h2>Technical guidance</h2>
      <p>Material properties in our product pages and technical guides are typical values from published data, intended as design guidance only. Guidance on grade selection is offered in good faith; final responsibility for verifying that a material suits your application, operating conditions and regulatory requirements rests with the buyer.</p>

      <h2>Trademarks</h2>
      <p>Teflon™ is a trademark of The Chemours Company. It is used on this site only to describe PTFE material generically; SK Polymers is not affiliated with Chemours.</p>

      <h2>Intellectual property</h2>
      <p>All text, imagery and technical illustrations on this site remain the property of SK Polymers unless stated otherwise.</p>

      <h2>Contact</h2>
      <p>Questions about these terms: <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.</p>
    </div>
  </div>
</section>`,
};
