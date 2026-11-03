import { pageHero, specTable, dataTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE, GRADE_HEAD, GRADE_ROWS, GRADE_NOTE } from '../../data/ptfe.mjs';

const ROD_PROPERTIES = VIRGIN_PROPERTIES.filter(([k]) => [
  'Density',
  'Continuous service temperature',
  'Tensile strength',
  'Elongation at break',
  'Hardness',
  'Coefficient of friction (dynamic, on steel)',
  'Thermal expansion',
].includes(k));

export default {
  path: 'products/ptfe-rods/',
  nav: 'products',
  title: 'PTFE Rods Supplier – Virgin & Filled Grades | SK Polymers',
  description: 'PTFE (Teflon) rods in virgin, glass, carbon, bronze and graphite-filled grades — extruded or moulded, cut to length or machined to drawing. Get a quote.',
  breadcrumbs: [['Products', 'products/'], ['PTFE Rods', 'products/ptfe-rods/']],
  updated: '2026-11-03',
  enquiry: 'ptfe-rods',
  waTopic: 'PTFE rods',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'PTFE Rods · Machining Stock',
  title: 'PTFE Rods <span class="hl">&amp; Bars</span>',
  lede: 'Extruded and moulded PTFE (Teflon) rod in virgin and filled grades — supplied as full lengths, cut pieces or finished components machined to your drawing.',
  media: { src: 'static/images/products/rods.svg', alt: 'Illustration of PTFE rods in several diameters', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="PTFE rod details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">Almost every turned PTFE part — a valve seat, a bush, a spacer, a seal — starts life as a length of rod. As a PTFE rod manufacturer and supplier, SK Polymers provides rod as machining stock and, when you need it, turns it into the finished part. Getting good parts out of rod depends on picking the right production route, the right grade and a sensible stock size.</p>

      <h2>Extruded and moulded PTFE rod</h2>
      <p>PTFE’s melt viscosity is so high that it does not flow like other thermoplastics, so it cannot be injection-moulded or melt-extruded like nylon or acetal. Rod is made from PTFE powder in one of two ways:</p>
      <ul>
        <li><strong>Ram-extruded rod</strong> — powder is pushed in short strokes through a long heated die, where it compacts and sinters into a continuous rod. This is the usual route for small and medium diameters and for long lengths.</li>
        <li><strong>Compression-moulded rod</strong> — powder is pressed into a cylindrical mould and then sintered in an oven. Moulding is generally used for larger diameters and for short, heavy billets that will be machined into bigger components.</li>
      </ul>
      <p>Both routes give the same base material. What matters to the machinist is that the stock is uniform and as free of internal stress as possible, so that a part stays the size it was cut to. If your component has tight tolerances, mention it — it affects which stock we recommend.</p>

      <h2>Grades of PTFE rod</h2>
      <p>Virgin PTFE rod is white and gives the widest chemical resistance and the best electrical insulation. Filled rod adds glass fibre, carbon, bronze or graphite to the PTFE, which raises compressive strength and wear resistance and reduces creep — the reasons filled rod is so often chosen for bushes, piston rings and seats that carry load. Glass-filled rod is commonly supplied at around 15 % or 25 % filler.</p>
      ${dataTable(GRADE_HEAD, GRADE_ROWS, GRADE_NOTE)}
      <p>For a deeper comparison, see <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>.</p>

      <h2>Applications of PTFE rod</h2>
      <ul>
        <li><strong>Turned components</strong> — washers, plugs, nozzles and fittings for chemical and process equipment. See <a href="${c.r('services/custom-ptfe-machining/')}">custom PTFE machining</a>.</li>
        <li><strong>Valve seats and stems</strong> — seats and stem packings where chemical resistance and low friction matter; filled grades are common where the seat carries load.</li>
        <li><strong>Spacers and insulators</strong> — electrical stand-offs and insulating spacers that rely on PTFE’s low dielectric constant and negligible water absorption.</li>
        <li><strong>Bearing blanks</strong> — rod and thick-wall stock for <a href="${c.r('products/ptfe-bushes/')}">PTFE bushes and bearings</a>.</li>
        <li><strong>Pump internals</strong> — wear rings, impeller spacers and <a href="${c.r('products/ptfe-seals/')}">seal rings</a> for pumps handling corrosive media.</li>
      </ul>

      <h2>Supply and customisation</h2>
      ${chips(['Full-length rods', 'Cut to length', 'Diameter approx. 4–300 mm*', 'Virgin and filled grades', 'Machined to drawing', 'Repeat and bulk supply'])}
      <p class="callout">*Indicative range — confirm availability for your size. Not every grade is available in every diameter; send the diameter, length and quantity and we will confirm what we can supply.</p>

      <h2>Design notes for rod stock</h2>
      ${specTable(ROD_PROPERTIES, PROPERTY_NOTE)}
      <h3>Allow for movement</h3>
      <p>PTFE expands far more than metal with temperature and passes through a crystalline transition near room temperature (around 19 °C), so a part measured on a cold morning and again in a warm workshop can read differently. Specify the temperature at which critical dimensions apply.</p>
      <h3>Choose a stock size with allowance</h3>
      <p>Order rod a little larger than the finished diameter so the outer skin can be turned off cleanly. If you are not sure how much to allow, tell us the finished size and we will suggest the stock. Our <a href="${c.r('resources/machining-ptfe/')}">machining PTFE guide</a> covers the details.</p>

      <h2>What to include in your enquiry</h2>
      <ol>
        <li>Grade — virgin or a specific filled grade (or describe the duty and we will suggest one).</li>
        <li>Diameter, length and number of pieces.</li>
        <li>Whether you need plain rod or finished parts — if finished, attach the drawing or a sample photo.</li>
        <li>Any critical tolerances; these are confirmed at quotation.</li>
        <li>The application: media, temperature, load and speed.</li>
      </ol>
    </div>

    <aside class="content-aside" aria-label="PTFE rod summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Material', 'PTFE (polytetrafluoroethylene)'],
          ['Forms', 'Ram-extruded and moulded rod'],
          ['Grades', 'Virgin; glass, carbon, bronze and graphite filled'],
          ['Supply', 'Full lengths, cut pieces, machined parts'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="ptfe-rods">Request a Rod Quote ${icon('arrow-right')}</a>
      </div>
      <div class="aside-card">
        <p class="aside-title">Related guides</p>
        <nav class="aside-links" aria-label="Related guides">
          <a href="${c.r('resources/machining-ptfe/')}">Machining PTFE</a>
          <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">Virgin vs filled PTFE</a>
          <a href="${c.r('resources/ptfe-vs-peek/')}">PTFE vs PEEK</a>
        </nav>
      </div>
    </aside>
  </div>
</section>

${faqSection(c, {
  title: 'PTFE Rod <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering PTFE rod.',
  tint: true,
  items: [
    { q: 'Is Teflon rod the same as PTFE rod?', a: 'Teflon™ is a Chemours brand name for PTFE, and “Teflon rod” is widely used to mean PTFE rod. We supply PTFE rod; we do not claim it is the branded product.' },
    { q: 'Which PTFE rod grade should I choose?', a: `Virgin rod suits chemical service and electrical parts. For parts that carry load or rub against a shaft, a filled grade usually lasts longer — glass for general wear, carbon for water and steam, bronze for hydraulics, graphite for low friction. See <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">our grade guide</a>.` },
    { q: 'What is the difference between extruded and moulded rod?', a: 'Both are sintered PTFE. Ram extrusion produces continuous rod and is typical for smaller diameters; compression moulding is used for larger diameters and short billets. Tell us the size and we will advise which is available.' },
    { q: 'Can you cut rod to length or machine finished parts?', a: `Yes. We cut rod to the lengths you need and can also machine finished components to your drawing or sample through our <a href="${c.r('services/custom-ptfe-machining/')}">custom machining service</a>.` },
    { q: 'Why does my PTFE part measure differently from day to day?', a: 'PTFE has high thermal expansion and a crystalline transition at about 19 °C, so its dimensions shift with temperature. Measure parts at a stated, stable temperature and specify that temperature on the drawing.' },
  ],
})}

${relatedProducts(c, ['ptfe-bushes', 'ptfe-seals', 'custom-ptfe-machining'])}
${relatedArticles(c, ['machining-ptfe', 'virgin-vs-filled-ptfe', 'ptfe-properties'])}`,
};
