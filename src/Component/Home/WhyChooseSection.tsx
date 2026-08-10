import React from "react";
import { motion } from "framer-motion";
import { Award, Clock, Users, Wrench } from "lucide-react";

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: "Certified Excellence",
      description:
        "Our technicians hold top industry certifications, guaranteeing work that meets the highest safety standards.",
    },
    {
      icon: <Clock size={32} />,
      title: "On-Time Delivery",
      description:
        "We respect your time. Our projects are meticulously planned and executed to meet strict deadlines.",
    },
    {
      icon: <Users size={32} />,
      title: "Customer-Centric",
      description:
        "Your satisfaction is our priority. We work closely with you from consultation to final handover.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Advanced Equipment",
      description:
        "We utilize the latest tools and technology to ensure efficient, long-lasting, and safe installations.",
    },
  ];

  return (
    <section id="why-us" className="py-14 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          {/* Text Side */}
          <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4 leading-tight">
                The Amrit Electricals{" "}
                <span className="text-primary-blue">
                  <br className="hidden lg:block" />
                  Advantage
                </span>
              </h2>
              <div className="w-32 h-1 bg-primary-orange rounded-full mt-2 lg:mx-0 mx-auto"></div>
            </div>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">
              We don't just provide services; we build lasting partnerships.
              Here is why homeowners and businesses trust us for their most
              critical energy needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.2 }
                  }}
                  className="group flex gap-4 text-left"
                >
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    index % 2 === 0 
                      ? 'bg-blue-50 text-primary-blue group-hover:bg-primary-blue group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(32,58,150,0.2)]' 
                      : 'bg-orange-50 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(241,130,35,0.2)]'
                  }`}>
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {reason.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className={`text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 ${
                      index % 2 === 0 ? 'group-hover:text-primary-blue' : 'group-hover:text-primary-orange'
                    }`}>
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
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
            <div className="relative rounded-lg overflow-hidden shadow-2xl grow min-h-100 lg:min-h-0">
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
