import { useState, useEffect, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ContactPopup from './Component/ContactPopup';
import WhatsAppWidget from './Component/WhatsAppWidget';
import Preloader from './Component/Preloader';
// import ScrollToTop from './Component/ScrollToTop';
import ScrollProgressBar from './Component/Common/ScrollProgressBar';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from './Component/SEO';

// Dynamic imports for code splitting
const HomeMain = lazy(() => import('./Component/Home/HomeMain'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

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

    // Keep preloader brisk and visible without frustrating the user
    minTimer = setTimeout(() => {
      minTimeElapsed = true;
      finishLoading();
    }, 650);

    // Maximum fallback of 1.2s to guarantee fast interactivity
    fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

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
      <ScrollProgressBar />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col min-h-screen ${isLoading ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        <SEO />
        <Header onOpenContact={() => setIsContactOpen(true)} />
        
        <div className="grow">
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center bg-slate-50"><div className="w-10 h-10 border-4 border-[#203A96] border-t-[#F18223] rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<HomeMain onOpenContact={() => setIsContactOpen(true)} />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <Footer onOpenContact={() => setIsContactOpen(true)} />
        <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <WhatsAppWidget />
        {/* <ScrollToTop /> */}
      </motion.div>
    </>
  );
}

export default App;

