"use client"

import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import { Button } from "@/src/components/ui/button"
import EnquireForm from "@/src/components/common/enquireForm"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"

function ContactUs() {
  return (
    <div className="luxury-bg min-h-screen">
      {/* Cinematic Hero Header */}
      <section className="pt-40 pb-20 px-4 luxury-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/bgImage.webp')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 to-onyx"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Connect With Us</span>
              <div className="h-[1px] w-12 bg-gold"></div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-serif text-white mb-6">
              Get in <span className="luxury-text italic">Touch</span>
            </h1>
            <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Whether you are looking for your next sanctuary or selling a masterpiece, our regal team is at your service.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-onyx leading-tight">
                Experience the <br /> 
                <span className="luxury-text italic font-normal">Rexgate Standard</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Our bespoke approach ensures that every inquiry is handled with the utmost discretion and excellence. 
                Visit our Dubai headquarters for a private consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Address */}
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-gold/30 transition-all duration-500 luxury-hover">
                <div className="w-12 h-12 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-onyx font-bold tracking-widest text-xs uppercase mb-4">Our Gallery</h3>
                <a href="https://maps.app.goo.gl/NMULwbYBcSqjuJco6" target="_blank" className="text-gray-600 hover:text-gold transition-colors text-sm leading-relaxed">
                  87 Saeed Tower, Trade Center First<br />Sheikh Zayed Rd, Dubai – UAE
                </a>
              </div>

              {/* Direct Line */}
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-gold/30 transition-all duration-500 luxury-hover">
                <div className="w-12 h-12 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-onyx font-bold tracking-widest text-xs uppercase mb-4">Direct Line</h3>
                <a href="tel:+971582085554" className="text-gray-600 hover:text-gold transition-colors text-lg font-serif">
                  +971 58 208 5554
                </a>
              </div>

              {/* Email */}
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-gold/30 transition-all duration-500 luxury-hover">
                <div className="w-12 h-12 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-onyx font-bold tracking-widest text-xs uppercase mb-4">Email</h3>
                <a href="mailto:hello@rexgate.ae" className="text-gray-600 hover:text-gold transition-colors text-lg font-serif">
                  hello@rexgate.ae
                </a>
              </div>

              {/* Social */}
              <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-gold/30 transition-all duration-500 luxury-hover">
                <div className="w-12 h-12 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500">
                  <Instagram className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-onyx font-bold tracking-widest text-xs uppercase mb-4">Instagram</h3>
                <a href="https://www.instagram.com/rexgateproperties" target="_blank" className="text-gray-600 hover:text-gold transition-colors text-lg font-serif">
                  @rexgateproperties
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/10 rounded-[2.5rem] -rotate-1"></div>
            <div className="relative bg-white border border-gold/20 rounded-[2.5rem] p-10 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-onyx mb-2">Send an Enquiry</h2>
                <p className="text-gray-500 text-sm font-light">Expect a response within 24 business hours.</p>
              </div>
              <EnquireForm type="contact"/>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

