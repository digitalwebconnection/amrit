import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ContactPopup from './Component/ContactPopup';
import WhatsAppWidget from './Component/WhatsAppWidget';
import ScrollToTop from './Component/ScrollToTop';
import HomeMain from './Component/Home/HomeMain';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import SEO from './Component/SEO';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      <Header onOpenContact={() => setIsContactOpen(true)} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeMain onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>

      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppWidget />
      <ScrollToTop />
    </div>
  );
}

export default App;
