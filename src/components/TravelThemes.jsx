import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  UsersRound, 
  Mountain, 
  Gem, 
  Sparkles, 
  Palmtree, 
  Globe, 
  Compass, 
  SlidersHorizontal 
} from 'lucide-react';
import { specialInterests } from '../data/business';

const iconMap = {
  Heart: Heart,
  Users: Users,
  UsersRound: UsersRound,
  Mountain: Mountain,
  Gem: Gem,
  Sparkles: Sparkles,
  Palmtree: Palmtree,
  Globe: Globe,
  Compass: Compass,
  SlidersHorizontal: SlidersHorizontal
};

export default function TravelThemes({ onSelectTheme }) {
  return (
    <section id="themes" className="py-8 bg-white border-b border-slate-100 shadow-sm relative z-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center justify-between min-w-[980px] gap-2 lg:gap-4">
            {specialInterests.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Globe;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectTheme && onSelectTheme(item.name)}
                  className="flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl hover:bg-amber-50/70 border border-transparent hover:border-amber-200/60 transition-all duration-300 group cursor-pointer text-center w-[92px] sm:w-[104px]"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 group-hover:bg-amber-500/10 text-slate-600 group-hover:text-amber-600 flex items-center justify-center mb-2 transition-all duration-300 shadow-xs border border-slate-100 group-hover:border-amber-300/40">
                    <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-700 group-hover:text-amber-900 leading-tight transition-colors">
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
