import React from 'react';
import { motion } from 'framer-motion';

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Expert Technicians" },
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 bg-primary-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-black text-primary-orange mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-blue-100 uppercase tracking-wider">
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
