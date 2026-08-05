import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Herohm: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-primary-blue to-blue-900">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-orange blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left text-white mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <ShieldCheck size={18} className="text-primary-orange" />
            <span className="text-sm font-medium tracking-wide">Trusted Electrical & Solar Experts</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
          >
            Powering Your <br className="hidden md:block" />
            <span className="text-primary-orange">Future</span> Today
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Amrit Electricals delivers premium solar and electrical installations. Experience reliability, innovation, and dedicated support for your home or business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button 
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 bg-primary-orange hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              Get a Free Quote <ArrowRight size={20} />
            </button>
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-xl transition-all flex items-center justify-center transform hover:-translate-y-1 border border-white/10"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Hero Image/Graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          {/* We use a visually appealing placeholder here since we don't have the exact images. 
              The generate_image tool can be used later or user can swap it out. */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl border-4 border-white/10 group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Solar Panel Installation"
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute bottom-6 left-6 right-6 z-20">
               <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50">
                 <div className="flex items-center gap-4">
                   <div className="bg-primary-blue text-white w-12 h-12 flex items-center justify-center rounded-lg font-bold text-xl">
                     10+
                   </div>
                   <div>
                     <p className="font-bold text-gray-800 text-sm">Years of Experience</p>
                     <p className="text-xs text-gray-500">Delivering excellence</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Herohm;
