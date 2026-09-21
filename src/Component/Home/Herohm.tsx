import React, { useState, useEffect } from 'react';
import {
  Sun,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  Zap,
  Award,
  Wrench,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

interface HeroProductBanner {
  id: string;
  icon: React.ElementType;
  label: string;
  highlight: string;
  subtitle: string;
  image: string;
}

export const Herohm: React.FC<HeroProps> = ({ onOpenContact }) => {
  const productBanners: HeroProductBanner[] = [
    {
      id: "adani-panels",
      icon: Sun,
      label: "Adani Solar PV Panels",
      highlight: "Mono & TOPCon",
      subtitle: "Tier-1 high efficiency solar PV modules with 25-year linear performance warranty.",
      image: "/hero/products/panel_adani.jpg"
    },
    {
      id: "polycab-inverter",
      icon: Cpu,
      label: "Polycab Grid-Tie Inverters",
      highlight: "98.8% MPPT",
      subtitle: "High yield on-grid & hybrid solar inverters up to 350kW approved for PM KUSUM Yojna.",
      image: "/hero/products/inverter_polycab.jpg"
    },
    {
      id: "solar-kits",
      icon: Layers,
      label: "Turnkey Solar KITs (1-25 kW)",
      highlight: "1-Box Solution",
      subtitle: "Complete pre-engineered solar KITs with panels, inverter, ACDB/DCDB, and DC cables.",
      image: "/hero/products/solar_kit.jpg"
    },
    {
      id: "acdb-dcdb",
      icon: ShieldCheck,
      label: "ACDB & DCDB Panels",
      highlight: "Full Protection",
      subtitle: "IP65 weatherproof distribution boxes with Tier-1 SPDs, MCBs, and statutory protection.",
      image: "/hero/products/acdb_dcdb.jpg"
    },
    {
      id: "dlms-meters",
      icon: Activity,
      label: "DLMS Net-Meters & CTs",
      highlight: "DISCOM Approved",
      subtitle: "Class 0.5S DLMS compliant bi-directional energy meters and Ashmor CTs for grid sync.",
      image: "/hero/products/dlms_meter.jpg"
    },
    {
      id: "dc-cables",
      icon: Zap,
      label: "Polycab Solar DC Cables",
      highlight: "Flame Retardant",
      subtitle: "TUV certified electron-beam cross-linked solar DC cables and armored copper/aluminum cables.",
      image: "/hero/products/dc_cables.jpg"
    },
    {
      id: "citel-spd",
      icon: Award,
      label: "CITEL Surge Protectors",
      highlight: "Type 1+2 SPD",
      subtitle: "Heavy duty Type 1+2 surge arresters protecting solar inverters against lightning transients.",
      image: "/hero/products/citel_spd.jpg"
    },
    {
      id: "chemical-earthing",
      icon: Wrench,
      label: "Chemical Earthing & BOS",
      highlight: "25-Yr Reliability",
      subtitle: "Maintenance-free chemical earthing electrodes, copper lightning arresters & Faradel compound.",
      image: "/hero/products/chemical_earthing.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productBanners.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [productBanners.length]);

  const prevBanner = () => {
    setActiveIndex((prev) => (prev - 1 + productBanners.length) % productBanners.length);
  };

  const nextBanner = () => {
    setActiveIndex((prev) => (prev + 1) % productBanners.length);
  };

  const activeProduct = productBanners[activeIndex];

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] lg:min-h-[calc(100vh-80px)] flex flex-col justify-between pt-12 pb-8 lg:pt-16 lg:pb-10 overflow-hidden bg-slate-950 text-white selection:bg-primary-orange selection:text-white border-b border-slate-800"
    >
      {/* ================= BACKGROUND BANNER SLIDER (8 IMAGES) ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {productBanners.map((item, idx) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.label}
            className={`absolute inset-0 w-full h-full object-fill object-center transition-opacity duration-1000 ${
              idx === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Directional Vignette for Text Contrast (Protects left-side text while keeping right-side products visible) */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 " />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-black/30" />
      </div>

      {/* ================= MAIN CONTENT (HEADLINES & CTAs) ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 my-auto">
        <div className="max-w-3xl flex flex-col items-start">

          {/* Partner & Product Highlight Eyebrow Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              <span className="text- font-bold uppercase tracking-wider text-slate-200">
                <span className="text-primary-orange">Polycab &amp; Adani Solar</span> Partner
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-orange/20 border border-primary-orange/40 text-[16px] font-bold text-primary-orange backdrop-blur-xs">
              <CheckCircle2 size={13} className="text-primary-orange" />
              <span>{activeProduct.label} ({activeProduct.highlight})</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl f font-extrabold leading-tight mb-4 text-white tracking-tight drop-shadow-md">
            Residential &amp; Commercial <br />
            <span className="text-primary-orange">
              Complete Solar Solutions
            </span>
          </h1>

          {/* Dynamic Active Product Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 mb-6 max-w-xl leading-relaxed font-normal drop-shadow-xs">
            {activeProduct.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-lg hover:shadow-orange-500/20"
            >
              <span>Get A Free Quote</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="tel:+919700705020"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors border border-slate-700 shadow-md backdrop-blur-xs"
            >
              <PhoneCall size={15} className="text-primary-orange" />
              <span>+91 97007 05020</span>
            </a>

           
          </div>


        </div>
      </div>

      {/* ================= 8 PRODUCT SELECTOR TABS ACROSS BOTTOM ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-4">
        <div className="w-full bg-slate-950/85 p-2 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2">
            {productBanners.map((prod, idx) => {
              const Icon = prod.icon;
              const isActive = idx === activeIndex;

              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-2 rounded-xl flex flex-col items-center text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary-orange text-white shadow-md scale-102'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-1 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-primary-orange'
                  }`}>
                    <Icon size={14} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold leading-tight line-clamp-1">{prod.label}</span>
                  <span className={`text-[9px] font-medium mt-0.5 line-clamp-1 ${isActive ? 'text-amber-200' : 'text-slate-400'}`}>
                    {prod.highlight}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* WordPress Full-Screen Slider Navigation Arrows */}
      <button
        onClick={prevBanner}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-primary-orange text-white items-center justify-center transition-colors border border-white/20 backdrop-blur-xs cursor-pointer shadow-lg"
        aria-label="Previous Product Banner"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={nextBanner}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-primary-orange text-white items-center justify-center transition-colors border border-white/20 backdrop-blur-xs cursor-pointer shadow-lg"
        aria-label="Next Product Banner"
      >
        <ChevronRight size={22} />
      </button>
    </section>
  );
};

export default Herohm;
