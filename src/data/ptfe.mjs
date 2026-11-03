/* Typical PTFE material data, shared by product pages and technical articles so every page
   quotes the same figures. These are generic literature values for the material class —
   NOT measured values for SK Polymers stock. Pages must present them as "typical" and point
   buyers to grade-specific data at quotation stage. */

export const PROPERTY_NOTE = 'Typical values for unfilled (virgin) PTFE, compiled from published material data. Actual values depend on resin, processing and test method — they are a design guide, not a specification for a particular lot.';

export const VIRGIN_PROPERTIES = [
  ['Density', '2.14 – 2.20 g/cm³'],
  ['Continuous service temperature', 'approx. −200 °C to +260 °C'],
  ['Crystalline melting point', 'approx. 327 °C'],
  ['Tensile strength', 'approx. 20 – 35 MPa'],
  ['Elongation at break', 'approx. 250 – 400 %'],
  ['Hardness', 'approx. 50 – 60 Shore D'],
  ['Coefficient of friction (dynamic, on steel)', 'approx. 0.05 – 0.10'],
  ['Dielectric constant (1 MHz)', 'approx. 2.1'],
  ['Water absorption (24 h)', '< 0.01 %'],
  ['Thermal expansion', 'high — roughly ten times that of steel at room temperature'],
  ['Flammability', 'does not sustain combustion in air (limiting oxygen index above 95 %)'],
];

/* Grade comparison rows: [grade, what the filler changes, watch-outs, typical uses] */
export const GRADE_HEAD = ['Grade', 'What it changes', 'Watch-outs', 'Typical uses'];
export const GRADE_ROWS = [
  ['Virgin PTFE', 'Highest purity; best chemical resistance and electrical insulation', 'Lowest compressive strength; most prone to creep (cold flow)', 'Chemical service, electrical insulation, food and pharma contact parts*'],
  ['Glass-filled<br><small>commonly 15–25 %</small>', 'Better compressive strength and wear resistance; less creep', 'Abrasive to soft mating surfaces; glass is attacked by hydrofluoric acid and hot strong alkalis', 'Valve seats, seals, gaskets, structural pads'],
  ['Carbon-filled<br><small>often ~25 %, may include graphite</small>', 'High compressive strength and wear resistance; better thermal conductivity; antistatic', 'Not an electrical insulator', 'Piston rings, seals and bearings in water, steam and dry gas'],
  ['Bronze-filled<br><small>commonly 40–60 %</small>', 'Best creep and wear resistance; highest thermal conductivity', 'Reduced chemical resistance (acids, ammonia); electrically conductive', 'Hydraulic seals and guide rings, bearings, wear strips'],
  ['Graphite-filled<br><small>commonly 5–15 %</small>', 'Lower friction and good dry-running behaviour', 'Lower strength than carbon- or bronze-filled', 'Bushes and seals running against softer shafts'],
];
export const GRADE_NOTE = 'General guidance from published data. Filler percentages vary between compounds — confirm the exact grade for your application. *Ask for compliance documentation for food or pharma contact before ordering.';
