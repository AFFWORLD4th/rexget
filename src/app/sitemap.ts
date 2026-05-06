import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rexgate.ae'
  
  // Static routes
  const staticRoutes = [
    '',
    '/buy',
    '/rent',
    '/offPlans',
    '/communities',
    '/blog',
    '/list-your-property',
    '/property-management',
    '/mortgages',
    '/conveyancing',
    '/short-term-rental',
    '/team',
    '/contactUs',
    '/whyDubai',
    '/service',
    '/privacy-policy',
    '/terms-conditions',
    '/cookie-policy',
    '/disclaimer',
  ]

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route === '/buy' || route === '/rent' ? 0.9 : 0.7,
  }))

  return routes
}

