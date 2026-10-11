import { business, popularDestinations } from '../data/business';

export default function Footer({ onOpenEnquiry }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 lg:pt-24 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              {business.logo && (
                <img 
                  src={business.logo} 
                  alt={business.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                />
              )}
              <div>
                <h3 className="font-heading font-semibold text-2xl text-white uppercase tracking-wider">
                  {business.name}
                </h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-medium">
                  {business.tagline || 'Travel • Explore • Live More'}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Crafting premium, bespoke travel journeys, luxury beach villas, grand European tours, and tailor-made family holidays for discerning travelers.
            </p>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry("Footer")}
              className="inline-flex items-center gap-2 pb-1.5 border-b border-amber-500 text-amber-400 uppercase tracking-[0.2em] text-xs font-semibold hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <span>Plan Your Next Journey</span>
              <span>→</span>
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs tracking-[0.25em] uppercase text-amber-400 font-semibold mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-light text-slate-400">
              <a href="#home" className="hover:text-amber-400 transition-colors w-fit">Home</a>
              <a href="#destinations" className="hover:text-amber-400 transition-colors w-fit">Destinations</a>
              <a href="#packages" className="hover:text-amber-400 transition-colors w-fit">Holiday Packages</a>
              <a href="#themes" className="hover:text-amber-400 transition-colors w-fit">Special Interest</a>
              <a href="#about" className="hover:text-amber-400 transition-colors w-fit">About Us</a>
              <a href="#founder" className="hover:text-amber-400 transition-colors w-fit">Leadership</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors w-fit">Contact Us</a>
            </div>
          </div>

          {/* Top Destinations */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase text-amber-400 font-semibold mb-6">
              Popular Escapes
            </h4>
            <div className="flex flex-col gap-3.5 text-sm font-light text-slate-400">
              {popularDestinations.map(d => (
                <a 
                  key={d.id} 
                  href="#destinations" 
                  className="hover:text-amber-400 transition-colors w-fit flex items-center gap-1.5"
                >
                  <span className="text-amber-500 text-xs">›</span>
                  <span>{d.name} Holidays</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.25em] uppercase text-amber-400 font-semibold mb-6">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-5 text-sm font-light text-slate-400">
              <div>
                <p className="text-slate-200 text-xs uppercase tracking-wider font-semibold mb-1">Direct Phone</p>
                <a href={`tel:${business.contact.phone.replace(/\s/g, '')}`} className="hover:text-amber-400 transition-colors block text-slate-300">
                  {business.contact.phone}
                </a>
                <a href={`tel:${business.contact.phoneSecondary.replace(/\s/g, '')}`} className="hover:text-amber-400 transition-colors block text-slate-300 mt-0.5">
                  {business.contact.phoneSecondary}
                </a>
              </div>
              <div>
                <p className="text-slate-200 text-xs uppercase tracking-wider font-semibold mb-1">Email Desk</p>
                <a href={`mailto:${business.contact.email}`} className="hover:text-amber-400 transition-colors text-slate-300">
                  {business.contact.email}
                </a>
              </div>
              <div>
                <p className="text-slate-200 text-xs uppercase tracking-wider font-semibold mb-1">Vizag Office</p>
                <p className="leading-relaxed text-xs text-slate-400">
                  {business.contact.address}
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-slate-500">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p className="text-slate-400 flex items-center gap-1.5">
            <span>Built by</span>
            <a 
              href="https://codexa-agency.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold tracking-wider hover:underline transition-colors cursor-pointer"
            >
              Codexa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
