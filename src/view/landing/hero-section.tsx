"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Search, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("Buy")
  const [searchQuery, setSearchQuery] = useState("")
  const [bedsFilter, setBedsFilter] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // Check if mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Optimized loading for mobile vs desktop
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsLoading(false)
      },
      isMobile ? 1000 : 2000,
    ) // Faster loading on mobile

    return () => clearTimeout(timer)
  }, [isMobile])

  // Handle search navigation
  const handleSearch = () => {
    const route = activeTab === "Buy" ? "/buy" : activeTab === "Rent" ? "/rent" : "/offPlans"
    router.push(route)
  }

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <section className="relative h-screen md:h-[110vh] w-full flex items-center justify-start overflow-hidden luxury-bg-dark">
      {/* Royal Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute inset-0 z-[100] bg-onyx flex items-center justify-center"
        >
          <div className="text-center relative">
            <motion.div
              animate={{ 
                rotate: 360,
                borderColor: ["#D4AF37", "#AA8239", "#D4AF37"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border-[1px] border-gold/30 border-t-gold rounded-full mx-auto mb-8 relative"
            >
               <div className="absolute inset-2 border-[1px] border-gold/10 rounded-full animate-pulse"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h2 className="text-gold font-serif text-3xl sm:text-5xl tracking-[0.4em] uppercase mb-2">REXGATE</h2>
              <p className="text-gold/50 font-sans text-xs tracking-[0.6em] uppercase">The Royal Standard</p>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"
            />
          </div>
        </motion.div>
      )}

      {/* Magnificent AI-Generated Dubai Sky View Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/dubai-sky-hero.png"
          alt="Magnificent Dubai Sky View"
          fill
          priority
          className="object-cover scale-105 animate-zoomInOut"
          sizes="100vw"
        />
        {/* Layered Overlays for Cinematic Depth */}
        <div className="absolute inset-0 bg-onyx/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/10 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx/60 via-onyx/20 to-transparent z-20" />
      </div>

      {/* Main Content - Left Aligned for Impact */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-30 pt-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">Excellence in Real Estate</span>
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8 drop-shadow-2xl">
              Elevate Your <br />
              <span className="luxury-text italic font-normal">Legacy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 font-light tracking-wide max-w-2xl leading-relaxed mb-12 border-l-2 border-gold/30 pl-6">
              Discover Dubai's most prestigious residences. At Rexgate, we blend heritage with modern luxury to find you more than just a home — we find your sanctuary.
            </p>
          </motion.div>

          {/* Integrated Search Console */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Elegant Tab Switcher */}
            <div className="flex items-center gap-8">
              {["Buy", "Rent", "Off Plan"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`group relative py-2 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
                    activeTab === tab ? "text-gold font-bold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-500 ${
                    activeTab === tab ? "w-full" : "w-0 group-hover:w-1/2"
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Advanced Search Bar - Royal Glass */}
            <div className="relative max-w-5xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 rounded-[2.5rem] blur opacity-30 animate-pulse"></div>
              <div className="relative luxury-glass-dark rounded-[2rem] p-3 sm:p-4 border border-white/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex flex-col lg:flex-row items-center gap-4 relative z-10">
                  {/* Location Input */}
                  <div className="flex-1 flex items-center px-6 py-2 w-full">
                    <Search className="w-5 h-5 text-gold mr-4 animate-goldPulse" />
                    <Input
                      type="text"
                      placeholder="Where do you want to live?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-0 bg-transparent text-white placeholder:text-gray-300 focus:ring-0 focus:outline-none text-xl font-medium w-full"
                    />
                  </div>

                  <div className="hidden lg:block w-[1px] h-12 bg-gold/20 mx-2"></div>

                  {/* Filters Grid */}
                  <div className="grid grid-cols-3 gap-4 w-full lg:w-auto px-4">
                    <div className="flex flex-col gap-1">
                       <span className="text-[11px] text-white/90 font-medium tracking-[0.2em] uppercase ml-3">Bedrooms</span>
                      <Select value={bedsFilter} onValueChange={setBedsFilter}>
                        <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 text-sm font-bold min-w-[100px] hover:text-gold transition-colors">
                          <SelectValue placeholder="ANY" />
                        </SelectTrigger>
                        <SelectContent className="bg-onyx/95 border-gold/20 text-white backdrop-blur-xl">
                          <SelectItem value="studio">Studio</SelectItem>
                          {[1,2,3,4,"5+"].map(n => <SelectItem key={n} value={String(n)}>{n} Beds</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                       <span className="text-[11px] text-white/90 font-medium tracking-[0.2em] uppercase ml-3">Min Price</span>
                      <Select value={minPrice} onValueChange={setMinPrice}>
                        <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 text-sm font-bold min-w-[120px] hover:text-gold transition-colors">
                          <SelectValue placeholder="ANY" />
                        </SelectTrigger>
                        <SelectContent className="bg-onyx/95 border-gold/20 text-white backdrop-blur-xl">
                          {["500k", "1M", "2M", "5M", "10M"].map(p => <SelectItem key={p} value={p}>{p} AED</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                       <span className="text-[11px] text-white/90 font-medium tracking-[0.2em] uppercase ml-3">Max Price</span>
                      <Select value={maxPrice} onValueChange={setMaxPrice}>
                        <SelectTrigger className="border-0 bg-transparent text-white focus:ring-0 text-sm font-bold min-w-[120px] hover:text-gold transition-colors">
                          <SelectValue placeholder="ANY" />
                        </SelectTrigger>
                        <SelectContent className="bg-onyx/95 border-gold/20 text-white backdrop-blur-xl">
                          {["2M", "5M", "10M", "50M", "100M"].map(p => <SelectItem key={p} value={p}>{p} AED</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={handleSearch}
                    className="w-full lg:w-auto !bg-[#D4AF37] !text-black hover:!bg-[#F3E5AB] hover:scale-[1.02] active:scale-95 px-12 py-8 rounded-2xl font-bold text-xs tracking-[0.3em] uppercase transition-all duration-500 shadow-[0_15px_40px_rgba(212,175,55,0.4)] border-t border-white/20"
                  >
                    Find Sanctuary
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  )
}
