import { pageHero, icon, waHref, telHref, mailHref } from '../layout.mjs';
import { BUSINESS } from '../config.mjs';

export default {
  path: 'contact/',
  nav: 'contact',
  schemaType: 'ContactPage',
  title: 'Contact SK Polymers – PTFE Enquiries & Quotes',
  description: 'Request a quote for PTFE sheets, rods, tubes, gaskets, seals or machined parts. Call, WhatsApp or email SK Polymers, Kalyan–Bhiwandi Bypass, Maharashtra.',
  breadcrumbs: [['Contact', 'contact/']],
  updated: '2026-11-03',
  enquiry: '',
  enquiryOptions: { title: 'Send an <span class="hl">Enquiry</span>', lede: 'Fill in the form to prepare an email to our team, or use phone or WhatsApp if you prefer. Drawings can be shared by email or WhatsApp.' },
  body: (c) => `
${pageHero(c, {
  eyebrow: 'Contact · Quotes &amp; Enquiries',
  title: 'Contact <span class="hl">SK Polymers</span>',
  lede: 'Tell us what you need — a product and grade, a drawing, or just the application — and we will reply with a recommendation and quotation.',
  actions: `<a class="btn btn-accent" href="${telHref}">${icon('phone')} Call ${BUSINESS.phoneDisplay}</a>
        <a class="btn btn-ghost" href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} WhatsApp</a>
        <a class="btn btn-ghost" href="${mailHref}">${icon('mail')} Email</a>`,
})}

<section class="section section-tint" aria-labelledby="locationTitle">
  <div class="container content-layout">
    <div class="prose">
      <h2 id="locationTitle">Our location</h2>
      <p>SK Polymers is located at <strong>Babosa Industrial Park, Kalyan–Bhiwandi Bypass, Maharashtra</strong>. We supply buyers in Bhiwandi, Kalyan, Thane, Mumbai and Navi Mumbai, and dispatch to customers across India. Export enquiries are welcome.</p>
      <p>Please call or message before visiting so the right person is available. Business hours: ${BUSINESS.hoursDisplay}.</p>
      <div class="contact-map">
        <iframe src="${BUSINESS.mapsEmbed}" title="Map showing Babosa Industrial Park, Kalyan–Bhiwandi Bypass, Maharashtra" width="100%" height="320" style="border:0;display:block" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p><a href="${BUSINESS.mapsLink}" target="_blank" rel="noopener">Open the location in Google Maps</a></p>

      <h2>Getting a fast, accurate quote</h2>
      <ol>
        <li>Product and grade — or the operating media, temperature and pressure.</li>
        <li>Dimensions or a drawing, with critical tolerances marked.</li>
        <li>Quantity, and whether it is a one-off or repeat requirement.</li>
        <li>Your delivery location.</li>
      </ol>
    </div>
    <aside class="content-aside" aria-label="Quick contact">
      <div class="aside-card">
        <p class="aside-title">Quick contact</p>
        <p>Phone and WhatsApp: <a class="text-link" href="${telHref}">${BUSINESS.phoneDisplay}</a></p>
        <p>Email: <a class="text-link" href="${mailHref}">${BUSINESS.email}</a></p>
        <a class="btn btn-accent" href="${waHref()}" target="_blank" rel="noopener">${icon('whatsapp')} Chat on WhatsApp</a>
      </div>
    </aside>
  </div>
</section>`,
};
