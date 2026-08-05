import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Sun, Leaf } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top pointer-events-none"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side (Solar Tech Dashboard Layout) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 lg:mt-0 h-[500px] sm:h-[600px] w-full"
          >
            {/* Glowing Sun Background Effect */}
            <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-yellow-400/30 rounded-full blur-[60px] sm:blur-[80px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 rounded-full blur-[60px] sm:blur-[80px] -z-10 pointer-events-none"></div>
            
            {/* Main Image Container */}
            <div className="absolute right-0 sm:right-4 top-4 sm:top-8 w-[90%] sm:w-[85%] h-[85%] sm:h-[90%] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl z-10 group border border-white/50">
              <img 
                src="/images/solar_team.png" 
                alt="Commercial Solar Installation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Energy Stat Card (Bottom Left) */}
            <div className="absolute left-0 bottom-8 sm:bottom-16 bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 z-20 w-56 sm:w-64">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">Clean Energy</p>
                  <p className="text-lg sm:text-xl font-black text-slate-900 leading-none mt-0.5">2.5+ MW</p>
                </div>
              </div>
              
              {/* Mini Tech Graph/Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>System Efficiency</span>
                  <span className="text-blue-600">98%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full relative">
                    <div className="absolute top-0 right-0 w-4 h-full bg-white/40 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Image/Badge (Top Right) */}
            <div className="absolute right-0 sm:-right-12 top-12 sm:top-16 w-36 sm:w-48 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-[4px] border-white z-20 group">
              <img 
                src="/images/electrical_tech.png" 
                alt="Solar Inverter Tech" 
                className="w-full h-28 sm:h-32 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-end p-3 sm:p-4">
                <div className="flex items-center gap-2 text-white">
                  <Sun size={14} className="text-yellow-400" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-wide uppercase">Smart Solar Tech</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col mt-16 lg:mt-0"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="w-12 h-[2px] bg-blue-600 rounded-full"></div>
              <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Amrit Electricals</h3>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-[1.15] font-sans tracking-tight">
              Illuminating Spaces, <br />
              <span className="text-blue-600">
                Empowering Lives
              </span>
            </h2>

            <p className="text-slate-600 mb-6 text-lg leading-relaxed font-light">
              We are committed to providing top-tier electrical and solar solutions. With a focus on safety, efficiency, and sustainability, we transform how you consume energy.
            </p>

            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">
              Our team of certified professionals brings years of expertise to every project, ensuring that whether it's a residential wiring job or a massive commercial solar installation, the quality remains uncompromised.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-full text-blue-600 shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Certified Experts</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Dedicated professionals ensuring high-quality execution.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white shadow-sm border border-slate-100 rounded-full text-green-600 shrink-0">
                  <Zap size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Advanced Tech</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">Cutting-edge solar technology for maximum efficiency.</p>
                </div>
              </div>
            </div>

            <div>
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 "></div>
                <span className="relative z-10">Read Our Full Story</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
