import { useState, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import ContactPopup from './Component/ContactPopup';
import WhatsAppWidget from './Component/WhatsAppWidget';
// import ScrollToTop from './Component/ScrollToTop';
import ScrollProgressBar from './Component/Common/ScrollProgressBar';
import ErrorBoundary from './Component/ErrorBoundary';
import SEO from './Component/SEO';

// Dynamic imports for code splitting
const HomeMain = lazy(() => import('./Component/Home/HomeMain'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <ScrollProgressBar />
      
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Header onOpenContact={() => setIsContactOpen(true)} />
        
        <div className="grow">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#203A96] border-t-[#F18223] rounded-full animate-spin"></div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Loading Amrit Electricals...</span>
              </div>
            </div>
          }>
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
      </div>
    </ErrorBoundary>
  );
}

export default App;
