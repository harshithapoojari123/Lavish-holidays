import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative aspect-square md:aspect-[4/5] w-full overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop"
              alt="Luxury Travel Experience"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-brand-gold"></div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold font-semibold">
                  Our Philosophy
                </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight mb-8">
                Travel is more than reaching a destination.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-brand-ivory/70 font-light text-sm md:text-base leading-relaxed"
            >
              <p>
                At Lavish Holidays, we believe that a true journey transforms the traveler. We curate premium experiences that linger in your memory long after you've returned home.
              </p>
              <p>
                Every detail of your itinerary is thoughtfully considered and meticulously planned. Step away from the ordinary and immerse yourself in the extraordinary.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
