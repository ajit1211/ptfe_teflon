import { pageHero, dataTable, relatedProducts, relatedArticles, ctaBand, icon } from '../../layout.mjs';
import { GRADE_HEAD, GRADE_ROWS, GRADE_NOTE } from '../../data/ptfe.mjs';

const EFFECT_HEAD = ['Property', 'Virgin PTFE', 'Effect of adding filler'];
const EFFECT_ROWS = [
  ['Wear resistance', 'Poor in sliding service under load', 'Greatly improved — the main reason fillers are used'],
  ['Creep / cold flow', 'Highest', 'Reduced; bronze and carbon grades are among the most stable'],
  ['Compressive strength', 'Lowest', 'Increased'],
  ['Coefficient of friction', 'Lowest (approx. 0.05–0.10 dynamic on steel)', 'Usually slightly higher; graphite and MoS₂ help keep it low'],
  ['Thermal conductivity', 'Low', 'Increased, especially with bronze and carbon'],
  ['Thermal expansion', 'High', 'Reduced, but still well above metals'],
  ['Electrical insulation', 'Excellent', 'Reduced; carbon, graphite and bronze grades are conductive or antistatic'],
  ['Chemical resistance', 'Resists virtually all industrial chemicals', 'Limited by the filler — see the watch-outs below'],
  ['Tensile strength and elongation', 'Approx. 20–35 MPa; 250–400 % elongation', 'Generally lower — filled grades are stiffer but less ductile'],
  ['Mating surface', 'Kind to soft shafts', 'Glass in particular can be abrasive to soft metals'],
];

const SELECT_HEAD = ['If your main requirement is…', 'Start by considering'];
const SELECT_ROWS = [
  ['Widest chemical resistance, high purity, electrical insulation', 'Virgin PTFE'],
  ['A stiffer, more creep-resistant gasket or valve seat in general chemical service', 'Glass-filled PTFE'],
  ['Dry or water-lubricated running, steam, wear resistance with good chemical resistance', 'Carbon-filled (often with graphite)'],
  ['Hydraulic seals and guide rings, highest load and creep resistance, heat dissipation', 'Bronze-filled PTFE'],
  ['Lowest friction against softer shafts', 'Graphite-filled PTFE'],
  ['Improved dry-running and surface hardness on top of another filler', 'A MoS₂-modified glass or bronze compound'],
];

export default {
  path: 'resources/virgin-vs-filled-ptfe/',
  nav: 'resources',
  article: true,
  published: '2026-11-03',
  updated: '2026-11-03',
  h1Text: 'Virgin vs Filled PTFE: Choosing a Grade',
  title: 'Virgin vs Filled PTFE: Choosing a Grade | SK Polymers',
  description: 'How glass, carbon, bronze, graphite and MoS₂ fillers change PTFE’s wear, creep, friction, conductivity and chemical resistance — and how to pick a grade.',
  breadcrumbs: [['Resources', 'resources/'], ['Virgin vs Filled PTFE', 'resources/virgin-vs-filled-ptfe/']],
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Technical Guide',
  title: 'Virgin vs Filled PTFE: <span class="hl">Choosing a Grade</span>',
  lede: 'Fillers turn soft, creep-prone PTFE into a material that can carry load and resist wear — but every filler brings trade-offs. Here is how to choose.',
  actions: '',
})}

<section class="section section-light" aria-label="Article">
  <div class="container content-layout">
    <article class="prose">
      <p class="lead">Virgin PTFE has outstanding chemical resistance, very low friction and excellent electrical insulation, but it is soft, it creeps under sustained load and it wears quickly in sliding contact. Filled PTFE addresses those weaknesses by blending a reinforcing material into the PTFE powder before moulding. The right choice depends on which property limits your application.</p>

      <h2 id="virgin">What virgin PTFE offers</h2>
      <p>Virgin (unfilled) PTFE is made from PTFE resin alone. It is the default choice when:</p>
      <ul>
        <li>the media is aggressive and you want the broadest possible chemical resistance;</li>
        <li>the part is an electrical insulator, or must not be conductive;</li>
        <li>purity matters — for example in food, pharmaceutical or laboratory equipment (ask for compliance documentation for contact applications);</li>
        <li>loads are low and static, or the PTFE is well confined.</li>
      </ul>
      <p>Its weaknesses are mechanical: low compressive strength, cold flow under load and a high wear rate. For a full overview of the base material, see our <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.</p>

      <h2 id="fillers">How fillers change PTFE</h2>
      <p>Fillers are inert particles or fibres dispersed through the PTFE. They do not react with it; instead they carry part of the load, resist the material flowing away under pressure and protect the PTFE matrix from wear. The general effects are consistent across filler types, though their size differs:</p>
      ${dataTable(EFFECT_HEAD, EFFECT_ROWS, 'General trends from published data. The size of each effect depends on the filler type and percentage.')}

      <h2 id="grades">The common filled grades</h2>
      ${dataTable(GRADE_HEAD, GRADE_ROWS, GRADE_NOTE)}

      <h3>Glass-filled PTFE</h3>
      <p>Glass fibre is the most widely used filler. It improves compressive strength and wear resistance and reduces creep while keeping good chemical resistance and electrical insulation. Glass is the usual first choice for stiffer gaskets, valve seats and general-purpose seals. Watch-outs: glass is attacked by hydrofluoric acid and hot strong alkalis, and it can score soft mating surfaces, so it is best run against hardened or hard-faced shafts.</p>

      <h3>Carbon-filled PTFE</h3>
      <p>Carbon (often blended with graphite) gives high compressive strength, good wear resistance and better thermal conductivity. It performs well in water, steam and dry gas service, and is gentle on mating surfaces. Carbon grades are conductive or antistatic, so they are not suitable as insulators. Carbon can be attacked by strong oxidising agents.</p>

      <h3>Bronze-filled PTFE</h3>
      <p>Bronze gives the best creep and wear resistance and the highest thermal conductivity of the common grades, which helps carry frictional heat away from a sliding contact. This makes it a standard choice for hydraulic piston and rod seals, guide rings and heavily loaded bearings. The trade-off is chemical: bronze is attacked by many acids and by ammonia, and it is electrically conductive. Bronze-filled grades are also noticeably denser than virgin PTFE.</p>

      <h3>Graphite-filled PTFE</h3>
      <p>Graphite lowers friction and improves dry-running behaviour. It is less effective than carbon or bronze at stopping creep, but it is a good option for <a href="${c.r('products/ptfe-bushes/')}">bushes</a> and seals running against softer shafts, where an abrasive filler would cause damage.</p>

      <h3>MoS₂-modified grades</h3>
      <p>Molybdenum disulphide (MoS₂) is usually added in small amounts alongside another filler — most often glass or bronze — rather than on its own. It improves surface hardness and dry-running performance and helps keep friction low. It is a fine-tuning additive: choose the main filler first, then consider whether a MoS₂-modified version of it suits your duty.</p>

      <h2 id="choose">How to choose a grade</h2>
      <p>Work through the requirements in order of how hard they are to compromise on:</p>
      <ol>
        <li><strong>Chemical compatibility.</strong> Rule out any filler that the media attacks. If the media is very aggressive or not fully known, virgin PTFE is the safe starting point. Our <a href="${c.r('resources/ptfe-chemical-resistance/')}">chemical resistance guide</a> includes a grade-by-chemical table.</li>
        <li><strong>Electrical requirements.</strong> If the part must insulate, exclude carbon, graphite and bronze. If static build-up is a problem, a conductive grade may be an advantage.</li>
        <li><strong>Load and creep.</strong> For sustained compressive load — gasket bolt load, bearing pressure, seal extrusion gaps — move up from virgin to glass, carbon or bronze.</li>
        <li><strong>Motion and wear.</strong> For sliding or rotating parts, match the filler to the mating surface: carbon or graphite for softer shafts, glass or bronze where the counterface is hard.</li>
        <li><strong>Heat.</strong> Where frictional heat builds up, bronze and carbon carry it away better than virgin or glass.</li>
        <li><strong>Regulatory and purity needs.</strong> Food, pharma and laboratory contact parts are usually virgin PTFE; confirm the documentation you need before ordering.</li>
      </ol>
      ${dataTable(SELECT_HEAD, SELECT_ROWS, 'Starting points only — confirm against your full operating conditions.')}

      <h2 id="mistakes">Common selection mistakes</h2>
      <ul>
        <li><strong>Choosing virgin PTFE for a loaded sliding part</strong> because it has the lowest friction. It will often wear or deform long before a filled grade would.</li>
        <li><strong>Using glass-filled PTFE in hydrofluoric acid or hot caustic</strong>, where the filler is attacked even though the PTFE is not.</li>
        <li><strong>Using bronze-filled PTFE in acidic or ammonia service</strong> because it performed well in a hydraulic application.</li>
        <li><strong>Specifying a conductive grade as an insulator</strong>, or forgetting that carbon-filled parts can carry current.</li>
        <li><strong>Assuming “filled PTFE” is one material.</strong> Filler type, percentage and particle form vary between compounds; always state the grade on the drawing or purchase order.</li>
      </ul>
      <p class="callout">Filler percentages differ between compounds, so properties for “25 % glass-filled PTFE” from two sources will not be identical. Specify the filler and percentage, and ask for the data that applies to the grade you are buying.</p>

      <h2 id="help">How SK Polymers can help</h2>
      <p>We manufacture <a href="${c.r('products/ptfe-sheets/')}">sheets</a>, <a href="${c.r('products/ptfe-rods/')}">rods</a>, tubes, gaskets, bushes and seals in virgin and filled grades, and machine parts to drawing. If you are deciding between grades, <a href="${c.r('contact/')}">tell us the media, temperature, load and motion</a> and we will help you choose.</p>
    </article>

    <aside class="content-aside" aria-label="In this guide">
      <div class="aside-card">
        <p class="aside-title">In this guide</p>
        <nav class="aside-links" aria-label="Table of contents">
          <a href="#virgin">Virgin PTFE</a>
          <a href="#fillers">How fillers change PTFE</a>
          <a href="#grades">Common filled grades</a>
          <a href="#choose">How to choose</a>
          <a href="#mistakes">Common mistakes</a>
          <a href="#help">How we can help</a>
        </nav>
      </div>
      <div class="aside-card">
        <p class="aside-title">Need material advice?</p>
        <p>Tell us your media, load and motion and we will recommend a virgin or filled grade.</p>
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Ask Our Team ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${relatedProducts(c, ['ptfe-sheets', 'ptfe-rods', 'ptfe-bushes'])}
${relatedArticles(c, ['ptfe-properties', 'ptfe-chemical-resistance', 'ptfe-gasket-selection'], 'Related <span class="hl">Guides</span>')}
${ctaBand(c, {
  eyebrow: 'Technical Support',
  title: 'Not Sure Which Grade to Use?',
  lede: 'Send your operating conditions or an existing part. We will recommend a virgin or filled PTFE grade and quote for supply.',
})}`,
};
