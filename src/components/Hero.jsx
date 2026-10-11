import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Luggage 
} from 'lucide-react';
import { heroSlides, popularDestinations } from '../data/business';

export default function Hero({ onOpenEnquiry, onSearch }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchDestination, setSearchDestination] = useState('Maldives');
  const [searchDates, setSearchDates] = useState('Next Month');
  const [searchTravellers, setSearchTravellers] = useState('2 Adults');

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch({
        destination: searchDestination,
        dates: searchDates,
        travellers: searchTravellers
      });
    }
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <div id="home" className="relative min-h-[92vh] sm:min-h-[95vh] flex flex-col justify-between pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-slate-900">
      {/* Background Images Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle multi-layer gradient for great readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Left and Right Carousel Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer border border-white/10"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer border border-white/10"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Top Right Stamp / Badge (As in mockup) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:inline-flex flex-col items-center p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg text-center"
        >
          <span className="font-heading italic text-lg lg:text-xl text-amber-200 leading-none">
            Travel • Explore
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/90 font-semibold mt-1">
            Live More
          </span>
        </motion.div>
      </div>

      {/* Hero Headline Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 my-auto py-10">
        <div className="max-w-3xl">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-amber-300 drop-shadow-sm flex items-center gap-2">
              <span className="w-6 h-px bg-amber-300 inline-block" />
              {activeSlide.eyebrow}
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-normal text-white leading-[1.08] tracking-tight drop-shadow-md">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/90 font-light max-w-2xl leading-relaxed drop-shadow-xs">
              {activeSlide.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry("General Explore", searchDestination)}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-xl shadow-amber-600/30 hover:scale-102 cursor-pointer"
              >
                <span>Explore Holidays</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry("Custom Planning", searchDestination)}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-black/40 hover:bg-white text-white hover:text-slate-900 border border-white/40 font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all backdrop-blur-md cursor-pointer hover:border-white"
              >
                <Luggage className="w-4 h-4" />
                <span>Plan My Trip</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="relative z-10 flex justify-center items-center gap-2 mb-6 sm:mb-8">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* FLOATING SEARCH & FILTER BAR (Matches the Mockup) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-20 -mb-8 sm:-mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-3 items-center"
        >
          {/* Destination Selector */}
          <div className="md:col-span-4 flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-slate-100 md:border-none">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Select Destination
              </span>
              <select
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                className="w-full text-sm font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer truncate"
              >
                {popularDestinations.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name} ({d.category})
                  </option>
                ))}
                <option value="Europe Grand Tour">Europe Grand Tour</option>
                <option value="Kashmir & North India">Kashmir & Domestic</option>
                <option value="Custom Worldwide">Other / Custom</option>
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200" />

          {/* Travel Dates */}
          <div className="md:col-span-3 flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-slate-100 md:border-none">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Travel Dates
              </span>
              <select
                value={searchDates}
                onChange={(e) => setSearchDates(e.target.value)}
                className="w-full text-sm font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="This Month">This Month</option>
                <option value="Next Month">Next Month</option>
                <option value="Summer Season">Summer Holidays</option>
                <option value="Festive Season">Diwali & Year-End</option>
                <option value="Flexible Dates">Flexible Dates</option>
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200" />

          {/* Travellers */}
          <div className="md:col-span-2 flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-slate-100 md:border-none">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Travellers
              </span>
              <select
                value={searchTravellers}
                onChange={(e) => setSearchTravellers(e.target.value)}
                className="w-full text-sm font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">Family (3)</option>
                <option value="Family (4+ Guests)">Family (4+)</option>
                <option value="Group (6+ Guests)">Group (6+)</option>
              </select>
            </div>
          </div>

          {/* Search Button (Deep Navy Blue as in Mockup) */}
          <div className="md:col-span-2 md:pl-2">
            <button
              onClick={handleSearchClick}
              className="w-full py-3.5 px-5 rounded-2xl bg-[#0F294A] hover:bg-[#1E3A8A] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:scale-102 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Holidays</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
