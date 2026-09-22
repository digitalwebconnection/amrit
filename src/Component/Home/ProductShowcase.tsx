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
    id: "adani-panels",
    icon: Sun,
    label: "Adani Solar PV Panels",
    highlight: "Mono PERC & TOPCon",
    subtitle: "Tier-1 high efficiency solar PV modules engineered for maximum yield, featuring 25-year linear performance warranty for residential and commercial MW installations.",
    bullets: ["550Wp – 580Wp N-Type TOPCon & Bifacial modules", "Direct factory wholesale pallet supply with flash test reports"],
    image: "/images/products/solar_panel_mono.jpg",
    oemTag: "Adani Solar Direct OEM"
  },
  {
    id: "polycab-inverter",
    icon: Cpu,
    label: "Polycab Grid-Tie Inverters",
    highlight: "98.8% MPPT Efficiency",
    subtitle: "Next-generation single-phase & 3-phase grid-tied string inverters up to 350kW approved for PM KUSUM and state utility DISCOM grid connection.",
    bullets: ["Quad MPPT tracking with built-in Wi-Fi & remote cloud SCADA", "IP65 weatherproof enclosure with smart active heat dissipation"],
    image: "/images/products/solar_inverter_unit.jpg",
    oemTag: "Polycab Authorized Master"
  },
  {
    id: "solar-kits",
    icon: Layers,
    label: "Turnkey Solar KITs (1-25 kW)",
    highlight: "1-Box Complete Solution",
    subtitle: "All-in-one pre-engineered solar rooftop packages with modules, inverter, ACDB/DCDB, mounting structure, and cables ready for same-day dispatch.",
    bullets: ["Eliminates multi-vendor procurement delays & mismatches", "Includes certified SLD design, structure drawings & user guide"],
    image: "/images/products/solar_turnkey_kit.jpg",
    oemTag: "Complete BOS In A Box"
  },
  {
    id: "acdb-dcdb",
    icon: ShieldCheck,
    label: "ACDB & DCDB Distribution Panels",
    highlight: "IP65 Weatherproof BOS",
    subtitle: "Custom-engineered electrical distribution boxes with Type 1+2 surge arresters, high-breaking MCBs, and UV-stabilized polycarbonate enclosures.",
    bullets: ["CITEL surge arresters with dual line protection", "Hensel / Fibox IP65 certified UV-proof industrial enclosures"],
    image: "/images/products/solar_acdb_dcdb.jpg",
    oemTag: "In-House Quality Tested"
  },
  {
    id: "dlms-meters",
    icon: Activity,
    label: "DLMS Net-Meters & CTs",
    highlight: "DISCOM Approved Class 0.5S",
    subtitle: "Bi-directional smart energy meters (Secure & L&T) and Ashmor current transformers for fast DISCOM solar grid synchronization and net-billing.",
    bullets: ["DLMS compliant optical port communication for utility audits", "Pre-tested and pre-approved for statutory state utility sync"],
    image: "/images/products/solar_dlms_meter.jpg",
    oemTag: "DISCOM Statutory Approved"
  },
  {
    id: "dc-cables",
    icon: Zap,
    label: "Polycab Solar DC Cables",
    highlight: "Electron-Beam Cross-Linked",
    subtitle: "TUV certified electron-beam cross-linked solar DC cables and armored copper/aluminum cables resistant to UV radiation, ozone, and extreme weather.",
    bullets: ["4 sq.mm & 6 sq.mm red & black twin-core with pure copper", "1500V DC rated flame-retardant XLPO insulation"],
    image: "/images/products/solar_dc_cables.jpg",
    oemTag: "TUV Rhineland Certified"
  },
  {
    id: "citel-spd",
    icon: Award,
    label: "CITEL Surge Protectors",
    highlight: "Heavy Duty Type 1+2 SPD",
    subtitle: "World-class European surge arresters engineered to safeguard solar inverters, PV arrays, and substation electronics against lightning voltage transients.",
    bullets: ["Replaceable plug-in cartridge modules for easy maintenance", "Visual operational status windows & remote signaling contacts"],
    image: "/images/products/solar_spd_arrester.jpg",
    oemTag: "French Engineering Standard"
  },
  {
    id: "chemical-earthing",
    icon: Wrench,
    label: "Chemical Earthing & Lightning BOS",
    highlight: "Maintenance-Free 25-Yr Life",
    subtitle: "Pure copper-bonded chemical earthing electrodes and Faradel backfill compound ensuring low soil resistivity below 1 Ohm for statutory electrical safety.",
    bullets: ["UL & IEEE-80 compliant low-impedance grounding system", "Includes copper lightning arrester & complete rooftop kit"],
    image: "/images/products/solar_chemical_earthing.jpg",
    oemTag: "IEEE-80 & UL Verified"
  }
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
    }, 5000);

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
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-500/25"
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
