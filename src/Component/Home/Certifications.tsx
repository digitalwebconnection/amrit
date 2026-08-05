import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Sun } from 'lucide-react';

const certificates = [
  { 
    name: "ISO 9001:2015", 
    desc: "Quality Management Systems",
    icon: <Award size={32} />,
    color: "text-blue-600",
    bg: "bg-blue-50 border border-blue-100"
  },
  { 
    name: "ISO 45001:2018", 
    desc: "Occupational Health & Safety",
    icon: <ShieldCheck size={32} />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 border border-emerald-100"
  },
  { 
    name: "A-Class Licensed", 
    desc: "Electrical Contractor",
    icon: <Zap size={32} />,
    color: "text-orange-500",
    bg: "bg-orange-50 border border-orange-100"
  },
  { 
    name: "MNRE Approved", 
    desc: "Solar Channel Partner",
    icon: <Sun size={32} />,
    color: "text-amber-500",
    bg: "bg-amber-50 border border-amber-100"
  }
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Compliance & Trust</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Certified for <br className="hidden lg:block" />
              <span className="text-blue-600">Excellence</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              We strictly adhere to national safety standards and quality frameworks to deliver entirely risk-free, future-proof projects.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {certificates.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-white border border-slate-100 rounded-lg p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:border-blue-100 transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <div className={`shrink-0 w-16 h-16 ${cert.bg} ${cert.color} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                    {cert.icon}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{cert.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
