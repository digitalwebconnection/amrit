import React from 'react';
import { motion } from 'framer-motion';
import {

  ArrowRight,

  CheckCircle2,

  ArrowUpRight
} from 'lucide-react';

interface ProductItem {
  id: number;
  title: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  image: string;
  glowColor: string;
}

const products: ProductItem[] = [
  {
    id: 1,
    title: 'Adani Solar Panels',
    category: 'Tier-1 Solar PV',
    badge: 'Mono-PERC & TOPCon',
    description: 'We drive the transition to more sustainable, reliable & affordable energy systems with innovative high-efficiency solar PV technologies.',
    features: [
      '22.8%+ Maximum Module Efficiency',
      '25-Year Linear Power Warranty',
      'PID Resistant & Extreme Weather Tested'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    glowColor: 'rgba(241, 130, 35, 0.3)'
  },
  {
    id: 2,
    title: 'Polycab Solar Inverters',
    category: 'Power Conversion',
    badge: '98.8% MPPT Efficiency',
    description: 'Solar Grid Inverters and On-Grid Inverters from Polycab engineered with world-class reliable components for maximum yield and zero downtime.',
    features: [
      'Multi-MPPT Solar Generation Tracking',
      'Integrated Cloud & Mobile IoT Telemetry',
      'IP65 / IP66 Weatherproof Outdoor Enclosure'
    ],
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    glowColor: 'rgba(32, 58, 150, 0.3)'
  },
  {
    id: 3,
    title: '1-Box Solar KITs & BOS',
    category: 'Complete Turnkey Kits',
    badge: '1 kW to 25 kW Ready',
    description: 'All-in-one solar solution combos – ACDB/DCDB, Polycab DC Cables, DLMS Net-Meters, CITEL SPDs & Chemical Earthing ready in 1 box.',
    features: [
      'Pre-Engineered 1 kW to 25 kW Packages',
      'ACDB, DCDB & CITEL Surge Protectors',
      'DISCOM Net-Metering DLMS Meters Included'
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    glowColor: 'rgba(16, 185, 129, 0.3)'
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products-section" className="py-14 lg:py-22 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden selection:bg-primary-orange selection:text-white">
      
 

      {/* 4. Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-3.5"
          >
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Hardware &amp; Tier-1 BOS // 25-Yr Reliability
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 leading-tight mb-4"
          >
            What We <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_12px_rgba(241,130,35,0.25)]">
              Offer You
            </span>
          </motion.h2>

          {/* Glowing Accent Bar with Traveling Shimmer */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-2 mb-4"
          >
            <div className="relative w-36 h-1.5 bg-linear-to-r from-primary-blue via-primary-orange to-amber-400 rounded-full shadow-[0_0_15px_rgba(241,130,35,0.7)] overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-white/70 shadow-[0_0_8px_#ffffff]"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            We deploy exclusively tested and approved Tier-1 components engineered to withstand harsh environmental conditions and maximize clean energy return on investment.
          </motion.p>
        </div>

        {/* ================= PRODUCTS 3-COLUMN GLOWING CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-9">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-xl overflow-visible shadow-[0_10px_35px_-10px_rgba(0,0,0,0.51)] hover:shadow-[0_25px_55px_-12px_rgba(32,58,150,0.22)] border border-slate-200/90 transition-all duration-400 group flex flex-col relative cursor-pointer"
            >
              {/* Glowing Radial Halo on Card Hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top, ${product.glowColor} 0%, transparent 70%)`
                }}
              />

              {/* Product Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl bg-slate-900">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-95 group-hover:brightness-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Shimmer Light Reflection Sweep on Hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1800 ease-out pointer-events-none" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                    {product.category}
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full bg-primary-orange/90 backdrop-blur-md text-white text-[10px] font-mono font-bold shadow-md">
                    {product.badge}
                  </span>
                </div>
              </div>
              
              {/* Floating Central Action Button Overlapping Image and Content */}
              <div className="absolute top-57 left-1/2 -translate-x-1/2 z-30">
                 <div className="w-14 h-14 rounded-full bg-linear-to-tr from-primary-blue to-blue-700 text-white flex items-center justify-center group-hover:from-primary-orange group-hover:to-amber-500 transition-all duration-300 shadow-[0_4px_16px_rgba(32,58,150,0.35)] group-hover:shadow-[0_0_25px_rgba(241,130,35,0.7)] border-4 border-white group-hover:scale-110 cursor-pointer">
                   <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>

              {/* Product Info Body */}
              <div className="pt-12 pb-8 px-6 sm:px-7 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-blue transition-colors font-serif text-center">
                    {product.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center mb-5">
                    {product.description}
                  </p>
                </div>

                {/* 3-Point Verified Feature Checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 size={13} className="text-primary-orange shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA Action Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center text-xs font-bold uppercase tracking-wider text-primary-orange group-hover:text-primary-blue transition-colors">
                  <span>Explore Technical Specifications</span>
                  <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Products;
