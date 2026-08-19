import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  PenTool,
  Wrench,
  ShieldCheck,

  FileText
} from 'lucide-react';

interface ProcessStep {
  id: number;
  stepNumber: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  statusBadge: string;
  color: string;
  accentHex: string;
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
    statusBadge: "Phase 1: Feasibility & Sizing",
    color: "from-blue-600 to-indigo-600",
    accentHex: "#203A96",
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
    statusBadge: "Phase 2: OEM Kit Assembly",
    color: "from-amber-500 to-orange-500",
    accentHex: "#F18223",
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
    statusBadge: "Phase 3: EPC Execution",
    color: "from-orange-500 to-amber-600",
    accentHex: "#F18223",
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
    statusBadge: "Phase 4: Grid Sync & Yield",
    color: "from-emerald-500 to-teal-500",
    accentHex: "#10B981",
    image: "/images/process_4.png"
  }
];

export const OurProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Optional auto-cycle step timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="process" className="relative py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden selection:bg-primary-orange selection:text-white">



      {/* 4. Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-12 lg:mb-14">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-200/90 shadow-sm mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-700">
              Turnkey Execution Roadmap // ISO 9001:2015 EPC
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4"
          >
            A Proven, Streamlined <br className="" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange">
              4-Stage Engineering Process
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-900 text-sm sm:text-base md:text-lg max-w-6xl mx-auto font-normal leading-relaxed"
          >
            From drone terrain audits and 3D shadow analysis to Tier-1 module erection, CEA grid synchronization, and 25-year performance monitoring.
          </motion.p>
        </div>

        {/* ================= INTERACTIVE CONSOLE SHOWCASE ================= */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* ================= LEFT: 3D SHOWCASE DISPLAY (7 COLS) ================= */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative h-95 sm:h-115 lg:h-130 w-full rounded-xl sm:rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-slate-200/90 bg-slate-900 group">
              
              {/* Dynamic Image Crossfade Transition */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full object-cover absolute inset-0 filter brightness-95 group-hover:scale-104 transition-transform duration-1000"
                />
              </AnimatePresence>
              
              {/* Multi-stage Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-tr from-primary-blue/30 via-transparent to-primary-orange/20 mix-blend-overlay pointer-events-none" />

              {/* Shimmer Light Reflection Sweep on Hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1800 ease-out pointer-events-none" />

              {/* Top Status HUD Badges */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
                    {steps[activeStep].statusBadge}
                  </span>
                </div>

                <div className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-amber-300 text-xs font-mono font-bold">
                  {activeStep + 1} of 4
                </div>
              </div>

              {/* Bottom Glassmorphic Card on Image */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                <motion.div
                  key={`card-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="bg-slate-950/85 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-2xl text-white shadow-2xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-mono font-black text-primary-orange leading-none">
                        {steps[activeStep].stepNumber}
                      </span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white leading-tight font-serif">
                          {steps[activeStep].title}
                        </h4>
                        <p className="text-xs text-amber-300 font-medium">
                          {steps[activeStep].subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Deliverable Pill */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 font-medium">
                    <FileText size={13} className="text-primary-orange shrink-0" />
                    <span className="text-slate-400">Deliverable:</span>
                    <span className="text-white font-semibold">{steps[activeStep].deliverable}</span>
                  </div>

                  {/* Stage Progress Bar (Auto-advancing indicator) */}
                  <div className="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      key={`progress-${activeStep}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: isAutoPlaying ? 6 : 0, ease: "linear" }}
                      className="h-full bg-linear-to-r from-primary-orange via-amber-400 to-primary-blue rounded-full"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT: INTERACTIVE STEP CARDS (5 COLS) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 justify-between">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <div 
                  key={step.id} 
                  className={`group relative p-4 sm:p-4.5 rounded-2xl cursor-pointer transition-all duration-400 border overflow-hidden ${
                    isActive 
                      ? 'bg-white shadow-[0_15px_35px_-8px_rgba(32,58,150,0.18)] border-primary-orange/60 scale-[1.02] ring-1 ring-primary-orange/30 z-10' 
                      : 'bg-white/90 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                >
                  {/* Left Active Glow Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b ${step.color} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'} z-20`} />
                  
                  {/* Active Background Gradient Tint */}
                  <div className={`absolute inset-0 bg-linear-to-r ${step.color} transition-opacity duration-500 z-0 ${isActive ? 'opacity-[0.06]' : 'opacity-0 group-hover:opacity-[0.02]'}`} />

                  <div className="flex items-start gap-4 relative z-10 pl-1">
                    
                    {/* Glowing Icon Capsule */}
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-400 ${
                      isActive 
                        ? `bg-linear-to-br ${step.color} text-white shadow-md shadow-orange-500/30 scale-108` 
                        : 'bg-slate-100 border border-slate-200 text-slate-500 group-hover:text-primary-blue group-hover:bg-blue-50'
                    }`}>
                      <Icon size={22} />
                    </div>
                    
                    {/* Text Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-[11px] font-mono font-bold tracking-wider uppercase transition-colors ${isActive ? 'text-primary-orange' : 'text-slate-500'}`}>
                          STEP {step.stepNumber}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-orange/10 text-primary-orange border border-primary-orange/20">
                            Active Phase
                          </span>
                        )}
                      </div>

                      <h3 className={`text-base sm:text-lg font-bold leading-tight mb-1 font-serif transition-colors ${isActive ? 'text-slate-900' : 'text-slate-800'}`}>
                        {step.title}
                      </h3>

                      <p className={`text-xs leading-relaxed transition-colors line-clamp-2 ${isActive ? 'text-slate-700 font-normal' : 'text-slate-500'}`}>
                        {step.description}
                      </p>
                    </div>                   
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProcess;
