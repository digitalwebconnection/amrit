import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Herohm: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="home" 
      className="relative h-160 flex items-center pt-12 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Main Content (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wide text-blue-300 uppercase">
                Premium Solar Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white tracking-tight font-sans"
            >
              Complete Solar Supply <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                & EPC Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white mb-10 max-w-xl leading-relaxed font-light"
            >
              From premium solar modules to reliable inverters and complete BOS components, Amrit Electricals equips installers and businesses with dependable solar tech and professional EPC execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <button
                onClick={onOpenContact}
                className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="group w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center border border-white/10 backdrop-blur-sm"
              >
                <span>View Projects</span>
                <ChevronRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity ml-1" />
              </a>
            </motion.div>
          </div>

          {/* Floating Glass Cards (Right) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none hidden md:block"></div>

            <div className="relative flex flex-col gap-6 md:gap-8">

              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="md:ml-auto w-full max-w-sm bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 shadow-2xl relative hover:border-blue-500/50 transition-colors"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-5 border border-blue-500/30">
                  <Shield className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Trusted Equipment</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Premium Solar PV Modules from <span className="text-slate-200 font-medium">Adani Solar</span> and reliable inverters from <span className="text-slate-200 font-medium">Microtek</span>. Complete BOS components.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="md:mr-auto w-full max-w-sm bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 shadow-2xl relative lg:-left-12 hover:border-cyan-500/50 transition-colors"
              >
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-5 border border-cyan-500/30">
                  <Zap className="text-cyan-400 w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Professional Execution</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  End-to-end support for solar installers and EPC companies, ensuring seamless deployment and high-efficiency energy solutions.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Herohm;
