import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export const CallToAction: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d46337]/5 blur-[200px] pointer-events-none rounded-full transform translate-x-1/3"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-primary-blue/5 blur-[200px] pointer-events-none rounded-full transform -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Power Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d46337] to-[#e88b63]">Future?</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Whether it's a large-scale commercial solar integration or industrial electrical EPC, our certified experts are ready to deliver seamless execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 bg-[#d46337] hover:bg-[#b0522d] text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,99,55,0.4)] hover:shadow-[0_0_30px_rgba(212,99,55,0.6)] hover:-translate-y-1"
            >
              REQUEST A QUOTE <ArrowRight size={18} />
            </button>
            <a 
              href="tel:+919876543210"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <Phone size={18} /> CALL US DIRECTLY
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
