import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';

export default {
  path: 'products/ptfe-gaskets/',
  nav: 'products',
  title: 'PTFE Gasket Manufacturer – Flange & Envelope | SK Polymers',
  description: 'PTFE (Teflon) gaskets — solid, filled, expanded and envelope types for flanges, pumps, valves and vessels, cut to pipe tables or your drawing. Get a quote.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Gaskets', 'products/ptfe-gaskets/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-gaskets',
  waTopic: 'PTFE gaskets',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Gaskets · Sealing',
  title: 'PTFE Gaskets <span class="hl">&amp; Rings</span>',
  lede: 'Flange gaskets, envelope gaskets and precision-cut rings in PTFE (Teflon) — cut to standard pipe sizes or to your own bolt pattern for chemical, pharmaceutical and process plant.',
  media: { src: 'static/images/products/rings.svg', alt: 'Illustration of PTFE flange gaskets and rings', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE gasket details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">A PTFE gasket seals joints that carry media most other gasket materials cannot survive — strong acids, alkalis, solvents and oxidisers. As a PTFE gasket manufacturer, SK Polymers cuts rings, flange gaskets and envelope gaskets to standard dimensions or to your drawing. The right choice depends on the flange, the bolt load available and the media.</p>

      <h2>Types of PTFE gasket</h2>
      <p>“PTFE gasket” covers several constructions that behave quite differently once bolted up:</p>
      ${dataTable(['Type', 'Construction', 'Strengths', 'Watch-outs'], [
        ['Solid virgin PTFE', 'Cut from skived or moulded virgin sheet', 'Widest chemical resistance; clean, non-contaminating', 'Creeps (cold-flows) under bolt load, so bolt stress can relax over time'],
        ['Filled PTFE', 'Cut from glass-, carbon- or other filled sheet', 'Much better creep resistance than virgin; holds bolt load better', 'Filler limits some chemistry — e.g. glass with hydrofluoric acid'],
        ['Expanded PTFE (ePTFE)', 'Soft, microporous PTFE sheet or tape', 'Very conformable; seals uneven, warped or damaged flange faces', 'Compresses a lot — thickness and bolting need care'],
        ['Envelope gasket', 'PTFE jacket over a compressible insert', 'PTFE wetted face with the resilience of the insert; low seating stress', 'The insert must suit the temperature; only the jacket is chemically resistant'],
      ], 'General guidance. Confirm the gasket type for your flange, media, temperature and pressure.')}
      <p>Our <a href="${c.r('resources/ptfe-gasket-selection/')}">PTFE gasket selection guide</a> walks through how to choose between them.</p>

      <h3>PTFE envelope gaskets</h3>
      <p>An envelope gasket wraps a thin PTFE jacket around a compressible insert, such as a compressed fibre sheet or an elastomer. The media only touches PTFE, while the insert provides the springiness that solid PTFE lacks. Because envelope gaskets seal at modest bolt loads, they are a common choice for glass-lined, ceramic and other fragile flanges that cannot be tightened hard.</p>

      <h3>Flange gaskets: full face or inside bolt circle</h3>
      <p>A <strong>full-face</strong> gasket covers the whole flange face and has bolt holes punched through it; it is common on flat-faced and non-metallic flanges. An <strong>inside-bolt-circle (IBC)</strong> or ring gasket sits inside the bolts and is located by them; it is typical on raised-face flanges. We cut both to standard pipe tables or to your bolt pattern — tell us if you need dimensions to ASME B16.21 or EN 1514-1.</p>

      <h2>Choosing a grade</h2>
      <p>Virgin PTFE is the safe choice for aggressive or high-purity media, but on its own it relaxes under bolt load. Filled grades resist this cold flow and are usually preferred on metal flanges with steady bolting. Expanded PTFE and envelope constructions solve a different problem — flanges that are uneven or too fragile for high bolt stress. If you are unsure, see <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a> or simply describe the joint and we will suggest an option.</p>

      <h2>Applications</h2>
      <ul>
        <li><strong>Pipe flange sealing</strong> — chemical, pharmaceutical, food and process pipework.</li>
        <li><strong>Pump and valve bodies</strong> — body, cover and bonnet joints handling corrosive media.</li>
        <li><strong>Heat-exchanger covers</strong> — channel and cover gaskets where the process stream is aggressive.</li>
        <li><strong>Manhole and vessel covers</strong> — large-diameter gaskets for reactors, tanks and glass-lined vessels.</li>
        <li><strong>Washers and spacers</strong> — insulating or chemically resistant washers cut from <a href="${c.r('products/ptfe-sheets/')}">PTFE sheet</a>.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Rings and washers', 'Flange gaskets to pipe tables', 'Custom bolt-hole patterns', 'Full-face or inside bolt circle', 'Envelope gaskets', 'Thickness to suit'])}
      <p class="callout">Available sizes and thicknesses depend on gasket type and grade — send your flange details or drawing and we will confirm what we can supply.</p>

      <h2>Installation notes</h2>
      <p>PTFE gaskets reward careful installation. Flange faces should be clean, undamaged and parallel; bolts should be tightened gradually in a cross pattern to an even load; and, as a rule, the thinnest gasket that can accommodate the flange surface finish relaxes least under load. Because PTFE creeps and expands with temperature, follow your site’s bolting procedure for checking joints after the first heat cycle. Details on PTFE behaviour are in the <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Gasket type — solid, filled, expanded or envelope — or the joint details so we can suggest one.</li>
        <li>Pipe size and pressure class with the standard, or OD, ID, PCD and bolt-hole size and number.</li>
        <li>Full-face or inside bolt circle, and the thickness.</li>
        <li>Media, temperature and pressure.</li>
        <li>Quantity, and whether this is a one-off or repeat order.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE gasket summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Types', 'Solid, filled, expanded, envelope'],
          ['Styles', 'Rings, full-face and IBC flange gaskets'],
          ['Sizing', 'Standard pipe tables or your drawing'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-gaskets">Request a Gasket Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/ptfe-gasket-selection/')}">Selecting a PTFE gasket</a>
          <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance</a>
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Gasket <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE gaskets.',
  tint: true,
  items: [
    { q: 'Is a Teflon gasket the same as a PTFE gasket?', a: 'Teflon™ is a Chemours brand name for PTFE, and “Teflon gasket” is widely used to mean a PTFE gasket. We supply PTFE gaskets; we do not claim they are the branded product.' },
    { q: 'Why does a virgin PTFE gasket lose bolt load?', a: 'Virgin PTFE creeps, or cold-flows, under sustained compression, so the gasket thins slightly and bolt stress relaxes. Filled PTFE, expanded PTFE and envelope gaskets are common ways to reduce the effect.' },
    { q: 'When should I use a PTFE envelope gasket?', a: 'Envelope gaskets suit glass-lined, ceramic and other fragile flanges, and joints where you want a PTFE wetted face but need more resilience than solid PTFE. Check that the insert material suits your temperature.' },
    { q: 'Can you make gaskets to my bolt pattern?', a: 'Yes. Send the OD, ID, pitch circle diameter, bolt-hole size and number — or a drawing — and we will cut gaskets to suit, either full-face or inside the bolt circle.' },
    { q: 'Which gasket is best for uneven flanges?', a: `Expanded PTFE is very conformable and fills uneven or slightly damaged faces well. Our <a href="${c.r('resources/ptfe-gasket-selection/')}">gasket selection guide</a> compares the options.` },
  ],
})}

${relatedProducts(c, ['ptfe-sheets', 'ptfe-seals', 'ptfe-tubes'])}
${relatedArticles(c, ['ptfe-gasket-selection', 'ptfe-chemical-resistance', 'virgin-vs-filled-ptfe'])}`,
};
