import { pageHero, chips, faqSection, relatedProducts, icon } from '../../layout.mjs';

const SERVICES = [
  {
    id: 'custom-cutting', icon: 'cut', name: 'Custom Cutting',
    text: 'Sheet cut into strips, squares, discs, rings and gaskets; rod and tube cut to length. Cutting to size saves you material, handling and machining time.',
    chips: ['Sheet to size', 'Discs and rings', 'Gaskets to drawing', 'Rod and tube cut lengths'],
  },
  {
    id: 'cnc-machining', icon: 'cnc', name: 'CNC Machining', link: ['services/custom-ptfe-machining/', 'Custom PTFE machining in detail'],
    text: 'Turned and milled PTFE components — valve seats, bushes, seals, insulators, spacers and fixtures — machined from rod, tube or sheet to your drawing.',
    chips: ['CNC turning', 'CNC milling', 'Drilling and tapping', 'Prototypes to batches'],
  },
  {
    id: 'bulk-supply', icon: 'truck', name: 'Bulk & Repeat Supply',
    text: 'For plants and OEMs with ongoing requirements we quote volume pricing and can schedule repeat orders, so the same grade and dimensions arrive each time.',
    chips: ['Volume quotations', 'Scheduled call-offs', 'Same grade on repeat orders'],
  },
  {
    id: 'inspection', icon: 'shield', name: 'Inspection Before Dispatch',
    text: 'Parts are checked against your drawing or order before they are packed. If you need specific inspection records or material documentation, tell us at enquiry stage so it can be agreed in the quotation.',
    chips: ['Dimensional checks', 'Documentation agreed at quotation'],
  },
  {
    id: 'delivery', icon: 'globe', name: 'Pan-India Delivery & Export',
    text: 'We dispatch across India in industrial packing through logistics partners, and supply buyers in Bhiwandi, Thane and Mumbai locally. Export enquiries are welcome; packing, shipping terms and paperwork are agreed per order.',
    chips: ['Pan-India dispatch', 'Industrial packing', 'Export enquiries welcome'],
  },
  {
    id: 'technical-support', icon: 'headset', name: 'Grade Selection & Technical Support',
    text: 'Choosing between virgin and filled PTFE, or between a solid, envelope or machined design, depends on media, temperature, load and mating surfaces. Share your operating conditions and we will recommend a starting point.',
    chips: ['Grade selection', 'Product-form advice', 'Design for manufacture'],
  },
];

export default {
  path: 'services/',
  nav: 'services',
  title: 'PTFE Cutting, CNC Machining & Supply Services | SK Polymers',
  description: 'PTFE manufacturing services: custom cutting, CNC machining to drawing, bulk and repeat supply, inspection, pan-India delivery and grade selection support.',
  breadcrumbs: [['Services', 'services/']],
  updated: '2026-11-03',
  enquiry: '',
  waTopic: 'PTFE cutting or machining',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Services · From Stock to Finished Part',
  title: 'PTFE Manufacturing <span class="hl">Services</span>',
  lede: 'Cutting, CNC machining and supply services built around PTFE — so you can order stock material, cut blanks or finished components from one source.',
})}

<section class="section section-dark" aria-labelledby="servicesTitle">
  <div class="container">
    <div class="section-head section-head-center">
      <p class="eyebrow eyebrow-accent">What We Do</p>
      <h2 class="section-title" id="servicesTitle">Services for <span class="hl">PTFE Buyers</span></h2>
      <p class="section-lede">Most enquiries combine several of these — for example a filled-grade rod, machined into seals, inspected and delivered on a repeat schedule.</p>
    </div>
    <div class="service-grid">
${SERVICES.map((s, i) => `      <article class="service-card anchor-target" id="${s.id}">
        <span class="service-no">0${i + 1}</span>
        <span class="service-icon">${icon(s.icon)}</span>
        <h3 class="service-name">${s.name.replace('&', '&amp;')}</h3>
        <p class="service-desc">${s.text}</p>
        ${chips(s.chips)}
        ${s.link ? `<a class="link-btn link-btn-accent" href="${c.r(s.link[0])}">${s.link[1]} ${icon('arrow-right')}</a>` : ''}
      </article>`).join('\n')}
    </div>
  </div>
</section>

<section class="section section-light" aria-labelledby="processTitle">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How It Works</p>
      <h2 class="section-title" id="processTitle">From Enquiry to <span class="hl">Delivery</span></h2>
      <p class="section-lede">A simple process, whether you need one prototype or a repeat production order.</p>
    </div>
    <ol class="steps">
      <li class="step"><h3>Send your requirement</h3><p>Drawing, sample, dimensions or just the application. Use the form, email or WhatsApp.</p></li>
      <li class="step"><h3>Grade &amp; design advice</h3><p>We confirm the PTFE grade and product form, and flag anything that affects manufacture.</p></li>
      <li class="step"><h3>Quotation</h3><p>Price, grade, quantity and delivery time confirmed in writing.</p></li>
      <li class="step"><h3>Manufacture</h3><p>Material cut, moulded or machined to your specification.</p></li>
      <li class="step"><h3>Inspection &amp; dispatch</h3><p>Checked against the order, packed for transit and dispatched.</p></li>
    </ol>
  </div>
</section>

<section class="section section-tint" aria-labelledby="sendTitle">
  <div class="container content-layout">
    <div class="prose">
      <h2 id="sendTitle">What to send for an accurate quote</h2>
      <ul>
        <li><strong>A drawing or sketch</strong> with dimensions — or a sample we can measure.</li>
        <li><strong>Material grade</strong>, if specified. If not, the operating media, temperature, pressure or load.</li>
        <li><strong>Quantity</strong> and whether it is a one-off, a batch or a repeat requirement.</li>
        <li><strong>Critical dimensions and tolerances</strong>, so we can confirm what can be held in PTFE.</li>
        <li><strong>Documentation needs</strong>, such as inspection records or material declarations.</li>
      </ul>
      <p>For machined parts, our <a href="${c.r('resources/machining-ptfe/')}">PTFE machining design guide</a> explains why PTFE tolerances need more care than metals, and how to specify parts that can be held to drawing.</p>
    </div>
    <aside class="content-aside" aria-label="Service quick links">
      <div class="aside-card">
        <p class="aside-title">Machined parts</p>
        <p>Valve seats, seals, bushes, insulators and fixtures made to your drawing.</p>
        <a class="btn btn-accent" href="${c.r('services/custom-ptfe-machining/')}">Custom PTFE Machining ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'Service <span class="hl">FAQs</span>',
  items: [
    { q: 'Do you take small or prototype orders?', a: 'Yes. Send the drawing and quantity — prototypes and small batches are quoted the same way as production orders.' },
    { q: 'Can you work from a sample instead of a drawing?', a: 'Yes. A sample part can be measured and reproduced. Tell us which dimensions are critical, and the operating conditions, so the right grade is used.' },
    { q: 'How long will my order take?', a: 'It depends on stock, quantity and the amount of machining. The delivery time is confirmed in writing with your quotation.' },
    { q: 'Do you deliver outside Maharashtra?', a: 'Yes — we dispatch across India, and export enquiries are welcome.' },
  ],
})}

${relatedProducts(c, ['custom-ptfe-machining', 'ptfe-rods', 'ptfe-sheets'], 'Popular <span class="hl">Starting Points</span>')}`,
};
