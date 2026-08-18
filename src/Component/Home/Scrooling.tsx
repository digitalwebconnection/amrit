import React from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Zap,
  ShieldCheck,
  Award,
 
  Cpu,
  Layers,
  Wrench,
  Activity
} from 'lucide-react';

interface TickerItem {
  icon: typeof Sun;
  label: string;
  highlight?: string;
}

export const Scrooling: React.FC = () => {
  const items: TickerItem[] = [
    { icon: Sun, label: "Tier-1 Solar PV Modules", highlight: "TOPCon & Bifacial" },
    { icon: Zap, label: "Turnkey EPC Engineering", highlight: "MW-Scale Execution" },
    { icon: ShieldCheck, label: "25-Year Performance Warranty", highlight: "Tier-1 Assured" },
    { icon: Award, label: "MNRE Approved Partner", highlight: "Subsidy Ready" },
    { icon: Cpu, label: "Smart String Inverters", highlight: "98.8% Efficiency" },
    { icon: Layers, label: "Industrial & Commercial Rooftops", highlight: "Max Bill Cut" },
    { icon: Activity, label: "DISCOM Net-Metering Sync", highlight: "Zero-Hassle" },
    { icon: Wrench, label: "Turnkey BOS & Lifetime O&M", highlight: "24/7 Support" },
  ];

  // Double the items array for infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative z-20 overflow-hidden bg-gradient-to-r from-[#070a14] via-[#0d1428] to-[#070a14] border-y border-amber-500/20 py-3.5 sm:py-2.5 shadow-2xl">
      {/* Top Shimmering Solar Gold Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary-orange via-50% to-transparent pointer-events-none" />

      {/* Bottom Subtle Blue/Amber Accent Line */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 via-50% to-transparent pointer-events-none" />

      {/* Left and Right Smooth Edge Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#070a14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#070a14] to-transparent z-10 pointer-events-none" />

      {/* Continuous Seamless Infinite Marquee Track */}
      <motion.div
        className="flex items-center gap-6 sm:gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 28,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3  transition-all duration-300 group cursor-default shadow-md backdrop-blur-md"
            >
              {/* Glowing Icon Badge */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary-orange/25 to-amber-400/15 border border-primary-orange/40 flex items-center justify-center text-primary-orange group-hover:scale-110 transition-transform shadow-[0_0_8px_rgba(241,130,35,0.3)]">
                <IconComponent size={13} className="group-hover:rotate-12 transition-transform text-primary-orange" />
              </div>

              {/* Main Label */}
              <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-100 group-hover:text-white uppercase font-sans drop-shadow-xs">
                {item.label}
              </span>

              {/* Sub-tag Highlight Pill */}
              {item.highlight && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-primary-orange/15 text-amber-300 border border-primary-orange/30">
                  {item.highlight}
                </span>
              )}

              {/* Sparkling Diamond Separator */}
              <span className="text-amber-400/60 text-xs font-bold pl-2">✦</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Scrooling;
