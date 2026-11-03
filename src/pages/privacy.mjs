import { pageHero } from '../layout.mjs';
import { BUSINESS, INTEGRATIONS } from '../config.mjs';

export default {
  path: 'privacy/',
  title: 'Privacy Policy | SK Polymers',
  description: 'How SK Polymers handles the information you share through enquiries by form, email, phone or WhatsApp, and how this website uses third-party services.',
  breadcrumbs: [['Privacy Policy', 'privacy/']],
  updated: '2026-11-03',
  body: (c) => `
${pageHero(c, { eyebrow: 'Legal', title: 'Privacy <span class="hl">Policy</span>', lede: 'Last updated 3 November 2026.', actions: '' })}

<section class="section section-light" aria-label="Privacy policy">
  <div class="container">
    <div class="prose">
      <p>SK Polymers collects only the information you choose to send us — through the enquiry form (which prepares an email in your own email app), by email, phone or WhatsApp. This is typically your name, company, contact details and the details of your requirement.</p>

      <h2>How we use it</h2>
      <p>We use your information solely to respond to your enquiry, prepare quotations and fulfil orders. We do not sell or rent your details to third parties.</p>

      <h2>The enquiry form</h2>
      <p>The form on this website does not store or transmit your details to our servers. When you submit it, your browser opens your email app with a message addressed to us; nothing is sent until you send that email yourself.</p>

      <h2>Third-party services</h2>
      <ul>
        <li><strong>Google Maps</strong> — our contact page embeds a Google Maps frame. Google may set its own cookies when it loads; see Google’s privacy policy.</li>
        <li><strong>WhatsApp</strong> — WhatsApp links open WhatsApp, which is governed by WhatsApp’s own privacy policy.</li>
${INTEGRATIONS.gaMeasurementId ? `        <li><strong>Google Analytics</strong> — we use Google Analytics to understand how visitors use this site, such as pages viewed and clicks on phone, WhatsApp and email links. Google Analytics uses cookies; it does not give us your name or contact details.</li>
` : ''}      </ul>

      <h2>Retention and access</h2>
      <p>Enquiry correspondence is kept only as long as needed for business and statutory record-keeping. To request a copy of your data or its deletion, email <a href="mailto:${BUSINESS.email}">${BUSINESS.email}</a>.</p>
    </div>
  </div>
</section>`,
};
