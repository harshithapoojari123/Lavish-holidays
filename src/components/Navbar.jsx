import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, Phone } from 'lucide-react';
import { business } from '../data/business';
import { cn } from '../utils/cn';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Holiday Packages', href: '#packages' },
    { name: 'Special Interest', href: '#themes' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-100" 
            : "bg-white py-4.5 border-b border-slate-100/60"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          {/* Brand Logo & Tagline (Matches Mockup Left) */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            {business.logo ? (
              <img
                src={business.logo}
                alt={business.name}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-amber-400/40 shadow-xs"
              />
            ) : null}
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg sm:text-xl lg:text-2xl text-slate-900 tracking-wider uppercase leading-none group-hover:text-amber-600 transition-colors">
                {business.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-amber-700/80 font-medium mt-1">
                {business.tagline || 'Travel • Explore • Live More'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-xs xl:text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action (Enquire Now Button matching Mockup) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry("General Navbar Enquiry")}
              className="hidden sm:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-amber-600/20 transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-white border-b border-slate-200 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-base font-medium text-slate-800 hover:text-amber-600 py-2 border-b border-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry && onOpenEnquiry("Mobile Menu");
                  }}
                  className="w-full py-3.5 rounded-xl bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-amber-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>

                <a
                  href={`tel:${business.contact.phone.replace(/\s/g, '')}`}
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>Call {business.contact.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
