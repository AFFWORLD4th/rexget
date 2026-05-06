import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mortgage Services in Dubai | Home Loans & Financing | Rexgate',
  description: 'Expert mortgage services in Dubai. Get the best home loan rates, mortgage advice, and financing solutions for your property purchase. Free mortgage calculator and consultation.',
  keywords: 'mortgage Dubai, home loans Dubai, property financing Dubai, mortgage calculator Dubai, mortgage advice Dubai, real estate financing Dubai',
  alternates: {
    canonical: '/mortgages',
  },
  openGraph: {
    title: 'Mortgage Services in Dubai | Rexgate',
    description: 'Expert mortgage services in Dubai. Get the best home loan rates and financing solutions for your property purchase.',
    url: 'https://rexgate.ae/mortgages',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Mortgage Services in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mortgage Services in Dubai | Rexgate',
    description: 'Expert mortgage services in Dubai.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

