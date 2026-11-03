/* JSON-LD structured data. Emits one @graph per page containing:
     Organization (or LocalBusiness once the full address is confirmed), WebSite,
     the page node (WebPage / AboutPage / ContactPage / CollectionPage),
     BreadcrumbList (inner pages) and Article (resources).
   Nothing here invents ratings, reviews, prices or certifications. Product markup is
   intentionally not used: without published prices or genuine reviews it is not
   eligible for Google product rich results and would be reported as incomplete. */
import { SITE, BUSINESS, ADDRESS_COMPLETE } from './config.mjs';

export function organizationNode() {
  const a = BUSINESS.address;
  const address = {
    '@type': 'PostalAddress',
    streetAddress: [a.unit, a.streetAddress].filter(Boolean).join(', '),
    ...(a.locality && { addressLocality: a.locality }),
    ...(a.postalCode && { postalCode: a.postalCode }),
    addressRegion: a.region,
    addressCountry: a.country,
  };
  const node = {
    '@type': ADDRESS_COMPLETE ? 'LocalBusiness' : 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: BUSINESS.name,
    ...(BUSINESS.legalName && { legalName: BUSINESS.legalName }),
    url: `${SITE.url}/`,
    logo: { '@type': 'ImageObject', url: `${SITE.url}/${SITE.logo}`, width: 512, height: 512 },
    image: `${SITE.url}/${SITE.ogImage}`,
    description: 'Manufacturer of PTFE (Teflon) sheets, rods, tubes, gaskets, bushes, seals and custom-machined PTFE components for industrial applications.',
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    address,
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      areaServed: 'IN',
    }],
    knowsAbout: ['PTFE', 'Polytetrafluoroethylene', 'Teflon', 'PTFE machining', 'PTFE gaskets', 'PTFE seals', 'Filled PTFE'],
    ...(BUSINESS.sameAs.length && { sameAs: BUSINESS.sameAs }),
  };
  if (ADDRESS_COMPLETE) {
    node.openingHoursSpecification = BUSINESS.hoursSpec.map((h) => ({
      '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes,
    }));
  }
  return node;
}

export function jsonLd(c) {
  const p = c.page;
  if (p.noindex) return JSON.stringify({ '@context': 'https://schema.org', '@graph': [organizationNode()] }, null, 2);

  const url = c.abs(p.path);
  const graph = [
    organizationNode(),
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      inLanguage: SITE.lang,
      publisher: { '@id': `${SITE.url}/#organization` },
    },
  ];

  const pageNode = {
    '@type': p.schemaType || 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: p.title,
    description: p.description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    ...(p.path === '' && { about: { '@id': `${SITE.url}/#organization` } }),
    ...(p.updated && { dateModified: p.updated }),
  };

  if (p.breadcrumbs && p.breadcrumbs.length) {
    const trail = [['Home', ''], ...p.breadcrumbs];
    pageNode.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: trail.map(([name, path], i) => ({
        '@type': 'ListItem', position: i + 1, name, item: c.abs(path),
      })),
    });
  }
  graph.push(pageNode);

  if (p.article) {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: p.h1Text || p.title,
      description: p.description,
      image: `${SITE.url}/${SITE.ogImage}`,
      datePublished: p.published,
      dateModified: p.updated || p.published,
      author: { '@id': `${SITE.url}/#organization` },
      publisher: { '@id': `${SITE.url}/#organization` },
      mainEntityOfPage: { '@id': `${url}#webpage` },
      inLanguage: SITE.lang,
    });
  }

  // Escape "<" so no string value can close the surrounding <script> element.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2).replace(/</g, '\\u003c');
}
