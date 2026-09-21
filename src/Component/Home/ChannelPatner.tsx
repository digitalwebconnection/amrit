import React from 'react';
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
    <section id="partners" className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Official Tier-1 Alliances // Certified Supply
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight mb-4">
            Authorised <br />
            <span className="text-[#203A96]">
              Channel Partners
            </span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base max-w-3xl mx-auto font-normal leading-relaxed">
            Authorised channel partner for Polycab Inverters &amp; Solar Panels, Adani Solar, Secure Meters, L&amp;T (Schneider), Ashmor CTs, Polycab DC Cables, Citel SPDs, and Excel earthing.
          </p>
        </div>

        {/* PARTNER LOGO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-between h-48 sm:h-52 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="w-full flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                  <CheckCircle2 size={11} className="text-primary-orange" />
                  {partner.badge}
                </span>
              </div>

              <div className="w-full flex-1 flex items-center justify-center py-2">
                <img 
                  src={partner.img} 
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 sm:max-h-20 max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const sibling = (e.target as HTMLImageElement).nextElementSibling;
                    if (sibling) {
                      (sibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden items-center justify-center text-center">
                  <span className="font-bold text-lg text-slate-800 tracking-wider">
                    {partner.name}
                  </span>
                </div>
              </div>

              <div className="w-full text-center">
                <span className="text-xs font-semibold text-slate-800">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TRUST STRIP */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl py-5 px-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-800">
            
            {/* Pillar 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  100% Genuine OEM
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Direct Factory Sourced
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-primary-orange shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  Direct Dispatch
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Zero Middleman Markup
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3 lg:border-l lg:border-slate-200 lg:pl-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-primary-blue shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  MNRE &amp; DISCOM Sync
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  100% Net-Metering Pass
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-slate-900">
                  Tier-1 Warranty
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
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
