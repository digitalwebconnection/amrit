import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, PenTool, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck size={32} />,
    title: "1. Consultation & Audit",
    description: "We begin with a thorough site inspection and energy audit to understand your precise requirements."
  },
  {
    icon: <PenTool size={32} />,
    title: "2. Custom Design",
    description: "Our engineers design a tailored electrical or solar solution optimized for efficiency and compliance."
  },
  {
    icon: <Wrench size={32} />,
    title: "3. Safe Installation",
    description: "Certified technicians execute the project using top-tier materials while strictly adhering to safety standards."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "4. Handover & Support",
    description: "After rigorous testing, we commission the system and provide comprehensive ongoing maintenance."
  }
];

export const OurProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <h4 className="text-[#d46337] font-bold tracking-widest uppercase text-sm mb-3">How We Work</h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            A Proven, Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d46337] to-[#e88b63]">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#d46337]/50 transition-colors group relative"
            >
              {/* Connection Line for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-white/10 group-hover:bg-[#d46337]/30 transition-colors z-0"></div>
              )}
              
              <div className="w-16 h-16 rounded-full bg-[#d46337]/10 flex items-center justify-center text-[#d46337] mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d46337]/5 blur-[150px] pointer-events-none rounded-full"></div>
    </section>
  );
};

export default OurProcess;
