# SK Polymers — copy-paste kit for Google & business listings

Use **exactly** these details everywhere (Google treats any difference as a different business):

| Field | Use exactly |
|---|---|
| Name | SK Polymers |
| Phone | +91 91529 95667 |
| Website | https://skpolymers.vercel.app/ (update everywhere when you buy a domain) |
| Email | sonipandey82385@gmail.com |
| Address | Babosa Industrial Park, Kalyan Bhiwandi Bypass, ___ (unit/gala no.), ___ (locality), Maharashtra ___ (PIN) — fill in the blanks once and use the same text everywhere |
| Hours | Monday–Saturday, 9:00 AM – 6:00 PM |

---

## 1. Google Search Console — gets the site into Google (≈10 min)

1. Open https://search.google.com/search-console and sign in with the Google account you will use for the business.
2. Click **Add property** → choose **URL prefix** → type `https://skpolymers.vercel.app/` → Continue.
3. Under "Other verification methods" open **HTML tag**. You will see something like
   `<meta name="google-site-verification" content="AbC123…" />`
4. **Send the `content="…"` value to your developer** (or put it in `src/config.mjs` →
   `googleSiteVerification`, run `node build.mjs`, commit, push).
5. When the new version is live, click **Verify**.
6. Left menu → **Sitemaps** → enter `sitemap.xml` → Submit.
7. Top search bar (URL Inspection) → paste each URL below → **Request indexing**:
   - https://skpolymers.vercel.app/
   - https://skpolymers.vercel.app/products/
   - https://skpolymers.vercel.app/products/ptfe-sheets/
   - https://skpolymers.vercel.app/products/ptfe-rods/
   - https://skpolymers.vercel.app/products/ptfe-tubes/
   - https://skpolymers.vercel.app/products/ptfe-gaskets/
   - https://skpolymers.vercel.app/products/ptfe-bushes/
   - https://skpolymers.vercel.app/products/ptfe-seals/
   - https://skpolymers.vercel.app/services/custom-ptfe-machining/
   - https://skpolymers.vercel.app/contact/
8. Optional, 2 minutes: https://www.bing.com/webmasters → **Import from Google Search Console**.

## 2. Switch off the duplicate GitHub Pages copy (1 min)

GitHub → repository **ajit1211/ptfe_teflon** → **Settings** → **Pages** → Source / Branch: **None** → Save.

---

## 3. Google Business Profile — shows SK Polymers on Google Maps and in the business panel

https://business.google.com → **Add your business**

- **Business name:** SK Polymers (do not add keywords to the name; Google suspends profiles for that)
- **Category:** type "plastic" and pick the closest manufacturer/fabricator category Google offers (e.g. a plastic fabrication or plastic products category). Add related ones as secondary categories.
- **Location:** yes, customers or couriers can visit → the full address from the table above.
- **Service area:** Bhiwandi, Kalyan, Thane, Mumbai, Navi Mumbai (+ "India" if offered).
- **Phone / website:** from the table above.
- **Verification:** Google will ask for a video, phone or postcard check. Follow it; it's required.

**Business description** (paste as is, 648 characters — under the 750 limit):

> SK Polymers manufactures and supplies PTFE (Teflon) products from Babosa Industrial Park on the Kalyan–Bhiwandi Bypass, Maharashtra. Our range covers PTFE sheets and slabs, rods and bars, tubes and pipes, gaskets and rings, bushes and bearings, seals and O-rings, PTFE turling, and custom components CNC-machined to your drawing. We work in virgin PTFE and glass, carbon, bronze and graphite-filled grades, cut material to size, and help buyers choose the right grade for their media, temperature and load. We supply chemical, pharmaceutical, engineering and process industries in Bhiwandi, Thane, Mumbai and across India. Export enquiries welcome.

**Products to add** (one per item, with a real photo and a link to its page):

| Product | Link |
|---|---|
| PTFE Sheets & Slabs | https://skpolymers.vercel.app/products/ptfe-sheets/ |
| PTFE Rods & Bars | https://skpolymers.vercel.app/products/ptfe-rods/ |
| PTFE Tubes & Pipes | https://skpolymers.vercel.app/products/ptfe-tubes/ |
| PTFE Gaskets & Rings | https://skpolymers.vercel.app/products/ptfe-gaskets/ |
| PTFE Bushes & Bearings | https://skpolymers.vercel.app/products/ptfe-bushes/ |
| PTFE Seals & O-Rings | https://skpolymers.vercel.app/products/ptfe-seals/ |
| Custom PTFE Machining | https://skpolymers.vercel.app/services/custom-ptfe-machining/ |

**Photos:** add at least 10 real photos — the factory front with the name board, the machines, stock racks, finished parts, packed orders. Real photos matter more than anything else on the profile.

**Posts:** once or twice a month, post a photo of a recent job ("PTFE valve seats machined to drawing for a chemical plant") with a link to the matching product page.

---

## 4. B2B directories (each gives your website a genuine link and brings buyers)

Create **one** listing per site, with the same name, address, phone and website:

- **IndiaMART** — https://seller.indiamart.com (free listing; add every product with photos and the website link)
- **TradeIndia** — https://www.tradeindia.com (free listing)
- **Justdial** — https://www.justdial.com (Free Listing link)
- **LinkedIn company page** — https://www.linkedin.com/company/setup/new/

Short description for these sites (≈300 characters):

> SK Polymers, Kalyan–Bhiwandi Bypass, Maharashtra — manufacturer of PTFE (Teflon) sheets, rods, tubes, gaskets, bushes, seals and custom CNC-machined PTFE components in virgin and filled grades. Cut to size and made to drawing. Pan-India supply; export enquiries welcome.

After the listings are live, send the profile URLs to your developer. They go into `BUSINESS.sameAs` in `src/config.mjs`, which tells Google these profiles belong to the same company.

---

## 5. Getting genuine Google reviews

After each delivered order, send this by WhatsApp (replace the link with your profile's
"Ask for reviews" link from Google Business Profile):

> Thank you for your order with SK Polymers. If you were happy with the material and service, could you spare a minute to leave us a Google review? It really helps other buyers find us: [review link]

Rules: only real customers; never offer discounts or gifts for reviews; never write reviews yourself; reply to every review.

---

## Then send your developer
1. The Search Console `content="…"` code.
2. The full address (unit/gala number, locality, PIN code).
3. The URLs of your Google Business Profile, IndiaMART, TradeIndia, Justdial and LinkedIn pages.
4. Your domain name, if you buy one (e.g. skpolymers.in).
