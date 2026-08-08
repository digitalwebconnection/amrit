import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 w-full relative"
          >
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 bg-primary-blue/20 blur-[60px] rounded-full translate-x-4 translate-y-4 -z-10"></div>
            
            {/* Image Container */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-white group border-4 border-white">
              <img
                src="/shiva-sir.webp"
                alt="Amritpal Singh - Leadership"
                className="w-full h-162.5 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Name Plate */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-12 h-1 bg-[#F18223] mb-4 rounded-full"></div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 font-serif tracking-tight">AMRITPAL SINGH</h3>
                <p className="text-blue-300 font-semibold tracking-widest uppercase text-sm">Founder & CEO</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 hidden md:block transform transition-transform hover:scale-105 duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#203A96]">
                  <Award size={28} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">20+ Years</div>
                  <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-7/12 relative"
          >
            {/* Watermark Quote */}
            <div className="absolute -top-16 -left-12 text-[180px] text-[#203A96]/5 font-serif font-black leading-none select-none pointer-events-none hidden md:block">
              "
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#F18223] animate-pulse"></span>
              <span className="text-slate-700 font-bold uppercase tracking-widest text-xs">Our Leadership</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 font-medium leading-[1.1] mb-4 relative z-10">
              "Our mission is to bring light, power, and safety to every home and business we touch. Quality is not just a standard for us; <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F18223] to-red-500 font-black italic">it's a promise</span>."
            </h3>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed relative z-10">
              <p>
                With over two decades of experience in the electrical and solar industry, Amritpal Singh has built Amrit Electricals on the pillars of trust, innovation, and unparalleled customer service.
              </p>
              <p>
                Under his visionary leadership, the company has grown from a small local firm to a leading regional provider, consistently setting new benchmarks for quality and reliability in electrical EPC and solar integrations.
              </p>
            </div>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 relative z-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#203A96] group-hover:text-white text-[#203A96]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Uncompromising Safety</h4>
                  <p className="text-sm text-slate-500">Adhering to the highest industry standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#F18223] group-hover:text-white text-[#F18223]">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Innovation First</h4>
                  <p className="text-sm text-slate-500">Leading the transition to renewable energy.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
