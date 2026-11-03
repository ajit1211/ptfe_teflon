import { icon, esc, faqList, waHref, telHref } from '../layout.mjs';
import { PRODUCTS } from '../data/catalogue.mjs';
import { BUSINESS } from '../config.mjs';

const SERVICES = [
  { icon: 'cut', name: 'Custom Cutting', path: 'services/#custom-cutting', desc: 'PTFE sheets, rods and tubes cut to your sizes — strips, blanks, discs, rings and cut lengths.' },
  { icon: 'cnc', name: 'CNC Machining', path: 'services/custom-ptfe-machining/', desc: 'Turned and milled PTFE components machined to your drawing, from prototypes to production batches.' },
  { icon: 'truck', name: 'Bulk & Repeat Supply', path: 'services/#bulk-supply', desc: 'Scheduled supply for ongoing requirements, with pricing for volume orders quoted per enquiry.' },
  { icon: 'shield', name: 'Inspection', path: 'services/#inspection', desc: 'Dimensional checks against your drawing or order before dispatch. Documentation needs are agreed at quotation.' },
  { icon: 'globe', name: 'Pan-India & Export', path: 'services/#delivery', desc: 'Dispatch across India in industrial packing. Export enquiries are welcome — terms agreed per order.' },
  { icon: 'headset', name: 'Grade Selection Support', path: 'services/#technical-support', desc: 'Advice on virgin vs filled grades, product form and design for your media, temperature and load.' },
];

const INDUSTRIES = [
  ['flask', 'Chemical Processing', 'chemical-processing'], ['oil', 'Oil &amp; Gas', 'oil-gas'], ['plane', 'Aerospace', 'aerospace'],
  ['pill', 'Pharmaceuticals', 'pharmaceuticals'], ['chip', 'Electronics &amp; Electrical', 'electrical-electronics'], ['food', 'Food &amp; Beverage', 'food-beverage'],
  ['car', 'Automotive', 'automotive'], ['drop', 'Water Treatment', 'water-treatment'], ['power', 'Power Generation', 'power-generation'],
  ['helmet', 'Construction &amp; Infrastructure', 'construction-infrastructure'], ['anchor', 'Marine', 'marine'], ['microscope', 'Laboratory &amp; Semiconductor', 'laboratory-semiconductor'],
];

const GALLERY = [
  { src: 'static/images/photos/ptfe-rods.jpeg', w: 261, h: 193, caption: 'PTFE Rods &amp; Bars', alt: 'PTFE rods and bars in several diameters', cls: ' gallery-item-wide' },
  { src: 'static/images/photos/ptfe-rings-gaskets.jpeg', w: 171, h: 148, caption: 'PTFE Rings &amp; Gaskets', alt: 'Machined PTFE rings and gaskets in assorted diameters', cls: '' },
  { src: 'static/images/photos/ptfe-tubes.jpeg', w: 259, h: 194, caption: 'PTFE Tubes &amp; Pipes', alt: 'PTFE tubes and pipes with varying wall thickness', cls: '' },
  { src: 'static/images/photos/ptfe-turling.webp', w: 1000, h: 1000, caption: 'PTFE Turling / Granules', alt: 'PTFE turling — machining turnings and granules', cls: ' gallery-item-tall' },
];

export default {
  path: '',
  title: 'SK Polymers | PTFE & Teflon Products Manufacturer in India',
  description: 'SK Polymers manufactures PTFE (Teflon) sheets, rods, tubes, gaskets, bushes, seals and CNC-machined parts on the Kalyan–Bhiwandi Bypass, Maharashtra. Get a quote.',
  updated: '2026-11-03',
  gallery: true,
  enquiry: '',
  enquiryOptions: { title: 'Get in <span class="hl">Touch</span>', lede: 'Send your requirement, call, or message us on WhatsApp. Drawings can be shared by email or WhatsApp once you have sent the enquiry.' },
  body: (c) => `<span id="top"></span>

<!-- ══ HERO ══ -->
<section class="hero" id="hero" aria-labelledby="heroTitle">
  <div class="hero-bg" aria-hidden="true">
    <span class="hero-grid"></span>
    <span class="hero-glow"></span>
    <span class="hero-particles">
      <i style="--x:12%;--y:22%;--d:0s;--s:16s"></i>
      <i style="--x:26%;--y:68%;--d:2.5s;--s:19s"></i>
      <i style="--x:48%;--y:14%;--d:1.2s;--s:22s"></i>
      <i style="--x:71%;--y:58%;--d:4s;--s:17s"></i>
      <i style="--x:86%;--y:28%;--d:3s;--s:21s"></i>
      <i style="--x:62%;--y:84%;--d:5.5s;--s:24s"></i>
    </span>
  </div>

  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="eyebrow eyebrow-accent" data-anim="1">
        <span class="eyebrow-rule" aria-hidden="true"></span>PTFE Manufacturer · Maharashtra, India
      </p>
      <h1 class="hero-title" id="heroTitle" data-anim="2">
        PTFE &amp; Teflon Products <span class="hl">Built for Demanding Industries</span>
      </h1>
      <p class="hero-lede" data-anim="3">
        SK Polymers manufactures PTFE sheets, rods, tubes, gaskets, bushes, seals and custom CNC-machined
        components in virgin and filled grades — for chemical, pharmaceutical, engineering and process industries.
      </p>
      <div class="hero-actions" data-anim="4">
        <a class="btn btn-accent" href="#enquiry" data-quote-trigger>Request a Free Quote ${icon('arrow-right')}</a>
        <a class="btn btn-ghost" href="${c.r('products/')}">Explore Products</a>
      </div>
      <ul class="hero-badges" data-anim="5">
        <li>${icon('check')} Virgin &amp; Filled Grades</li>
        <li>${icon('check')} Custom CNC Machining</li>
        <li>${icon('check')} Pan-India Delivery</li>
        <li>${icon('check')} Export Enquiries Welcome</li>
      </ul>
    </div>

    <div class="hero-visual" data-anim="6">
      <div class="hero-visual-frame" data-parallax="0.05">
        <img src="${c.asset('static/images/hero-parts.svg')}" alt="Illustration of PTFE components: flange gasket, machined rod, tube and slab" width="760" height="660" fetchpriority="high">
      </div>
      <div class="hero-spec" aria-hidden="true">
        <span class="hero-spec-label">Typical PTFE service range</span>
        <span class="hero-spec-value">−200 °C to +260 °C</span>
      </div>
    </div>
  </div>

  <a class="hero-scroll" href="#stats" aria-label="Scroll to capabilities">
    <span>Scroll</span><span class="hero-scroll-line" aria-hidden="true"></span>
  </a>
</section>

<!-- ══ CAPABILITIES ══ -->
<section class="stats" id="stats" aria-label="Capabilities at a glance">
  <div class="container">
    <ul class="stats-grid">
      <li class="stat reveal"><span class="stat-num" data-count="8">8</span><span class="stat-label">PTFE Product Lines</span></li>
      <li class="stat reveal"><span class="stat-num" data-count="5">5</span><span class="stat-label">Virgin &amp; Filled Grades</span></li>
      <li class="stat reveal"><span class="stat-num stat-text">To Drawing</span><span class="stat-label">CNC Machined Parts</span></li>
      <li class="stat reveal"><span class="stat-num stat-text">Cut to Size</span><span class="stat-label">Sheets, Rods &amp; Tubes</span></li>
      <li class="stat reveal"><span class="stat-num stat-text">Pan-India</span><span class="stat-label">Delivery &amp; Export Enquiries</span></li>
    </ul>
  </div>
</section>

<!-- ══ PRODUCTS ══ -->
<section class="section section-light" id="products" aria-labelledby="productsTitle">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow"><span class="sec-no">01</span>What We Manufacture</p>
      <h2 class="section-title" id="productsTitle">PTFE <span class="hl">Product Range</span></h2>
      <p class="section-lede">Virgin and filled-grade PTFE in standard stock forms and finished to your drawing. Choose a product for grades, applications and specification details, or <a href="${c.r('products/')}">browse the full PTFE product range</a>.</p>
    </div>

    <div class="product-grid" id="productGrid">
${PRODUCTS.map((p, i) => `      <article class="product-card reveal">
        <div class="product-media"><img src="${c.asset(p.img)}" alt="${esc(p.alt)}" loading="lazy" width="640" height="480" decoding="async"></div>
        <div class="product-body">
          <div class="product-meta"><span class="product-no">0${i + 1}</span><span class="product-tag">${esc(p.tag)}</span></div>
          <h3 class="product-name"><a href="${c.r(p.path)}">${esc(p.name)}</a></h3>
          <p class="product-desc">${esc(p.card)}</p>
          <div class="product-actions">
            <a class="link-btn" href="${c.r(p.path)}" aria-label="View Details: ${esc(p.name)}">View Details ${icon('arrow-right')}</a>
            <button class="link-btn link-btn-accent" type="button" data-enquire="${p.slug}" aria-label="Enquire Now: ${esc(p.name)}">Enquire Now</button>
          </div>
        </div>
      </article>`).join('\n')}
    </div>
  </div>
</section>

<!-- ══ ABOUT ══ -->
<section class="section section-tint" id="about" aria-labelledby="aboutTitle">
  <div class="container about-grid">
    <div class="about-visual reveal">
      <figure class="about-photo" data-parallax="0.04">
        <img class="duotone" src="${c.asset('static/images/photos/ptfe-rods.jpeg')}" alt="PTFE rods produced by SK Polymers" loading="lazy" width="261" height="193" decoding="async">
      </figure>
      <figure class="about-photo about-photo-sm" data-parallax="0.08">
        <img class="duotone" src="${c.asset('static/images/photos/ptfe-rings-gaskets.jpeg')}" alt="Machined PTFE rings and gaskets" loading="lazy" width="171" height="148" decoding="async">
      </figure>
      <div class="about-badge">
        <span class="about-badge-num">5<em>×</em></span>
        <span class="about-badge-text">PTFE grades<br>virgin &amp; filled</span>
      </div>
    </div>

    <div class="about-copy reveal">
      <p class="eyebrow"><span class="sec-no">02</span>Who We Are</p>
      <h2 class="section-title" id="aboutTitle">A PTFE Manufacturer Built on <span class="hl">Precision</span></h2>
      <p class="section-lede">
        SK Polymers manufactures and supplies PTFE &amp; Teflon products for sealing, insulation, sliding and
        corrosion-resistant applications. We work from Babosa Industrial Park on the Kalyan–Bhiwandi Bypass in
        Maharashtra, supplying buyers in Bhiwandi, Thane and Mumbai and dispatching across India.
      </p>
      <ul class="about-features">
        <li class="feature-card">
          <span class="feature-icon">${icon('layers')}</span>
          <span class="feature-title">Virgin &amp; Filled Grades</span>
          <span class="feature-desc">Virgin PTFE plus glass, carbon, bronze and graphite-filled grades</span>
        </li>
        <li class="feature-card">
          <span class="feature-icon">${icon('cnc')}</span>
          <span class="feature-title">Custom CNC Machining</span>
          <span class="feature-desc">Components machined to your drawing, sample or CAD file</span>
        </li>
        <li class="feature-card">
          <span class="feature-icon">${icon('truck')}</span>
          <span class="feature-title">Pan-India Delivery</span>
          <span class="feature-desc">Dispatch across India in secure industrial packing</span>
        </li>
        <li class="feature-card">
          <span class="feature-icon">${icon('headset')}</span>
          <span class="feature-title">Grade Selection Support</span>
          <span class="feature-desc">Help choosing the right PTFE grade and product form</span>
        </li>
      </ul>
      <a class="btn btn-dark" href="${c.r('about/')}">More About SK Polymers ${icon('arrow-right')}</a>
    </div>
  </div>
</section>

<!-- ══ SERVICES ══ -->
<section class="section section-dark" id="services" aria-labelledby="servicesTitle">
  <div class="container">
    <div class="section-head section-head-center reveal">
      <p class="eyebrow eyebrow-accent"><span class="sec-no">03</span>What We Do</p>
      <h2 class="section-title" id="servicesTitle">Manufacturing <span class="hl">Services</span></h2>
      <p class="section-lede">From raw PTFE stock to finished, machined components — see all <a href="${c.r('services/')}">PTFE manufacturing services</a>.</p>
    </div>

    <div class="service-grid">
${SERVICES.map((s, i) => `      <article class="service-card reveal">
        <span class="service-no">0${i + 1}</span>
        <span class="service-icon">${icon(s.icon)}</span>
        <h3 class="service-name"><a href="${c.r(s.path)}">${s.name}</a></h3>
        <p class="service-desc">${s.desc}</p>
        <span class="service-arrow" aria-hidden="true"><svg class="icon"><use href="#i-arrow-right"/></svg></span>
      </article>`).join('\n')}
    </div>
  </div>
</section>

<!-- ══ INDUSTRIES ══ -->
<section class="section section-light" id="industries" aria-labelledby="industriesTitle">
  <div class="container">
    <div class="section-head section-head-center reveal">
      <p class="eyebrow"><span class="sec-no">04</span>Markets We Serve</p>
      <h2 class="section-title" id="industriesTitle">Industries <span class="hl">We Supply</span></h2>
      <p class="section-lede">PTFE performs where other materials fail — chemically inert, thermally stable and low friction. <a href="${c.r('industries/')}">See how PTFE is used in each industry</a>.</p>
    </div>

    <ul class="industry-grid">
${INDUSTRIES.map(([ic, name, id]) => `      <li class="industry-card reveal"><span class="industry-icon">${icon(ic)}</span><a class="industry-name" href="${c.r('industries/')}#${id}">${name}</a></li>`).join('\n')}
    </ul>
  </div>
</section>

<!-- ══ WHY CHOOSE US ══ -->
<section class="section section-tint" id="why" aria-labelledby="whyTitle">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow"><span class="sec-no">05</span>Why Us</p>
      <h2 class="section-title" id="whyTitle">Why Buyers Choose <span class="hl">SK Polymers</span></h2>
    </div>

    <div class="why-grid">
      <article class="why-card reveal">
        <span class="why-icon">${icon('target')}</span>
        <h3 class="why-title">Made to Drawing</h3>
        <p class="why-desc">Components cut and machined to your drawing, with dimensional checks before dispatch.</p>
      </article>
      <article class="why-card reveal">
        <span class="why-icon">${icon('layers')}</span>
        <h3 class="why-title">The Right Grade</h3>
        <p class="why-desc">Virgin and filled grades, with the grade stated on every quotation so repeat orders match.</p>
      </article>
      <article class="why-card reveal">
        <span class="why-icon">${icon('blueprint')}</span>
        <h3 class="why-title">Custom Engineering</h3>
        <p class="why-desc">Send a drawing, dimensions or a sample — we advise on grade and produce to specification.</p>
      </article>
      <article class="why-card reveal">
        <span class="why-icon">${icon('bolt')}</span>
        <h3 class="why-title">Clear Lead Times</h3>
        <p class="why-desc">Delivery time is confirmed in writing with your quotation, based on stock and machining work.</p>
      </article>
      <article class="why-card reveal">
        <span class="why-icon">${icon('headset')}</span>
        <h3 class="why-title">Technical Support</h3>
        <p class="why-desc">Material and design guidance from people who work with PTFE every day.</p>
      </article>
      <article class="why-card reveal">
        <span class="why-icon">${icon('repeat')}</span>
        <h3 class="why-title">Reliable Supply</h3>
        <p class="why-desc">Repeat-order scheduling for customers with ongoing PTFE requirements.</p>
      </article>
    </div>
  </div>
</section>

<!-- ══ GALLERY ══ -->
<section class="section section-dark" id="gallery" aria-labelledby="galleryTitle">
  <div class="container">
    <div class="section-head section-head-center reveal">
      <p class="eyebrow eyebrow-accent"><span class="sec-no">06</span>Our Work</p>
      <h2 class="section-title" id="galleryTitle">Product <span class="hl">Gallery</span></h2>
      <p class="section-lede">Photographs of PTFE stock and finished parts.</p>
    </div>

    <ul class="gallery-grid" id="galleryGrid">
${GALLERY.map((g, i) => `      <li class="gallery-item${g.cls} reveal">
        <button type="button" class="gallery-btn" data-index="${i}" aria-label="View larger: ${g.caption}">
          <img class="duotone" src="${c.asset(g.src)}" alt="${g.alt}" loading="lazy" width="${g.w}" height="${g.h}" decoding="async">
          <span class="gallery-overlay"><span class="gallery-caption">${g.caption}</span><span class="gallery-view">View ${icon('plus')}</span></span>
        </button>
      </li>`).join('\n')}
    </ul>
  </div>
</section>

<!-- ══ FAQ ══ -->
<section class="section section-light" id="faq" aria-labelledby="faqTitle">
  <div class="container faq-layout">
    <div class="faq-intro reveal">
      <p class="eyebrow"><span class="sec-no">07</span>Common Questions</p>
      <h2 class="section-title" id="faqTitle">Frequently <span class="hl">Asked</span></h2>
      <p class="section-lede">Can’t find what you need? Our team answers material and machining questions directly — or read our <a href="${c.r('resources/')}">PTFE technical guides</a>.</p>
      <a class="btn btn-dark" href="#enquiry" data-quote-trigger>Ask a Question ${icon('arrow-right')}</a>
    </div>

    ${faqList([
      { q: 'What is PTFE and why is it widely used in industry?', a: `PTFE (polytetrafluoroethylene), widely known by the trade name Teflon™, is a fluoropolymer with outstanding chemical resistance, a typical service range of about −200 °C to +260 °C and one of the lowest coefficients of friction of any solid. That combination makes it a standard material for gaskets, seals, bushes, linings and insulation. More in our <a href="${c.r('resources/ptfe-properties/')}">PTFE properties guide</a>.` },
      { q: 'Do you offer custom sizes and machined components?', a: `Yes. We cut sheets, rods and tubes to size and CNC-machine components to your drawing, sample or CAD file. See <a href="${c.r('services/custom-ptfe-machining/')}">custom PTFE machining</a>.` },
      { q: 'What grades of PTFE do you supply?', a: `Virgin PTFE plus glass-filled, carbon-filled, bronze-filled and graphite-filled grades. Each improves wear, creep or thermal conductivity in a different way — see <a href="${c.r('resources/virgin-vs-filled-ptfe/')}">virgin vs filled PTFE</a>, or tell us the application and we will recommend one.` },
      { q: 'Where are you located, and do you deliver across India?', a: 'We are at Babosa Industrial Park, Kalyan–Bhiwandi Bypass, Maharashtra, and supply customers in Bhiwandi, Thane, Mumbai and across India through logistics partners. Export enquiries are welcome. Delivery time is confirmed with each quotation.' },
      { q: 'What should I include in an enquiry?', a: 'The product and grade (or your operating conditions), dimensions or a drawing, quantity, and the application — media, temperature and pressure help us recommend the right material and quote accurately.' },
      { q: 'How can I get a quote or place a bulk order?', a: `Use the enquiry form below, call <a href="${telHref}">${BUSINESS.phoneDisplay}</a>, or message us on <a href="${waHref()}" target="_blank" rel="noopener">WhatsApp</a>. Bulk and repeat requirements are quoted individually.` },
    ])}
  </div>
</section>

<!-- ══ CTA ══ -->
<section class="cta" aria-labelledby="ctaTitle">
  <div class="cta-bg" aria-hidden="true"><span class="cta-grid"></span><span class="cta-sweep"></span></div>
  <div class="container cta-inner reveal">
    <p class="eyebrow eyebrow-accent">Custom Requirements</p>
    <h2 class="cta-title" id="ctaTitle">Need Custom PTFE Components?</h2>
    <p class="cta-lede">Tell us your dimensions, drawings or application requirements. We will help you select and manufacture the right PTFE solution.</p>
    <div class="cta-actions">
      <a class="btn btn-accent" href="#enquiry" data-quote-trigger>Request a Free Quote ${icon('arrow-right')}</a>
      <a class="btn btn-ghost" href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp Us</a>
    </div>
  </div>
</section>
<span id="contact" class="anchor-target"></span>`,
};
