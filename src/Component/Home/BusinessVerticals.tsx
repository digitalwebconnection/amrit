import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const services: ServiceItem[] = [
  {
    id: "solar-epc",
    num: "01",
    title: "Solar Rooftop EPC",
    category: "Residential & Commercial",
    description: "Turnkey rooftop and captive solar power plants engineered for maximum yield with statutory DISCOM net-metering sanctions.",
    image: "/images/services/solar_rooftop.jpg",
    tags: ["Up to 80% Savings", "25-Yr Performance"]
  },
  {
    id: "solar-kits",
    num: "02",
    title: "Turnkey Solar KITs",
    category: "1-Box Complete Solution",
    description: "Pre-engineered all-in-one solar packages with panels, inverter, distribution boxes, and cables ready for fast dispatch.",
    image: "/images/services/solar_kits.jpg",
    tags: ["1 kW – 25 kW Ready", "Zero Sourcing Delays"]
  },
  {
    id: "inverters",
    num: "03",
    title: "Polycab Solar Inverters",
    category: "Grid-Tie & Hybrid",
    description: "Authorized high-yield on-grid string inverters featuring 98.8% MPPT efficiency and built-in wireless SCADA cloud telemetry.",
    image: "/images/services/solar_inverters.jpg",
    tags: ["98.8% MPPT Yield", "PM KUSUM Approved"]
  },
  {
    id: "energy-meters",
    num: "04",
    title: "DLMS Net-Meters & CTs",
    category: "DISCOM Statutory Sync",
    description: "Class 0.5S bi-directional smart net-meters and precision current transformers for utility solar grid synchronization.",
    image: "/images/services/energy_meters.jpg",
    tags: ["Utility Pre-Approved", "Class 0.5S Accuracy"]
  },
  {
    id: "bos-protection",
    num: "05",
    title: "Balance of System (BOS)",
    category: "Electrical Protection",
    description: "Custom IP65 ACDB/DCDB protection boxes, TUV certified flame-retardant DC cables, and CITEL Type 1+2 surge arresters.",
    image: "/images/services/bos_protection.jpg",
    tags: ["IP65 Weatherproof", "CITEL Type 1+2 SPD"]
  },
  {
    id: "engineering-support",
    num: "06",
    title: "EPC Engineering Support",
    category: "Turnkey Technical Support",
    description: "In-house team of certified solar engineers providing system sizing, single-line diagrams (SLD), and testing verification.",
    image: "/images/services/solar_engineering.jpg",
    tags: ["SLD & System Sizing", "Dedicated Engineers"]
  }
];

interface BusinessVerticalsProps {
  onOpenContact?: () => void;
}

export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({ onOpenContact }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Slide one card forward or backward
  const slideOne = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 360; // card width + gap-6

    if (direction === 'next') {
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 30;
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    } else {
      const isAtStart = container.scrollLeft <= 30;
      if (isAtStart) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      }
    }
  };

  // Auto-slide one card every 3.8 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      slideOne('next');
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Track active index on scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, services.length - 1));
    }
  };

  // Scroll directly to a specific slide dot
  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 lg:py-20 bg-white border-b border-slate-200 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-primary-orange text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles size={13} className="text-primary-orange animate-pulse" />
              <span>End-to-End Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Our Business Verticals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tier-1 solar equipment distribution, pre-engineered turnkey packages, and dedicated EPC engineering.
            </p>
          </div>

          {/* Previous / Next Slide Buttons */}
          <div className="flex items-center gap-2 self-end shrink-0">
            <button
              onClick={() => slideOne('prev')}
              aria-label="Previous service"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-primary-orange hover:text-white hover:border-primary-orange text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => slideOne('next')}
              aria-label="Next service"
              className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-primary-orange hover:text-white hover:border-primary-orange text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ================= ONE-BY-ONE SLIDING CAROUSEL TRACK ================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-orange-500/10 hover:border-primary-orange/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Visual Graphic Image */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs border border-slate-200">
                    {service.category}
                  </div>

                  {/* Graphic Number Watermark */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-900/80 backdrop-blur-xs text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {service.num}
                  </div>
                </div>

                {/* Card Content (Reduced & Punchy) */}
                <div className="p-5 sm:p-6 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-orange transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    
                  </div>

                  {/* Sleek Action Button */}
                  <button
                    onClick={onOpenContact ? onOpenContact : () => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-primary-orange text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= PAGINATION SLIDE DOTS ================= */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-8 bg-primary-orange shadow-xs'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessVerticals;
