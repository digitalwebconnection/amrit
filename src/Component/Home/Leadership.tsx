import React from 'react';
import { motion } from 'framer-motion';


export const Leadership: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-gray-900"
          >
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-400"><br />Leadership</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4 mb-4"
          >
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-5/12 w-full relative"
          >
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gray-100 border border-gray-300 rounded-2xl transform -rotate-3 z-0 transition-transform hover:-rotate-6 duration-700"></div>
            <div className="absolute -inset-4 bg-primary-orange/5 rounded-2xl transform rotate-3 z-0 transition-transform hover:rotate-6 duration-700"></div>

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-white group">
              <img
                src="/shiva-sir.webp"
                alt="Shiva Sir - Leadership"
                className="w-full h-[500px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010e3be5]/90 via-[#010e3be5]/20 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-2">AMRITPAL SINGH</h3>
                <p className="text-primary-orange font-bold tracking-widest uppercase text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-7/12"
          >


            <h3 className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed  mb-8">
              "Our mission is to bring light, power, and safety to every home and business we touch. Quality is not just a standard for us; <span className="text-primary-orange font-bold">it's a promise</span>."
            </h3>

            <div className="w-12 h-1 bg-gray-200 mb-8"></div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over two decades of experience in the electrical and solar industry, Shiva Sir has built Amrit Electricals on the pillars of trust, innovation, and unparalleled customer service.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Under his visionary leadership, the company has grown from a small local firm to a leading regional provider, consistently setting new benchmarks for quality and reliability in electrical EPC and solar integrations.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
