import { pageHero, specTable, chips, faqSection, relatedProducts, relatedArticles, icon } from '../../layout.mjs';

export default {
  path: 'services/custom-ptfe-machining/',
  nav: 'services',
  title: 'Custom PTFE Machining – CNC Machined Parts | SK Polymers',
  description: 'Custom PTFE machining — CNC turned and milled PTFE parts, valve seats, insulators, seals and prototypes made to your drawing or sample. Send your drawing.',
  breadcrumbs: [['Services', 'services/'], ['Custom PTFE Machining', 'services/custom-ptfe-machining/']],
  updated: '2026-11-03',
  enquiry: 'custom-ptfe-machining',
  waTopic: 'custom PTFE machining',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Services · CNC Machining',
  title: 'Custom PTFE <span class="hl">Machining</span>',
  lede: 'CNC machined PTFE components made to your drawing, CAD file or sample — turned, milled, drilled and cut from virgin or filled PTFE, from a single prototype to repeat production.',
  media: { src: 'static/images/products/custom.svg', alt: 'Illustration of a custom CNC-machined PTFE component', width: 640, height: 480 },
})}

<section class="section section-light" aria-label="Custom PTFE machining details">
  <div class="container content-layout">
    <div class="prose">
      <p class="lead">Many PTFE parts are too specific to buy off the shelf: a seat with an unusual profile, an insulator that has to fit an existing housing, a fixture for a laboratory rig. Our custom PTFE machining service turns PTFE stock into finished parts to your drawing, and because we also supply the <a href="${c.r('products/ptfe-rods/')}">rod</a>, <a href="${c.r('products/ptfe-sheets/')}">sheet</a> and <a href="${c.r('products/ptfe-tubes/')}">tube</a> they are made from, grade and stock size can be chosen together.</p>

      <h2>What we machine</h2>
      <ul>
        <li><strong>Turned and milled parts</strong> — plugs, nozzles, fittings, housings and manifolds.</li>
        <li><strong>Valve seats and stem packings</strong> — for ball, butterfly and plug valves in chemical service.</li>
        <li><strong>Electrical insulators</strong> — spacers, bushes and stand-offs, including insulators for aerospace and instrument assemblies.</li>
        <li><strong>Seals and bushes</strong> — non-standard <a href="${c.r('products/ptfe-seals/')}">seals</a> and <a href="${c.r('products/ptfe-bushes/')}">bushes</a> machined to drawing.</li>
        <li><strong>Laboratory and semiconductor fixtures</strong> — carriers, holders and chemically inert parts for wet processing and lab equipment.</li>
        <li><strong>Food and pharma contact parts</strong> — scrapers, guides and fittings. Request compliance documentation for your requirement before ordering.</li>
        <li><strong>Prototypes</strong> — one-off and short-run parts to prove a design before production.</li>
      </ul>

      <h2>Machining processes</h2>
      <h3>CNC turning</h3>
      <p>Round parts — rings, seats, bushes, plugs and threaded fittings — are turned from rod or tube. Turning suits most PTFE components, which are rotationally symmetric.</p>
      <h3>CNC milling</h3>
      <p>Pockets, slots, flats and non-round profiles are milled from sheet or block, for parts such as manifolds, carriers and insulating plates.</p>
      <h3>Drilling and tapping</h3>
      <p>Holes, cross-drillings and threads are added to turned or milled parts. Threads in PTFE are soft and can strip if over-tightened, so threaded inserts are worth considering for parts that will be assembled repeatedly.</p>
      <h3>Cutting</h3>
      <p>Rod is cut to length and sheet is cut into blanks, strips, rings and <a href="${c.r('products/ptfe-gaskets/')}">gaskets</a>, either as finished parts or as blanks for further machining.</p>

      <h2>Why PTFE needs special handling</h2>
      <p>PTFE machines freely, but it does not behave like metal or even like most engineering plastics. Good parts depend on allowing for:</p>
      <ul>
        <li><strong>Creep (cold flow)</strong> — PTFE slowly deforms under sustained load, so fits and clamping forces relax over time.</li>
        <li><strong>High thermal expansion</strong> — roughly ten times that of steel, so heat from cutting or a change in room temperature moves the part.</li>
        <li><strong>The ~19 °C transition</strong> — PTFE has a crystalline transition near room temperature that causes a step change in dimensions. Measurements taken either side of it can differ, so critical dimensions need a stated measuring temperature.</li>
        <li><strong>Deformation under clamping</strong> — PTFE is soft, so heavy chuck or vice pressure distorts thin walls; the part springs back when released.</li>
        <li><strong>Burrs</strong> — PTFE tends to leave stringy burrs and feathered edges, which have to be removed without damaging sealing surfaces.</li>
      </ul>
      <p>Sharp tools, light clamping and keeping heat down are the core of good PTFE machining. Our <a href="${c.r('resources/machining-ptfe/')}">machining PTFE guide</a> explains these effects in more detail.</p>

      <h2>Design tips for buyers</h2>
      <ul>
        <li>Apply tight tolerances only to the dimensions that need them — PTFE’s expansion makes tight tolerances everywhere costly and sometimes unachievable.</li>
        <li>State the temperature at which critical dimensions are to be measured.</li>
        <li>Avoid very thin walls and long, unsupported sections, which deflect during machining and in service.</li>
        <li>Use filled grades for parts that carry load or wear; see <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>.</li>
        <li>Consider whether PTFE is the right polymer at all — for high load and stiffness, compare <a href="${c.r('resources/ptfe-vs-peek/')}">PTFE vs PEEK</a>.</li>
      </ul>

      <h2>How a custom order works</h2>
      <ol class="steps">
        <li class="step"><h3>Enquiry</h3><p>Send your drawing, CAD file or sample along with the quantity and application.</p></li>
        <li class="step"><h3>Grade advice</h3><p>We review the duty and suggest virgin or a filled grade, and flag any features that are hard to hold in PTFE.</p></li>
        <li class="step"><h3>Quotation</h3><p>We quote for material and machining, and confirm critical tolerances at this stage.</p></li>
        <li class="step"><h3>Machining</h3><p>The parts are cut, turned, milled and drilled from suitable PTFE stock.</p></li>
        <li class="step"><h3>Inspection</h3><p>Parts are checked against your drawing before they are packed.</p></li>
        <li class="step"><h3>Dispatch</h3><p>Finished parts are packed and dispatched, with delivery across India and export enquiries welcome.</p></li>
      </ol>

      <h2>What to send for a quote</h2>
      ${chips(['Drawing, CAD file or sample', 'Grade (or the operating conditions)', 'Quantity — prototype or batch', 'Critical dimensions and tolerances', 'Media, temperature and load'])}
      <p class="callout">No drawing? A clear photo of a sample with key dimensions is often enough to start. Critical tolerances are confirmed at quotation.</p>
    </div>

    <aside class="content-aside" aria-label="Custom PTFE machining summary">
      <div class="aside-card">
        <p class="aside-title">At a glance</p>
        ${specTable([
          ['Processes', 'CNC turning, milling, drilling, tapping, cutting'],
          ['Materials', 'Virgin and filled PTFE'],
          ['Input', 'Drawing, CAD file or sample'],
          ['Volumes', 'Prototype to production'],
        ])}
        <a class="btn btn-accent" href="#enquiry" data-enquire="custom-ptfe-machining">Send Your Drawing ${icon('arrow-right')}</a>
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
  title: 'PTFE Machining <span class="hl">FAQs</span>',
  lede: 'Questions buyers commonly ask before ordering machined PTFE parts.',
  tint: true,
  items: [
    { q: 'Can you machine PTFE parts from a sample without a drawing?', a: 'Yes. Send the sample or clear photos with the key dimensions, and tell us which features are critical. We will confirm what is needed before quoting.' },
    { q: 'What tolerances can be held on PTFE parts?', a: 'It depends on the size, geometry, grade and measuring temperature, because PTFE expands and moves more than metals. Critical tolerances are reviewed and confirmed at quotation.' },
    { q: 'Do you make one-off prototypes as well as production batches?', a: 'Yes. We machine single prototypes and short runs as well as repeat production quantities.' },
    { q: 'Which PTFE grade should I use for a machined part?', a: `Virgin PTFE for chemical resistance, purity and electrical insulation; a filled grade where the part carries load, wears or must resist creep. See <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>.` },
    { q: 'Can PTFE parts be used in food or pharmaceutical equipment?', a: 'PTFE is widely used in these industries, but suitability depends on the specific grade and your regulatory requirement. Request compliance documentation for your application before ordering.' },
  ],
})}

${relatedProducts(c, ['ptfe-rods', 'ptfe-sheets', 'ptfe-seals'])}
${relatedArticles(c, ['machining-ptfe', 'virgin-vs-filled-ptfe', 'ptfe-vs-peek'])}`,
};
