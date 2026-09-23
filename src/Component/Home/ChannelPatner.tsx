import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Sparkles,
  BadgeCheck,
  Zap,
  FileCheck
} from 'lucide-react';
import adani from "../../assets/adani.webp";
import polycab from "../../assets/polycab.webp";
import secure from "../../assets/secure.webp";

interface PartnerInfo {
  name: string;
  img: string;
  image: string;
  category: string;
  badge: string;
  products: string;
  compliance: string;
  warranty: string;
  description: string;
}

const partners: PartnerInfo[] = [
  {
    name: 'Adani Solar',
    img: adani,
    image: '/images/products/solar_panel_mono.webp',
    category: 'Tier-1 Solar PV Modules',
    badge: 'Direct OEM Partner',
    products: '580Wp N-Type TOPCon Bifacial Panels',
    compliance: 'ALMM & BIS Approved',
    warranty: '25-Year Linear Yield',
    description: 'Direct factory pallet dispatch of Tier-1 Adani solar modules with manufacturer flash-test reports and 25-year linear yield warranty.'
  },
  {
    name: 'Polycab Solar',
    img: polycab,
    image: '/images/products/solar_inverter_unit.webp',
    category: 'Cables & Inverter Systems',
    badge: 'Authorized Distributor',
    products: 'Grid-Tie Inverters & DC Solar Cables',
    compliance: 'IEC 62109 / EN 50618 Certified',
    warranty: '10-Year Inverter Warranty',
    description: 'Heavy industrial IP66 string inverters and dual-insulated flame-retardant DC solar cables engineered for 1500V DC installations.'
  },
  {
    name: 'SECURE Meters',
    img: secure,
    image: '/images/products/solar_dlms_meter.webp',
    category: 'Smart Net-Metering Tech',
    badge: 'DISCOM Certified',
    products: 'Class 0.5S DLMS Bi-Directional Net-Meters',
    compliance: 'CEA & State DISCOM Validated',
    warranty: 'Official DISCOM Standard',
    description: 'Statutory utility-approved bidirectional smart net-meters with tamper-proof RF telemetry and seamless DISCOM synchronization.'
  },
];


export const ChannelPatner: React.FC = () => {
  const [activePartner, setActivePartner] = useState(0);

  // Auto-cycle active partner every 3.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartner((prev) => (prev + 1) % partners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const current = partners[activePartner];

  return (
    <section id="partners" className="py-14 lg:py-20 bg-white border-t-2 border-b-2 border-primary-orange relative overflow-hidden ">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary-orange mb-3.5 shadow-2xs">
            <Sparkles size={13} className="text-primary-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Direct OEM Alliances // 100% Certified Supply
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight mb-3">
            Authorised <span className="text-primary-blue">Channel Partners</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-6xl mx-auto leading-relaxed">
            Direct wholesale factory tie-ups with India's foremost Tier-1 solar manufacturers and statutory DISCOM equipment OEMs.
          </p>
        </div>

        {/* AUTO-CHANGING 3D GRAPHIC (LEFT) & PARTNER CARDS SHOWCASE (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* LEFT: SYNCHRONIZED AUTO-CHANGING PARTNER GRAPHIC */}
          <div className="lg:col-span-5 relative group flex flex-col">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary-orange/50 bg-slate-950 shadow-xl shadow-orange-500/15 h-88 sm:h-100 lg:h-full min-h-95 lg:min-h-110 flex flex-col justify-between transition-all duration-500">
              
              {/* Animated Crossfade Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePartner}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-black/30" />

                  {/* Top Floating Badge Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md">
                      <BadgeCheck size={16} className="text-primary-orange" />
                      <span>{current.name}</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-lg bg-primary-orange text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {current.badge}
                    </div>
                  </div>

                  

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Glowing Ambient Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary-orange/20 to-primary-blue/20 rounded-3xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* RIGHT: INTERACTIVE CARDS WITH AUTO-CHANGING BORDER */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
            {partners.map((partner, index) => {
              const isActive = activePartner === index;

              return (
                <div
                  key={index}
                  onClick={() => setActivePartner(index)}
                  className={`group relative rounded-lg p-5 sm:p-4 transition-all duration-300 cursor-pointer bg-white border ${
                    isActive
                      ? 'border-2 border-primary-orange shadow-xl shadow-orange-500/15 scale-[1.015]'
                      : 'border-blue-600 shadow-xs hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Gradient Stripe for Active Card */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-orange via-amber-400 to-primary-blue rounded-t-2xl" />
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Brand Logo Container */}
                    <div className="sm:col-span-4 flex items-center justify-center  rounded-xl bg-slate-50 border border-slate-200/80 group-hover:bg-white transition-colors h-24 sm:h-28">
                      <img
                        src={partner.img}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-26 max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const sibling = (e.target as HTMLImageElement).nextElementSibling;
                          if (sibling) {
                            (sibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                      <div className="hidden items-center justify-center text-center">
                        <span className="font-bold text-base text-slate-800 tracking-wider">
                          {partner.name}
                        </span>
                      </div>
                    </div>

                    {/* Partner Details */}
                    <div className="sm:col-span-8 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary-orange transition-colors">
                          {partner.name}
                        </span>

                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-primary-orange text-white'
                            : 'bg-orange-50 text-primary-orange border border-orange-200'
                        }`}>
                          <CheckCircle2 size={11} className={isActive ? 'text-white' : 'text-primary-orange'} />
                          {partner.badge}
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-primary-blue mb-2">
                        {partner.category}
                      </p>

                      <div className="space-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-2">
                          <Zap size={12} className="text-primary-orange shrink-0" />
                          <span className="font-medium text-slate-800">{partner.products}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileCheck size={12} className="text-emerald-600 shrink-0" />
                          <span>{partner.compliance} • {partner.warranty}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

    

        {/* BOTTOM TRUST STRIP WITH BRAND BORDER ACCENTS */}
        <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-2 border-primary-orange/50 rounded-lg py-6 px-6 sm:px-8 shadow-lg text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck size={22} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                  100% Genuine OEM
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  Direct Factory Sourced
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 sm:border-l sm:border-white/10 sm:pl-5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-400/40 flex items-center justify-center text-primary-orange shrink-0">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                  Direct Dispatch
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  Zero Middleman Markup
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 lg:border-l lg:border-white/10 lg:pl-5">
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                  MNRE &amp; DISCOM Sync
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  100% Net-Metering Pass
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5 sm:border-l sm:border-white/10 sm:pl-5">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                  Tier-1 Warranty
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  25-Year Linear Yield
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ChannelPatner;
