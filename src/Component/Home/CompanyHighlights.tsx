import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  Award,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: "90+", suffix: " MW", label: "Solar Panels Supplied", icon: LayoutGrid },
    { value: "75+", suffix: " MW", label: "Inverters Supplied", icon: Award },
    { value: "500+", suffix: "", label: "Turnkey Solar KITs", icon: Layers },
    { value: "50,000+", suffix: "", label: "Energy Meters Deployed", icon: Zap },
    { value: "1,200+", suffix: "", label: "Delivered Solar Projects", icon: CheckCircle2 },
    { value: "10+", suffix: " Years", label: "Industry Excellence", icon: ShieldCheck },
  ];

  // Double the stats array for seamless infinite moving loop
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="py-8 bg-slate-50/70 border-b border-slate-200/80 text-slate-800 relative overflow-hidden">
      {/* Left and Right Edge Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Moving Slider Track */}
      <motion.div
        className="flex items-center gap-6 will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 34,
            ease: 'linear',
          },
        }}
      >
        {duplicatedStats.map((stat, index) => {
          const Icon = stat.icon;
          const isOrange = index % 2 !== 0;

          return (
            <div
              key={index}
              className="w-68 sm:w-76 md:w-80 shrink-0 bg-white p-6 md:p-7 rounded-2xl border border-slate-300 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isOrange
                    ? 'bg-orange-50 text-primary-orange'
                    : 'bg-blue-50 text-primary-blue'
                }`}
              >
                <Icon size={24} />
              </div>

              <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-mono mb-1">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xl font-sans font-semibold text-slate-600 ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1 truncate max-w-full">
                {stat.label}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CompanyHighlights;
