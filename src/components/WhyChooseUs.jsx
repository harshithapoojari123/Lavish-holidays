import { motion } from 'framer-motion';
import { 
  MapPinned, 
  Award, 
  ShieldCheck, 
  Headphones, 
  Globe2, 
  Luggage 
} from 'lucide-react';
import { whyChooseFeatures } from '../data/business';

const iconMap = {
  MapPinned: MapPinned,
  Award: Award,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones,
  Globe2: Globe2,
  Luggage: Luggage
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-[0.25em] mb-1.5">
            Why Travel With Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal text-slate-900">
            Why Choose Lavish Holidays?
          </h2>
        </div>

        {/* 6 Feature Blocks in Row / Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {whyChooseFeatures.map((feat, index) => {
            const Icon = iconMap[feat.icon] || ShieldCheck;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xs hover:shadow-lg hover:border-amber-200/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-600 text-amber-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300 shadow-xs">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2 group-hover:text-amber-600 transition-colors">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed font-light mt-1">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
