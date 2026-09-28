import { motion } from 'framer-motion';

export default function CinematicBreak() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, margin: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
          alt="Beautiful destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-heading font-light tracking-wide"
        >
          The world is waiting.
        </motion.h2>
      </div>
    </section>
  );
}
