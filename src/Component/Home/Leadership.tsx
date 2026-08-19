import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Quote } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-14 lg:py-20 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden selection:bg-primary-orange selection:text-white">
      
     
      {/* 3. Ambient Glowing Background Plasma Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -right-28 w-150 h-150 bg-linear-to-bl from-primary-orange/20 via-amber-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-28 -left-28 w-150 h-150 bg-linear-to-tr from-primary-blue/20 via-sky-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />

      {/* 4. Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ================= LEFT SIDE: 3D EXECUTIVE IMAGE (5 COLS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 w-full relative"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-4 bg-linear-to-tr from-primary-orange/20 via-primary-blue/25 to-transparent rounded-3xl blur-2xl -z-10" />
            
            {/* Image Frame Container */}
            <div className="relative z-10 rounded-xl sm:rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.62)] bg-slate-900 group border border-slate-200/90">
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQFsJ3w9AGWI1w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641607147971?e=2147483647&v=beta&t=3zmBhoKl2K7T5Z8NV5Rnk5ZTiHY-XXDVZS4-BaYfG6k"
                alt="Amritpal Singh - Founder & CEO, Amrit Electricals"
                loading="lazy"
                decoding="async"
                className="w-full h-112.5 sm:h-130 object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-106 brightness-95 group-hover:brightness-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              
              {/* Cinematic Multi-stage Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-linear-to-tr from-primary-blue/20 via-transparent to-primary-orange/20 mix-blend-overlay pointer-events-none" />

              {/* Shimmer Light Reflection Sweep on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1800 ease-out pointer-events-none" />

              {/* Top Floating Visionary Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="px-3.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md border border-amber-400/30 flex items-center gap-1.5">
                  <Star size={12} fill="currentColor" />
                  <span>Founder &amp; CEO</span>
                </span>
                
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-md border border-white/20">
                  Grade-A EPC
                </span>
              </div>

              {/* Bottom Nameplate Plate */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <div className="w-12 h-1 bg-linear-to-r from-primary-orange to-amber-400 mb-3 rounded-full shadow-[0_0_10px_rgba(241,130,35,0.8)]" />
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 font-serif tracking-tight">
                  AMRITPAL SINGH
                </h3>
                <p className="text-amber-300 font-bold tracking-widest uppercase text-xs sm:text-sm">
                  Founder &amp; Managing Director
                </p>
              </div>
            </div>

            {/* Floating Glassmorphic Experience Badge */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.03 }}
              className="absolute -bottom-10 -right-6  sm:-bottom-10 sm:-right-8 bg-white/95 backdrop-blur-xl p-2 sm:p-2 rounded-xl shadow-xl z-30 border border-slate-200/90 hidden sm:block transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-primary-blue to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-mono text-slate-900 leading-tight">20+ Years</div>
                  <div className="text-primary-orange text-xs font-bold uppercase tracking-wider">of EPC Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE: VISION NARRATIVE (7 COLS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-7/12 relative"
          >
            {/* Watermark Quote Icon */}
            <div className="absolute -top-10 -left-6 text-[#203A96]/8 font-serif font-black leading-none select-none pointer-events-none hidden md:block">
              <Quote size={90} />
            </div>

            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
              </span>
              <span className="text-slate-700 font-bold uppercase tracking-widest text-xs">
                Executive Leadership // Vision &amp; Governance
              </span>
            </div>

            {/* Executive Quote Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-900 font-bold leading-tight mb-5 relative z-10">
              "Our vision is to supply the best solar products in terms of quality, price and performance. <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-orange via-orange-500 to-amber-500 font-black italic drop-shadow-[0_2px_10px_rgba(241,130,35,0.25)]">Reliable energy for every rooftop</span>."
            </h3>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed relative z-10 font-normal">
              <p>
                As an authorized partner of <strong className="text-slate-900">Adani Solar &amp; Polycab</strong>, Amrit Electricals provides comprehensive solar solutions and turnkey 1 kW to 25 kW Solar KITs to support solar installers and empower commercial and residential clients with sustainable energy.
              </p>
              <p>
                Backed by an in-house team of certified solar engineers, we spearhead the clean energy movement with 90+ MW of solar panels, 75+ MW inverters, and over 50,000+ energy meters deployed nationwide with 25-year performance warranties.
              </p>
            </div>

        

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
