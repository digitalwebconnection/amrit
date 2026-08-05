import React from 'react';
import { motion } from 'framer-motion';

export const Scrooling: React.FC = () => {
  const items = [
    "Solar Panel Installation",
    "•",
    "Commercial Wiring",
    "•",
    "Residential Electricals",
    "•",
    "Maintenance & Repairs",
    "•",
    "Energy Consultation",
    "•",
    "24/7 Support",
    "•",
    "Premium Quality",
    "•"
  ];

  return (
    <div className="bg-primary-orange py-4 overflow-hidden flex whitespace-nowrap relative z-20 shadow-inner">
      <motion.div
        className="flex space-x-8 items-center"
        animate={{ x: [0, -1035] }} // Adjust based on content width
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* We double the items to create a seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className={`text-lg font-bold ${item === '•' ? 'text-white/50' : 'text-white'} uppercase tracking-wider`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Scrooling;
