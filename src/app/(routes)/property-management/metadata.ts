import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management Services in Dubai | Rexgate',
  description: 'Professional property management services in Dubai. Comprehensive property care, tenant management, maintenance, and rental optimization. Trusted by property owners across Dubai.',
  keywords: 'property management Dubai, property management services Dubai, rental management Dubai, property maintenance Dubai, tenant management Dubai',
  alternates: {
    canonical: '/property-management',
  },
  openGraph: {
    title: 'Property Management Services in Dubai | Rexgate',
    description: 'Professional property management services in Dubai. Comprehensive property care, tenant management, and maintenance.',
    url: 'https://rexgate.ae/property-management',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Property Management Services in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Management Services in Dubai | Rexgate',
    description: 'Professional property management services in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

