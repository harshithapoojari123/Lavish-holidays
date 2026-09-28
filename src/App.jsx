import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
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
