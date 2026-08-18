import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { LayoutGrid, Users, Award, Smile } from 'lucide-react';

interface StatsCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function StatsCounter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={`tabular-nums ${className || ""}`}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed", icon: LayoutGrid },
    { value: 50, suffix: "+", label: "Expert Technicians", icon: Users },
    { value: 10, suffix: "+", label: "Years Experience", icon: Award },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: Smile },
  ];

  return (
    <section className="py-5 bg-white text-slate-800 ">
      <div className="container mx-auto px-6 md:px-6 relative z-10 max-w-7xl">
        
        {/* Unified 4-Column Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ 
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`relative p-8 md:p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center group cursor-pointer overflow-hidden transition-all duration-500 ${
                  isEven 
                    ? '' 
                    : ''
                }`}
              >
                {/* Futuristic Icon Ring */}
                <div className={`w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center mb-8 relative transition-all duration-500 ${
                  isEven 
                    ? 'text-primary-blue group-hover:text-white group-hover:border-primary-blue group-hover:bg-[#203A96] group-hover:shadow-[0_8px_20px_rgba(32,58,150,0.2)]' 
                    : 'text-primary-orange group-hover:text-white group-hover:border-primary-orange group-hover:bg-[#F18223] group-hover:shadow-[0_8px_20px_rgba(241,130,35,0.2)]'
                }`}>
                  <Icon size={24} className="relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                </div>

                {/* Number with Spring Animated StatsCounter */}
                <div className="relative z-10 text-5xl md:text-6xl font-black mb-3 tracking-tighter flex items-baseline select-none">
                  <StatsCounter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    duration={2}
                    className="text-slate-900 transition-all duration-500"
                  />
                </div>

                {/* Label */}
                <div className="relative z-10 text-[10px] md:text-xs font-bold text-slate-900 group-hover:text-slate-800 uppercase tracking-[0.25em] mt-2 transition-colors duration-500">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CompanyHighlights;
