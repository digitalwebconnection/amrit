import React from 'react';
import {
  ClipboardCheck,
  PenTool,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface OurProcessProps {
  onOpenContact?: () => void;
}

interface ProcessStep {
  id: number;
  stepNumber: string;
  stageName: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  keyPoints: string[];
  image: string;
}

const steps: ProcessStep[] = [
  {
    id: 0,
    stepNumber: "01",
    stageName: "PHASE 01 • FEASIBILITY & DESIGN",
    icon: ClipboardCheck,
    title: "Site Assessment & Sizing",
    subtitle: "Rooftop Survey & Consumption Audit",
    description: "On-site structural evaluation, shadow analysis, and consumption auditing to determine optimal solar capacity.",
    deliverable: "Custom 3D PVsyst Simulation & Generation Forecast",
    keyPoints: [
      "Rooftop structural & shadow analysis",
      "Consumption audit & system sizing",
      "Net-metering feasibility report"
    ],
    image: "/images/process_1.webp"
  },
  {
    id: 1,
    stepNumber: "02",
    stageName: "PHASE 02 • PROCUREMENT & DISPATCH",
    icon: PenTool,
    title: "Solar KIT & BOS Procurement",
    subtitle: "Tier-1 Adani & Polycab Supply",
    description: "Factory wholesale dispatch of Adani modules, Polycab inverters, pre-wired ACDB/DCDB, and DC cables in a 1-Box KIT.",
    deliverable: "Complete Turnkey Solar Package & DISCOM Filing",
    keyPoints: [
      "Direct OEM wholesale pallet dispatch",
      "Factory flash test & warranty reports",
      "Pre-wired IP65 distribution panels"
    ],
    image: "/images/process_2.webp"
  },
  {
    id: 2,
    stepNumber: "03",
    stageName: "PHASE 03 • ROOFTOP EXECUTION",
    icon: Wrench,
    title: "Installation & Safety Wiring",
    subtitle: "Surge Protection & Chemical Grounding",
    description: "Mechanical module mounting on anodized aluminum rails, string cabling, CITEL surge arresters, and chemical grounding.",
    deliverable: "Heavy-Duty Rooftop Installation & Safety Earthing Certificate",
    keyPoints: [
      "Anti-corrosive aluminium mounting rails",
      "CITEL Type 1+2 surge protection",
      "Low-impedance chemical grounding"
    ],
    image: "/images/process_3.webp"
  },
  {
    id: 3,
    stepNumber: "04",
    stageName: "PHASE 04 • GRID SYNCHRONIZATION",
    icon: ShieldCheck,
    title: "Net-Metering & Handover",
    subtitle: "DISCOM Sync & 25-Year Warranty",
    description: "Statutory utility inspection, DLMS bidirectional meter integration, grid synchronization, and 25-year warranty handover.",
    deliverable: "25-Yr Linear Warranty & Net-Metering Billing Activation",
    keyPoints: [
      "Class 0.5S DLMS smart net-meter sync",
      "Statutory DISCOM joint clearance",
      "25-year manufacturer warranty handover"
    ],
    image: "/images/process_4.webp"
  }
];

export const OurProcess: React.FC<OurProcessProps> = ({ onOpenContact }) => {
  return (
    <section id="process" className="py-16 lg:py-14 bg-white border-b border-slate-200 relative  ">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-primary-orange text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles size={13} className="text-primary-orange" />
            <span>Turnkey Execution Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Our 4-Stage Engineering Process
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A structured 4-step roadmap from site assessment and equipment supply to rooftop installation and DISCOM net-metering.
          </p>
        </div>

        {/* ================= STATIC PROCESS CARDS ================= */}
        <div className="space-y-8 lg:space-y-10">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="w-full bg-white rounded-xl border border-blue-500 shadow-xl shadow-slate-200/70 p-6 sm:p-8 lg:p-10 overflow-hidden relative"
              >
                {/* Top Accent Gradient Strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary-orange via-amber-400 to-primary-blue rounded-t-3xl" />

                {/* Big Watermark Step Number in Background */}
                <div className="absolute top-4 right-8 font-mono text-7xl sm:text-8xl font-black text-slate-100   pointer-events-none">
                  {step.stepNumber}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">

                  {/* LEFT SIDE: STEP CONTENT & BULLETS */}
                  <div className={`lg:col-span-7 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>

                    {/* Phase Header Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 border border-orange-200/80 text-primary-orange text-[11px] font-bold uppercase tracking-wider mb-3 w-fit shadow-2xs">
                      <Icon size={14} className="text-primary-orange" />
                      <span>{step.stageName}</span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5 leading-snug">
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm font-semibold text-primary-orange uppercase tracking-wide mb-3.5">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {/* 3 Key Checkpoints */}
                    <div className="space-y-2 mb-6 border-y border-slate-100 py-3.5">
                      {step.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                            <CheckCircle2 size={12} className="text-emerald-600" />
                          </div>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action & Deliverable Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3">


                      <button
                        onClick={onOpenContact ? onOpenContact : () => {
                          const el = document.getElementById('contact');
                          if (el) el.scrollIntoView();
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-primary-orange text-white text-xs font-bold uppercase tracking-wider rounded-lg cursor-pointer shadow-xs"
                      >
                        <span>Inquire Step</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>

                  {/* Supporting process image — alternates left and right on desktop */}
                  <div className={`lg:col-span-5 flex items-center justify-center relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative w-full h-64 sm:h-76 lg:h-90 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-lg shadow-black/40">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                      />

                      {/* Floating Step Number Stamp */}
                      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-sm border border-white/10">
                        STAGE {step.stepNumber}
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenContact ? onOpenContact : () => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView();
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer"
          >
            <span>Book Free Site Assessment &amp; System Sizing</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
