import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE } from '../../data/ptfe.mjs';

const BUSH_PROPERTIES = VIRGIN_PROPERTIES.filter(([k]) => [
  'Continuous service temperature',
  'Coefficient of friction (dynamic, on steel)',
  'Hardness',
  'Water absorption (24 h)',
  'Thermal expansion',
].includes(k));

export default {
  path: 'products/ptfe-bushes/',
  nav: 'products',
  title: 'PTFE Bushes & Bearings Manufacturer | SK Polymers',
  description: 'PTFE (Teflon) bushes and bearings — plain, flanged and split, in virgin or filled grades for dry-running, low-friction duty, machined to drawing. Get a quote.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Bushes', 'products/ptfe-bushes/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-bushes',
  waTopic: 'PTFE bushes',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Bushes · Bearings',
  title: 'PTFE Bushes <span class="hl">&amp; Bearings</span>',
  lede: 'Self-lubricating PTFE (Teflon) bushes in plain, flanged and split forms — machined from virgin or filled PTFE for dry-running, low-friction and chemically aggressive service.',
  media: { src: 'static/images/products/bushes.svg', alt: 'Illustration of plain and flanged PTFE bushes', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE bush details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">A PTFE bush runs without grease or oil, will not seize, and shrugs off chemicals that would ruin a bronze or nylon bearing. Those qualities make PTFE bearings a natural fit for food, chemical and wet environments, and for places where lubrication is impractical. As a PTFE bushes manufacturer, SK Polymers machines bushes to your drawing in the grade that suits the load and speed.</p>

      <h2>Types of PTFE bush</h2>
      <ul>
        <li><strong>Plain (sleeve) bushes</strong> — a simple cylinder pressed into a housing to support a rotating or sliding shaft.</li>
        <li><strong>Flanged bushes</strong> — a sleeve with a collar that also takes light axial (thrust) load and locates the bush in its housing.</li>
        <li><strong>Split bushes</strong> — slit along their length so they can be fitted over a shaft without dismantling the assembly, or to allow for expansion.</li>
        <li><strong>Thrust washers and wear strips</strong> — flat bearing elements cut from <a href="${c.r('products/ptfe-sheets/')}">PTFE sheet</a> for axial and linear sliding.</li>
      </ul>
      <p>Bushes are usually machined from <a href="${c.r('products/ptfe-rods/')}">rod</a> or thick-wall <a href="${c.r('products/ptfe-tubes/')}">tube</a>, which lets us produce one-off sizes as easily as standard ones.</p>

      <h2>Choosing a grade for bearings</h2>
      <p>Unfilled PTFE has very low friction, but on its own it wears quickly and creeps under load, so it is best kept for lightly loaded or chemically demanding duties. For most bearings a filled grade is the better choice:</p>
      ${dataTable(['Grade', 'Why choose it for a bush', 'Counterface notes'], [
        ['Virgin PTFE', 'Lightest loads; best chemical resistance; clean, non-contaminating', 'Wears fastest of all grades'],
        ['Glass-filled', 'General-purpose bearing grade with good wear and load capacity', 'Can abrade soft shafts — use a hardened or hard-faced shaft'],
        ['Carbon-filled', 'High load and wear resistance; good in water and steam; dissipates frictional heat', 'Works well against hardened steel and stainless shafts'],
        ['Bronze-filled', 'Highest load capacity and creep resistance; good heat dissipation', 'Reduced chemical resistance; not for acids or ammonia'],
        ['Graphite-filled', 'Lowest friction and good dry-running behaviour', 'Kinder to softer shafts; lower strength than carbon or bronze'],
      ], 'General guidance from published data. Confirm the grade for your load, speed, temperature and media.')}
      <p>See <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a> for more on how fillers change wear and creep, or <a href="${c.r('resources/ptfe-vs-peek/')}">PTFE vs PEEK</a> if your bearing load is high.</p>

      <h2>Applications</h2>
      <ul>
        <li><strong>Dry-running bearings</strong> — food machinery, packaging lines and textile equipment where oil would contaminate the product.</li>
        <li><strong>Bridge and structural bearings</strong> — PTFE sliding surfaces that let structures and pipe supports move with thermal expansion.</li>
        <li><strong>Pump wear rings and guide bushes</strong> — in pumps and agitators handling corrosive liquids.</li>
        <li><strong>Linear slides</strong> — low-friction guides and slide pads for machine slideways.</li>
        <li><strong>Valve stem guides</strong> — combined with <a href="${c.r('products/ptfe-seals/')}">PTFE seals</a> in chemical valves.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Plain, flanged and split bushes', 'Machined to drawing', 'Interference-fit sizing', 'Virgin and filled grades', 'Thrust washers', 'Prototype to repeat batches'])}
      <p class="callout">Send the shaft diameter, housing bore, length and grade — critical tolerances and fits are confirmed at quotation.</p>

      <h2>Design notes for PTFE bearings</h2>
      ${specTable(BUSH_PROPERTIES, PROPERTY_NOTE)}
      <h3>Pressure and speed (PV)</h3>
      <p>A PTFE bearing’s capacity is limited by the combination of bearing pressure (P) and sliding speed (V). Exceed the PV limit and frictional heat softens the PTFE and wear accelerates. Filled grades raise the limit considerably. Give us load and speed so we can check the duty.</p>
      <h3>Running clearance</h3>
      <p>PTFE expands roughly ten times as much as steel, so a bush needs more running clearance than a metal bearing, especially if it runs warm. Tight clearances that look right on the bench can close up and grip the shaft in service.</p>
      <h3>Press fits</h3>
      <p>When a bush is pressed into a housing, its bore closes in, and PTFE’s creep means interference can relax over time. Bushes are often sized with this in mind, or retained mechanically with a flange, shoulder or circlip. A smooth, hard shaft improves wear life with every grade.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Drawing or dimensions: shaft diameter, housing bore, length and any flange.</li>
        <li>Load, speed and whether motion is rotating, oscillating or linear.</li>
        <li>Operating temperature, media and whether the bearing runs dry.</li>
        <li>Shaft material and finish, if known.</li>
        <li>Quantity, and whether the requirement is one-off or repeat.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE bush summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Types', 'Plain, flanged and split bushes; thrust washers'],
          ['Grades', 'Virgin; glass, carbon, bronze and graphite filled'],
          ['Supply', 'Machined to drawing, interference-fit sizing'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-bushes">Request a Bush Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
          <a href="${c.r('resources/ptfe-vs-peek/')}">PTFE vs PEEK</a>
          <a href="${c.r('resources/machining-ptfe/')}">Machining PTFE</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Bush <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE bushes and bearings.',
  tint: true,
  items: [
    { q: 'Do PTFE bushes need lubrication?', a: 'No. PTFE is self-lubricating and most PTFE bushes run dry. A lubricant or process fluid can still reduce wear and heat at higher speeds, provided it is compatible with the grade.' },
    { q: 'Should I use virgin or filled PTFE for a bearing?', a: 'For most bearings a filled grade is better, because unfilled PTFE wears quickly and creeps under load. Virgin PTFE suits light loads where chemical resistance or purity is the priority.' },
    { q: 'Why does my PTFE bush grip the shaft when it warms up?', a: 'PTFE expands much more than steel with temperature, so a bush fitted with a metal-bearing clearance can close up in service. PTFE bushes need a larger running clearance; tell us the operating temperature so it can be allowed for.' },
    { q: 'Can you supply split or flanged PTFE bushes?', a: 'Yes. We machine plain, flanged and split bushes to your drawing, and can size them for an interference fit in your housing.' },
    { q: 'When is PTFE not the right bearing material?', a: `At high loads and speeds, or where stiffness is critical, a stronger polymer may be better. Our <a href="${c.r('resources/ptfe-vs-peek/')}">PTFE vs PEEK comparison</a> explains where each fits.` },
  ],
})}

${relatedProducts(c, ['ptfe-rods', 'ptfe-seals', 'custom-ptfe-machining'])}
${relatedArticles(c, ['virgin-vs-filled-ptfe', 'ptfe-vs-peek', 'machining-ptfe'])}`,
};
