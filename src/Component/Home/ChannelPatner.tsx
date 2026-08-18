import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, Sparkles } from 'lucide-react';
import adani from "../../assets/adani.png";
import polycab from "../../assets/polycab.png";
import secure from "../../assets/secure.png";

const partners = [
  {
    name: 'Adani Solar',
    img: adani,
    category: 'Tier-1 Solar PV Modules',
    badge: 'Direct OEM Partner'
  },
  {
    name: 'Polycab Solar',
    img: polycab,
    category: 'Cables & Inverter Systems',
    badge: 'Authorized Distributor'
  },
  {
    name: 'SECURE Meters',
    img: secure,
    category: 'Smart Net-Metering Tech',
    badge: 'DISCOM Certified'
  },
];

export const ChannelPatner: React.FC = () => {
  return (
    <section className="relative pt-8 lg:pt-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-y border-slate-200/80">
    
      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-12 lg:mb-14">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-700">
              Official Tier-1 Alliances // Certified Supply
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight mb-4"
          >
            Authorised <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-700 to-primary-orange">
              Channel Partners
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-900 text-sm sm:text-base max-w-6xl mx-auto font-normal leading-relaxed"
          >
            Direct OEM partnerships with India’s most trusted solar and electrical manufacturing leaders, guaranteeing authentic Grade-A components and maximum lifespan.
          </motion.p>
        </div>

        {/* ================= 3D GLASSMORPHIC PARTNER LOGO PODS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              className="group relative"
            >
              {/* Glowing card reflection aura on hover */}
              <div className="absolute -inset-1  blur-xl transition-opacity duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative h-44 sm:h-52  flex flex-col items-center justify-between">
               

                {/* Top Badge Tag */}
                <div className="w-full flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 group-hover:bg-primary-orange/10 text-slate-600 group-hover:text-primary-orange border border-slate-200/60 group-hover:border-primary-orange/30 transition-colors">
                    <CheckCircle2 size={11} className="text-primary-orange" />
                    {partner.badge}
                  </span>
                
                </div>

                {/* Centered Logo Image */}
                <div className="w-full flex-1 flex items-center justify-center py-2">
                  <img 
                    src={partner.img} 
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-16 sm:max-h-25 max-w-full object-fill filter group-hover:brightness-105 group-hover:scale-108 transition-all duration-500 drop-shadow-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const sibling = (e.target as HTMLImageElement).nextElementSibling;
                      if (sibling) {
                        (sibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback Text if image fails */}
                  <div className="hidden items-center justify-center text-center">
                    <span className="font-black text-lg text-slate-800 tracking-wider">
                      {partner.name}
                    </span>
                  </div>
                </div>

                {/* Bottom Category Subtitle */}
                <div className="w-full text-center">
                  <span className="text-xs font-semibold text-slate-900 group-hover:text-slate-900 transition-colors">
                    {partner.category}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      

      </div>
        {/* ================= BOTTOM TRUST STRIP ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-12 lg:mt-14 bg-linear-to-r from-slate-100 via-blue-50/50 to-slate-100 border-y border-slate-200/80 py-4 sm:py-4  shadow-xs overflow-hidden "
        >
          <div className='max-w-7xl mx-auto '>
          {/* Top Moving Specular Light Shimmer */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary-orange to-transparent shadow-[0_0_8px_rgba(241,130,35,0.8)]"
            />
          </div>

          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/30 to-transparent pointer-events-none" />

          {/* 4 Premium Trust Cards */}
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-slate-800 px-20">
            
            {/* Pillar 1 */}
            <div className="group flex items-center gap-3.5  transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <ShieldCheck size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-emerald-700 transition-colors">
                  100% Genuine OEM
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Direct Factory Sourced
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group flex items-center gap-3.5 transition-all duration-300 sm:border-l sm:border-slate-900/80 sm:pl-4">
              <div className="w-10 h-10 rounded-xl bg-primary-orange/10 border border-primary-orange/25 flex items-center justify-center text-primary-orange group-hover:scale-110 group-hover:bg-primary-orange group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <Award size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary-orange transition-colors">
                  Direct Dispatch
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Zero Middleman Markup
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group flex items-center gap-3.5  transition-all duration-300 lg:border-l lg:border-slate-900/80 lg:pl-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/25 flex items-center justify-center text-primary-blue group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary-blue transition-colors">
                  MNRE &amp; DISCOM Sync
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  100% Net-Metering Pass
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group flex items-center gap-3.5  transition-all duration-300 sm:border-l sm:border-slate-900/80 sm:pl-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0 shadow-xs">
                <Sparkles size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900 group-hover:text-amber-700 transition-colors">
                  Tier-1 Warranty
                </p>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  25-Year Linear Yield
                </p>
              </div>
            </div>

          </div>
          </div>
        </motion.div>
    </section>
  );
};

export default ChannelPatner;
