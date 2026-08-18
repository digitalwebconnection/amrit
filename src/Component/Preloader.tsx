import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Accelerate smoothly towards 100%
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 0.95,
        transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[99999] bg-[#070b19] flex flex-col items-center justify-center overflow-hidden selection:bg-primary-orange selection:text-white"
    >
      {/* Background glowing effects */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[500px] h-[500px] bg-primary-blue/30 rounded-full blur-[140px] top-1/4 left-1/4 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute w-[500px] h-[500px] bg-primary-orange/30 rounded-full blur-[140px] bottom-1/4 right-1/4 pointer-events-none"
      />

      {/* Subtle Circuit Matrix Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="preloader-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(241, 130, 35, 0.4)" strokeWidth="0.6" />
              <circle cx="20" cy="20" r="1" fill="#F18223" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#preloader-grid)" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center z-10 px-4">
        {/* Animated logo/icon container */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-7">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="absolute inset-0 bg-gradient-to-tr from-primary-blue/40 via-primary-orange/30 to-amber-400/20 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_0_35px_rgba(241,130,35,0.3)]"
          />

          {/* Electrical lightning icon */}
          <svg
            className="w-12 h-12 text-amber-400 relative z-10 filter drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            />
          </svg>

          {/* Outer rotating dashed ring */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full text-primary-orange opacity-70"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="10 6" />
          </motion.svg>

          {/* Inner rotating solid ring */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-blue-400 opacity-50"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="25 15" />
          </motion.svg>
        </div>

        {/* Text Reveal Animation */}
        <div className="overflow-hidden flex items-center gap-2 mb-3">
          <motion.h2
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight"
          >
            Amrit
          </motion.h2>
          <motion.h2
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-primary-orange to-amber-400 font-serif tracking-tight drop-shadow-[0_0_15px_rgba(241,130,35,0.5)]"
          >
            Electricals
          </motion.h2>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 font-medium uppercase tracking-[0.25em] text-[11px] mb-5">
          Powering The Future // Tier-1 Solar EPC
        </p>

        {/* Progress Bar & Numeric Counter */}
        <div className="w-56 flex flex-col items-center gap-2">
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-blue via-amber-400 to-primary-orange rounded-full shadow-[0_0_10px_rgba(241,130,35,0.8)]"
              style={{ width: `${progress}%`, transition: 'width 0.15s ease-out' }}
            />
          </div>

          {/* Smooth percentage counter */}
          <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 px-0.5">
            <span className="text-amber-400/80 font-bold uppercase tracking-wider text-[10px]">Loading Experience</span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;

