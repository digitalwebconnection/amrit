import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-24 right-5 sm:right-7 z-40"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll smoothly to top"
            className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-slate-900/90 hover:bg-slate-950 backdrop-blur-md flex items-center justify-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_35px_rgba(241,130,35,0.45)] border border-white/20 hover:border-primary-orange/60 transition-all duration-300 cursor-pointer"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              {/* Background Track */}
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="2.5"
              />
              {/* Animated Progress Ring */}
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="#F18223"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.15s ease-out' }}
              />
            </svg>

            {/* Glowing Arrow Icon */}
            <ArrowUp
              size={18}
              className="text-white group-hover:text-primary-orange group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

