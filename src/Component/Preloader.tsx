import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('Initializing Solar EPC Engine...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatusText('Ready to Power Ahead');
          return 100;
        }

        const next = Math.min(prev + Math.floor(Math.random() * 15) + 9, 100);

        if (next < 40) {
          setStatusText('Initializing Engineering Blueprint...');
        } else if (next < 75) {
          setStatusText('Calibrating Solar Grid Telemetry...');
        } else if (next < 95) {
          setStatusText('Synchronizing Tier-1 OEM Assets...');
        } else {
          setStatusText('System Fully Charged & Ready');
        }

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        opacity: 1,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-99999  flex flex-col items-center justify-center overflow-hidden selection:bg-primary-orange selection:text-white"
    >
      {/* Background Soft Solar Ambient Glows (Light Theme) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-137.5 h-137.5 bg-linear-to-br from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-[130px] top-[-10%] right-[-5%] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.55, 0.3],
          x: [0, -20, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute w-137.5 h-137.5 bg-linear-to-tl from-blue-600/15 via-sky-400/10 to-transparent rounded-full blur-[130px] bottom-[-10%] left-[-5%] pointer-events-none"
      />

      {/* Subtle Engineering Grid Matrix Pattern */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="white-preloader-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(32, 58, 150, 0.08)" strokeWidth="0.75" />
              <circle cx="24" cy="24" r="1.25" fill="rgba(241, 130, 35, 0.35)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#white-preloader-grid)" />
        </svg>
      </div>

      {/* Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-primary-orange/60 via-50% to-transparent pointer-events-none shadow-[0_0_12px_rgba(241,130,35,0.4)]" />
      <div className="absolute bottom-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-primary-blue/60 via-50% to-transparent pointer-events-none" />

      {/* Central Content Pod */}
      <div className="relative flex flex-col items-center z-10 px-6 max-w-md w-full text-center">
        
        {/* Animated Emblem / Rotating Solar Compass */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-6">
          
          {/* Outer Pulsing Glow Aura */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-3xl bg-linear-to-tr from-primary-orange/20 via-amber-400/20 to-primary-blue/20 blur-xl pointer-events-none"
          />

          {/* Clean White Embossed Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.35 }}
            className="relative w-24 h-24 flex items-center justify-center backdrop-blur-md overflow-hidden"
          >
            {/* Specular Light Streak across the icon box */}
            <motion.div
              animate={{ x: ['-150%', '250%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/80 to-transparent transform -skew-x-20 pointer-events-none"
            />

            {/* Official Logo or Electric Sun Icon */}
            {logo ? (
              <img src={logo} alt="Amrit Electricals" className="w-16 h-16 object-contain relative z-10" />
            ) : (
              <svg
                className="w-12 h-12 text-primary-orange relative z-10 filter drop-shadow-[0_0_10px_rgba(241,130,35,0.5)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                />
              </svg>
            )}
          </motion.div>

          {/* Outer Rotating Dashed Solar Ring */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full text-primary-orange/60"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          </motion.svg>

          {/* Inner Rotating Reverse Ring */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] text-primary-blue/50"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="18 12" />
          </motion.svg>
        </div>

        {/* Brand Typography (Clean Crisp Slate/Navy & Solar Orange) */}
        <div className="overflow-hidden flex items-center justify-center gap-2.5 mb-2">
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-black font-serif text-slate-900 tracking-tight"
          >
            Amrit
          </motion.h2>
          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-black font-serif text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange tracking-tight drop-shadow-sm"
          >
            Electricals
          </motion.h2>
        </div>

        {/* Subtitle Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-slate-600 font-bold uppercase tracking-[0.18em] text-[10px] sm:text-[11px] mb-6 shadow-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
          <span>Tier-1 Solar EPC // Grade-A Licensed</span>
        </motion.div>

        {/* Progress Bar & Numeric Counter */}
        <div className="w-full max-w-70 flex flex-col items-center gap-2.5">
          
          {/* Progress Track */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/90 shadow-inner relative">
            <motion.div
              className="h-full bg-linear-to-r from-primary-blue via-amber-400 to-primary-orange rounded-full shadow-[0_0_12px_rgba(241,130,35,0.7)]"
              style={{ width: `${progress}%`, transition: 'width 0.15s ease-out' }}
            />
          </div>

          {/* Percentage & Dynamic Status Subtext */}
          <div className="flex items-center justify-between w-full text-xs font-mono px-1">
            <span className="text-slate-500 font-medium text-[11px] truncate max-w-50 text-left">
              {statusText}
            </span>
            <span className="font-bold text-primary-orange font-mono text-[13px]">
              {progress}%
            </span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;


