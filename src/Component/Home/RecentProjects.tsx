import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "100kW Commercial Solar Array",
    category: "Solar EPC",
    client: "TechPark Solutions",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[600px]"
  },
  {
    title: "Industrial Plant Rewiring",
    category: "Electrical Integration",
    client: "Global Manufacturing",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    title: "Hospital Backup Systems",
    category: "Critical Infrastructure",
    client: "City General Hospital",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1 min-h-[300px]"
  },
  {
    title: "Smart Grid Residential Complex",
    category: "Residential EPC",
    client: "EcoLiving Developers",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200",
    className: "md:col-span-3 md:row-span-1 min-h-[300px] md:min-h-[400px]"
  }
];

export const RecentProjects: React.FC = () => {
  return (
    <section id="projects" className="py-10 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
         
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-[1.1] max-w-5xl"
          >
            Transforming Infrastructure <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">with Excellence</span>
          </motion.h2>
          <div className="w-42 h-1 bg-primary-orange rounded-full items-center justify-center mx-auto mt-2"></div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative rounded-xl overflow-hidden bg-slate-200 cursor-pointer ${project.className}`}
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1.5 rounded-full   border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Client: {project.client}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Hover action indicator */}
                  <div className="flex items-center gap-2 mt-6 overflow-hidden">
                    <span className="text-blue-100 font-semibold uppercase tracking-wider text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      Explore Case Study
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-blue-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="group inline-flex items-center gap-3 px-10 py-2 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 cursor-pointer">
              View All Projects
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default RecentProjects;
