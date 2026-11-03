/* ============================================================
   SK Polymers — single source of truth for site-wide settings.
   Every canonical URL, sitemap entry, Open Graph URL and JSON-LD @id is
   derived from SITE.url, so moving to a custom domain is a one-line change
   followed by `node build.mjs`.
   ============================================================ */

// Production origin, no trailing slash. Override per build with SITE_URL=https://… node build.mjs
// Change this ONLY after the new domain is attached in Vercel and serving the site.
const SITE_URL = (process.env.SITE_URL || 'https://skpolymers.vercel.app').replace(/\/+$/, '');

export const SITE = {
  url: SITE_URL,
  name: 'SK Polymers',
  locale: 'en_IN',
  lang: 'en-IN',
  // Hosts that should permanently redirect to SITE.url once it moves to a custom domain.
  // build.mjs writes these into vercel.json only when they differ from SITE.url's host.
  legacyHosts: ['skpolymers.vercel.app'],
  ogImage: 'static/images/og/sk-polymers-og.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  logo: 'static/images/icons/logo-512.png',
};

/* Business facts. Only information supplied by the owner is filled in.
   Empty strings are deliberate: they are omitted from pages and structured data
   until the owner confirms them. Do not fill these in with guesses. */
export const BUSINESS = {
  name: 'SK Polymers',
  legalName: '',                 // registered entity name, if different
  phone: '+919152995667',
  phoneDisplay: '+91 91529 95667',
  whatsapp: '919152995667',
  email: 'sonipandey82385@gmail.com',
  address: {
    streetAddress: 'Babosa Industrial Park, Kalyan Bhiwandi Bypass',
    unit: '',                    // gala / unit / building number — REQUIRED for LocalBusiness
    locality: '',                // city / town — REQUIRED for LocalBusiness
    postalCode: '',              // PIN code — REQUIRED for LocalBusiness
    region: 'Maharashtra',
    country: 'IN',
    countryName: 'India',
  },
  hoursDisplay: 'Monday – Saturday · 9:00 AM – 6:00 PM IST',
  hoursShort: 'Mon – Sat · 9:00 AM – 6:00 PM',
  hoursSpec: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' }],
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Babosa+Industrial+Park%2C+Kalyan+Bhiwandi+Bypass%2C+Maharashtra',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.180451569443!2d73.08960227466994!3d19.27451734571148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79626bb42f233%3A0x1932d89fd2125e39!2sBabosa%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1759822318365!5m2!1sen!2sin',
  // Official profiles (Google Business Profile, LinkedIn, IndiaMART…) once they exist. Used for Organization.sameAs.
  sameAs: [],
};

// LocalBusiness markup is only emitted once the full postal address is confirmed.
export const ADDRESS_COMPLETE = Boolean(BUSINESS.address.unit && BUSINESS.address.locality && BUSINESS.address.postalCode);

/* Third-party integrations — all off until real values are supplied.
   Never paste placeholder or made-up IDs here. */
export const INTEGRATIONS = {
  gaMeasurementId: process.env.GA_MEASUREMENT_ID || '',          // e.g. from GA4 → Admin → Data streams
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || '', // content value of the GSC HTML-tag method
  bingSiteVerification: process.env.BING_SITE_VERIFICATION || '',
};

export const WA_DEFAULT_TEXT = 'Hello SK Polymers, I have a PTFE requirement.';
