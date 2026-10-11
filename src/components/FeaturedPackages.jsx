import { motion } from 'framer-motion';
import { Calendar, Utensils, Hotel, ArrowRight, Sparkles } from 'lucide-react';
import { featuredPackages } from '../data/business';

export default function FeaturedPackages({ onSelectPackage, onViewAll }) {
  return (
    <section id="packages" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked For You</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
              Featured Holiday Packages
            </h2>
          </div>
          
          <button 
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors uppercase tracking-wider group cursor-pointer self-start sm:self-auto"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Badge on Top Left */}
                {pkg.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-md ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Specs (Duration, Breakfast, Hotels) */}
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-slate-500 font-medium mb-3 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {pkg.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-amber-600" />
                      Breakfast
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Hotel className="w-3.5 h-3.5 text-amber-600" />
                      4★/5★ Stays
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-heading font-normal text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light line-clamp-2 mb-6">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Bottom Action (NO PRICE, just luxury Enquire / View Package button!) */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-amber-600/20 group-hover:bg-[#0F294A] group-hover:shadow-slate-900/20 cursor-pointer"
                  >
                    <span>View Package</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
