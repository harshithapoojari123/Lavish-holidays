import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles, Compass, Globe } from 'lucide-react';
import { popularDestinations } from '../data/business';

export default function PopularDestinations({ onSelectDestination, onExploreAll }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredDestinations = popularDestinations.filter(dest => {
    if (activeTab === 'all') return true;
    return dest.region === activeTab;
  });

  return (
    <section id="destinations" className="py-20 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Amazing Places</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
              Popular Destinations
            </h2>
          </div>

          {/* Interactive Filter Tabs (All / International / Domestic India) */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setActiveTab('domestic')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'domestic'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Domestic India</span>
              <span className="text-sm leading-none">🇮🇳</span>
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'international'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>International</span>
            </button>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5"
        >
          <AnimatePresence>
            {filteredDestinations.map((dest, index) => (
              <motion.div
                layout
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectDestination && onSelectDestination(dest.name)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4.2] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

                {/* Country / Region Tag on Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-slate-800 backdrop-blur-xs shadow-xs">
                    {dest.country || dest.category}
                  </span>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 flex items-end justify-between gap-2">
                  <div className="text-white">
                    <h3 className="font-heading text-lg sm:text-xl font-normal leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-[11px] text-white/75 line-clamp-1 font-light hidden sm:block">
                      {dest.tagline}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-slate-900 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center shrink-0 shadow-md transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
