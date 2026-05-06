import React from 'react';
import { Metadata } from 'next';
import HeroSection from '../../../view/list-property/HeroSection';
import WhyRexgate from '../../../view/list-property/WhyRexgate';
import HowItWorks from '../../../view/list-property/HowItWorks';
import ClientTestimonials from '../../../view/list-property/ClientTestimonials';
import ContactForm from '../../../view/list-property/ContactForm';
import BuyPreview from '../../../view/list-property/BuyPreview';

export const metadata: Metadata = {
  title: 'List Your Property in Dubai - Sell or Rent with Rexgate | 0% Fees',
  description: 'List your luxury property in Dubai with Rexgate - UAE\'s most awarded real estate agency. Zero fees, premium marketing, global reach. Sell or rent your property with Dubai\'s trusted real estate experts. Get free property valuation today.',
  keywords: 'list property Dubai, sell property Dubai, rent property Dubai, property listing Dubai, free property listing Dubai, property valuation Dubai',
  alternates: {
    canonical: '/list-your-property',
  },
  openGraph: {
    title: 'List Your Property in Dubai - Rexgate | 0% Fees',
    description: 'List your luxury property in Dubai with Rexgate. Zero fees, premium marketing, global reach.',
    url: 'https://rexgate.ae/list-your-property',
    siteName: 'Rexgate',
    images: [
      {
        url: '/images/bgImage.webp',
        width: 1200,
        height: 630,
        alt: 'List Your Property in Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List Your Property in Dubai - Rexgate | 0% Fees',
    description: 'List your luxury property in Dubai with Rexgate. Zero fees, premium marketing.',
    images: ['/images/bgImage.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ListYourPropertyPage() {
  return (
    <div className="bg-white text-sm md:text-base">
      <HeroSection />
      <WhyRexgate />
      <BuyPreview />
      <HowItWorks />
      <ClientTestimonials />
      <ContactForm />
    </div>
  );
}
