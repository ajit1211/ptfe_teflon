import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE } from '../../data/ptfe.mjs';

const TUBE_PROPERTIES = VIRGIN_PROPERTIES.filter(([k]) => [
  'Continuous service temperature',
  'Crystalline melting point',
  'Coefficient of friction (dynamic, on steel)',
  'Dielectric constant (1 MHz)',
  'Water absorption (24 h)',
  'Thermal expansion',
  'Flammability',
].includes(k));

export default {
  path: 'products/ptfe-tubes/',
  nav: 'products',
  title: 'PTFE Tubes Manufacturer – Tubing & Pipe | SK Polymers',
  description: 'PTFE (Teflon) tubes and pipe for corrosive fluids, instrument lines and sleeving — virgin, glass-filled or conductive grade, cut to length. Send your sizes.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Tubes', 'products/ptfe-tubes/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-tubes',
  waTopic: 'PTFE tubes',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Tubes · Fluid Handling',
  title: 'PTFE Tubes <span class="hl">&amp; Pipes</span>',
  lede: 'Chemically inert PTFE (Teflon) tubing and pipe in virgin, glass-filled and conductive grades — supplied in lengths, cut pieces or with formed ends for fluid transfer, instrumentation and sleeving.',
  media: { src: 'static/images/products/pipes.svg', alt: 'Illustration of PTFE tubes and pipes with different wall thicknesses', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE tube details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">PTFE tube carries fluids that would attack metal, rubber and most other plastics, and it does so across a very wide temperature range with a non-stick bore that is easy to clean. SK Polymers is a PTFE tubes manufacturer and supplier for process plants, laboratories and equipment builders — from thin, flexible tubing to thick-wall pipe for machining.</p>

      <h2>Types of PTFE tube and pipe</h2>
      <p>Because PTFE cannot be melt-extruded, tube is formed from powder by processes chosen for the wall thickness required:</p>
      <ul>
        <li><strong>Paste-extruded tubing and sleeving</strong> — fine PTFE powder mixed with a lubricant is extruded, then the lubricant is driven off and the tube sintered. This gives small-bore, thin-wall tubing that is flexible enough for instrument lines and cable sleeving.</li>
        <li><strong>Ram-extruded tube</strong> — a heavier-walled, more rigid tube produced continuously, suitable for pipe runs, liners and stock for machined rings.</li>
        <li><strong>Moulded tube</strong> — large-diameter or very thick-wall tube made by compression moulding, typically used as blanks for bushes, seals and large rings.</li>
      </ul>
      <p>If you are unsure which applies, tell us the inside and outside diameters and how the tube will be used.</p>

      <h2>Grades of PTFE tube</h2>
      ${dataTable(['Grade', 'When to choose it', 'Watch-outs'], [
        ['Virgin PTFE', 'Widest chemical resistance; clean, non-contaminating bore; electrical insulation and sleeving', 'Softest grade; deforms under clamping and creeps at fittings'],
        ['Glass-filled', 'Thicker tube and pipe stock that must hold its shape or carry load, such as liners and machined rings', 'Glass is attacked by hydrofluoric acid and hot strong alkalis'],
        ['Conductive (carbon)', 'Lines carrying flammable solvents or fuels, or other duties where static charge must be dissipated', 'Not an electrical insulator; black in colour'],
      ], 'General guidance. Confirm the grade for your media and temperature; ask for compliance documentation if the tube will contact food or pharmaceutical products.')}
      <p>Our <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance guide</a> lists the few substances that attack PTFE and how fillers change the picture.</p>

      <h2>Applications of PTFE tubes</h2>
      <ul>
        <li><strong>Corrosive fluid transfer</strong> — acids, alkalis and solvents in chemical, pharmaceutical and plating plants.</li>
        <li><strong>Heat-exchanger tubing</strong> — where the process stream would corrode metal tubes.</li>
        <li><strong>Instrument and sampling lines</strong> — PTFE’s inert, low-adsorption bore suits analyser and sampling systems.</li>
        <li><strong>Cable and wire sleeving</strong> — thin-wall tube as heat-resistant electrical insulation.</li>
        <li><strong>Steam and vent lines</strong> — hot, wet service where rubber hose degrades.</li>
        <li><strong>Liners and machined rings</strong> — thick-wall tube as stock for <a href="${c.r('products/ptfe-bushes/')}">bushes</a> and <a href="${c.r('products/ptfe-seals/')}">seal rings</a>.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Custom ID and OD', 'Wall thickness to suit', 'Cut lengths', 'Flared or belled ends', 'Virgin, glass-filled or conductive', 'Repeat and bulk supply'])}
      <p class="callout">Size availability depends on grade and production route — send the ID, OD (or wall thickness), length and quantity, and we will confirm what we can supply.</p>

      <h2>Design notes for PTFE tubing</h2>
      ${specTable(TUBE_PROPERTIES, PROPERTY_NOTE)}
      <h3>Pressure and temperature</h3>
      <p>The pressure a PTFE tube can safely hold depends on its diameter, wall thickness and temperature — and it falls as temperature rises. Give us the working pressure and temperature so the wall can be sized for the duty rather than guessed.</p>
      <h3>Permeation</h3>
      <p>PTFE resists chemical attack, but some gases and vapours can slowly permeate through the wall, more so through thin walls and at higher temperatures. Where permeation matters, a thicker wall is usually the first answer.</p>
      <h3>Bending and fittings</h3>
      <p>Thin-wall tubing kinks if it is bent too tightly, and PTFE cold-flows under the grip of a compression fitting. Use generous bend radii and fittings intended for PTFE tube, and check joints after the first heat cycle. More on these limits in the <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Inside diameter, outside diameter or wall thickness, and length.</li>
        <li>Grade — virgin, glass-filled or conductive — or the media and we will suggest one.</li>
        <li>Working pressure and temperature range.</li>
        <li>End finish: plain cut, flared or belled.</li>
        <li>Quantity, and whether the requirement is one-off or repeat.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE tube summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Forms', 'Thin-wall tubing, thick-wall tube and pipe'],
          ['Grades', 'Virgin, glass-filled, conductive (carbon)'],
          ['Finishing', 'Cut lengths, flared or belled ends'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-tubes">Request a Tube Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance</a>
          <a href="${c.r('resources/ptfe-properties/')}">PTFE properties</a>
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Tube <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE tube or pipe.',
  tint: true,
  items: [
    { q: 'Is a Teflon tube the same as a PTFE tube?', a: 'Teflon™ is a Chemours brand name for PTFE, and “Teflon tube” is commonly used to mean PTFE tube. We supply PTFE tubing; we do not claim it is the branded product.' },
    { q: 'What is the difference between PTFE tube and PTFE pipe?', a: 'The terms overlap. “Tube” usually describes smaller, thinner-walled and more flexible sizes; “pipe” describes larger, heavier-walled sections. Tell us the ID, OD and use and we will match the right product.' },
    { q: 'When do I need a conductive PTFE tube?', a: 'When the tube carries flammable liquids or gases, or anywhere static build-up could cause a spark or upset a process. Carbon-filled conductive tube lets the charge drain away to an earthed fitting.' },
    { q: 'Can PTFE tube be flared or formed?', a: 'Yes. We can supply tube with flared or belled ends, and in cut lengths to suit your installation. Send a sketch of the end form you need.' },
    { q: 'What pressure can PTFE tube handle?', a: 'It depends on size, wall thickness and temperature, and capacity falls as temperature rises. Share your working pressure and temperature and we will recommend a suitable wall.' },
  ],
})}

${relatedProducts(c, ['ptfe-rods', 'ptfe-seals', 'ptfe-bushes'])}
${relatedArticles(c, ['ptfe-chemical-resistance', 'ptfe-properties', 'virgin-vs-filled-ptfe'])}`,
};
