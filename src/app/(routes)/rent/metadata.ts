import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rent Luxury Properties in Dubai | Rexgate',
  description: 'Find premium rental properties in Dubai. Browse furnished apartments, luxury villas, and penthouses in Dubai\'s most sought-after locations. Expert rental guidance.',
  keywords: 'rent property Dubai, luxury rentals Dubai, apartments for rent Dubai, villas for rent Dubai, furnished apartments Dubai, rental properties Dubai',
  alternates: {
    canonical: '/rent',
  },
  openGraph: {
    title: 'Rent Luxury Properties in Dubai | Rexgate',
    description: 'Find premium rental properties in Dubai. Browse furnished apartments, luxury villas, and penthouses.',
    url: 'https://rexgate.ae/rent',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury Rental Properties in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent Luxury Properties in Dubai | Rexgate',
    description: 'Find premium rental properties in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

