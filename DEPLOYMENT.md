# SK Polymers website — deployment & Google setup

Steps marked **[owner]** need your Vercel, domain registrar or Google account. Nothing in this
repository contains a verification token, analytics ID or credential; leave those fields
empty until you have real values.

---

## 1. Deploy to Vercel (current domain: skpolymers.vercel.app)

The site is plain static HTML. Vercel needs **no build step**.

1. Build and check locally:
   ```
   node build.mjs
   node scripts/validate.mjs        # must end with "0 errors"
   node scripts/serve.mjs           # optional preview at http://localhost:4173/
   ```
2. Commit everything (src/, the generated *.html, sitemap.xml, robots.txt, vercel.json, static/).
3. **[owner]** Push to the branch Vercel deploys (normally `main`). Vercel deploys automatically.
4. **[owner]** In Vercel → Project → Settings → Build & Development, confirm:
   - Framework Preset: **Other**
   - Build Command: empty (override off)
   - Output Directory: empty / `.` (repository root)
   - Install Command: empty
   `vercel.json` (generated) sets clean URLs, trailing slashes, the 404 page, cache headers and
   security headers. `.vercelignore` keeps `src/` and the tooling out of the deployment.
5. After the deploy, check:
   - `https://skpolymers.vercel.app/robots.txt` and `/sitemap.xml` return 200
   - `https://skpolymers.vercel.app/products/ptfe-sheets` redirects (308) to `/products/ptfe-sheets/`
   - `https://skpolymers.vercel.app/anything-random` shows the custom 404 page with status 404
   - View source on any page: the `<link rel="canonical">` shows `https://skpolymers.vercel.app/…`

### GitHub Pages copy
`https://ajit1211.github.io/ptfe_teflon/` serves the same repository. Every page's canonical now
points to the Vercel URL, which tells Google which copy to index. GitHub Pages cannot send 301
redirects, so the cleanest fix is to **turn it off** (GitHub → repo → Settings → Pages → None).
**[owner — not done; needs your approval]**

---

## 2. Moving to a custom domain later

Do the steps in this order so the site never points at a domain that isn't live yet.

1. **[owner]** Buy the domain (for example a `.com` or `.in`).
2. **[owner]** Vercel → Project → Settings → Domains → **Add** the domain. Add both the apex
   (`example.in`) and `www.example.in`, choose one as primary, and let Vercel redirect the other
   to it. Create the DNS records exactly as Vercel shows them at your registrar (typically an
   `A` record for the apex and a `CNAME` for `www`). Wait until Vercel shows "Valid Configuration".
3. Set the new origin in `src/config.mjs`:
   ```js
   const SITE_URL = (process.env.SITE_URL || 'https://www.example.in')…
   ```
4. Run `node build.mjs`. Canonicals, Open Graph URLs, JSON-LD, sitemap and robots.txt all switch to
   the new domain, and the generated `vercel.json` gains a **permanent redirect from
   `skpolymers.vercel.app/*` to the same path on the new domain**.
5. `node scripts/validate.mjs`, commit, push.
6. Check that `https://skpolymers.vercel.app/products/ptfe-rods/` returns a 308 redirect to
   `https://www.example.in/products/ptfe-rods/`.
7. **[owner]** In Search Console, verify the new domain (section 3) and submit its sitemap. If
   Search Console offers the **Change of Address** tool for the old property, use it.
8. **[owner]** Update the URL everywhere else: Google Business Profile, IndiaMART/TradeIndia
   listings, email signatures, visiting cards.
9. **[owner]** Create an email address on the new domain and update `BUSINESS.email` in
   `src/config.mjs`.

---

## 3. Google Search Console **[owner]**

**Before buying a domain (vercel.app URL):**
1. https://search.google.com/search-console → Add property → **URL prefix** →
   `https://skpolymers.vercel.app/`
2. Choose **HTML tag**. Copy only the `content="…"` value.
3. Put it in `src/config.mjs` → `INTEGRATIONS.googleSiteVerification` (or build with
   `GOOGLE_SITE_VERIFICATION=… node build.mjs`), build, commit, push, then click **Verify**.

**After buying a domain:** add a **Domain** property and verify it with the DNS TXT record Google
gives you, at your registrar. This covers http/https and www/non-www in one property.

**Then:**
1. Sitemaps → submit `sitemap.xml`.
2. URL Inspection → request indexing for the home page, `/products/`, the six product pages and
   `/services/custom-ptfe-machining/`.
3. Over the following weeks, check Pages (indexing), Core Web Vitals, and Enhancements
   (Breadcrumbs). "Duplicate, Google chose different canonical" for github.io URLs is expected
   until GitHub Pages is switched off.
4. Optional: Bing Webmaster Tools → import the site from Search Console.

---

## 4. Google Analytics 4 and conversion tracking **[owner]**

1. https://analytics.google.com → Admin → Create property (time zone India, currency INR) →
   Data streams → Web → the site URL. Copy the **Measurement ID** (`G-…`).
2. Put it in `src/config.mjs` → `INTEGRATIONS.gaMeasurementId`, build, commit, push. The GA4 tag
   is only added to pages when this value is set, and the privacy policy automatically gains an
   analytics paragraph.
3. The site already sends these events (see `track()` in `static/js/style.js`):

   | Event | Fires when | Parameters |
   |---|---|---|
   | `phone_click` | any `tel:` link is clicked | `link_location`, `page_path` |
   | `whatsapp_click` | any WhatsApp link is clicked | `link_location`, `page_path` |
   | `email_click` | any `mailto:` link is clicked | `link_location`, `page_path` |
   | `enquiry_email_opened` | the enquiry form passes validation and opens the email app | `product`, `page_path` |

   `enquiry_email_opened` means the visitor's email app was opened with the enquiry. It does **not**
   prove the email was sent. Treat it as a strong intent signal, not a confirmed lead.
4. GA4 → Admin → Events: once each event has appeared (DebugView or after ~24 h), mark
   `phone_click`, `whatsapp_click` and `enquiry_email_opened` as **Key events**.
5. If you run Google Ads, link Ads to GA4 and import those key events as conversions.
6. Consent: India's DPDP Act applies to personal data. GA4 is configured without user IDs, but
   consider adding a cookie/consent notice before enabling analytics.

---

## 5. Google Business Profile and local SEO **[owner]**

1. Create or claim the profile at https://business.google.com using exactly the same name, address
   and phone as the website (NAP):
   - Name: **SK Polymers** (no keywords added to the name)
   - Address: the full address, including unit/gala number and PIN code. Then add the same
     details to `src/config.mjs` so the website matches, and so LocalBusiness markup switches on.
   - Phone: **+91 91529 95667**
   - Website: the production URL
2. Category: choose the closest real primary category for a PTFE/plastic products manufacturer,
   and add relevant secondary categories. Add products (sheets, rods, gaskets…) with real photos.
3. Hours: Monday–Saturday, 9:00–18:00 (as on the website). Update both if they change.
4. Only claim a service area you really deliver to. Google does not allow fake or virtual
   offices.
5. Reviews — genuine only:
   - After a completed order, send the customer your profile's "Ask for reviews" link by WhatsApp
     or email.
   - Never offer discounts or gifts for reviews. Never write reviews yourself or ask staff to.
   - Reply to every review, including critical ones, politely and specifically.
6. Keep the same NAP on any B2B directories you choose to use (IndiaMART, TradeIndia, Justdial).
   Do not create duplicate listings.

---

## 6. After each deployment — quick checklist

- `node scripts/validate.mjs` → 0 errors before pushing.
- PageSpeed Insights (https://pagespeed.web.dev/) on the home page and one product page, mobile.
- Search Console → Pages: no new "Not found (404)" or "Excluded by noindex" for real pages.
