SK POLYMERS — PTFE & Teflon manufacturing website
=================================================

FILES
  index.html                     Page markup, SEO metadata, JSON-LD, inline SVG icon sprite
  static/css/style.css           Full design system (tokens, components, responsive, motion)
  static/js/style.js             Vanilla JS: nav, reveals, counters, modals, lightbox,
                                 carousel, accordion, form validation. No dependencies.
  static/images/                 Product photographs (jpeg/webp)
  static/images/products/*.svg   Technical product renders used on the product cards + modal
  static/images/hero-parts.svg   Hero composition
  static/images/favicon.svg      Favicon

HOW TO USE
  Open index.html in a browser, or serve the folder. Everything is static — no build step.

COLOURS
  The whole palette lives in the :root block at the top of static/css/style.css — charcoal
  backgrounds (--ink-*), card surfaces (--surface, --surface-2) and the gold accent
  (--accent #E8C84A, --accent-bright #F0D878). Changing --accent restyles every CTA, hover
  state, icon and highlight on the site. The technical accent lines inside
  static/images/**/*.svg use the same #E8C84A literal.

THINGS THE OWNER SHOULD REPLACE
  1. Statistics (index.html, "STATS" section) — 10+ years, 500+ clients, 1000+ projects,
     20+ states were carried over from the previous site. Replace with audited figures.
  2. Testimonials — currently marked placeholders. Replace the quotes AND the attribution,
     then delete the yellow <p class="placeholder-note"> block above the carousel.
  3. og:image — currently points at a small product photo. A 1200x630 cover image will
     produce much better link previews on WhatsApp/LinkedIn.
  4. Gallery photographs — the four supplied photos are low resolution (171-261 px wide,
     except turling.webp). Higher-resolution in-house photos will render noticeably sharper.
     They are shown under a duotone treatment which hides the mixed studio backgrounds; add
     new images to the <ul class="gallery-grid"> and the lightbox picks them up automatically.

ENQUIRY FORM
  GitHub Pages cannot run a backend, so submitting validates the fields and then opens the
  visitor's mail client with the enquiry pre-filled (see submitEnquiry() in static/js/style.js).
  To receive submissions server-side instead, sign up with Formspree (or similar), set
  action/method on <form id="enquiryForm">, and replace the body of submitEnquiry() with a
  fetch() POST. The WhatsApp link is offered as a fallback throughout.

CONTACT DETAILS
  Phone, email, address, business hours and map appear in the contact section and footer of
  index.html. Search for "9152995667" and "sonipandey82385@gmail.com" to update all instances.
