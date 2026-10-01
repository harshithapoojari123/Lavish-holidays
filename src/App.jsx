import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-body bg-brand-ivory dark:bg-brand-charcoal text-brand-charcoal dark:text-brand-ivory transition-colors duration-500">
      <Navbar />
      
      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
