import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { LayoutGrid, Users, Award, Smile } from 'lucide-react';

const Counter = ({ to, suffix }: { to: number, suffix: string }) => {
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

  return <span ref={ref}>0{suffix}</span>;
};

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed", icon: LayoutGrid, color: "text-[#203A96]", bg: "bg-[#203A96]/10" },
    { value: 50, suffix: "+", label: "Expert Technicians", icon: Users, color: "text-[#F18223]", bg: "bg-[#F18223]/10" },
    { value: 10, suffix: "+", label: "Years Experience", icon: Award, color: "text-[#203A96]", bg: "bg-[#203A96]/10" },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: Smile, color: "text-[#F18223]", bg: "bg-[#F18223]/10" },
  ];

  return (
    <section className="py-14 relative overflow-hidden ">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#F18223] rounded-full blur-[120px] opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#203A96] rounded-full blur-[100px] opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* Unified 4-Column Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                className="relative p-6 md:p-8 rounded-xl bg-white border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(32,58,150,0.15)] transition-all duration-500 shadow-xl shadow-black/50 overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative z-10`}>
                  <Icon size={32} />
                </div>

                {/* Number */}
                <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight flex items-baseline">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="relative z-10 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest mt-2 group-hover:text-[#203A96] transition-colors">
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
