import { business } from '../data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-24 lg:pt-32 pb-8 px-6 lg:px-12 relative overflow-hidden flex flex-col">
      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="bg-white/5 p-4 rounded-sm border border-white/10 mb-8 inline-block">
              <img 
                src={business.logo} 
                alt={business.name}
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <p className="text-white/60 text-base md:text-lg font-light tracking-wide max-w-sm mb-10 leading-relaxed">
              Crafting premium, personalized journeys for the discerning traveler.
            </p>
            <a href="#contact" className="inline-block pb-2 border-b border-brand-gold text-brand-gold uppercase tracking-[0.2em] text-[10px] font-semibold hover:text-white hover:border-white transition-colors">
              Begin Your Journey
            </a>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-8">Navigation</h4>
            <div className="flex flex-col gap-5 text-sm font-light tracking-wider">
              {['Home', 'About', 'Services', 'Founder', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-brand-gold hover:translate-x-1 transition-transform duration-300 w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold mb-8">Get In Touch</h4>
            <div className="flex flex-col gap-8 text-sm font-light text-white/60">
              <div>
                <p className="text-white/80 mb-2 text-[10px] uppercase tracking-widest font-semibold">Email</p>
                <a href={`mailto:${business.contact.email}`} className="hover:text-brand-gold transition-colors">{business.contact.email}</a>
              </div>
              <div>
                <p className="text-white/80 mb-2 text-[10px] uppercase tracking-widest font-semibold">Phone</p>
                <a href={`tel:${business.contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors block">{business.contact.phone}</a>
                <a href={`tel:${business.contact.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors block mt-1">{business.contact.phoneSecondary}</a>
              </div>
              <div>
                <p className="text-white/80 mb-2 text-[10px] uppercase tracking-widest font-semibold">Office</p>
                <p className="leading-relaxed max-w-[200px]">{business.contact.address}</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.3em] text-white/40 uppercase">
          <p>&copy; {currentYear} {business.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
