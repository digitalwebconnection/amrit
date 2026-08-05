import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Solar Panels',
    description: 'High-efficiency monocrystalline and polycrystalline solar modules from top-tier brands for maximum energy yield.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Solar Inverters',
    description: 'Reliable string and central inverters ensuring optimal power conversion and grid stability.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Electrical Panels & BOS',
    description: 'Premium quality Balance of System components including AC/DC boxes, cables, and structural mounting solutions.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products-section" className="py-24 bg-[#f0f6f9] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-black text-transparent leading-none tracking-widest uppercase" style={{ WebkitTextStroke: '2px rgba(0,0,0,0.03)' }}>
          Products
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-gray-900"
          >
            What We <span className="text-primary-blue"><br />Offer You</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4 mb-4"
          >
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-orange font-bold uppercase tracking-wider text-sm mt-4"
          >
            We Add Value To Your Solar System
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-[2rem] overflow-visible shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-300 group flex flex-col relative"
            >
              {/* Product Image Container */}
              <div className="relative h-64 overflow-visible rounded-t-[2rem]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover rounded-t-[2rem]"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors rounded-t-[2rem]"></div>
                
                {/* Floating Action Button overlapping the image and content */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
                   <button className="w-14 h-14 rounded-full bg-primary-blue text-white flex items-center justify-center group-hover:bg-primary-orange transition-all duration-300 shadow-[0_4px_14px_0_rgba(12,79,141,0.39)] border-[6px] border-white group-hover:scale-110">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                   </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="pt-12 pb-10 px-8 flex-1 flex flex-col text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary-blue transition-colors">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Products;
