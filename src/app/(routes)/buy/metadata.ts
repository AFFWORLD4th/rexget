import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy Luxury Properties in Dubai | Rexgate',
  description: 'Discover premium properties for sale in Dubai. Browse apartments, penthouses, townhouses, and villas in Dubai\'s most prestigious communities. Expert guidance and exceptional service.',
  keywords: 'buy property Dubai, luxury properties Dubai, apartments for sale Dubai, villas Dubai, penthouses Dubai, real estate Dubai',
  alternates: {
    canonical: '/buy',
  },
  openGraph: {
    title: 'Buy Luxury Properties in Dubai | Rexgate',
    description: 'Discover premium properties for sale in Dubai. Browse apartments, penthouses, townhouses, and villas.',
    url: 'https://rexgate.ae/buy',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury Properties for Sale in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Luxury Properties in Dubai | Rexgate',
    description: 'Discover premium properties for sale in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

