import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { LayoutGrid, Users, Award, Smile } from 'lucide-react';

const Counter = ({ to, suffix, className }: { to: number, suffix: string, className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.floor(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
};

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed", icon: LayoutGrid },
    { value: 50, suffix: "+", label: "Expert Technicians", icon: Users },
    { value: 10, suffix: "+", label: "Years Experience", icon: Award },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: Smile },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-orange-50/30 text-slate-800 border-y border-slate-100">
      {/* Premium Light Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:32px_32px] opacity-70"></div>
      
      {/* Large Glowing Ambient Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#203A96]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#F18223]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* Unified 4-Column Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                className={`relative p-8 md:p-10 rounded-2xl border border-slate-100/80 flex flex-col items-center text-center group cursor-pointer overflow-hidden transition-all duration-500 ${
                  isEven 
                    ? 'bg-linear-to-b from-white to-blue-50/70 hover:shadow-[0_30px_60px_-15px_rgba(32,58,150,0.15)] hover:border-blue-200/50' 
                    : 'bg-linear-to-b from-white to-orange-50/70 hover:shadow-[0_30px_60px_-15px_rgba(241,130,35,0.12)] hover:border-orange-200/50'
                }`}
              >
                {/* Diagonal Glass Reflection Sweep */}
                <div className="absolute -inset-y-12 -left-40 w-32 bg-slate-100/20 blur-[50px] skew-x-12 -translate-x-full group-hover:translate-x-[450%] transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                {/* Background Radial Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    background: isEven 
                      ? 'radial-gradient(circle at center, rgba(32,58,150,0.04) 0%, transparent 70%)' 
                      : 'radial-gradient(circle at center, rgba(241,130,35,0.03) 0%, transparent 70%)' 
                  }}
                />

                {/* Top Border Accent Line */}
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200/50 to-transparent group-hover:via-slate-300 transition-all duration-500"></div>

                {/* Monospace Index Number */}
                <div className="absolute top-6 right-8 text-[10px] font-mono tracking-widest text-slate-300 group-hover:text-slate-400 transition-colors duration-500 select-none">
                  {`// 0${index + 1}`}
                </div>

                {/* Futuristic Icon Ring */}
                <div className={`w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center mb-8 relative transition-all duration-500 ${
                  isEven 
                    ? 'text-primary-blue group-hover:text-white group-hover:border-primary-blue group-hover:bg-[#203A96] group-hover:shadow-[0_8px_20px_rgba(32,58,150,0.2)]' 
                    : 'text-primary-orange group-hover:text-white group-hover:border-primary-orange group-hover:bg-[#F18223] group-hover:shadow-[0_8px_20px_rgba(241,130,35,0.2)]'
                }`}>
                  <div className={`absolute inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-xs transition-opacity duration-500 ${
                    isEven ? 'bg-blue-500/10' : 'bg-orange-500/10'
                  }`} />
                  <Icon size={24} className="relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                </div>

                {/* Number */}
                <div className="relative z-10 text-5xl md:text-6xl font-black mb-3 tracking-tighter flex items-baseline select-none">
                  <Counter 
                    to={stat.value} 
                    suffix={stat.suffix} 
                    className={`bg-clip-text text-transparent bg-linear-to-b from-slate-900 via-slate-900 to-slate-700 transition-all duration-500`}
                  />
                </div>

                {/* Label */}
                <div className="relative z-10 text-[10px] md:text-xs font-bold text-slate-400 group-hover:text-slate-800 uppercase tracking-[0.25em] mt-2 transition-colors duration-500">
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
