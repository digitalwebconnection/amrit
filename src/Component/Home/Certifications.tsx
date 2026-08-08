import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Sun, ArrowRight } from 'lucide-react';

const certificates = [
  { 
    name: "ISO 9001:2015", 
    desc: "Quality Management Systems",
    icon: <Award className="w-7 h-7" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-300",
    gradient: "from-blue-600 to-cyan-500"
  },
  { 
    name: "ISO 45001:2018", 
    desc: "Occupational Health & Safety",
    icon: <ShieldCheck className="w-7 h-7" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    gradient: "from-emerald-600 to-teal-500"
  },
  { 
    name: "A-Class Licensed", 
    desc: "Electrical Contractor",
    icon: <Zap className="w-7 h-7" />,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-300",
    gradient: "from-orange-600 to-amber-500"
  },
  { 
    name: "MNRE Approved", 
    desc: "Solar Channel Partner",
    icon: <Sun className="w-7 h-7" />,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-300",
    gradient: "from-violet-600 to-purple-500"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-linear-to-br from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-linear-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-8 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-slate-700 font-bold uppercase tracking-widest text-xs">Compliance & Trust</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-6 leading-[1.15]"
            >
              Certified for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Global Excellence</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed font-light mb-8"
            >
              We strictly adhere to national safety standards and quality frameworks to deliver entirely risk-free, future-proof projects that exceed expectations.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group inline-flex items-center gap-3 px-8 py-2  rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              View Quality Policy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {certificates.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group relative bg-white rounded-xl p-8 border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-linear-to-r ${cert.gradient} opacity-100 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col gap-5">
                  <div className={`w-14 h-14 rounded-xl ${cert.bg} ${cert.border} border-2 flex items-center justify-center ${cert.color} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{cert.desc}</p>
                  </div>
                </div>
                
                {/* Decorative bottom corner element */}
                <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-br ${cert.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
