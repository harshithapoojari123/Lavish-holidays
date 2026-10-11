import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenPlanner }) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 my-8">
      {/* Background Image with Traveler gazing at mountains like the mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=85&w=2000&auto=format&fit=crop"
          alt="Traveler exploring majestic mountain panorama"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Dark Vignette / Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailor-Made Vacation Planning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal leading-tight text-white">
              Let's Plan Your Next Adventure
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Tell us your travel plans and we'll create a perfect holiday just for you. Completely bespoke, completely unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <button
              onClick={() => onOpenPlanner && onOpenPlanner()}
              className="px-8 sm:px-10 py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-3 transition-all duration-300 shadow-xl shadow-amber-600/30 hover:scale-105 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
