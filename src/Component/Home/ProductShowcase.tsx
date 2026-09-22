import React, { useState, useEffect } from 'react';
import {
  Sun,
  Layers,
  ShieldCheck,
  Activity,
  Zap,

  ArrowRight,
  PhoneCall,
  CheckCircle2,
  PackageCheck,
  BadgeCheck,
} from 'lucide-react';

interface ProductItem {
  id: string;
  icon: React.ElementType;
  label: string;
  highlight: string;
  subtitle: string;
  bullets: string[];
  image: string;
  oemTag: string;
}

const productBanners: ProductItem[] = [
  {
    id: "adani-solar-complete-range",
    icon: Sun,
    label: "Adani Solar Complete Product Range",
    highlight: "Complete Rooftop Solution",
    subtitle: "A complete solar product collection with PV modules, inverter, battery backup, distribution boxes, DC cables, connectors, and mounting hardware for a coordinated rooftop installation.",
    bullets: ["Panels, inverter, battery storage, monitoring, and protection equipment", "Mounting rails, clamps, connectors, and solar cables in one solution"],
    image: "/generated/product-sets/adani_solar_complete_set.png",
    oemTag: "Complete Solar Range"
  },
  {
    id: "adani-solar-residential-range",
    icon: Layers,
    label: "Adani Solar Residential Energy Set",
    highlight: "Residential Solar Package",
    subtitle: "A residential-ready solar system view featuring photovoltaic panels, hybrid inverter, battery storage, protection panels, cables, and rooftop mounting components.",
    bullets: ["Designed to present the full residential solar ecosystem", "Clean product grouping for rooftop project enquiries and quotations"],
    image: "/generated/product-sets/adani_solar_residential_set.png",
    oemTag: "Residential Solar Set"
  },
  {
    id: "adani-solar-commercial-range",
    icon: Activity,
    label: "Adani Solar Commercial Product Set",
    highlight: "Commercial Solar BOS",
    subtitle: "A professional solar equipment collection with photovoltaic modules, inverter, storage, monitoring gateway, combiner panels, cables, and structural mounting accessories.",
    bullets: ["Commercial-scale solar components presented in one clear product view", "Includes electrical protection, monitoring, cabling, and mounting hardware"],
    image: "/generated/product-sets/adani_solar_commercial_set.png",
    oemTag: "Commercial Solar Set"
  },
  {
    id: "polycab-home-wiring-range",
    icon: Zap,
    label: "Polycab Home Wiring Product Range",
    highlight: "Wiring & Modular Accessories",
    subtitle: "A complete home-electrical product collection featuring colour-coded house wires, cable reel, modular switches, MCB panel, LED lighting, conduits, and installation accessories.",
    bullets: ["House wires, switches, sockets, lighting, conduits, and junction boxes", "A clear one-image view for residential electrical requirements"],
    image: "/generated/product-sets/polycab_home_wiring_set.png",
    oemTag: "Home Electrical Range"
  },
  {
    id: "polycab-electrical-solutions-range",
    icon: ShieldCheck,
    label: "Polycab Electrical Solutions Set",
    highlight: "Complete Electrical Solutions",
    subtitle: "A broad electrical product display with cable coils, distribution protection, modular accessories, LED lighting, conduit systems, and a contemporary ceiling fan.",
    bullets: ["Cables, switchgear, lighting, fan, wiring accessories, and power outlets", "Ideal for home, shop, and project electrical supply enquiries"],
    image: "/generated/product-sets/polycab_electrical_solutions_set.png",
    oemTag: "Electrical Solutions"
  },

];

interface ProductShowcaseProps {
  onOpenContact?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenContact }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change product every 5 seconds (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productBanners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const activeProduct = productBanners[activeIndex];
  const ActiveIcon = activeProduct.icon;

  return (
    <section 
      id="equipment" 
      className="py-14 lg:py-14 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Solar Products &amp; Equipment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Wholesale distributor supply of genuine tier-1 solar panels, on-grid inverters, smart net-meters, and electrical BOS components.
          </p>
        </div>

        {/* ================= MAIN 2-COLUMN SHOWCASE ================= */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: PRODUCT EXPLANATION & CALL TO ACTION */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-primary-orange text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-2xs">
                <ActiveIcon size={14} className="text-primary-orange" />
                <span>{activeProduct.highlight}</span>
              </div>

              {/* Product Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
                {activeProduct.label}
              </h3>

              {/* Product Detailed Explanation */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {activeProduct.subtitle}
              </p>

              {/* Key Technical Bullets */}
              <div className="space-y-2.5 mb-7 border-y border-slate-200/80 py-4">
                {activeProduct.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Call to Inquire & Quote Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919700705020"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg"
                >
                  <PhoneCall size={15} className="text-primary-orange animate-pulse" />
                  <span>Call For Inquiry: +91 97007 05020</span>
                </a>

                <button
                  onClick={onOpenContact ? onOpenContact : () => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-950 text-white  font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <span>Request Price Quote</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: ONLY CLEAN PRODUCT IMAGE */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              {/* Subtle Ambient Glow Backdrop */}
              <div className="absolute -inset-2 bg-linear-to-tr from-orange-300/20 via-amber-200/25 to-blue-400/20 rounded-3xl blur-xl -z-10 pointer-events-none" />

              <div className="relative w-full h-80 sm:h-92 lg:h-104 group flex items-center justify-center p-4 sm:p-6">
                
                {/* Clean Studio Product Image */}
                <img
                  key={activeProduct.id}
                  src={activeProduct.image}
                  alt={activeProduct.label}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-104"
                />

                {/* Top Right OEM Quality Stamp */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-200 shadow-xs z-10">
                  <BadgeCheck size={14} className="text-primary-orange" />
                  <span>{activeProduct.oemTag}</span>
                </div>

                {/* Bottom Left Ex-Stock Tag */}
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-white/15 shadow-sm z-10">
                  <PackageCheck size={13} className="text-primary-orange" />
                  <span>Ex-Stock Ready • Secunderabad Depot</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      

      </div>
    </section>
  );
};

export default ProductShowcase;
