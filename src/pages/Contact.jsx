import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { business } from '../data/business';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-ivory dark:bg-brand-charcoal px-6 lg:px-12 border-b border-brand-charcoal/5 dark:border-white/5 relative overflow-hidden">
      
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-gold/30 to-transparent"></div>

      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-8"
          >
            Start The Conversation
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-brand-charcoal dark:text-brand-ivory leading-tight mb-8"
          >
            Where will your next journey take you?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-brand-charcoal/60 dark:text-brand-ivory/60 font-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            Tell us about your travel plans and let's craft an itinerary perfectly suited to you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
          
          {/* WhatsApp / Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group flex flex-col items-center p-10 lg:p-12 bg-white dark:bg-[#1A1A1A] hover:bg-brand-charcoal hover:text-white transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-2xl border border-brand-charcoal/5 dark:border-white/5"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand-charcoal dark:text-brand-ivory border border-brand-charcoal/10 dark:border-white/10 group-hover:border-brand-gold group-hover:text-brand-gold mb-8 transition-colors duration-500">
              <MessageCircle className="w-6 h-6 stroke-[1.2]" />
            </div>
            <h3 className="font-heading text-3xl mb-4 text-brand-charcoal dark:text-brand-ivory group-hover:text-white transition-colors duration-500">Chat & Call</h3>
            <p className="text-brand-charcoal/60 dark:text-brand-ivory/60 group-hover:text-white/70 font-light text-sm mb-10 flex-grow transition-colors duration-500">
              Speak directly with our travel specialists or send us a quick message.
            </p>
            <div className="flex flex-col gap-3 w-full mt-auto">
              {/* Direct WhatsApp Chat with Pre-filled Note */}
              <a 
                href={`https://wa.me/${business.contact.whatsapp}?text=Hello Lavish Holidays, I would like to enquire about planning a trip.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-brand-charcoal group-hover:bg-brand-gold text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold transition-colors duration-500"
              >
                Chat on WhatsApp
              </a>
              <a 
                href={`tel:${business.contact.phone.replace(/\\s/g, '')}`}
                className="w-full py-3 border border-brand-charcoal/20 dark:border-white/20 group-hover:border-white/20 text-brand-charcoal dark:text-brand-ivory group-hover:text-white uppercase tracking-[0.2em] text-[10px] font-semibold transition-colors duration-500"
              >
                Call {business.contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="group flex flex-col items-center p-10 lg:p-12 bg-white dark:bg-[#1A1A1A] hover:bg-brand-charcoal hover:text-white transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-2xl border border-brand-charcoal/5 dark:border-white/5"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand-charcoal dark:text-brand-ivory border border-brand-charcoal/10 dark:border-white/10 group-hover:border-brand-gold group-hover:text-brand-gold mb-8 transition-colors duration-500">
              <Mail className="w-6 h-6 stroke-[1.2]" />
            </div>
            <h3 className="font-heading text-3xl mb-4 text-brand-charcoal dark:text-brand-ivory group-hover:text-white transition-colors duration-500">Email Us</h3>
            <p className="text-brand-charcoal/60 dark:text-brand-ivory/60 group-hover:text-white/70 font-light text-sm mb-10 flex-grow transition-colors duration-500">
              Send us your preferences and we'll craft an itinerary tailored for you.
            </p>
            <div className="flex flex-col gap-3 w-full mt-auto">
              <a 
                href={`mailto:${business.contact.email}`}
                className="w-full py-3 bg-brand-charcoal group-hover:bg-brand-gold text-white uppercase tracking-[0.2em] text-[10px] font-semibold transition-colors duration-500"
              >
                Open Mail App
              </a>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${business.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-brand-charcoal/20 dark:border-white/20 group-hover:border-white/20 text-brand-charcoal dark:text-brand-ivory group-hover:text-white uppercase tracking-[0.2em] text-[10px] font-semibold transition-colors duration-500"
              >
                Open in Gmail
              </a>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="group flex flex-col items-center p-10 lg:p-12 bg-white dark:bg-[#1A1A1A] hover:bg-brand-charcoal hover:text-white transition-colors duration-500 cursor-pointer shadow-sm hover:shadow-2xl border border-brand-charcoal/5 dark:border-white/5"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand-charcoal dark:text-brand-ivory border border-brand-charcoal/10 dark:border-white/10 group-hover:border-brand-gold group-hover:text-brand-gold mb-8 transition-colors duration-500">
              <MapPin className="w-6 h-6 stroke-[1.2]" />
            </div>
            <h3 className="font-heading text-3xl mb-4 text-brand-charcoal dark:text-brand-ivory group-hover:text-white transition-colors duration-500">Visit Us</h3>
            <p className="text-brand-charcoal/60 dark:text-brand-ivory/60 group-hover:text-white/70 font-light text-sm mb-10 flex-grow transition-colors duration-500 leading-relaxed max-w-[200px]">
              {business.contact.address}
            </p>
            <a 
              href={business.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-4 border border-brand-charcoal/20 dark:border-white/20 group-hover:border-white/20 text-brand-charcoal dark:text-brand-ivory group-hover:text-white uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold transition-colors duration-500"
            >
              Get Directions
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
