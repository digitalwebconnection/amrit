import React from 'react';
import {
  Sun,
  Zap,
  Cpu,
  ShieldCheck,
  Wrench,
  BatteryCharging,
  ArrowRight,
  Check
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "solar-epc",
    icon: Sun,
    title: "Residential & Commercial Solar",
    subtitle: "Rooftop & Captive Solar Power",
    description: "Complete rooftop solar PV installations engineered to cut electricity bills by up to 80% with DISCOM net-metering and 25-year linear performance warranty.",
    features: [
      "Adani Mono-PERC & TOPCon Panels",
      "Cut Electricity Bills by Up to 80%",
      "DISCOM Net-Metering Sanctions"
    ],
  },
  {
    id: "solar-kits",
    icon: Zap,
    title: "Turnkey Solar KITs",
    subtitle: "1-Box Ready for Integrators",
    description: "Launched to support small and medium system integrators – no need to source from multiple vendors. Order 1 box containing all components ready for fast installation.",
    features: [
      "Off-Grid, On-Grid & Hybrid Combos",
      "All Hardware & Cables in 1 Box",
      "Plug-and-Play Quick Installation"
    ],
  },
  {
    id: "inverters",
    icon: Cpu,
    title: "Polycab Solar Inverters",
    subtitle: "Grid-Tie & Hybrid Conversion",
    description: "Authorized Polycab on-grid and string solar inverters engineered with world-class components for optimal MPPT yield, rugged durability, and cloud monitoring.",
    features: [
      "Single-Phase & 3-Phase On-Grid",
      "World-Class Reliable Components",
      "Real-Time Wireless IoT Telemetry"
    ],
  },
  {
    id: "energy-meters",
    icon: ShieldCheck,
    title: "Energy Meters & CTs",
    subtitle: "Net & Generation DLMS Meters",
    description: "3-Phase HT TOD Class 0.5S DLMS Energy Meters and Ashmor CTs for bidirectional solar net-metering and exact utility generation measurement.",
    features: [
      "Secure & L&T DLMS Energy Meters",
      "Ashmor Precision Current Transformers",
      "DISCOM Net-Metering Compliance"
    ],
  },
  {
    id: "bos-protection",
    icon: Wrench,
    title: "Balance of System (BOS)",
    subtitle: "Cables, Combiners & Protection",
    description: "High-grade ACDB/DCDB protection boxes, flame-retardant Polycab DC Cables, CITEL Type 1+2 surge protection devices (SPDs), and maintenance-free chemical earthing.",
    features: [
      "ACDB & DCDB Distribution Boxes",
      "CITEL Class 1+2 Surge Protectors",
      "Polycab Flame-Retardant DC Cables"
    ],
  },
  {
    id: "engineering-support",
    icon: BatteryCharging,
    title: "Installer & EPC Engineering Support",
    subtitle: "Turnkey Design & Technical Support",
    description: "In-house team of certified solar engineers to support solar installers, provide system sizing, single-line diagrams (SLD), and turnkey project commissioning.",
    features: [
      "In-House Dedicated Solar Engineers",
      "System Sizing & SLD Engineering",
      "Lifetime After-Sales Technical SLA"
    ],
  }
];

interface BusinessVerticalsProps {
  onOpenContact?: () => void;
}

export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Our Business Verticals
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            End-to-end solar solutions, certified equipment, and dedicated engineering support for residential, commercial, and industrial installations.
          </p>
        </div>

        {/* 6 Clean Standard WordPress Style Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-primary-orange transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon */}
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-primary-orange border border-orange-100 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-orange mb-3">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Simple Action Button */}
                <button
                  onClick={onOpenContact ? onOpenContact : () => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-primary-orange text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BusinessVerticals;
