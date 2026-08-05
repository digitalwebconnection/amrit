import React from 'react';
import { motion } from 'framer-motion';

export const ChannelPatner: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Our Authorized Channel Partner
          </h3>
        </div>
        
        <div className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/PrideEco.webp" 
              alt="Pride Eco Partner Logo" 
              className="h-24 md:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                // Fallback text if image missing
                (e.target as HTMLImageElement).style.display = 'none';
                if (e.target && (e.target as HTMLElement).parentElement) {
                  const div = document.createElement('div');
                  div.className = "text-3xl font-black text-gray-800 tracking-wider";
                  div.innerText = "PRIDE ECO";
                  (e.target as HTMLElement).parentElement!.appendChild(div);
                }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChannelPatner;
