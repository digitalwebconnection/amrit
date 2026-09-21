import React from "react";
import { Award, Clock, Users, Wrench } from "lucide-react";

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: <Award size={22} />,
      title: "One-Stop Solar Solution",
      description:
        "All rooftop components under one roof – Adani panels, Polycab inverters, ACDB/DCDB, cables, and DLMS net-meters.",
    },
    {
      icon: <Wrench size={22} />,
      title: "1-Box Ready Solar KITs",
      description:
        "Pre-engineered 1 kW to 25 kW kits that eliminate multi-vendor sourcing and enable fast turnkey installation.",
    },
    {
      icon: <Users size={22} />,
      title: "In-House Solar Engineers",
      description:
        "Certified in-house engineering team supporting installers and system integrators with design, SLD, and commissioning.",
    },
    {
      icon: <Clock size={22} />,
      title: "25-Year Linear Warranty",
      description:
        "Direct OEM backed performance warranties on Adani Solar panels and world-class Polycab string/hybrid inverters.",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Solar Team Image */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
              <img
                src="/images/solar_team.png"
                alt="Amrit Electricals Solar Engineering Team"
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-84 lg:h-105 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right Column: Clean Content & 4 Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                The Amrit Electricals Advantage
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We don't just provide equipment; we build lasting partnerships. Here is why homeowners, contractors, and businesses trust us for their critical energy needs.
              </p>
            </div>

            {/* 4 Clean Standard WordPress Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-primary-orange hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-md bg-orange-50 text-primary-orange border border-orange-100 flex items-center justify-center mb-3">
                    {reason.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
