import { pageHero, specTable, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';
import { VIRGIN_PROPERTIES, PROPERTY_NOTE } from '../../data/ptfe.mjs';

const LIMITS_HEAD = ['Limitation', 'What happens', 'How designers deal with it'];
const LIMITS_ROWS = [
  ['Creep (cold flow)', 'Sustained load causes slow, continuing deformation, even at room temperature', 'Keep bearing stress low, confine the material, use filled grades, allow for re-tightening of bolted joints'],
  ['High thermal expansion', 'Dimensions change far more with temperature than metal parts around them', 'Design clearances for the full temperature range; avoid relying on long-term interference fits'],
  ['Transition near 19 °C', 'A step change in volume close to normal workshop temperature', 'Measure parts at a stated, controlled temperature; specify that temperature on the drawing'],
  ['Poor radiation resistance', 'Ionising radiation breaks the polymer chains and the material becomes brittle', 'Choose a radiation-resistant polymer for nuclear service or gamma-sterilised parts'],
  ['Not melt-processable', 'Cannot be injection moulded or conventionally extruded like other thermoplastics', 'Parts are moulded and sintered as stock, then machined or cut to shape'],
  ['Difficult to bond', 'Very low surface energy — adhesives and paints do not wet the surface', 'Use etched surfaces for bonding, or retain parts mechanically'],
];

export default {
  path: 'resources/ptfe-properties/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'PTFE Properties: An Engineer’s Guide',
  title: 'PTFE Properties: An Engineer’s Guide | SK Polymers',
  description: 'Thermal, mechanical, electrical, chemical and friction properties of PTFE, plus the limits to design around: creep, expansion, radiation and bonding.',
  breadcrumbs: [['Resources', 'resources/'], ['PTFE Properties', 'resources/ptfe-properties/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'PTFE Properties: <span class="hl">An Engineer’s Guide</span>',
  lede: 'What PTFE does exceptionally well, where it falls short, and how those properties should shape the way you design, specify and buy PTFE parts.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">PTFE (polytetrafluoroethylene) is a fully fluorinated polymer: a carbon backbone completely sheathed in fluorine atoms. That structure explains almost everything about it — the chemical inertness, the very low friction, the wide temperature range and the excellent electrical insulation, but also the softness, creep and the difficulty of bonding it to anything.</p>
      <p>PTFE is widely known by the trade name Teflon™, a trademark of The Chemours Company. In industry, “Teflon” is often used loosely to mean PTFE in general; this guide is about the material, not any particular brand.</p>

      <h2 id="summary">Typical properties at a glance</h2>
      <p>The figures below are typical literature values for unfilled (virgin) PTFE. Use them for early design and comparison, then confirm grade-specific data for the material you will actually buy.</p>
      ${specTable(VIRGIN_PROPERTIES, PROPERTY_NOTE)}

      <h2 id="thermal">Thermal properties</h2>
      <p>PTFE has one of the widest service temperature ranges of any polymer — continuous service from approximately −200 °C to +260 °C. It stays tough and flexible at cryogenic temperatures where many plastics turn brittle, and it does not soften significantly until well above the temperatures most other thermoplastics can survive.</p>
      <ul>
        <li><strong>Crystalline melting point</strong> — approximately 327 °C. Above this, PTFE becomes a clear gel rather than a free-flowing melt.</li>
        <li><strong>Thermal conductivity</strong> — low (around 0.25 W/m·K), so PTFE is a reasonable thermal insulator. The flip side is that frictional heat in bearings and heat from machining are not carried away quickly.</li>
        <li><strong>Thermal expansion</strong> — high, roughly ten times that of steel at room temperature. This matters for every fit, clearance and gasket you design (see <a href="#limits">limits</a> below).</li>
        <li><strong>Overheating</strong> — heating PTFE well beyond its service limit, for example during welding or flame cutting of PTFE-lined equipment, releases hazardous decomposition fumes. Do not process PTFE above its rated temperature, and keep PTFE dust away from smoking materials.</li>
      </ul>

      <h2 id="mechanical">Mechanical properties</h2>
      <p>Mechanically, virgin PTFE is soft and ductile rather than strong. Typical values are a tensile strength of about 20–35 MPa, elongation at break of 250–400 % and hardness around 50–60 Shore D. Its tensile modulus is low — roughly 0.4–0.75 GPa — so PTFE parts deflect noticeably under load compared with engineering plastics such as acetal, nylon or PEEK.</p>
      <p>Two consequences follow:</p>
      <ul>
        <li><strong>PTFE is forgiving.</strong> It conforms to rough or uneven mating surfaces, which is why it seals well and why it tolerates misalignment in bushes.</li>
        <li><strong>PTFE is not a structural material.</strong> Where a part must carry sustained load, resist extrusion through a gap or hold a precise shape, either reduce the stress or move to a <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">filled grade</a>.</li>
      </ul>

      <h2 id="friction">Friction and wear</h2>
      <p>PTFE has one of the lowest coefficients of friction of any solid — typically 0.05–0.10 dynamic against polished steel. Static and dynamic friction are close together, so PTFE slides smoothly from rest without stick–slip. This is why it is used for slide bearings, expansion pads and dry-running bushes.</p>
      <p>Low friction is not the same as low wear. Virgin PTFE wears quickly in sliding service under load. Fillers such as glass, carbon, bronze and graphite reduce wear dramatically, at the cost of a small increase in friction, which is why most bearing and dynamic sealing applications use filled PTFE.</p>

      <h2 id="electrical">Electrical properties</h2>
      <p>Virgin PTFE is an excellent electrical insulator:</p>
      <ul>
        <li><strong>Low dielectric constant</strong> (approximately 2.1) that stays stable over a wide range of frequency and temperature.</li>
        <li><strong>Low dielectric loss</strong>, which is why PTFE is common in high-frequency and RF insulation.</li>
        <li><strong>Very high volume and surface resistivity</strong>, helped by near-zero water absorption (below 0.01 % in 24 hours).</li>
        <li><strong>Good arc resistance</strong> — PTFE does not form a carbonised conductive track when exposed to arcing.</li>
      </ul>
      <p>Carbon, graphite and bronze fillers make PTFE conductive or antistatic, so specify virgin (or a suitable non-conductive grade) for insulating parts.</p>

      <h2 id="chemical">Chemical resistance</h2>
      <p>Virgin PTFE resists virtually all industrial chemicals and solvents, across its full temperature range. The well-known exceptions are molten or dissolved alkali metals, elemental fluorine and chlorine trifluoride (particularly at elevated temperature and pressure), and certain halogenated compounds that can swell PTFE at high temperature. There is no known solvent for PTFE at ordinary temperatures.</p>
      <p>Two cautions: PTFE is not completely impermeable to some gases and vapours, and fillers can reduce chemical resistance. Our <a href="${c.r('resources/ptfe-chemical-resistance/')}">PTFE chemical resistance guide</a> covers both in detail.</p>
      <p>PTFE also does not absorb water, is unaffected by sunlight and weathering, and does not sustain combustion in air (limiting oxygen index above 95 %).</p>

      <h2 id="limits">Limits you must design around</h2>
      <p>Most PTFE failures in service trace back to one of the following properties being overlooked at the design stage.</p>
      ${dataTable(LIMITS_HEAD, LIMITS_ROWS)}

      <h3>Creep and cold flow</h3>
      <p>Under a constant load PTFE keeps deforming slowly over time, and the effect increases with temperature. In a bolted gasket this shows up as loss of bolt load (creep relaxation); in a bush or slide pad it shows up as permanent flattening. Confining the PTFE (for example in a groove or recess), reducing the bearing stress and using filled grades all help.</p>

      <h3>Thermal expansion and the ~19 °C transition</h3>
      <p>Besides its high expansion coefficient, PTFE goes through a crystalline transition at about 19 °C, with a further smaller one near 30 °C. Across this band the material changes volume by a step of the order of 1 %. Because the transition sits right at normal workshop temperature, the same part can measure differently in a cool morning inspection room and a warm afternoon. For precision parts, state the measurement temperature on the drawing — our <a href="${c.r('resources/machining-ptfe/')}">machining guide</a> explains how.</p>

      <h3>Poor radiation resistance</h3>
      <p>PTFE has poor resistance to ionising radiation. Gamma or electron-beam exposure breaks the polymer chains, and mechanical properties fall off at relatively low doses. Avoid PTFE for components in nuclear service or parts that will be radiation-sterilised; a radiation-resistant polymer such as PEEK is usually the better choice.</p>

      <h3>Not melt-processable</h3>
      <p>PTFE’s melt viscosity is so high that it cannot be injection moulded or extruded like normal thermoplastics. Instead, PTFE powder is compression moulded and sintered into sheets, rods, tubes and billets, or ram- and paste-extruded into profiles and tubing. Finished parts are then <a href="${c.r('services/custom-ptfe-machining/')}">machined</a> or cut from this stock. Where a moulded fluoropolymer part is essential, melt-processable fluoropolymers such as FEP or PFA are the usual alternatives.</p>

      <h3>Difficult to bond</h3>
      <p>PTFE’s non-stick surface means untreated PTFE cannot be reliably glued, painted or printed. For bonded linings and slide pads, the bonding face is chemically etched (or otherwise surface-treated) so adhesives can grip. Where possible, design for mechanical retention instead — grooves, clamping rings, press-fits with retaining features.</p>

      <h2 id="design-checklist">Practical design checklist</h2>
      <ol>
        <li>Confirm the full temperature range, including start-up, cleaning cycles and upsets.</li>
        <li>Check sustained stresses against creep, not just short-term strength.</li>
        <li>Allow for thermal expansion in clearances, fits and gasket compression.</li>
        <li>Check the media for the known exceptions, and check fillers if you use a filled grade.</li>
        <li>Rule out radiation exposure and radiation sterilisation.</li>
        <li>Plan for mechanical retention or etched surfaces if the part must be fixed in place.</li>
      </ol>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We manufacture PTFE <a href="${c.r('products/ptfe-sheets/')}">sheets</a>, rods, tubes, gaskets, bushes and seals in virgin and filled grades, and cut or CNC-machine parts to your drawing. If you are unsure whether PTFE’s properties suit your application, <a href="${c.r('contact/')}">send us the operating conditions</a> and we will help you choose a grade.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#summary">Typical properties</a>
          <a href="#thermal">Thermal</a>
          <a href="#mechanical">Mechanical</a>
          <a href="#friction">Friction and wear</a>
          <a href="#electrical">Electrical</a>
          <a href="#chemical">Chemical resistance</a>
          <a href="#limits">Design limits</a>
          <a href="#design-checklist">Design checklist</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Share your temperature, load and media, and we will suggest a suitable PTFE grade.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['ptfe-sheets', 'ptfe-rods', 'custom-ptfe-machining'])}
${relatedArticles(c, ['virgin-vs-filled-ptfe', 'ptfe-chemical-resistance', 'machining-ptfe'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'Designing a PTFE Part?',
  lede: 'Send your drawing and operating conditions. We will recommend a grade and quote for manufacture.',
})}`,
};
