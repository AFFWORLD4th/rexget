"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bgImage.webp"
          alt="Property Management Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-white text-sm">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Services</span>
              <span className="mx-2">/</span>
              <span className="underline">Property Management</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight text-left font-serif">
            Luxury Property <span className="text-[#000000] font-normal">Management</span> with
            <br />
            <span className="text-[#000000] font-normal">Personal Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white mb-8 max-w-3xl leading-relaxed text-left font-sans">
            Experience white-glove property management services designed for discerning owners. Our comprehensive approach ensures your luxury property performs at its peak potential while you enjoy complete peace of mind.
          </p>

          {/* CTA Button */}
          <div className="text-left">
            <Button className="bg-[#000000] hover:bg-[#171717] text-white px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 font-sans">
              Get Free Property Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
