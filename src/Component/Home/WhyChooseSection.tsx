import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Wrench } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: "Certified Excellence",
      description: "Our technicians hold top industry certifications, guaranteeing work that meets the highest safety standards."
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Delivery",
      description: "We respect your time. Our projects are meticulously planned and executed to meet strict deadlines."
    },
    {
      icon: <Users size={32} />,
      title: "Customer-Centric",
      description: "Your satisfaction is our priority. We work closely with you from consultation to final handover."
    },
    {
      icon: <Wrench size={32} />,
      title: "Advanced Equipment",
      description: "We utilize the latest tools and technology to ensure efficient, long-lasting, and safe installations."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          
          {/* Text Side */}
          <div className="flex-1 lg:pr-8 py-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="w-12 h-1 bg-primary-orange rounded-full"></div>
              <h3 className="text-primary-orange font-bold uppercase tracking-wider text-sm">Why Choose Us</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              The Amrit Electricals <span className="text-primary-blue">Advantage</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We don't just provide services; we build lasting partnerships. Here is why homeowners and businesses trust us for their most critical energy needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-primary-orange shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex flex-col mt-8 lg:mt-0"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl flex-grow min-h-[400px] lg:min-h-0">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team at Work" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-blue/20 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
