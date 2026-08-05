import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Settings, ShieldAlert, Cpu, Activity } from 'lucide-react';

export const BusinessVerticals: React.FC = () => {
  const services = [
    {
      icon: <Sun size={28} />,
      title: "Solar Solutions",
      description: "End-to-end solar panel installations for residential and commercial properties, reducing your carbon footprint.",
      accentColor: "bg-amber-500",
      lightBg: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      icon: <Zap size={28} />,
      title: "Electrical Installations",
      description: "Safe and reliable wiring and electrical setups for new buildings, renovations, and industrial spaces.",
      accentColor: "bg-blue-500",
      lightBg: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <Settings size={28} />,
      title: "Maintenance & Repair",
      description: "24/7 responsive maintenance services to ensure your electrical systems are always running smoothly.",
      accentColor: "bg-slate-500",
      lightBg: "bg-slate-100 text-slate-700 border-slate-200"
    },
    {
      icon: <ShieldAlert size={28} />,
      title: "Safety Audits",
      description: "Comprehensive electrical safety audits to identify potential hazards and ensure compliance with regulations.",
      accentColor: "bg-rose-500",
      lightBg: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
      icon: <Cpu size={28} />,
      title: "Smart Home Automation",
      description: "Integrate intelligent systems to control lighting, climate, and security from your smartphone.",
      accentColor: "bg-indigo-500",
      lightBg: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      icon: <Activity size={28} />,
      title: "Energy Consultation",
      description: "Expert advice on optimizing your energy consumption and transitioning to sustainable alternatives.",
      accentColor: "bg-emerald-500",
      lightBg: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-amber-500 rounded-full"></div>
              <h3 className="text-amber-500 font-bold uppercase tracking-widest text-sm">Our Expertise</h3>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Verticals</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg md:text-xl max-w-md leading-relaxed font-light lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-amber-500/30 pl-6 lg:pl-0 lg:pr-6">
            Delivering comprehensive energy solutions tailored to your specific needs, powered by innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
            >
              {/* Colored Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${service.accentColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 border ${service.lightBg}`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;
