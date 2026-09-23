import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

interface WhyChooseSectionProps {
  onOpenContact?: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reasons = [
    {
      num: "01",
      title: "One-Stop Solar Solution",
      description: "Complete rooftop BOS supply under one roof – Tier-1 modules, inverters, and net-meters.",
      thumbnail: "/images/products/solar_acdb_dcdb.webp",
      previewImage: "/images/why_choose_advantage.webp",
      tag: "All-in-One Supply",
      badge: "Complete Solar Ecosystem"
    },
    {
      num: "02",
      title: "1-Box Ready Solar KITs",
      description: "Pre-engineered 1 kW to 25 kW rooftop packages eliminating multi-vendor procurement delays.",
      thumbnail: "/images/products/solar_turnkey_kit.webp",
      previewImage: "/images/products/solar_turnkey_kit.webp",
      tag: "Ready Dispatch",
      badge: "Pre-Engineered 1-Box"
    },
    {
      num: "03",
      title: "In-House Solar Engineers",
      description: "Certified in-house engineers supporting system sizing, SLD design, and utility sanctions.",
      thumbnail: "/images/services/solar_engineering.webp",
      previewImage: "/images/services/solar_engineering.webp",
      tag: "Certified Team",
      badge: "CAD & SLD Engineering"
    },
    {
      num: "04",
      title: "25-Year Linear Warranty",
      description: "Manufacturer-backed 25-year performance warranties on modules and inverters.",
      thumbnail: "/images/products/solar_panel_mono.webp",
      previewImage: "/images/products/solar_panel_mono.webp",
      tag: "Direct OEM Backed",
      badge: "Tier-1 25-Yr Warranty"
    }
  ];

  // Auto-change active item every 3.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reasons.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, reasons.length]);

  const activeReason = reasons[activeIdx];

  return (
    <section
      id="why-us"
      className="py-16 lg:py-14 bg-white border-b border-slate-500 relative overflow-hidden  "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ================= LEFT COLUMN: DYNAMIC 3D GRAPHIC DISPLAY ================= */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Background Aura */}
            <div className="absolute -inset-2 bg-linear-to-tr from-orange-400/20 via-amber-300/20 to-blue-500/20 rounded-3xl blur-xl -z-10 pointer-events-none" />

            <div className="relative rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-slate-200/60 p-2 sm:p-2.5 group">
              <div className="relative rounded-xl overflow-hidden h-80 sm:h-96 lg:h-112 bg-slate-100">

                {/* Crossfading Feature Graphics */}
                {reasons.map((reason, idx) => (
                  <img
                    key={reason.num}
                    src={reason.previewImage}
                    alt={reason.title}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${idx === activeIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-103 z-0 pointer-events-none'
                      }`}
                  />
                ))}

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent z-15 pointer-events-none" />

                {/* Top Floating Guarantee Badge with Active Badge Label */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md border border-slate-200 flex items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{activeReason.badge}</span>
                </div>

                {/* Bottom Floating Metric Graphic Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3.5 z-20">
                  <div className="w-11 h-11 rounded-lg bg-primary-orange/20 border border-primary-orange/40 flex items-center justify-center text-primary-orange shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                      1,200+ <span className="text-xs font-normal text-slate-300">Projects</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">
                      Delivered Across Telangana &amp; AP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: AUTO-CHANGING BORDER CARDS ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Section Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2  text-primary-blue text-lg font-bold uppercase tracking-wider mb-3 ">
                <Sparkles size={23} className="text-primary-orange animate-pulse" />
                <span>The Amrit Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Why Solar Integrators &amp; Clients Choose Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Direct authorized distributor pricing, pre-tested turnkey packages, and dedicated engineering support.
              </p>
            </div>

            {/* 4 Cards with Dynamic Auto-Changing Border & Glow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {reasons.map((reason, index) => {
                const isActive = index === activeIdx;

                return (
                  <div
                    key={reason.num}
                    onClick={() => setActiveIdx(index)}
                    className={`group relative p-2 rounded-xl transition-all duration-300 flex items-start gap-3.5 overflow-hidden cursor-pointer ${isActive
                        ? 'border-2 border-primary-orange shadow-lg shadow-black/50 bg-linear-to-br from-orange-50/70 via-white to-white scale-[1.02]'
                        : 'border border-blue-600 bg-white hover:border-slate-300 hover:shadow-xs'
                      }`}
                  >
                    {/* Top Animated Graphic Accent Line */}
                    <div
                      className={`absolute top-0 left-0 right-0 transition-all duration-300 ${isActive
                          ? 'h-1 bg-linear-to-r from-primary-orange to-amber-400'
                          : 'h-0.5 bg-transparent group-hover:bg-primary-orange/40'
                        }`}
                    />

                    {/* Left Graphic Image Thumbnail */}
                    <div
                      className={`relative w-16 h-16 sm:w-18 sm:h-21 overflow-hidden shrink-0 bg-slate-50 transition-all duration-300 shadow-2xs ${isActive
                          ? 'border-2 border-primary-orange ring-2 ring-primary-orange/30 scale-105'
                          : 'border border-slate-200 group-hover:border-slate-300'
                        }`}
                    >
                      <img
                        src={reason.thumbnail}
                        alt={reason.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className={`absolute top-1 left-1 px-1.5 py-0.5 rounded-md font-mono text-[9px] font-bold transition-colors ${isActive
                            ? 'bg-primary-orange text-white'
                            : 'bg-slate-900/80 backdrop-blur-2xs text-white'
                          }`}
                      >
                        {reason.num}
                      </div>
                    </div>

                    {/* Right Card Text */}
                    <div className="grow">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block mb-1 transition-colors ${isActive ? 'text-primary-orange' : 'text-slate-500'
                          }`}
                      >
                        {reason.tag}
                      </span>
                      <h3
                        className={`text-sm sm:text-base font-bold mb-1 leading-snug transition-colors ${isActive ? 'text-slate-900' : 'text-slate-800 group-hover:text-primary-orange'
                          }`}
                      >
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {reason.description}
                      </p>
                    </div>

                    {/* Active Bottom Pulsing Progress Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-orange animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
