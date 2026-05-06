"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 leading-tight font-serif">
              Premium <span className="text-[#000000] font-normal">Short-Term Rentals</span> &
              <br />
              <span className="text-[#000000] font-normal">Holiday Homes</span> in Dubai
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-sans">
              Discover exceptional short-term rental opportunities or transform your property into a profitable holiday home. 
              Our comprehensive services ensure maximum returns and exceptional guest experiences.
            </p>

            <Button className="bg-[#000000] hover:bg-[#171717] text-white px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200 font-sans">
              List Your Property
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/building.jpg"
                alt="Happy family in modern living room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
