import { pageHero, specTable, ctaBand, linkCards, icon, addressLines, esc, telHref, mailHref } from '../layout.mjs';
import { BUSINESS } from '../config.mjs';

export default {
  path: 'about/',
  nav: 'about',
  schemaType: 'AboutPage',
  title: 'About SK Polymers – PTFE Manufacturer, Maharashtra',
  description: 'SK Polymers manufactures PTFE (Teflon) sheets, rods, tubes, gaskets, bushes, seals and machined components at Babosa Industrial Park, Kalyan–Bhiwandi Bypass.',
  breadcrumbs: [['About', 'about/']],
  updated: '2026-11-03',
  waTopic: 'PTFE products',
  body: (c) => `
${pageHero(c, {
  eyebrow: 'About · SK Polymers',
  title: 'About <span class="hl">SK Polymers</span>',
  lede: 'We manufacture and supply PTFE &amp; Teflon products — from stock sheets and rods to gaskets, seals, bushes and components machined to drawing — for industrial buyers across India.',
})}

<section class="section section-light" aria-labelledby="whoTitle">
  <div class="container about-grid">
    <div class="about-visual">
      <figure class="about-photo">
        <img class="duotone" src="${c.asset('static/images/photos/ptfe-rods.jpeg')}" alt="PTFE rods produced by SK Polymers" loading="lazy" width="261" height="193" decoding="async">
      </figure>
      <figure class="about-photo about-photo-sm">
        <img class="duotone" src="${c.asset('static/images/photos/ptfe-rings-gaskets.jpeg')}" alt="Machined PTFE rings and gaskets" loading="lazy" width="171" height="148" decoding="async">
      </figure>
    </div>
    <div class="prose">
      <h2 id="whoTitle">Who we are</h2>
      <p class="lead">SK Polymers is a PTFE manufacturer based at Babosa Industrial Park on the Kalyan–Bhiwandi Bypass in Maharashtra.</p>
      <p>We focus on one material family — PTFE, often called Teflon — and the forms industry needs: sheets and slabs, rods and bars, tubes and pipes, gaskets and rings, bushes and bearings, seals and O-rings, and custom components machined to drawing. We also supply PTFE turling and granules for reprocessing.</p>
      <p>Our customers are the people who specify, buy and maintain equipment: procurement teams, plant and maintenance engineers, OEMs and distributors. Many of them need a part that does not exist as a catalogue item, so a large share of our work is cutting and machining PTFE to a customer’s drawing or sample.</p>
    </div>
  </div>
</section>

<section class="section section-tint" aria-labelledby="howTitle">
  <div class="container content-layout">
    <div class="prose">
      <h2 id="howTitle">How we work</h2>
      <ul>
        <li><strong>Material first.</strong> PTFE grade decides how a part will perform. We ask about media, temperature, load and mating surfaces before recommending virgin or filled PTFE.</li>
        <li><strong>Made to your drawing.</strong> Sheets, rods and tubes are cut to size, and components are CNC-machined to the customer’s drawing, sample or CAD file.</li>
        <li><strong>Clear quotations.</strong> Each quotation states the grade, dimensions, quantity and delivery time, so repeat orders can be placed against the same specification.</li>
        <li><strong>Checked before dispatch.</strong> Orders are checked against the drawing or order before they are packed and dispatched.</li>
      </ul>

      <h2>Where we supply</h2>
      <p>From our location on the Kalyan–Bhiwandi Bypass we serve buyers in Bhiwandi, Kalyan, Thane, Mumbai and Navi Mumbai, and dispatch to customers across India. Export enquiries are welcome.</p>

      <h2>What we make</h2>
      ${linkCards(c, [
        { path: 'products/ptfe-sheets/', title: 'PTFE Sheets & Slabs', label: 'Sheet' },
        { path: 'products/ptfe-rods/', title: 'PTFE Rods & Bars', label: 'Rod' },
        { path: 'products/ptfe-tubes/', title: 'PTFE Tubes & Pipes', label: 'Tube' },
        { path: 'products/ptfe-gaskets/', title: 'PTFE Gaskets & Rings', label: 'Sealing' },
        { path: 'products/ptfe-bushes/', title: 'PTFE Bushes & Bearings', label: 'Bearings' },
        { path: 'products/ptfe-seals/', title: 'PTFE Seals & O-Rings', label: 'Sealing' },
        { path: 'services/custom-ptfe-machining/', title: 'Custom PTFE Machining', label: 'Service' },
      ])}
    </div>

    <aside class="content-aside" aria-label="Company details">
      <div class="aside-card">
        <p class="aside-title">Company details</p>
        ${specTable([
          ['Business', esc(BUSINESS.name)],
          ['Type', 'PTFE products manufacturer'],
          ['Address', addressLines().map(esc).join(',<br>')],
          ['Phone', `<a class="text-link" href="${telHref}">${BUSINESS.phoneDisplay}</a>`],
          ['Email', `<a class="text-link" href="${mailHref}">${BUSINESS.email}</a>`],
          ['Hours', BUSINESS.hoursDisplay],
        ])}
        <a class="btn btn-accent" href="${c.r('contact/')}#enquiry">Contact Us ${icon('arrow-right')}</a>
      </div>
    </aside>
  </div>
</section>

${ctaBand(c, { eyebrow: 'Work With Us', title: 'Send Us Your PTFE Requirement', lede: 'Share a drawing, sample or application and we will recommend the right grade and quote for manufacture.' })}`,
};
