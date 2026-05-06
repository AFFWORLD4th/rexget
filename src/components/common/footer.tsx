import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const sitemapLinks = [
  { href: "/buy", label: "Buy" },
  { href: "/offPlans", label: "Off-Plan" },
  { href: "/rent", label: "Rent" },
  { href: "/communities", label: "Communities" },
  { href: "/whyDubai", label: "Why Dubai" },
  { href: "/service", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contactUs", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-onyx text-white relative overflow-hidden border-t border-gold/20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand/Logo Column */}
          <div className="flex flex-col space-y-6 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Rexgate Logo"
              width={160}
              height={50}
              className="object-contain"
            />
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs italic">
              "Redefining the standard of luxury living through a heritage of excellence and a vision for the future."
            </p>
            <div className="flex items-center gap-4">
               {[Instagram, Phone, Mail].map((Icon, i) => (
                 <div key={i} className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center hover:bg-gold/10 hover:border-gold transition-all duration-500 cursor-pointer group">
                    <Icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                 </div>
               ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-8 tracking-widest uppercase">Navigation</h4>
            <ul className="grid grid-cols-2 gap-4 text-sm font-light">
              {sitemapLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold/0 group-hover:bg-gold transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-gold font-serif text-lg mb-8 tracking-widest uppercase">The Gallery</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs text-gold/60 uppercase tracking-widest">Headquarters</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  87 Saeed Tower, Trade Center First<br />
                  Sheikh Zayed Rd, Dubai, UAE
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-gold/60 uppercase tracking-widest">Inquiries</p>
                <p className="text-gray-300 text-sm font-light">
                  <a href="tel:+971582085554" className="hover:text-gold transition-colors">+971 58 208 5554</a><br />
                  <a href="mailto:hello@rexgate.ae" className="hover:text-gold transition-colors">hello@rexgate.ae</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 text-[10px] text-gold/40 tracking-[0.2em] uppercase">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/terms-conditions" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/cookie-policy" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
          <p className="text-gold/40 text-[10px] tracking-[0.2em] uppercase">
            &copy; 2025 REXGATE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
