import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../data/business';

export default function Testimonials({ onEnquire }) {
  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5">
              Real Stories, Real Journeys
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
              What Our Travellers Say
            </h2>
          </div>
          
          <button
            onClick={() => onEnquire && onEnquire("Traveller Reviews", "All")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors uppercase tracking-wider group cursor-pointer self-start sm:self-auto"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-slate-50/70 p-6 sm:p-7 rounded-3xl border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Traveler Photo & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-13 h-13 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-slate-900 leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-xs text-amber-700 font-medium">
                        {t.trip}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-7 h-7 text-amber-200 stroke-[1.5]" />
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-6">
                  "{t.review}"
                </p>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400 pt-3 border-t border-slate-200/60">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-semibold text-slate-600 ml-2">5.0 Verified Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
