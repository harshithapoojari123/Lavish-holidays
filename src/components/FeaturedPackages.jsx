import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Utensils, Hotel, ArrowRight, Sparkles, Globe, MapPin } from 'lucide-react';
import { featuredPackages } from '../data/business';

export default function FeaturedPackages({ onSelectPackage, onViewAll }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredPackages = featuredPackages.filter(pkg => {
    if (activeTab === 'all') return true;
    return pkg.region === activeTab;
  });

  return (
    <section id="packages" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked For You</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
              Featured Holiday Packages
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              All Packages
            </button>
            <button
              onClick={() => setActiveTab('domestic')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'domestic'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
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
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>International</span>
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredPackages.map((pkg, index) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                {/* Card Image Container */}
                <div className="relative aspect-[4/2.8] w-full overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Badge on Top Left */}
                  {pkg.badge && (
                    <span className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md ${pkg.badgeColor}`}>
                      {pkg.badge}
                    </span>
                  )}

                  {/* Destination Tag on Bottom Left */}
                  <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1 drop-shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>{pkg.destination}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Specs (Duration, Breakfast, Hotels) */}
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium mb-3 pb-3 border-b border-slate-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        {pkg.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Utensils className="w-3.5 h-3.5 text-amber-600" />
                        {pkg.mealPlan ? 'Meal Plan' : 'Breakfast'}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Hotel className="w-3.5 h-3.5 text-amber-600" />
                        Luxury Stays
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-heading font-normal text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {pkg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light line-clamp-2 mb-6">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Bottom Action (NO PRICE) */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-amber-600/20 group-hover:bg-[#0F294A] group-hover:shadow-slate-900/20 cursor-pointer"
                    >
                      <span>View Package Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
