import { motion } from 'framer-motion';
import { business } from '../data/business';

export default function Founder() {
  return (
    <section id="founder" className="py-24 md:py-32 px-6 lg:px-12 bg-brand-ivory text-brand-charcoal">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Portrait */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm"
            >
              <img 
                src={business.founder.image} 
                alt={business.founder.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-12"
            >
              Leadership & Vision
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-16 relative"
            >
              <span className="absolute -top-16 -left-10 text-8xl font-heading text-brand-charcoal/5 leading-none select-none hidden md:block">
                "
              </span>
              <p className="text-3xl md:text-5xl font-heading leading-[1.2] text-brand-charcoal relative z-10">
                "Our goal is not merely to send you to a destination, but to guide you toward moments that resonate deeply and stay with you forever."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-heading tracking-wide uppercase text-brand-charcoal">
                {business.founder.name}
              </h3>
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-gold">
                {business.founder.designation}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
