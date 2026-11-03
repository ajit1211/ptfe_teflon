import { pageHero, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';

const CMP_HEAD = ['Property', 'PTFE (virgin)', 'PEEK (unfilled)'];
const CMP_ROWS = [
  ['Density', '2.14–2.20 g/cm³', 'approx. 1.3 g/cm³'],
  ['Tensile strength', 'approx. 20–35 MPa', 'approx. 90–100 MPa'],
  ['Tensile modulus', 'approx. 0.4–0.75 GPa', 'approx. 3.5–4 GPa'],
  ['Creep under sustained load', 'High (cold flow)', 'Low'],
  ['Coefficient of friction', 'approx. 0.05–0.10 dynamic on steel — among the lowest of any solid', 'Considerably higher; bearing grades are modified with PTFE, graphite or carbon fibre'],
  ['Continuous service temperature', 'approx. −200 °C to +260 °C', 'approx. 250 °C (upper)'],
  ['Melting point', 'approx. 327 °C (very high melt viscosity — does not flow readily)', 'approx. 343 °C'],
  ['Chemical resistance', 'Resists virtually all industrial chemicals', 'Very good, but attacked by concentrated sulphuric acid and some strong oxidisers'],
  ['Hot water and steam', 'Unaffected', 'Good hydrolysis resistance'],
  ['Ionising radiation', 'Poor', 'Good'],
  ['Dielectric constant', 'approx. 2.1, very stable', 'Higher than PTFE'],
  ['Processing', 'Compression moulded and sintered, then machined', 'Melt-processable: injection moulded, extruded or machined'],
  ['Relative material cost', 'Lower', 'Considerably higher'],
];
const CMP_NOTE = 'Typical literature values for unfilled grades, for comparison only. Filled grades of both materials differ significantly — confirm data for the specific grade.';

export default {
  path: 'resources/ptfe-vs-peek/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'PTFE vs PEEK: Which Polymer When?',
  title: 'PTFE vs PEEK: Which Polymer When? | SK Polymers',
  description: 'PTFE vs PEEK compared on friction, strength, creep, temperature, chemical and radiation resistance, processing and cost — with guidance on when to use each.',
  breadcrumbs: [['Resources', 'resources/'], ['PTFE vs PEEK', 'resources/ptfe-vs-peek/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'PTFE vs PEEK: <span class="hl">Which Polymer When?</span>',
  lede: 'Both are high-performance polymers that survive heat and aggressive chemicals, but they solve very different engineering problems. Here is how they compare.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">PTFE and PEEK often appear on the same shortlist: both run at around 250 °C, both resist a wide range of chemicals, and both are used for seals, valve seats, bushes and insulators. In practice they are rarely interchangeable. PTFE is soft, slippery and almost chemically inert; PEEK is strong, stiff and dimensionally stable. Choosing between them starts with asking which of those qualities your part actually needs.</p>

      <h2 id="comparison">Side-by-side comparison</h2>
      ${dataTable(CMP_HEAD, CMP_ROWS, CMP_NOTE)}
      <p>The pattern is consistent: PEEK wins on mechanical performance, dimensional stability and radiation resistance; PTFE wins on friction, chemical inertness, low-temperature toughness, electrical properties and cost. Temperature, often the first thing people check, is rarely the deciding factor, because both materials have similar upper limits.</p>

      <h2 id="mechanical">Strength, stiffness and creep</h2>
      <p>This is the biggest difference. Unfilled PEEK has roughly three to four times the tensile strength of PTFE and is around five to ten times as stiff. It holds its shape under sustained load, resists extrusion into clearance gaps and can carry structural loads in a way PTFE cannot.</p>
      <p>PTFE’s low stiffness and tendency to creep are a weakness for structural parts but an advantage for sealing: it conforms to the mating surface at low contact stress. Fillers narrow the gap — <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">filled PTFE grades</a> resist creep much better than virgin — but even heavily filled PTFE does not approach PEEK’s stiffness.</p>
      <p>One nuance: PEEK’s glass transition sits at roughly 140–145 °C. Above it PEEK remains useful, but its stiffness falls noticeably, so its advantage over PTFE is largest at moderate temperatures.</p>

      <h2 id="friction">Friction and wear</h2>
      <p>PTFE has one of the lowest coefficients of friction of any solid (approximately 0.05–0.10 dynamic against steel), with no stick–slip. Unfilled PEEK’s friction is considerably higher. For sliding and bearing service, PEEK is normally used as a “bearing grade” modified with PTFE, graphite and carbon fibre — which is itself a sign of how valuable PTFE’s lubricity is.</p>
      <p>On wear, the picture reverses: virgin PTFE wears quickly under load, while PEEK and its bearing grades handle much higher pressures and speeds. Filled PTFE sits between the two.</p>

      <h2 id="temperature">Temperature range</h2>
      <p>Both materials have upper continuous service limits in the same region — about 260 °C for PTFE and about 250 °C for PEEK. The differences are elsewhere:</p>
      <ul>
        <li><strong>At low temperature</strong>, PTFE stays tough and flexible down to cryogenic temperatures, which is why it is common in cryogenic seals and valve seats.</li>
        <li><strong>At high temperature under load</strong>, PEEK keeps far more of its strength, while PTFE creeps faster as temperature rises.</li>
        <li><strong>Dimensionally</strong>, PTFE has a high thermal expansion and a crystalline transition near 19 °C; PEEK expands less and has no such room-temperature transition.</li>
      </ul>

      <h2 id="chemical">Chemical, hydrolysis and radiation resistance</h2>
      <p>PTFE is the more chemically resistant of the two. Virgin PTFE resists virtually all industrial chemicals; the exceptions are molten or dissolved alkali metals, elemental fluorine and chlorine trifluoride, and swelling in some halogenated compounds at high temperature (see our <a href="${c.r('resources/ptfe-chemical-resistance/')}">chemical resistance guide</a>). PEEK has very good resistance to most chemicals, but it is attacked by concentrated sulphuric acid and some strong oxidising agents.</p>
      <p>Both handle hot water and steam well; PEEK’s hydrolysis resistance is one reason it is used in repeatedly steam-sterilised components.</p>
      <p>Radiation is where PEEK clearly wins. PTFE has poor resistance to ionising radiation and becomes brittle at relatively low doses; PEEK tolerates radiation well. For nuclear service or gamma-sterilised parts, PEEK is usually the better choice.</p>

      <h2 id="electrical">Electrical properties</h2>
      <p>Both are good insulators. PTFE has the lower and more stable dielectric constant (approximately 2.1) and very low dielectric loss, so it is preferred for high-frequency insulation, RF connectors and cable dielectrics. PEEK is chosen where an insulator must also be strong and stiff — structural insulating parts, terminal blocks and connectors that carry mechanical load.</p>

      <h2 id="processing">Processing and part manufacture</h2>
      <p>PEEK is melt-processable. It can be injection moulded, which makes high-volume, complex parts economical once a mould exists, and it can also be extruded and machined from stock.</p>
      <p>PTFE is not melt-processable. It is compression moulded and sintered into sheets, rods, tubes and billets, and finished parts are <a href="${c.r('services/custom-ptfe-machining/')}">machined from that stock</a> or cut from sheet. This favours prototypes, low and medium volumes, and large or simple shapes, with no mould cost — but complex parts in high volume can cost more to machine than to mould.</p>

      <h2 id="cost">Cost</h2>
      <p>PEEK is considerably more expensive than PTFE as a raw material. The gap narrows somewhat when comparing by volume, because PEEK is much less dense (about 1.3 g/cm³ against roughly 2.2 g/cm³ for PTFE), and part cost also depends on machining time and quantity. Even so, specifying PEEK where PTFE would do the job adds cost without benefit — and vice versa, using PTFE where PEEK is needed leads to early failures that cost more than the material saving.</p>

      <h2 id="when">When to use each</h2>
      <h3>Choose PTFE when</h3>
      <ul>
        <li>the media is highly aggressive or not fully defined;</li>
        <li>you need the lowest friction, non-stick behaviour or smooth stick–slip-free motion;</li>
        <li>the part seals by conforming — <a href="${c.r('products/ptfe-gaskets/')}">gaskets</a>, seals and seat inserts at modest loads;</li>
        <li>the service extends to cryogenic temperatures;</li>
        <li>high-frequency electrical performance matters;</li>
        <li>cost matters and the mechanical demands are modest.</li>
      </ul>
      <h3>Choose PEEK when</h3>
      <ul>
        <li>the part carries structural or sustained load, or must hold close tolerances at temperature;</li>
        <li>creep or extrusion would defeat PTFE, for example high-pressure valve seats and back-up rings;</li>
        <li>the part sees ionising radiation or radiation sterilisation;</li>
        <li>high volumes justify injection moulding a complex shape.</li>
      </ul>
      <h3>Consider combining them</h3>
      <p>Many good designs use both: a PEEK body or back-up ring to carry load and prevent extrusion, with a PTFE seal or seat face to provide sealing and low friction. Filled PTFE is also worth evaluating before moving to PEEK — it often resolves creep and wear problems at lower cost.</p>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We manufacture PTFE <a href="${c.r('products/ptfe-rods/')}">rods</a>, sheets, tubes, gaskets, bushes and seals in virgin and filled grades, and CNC-machine parts to drawing. If you are weighing PTFE against another polymer, <a href="${c.r('contact/')}">share your operating conditions</a> and we will help you judge whether a PTFE grade will do the job.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#comparison">Comparison table</a>
          <a href="#mechanical">Strength and creep</a>
          <a href="#friction">Friction and wear</a>
          <a href="#temperature">Temperature</a>
          <a href="#chemical">Chemical and radiation</a>
          <a href="#electrical">Electrical</a>
          <a href="#processing">Processing</a>
          <a href="#cost">Cost</a>
          <a href="#when">When to use each</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Tell us the load, temperature and media and we will advise whether a PTFE grade fits.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['ptfe-rods', 'ptfe-seals', 'custom-ptfe-machining'])}
${relatedArticles(c, ['ptfe-properties', 'virgin-vs-filled-ptfe', 'ptfe-chemical-resistance'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'PTFE or Something Else?',
  lede: 'Send your drawing and operating conditions. We will tell you whether a PTFE grade suits the job and quote for manufacture.',
})}`,
};
