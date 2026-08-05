import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, PenTool, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 0,
    icon: <ClipboardCheck size={24} />,
    title: "Consultation & Audit",
    description: "We begin with a thorough site inspection and energy audit to understand your precise requirements.",
    color: "from-blue-600 to-blue-400",
    image: "/images/process_1.png"
  },
  {
    id: 1,
    icon: <PenTool size={24} />,
    title: "Custom Design",
    description: "Our engineers design a tailored electrical or solar solution optimized for efficiency and compliance.",
    color: "from-cyan-500 to-teal-400",
    image: "/images/process_2.png"
  },
  {
    id: 2,
    icon: <Wrench size={24} />,
    title: "Safe Installation",
    description: "Certified technicians execute the project using top-tier materials while strictly adhering to safety standards.",
    color: "from-orange-500 to-orange-400",
    image: "/images/process_3.png"
  },
  {
    id: 3,
    icon: <ShieldCheck size={24} />,
    title: "Handover & Support",
    description: "After rigorous testing, we commission the system and provide comprehensive ongoing maintenance.",
    color: "from-emerald-500 to-green-400",
    image: "/images/process_4.png"
  }
];

export const OurProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            A Proven, Streamlined <br />
            <span className="text-blue-600">
              Process
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            From initial consultation to final handover, our expert approach guarantees flawless execution and maximum energy efficiency.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] relative h-[400px] lg:h-auto">
            <div className="absolute inset-0 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeStep}
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none"></div>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.div
                  key={`badge-${activeStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-lg text-white"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-black opacity-50">0{activeStep + 1}</span>
                    <h4 className="text-lg font-bold">{steps[activeStep].title}</h4>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className={`absolute -inset-2 bg-gradient-to-tr ${steps[activeStep].color} rounded-lg opacity-10 -z-10 transition-colors duration-700`}></div>
          </div>

          {/* Right: Interactive Step List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-2">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              
              return (
                <div 
                  key={step.id} 
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden group ${
                    isActive 
                      ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-blue-100 scale-[1.02]' 
                      : 'bg-white/50 border-transparent hover:bg-slate-50 hover:scale-[1.01]'
                  }`}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Subtle active indicator line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${step.color} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'} z-20`}></div>
                  
                  {/* Color Tint Background for active state */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-opacity duration-500 z-0 ${isActive ? 'opacity-[0.08]' : 'opacity-0 group-hover:opacity-[0.02]'}`}></div>

                  <div className="flex items-start gap-4 relative z-10 pl-2">
                    
                    {/* Icon Container */}
                    <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? `bg-gradient-to-br ${step.color} text-white shadow-md shadow-blue-500/20 rotate-0` 
                        : 'bg-slate-100 border border-slate-200 text-slate-400 group-hover:text-blue-500 -rotate-3 group-hover:rotate-0'
                    }`}>
                      {step.icon}
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold tracking-wider transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          STEP 0{idx + 1}
                        </span>
                      </div>
                      <h3 className={`text-lg font-bold leading-tight mt-1 mb-1 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-[13px] leading-snug transition-colors ${isActive ? 'text-slate-700' : 'text-slate-500'}`}>
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
