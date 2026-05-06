import type React from "react";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/src/components/seo/structured-data";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/src/lib/structured-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rexgate - Premium Real Estate Solutions in Dubai | Buy, Rent & Invest",
    template: "%s | Rexgate",
  },
  description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service. Buy, rent, or invest in Dubai's finest properties.",
  keywords: "Dubai real estate, luxury properties Dubai, buy property Dubai, rent property Dubai, off-plan Dubai, property investment Dubai, real estate agents Dubai, Dubai properties, Business Bay properties, Dubai Marina properties, property management Dubai, mortgages Dubai, conveyancing Dubai",
  authors: [{ name: "Rexgate" }],
  creator: "Rexgate",
  publisher: "Rexgate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rexgate.ae'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/new_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/new_logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/new_logo.png',
    apple: '/images/new_logo.png',
  },
  openGraph: {
    title: "Rexgate - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.",
    url: 'https://rexgate.ae',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Rexgate - Premium Real Estate Solutions in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rexgate - Premium Real Estate Solutions in Dubai",
    description: "Discover luxury properties, off-plan projects, and premium real estate services in Dubai. Expert agents, comprehensive market insights, and exceptional customer service.",
    images: ['/images/bgImage.webp'],
    creator: '@rexgate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes here when available
  },
  category: 'Real Estate',
  classification: 'Real Estate Agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfairDisplay.variable} antialiased smooth-scroll`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="luxury-bg touch-optimized">
        <StructuredData data={[organizationSchema, websiteSchema, localBusinessSchema]} />
        {children}
      </body>
    </html>
  );
}
