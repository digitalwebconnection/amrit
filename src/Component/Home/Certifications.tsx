import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { name: "ISO 9001:2015", desc: "Quality Management Systems" },
  { name: "ISO 45001:2018", desc: "Occupational Health & Safety" },
  { name: "A-Class Licensed", desc: "Electrical Contractor" },
  { name: "MNRE Approved", desc: "Solar Channel Partner" }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Certified for Excellence</h3>
            <p className="text-gray-400 text-sm">We strictly adhere to national safety standards and quality frameworks to deliver risk-free projects.</p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {certificates.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#181818] border border-white/5 rounded-xl p-6 text-center flex flex-col items-center justify-center hover:bg-[#222] transition-colors"
              >
                <div className="w-12 h-12 mb-3 bg-[#d46337]/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#d46337]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{cert.name}</h4>
                <p className="text-gray-500 text-xs">{cert.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
