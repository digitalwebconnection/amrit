import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onOpenContact?: () => void;
}

interface HeroBannerItem {
  id: string;
  image: string;
  alt: string;
}

export const Herohm: React.FC<HeroProps> = () => {
  const banners: HeroBannerItem[] = [
    {
      id: "adani-panels",
      image: "/hero/products/panel_adani.webp",
      alt: "Adani Solar PV Panels Banner"
    },
    {
      id: "polycab-inverter",
      image: "/hero/products/inverter_polycab.webp",
      alt: "Polycab Grid-Tie Inverters Banner"
    },
    {
      id: "solar-kits",
      image: "/hero/products/solar_kit.webp",
      alt: "Turnkey Solar KITs Banner"
    },
    {
      id: "acdb-dcdb",
      image: "/hero/products/acdb_dcdb.webp",
      alt: "ACDB & DCDB Distribution Panels Banner"
    },
    {
      id: "dlms-meters",
      image: "/hero/products/dlms_meter.webp",
      alt: "DLMS Net-Meters Banner"
    },
    {
      id: "dc-cables",
      image: "/hero/products/dc_cables.webp",
      alt: "Polycab Solar DC Cables Banner"
    },
    {
      id: "citel-spd",
      image: "/hero/products/citel_spd.webp",
      alt: "CITEL Surge Protectors Banner"
    },
    {
      id: "chemical-earthing",
      image: "/hero/products/chemical_earthing.webp",
      alt: "Chemical Earthing & BOS Banner"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change banner every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, banners.length]);

  const prevBanner = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextBanner = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[55vh] sm:h-[68vh] md:h-[78vh] lg:h-[88vh] overflow-hidden bg-slate-950   group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ================= BANNER SLIDER IMAGES ================= */}
      <div className="absolute inset-0 w-full h-full">
        {banners.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading={idx === 0 ? "eager" : "lazy"}
              className="w-full h-full object-fill object-center"
            />
          </div>
        ))}
      </div>

      {/* ================= NAVIGATION ARROWS ================= */}
      <button
        onClick={prevBanner}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-primary-orange text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs border border-white/20 shadow-lg cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextBanner}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-primary-orange text-white flex items-center justify-center transition-all duration-300 backdrop-blur-xs border border-white/20 shadow-lg cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
      >
        <ChevronRight size={24} />
      </button>


    </section>
  );
};

export default Herohm;
