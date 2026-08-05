import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "100kW Commercial Solar",
    category: "Solar EPC",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    title: "Industrial Plant Rewiring",
    category: "Electrical Integration",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Hospital Backup Systems",
    category: "Critical Infrastructure",
    image: "https://images.unsplash.com/photo-1516192513930-f772e06b8d6b?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    title: "Residential Solar Array",
    category: "Residential EPC",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  }
];

export const RecentProjects: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h4 className="text-[#d46337] font-bold tracking-widest uppercase text-sm mb-3">Our Portfolio</h4>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Transforming Infrastructure with <span className="text-primary-blue">Excellence</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 hidden md:flex items-center gap-2 font-bold text-gray-900 hover:text-[#d46337] transition-colors border-b-2 border-gray-900 hover:border-[#d46337] pb-1">
            VIEW ALL PROJECTS <ArrowRight size={18} />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          
          {/* Large Item */}
          <motion.div 
            whileHover="hover"
            initial="initial"
            className="md:col-span-2 h-[300px] md:h-full relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <motion.div 
              className="absolute bottom-0 left-0 p-8 w-full"
              variants={{
                initial: { y: 20, opacity: 0.9 },
                hover: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="bg-[#d46337] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                {projects[0].category}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-bold">{projects[0].title}</h3>
            </motion.div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-6 md:col-span-1 h-full">
            {projects.slice(1, 3).map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                initial="initial"
                className="flex-1 h-[250px] md:h-auto relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 p-6 w-full"
                  variants={{
                    initial: { y: 15, opacity: 0.9 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{project.category}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
        
        {/* Mobile Button */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-[#d46337] transition-colors border-b-2 border-gray-900 hover:border-[#d46337] pb-1">
            VIEW ALL PROJECTS <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
