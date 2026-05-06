"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  User,
  Settings,
  Home,
  DollarSign,
  Scale,
  Bed,
  Wrench,
  Users,
  Bitcoin,
  TrendingUp,
  Building2,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";

import { useCurrency, CurrencyCode, AVAILABLE_CURRENCIES } from "@/src/context/CurrencyContext";

export default function Header() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOverlayOpen]);

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/buy", label: "Buy", icon: <Home className="h-5 w-5" /> },
    { href: "/rent", label: "Rent", icon: <Bed className="h-5 w-5" /> },
    { href: "/offPlans", label: "Projects", icon: <Building2 className="h-5 w-5" /> },
    { href: "/team", label: "Teams", icon: <Users className="h-5 w-5" /> },
    { href: "/communities", label: "Areas", icon: <Globe className="h-5 w-5" /> },
    { href: "/service", label: "Services", icon: <Wrench className="h-5 w-5" /> },
    { href: "/blog", label: "Blogs", icon: <TrendingUp className="h-5 w-5" /> },
    { href: "/careers", label: "Careers", icon: <User className="h-5 w-5" /> },
    { href: "/contactUs", label: "Contact Us", icon: <Globe className="h-5 w-5" /> },
  ];
  const services = [
    {
      icon: <Settings className="h-4 w-4 text-gray-500" />,
      name: "Property Management"
    },
    {
      icon: <Home className="h-4 w-4 text-gray-500" />,
      name: "List Your Property"
    },
    {
      icon: <DollarSign className="h-4 w-4 text-gray-500" />,
      name: "Mortgages"
    },
    {
      icon: <Scale className="h-4 w-4 text-gray-500" />,
      name: "Conveyancing"
    },
    {
      icon: <Bed className="h-4 w-4 text-gray-500" />,
      name: "Short Term Rentals"
    },
    {
      icon: <Wrench className="h-4 w-4 text-gray-500" />,
      name: "Property Snagging"
    },
    {
      icon: <Users className="h-4 w-4 text-gray-500" />,
      name: "Partner Program"
    },
    
  ];

  const headerLink = [
    { href: "/buy", label: "Buy" },
    { href: "/rent", label: "Rent" },
    { href: "/offPlans", label: "Projects" },
    { href: "/team", label: "Teams" },
    { href: "/communities", label: "Areas" },
    { href: "/service", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blogs" },
    { href: "/careers", label: "Careers" },
    { href: "/contactUs", label: "Contact Us" },
  ];
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      // Don't close if clicking inside the mobile overlay
      if (target.closest('[data-mobile-overlay]')) {
        return;
      }
      setIsOverlayOpen(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOverlayOpen]);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-t-2 border-gold ${
      isScrolled 
        ? 'bg-onyx/95 backdrop-blur-xl border-b border-gold/30 shadow-[0_4px_30px_rgba(212,175,55,0.1)]' 
        : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
    }`}>
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 relative group">
          <div className="absolute -inset-2 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Link href={"/"} className="relative">
            <Image
              src="/logo.png"
              alt="REXGATE Logo"
              width={120}
              height={40}
              className="object-contain w-[100px] sm:w-[120px] filter transition-all duration-500 group-hover:brightness-110"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
          {headerLink.map((link, i) => {
            if (link.hasDropdown) {
              return (
                <HoverCard key={i} openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative pb-1 transition-all duration-300 font-medium text-xs uppercase tracking-widest text-gray-600 hover:text-gold",
                        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
                        "after:bg-gold after:transition-all after:duration-500 hover:after:w-full",
                        pathname === link.href && "after:w-full text-gold"
                      )}
                      style={{
                        letterSpacing: "0.5px",
                      }}
                    >
                      {link.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px] p-0" sideOffset={10}>
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-100">
                        <h3 className="text-gray-500 text-sm font-light">Our Services</h3>
                      </div>
                      
                      {/* Services Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {/* Left Column */}
                          <div className="space-y-2">
                            {services.slice(0, 5).map((service, index) => (
                              <Link
                                key={index}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short Term Rentals" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>

                          {/* Right Column */}
                          <div className="space-y-2">
                            {services.slice(5, 10).map((service, index) => (
                              <Link
                                key={index + 5}
                                href={
                                  service.name === "List Your Property" ? "/list-your-property" :
                                  service.name === "Property Management" ? "/property-management" :
                                  service.name === "Mortgages" ? "/mortgages" :
                                  service.name === "Conveyancing" ? "/conveyancing" :
                                  service.name === "Short-Term Rental" ? "/short-term-rental" :
                                  "/service"
                                }
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                              >
                                <div className="flex-shrink-0 transition-colors duration-200 group-hover:text-blue-600">
                                  {service.icon}
                                </div>
                                <span className="text-blue-900 font-medium text-sm group-hover:text-blue-700 transition-colors duration-200">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "relative pb-1 transition-all duration-300 font-medium text-xs uppercase tracking-widest text-gray-600 hover:text-gold",
                  "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
                "after:bg-gold after:transition-all after:duration-500 hover:after:w-full",
                pathname === link.href && "after:w-full text-gold"
              )}
              style={{
                letterSpacing: "0.5px",
              }}
            >
              {link.label}
            </Link>
            );
          })}
        </div>

        {/* Right Side - Currency, Login, Signup */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          {/* Currency Display */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Globe className="h-3 w-3" />
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 outline-none text-xs font-light hover:text-[#000000] transition-colors">
                  <span>{currency}</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[100px] z-[99999] bg-white border border-gray-100 shadow-xl rounded-md p-1">
                  {AVAILABLE_CURRENCIES.map((c) => (
                    <DropdownMenuItem
                      key={c}
                      className={cn(
                        "text-xs cursor-pointer px-2 py-1.5 rounded-sm hover:bg-gray-50 hover:text-[#000000] transition-colors",
                         currency === c && "text-[#000000] bg-gray-50 font-medium"
                      )}
                      onSelect={() => setCurrency(c)}
                    >
                      {c}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Login Button */}
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden sm:flex items-center space-x-2 bg-transparent h-8 px-3 border-gray-300 text-gray-700 hover:border-[#000000] hover:text-[#000000] transition-all duration-200"
            >
              <User className="h-3 w-3" />
              <span className="text-xs font-light">Login</span>
            </Button>
          </Link>

          {/* List Your Property Button */}
          <Link href="/list-your-property">
            <Button className="h-8 px-2 sm:px-4 text-[10px] sm:text-xs font-light bg-gradient-to-r from-[#000000] to-[#171717] hover:from-[#171717] hover:to-[#404040] text-white border-0 transition-all duration-200">
              <span className="hidden xs:inline">List Your Property</span>
              <span className="xs:hidden">List</span>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden cursor-pointer transition-colors duration-200 text-gray-700 hover:text-[#000000] p-1"
            onClick={() => setIsOverlayOpen(true)}
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Backdrop */}
      {isOverlayOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setIsOverlayOpen(false)}
        />
      )}

      <div
        data-mobile-overlay
        className={`fixed top-0 left-0 w-screen h-screen bg-white text-gray-900 z-[9999] transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOverlayOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center">
             <Image
              src="/logo.png"
              alt="REXGATE Logo"
              width={80}
              height={26}
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="text-gray-500 hover:text-[#000000] transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 border border-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 space-y-2 bg-white scrollbar-hide">
          {navLinks.map((link, i) => {
            if (link.href === "/service") {
              return (
                <div key={i} className="space-y-1">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-[#000000] transition-all duration-200 py-3 px-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100",
                      (pathname === link.href || isServicesOpen) && "bg-gray-50"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={cn("p-2 rounded-lg bg-gray-100 transition-colors group-hover:bg-red-50", (pathname === link.href || isServicesOpen) && "bg-red-50 text-[#000000]")}>
                        {link.icon}
                      </div>
                      <span className={cn("font-medium", (pathname === link.href || isServicesOpen) && "text-[#000000]")}>{link.label}</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isServicesOpen && "rotate-180 text-[#000000]"
                    )} />
                  </button>
                  
                  {/* Services Dropdown */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="ml-11 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={
                            service.name === "List Your Property" ? "/list-your-property" :
                            service.name === "Property Management" ? "/property-management" :
                            service.name === "Mortgages" ? "/mortgages" :
                            service.name === "Conveyancing" ? "/conveyancing" :
                            service.name === "Short Term Rentals" ? "/short-term-rental" :
                            "/service"
                          }
                          onClick={() => setIsOverlayOpen(false)}
                          className="flex items-center space-x-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer group text-gray-600 hover:text-[#000000]"
                        >
                          <div className="flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                            {service.icon}
                          </div>
                          <span className="text-sm font-light">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
            <Link
              key={i}
              href={link.href}
              className={cn(
                  "flex items-center space-x-3 text-gray-700 hover:text-[#000000] transition-all duration-200 py-3 px-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 group",
                  pathname === link.href && "text-[#000000] font-medium bg-red-50 border-red-50"
              )}
                onClick={() => setIsOverlayOpen(false)}
            >
              <div className={cn("p-2 rounded-lg bg-gray-100 transition-colors group-hover:bg-red-50", pathname === link.href && "bg-red-50 text-[#000000]")}>
                {link.icon}
              </div>
              <span className="font-medium">{link.label}</span>
            </Link>
            );
          })}
        </nav>

        <div className="p-4 sm:p-6 border-t border-gray-100 bg-white space-y-4">
          {/* Mobile Currency Display */}
          <div className="space-y-2">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium ml-1">Select Currency</span>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_CURRENCIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={cn(
                      "text-xs px-3 py-1.5 rounded-lg transition-all duration-200 border",
                      currency === c 
                        ? "bg-[#000000] border-[#000000] text-white font-medium shadow-md shadow-red-200" 
                        : "bg-white border-gray-200 text-gray-600 hover:border-[#000000] hover:text-[#000000]"
                    )}
                  >
                    {c}
                  </button>
              ))}
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link href="/login" onClick={() => setIsOverlayOpen(false)}>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center space-x-2 border-gray-200 text-gray-700 hover:border-[#000000] hover:text-[#000000] transition-all duration-200 font-medium rounded-xl h-11"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link href="/list-your-property" onClick={() => setIsOverlayOpen(false)}>
              <Button className="w-full bg-[#000000] hover:bg-[#171717] text-white font-medium shadow-lg shadow-red-100 transition-all duration-200 rounded-xl h-11 border-0">
                List Property
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
