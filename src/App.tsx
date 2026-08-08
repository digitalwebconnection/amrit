import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ContactPopup from './Component/ContactPopup';
import WhatsAppWidget from './Component/WhatsAppWidget';
import Preloader from './Component/Preloader';
import { AnimatePresence } from 'framer-motion';
import SEO from './Component/SEO';

// Dynamic imports for code splitting
const HomeMain = lazy(() => import('./Component/Home/HomeMain'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fallbackTimer: ReturnType<typeof setTimeout>;
    let minTimer: ReturnType<typeof setTimeout>;
    let loaded = false;
    let minTimeElapsed = false;

    const finishLoading = () => {
      if (loaded && minTimeElapsed) {
        setIsLoading(false);
      }
    };

    const handleLoad = () => {
      loaded = true;
      finishLoading();
    };

    // Ensure preloader shows for at least 1.5s so the animation is visible
    minTimer = setTimeout(() => {
      minTimeElapsed = true;
      finishLoading();
    }, 1000);

    // Maximum fallback of 8s in case an asset hangs forever
    fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(minTimer);
      clearTimeout(fallbackTimer);
    };
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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-12 h-12 border-4 border-[#203A96] border-t-[#F18223] rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/" element={<HomeMain onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WhatsAppWidget />
    </div>
    </>
  );
}

export default App;
