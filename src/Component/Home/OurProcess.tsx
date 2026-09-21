import React from 'react';
import {
  ClipboardCheck,
  PenTool,
  Wrench,
  ShieldCheck
} from 'lucide-react';

interface ProcessStep {
  id: number;
  stepNumber: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  image: string;
}

const steps: ProcessStep[] = [
  {
    id: 0,
    stepNumber: "01",
    icon: ClipboardCheck,
    title: "Site Assessment & Sizing",
    subtitle: "Rooftop Survey & Bill Analysis",
    description: "Our in-house engineers conduct thorough rooftop surveys, shadow assessments, and electricity bill audits to calculate optimal system capacity and max bill savings.",
    deliverable: "Custom System Design & Generation Forecast",
    image: "/images/process_1.png"
  },
  {
    id: 1,
    stepNumber: "02",
    icon: PenTool,
    title: "Solar KIT & BOS Procurement",
    subtitle: "Authorized Adani & Polycab Supply",
    description: "Sourcing Tier-1 Adani Solar panels, Polycab string inverters, pre-engineered ACDB/DCDB, and Polycab DC cables assembled into turnkey 1-Box Solar KITs.",
    deliverable: "Complete Turnkey Solar Package & DISCOM Filing",
    image: "/images/process_2.png"
  },
  {
    id: 2,
    stepNumber: "03",
    icon: Wrench,
    title: "Installation & Safety Wiring",
    subtitle: "Surge Protection & Chemical Earthing",
    description: "Professional mechanical module mounting, string layout wiring, CITEL SPD integration, and maintenance-free chemical earthing for comprehensive safety.",
    deliverable: "Heavy-Duty Rooftop Installation & Safety Earthing",
    image: "/images/process_3.png"
  },
  {
    id: 3,
    stepNumber: "04",
    icon: ShieldCheck,
    title: "Net-Metering & Handover",
    subtitle: "DISCOM Sync & 25-Year Warranty",
    description: "Installation of DLMS Class 0.5S bidirectional net meters, final DISCOM inspection, solar generation synchronization, and 25-year performance warranty activation.",
    deliverable: "25-Yr Linear Warranty & Net-Metering Activation",
    image: "/images/process_4.png"
  }
];

export const OurProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            How It Works
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Our 4-Stage Engineering Process
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial site assessment and 3D shadow analysis to certified equipment procurement, rooftop installation, and DISCOM net-metering synchronization.
          </p>
        </div>

        {/* 4 Clean WordPress Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-primary-orange transition-all flex flex-col justify-between group"
              >
                {/* Top Image with Step Number Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                    Step {step.stepNumber}
                  </div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-md bg-white/90 text-primary-orange flex items-center justify-center shadow-xs">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary-orange uppercase tracking-wide mb-2.5">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverable Footer */}
                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-bold text-slate-700">Deliverable:</span> {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
