import { motion } from 'framer-motion';

const values = [
  {
    title: "Thoughtful Journeys",
    description: "Travel experiences designed around what matters to you."
  },
  {
    title: "Personal Attention",
    description: "A more personal approach to planning your journey."
  },
  {
    title: "Memorable Experiences",
    description: "Focus on experiences that become lasting memories."
  },
  {
    title: "Travel Made Simple",
    description: "A smoother journey from planning to returning home."
  }
];

export default function WhyLavish() {
  return (
    <section className="py-24 md:py-32 bg-white text-brand-charcoal px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-8"
          >
            Why Lavish Holidays
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
            className="text-5xl md:text-6xl lg:text-8xl font-heading leading-tight"
          >
            The Art of Fine Travel
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col pt-8 border-t border-brand-charcoal/10 hover:border-brand-gold transition-colors duration-500"
            >
              <span className="text-brand-gold font-semibold text-xs tracking-widest mb-6 block">
                0{index + 1}
              </span>
              <h3 className="text-2xl lg:text-3xl font-heading mb-6 text-brand-charcoal leading-snug group-hover:text-brand-gold transition-colors duration-500">
                {value.title}
              </h3>
              <p className="text-brand-charcoal/60 font-light text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
