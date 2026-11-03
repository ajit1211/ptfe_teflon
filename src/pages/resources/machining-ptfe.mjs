import { pageHero, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';

const DESIGN_HEAD = ['Feature', 'Why it is a problem in PTFE', 'Design guidance'];
const DESIGN_ROWS = [
  ['Tight tolerances everywhere', 'Expansion, the ~19 °C transition and stress relaxation all move dimensions', 'Apply tight tolerances only to functional features; use general tolerances elsewhere'],
  ['Thin walls', 'Deflect under the tool and clamp; distort after release', 'Increase wall thickness where possible; support thin sections during machining'],
  ['Fine or load-bearing threads', 'Soft thread flanks deform and strip under load and creep', 'Prefer coarse threads; use metal inserts or through-bolts for load-bearing joints'],
  ['Long-term interference fits', 'PTFE creeps, so press-fit grip falls over time', 'Add mechanical retention (shoulder, circlip, flange) rather than relying on interference alone'],
  ['Sharp internal corners', 'Stress concentration; hard to machine cleanly', 'Specify an internal radius'],
  ['Unspecified measurement temperature', 'The same part measures differently in a cool and a warm room', 'State the temperature at which dimensions apply'],
];

export default {
  path: 'resources/machining-ptfe/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'Machining PTFE: Design & Tolerance Guide',
  title: 'Machining PTFE: Design & Tolerance Guide | SK Polymers',
  description: 'How PTFE behaves on the machine, why it moves after machining, and how to design and dimension PTFE parts — tolerances, threads, thin walls and drawings.',
  breadcrumbs: [['Resources', 'resources/'], ['Machining PTFE', 'resources/machining-ptfe/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'Machining PTFE: <span class="hl">Design &amp; Tolerance Guide</span>',
  lede: 'PTFE is easy to cut but hard to hold to size. Understanding why helps you design parts that can be made — and inspected — to your drawing.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">Because PTFE cannot be injection moulded, most precision PTFE parts — bushes, seals, valve seats, spacers and insulators — are machined from moulded or extruded rod, tube and sheet. PTFE cuts easily, but it is soft, it expands a lot with temperature and it can move after machining. Designing with those facts in mind avoids drawings that look reasonable on paper but are difficult to make or to measure.</p>

      <h2 id="behaviour">How PTFE behaves on the machine</h2>
      <h3>Soft, low-modulus material</h3>
      <p>Virgin PTFE is soft (about 50–60 Shore D) and has a low modulus, so it deflects under cutting forces instead of shearing cleanly. Blunt tools push and smear the material rather than cutting it, leaving poor finishes and oversize or undersize features.</p>
      <ul>
        <li><strong>Sharp tools are essential.</strong> Ground, polished cutting edges with a positive rake and generous clearance give a clean shear.</li>
        <li><strong>Light finishing passes</strong> reduce deflection and the pressure on the part.</li>
        <li><strong>Filled grades are abrasive.</strong> Glass, carbon and bronze fillers wear tool edges much faster than virgin PTFE, so harder tool materials are generally used for them.</li>
      </ul>

      <h3>Heat</h3>
      <p>PTFE conducts heat poorly, so heat generated at the cut stays in the workpiece near the surface. Because PTFE expands far more than metals — roughly ten times as much as steel — a part that is warm when measured on the machine will shrink as it cools. Keep cutting heat low with sharp tools and suitable speeds and feeds, and allow parts to return to room temperature before final measurement.</p>
      <p>Never let the material overheat. PTFE releases hazardous fumes if heated well beyond its service temperature, so swarf and dust should be collected and kept away from smoking materials and naked flames.</p>

      <h3>Coolant</h3>
      <p>PTFE does not absorb water, and coolant is mainly used to control heat and help clear chips rather than to lubricate. Water-based coolants or compressed air are common. For parts going into food, pharmaceutical or high-purity service, agree on any coolant use and the cleaning required before machining.</p>

      <h3>Chips and burrs</h3>
      <p>Virgin PTFE tends to form long, continuous chips that wrap around tools and work, and soft, flexible burrs on edges and cross-holes. Chip control and sharp tools reduce burring; remaining burrs are usually trimmed by hand with a sharp blade. Abrasive deburring methods can embed particles in the soft surface, which matters for sealing faces and purity-critical parts.</p>

      <h3>Clamping distortion</h3>
      <p>Because PTFE is soft, heavy chuck or vice pressure deforms the part. It is then machined “true” while distorted and springs back out of shape when released — a classic cause of oval bores and out-of-flat faces. Light clamping pressure, soft or full-contact jaws, spreading the load over a large area and, for thin sheet parts, vacuum fixturing all help.</p>

      <h2 id="stability">Dimensional stability</h2>
      <h3>Thermal expansion</h3>
      <p>PTFE’s high thermal expansion means a part’s size depends noticeably on its temperature. This affects measurement in the workshop, but also service: a bush that fits correctly at 25 °C may bind or loosen at 150 °C. Calculate fits and clearances across the full operating temperature range, not just at assembly.</p>

      <h3>The ~19 °C transition</h3>
      <p>PTFE goes through a crystalline transition at about 19 °C, with a further smaller one near 30 °C, producing a step change in volume of the order of 1 %. Because this sits right at typical workshop temperature, small swings in room temperature produce disproportionately large changes in measured size. For close-tolerance parts:</p>
      <ul>
        <li>state on the drawing the temperature at which dimensions apply, for example 23 °C ± 2 °C;</li>
        <li>condition parts at that temperature for long enough to stabilise through their thickness before measuring;</li>
        <li>agree the measurement temperature between supplier and customer, so both inspections compare like with like.</li>
      </ul>

      <h3>Residual stress and stress relief</h3>
      <p>Moulded PTFE stock can contain residual stresses from moulding and sintering. Machining away material releases some of that stress, and the part can continue to move for some time afterwards — bores close up, rings go oval, flat parts bow. For precision parts, stock can be stress-relieved (annealed) before machining, or parts can be rough-machined, annealed and then finish-machined. Annealing means heating to a controlled temperature below the melting point, holding, then cooling slowly. If stress relief matters for your part, state it on the drawing.</p>

      <h2 id="design">Designing for tolerance</h2>
      <p>PTFE cannot be held to the same tolerances as metal parts in the same size range, and the measured result depends on temperature. The most useful step a designer can take is to separate functional dimensions from everything else:</p>
      <ul>
        <li>identify the few features that genuinely control function — a sealing diameter, a running clearance, a seat face — and tolerance those carefully;</li>
        <li>apply general tolerances to the rest, so effort and inspection go where they matter;</li>
        <li>allow for the part’s behaviour in service: creep under load, expansion with temperature and, in filled grades, slightly better stability than virgin.</li>
      </ul>
      ${dataTable(DESIGN_HEAD, DESIGN_ROWS)}

      <h3>Threads</h3>
      <p>Threads can be cut in PTFE, but they are weak and creep under sustained load. Coarse threads are more robust than fine ones. For joints that must stay tight — or be assembled and disassembled repeatedly — use a metal insert, a through-bolt with a nut, or a design in which the PTFE is clamped rather than threaded.</p>

      <h3>Thin walls and press-fits</h3>
      <p>Thin-walled sleeves and <a href="${c.r('products/ptfe-bushes/')}">bushes</a> are among the hardest PTFE parts to make accurately, because they deflect during machining and distort when released. When a PTFE bush is pressed into a housing, its bore also closes in — allow for this by finish-machining the bore after fitting, or by sizing it with the expected closure in mind. Because PTFE creeps, add mechanical retention rather than relying on interference alone.</p>

      <h2 id="drawing">What to put on the drawing</h2>
      <ol>
        <li><strong>Material and grade</strong> — virgin PTFE, or the filler and percentage (see <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>).</li>
        <li><strong>Dimensions and tolerances</strong>, with critical dimensions clearly identified.</li>
        <li><strong>Reference temperature</strong> at which dimensions apply.</li>
        <li><strong>Surface finish</strong> on sealing and running faces.</li>
        <li><strong>Edge treatment</strong> — chamfers, radii and permissible burr.</li>
        <li><strong>Stress relief</strong> requirement, if any.</li>
        <li><strong>Service conditions</strong> — temperature, media and mating parts — so the machinist understands the function.</li>
        <li><strong>Inspection requirements</strong> and quantity.</li>
      </ol>
      <p class="callout">The more a supplier understands about how the part works, the better the advice they can give on tolerances, grade and stock form. A note on function is often more useful than an extra decimal place.</p>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We <a href="${c.r('services/custom-ptfe-machining/')}">CNC-machine PTFE parts to drawing</a> from <a href="${c.r('products/ptfe-rods/')}">rod</a>, tube and sheet stock that we manufacture in virgin and filled grades. <a href="${c.r('contact/')}">Send us your drawing or sample</a> and we will review it and help you select a suitable grade.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#behaviour">Behaviour on the machine</a>
          <a href="#stability">Dimensional stability</a>
          <a href="#design">Designing for tolerance</a>
          <a href="#drawing">What to put on the drawing</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Send your drawing and we will comment on grade, stock form and manufacturability.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['custom-ptfe-machining', 'ptfe-rods', 'ptfe-bushes'])}
${relatedArticles(c, ['ptfe-properties', 'virgin-vs-filled-ptfe', 'ptfe-vs-peek'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'Have a Drawing for a PTFE Part?',
  lede: 'Send it over with your quantity and operating conditions. We will review it and quote for machining.',
})}`,
};
