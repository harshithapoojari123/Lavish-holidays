import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, MapPin, Calendar, Utensils, Hotel, ArrowRight, MessageCircle } from 'lucide-react';
import { business } from '../data/business';

export default function PackageModal({ pkg, isOpen, onClose, onEnquire }) {
  if (!isOpen || !pkg) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Hero Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
            <img 
              src={pkg.image} 
              alt={pkg.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {pkg.badge && (
              <span className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide shadow-md ${pkg.badgeColor || 'bg-amber-600 text-white'}`}>
                {pkg.badge}
              </span>
            )}

            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300 font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{pkg.destination || pkg.name}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-normal">
                {pkg.name}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Quick Specs Badges */}
            <div className="flex flex-wrap gap-2.5">
              {pkg.duration && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{pkg.duration}</span>
                </div>
              )}
              {pkg.mealPlan && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  <Utensils className="w-3.5 h-3.5 text-amber-600" />
                  <span>{pkg.mealPlan}</span>
                </div>
              )}
              {pkg.hotelCategory && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                  <Hotel className="w-3.5 h-3.5 text-amber-600" />
                  <span>{pkg.hotelCategory}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {pkg.tagline || pkg.description}
            </p>

            {/* Highlights */}
            {pkg.highlights && pkg.highlights.length > 0 && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 mb-3">
                  Trip Inclusions & Curated Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customization Notice */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-amber-900 text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold block mb-0.5">✨ Tailor-made for you</span>
              All our travel packages can be customized to your preferred dates, flights, hotel upgrades, and dietary requests. Contact our travel specialists for a bespoke quote.
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Pricing Structure</span>
              <span className="text-sm font-semibold text-slate-800">Customized Quotes on Request</span>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(pkg.name, pkg.destination || pkg.name);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-amber-600/20"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href={`https://wa.me/${business.contact.whatsapp}?text=Hello Lavish Holidays, I would like to enquire about the ${encodeURIComponent(pkg.name)} package.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer flex items-center justify-center"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
