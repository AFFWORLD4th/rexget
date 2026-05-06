import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off-Plan Properties in Dubai | Exclusive New Developments | Rexgate',
  description: 'Discover exclusive off-plan properties and new developments in Dubai. Be among the first to own in Dubai\'s most prestigious projects with exceptional investment potential.',
  keywords: 'off-plan Dubai, new developments Dubai, pre-construction Dubai, off-plan properties Dubai, new projects Dubai, investment properties Dubai',
  alternates: {
    canonical: '/offPlans',
  },
  openGraph: {
    title: 'Off-Plan Properties in Dubai | Rexgate',
    description: 'Discover exclusive off-plan properties and new developments in Dubai with exceptional investment potential.',
    url: 'https://rexgate.ae/offPlans',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Off-Plan Properties in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Off-Plan Properties in Dubai | Rexgate',
    description: 'Discover exclusive off-plan properties and new developments in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

