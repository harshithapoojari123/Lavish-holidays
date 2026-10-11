import Hero from '../components/Hero';
import TravelThemes from '../components/TravelThemes';
import PopularDestinations from '../components/PopularDestinations';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import CtaBanner from '../components/CtaBanner';
import Founder from './Founder';
import About from './About';
import Contact from './Contact';

export default function Home({ onOpenEnquiry, onSelectPackage }) {
  const handleThemeSelect = (themeName) => {
    onOpenEnquiry("Theme Click", "", `${themeName}`);
  };

  const handleDestinationSelect = (destName) => {
    onOpenEnquiry("Destination Card", destName, `${destName} Holiday`);
  };

  const handleSearch = ({ destination, dates, travellers }) => {
    onOpenEnquiry(
      "Hero Search Bar",
      destination,
      `${destination} Vacation (${travellers}, ${dates})`
    );
  };

  return (
    <div className="bg-white">
      {/* 1. Hero with Slider & Floating Search Bar */}
      <Hero 
        onOpenEnquiry={onOpenEnquiry}
        onSearch={handleSearch}
      />

      {/* 2. Special Interest Travel Themes Row (10 Categories) */}
      <TravelThemes 
        onSelectTheme={handleThemeSelect}
      />

      {/* 3. Popular Destinations (6 Cards Grid - No Prices) */}
      <PopularDestinations 
        onSelectDestination={handleDestinationSelect}
        onExploreAll={() => onOpenEnquiry("View All Destinations")}
      />

      {/* 4. Featured Holiday Packages (4 Cards with Badges & Specs - No Prices) */}
      <FeaturedPackages 
        onSelectPackage={onSelectPackage}
        onViewAll={() => onOpenEnquiry("View All Packages")}
      />

      {/* 5. Why Choose Lavish Holidays? (6 Key Features) */}
      <WhyChooseUs />

      {/* 6. Bottom Scenic CTA Banner ("Let's Plan Your Next Adventure") */}
      <CtaBanner 
        onOpenPlanner={() => onOpenEnquiry("Bottom CTA Banner")}
      />

      {/* 8. Founder & Vision (Bhuvana Morla) */}
      <Founder />

      {/* 9. Our Philosophy (About Us) */}
      <About />

      {/* 10. Direct Contact / WhatsApp / Office */}
      <Contact />
    </div>
  );
}
