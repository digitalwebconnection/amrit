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
    { icon: Sun, label: "Adani Solar PV Panels", highlight: "Mono & TOPCon" },
    { icon: Cpu, label: "Polycab Grid-Tie Inverters", highlight: "98.8% MPPT" },
    { icon: Layers, label: "Turnkey Solar KITs (1-25 kW)", highlight: "1-Box Solution" },
    { icon: ShieldCheck, label: "ACDB & DCDB Panels", highlight: "Full Protection" },
    { icon: Activity, label: "DLMS Net-Meters & CTs", highlight: "DISCOM Approved" },
    { icon: Zap, label: "Polycab Solar DC Cables", highlight: "Flame Retardant" },
    { icon: Award, label: "CITEL Surge Protectors", highlight: "Type 1+2 SPD" },
    { icon: Wrench, label: "Chemical Earthing & BOS", highlight: "25-Yr Reliability" },
  ];

  // Double the items array for infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative z-20 overflow-hidden bg-slate-900 border-y border-slate-800 py-3 shadow-sm">
      {/* Left and Right Smooth Edge Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Continuous Seamless Marquee Track */}
      <motion.div
        className="flex items-center gap-8 sm:gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 cursor-default"
            >
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-primary-orange">
                <IconComponent size={14} />
              </div>

              <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase font-sans">
                {item.label}
              </span>

              {item.highlight && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                  {item.highlight}
                </span>
              )}

              <span className="text-slate-600 text-xs pl-2">•</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Scrooling;
