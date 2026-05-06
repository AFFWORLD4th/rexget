import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/list.jpg"
          alt="Luxury property listing service in Dubai - Rexgate helping homeowners sell or rent their properties"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Background Awards */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-8 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-32 h-40 bg-gray-700 rounded-lg shadow-2xl">
              <div className="p-4 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="text-center">
                  <p className="text-white text-sm font-bold tracking-widest">REXGATE</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Navigation */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-white">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="underline">List Your Property</span>
            </nav>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight font-serif">
              Sell or Rent Your <span className="text-[#000000] font-normal">Luxury Property</span> in
              <br />
              <span className="text-[#000000] font-normal">Dubai</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-sans">
              Partner with Dubai's most trusted luxury real estate agency to sell or rent your property. Maximize your property's value with our premium marketing strategies and exclusive client network. List your luxury property in Dubai with zero fees and global reach.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="bg-[#000000] hover:bg-[#171717] text-white px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 font-sans">
              Get Free Property Valuation
            </button>
          </div>

          {/* Ratings */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">Google 4.8</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold">Trustpilot 4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
