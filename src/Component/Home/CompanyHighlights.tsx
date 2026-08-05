import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

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
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Expert Technicians" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="p-4"
            >
              <div className="text-5xl md:text-6xl font-black text-orange-500 mb-4 tracking-tighter drop-shadow-md">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-bold text-blue-100 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
