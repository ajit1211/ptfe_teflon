import { pageHero, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';

const R = 'Generally resistant';
const C = 'Check conditions';
const N = 'Not recommended';

const CHEM_HEAD = ['Chemical class', 'Virgin', 'Glass-filled', 'Carbon-filled', 'Bronze-filled', 'Graphite-filled'];
const CHEM_ROWS = [
  ['Non-oxidising mineral acids<br><small>e.g. hydrochloric, dilute sulphuric, phosphoric</small>', R, R, R, N, R],
  ['Oxidising acids<br><small>e.g. nitric, concentrated sulphuric, chromic</small>', R, R, C, N, C],
  ['Hydrofluoric acid', R, N, C, N, C],
  ['Strong alkalis, hot or concentrated<br><small>e.g. sodium or potassium hydroxide</small>', R, N, R, C, R],
  ['Ammonia and amines', R, R, R, N, R],
  ['Strong oxidising agents<br><small>e.g. hypochlorite, peroxides, wet chlorine</small>', R, R, C, C, C],
  ['Organic solvents<br><small>hydrocarbons, alcohols, ketones, esters</small>', R, R, R, R, R],
  ['Halogenated solvents at elevated temperature', C, C, C, C, C],
  ['Hot water and steam', R, C, R, C, R],
  ['Molten or dissolved alkali metals; elemental fluorine; chlorine trifluoride', N, N, N, N, N],
];
const CHEM_NOTE = 'General guidance only, based on published compatibility data for PTFE and common filler types. Ratings assume the filler is exposed to the media. Concentration, temperature, pressure, the exact compound and the duty (static or dynamic) all change the answer — test under your own conditions.';

export default {
  path: 'resources/ptfe-chemical-resistance/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'PTFE Chemical Resistance Guide',
  title: 'PTFE Chemical Resistance Guide | SK Polymers',
  description: 'What PTFE resists, the few chemicals that attack it, how permeation and fillers change the picture, and a chemical-class table for virgin and filled grades.',
  breadcrumbs: [['Resources', 'resources/'], ['PTFE Chemical Resistance', 'resources/ptfe-chemical-resistance/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'PTFE Chemical <span class="hl">Resistance Guide</span>',
  lede: 'PTFE is close to universally chemically resistant — but “close to” matters. This guide covers the exceptions, permeation, and how fillers change what a PTFE part can handle.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">PTFE is chosen for chemical service more than for any other reason. Its fully fluorinated structure leaves almost nothing for chemicals to attack, so virgin PTFE resists virtually every industrial acid, alkali, oxidiser and solvent across its full temperature range. The practical questions are usually not about the PTFE itself, but about the few exceptions, about permeation, and about the filler in a filled grade.</p>

      <h2 id="why">Why PTFE is so resistant</h2>
      <p>PTFE is a long carbon chain completely surrounded by fluorine atoms. The carbon–fluorine bond is one of the strongest in organic chemistry, and the tightly packed fluorine sheath shields the carbon backbone from attack. The result is a polymer that:</p>
      <ul>
        <li>is not attacked by concentrated mineral acids, including oxidising acids such as nitric and concentrated sulphuric acid;</li>
        <li>is not attacked by strong alkalis, even hot;</li>
        <li>has no known solvent at ordinary temperatures, so it does not dissolve, and swells only slightly in a few compounds;</li>
        <li>absorbs practically no water (below 0.01 % in 24 hours) and is unaffected by weathering.</li>
      </ul>
      <p>Temperature changes the picture less for PTFE than for most plastics. Its chemical resistance holds across its service range, so at high temperature the limiting factors are usually mechanical — creep, loss of bolt load in a gasket, or extrusion of a seal — and permeation, rather than chemical attack.</p>
      <p>This is why PTFE is used for <a href="${c.r('products/ptfe-gaskets/')}">gaskets</a>, linings, valve seats, <a href="${c.r('products/ptfe-tubes/')}">tubing</a> and seals in chemical, pharmaceutical and process plant.</p>

      <h2 id="exceptions">The known exceptions</h2>
      <p>A short list of substances can attack or degrade PTFE. All are rare in normal process plant, but they must be ruled out:</p>
      <ul>
        <li><strong>Molten alkali metals</strong> such as sodium and potassium, and alkali metals dissolved in solvents such as liquid ammonia. These strip fluorine from the polymer surface — the same chemistry used deliberately to etch PTFE for bonding.</li>
        <li><strong>Elemental fluorine and chlorine trifluoride</strong>, and similar powerful fluorinating agents, particularly at elevated temperature and pressure.</li>
        <li><strong>Some halogenated compounds</strong>, particularly certain highly fluorinated or chlorinated solvents, which can cause PTFE to swell at high temperature. This is usually physical swelling rather than chemical attack, but it can still affect dimensions and sealing.</li>
      </ul>
      <p class="callout">If your process involves any of these — even occasionally, during cleaning or an upset — treat PTFE as unproven and discuss the application before specifying it.</p>

      <h2 id="permeation">Permeation: the less obvious limit</h2>
      <p>Resistance to attack is not the same as being impermeable. Small molecules of some gases and vapours can slowly diffuse through PTFE without damaging it. In most gaskets and seals this is negligible, but it matters in some situations:</p>
      <ul>
        <li><strong>PTFE linings.</strong> Media permeating through a lining can corrode the metal behind it, or collect between lining and shell and cause blistering.</li>
        <li><strong>Thin-walled tubing and diaphragms</strong>, where the diffusion path is short.</li>
        <li><strong>Hot service.</strong> Permeation rates rise with temperature.</li>
      </ul>
      <p>Permeation generally decreases with greater wall thickness and with denser, well-sintered material free of voids. Where permeation is a concern, specify adequate thickness, ask about material density and consider permeation when choosing between PTFE and other fluoropolymers.</p>

      <h2 id="fillers">How fillers change chemical resistance</h2>
      <p>In a filled grade, the media meets both the PTFE and the filler at the surface — and at any cut or machined face, filler particles are directly exposed. The filler therefore sets the chemical limits of the compound:</p>
      <ul>
        <li><strong>Glass</strong> is attacked by hydrofluoric acid and by hot strong alkalis.</li>
        <li><strong>Bronze</strong> is attacked by many acids and by ammonia, and can be affected in oxidising media.</li>
        <li><strong>Carbon and graphite</strong> are broadly resistant but can be attacked by strong oxidising agents, particularly hot.</li>
      </ul>
      <p>When a filler is attacked, the surface can become porous or pitted, the part can lose strength, and the dissolved filler can contaminate the process. The PTFE itself remains intact, so the damage can go unnoticed until the part leaks or wears out. See our guide to <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a> for the mechanical side of the trade-off.</p>

      <h2 id="table">Compatibility by chemical class and grade</h2>
      <p>The table below gives a general picture for the common grades. “Generally resistant” means the material is widely used in that class of media; “Check conditions” means suitability depends on concentration, temperature or the specific chemical; “Not recommended” means the PTFE or the filler is known to be attacked.</p>
      ${dataTable(CHEM_HEAD, CHEM_ROWS, CHEM_NOTE)}

      <h3>Reading the table</h3>
      <ul>
        <li>The virgin PTFE column reflects the polymer itself. Its only “Not recommended” entries are the known exceptions above.</li>
        <li>Filled grade ratings are driven by the filler. A filler rated “Check conditions” may be perfectly acceptable at low concentration and ambient temperature, and unacceptable hot and concentrated.</li>
        <li>Mixtures can behave differently from their components. An oxidising acid mixed with a halide, or a solvent carrying dissolved salts, may attack a filler that each component alone would not.</li>
        <li>Chemical resistance is only one requirement. A gasket can be chemically compatible and still fail through creep, blow-out or permeation — see <a href="${c.r('resources/ptfe-gasket-selection/')}">selecting a PTFE gasket</a>.</li>
      </ul>

      <h2 id="testing">Test under your conditions</h2>
      <p>Published compatibility data is a starting point, not a guarantee. Real process streams are mixtures, contain trace contaminants, cycle in temperature and see cleaning chemicals that never appear on the process data sheet. Before committing to a material for critical or unusual service:</p>
      <ol>
        <li>List every chemical the part will meet, including cleaning, passivation and flushing agents, with concentrations.</li>
        <li>Record the normal and maximum temperature and pressure, and whether exposure is continuous or intermittent.</li>
        <li>Expose a sample of the actual grade to the actual media under representative conditions, then check weight, dimensions, hardness and appearance.</li>
        <li>For filled grades, examine cut faces where filler is exposed, not just the moulded surface.</li>
        <li>Monitor the first parts in service before rolling the material out across a plant.</li>
      </ol>
      <p class="callout">This guide is general information. It is not a guarantee of performance in any specific application. The user is responsible for confirming suitability under actual operating conditions.</p>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We manufacture PTFE <a href="${c.r('products/ptfe-sheets/')}">sheets</a>, rods, tubes, gaskets, bushes and seals in virgin and filled grades, and machine parts to drawing. <a href="${c.r('contact/')}">Send us your media, concentration and temperature</a> and we will help you select a suitable virgin or filled grade.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#why">Why PTFE is resistant</a>
          <a href="#exceptions">Known exceptions</a>
          <a href="#permeation">Permeation</a>
          <a href="#fillers">Effect of fillers</a>
          <a href="#table">Compatibility table</a>
          <a href="#testing">Test under your conditions</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Send your media, concentration and temperature and we will suggest a suitable grade.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['ptfe-gaskets', 'ptfe-sheets', 'ptfe-tubes'])}
${relatedArticles(c, ['virgin-vs-filled-ptfe', 'ptfe-properties', 'ptfe-gasket-selection'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'Aggressive Media? Ask Before You Specify.',
  lede: 'Tell us the chemicals, concentrations and temperatures involved. We will recommend a suitable PTFE grade and quote for supply.',
})}`,
};
