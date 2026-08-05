import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Polycab Solar', img: '/polycab.svg' },
  { name: 'Adani Solar', img: '/adani.svg' },
  { name: 'SECURE', img: '/secure.svg' },

];

export const ChannelPatner: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Authorised <span className="text-primary-blue">Channel Partners</span>
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-40 h-20 md:w-56 md:h-28 flex items-center justify-center  hover:opacity-100 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center group">
                <img 
                  src={partner.img} 
                  alt={partner.name}
                  className="max-w-[80%] max-h-[80%] object-contain relative z-10 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const sibling = (e.target as HTMLImageElement).nextElementSibling;
                    if (sibling) {
                      (sibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Premium Text Fallback if image fails to load */}
                <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4">
                  <span className="font-black text-base md:text-lg text-gray-800 tracking-wider text-center leading-tight">
                    {partner.name.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelPatner;
