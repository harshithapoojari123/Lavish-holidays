import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/business';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-ivory px-6 lg:px-12 relative">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-6"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading text-brand-charcoal leading-tight"
            >
              Premium Travel Services
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block w-32 h-[1px] bg-brand-charcoal/20"
          />
        </div>

        <div className="flex flex-col border-t border-brand-charcoal/10 relative">
          
          {/* Dynamic Background Image Reveal on Desktop */}
          <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none hidden lg:block z-0 opacity-0 lg:opacity-100">
            <AnimatePresence>
              {hoveredService && (
                <motion.img
                  key={hoveredService}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={services.find(s => s.id === hoveredService)?.image}
                  className="absolute inset-0 w-full h-[500px] object-cover mt-12 shadow-2xl"
                  alt=""
                />
              )}
            </AnimatePresence>
          </div>

          <div className="relative z-10 w-full lg:w-2/3 pr-0 lg:pr-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group border-b border-brand-charcoal/10 py-12 cursor-pointer flex flex-col md:flex-row md:items-center gap-8 md:gap-16 transition-colors duration-500 hover:bg-white/50"
              >
                <div className="text-sm font-semibold tracking-widest text-brand-gold w-12 group-hover:translate-x-4 transition-transform duration-500">
                  0{index + 1}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-heading mb-4 text-brand-charcoal group-hover:text-brand-gold transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-brand-charcoal/60 font-light text-sm md:text-base leading-relaxed max-w-md transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="hidden md:flex w-12 h-12 rounded-full border border-brand-charcoal/20 items-center justify-center group-hover:bg-brand-charcoal group-hover:border-brand-charcoal transition-all duration-500 overflow-hidden relative">
                  <svg className="w-4 h-4 text-brand-charcoal group-hover:text-white transition-colors duration-500 relative z-10 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
