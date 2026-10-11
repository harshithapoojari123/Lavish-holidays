import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import EnquiryModal from './components/EnquiryModal';
import PackageModal from './components/PackageModal';

function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryDestination, setEnquiryDestination] = useState('');
  const [enquiryPackage, setEnquiryPackage] = useState('');

  const [packageModalOpen, setPackageModalOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(null);

  const handleOpenEnquiry = (source = '', destination = '', pkg = '') => {
    setEnquiryDestination(destination || '');
    setEnquiryPackage(pkg || '');
    setEnquiryOpen(true);
  };

  const handleOpenPackageModal = (pkg) => {
    setActivePackage(pkg);
    setPackageModalOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-body bg-white text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry("Navbar Button")} />
      
      {/* Main Home Sections */}
      <main className="flex-grow">
        <Home 
          onOpenEnquiry={handleOpenEnquiry}
          onSelectPackage={handleOpenPackageModal}
        />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry("Footer Link")} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Interactive Trip Planner & Enquiry Modal */}
      <EnquiryModal 
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        initialDestination={enquiryDestination}
        initialPackage={enquiryPackage}
      />

      {/* Package Detail Modal */}
      <PackageModal 
        isOpen={packageModalOpen}
        pkg={activePackage}
        onClose={() => setPackageModalOpen(false)}
        onEnquire={(pkgName, dest) => handleOpenEnquiry("Package Modal", dest, pkgName)}
      />
    </div>
  );
}

export default App;
