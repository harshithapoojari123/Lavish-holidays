import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="mb-16 md:mb-24">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`text-sm tracking-[0.2em] uppercase mb-4 ${light ? 'text-white/70' : 'text-gray-500'}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-heading ${light ? 'text-white' : 'text-brand-navy'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
