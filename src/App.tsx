import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ContactPopup from './Component/ContactPopup';
import WhatsAppWidget from './Component/WhatsAppWidget';
import Preloader from './Component/Preloader';
import { AnimatePresence } from 'framer-motion';
import HomeMain from './Component/Home/HomeMain';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import SEO from './Component/SEO';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className={`flex flex-col min-h-screen ${isLoading ? 'hidden' : 'block'}`}>
      <SEO />
      <Header onOpenContact={() => setIsContactOpen(true)} />
      
      <div className="grow">
        <Routes>
          <Route path="/" element={<HomeMain onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>

      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppWidget />
    </div>
    </>
  );
}

export default App;
