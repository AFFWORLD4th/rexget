import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Rexgate Dubai | Get in Touch',
  description: 'Contact Rexgate for all your real estate needs in Dubai. Get expert advice, property inquiries, and personalized service. Located in Business Bay, Dubai.',
  keywords: 'contact Rexgate, Dubai real estate contact, property inquiry Dubai, real estate agent Dubai, Rexgate contact',
  alternates: {
    canonical: '/contactUs',
  },
  openGraph: {
    title: 'Contact Us | Rexgate Dubai',
    description: 'Contact Rexgate for all your real estate needs in Dubai. Get expert advice and personalized service.',
    url: 'https://rexgate.ae/contactUs',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Rexgate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Rexgate Dubai',
    description: 'Contact Rexgate for all your real estate needs in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

