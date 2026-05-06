"use client"

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

function WhyRexgate() {
  const benefits = [
    "Most awarded real estate agency in the UAE",
    "Our agents speak more than 45 languages",
    "Achieved 50+ billion AED sales in our career",
    "0% Zero fees to you",
    "Get listed on local & global portals"
  ];

  return (
    <section className="py-24 luxury-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-serif text-onyx mb-10 leading-tight">
              Why list your property with <span className="luxury-text italic">Rexgate?</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center group-hover:border-gold transition-colors duration-500">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-light tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <button className="relative group overflow-hidden bg-onyx text-white px-10 py-5 rounded-xl text-xs tracking-[0.3em] uppercase font-bold shadow-xl hover:shadow-2xl transition-all duration-500">
              <span className="relative z-10">List Your Property</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 ml-2 group-hover:text-onyx transition-colors duration-500">→</span>
            </button>
          </motion.div>

          {/* Right Content - Image with Regal Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/20 rounded-[2rem] rotate-2"></div>
            <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white">
              <Image
                src="/images/third.webp"
                alt="Why list your property with Rexgate"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* How does it work section */}
        <div className="mt-32 text-center">
          <div className="inline-block px-6 py-2 border border-gold/20 rounded-full mb-6">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase">Simple Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-onyx mb-6">
            How does it <span className="luxury-text italic">work?</span>
          </h2>
          <p className="text-gray-600 font-light tracking-wide max-w-xl mx-auto italic">
            Experience a seamless, high-touch journey from initial valuation to the final handshake.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyRexgate;
