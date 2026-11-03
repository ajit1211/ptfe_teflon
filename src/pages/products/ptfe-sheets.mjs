import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE, GRADE_HEAD, GRADE_ROWS, GRADE_NOTE } from '../../data/ptfe.mjs';

export default {
  path: 'products/ptfe-sheets/',
  nav: 'products',
  title: 'PTFE Sheets Manufacturer – Virgin & Filled | SK Polymers',
  description: 'PTFE (Teflon) sheets in virgin and filled grades — moulded or skived, cut to size for gaskets, linings, slide pads and insulation. Request a quote today.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Sheets', 'products/ptfe-sheets/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-sheets',
  waTopic: 'PTFE sheets',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Sheets · Manufacturer',
  title: 'PTFE Sheets <span class="hl">&amp; Slabs</span>',
  lede: 'Moulded and skived PTFE (Teflon) sheets in virgin and filled grades — supplied as sheet, cut blanks or finished gaskets for sealing, lining, sliding and insulating applications.',
  media: { src: 'static/images/products/sheets.svg', alt: 'Illustration of stacked PTFE sheets and slabs', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE sheet details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">PTFE sheet is the most versatile form of the material: it is the stock that gaskets, washers, slide bearings, tank linings and insulating barriers are cut from. Choosing the right sheet comes down to three things — how it is made, which grade it is, and the thickness you need.</p>

      <h2>Moulded vs skived PTFE sheet</h2>
      <p>PTFE cannot be melt-processed like most plastics, so sheet is produced in one of two ways:</p>
      <ul>
        <li><strong>Moulded sheet</strong> — PTFE powder is compressed in a mould and sintered. This route suits thicker sections and blocks, and is the usual choice when you will machine the sheet further or need a thick slide pad.</li>
        <li><strong>Skived sheet</strong> — a thin, continuous layer is peeled from a rotating moulded billet. Skiving gives uniform thin sheet and film with a smooth surface, well suited to gaskets, liners and electrical insulation.</li>
      </ul>
      <p>For bonded applications — for example lining a vessel or bonding a slide pad to a steel plate — PTFE sheet can be <strong>etched</strong> on one or both faces so adhesives can grip what is otherwise a non-stick surface.</p>

      <h2>Grades of PTFE sheet</h2>
      <p>Virgin PTFE gives the best chemical resistance and electrical properties. Filled grades trade a little of that for higher compressive strength, better wear resistance and less creep under load — important for gaskets that see bolt load and for sliding pads.</p>
      ${dataTable(GRADE_HEAD, GRADE_ROWS, GRADE_NOTE)}
      <p>Not sure which grade fits? Our guide to <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a> walks through the trade-offs.</p>

      <h2>Applications</h2>
      <ul>
        <li><strong>Gaskets and washers</strong> — flange gaskets, rings and washers cut from sheet for chemical, pharmaceutical and food processing lines. See <a href="${c.r('products/ptfe-gaskets/')}">PTFE gaskets</a>.</li>
        <li><strong>Linings</strong> — tank, chute and hopper linings where corrosion resistance or non-stick release matters.</li>
        <li><strong>Slide and wear pads</strong> — low-friction bearing pads for structural expansion joints, pipe supports and machine slideways.</li>
        <li><strong>Electrical insulation</strong> — barriers, spacers and insulating washers that rely on PTFE’s low dielectric constant and high resistivity.</li>
        <li><strong>Anti-stick surfaces</strong> — heat-sealing, moulding and food-handling surfaces where product must release cleanly.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Full sheets', 'Cut to size', 'Strips and blanks', 'Etched one or both sides', 'Gaskets cut to drawing', 'Thickness from 0.5 mm to 100 mm*'])}
      <p class="callout">*Indicative range. Availability depends on grade and sheet size — send your thickness, length × width and quantity and we will confirm what we can supply.</p>

      <h2>Typical properties of virgin PTFE</h2>
      ${specTable(VIRGIN_PROPERTIES, PROPERTY_NOTE)}
      <p>Two properties deserve attention when designing with sheet: PTFE <strong>creeps</strong> (cold-flows) under sustained load, and it has a <strong>high thermal expansion</strong>. Both are why filled grades are often preferred for gaskets and load-bearing pads. More detail in our <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Grade — virgin or filled (or the operating conditions, and we will suggest one).</li>
        <li>Thickness, sheet size or cut dimensions, and tolerance if critical.</li>
        <li>Quantity, and whether this is a one-off or repeat requirement.</li>
        <li>Any finishing — etching, cutting to a gasket drawing, or machining.</li>
        <li>The application: media, temperature and pressure help us recommend the right material.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE sheet summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Forms', 'Moulded and skived sheet'],
          ['Grades', 'Virgin; glass, carbon, bronze and graphite filled'],
          ['Finishing', 'Cut to size, etched, gaskets'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-sheets">Request a Sheet Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
          <a href="${c.r('resources/ptfe-gasket-selection/')}">Selecting a PTFE gasket</a>
          <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Sheet <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE sheet.',
  tint: true,
  items: [
    { q: 'What is the difference between PTFE and Teflon sheet?', a: 'Teflon™ is a brand name (Chemours) for PTFE. “Teflon sheet” and “PTFE sheet” are used interchangeably in industry to mean sheet made from polytetrafluoroethylene. We supply PTFE sheet; we do not claim it is the branded product.' },
    { q: 'Should I choose skived or moulded PTFE sheet?', a: 'Skived sheet is usually the better choice for thin gauges, gaskets and liners because it is uniform and smooth. Moulded sheet suits thicker sections and material that will be machined. Tell us the thickness and application and we will recommend one.' },
    { q: 'Can PTFE sheet be glued or bonded?', a: 'Untreated PTFE is very difficult to bond. Sheet that has been chemically etched on one or both faces can be bonded with suitable adhesives — specify etched sheet in your enquiry.' },
    { q: 'Which grade is best for gaskets?', a: `Virgin PTFE offers the widest chemical resistance but creeps under bolt load. Filled grades (for example glass-filled) resist creep better. For uneven or fragile flanges, softer gasket constructions are often used. Our <a href="${c.r('resources/ptfe-gasket-selection/')}">gasket selection guide</a> covers the options.` },
    { q: 'Do you cut sheet to size?', a: 'Yes. We supply full sheets and also cut strips, blanks, rings and gaskets to your dimensions or drawing.' },
  ],
})}

${relatedProducts(c, ['ptfe-gaskets', 'ptfe-rods', 'custom-ptfe-machining'])}
${relatedArticles(c, ['virgin-vs-filled-ptfe', 'ptfe-gasket-selection', 'ptfe-properties'])}`,
};
