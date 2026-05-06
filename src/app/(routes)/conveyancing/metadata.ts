import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conveyancing Services in Dubai | Property Legal Services | Rexgate',
  description: 'Professional conveyancing and legal services for property transactions in Dubai. Expert property lawyers, title transfer, due diligence, and transaction management.',
  keywords: 'conveyancing Dubai, property legal services Dubai, property lawyers Dubai, title transfer Dubai, property due diligence Dubai, real estate legal services Dubai',
  alternates: {
    canonical: '/conveyancing',
  },
  openGraph: {
    title: 'Conveyancing Services in Dubai | Rexgate',
    description: 'Professional conveyancing and legal services for property transactions in Dubai.',
    url: 'https://rexgate.ae/conveyancing',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Conveyancing Services in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conveyancing Services in Dubai | Rexgate',
    description: 'Professional conveyancing and legal services for property transactions in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

