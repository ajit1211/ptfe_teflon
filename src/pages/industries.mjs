import { pageHero, ctaBand, relatedArticles, icon } from '../layout.mjs';

const P = {
  sheets: ['products/ptfe-sheets/', 'Sheets'], rods: ['products/ptfe-rods/', 'Rods'], tubes: ['products/ptfe-tubes/', 'Tubes'],
  gaskets: ['products/ptfe-gaskets/', 'Gaskets'], bushes: ['products/ptfe-bushes/', 'Bushes'], seals: ['products/ptfe-seals/', 'Seals'],
  custom: ['services/custom-ptfe-machining/', 'Machined parts'],
};

const INDUSTRIES = [
  { id: 'chemical-processing', icon: 'flask', name: 'Chemical Processing', products: ['gaskets', 'seals', 'tubes', 'sheets'],
    text: 'PTFE resists almost every acid, alkali and solvent used in chemical plants, so it is the default choice for flange gaskets, pump and valve seals, transfer tubing and linings in corrosive service.' },
  { id: 'oil-gas', icon: 'oil', name: 'Oil &amp; Gas', products: ['seals', 'gaskets', 'custom'],
    text: 'Valve seats, back-up rings and seals in filled PTFE handle hydrocarbons, sour media and wide temperature swings, where elastomer seals can swell or harden.' },
  { id: 'aerospace', icon: 'plane', name: 'Aerospace', products: ['custom', 'tubes', 'bushes'],
    text: 'Low weight, low friction and stable electrical properties make PTFE useful for insulators, sleeving, bushes and machined components — built to the customer’s drawing and specification.' },
  { id: 'pharmaceuticals', icon: 'pill', name: 'Pharmaceuticals', products: ['gaskets', 'seals', 'custom'],
    text: 'Virgin PTFE is widely specified for gaskets, seals and contact parts in reactors and process lines because it is inert and easy to clean. Ask for the compliance documentation your application requires before ordering.' },
  { id: 'electrical-electronics', icon: 'chip', name: 'Electronics &amp; Electrical', products: ['sheets', 'rods', 'tubes', 'custom'],
    text: 'A low dielectric constant and high resistivity across a wide temperature range suit PTFE to insulating washers, spacers, terminal blocks, barriers and cable sleeving.' },
  { id: 'food-beverage', icon: 'food', name: 'Food &amp; Beverage', products: ['sheets', 'gaskets', 'custom'],
    text: 'Non-stick PTFE surfaces, scrapers, guides and seals help product release cleanly and tolerate cleaning chemicals. Confirm food-contact documentation for your requirement at enquiry stage.' },
  { id: 'automotive', icon: 'car', name: 'Automotive', products: ['bushes', 'seals', 'tubes'],
    text: 'Low-friction bushes, washers, seals and fluid tubing — typically in filled grades where wear resistance and dimensional stability under load matter.' },
  { id: 'water-treatment', icon: 'drop', name: 'Water Treatment', products: ['gaskets', 'tubes', 'seals'],
    text: 'Dosing lines, valve seals and gaskets for chlorine, hypochlorite, acids and other treatment chemicals benefit from PTFE’s chemical inertness.' },
  { id: 'power-generation', icon: 'power', name: 'Power Generation', products: ['gaskets', 'bushes', 'sheets'],
    text: 'Gaskets, slide pads and bearings for steam, cooling water and chemical-dosing systems, plus electrical insulation in switchgear and auxiliary equipment.' },
  { id: 'construction-infrastructure', icon: 'helmet', name: 'Construction &amp; Infrastructure', products: ['sheets', 'bushes'],
    text: 'PTFE slide pads and bearing elements let structures, pipe supports and expansion joints move with low friction under load.' },
  { id: 'marine', icon: 'anchor', name: 'Marine', products: ['bushes', 'seals', 'gaskets'],
    text: 'PTFE does not absorb water and resists seawater, so it is used for bushes, wear strips, seals and gaskets in pumps and deck equipment.' },
  { id: 'laboratory-semiconductor', icon: 'microscope', name: 'Laboratory &amp; Semiconductor', products: ['custom', 'tubes', 'rods'],
    text: 'High-purity virgin PTFE is used for wet-process fixtures, beakers, carriers, tubing and machined parts that must not contaminate aggressive chemistries.' },
];

export default {
  path: 'industries/',
  nav: 'industries',
  title: 'Industries Using PTFE Components | SK Polymers',
  description: 'How PTFE sheets, gaskets, seals, bushes, tubes and machined parts are used in chemical, pharma, oil & gas, food, electrical, water and engineering industries.',
  breadcrumbs: [['Industries', 'industries/']],
  updated: '2026-11-03',
  waTopic: 'PTFE parts for my industry',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Industries · Applications',
  title: 'Industries We <span class="hl">Supply</span>',
  lede: 'PTFE is chemically inert, thermally stable from cryogenic temperatures to about 260 °C, and has very low friction. Here is where those properties earn their place — and which of our products are used.',
})}

<section class="section section-light" aria-labelledby="industryListTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Applications by Industry</p>
      <h2 class="section-title" id="industryListTitle">Where PTFE <span class="hl">Is Used</span></h2>
      <p class="section-lede">Typical uses by sector. If your application is not listed, <a href="${c.r('contact/')}#enquiry">describe it to us</a> — PTFE’s combination of properties is useful far beyond these examples.</p>
    </div>
    <div class="industry-detail-grid">
${INDUSTRIES.map((ind) => `      <section class="industry-detail" id="${ind.id}" aria-labelledby="${ind.id}-title">
        <span class="industry-icon">${icon(ind.icon)}</span>
        <h3 id="${ind.id}-title">${ind.name}</h3>
        <p>${ind.text}</p>
        <ul class="spec-list" aria-label="Related products">${ind.products.map((k) => `<li><a href="${c.r(P[k][0])}">${P[k][1]}</a></li>`).join('')}</ul>
      </section>`).join('\n')}
    </div>
  </div>
</section>

${relatedArticles(c, ['ptfe-chemical-resistance', 'ptfe-gasket-selection', 'ptfe-vs-peek'], 'Guides for <span class="hl">Engineers</span>')}
${ctaBand(c, { eyebrow: 'Your Application', title: 'Have a PTFE Application in Mind?', lede: 'Tell us the media, temperature, pressure and load. We will suggest the right PTFE grade and product form, and quote for manufacture.' })}`,
};
