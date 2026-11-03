import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE } from '../../data/ptfe.mjs';

const SEAL_PROPERTIES = VIRGIN_PROPERTIES.filter(([k]) => [
  'Continuous service temperature',
  'Coefficient of friction (dynamic, on steel)',
  'Elongation at break',
  'Hardness',
  'Thermal expansion',
].includes(k));

export default {
  path: 'products/ptfe-seals/',
  nav: 'products',
  title: 'PTFE Seals – O-Rings, Back-up Rings, V-Packing | SK Polymers',
  description: 'PTFE (Teflon) seals machined to size — O-rings, back-up rings, lip seals and V-packing for chemicals, cryogenic and high-temperature duty. Send your sizes.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Seals', 'products/ptfe-seals/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-seals',
  waTopic: 'PTFE seals',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Seals · Sealing',
  title: 'PTFE Seals <span class="hl">&amp; O-Rings</span>',
  lede: 'Machined PTFE (Teflon) O-rings, back-up rings, lip seals and V-packing for media, temperatures and speeds that defeat rubber seals — made to standard groove sizes or your drawing.',
  media: { src: 'static/images/products/seals.svg', alt: 'Illustration of PTFE seals, O-rings and back-up rings', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE seal details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">PTFE seals step in where elastomers fail: aggressive chemicals, very low or very high temperatures, dry running and long periods without maintenance. The trade-off is that PTFE is not rubbery, so a good PTFE seal is designed around how the material actually behaves. SK Polymers machines PTFE seals to size from virgin and filled stock.</p>

      <h2>Types of PTFE seal</h2>
      ${dataTable(['Seal', 'How it works', 'Typical use'], [
        ['PTFE O-ring', 'A solid PTFE ring squeezed in a groove; seals by compression rather than elastic recovery', 'Static seals in chemical service, where rubber would swell or degrade'],
        ['PTFE back-up ring', 'A stiff ring fitted beside an elastomer O-ring to close the clearance gap', 'Hydraulic and high-pressure seals, to stop the O-ring extruding'],
        ['PTFE lip seal', 'A PTFE lip held against a shaft, sometimes with a spring or support ring', 'Rotary shafts running dry, fast or in aggressive media'],
        ['PTFE V-packing', 'A stack of chevron rings; tightening the gland spreads the lips onto shaft and bore', 'Pump plungers, valve stems and reciprocating rods'],
      ], 'General guidance — the right seal depends on pressure, speed, temperature, media and the hardware.')}

      <h3>PTFE O-rings</h3>
      <p>A solid PTFE O-ring does not stretch and spring back like rubber, so it cannot be rolled into a closed groove and does not recover if the joint opens up. That makes it best suited to <strong>static</strong> seals with a good surface finish and steady clamping. Where you need PTFE’s chemical resistance <em>and</em> elasticity, spring-energised PTFE seals or fluoropolymer-encapsulated O-rings are the usual alternatives.</p>

      <h3>PTFE back-up rings</h3>
      <p>Under high pressure an elastomer O-ring can be forced into the gap between the mating parts and torn — known as extrusion. A PTFE back-up ring on the low-pressure side bridges that gap. They are supplied solid, split (scarf-cut) or spiral; split and spiral rings are easier to fit into closed grooves.</p>

      <h3>PTFE V-packing</h3>
      <p>V-packing sets combine several PTFE chevron rings with male and female adapters. Because the gland can be tightened as the rings wear, V-packing is forgiving in reciprocating and slow-rotating service such as pump plungers and valve stems.</p>

      <h2>Grades for seals</h2>
      <p>Virgin PTFE is preferred for the widest chemical resistance and for low-pressure static seals. Filled grades resist extrusion and wear better: glass-filled is a common general-purpose seal grade, carbon-filled suits water and steam, bronze-filled is widely used for hydraulic back-up and guide rings, and graphite-filled lowers friction against softer shafts. See <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a> and the <a href="${c.r('resources/ptfe-chemical-resistance/')}">chemical resistance guide</a>.</p>

      <h2>Applications</h2>
      <ul>
        <li><strong>Rotary and reciprocating shafts</strong> — lip seals and V-packing on mixers, agitators and plungers.</li>
        <li><strong>Chemical pumps</strong> — seals and wear rings where media attack elastomers; see also <a href="${c.r('products/ptfe-bushes/')}">PTFE bushes</a>.</li>
        <li><strong>Cryogenic service</strong> — PTFE remains usable at temperatures where most rubbers turn brittle.</li>
        <li><strong>High-temperature valves</strong> — stem packings and seat seals in hot, aggressive service.</li>
        <li><strong>Hydraulic back-up rings</strong> — protecting O-rings in high-pressure cylinders and valves.</li>
        <li><strong>Flange and body seals</strong> — where a ring or <a href="${c.r('products/ptfe-gaskets/')}">PTFE gasket</a> suits the joint better than an O-ring.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Machined to size', 'O-rings and back-up rings', 'Lip seals and V-packing', 'Spring-energised on request', 'Profile to drawing', 'Virgin and filled grades'])}
      <p class="callout">Seals are machined to your groove or drawing dimensions. Critical tolerances are confirmed at quotation.</p>

      <h2>Design notes for PTFE seals</h2>
      ${specTable(SEAL_PROPERTIES, PROPERTY_NOTE)}
      <p>Three behaviours shape every PTFE seal design. PTFE <strong>creeps</strong>, so sealing force relaxes unless something — a spring, an elastomer or an adjustable gland — keeps it loaded. Its <strong>thermal expansion</strong> is high, so fits change with temperature. And its <strong>low friction</strong> means low breakaway and running torque, one reason PTFE suits seals that run dry. Hardware surface finish matters too: a smooth, hard counterface extends seal life. Read more in the <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Seal type, or the hardware and duty so we can suggest one.</li>
        <li>Groove or housing dimensions, shaft or bore size — or the drawing.</li>
        <li>Pressure, temperature range and media.</li>
        <li>Static, rotary or reciprocating motion, with speed if dynamic.</li>
        <li>Grade preference and quantity.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE seal summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Types', 'O-rings, back-up rings, lip seals, V-packing'],
          ['Grades', 'Virgin; glass, carbon, bronze and graphite filled'],
          ['Supply', 'Machined to size or to drawing'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-seals">Request a Seal Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance</a>
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
          <a href="${c.r('resources/ptfe-properties/')}">PTFE properties</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Seal <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE seals and O-rings.',
  tint: true,
  items: [
    { q: 'Can a PTFE O-ring replace a rubber O-ring?', a: 'Sometimes. A solid PTFE O-ring resists chemicals and temperature far better, but it is not elastic, so it suits static seals with steady clamping. For dynamic duty or where elasticity is needed, consider a spring-energised PTFE seal.' },
    { q: 'What does a PTFE back-up ring do?', a: 'It sits beside an elastomer O-ring on the low-pressure side and bridges the clearance gap, preventing the O-ring from being extruded and damaged under high pressure.' },
    { q: 'Should I choose a solid, split or spiral back-up ring?', a: 'Solid rings give the most support but need an open groove to fit. Split (scarf-cut) and spiral rings can be fitted into closed grooves more easily. Tell us the groove type and pressure and we will suggest one.' },
    { q: 'Are PTFE seals suitable for cryogenic service?', a: 'PTFE remains usable at very low temperatures where most rubbers become brittle, which is why it is common in cryogenic valve seals. Seal design still has to allow for the large dimensional change on cooling.' },
    { q: 'Is a Teflon seal the same as a PTFE seal?', a: 'Teflon™ is a Chemours brand name for PTFE, and “Teflon seal” is commonly used to mean a PTFE seal. We supply PTFE seals; we do not claim they are the branded product.' },
  ],
})}

${relatedProducts(c, ['ptfe-gaskets', 'ptfe-bushes', 'custom-ptfe-machining'])}
${relatedArticles(c, ['ptfe-chemical-resistance', 'virgin-vs-filled-ptfe', 'ptfe-properties'])}`,
};
