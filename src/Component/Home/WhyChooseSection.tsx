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
    <section id="why-us" className="py-8 lg:py-14 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden selection:bg-primary-orange selection:text-white">
      
     

      {/* 5. Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12 lg:gap-16">
          
          {/* Text Side */}
          <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
              
              {/* Title with Gradient Text */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4 leading-tight">
                The Amrit Electricals{" "}
                <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_12px_rgba(241,130,35,0.25)]">
                  Advantage
                </span>
              </h2>

              {/* Glowing Accent Bar with Shimmer Beam */}
              <div className="relative w-36 h-1.5 bg-gradient-to-r from-primary-blue via-primary-orange to-amber-400 rounded-full mt-2 lg:mx-0 mx-auto shadow-[0_0_15px_rgba(241,130,35,0.7)] overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-white/70 shadow-[0_0_8px_#ffffff]"
                />
              </div>
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
                  {/* Icon Wrapper with Enhanced Glow Bloom */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    index % 2 === 0
                      ? 'bg-blue-50 text-primary-blue group-hover:bg-primary-blue group-hover:text-white group-hover:shadow-[0_0_25px_rgba(32,58,150,0.45)]'
                      : 'bg-orange-50 text-primary-orange group-hover:bg-primary-orange group-hover:text-white group-hover:shadow-[0_0_25px_rgba(241,130,35,0.55)]'
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

          {/* Image Side with Glowing Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full flex flex-col mt-8 lg:mt-0 relative"
          >
            {/* Glowing Backdrop Aura behind Image */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-primary-orange/25 via-primary-blue/25 to-transparent rounded-2xl blur-xl -z-10" />

            <div className="relative rounded-lg overflow-hidden shadow-2xl grow min-h-100 lg:min-h-0 group border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team at Work"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary-blue/20 mix-blend-multiply"></div>
              
              {/* Shimmer Light Reflection Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-[1800ms] ease-out pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
