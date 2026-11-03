/* Product + service catalogue shared by the home page, products hub, footer,
   enquiry form options and "related" links. Page-specific content lives in
   src/pages/…; this file only holds names, URLs and card copy. */

export const PRODUCTS = [
  {
    slug: 'ptfe-sheets', path: 'products/ptfe-sheets/', name: 'PTFE Sheets & Slabs', short: 'PTFE Sheets',
    tag: 'Sheet / Slab', img: 'static/images/products/sheets.svg', alt: 'Illustration of stacked PTFE sheets and slabs',
    card: 'Moulded and skived sheets in virgin and filled grades, supplied in stock sizes or cut to your dimensions.',
  },
  {
    slug: 'ptfe-rods', path: 'products/ptfe-rods/', name: 'PTFE Rods & Bars', short: 'PTFE Rods',
    tag: 'Machining Stock', img: 'static/images/products/rods.svg', alt: 'Illustration of PTFE rods in several diameters',
    card: 'Rod stock in a range of diameters — the starting material for bushes, valve seats, spacers and machined parts.',
  },
  {
    slug: 'ptfe-tubes', path: 'products/ptfe-tubes/', name: 'PTFE Tubes & Pipes', short: 'PTFE Tubes',
    tag: 'Fluid Handling', img: 'static/images/products/pipes.svg', alt: 'Illustration of PTFE tubes and pipes with different wall thicknesses',
    card: 'Chemically inert tubing and pipe for corrosive fluid transfer, instrument lines and sleeving.',
  },
  {
    slug: 'ptfe-gaskets', path: 'products/ptfe-gaskets/', name: 'PTFE Gaskets & Rings', short: 'PTFE Gaskets',
    tag: 'Sealing', img: 'static/images/products/rings.svg', alt: 'Illustration of PTFE flange gaskets and rings',
    card: 'Flange gaskets, rings and washers cut to standard pipe sizes or to your drawing and bolt pattern.',
  },
  {
    slug: 'ptfe-turling', path: 'products/#ptfe-turling', name: 'PTFE Turling / Granules', short: 'PTFE Turling',
    tag: 'Raw Material', img: 'static/images/products/turling.svg', alt: 'Illustration of PTFE turling and granules',
    card: 'PTFE turnings and granules from machining, supplied in bulk for reprocessing and compounding.',
  },
  {
    slug: 'ptfe-bushes', path: 'products/ptfe-bushes/', name: 'PTFE Bushes & Bearings', short: 'PTFE Bushes',
    tag: 'Bearings', img: 'static/images/products/bushes.svg', alt: 'Illustration of plain and flanged PTFE bushes',
    card: 'Self-lubricating plain, flanged and split bushes for dry-running, low-friction service.',
  },
  {
    slug: 'ptfe-seals', path: 'products/ptfe-seals/', name: 'PTFE Seals & O-Rings', short: 'PTFE Seals',
    tag: 'Sealing', img: 'static/images/products/seals.svg', alt: 'Illustration of PTFE seals, O-rings and back-up rings',
    card: 'Machined O-rings, back-up rings, lip seals and V-packing for media and temperatures that defeat elastomers.',
  },
  {
    slug: 'custom-ptfe-machining', path: 'services/custom-ptfe-machining/', name: 'Custom PTFE Components', short: 'Custom Machining',
    tag: 'Custom', img: 'static/images/products/custom.svg', alt: 'Illustration of a custom CNC-machined PTFE component',
    card: 'Parts machined from PTFE stock to your drawing, sample or CAD file — prototypes through production runs.',
  },
];

export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);

// Options for the enquiry form <select>; values are slugs so pages can prefill them via ?product=slug.
export const ENQUIRY_OPTIONS = [
  ...PRODUCTS.map((p) => ({ value: p.slug, label: p.name })),
  { value: 'custom-cutting', label: 'Custom Cutting' },
  { value: 'bulk-supply', label: 'Bulk / Repeat Supply' },
  { value: 'technical-query', label: 'Material / Technical Question' },
  { value: 'other', label: 'Other' },
];

export const ARTICLES = [
  { slug: 'ptfe-properties', path: 'resources/ptfe-properties/', title: 'PTFE Properties: An Engineer’s Guide', blurb: 'Thermal, mechanical, electrical and chemical properties of PTFE — and the limits you need to design around.' },
  { slug: 'virgin-vs-filled-ptfe', path: 'resources/virgin-vs-filled-ptfe/', title: 'Virgin vs Filled PTFE: Choosing a Grade', blurb: 'How glass, carbon, bronze and graphite fillers change wear, creep, conductivity and chemical resistance.' },
  { slug: 'ptfe-chemical-resistance', path: 'resources/ptfe-chemical-resistance/', title: 'PTFE Chemical Resistance Guide', blurb: 'What PTFE resists, the few things that attack it, and how fillers change the picture.' },
  { slug: 'ptfe-vs-peek', path: 'resources/ptfe-vs-peek/', title: 'PTFE vs PEEK: Which Polymer When?', blurb: 'A side-by-side look at friction, strength, temperature, creep, chemical resistance and cost.' },
  { slug: 'ptfe-gasket-selection', path: 'resources/ptfe-gasket-selection/', title: 'Selecting a PTFE Gasket', blurb: 'Solid, filled, expanded or envelope? Matching gasket type to flange, media, temperature and pressure.' },
  { slug: 'machining-ptfe', path: 'resources/machining-ptfe/', title: 'Machining PTFE: Design & Tolerance Guide', blurb: 'Why PTFE behaves differently from metals on the machine, and how to specify parts that can be held to drawing.' },
];
