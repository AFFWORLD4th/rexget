import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dubai Real Estate Blog | Insights & Market Updates | Rexgate',
  description: 'Stay informed with the latest Dubai real estate insights, market trends, investment guides, and lifestyle articles. Expert analysis and comprehensive market information.',
  keywords: 'Dubai real estate blog, property market Dubai, real estate news Dubai, Dubai property insights, investment guides Dubai, Dubai market trends',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Dubai Real Estate Blog | Rexgate',
    description: 'Stay informed with the latest Dubai real estate insights, market trends, and investment guides.',
    url: 'https://rexgate.ae/blog',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Dubai Real Estate Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Real Estate Blog | Rexgate',
    description: 'Stay informed with the latest Dubai real estate insights and market trends.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

