import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Settings, ShieldAlert, Cpu, Activity } from 'lucide-react';

export const BusinessVerticals: React.FC = () => {
  const services = [
    {
      icon: <Sun size={32} />,
      title: "Solar Solutions",
      description: "End-to-end solar panel installations for residential and commercial properties, reducing your carbon footprint and energy bills.",
    },
    {
      icon: <Zap size={32} />,
      title: "Electrical Installations",
      description: "Safe and reliable wiring and electrical setups for new buildings, renovations, and industrial spaces.",
    },
    {
      icon: <Settings size={32} />,
      title: "Maintenance & Repair",
      description: "24/7 responsive maintenance services to ensure your electrical systems are always running smoothly.",
    },
    {
      icon: <ShieldAlert size={32} />,
      title: "Safety Audits",
      description: "Comprehensive electrical safety audits to identify potential hazards and ensure compliance with regulations.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Smart Home Automation",
      description: "Integrate intelligent systems to control lighting, climate, and security from your smartphone.",
    },
    {
      icon: <Activity size={32} />,
      title: "Energy Consultation",
      description: "Expert advice on optimizing your energy consumption and transitioning to sustainable alternatives.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Our Business <span className="text-primary-blue">Verticals</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering comprehensive energy solutions tailored to your specific needs, powered by innovation and driven by quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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
