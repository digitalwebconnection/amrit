import React from "react";
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
    description: "Authorized partner delivering Tier-1 PV modules and world-class on-grid solar inverters.",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: Building,
    title: "1-Box Solar KIT (1-25 kW)",
    description: "Complete turnkey box with all components ready for fast rooftop solar PV installation.",
    iconColor: BRAND.primaryBlue,
  },
  {
    icon: Award,
    title: "Trained In-House Engineers",
    description: "Dedicated team of certified engineers supporting solar installers and system integrators.",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: TrendingUp,
    title: "DISCOM Net-Metering",
    description: "Sanctioned net-metering & generation meters (Secure & L&T DLMS Class 0.5S) with CTs.",
    iconColor: BRAND.primaryBlue,
  },
];

interface CompanyOverviewProps {
  onOpenContact?: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onOpenContact }) => {
  return (
    <section
      className="py-12 lg:py-16 bg-white border-b border-slate-200"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Brand alignment header badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#203A96] border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-primary-orange" />
            Sustainable, Reliable &amp; Affordable Energy
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl  font-extrabold text-center text-slate-900 mb-4 tracking-tight">
          One Stop Solution for All <br />
          <span className="text-[#203A96]">Solar Rooftop Projects</span>
        </h2>

        <p className="text-center text-sm md:text-base text-slate-700 max-w-6xl mx-auto mb-12 leading-relaxed">
          Amrit Electricals is an Authorised channel partner for Polycab Inverters and Solar Panels, Adani Solar, Secure &amp; L&amp;T Energy Meters, Ashmor CTs, Polycab DC Cables &amp; MCBs, Citel SPDs, and Excel make earthing. We provide complete solar solutions tailored to your energy needs.
        </p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.title}
                className="bg-slate-50 rounded-xl p-6 border border-blue-900 hover:border-slate-300 shadow-lg shadow-black hover:shadow-lg hover:shadow-black transition-all text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    <Icon className="w-7 h-7" style={{ color: h.iconColor }} aria-hidden />
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  {h.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {h.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust ribbon */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#203A96]">
            Authorized Partner: Adani Solar &amp; Polycab
          </span>
          <span className="text-slate-400 text-sm hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-primary-orange">
            1-Box Ready Turnkey Solar KITs
          </span>
          <span className="text-slate-400 text-sm hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#12225E]">
            25-Year Linear Power Warranty
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenContact ? onOpenContact : () => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
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