import TeamPage from "@/src/view/team/teamPage";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Luxury Team - Rexgate",
  description: "Meet our exceptional team of luxury real estate professionals in Dubai. Expert agents dedicated to making your property dreams come true.",
  keywords: 'real estate team Dubai, property agents Dubai, luxury real estate agents, Rexgate team, Dubai property experts',
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: "Our Luxury Team - Rexgate",
    description: "Meet our exceptional team of luxury real estate professionals in Dubai.",
    url: 'https://rexgate.ae/team',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'Rexgate Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Luxury Team - Rexgate",
    description: "Meet our exceptional team of luxury real estate professionals in Dubai.",
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Team() {
  return <TeamPage />;
}
