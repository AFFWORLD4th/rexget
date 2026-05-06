// Structured data (JSON-LD) helpers for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Rexgate',
  url: 'https://rexgate.ae',
  logo: 'https://rexgate.ae/logo.png',
  description: 'Premium real estate solutions in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '87 Saeed Tower, Trade Center First, Sheikh Zayed Rd',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
    postalCode: '00000',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+971-58-208-5554',
      email: 'hello@rexgate.ae',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
    },
  ],
  telephone: '+971-58-208-5554',
  email: 'hello@rexgate.ae',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2272',
    longitude: '55.2813',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://www.instagram.com/rexgateproperties',
    'https://www.facebook.com/RexgateProperties',
    'https://www.linkedin.com/company/104112994',
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rexgate.ae/#organization',
  name: 'Rexgate',
  image: 'https://rexgate.ae/logo.png',
  url: 'https://rexgate.ae',
  telephone: '+971-58-208-5554',
  email: 'hello@rexgate.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '87 Saeed Tower, Trade Center First, Sheikh Zayed Rd',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.2272',
    longitude: '55.2813',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rexgate',
  url: 'https://rexgate.ae',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://rexgate.ae/buy?title={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const propertySchema = (property: {
  name: string
  description?: string
  image?: string
  price?: string
  currency?: string
  address?: string
  bedrooms?: number
  bathrooms?: number
  propertyType?: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: property.name,
  description: property.description || property.name,
  image: property.image || 'https://rexgate.ae/images/placeholder.jpg',
  offers: property.price
    ? {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: property.currency || 'AED',
        availability: 'https://schema.org/InStock',
        url: property.url,
      }
    : undefined,
  ...(property.address && {
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.address,
      addressCountry: 'AE',
    },
  }),
  ...(property.bedrooms && { numberOfBedrooms: property.bedrooms }),
  ...(property.bathrooms && { numberOfBathroomsTotal: property.bathrooms }),
  ...(property.propertyType && { category: property.propertyType }),
})

export const articleSchema = (article: {
  headline: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  image: article.image || 'https://rexgate.ae/images/placeholder.jpg',
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  author: {
    '@type': 'Organization',
    name: article.author || 'Rexgate',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Rexgate',
    logo: {
      '@type': 'ImageObject',
      url: 'https://rexgate.ae/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
})

