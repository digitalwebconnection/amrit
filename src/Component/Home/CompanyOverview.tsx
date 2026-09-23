import React, { useState, useEffect } from "react";
import { Shield, TrendingUp, Award, Building, ArrowRight } from "lucide-react";

const BRAND = {
  primaryBlue: "#203A96",
  deepBlue: "#12225E",
  primaryOrange: "#F18223",
};

const highlights = [
  {
    icon: Shield,
    title: "Adani & Polycab Partner",
    description: "Authorized distributor of Tier-1 PV modules and high-yield solar inverters.",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: Building,
    title: "1-Box Solar KIT (1-25 kW)",
    description: "Turnkey pre-engineered packages ready for immediate rooftop installation.",
    iconColor: BRAND.primaryBlue,
  },
  {
    icon: Award,
    title: "Trained In-House Engineers",
    description: "Certified engineering team supporting installers with sizing, SLD, and design.",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: TrendingUp,
    title: "DISCOM Net-Metering",
    description: "Utility-approved DLMS Class 0.5S net-meters and precision CTs.",
    iconColor: BRAND.primaryBlue,
  },
];

interface CompanyOverviewProps {
  onOpenContact?: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onOpenContact }) => {
  // Index of the card currently flipped automatically (-1 when none)
  const [activeFlippedIndex, setActiveFlippedIndex] = useState<number>(0);
  const [userHoveredIndex, setUserHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // If the user is currently hovering over any card, pause the auto rotation
    if (userHoveredIndex !== null) return;

    const interval = setInterval(() => {
      setActiveFlippedIndex((prev) => (prev + 1) % highlights.length);
    }, 2500); // changes card every 2.5 seconds

    return () => clearInterval(interval);
  }, [userHoveredIndex]);
  return (
    <section
      className="py-12 lg:py-14 bg-white border-b border-slate-200"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Brand alignment header badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4  text-lg font-bold uppercase tracking-wider  text-[#203A96] ">
            <span className="w-2 h-2 rounded-full bg-primary-orange" />
            Sustainable, Reliable &amp; Affordable Energy
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl  font-extrabold text-center text-slate-900 mb-4 tracking-tight">
          One Stop Solution for All <br />
          <span className="text-[#203A96]">Solar Rooftop Projects</span>
        </h2>

        <p className="text-center text-sm md:text-base text-slate-700 max-w-6xl mx-auto mb-12 leading-relaxed">
          Authorized distributor for Adani Solar, Polycab, Secure, and L&amp;T, delivering end-to-end solar equipment and turnkey rooftop solutions.
        </p>

        {/* Highlights grid with auto sequential 180-degree flip + manual hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, index) => {
            const Icon = h.icon;
            // A card is flipped if it's the currently auto-selected card OR if the user is hovering it
            const isFlipped = userHoveredIndex !== null ? userHoveredIndex === index : activeFlippedIndex === index;

            return (
              <div
                key={h.title}
                className="group perspective-1000 h-64 cursor-pointer"
                onMouseEnter={() => setUserHoveredIndex(index)}
                onMouseLeave={() => setUserHoveredIndex(null)}
                onClick={() => setActiveFlippedIndex(index)}
              >
                {/* 3D Flipping Card Container */}
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT FACE: Big Icon & Clean Title */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-slate-50 rounded-xl p-6 border-2 border-blue-900/40 hover:border-blue-900 shadow-md flex flex-col items-center justify-center text-center transition-all">
                    <div className="w-24 h-24  flex items-center justify-center mb-4  transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-25 h-25" style={{ color: h.iconColor }} aria-hidden />
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 line-clamp-2 px-1">
                      {h.title}
                    </h3>
                    <span className="mt-3 text-[11px] font-semibold text-primary-orange uppercase tracking-wider flex items-center gap-1">
                      Hover to explore &rarr;
                    </span>
                  </div>

                  {/* BACK FACE: 180° Turned Content */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#12225E] text-white rounded-xl p-6 border-2 border-primary-orange shadow-xl flex flex-col items-center justify-center text-center">
                    <div className=" flex items-center justify-center mb-3">
                      <Icon className="w-15 h-15 text-primary-orange" aria-hidden />
                    </div>
                    <h3 className="text-base font-serif font-bold text-white mb-2">
                      {h.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenContact ? onOpenContact : () => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#203A96] hover:bg-[#12225E] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-colors cursor-pointer"
          >
            <span>Get A Free Turnkey Solar Estimate</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;