import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-9999 bg-gray-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background glowing effects */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-primary-blue/20 rounded-full blur-[100px] top-1/4 left-1/4"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-96 h-96 bg-primary-orange/20 rounded-full blur-[100px] bottom-1/4 right-1/4"
      />

      <div className="relative flex flex-col items-center z-10">
        {/* Animated logo/icon container */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="absolute inset-0 bg-linear-to-tr from-primary-blue to-primary-orange rounded-2xl opacity-10"
          ></motion.div>
          
          {/* Electrical lightning icon */}
          <svg className="w-12 h-12 text-primary-blue relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" 
            />
          </svg>

          {/* Outer rotating dashed ring */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full text-primary-orange opacity-60"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
          </motion.svg>
          
          {/* Inner rotating solid ring */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-primary-blue opacity-40"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="30 15" />
          </motion.svg>
        </div>

        {/* Text Reveal Animation */}
        <div className="overflow-hidden flex items-center gap-2">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-4xl font-black text-gray-900 font-serif tracking-tight"
          >
            Amrit
          </motion.h2>
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-4xl font-black text-primary-blue font-serif tracking-tight"
          >
            Electricals
          </motion.h2>
        </div>

        {/* Subtitle / Loader bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <p className="text-gray-500 font-medium uppercase tracking-[0.3em] text-xs">
            Powering the Future
          </p>
          
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-primary-orange to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
