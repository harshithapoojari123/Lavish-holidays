import { motion } from 'framer-motion';
import { business } from '../data/business';

export default function Hero() {
  const scrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      
      {/* Video Background with Poster Fallback */}
      <div className="absolute inset-0 z-0 bg-brand-charcoal">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1540202404-b711e4583152?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* PLACEHOLDER: Place your actual video in public/videos/luxury-travel.mp4 */}
          <source src="/videos/luxury-travel.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays: Vignette + subtle dark wash */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 vignette pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 max-w-[1440px] mx-auto flex flex-col justify-center h-full text-center md:text-left pt-20">
        
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-brand-gold uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm font-semibold mb-6"
          >
            {business.name}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-[110px] text-white font-heading font-medium leading-[1.1] tracking-tight mb-16 drop-shadow-2xl text-balance"
          >
            {business.slogan}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
          >
            <a 
              href="#services"
              onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
              className="w-full sm:w-auto px-10 py-5 bg-brand-gold text-white hover:bg-white hover:text-brand-charcoal transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-bold shadow-2xl text-center"
            >
              Start Your Journey
            </a>
            
            <a 
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-bold text-center backdrop-blur-sm"
            >
              Discover More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 mb-4">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
        >
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-white/80"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
