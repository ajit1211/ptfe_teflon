import { pageHero, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';

const TYPE_HEAD = ['Gasket type', 'Strengths', 'Limitations', 'Typical use'];
const TYPE_ROWS = [
  ['Solid virgin PTFE<br><small>skived or moulded sheet</small>', 'Widest chemical resistance; high purity; simple to cut', 'Creeps and relaxes under bolt load, especially when hot; limited conformability', 'Low-pressure, near-ambient chemical and hygienic joints'],
  ['Filled / restructured PTFE sheet', 'Much lower creep and better bolt-load retention than solid virgin', 'Filler sets the chemical limits; needs adequate bolt load to seat', 'General process piping on steel raised-face flanges'],
  ['Expanded PTFE (ePTFE)', 'Very soft and conformable; seals at low bolt load; fills surface damage', 'Thins considerably on compression; needs suitable bolt load and correct handling', 'Glass-lined, FRP, plastic-lined and uneven or damaged flanges'],
  ['Envelope gasket<br><small>PTFE jacket over an insert</small>', 'PTFE faces the media while the insert provides resilience', 'Insert must not be exposed to media; jacket can be damaged by poor fit-up', 'Glass-lined and enamelled equipment, large or fragile flanges'],
];
const TYPE_NOTE = 'General comparison. Performance depends on the specific product, thickness and installation — use the gasket data sheet for design values.';

const FLANGE_HEAD = ['Flange type / condition', 'What it needs', 'Gasket types to consider'];
const FLANGE_ROWS = [
  ['Steel raised-face, good condition', 'Good bolt-load retention and blow-out resistance', 'Filled / restructured PTFE sheet; solid PTFE for mild duty'],
  ['Steel flat-face', 'Full-face gasket so the bolt load does not bend the flanges', 'Full-face filled PTFE sheet or ePTFE'],
  ['Glass-lined or enamelled', 'Low seating stress; conforms to waviness without point loads', 'Envelope gaskets with a soft insert; ePTFE'],
  ['FRP or plastic', 'Seals at low bolt load so flanges are not cracked or distorted', 'ePTFE or soft envelope gaskets; full-face where appropriate'],
  ['Damaged, pitted or warped', 'High conformability to fill irregularities', 'ePTFE, or thicker soft gaskets — repair the flange where possible'],
];

export default {
  path: 'resources/ptfe-gasket-selection/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'Selecting a PTFE Gasket',
  title: 'Selecting a PTFE Gasket: Types & Checklist | SK Polymers',
  description: 'Solid, filled, expanded or envelope PTFE gaskets: how to match type to media, temperature, pressure, flange condition and bolt load, plus a spec checklist.',
  breadcrumbs: [['Resources', 'resources/'], ['Selecting a PTFE Gasket', 'resources/ptfe-gasket-selection/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'Selecting a <span class="hl">PTFE Gasket</span>',
  lede: 'PTFE gaskets seal almost any chemical — but only if the gasket construction suits the flange, the bolt load and the temperature. Here is how to match them.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">PTFE is the default gasket material wherever the media is corrosive or purity matters. But “PTFE gasket” covers several quite different constructions, and the most common cause of a leaking PTFE joint is not chemical attack — it is a gasket that has crept, lost its bolt load or failed to seat on the flange it was fitted to.</p>

      <h2 id="types">The four main types of PTFE gasket</h2>
      ${dataTable(TYPE_HEAD, TYPE_ROWS, TYPE_NOTE)}

      <h3>Solid virgin PTFE</h3>
      <p>Cut from skived or moulded <a href="${c.r('products/ptfe-sheets/')}">PTFE sheet</a>, solid virgin gaskets offer the broadest chemical resistance and the highest purity. Their weakness is creep: under bolt load the PTFE slowly flows outwards, the gasket thins and bolt load falls. This gets worse as temperature rises. Solid virgin gaskets suit low-pressure joints near ambient temperature, or joints where the gasket is confined, for example in a tongue-and-groove or spigot-and-recess flange.</p>

      <h3>Filled and restructured PTFE sheet</h3>
      <p>Adding fillers — common examples are silica, barium sulphate and glass microspheres — and processing the sheet to create a more stable structure greatly reduces creep and improves bolt-load retention. These sheets are the usual choice for steel raised-face flanges in process piping. The filler governs chemical suitability: for example, silica- and glass-based fillers are not suited to hydrofluoric acid or hot strong alkalis. Always check the specific sheet against your media.</p>

      <h3>Expanded PTFE (ePTFE)</h3>
      <p>Expanded PTFE is stretched during manufacture to create a soft, microporous, fibrous structure. It compresses readily, seals at low seating stress and flows into scratches, pits and waviness in the flange face. That makes it a strong choice for fragile or imperfect flanges. It is supplied as sheet for cut gaskets and as tape or cord that can be formed in place on large or non-standard flanges. Expect a large reduction in thickness on compression, and follow the supplier’s installation guidance.</p>

      <h3>Envelope gaskets</h3>
      <p>An envelope gasket has a thin PTFE jacket wrapped around a compressible insert, such as a fibre-based or elastomeric sheet, sometimes with a metal reinforcement. The PTFE provides chemical resistance at the wetted inner edge and faces; the insert provides the resilience that solid PTFE lacks. Envelope gaskets are widely used on glass-lined vessels and large equipment flanges. The insert must be fully protected from the media, so the envelope’s inner diameter must match the bore and the gasket must be centred correctly.</p>

      <h2 id="matching">Matching the gasket to the service</h2>
      <h3>Media</h3>
      <p>Virgin PTFE handles virtually all process chemicals, with a small number of known exceptions. With filled sheets and envelope gaskets, check the filler or insert as well. Include cleaning and flushing chemicals, not just the process stream. Our <a href="${c.r('resources/ptfe-chemical-resistance/')}">chemical resistance guide</a> has the details.</p>

      <h3>Temperature</h3>
      <p>PTFE’s continuous service range extends to approximately 260 °C, but creep and bolt-load loss increase as temperature rises. At elevated temperature, restructured sheet or ePTFE generally holds load better than solid virgin PTFE. Thermal cycling is harder on a joint than steady temperature, because PTFE’s high thermal expansion causes the gasket stress to rise and fall with each cycle.</p>

      <h3>Pressure</h3>
      <p>Higher pressure demands better blow-out resistance and bolt-load retention. Thinner gaskets and confined designs perform better than thick, unconfined ones. For higher-pressure duty, filled or restructured sheet is usually preferred to solid virgin PTFE. Consider hydrostatic test pressure as well as operating pressure.</p>

      <h3>Flange type and condition</h3>
      ${dataTable(FLANGE_HEAD, FLANGE_ROWS)}

      <h2 id="bolting">Bolt load and creep relaxation</h2>
      <p>Every gasket needs enough compressive stress to seat it and enough remaining stress in service to keep it sealed. PTFE complicates this because it relaxes: some of the bolt load applied at assembly is lost over the following hours as the gasket creeps. Good practice includes:</p>
      <ul>
        <li><strong>Using the thinnest gasket the flange condition allows.</strong> Thinner gaskets creep less and resist blow-out better.</li>
        <li><strong>Tightening in a cross pattern in several stages</strong> to compress the gasket evenly.</li>
        <li><strong>Re-tightening after an initial settling period</strong>, before the system is pressurised or heated, where the gasket supplier and your bolting procedure allow it.</li>
        <li><strong>Respecting the flange’s limits.</strong> Glass-lined and FRP flanges can be damaged by excessive bolt load; choose a gasket that seals within the torque the flange can safely take.</li>
        <li><strong>Using lubricated, well-maintained bolting</strong> so applied torque translates into consistent bolt load.</li>
      </ul>

      <h2 id="dimensions">Dimensional standards</h2>
      <p>For standard pipe flanges, gasket dimensions are commonly specified by reference to published standards — for example <strong>ASME B16.21</strong> for non-metallic flat gaskets on ASME flanges, and <strong>EN 1514-1</strong> for non-metallic flat gaskets on PN-designated flanges. Quote the standard, nominal size and pressure class or PN rating, and say whether you need a ring (inside-bolt-circle) gasket or a full-face gasket with bolt holes. For non-standard flanges, a dimensioned drawing or a sample is best. These standards are references for dimensions; they do not by themselves define the material or its suitability for your service.</p>

      <h2 id="checklist">Checklist for specifying a PTFE gasket</h2>
      <ol>
        <li><strong>Flange</strong> — standard, nominal size and class or PN; or ID, OD, bolt-hole count, diameter and PCD.</li>
        <li><strong>Style</strong> — ring or full-face; flat, raised-face, tongue-and-groove or other.</li>
        <li><strong>Flange material and condition</strong> — steel, glass-lined, FRP, plastic; any damage or waviness.</li>
        <li><strong>Gasket type and grade</strong> — solid virgin, filled or restructured, ePTFE or envelope (with insert material).</li>
        <li><strong>Thickness</strong> — and any tolerance that matters.</li>
        <li><strong>Media</strong> — all chemicals with concentrations, including cleaning agents.</li>
        <li><strong>Temperature</strong> — normal, maximum and whether it cycles.</li>
        <li><strong>Pressure</strong> — operating and test.</li>
        <li><strong>Bolting</strong> — size, number, material and the torque the flange allows.</li>
        <li><strong>Quantity</strong> — and whether it is a one-off or repeat requirement.</li>
      </ol>
      <p class="callout">Gasket selection affects safety. Final selection, bolt loads and installation procedure should be confirmed by the responsible engineer using the gasket supplier’s data and your plant’s bolting procedures.</p>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We manufacture <a href="${c.r('products/ptfe-gaskets/')}">PTFE gaskets and rings</a> cut from virgin and filled PTFE sheet to standard sizes or to your drawing. <a href="${c.r('contact/')}">Send us your flange details and service conditions</a> and we will help you select a suitable grade.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#types">Gasket types</a>
          <a href="#matching">Matching to service</a>
          <a href="#bolting">Bolt load and creep</a>
          <a href="#dimensions">Dimensional standards</a>
          <a href="#checklist">Specification checklist</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Send your flange size, media and temperature and we will suggest a suitable gasket grade.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['ptfe-gaskets', 'ptfe-sheets', 'ptfe-seals'])}
${relatedArticles(c, ['ptfe-chemical-resistance', 'virgin-vs-filled-ptfe', 'ptfe-properties'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'Need Gaskets Cut to Size?',
  lede: 'Send your flange standard, size and service conditions, or a drawing. We will recommend a grade and quote for supply.',
})}`,
};
