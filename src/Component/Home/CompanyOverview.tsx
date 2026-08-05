import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:max-w-none shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Company Overview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-blue/10"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-primary-orange hidden md:block">
              <p className="text-4xl font-black text-primary-blue mb-1">100%</p>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="w-12 h-1 bg-primary-orange rounded-full"></div>
              <h3 className="text-primary-orange font-bold uppercase tracking-wider text-sm">About Us</h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Illuminating Spaces, <br />
              <span className="text-primary-blue">Empowering Lives</span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              At Amrit Electricals, we are committed to providing top-tier electrical and solar solutions. With a focus on safety, efficiency, and sustainability, we transform how you consume energy. 
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Our team of certified professionals brings years of expertise to every project, ensuring that whether it's a residential wiring job or a massive commercial solar installation, the quality remains uncompromised.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary-orange w-6 h-6 shrink-0" />
                <span className="text-gray-800 font-semibold">Certified & Experienced Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary-orange w-6 h-6 shrink-0" />
                <span className="text-gray-800 font-semibold">Cutting-edge Solar Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary-orange w-6 h-6 shrink-0" />
                <span className="text-gray-800 font-semibold">Commitment to Safety & Standards</span>
              </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-primary-blue hover:bg-blue-900 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
              Read Our Full Story
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
