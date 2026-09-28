import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import WhyLavish from './WhyLavish';
import CinematicBreak from '../components/CinematicBreak';
import Founder from './Founder';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="bg-brand-ivory">
      <Hero />
      <About />
      <Services />
      <WhyLavish />
      <CinematicBreak />
      <Founder />
      <Contact />
    </div>
  );
}
