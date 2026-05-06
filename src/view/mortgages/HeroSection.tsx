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
          alt="Mortgages Background"
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
              <span className="underline">Mortgages</span>
            </nav>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight text-left font-serif">
            Premium <span className="text-[#000000] font-normal">Mortgage Solutions</span> for
            <br />
            <span className="text-[#000000] font-normal">Luxury Properties</span> in Dubai
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white mb-8 max-w-3xl leading-relaxed text-left font-sans">
            Secure the most competitive mortgage rates and flexible financing options for your luxury property investment. 
            Our expert team guides you through every step of the process with personalized solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 text-left">
            <Button className="bg-[#000000] hover:bg-[#171717] text-white px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 font-sans">
              Get Pre-Approved Now
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 font-sans">
              Mortgage Calculator
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
