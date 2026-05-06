import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Invest in Dubai Real Estate | Investment Guide | Rexgate',
  description: 'Discover why Dubai is the perfect destination for real estate investment. Tax-free returns, high rental yields, visa opportunities, and world-class lifestyle. Complete investment guide.',
  keywords: 'why invest in Dubai, Dubai real estate investment, Dubai property investment, Dubai investment guide, Dubai property benefits, Dubai real estate advantages',
  alternates: {
    canonical: '/whyDubai',
  },
  openGraph: {
    title: 'Why Invest in Dubai Real Estate | Rexgate',
    description: 'Discover why Dubai is the perfect destination for real estate investment. Tax-free returns, high rental yields, and world-class lifestyle.',
    url: 'https://rexgate.ae/whyDubai',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Why Invest in Dubai Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Invest in Dubai Real Estate | Rexgate',
    description: 'Discover why Dubai is the perfect destination for real estate investment.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

