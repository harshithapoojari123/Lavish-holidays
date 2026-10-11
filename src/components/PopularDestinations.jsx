import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { popularDestinations } from '../data/business';

export default function PopularDestinations({ onSelectDestination, onExploreAll }) {
  return (
    <section id="destinations" className="py-20 sm:py-24 bg-slate-50/60 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5">
              Explore Amazing Places
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
              Popular Destinations
            </h2>
          </div>
          
          <button 
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors uppercase tracking-wider group cursor-pointer self-start sm:self-auto"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Destination Cards Grid (6 Columns on xl, 3 on md, 1-2 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {popularDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

              {/* Hover Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-slate-800 backdrop-blur-xs">
                  {dest.category}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 flex items-end justify-between gap-2">
                <div className="text-white">
                  <h3 className="font-heading text-lg sm:text-xl font-normal leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-1 font-light hidden sm:block">
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
        </div>
      </div>
    </section>
  );
}
