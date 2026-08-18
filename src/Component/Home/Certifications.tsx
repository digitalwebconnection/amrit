import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2} from 'lucide-react';

interface Certificate {
  name: string;
  desc: string;
  tag: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  border: string;
  glowColor: string;
  gradient: string;
}

const certificates: Certificate[] = [
  { 
    name: "ISO 9001:2015", 
    desc: "Quality Management Systems Certified for Turnkey EPC & Power Distribution.",
    tag: "Quality Certified",
    icon: Award,
    color: "text-primary-blue",
    bg: "bg-blue-50/80",
    border: "border-blue-200 group-hover:border-primary-blue/60",
    glowColor: "rgba(32, 58, 150, 0.35)",
    gradient: "from-primary-blue to-blue-600"
  },
  { 
    name: "ISO 45001:2018", 
    desc: "Occupational Health & Safety Standards with Zero-Accident Execution Protocol.",
    tag: "Safety Compliant",
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50/80",
    border: "border-emerald-200 group-hover:border-emerald-500/60",
    glowColor: "rgba(16, 185, 129, 0.35)",
    gradient: "from-emerald-500 to-teal-600"
  },
  { 
    name: "A-Class Licensed", 
    desc: "Certified Heavy Electrical Contractor for HT/LT Substations up to 33kV.",
    tag: "Govt. Grade-A",
    icon: Zap,
    color: "text-primary-orange",
    bg: "bg-orange-50/80",
    border: "border-orange-200 group-hover:border-primary-orange/60",
    glowColor: "rgba(241, 130, 35, 0.35)",
    gradient: "from-primary-orange to-amber-500"
  },
  { 
    name: "MNRE & DISCOM Approved", 
    desc: "Sanctioned Solar Channel Partner for Net-Metered Commercial Rooftops.",
    tag: "MNRE Sanctioned",
    icon: Sun,
    color: "text-indigo-600",
    bg: "bg-indigo-50/80",
    border: "border-indigo-200 group-hover:border-indigo-500/60",
    glowColor: "rgba(99, 102, 241, 0.35)",
    gradient: "from-indigo-600 to-purple-600"
  }
];

interface CertificationsProps {
  onOpenContact?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenContact }) => {
  return (
    <section id="certifications" className="py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden selection:bg-primary-orange selection:text-white">
      
      {/* ================= HIGH-TECH BACKGROUND GRAPHICS & GLOW EFFECTS ================= */}
      {/* 1. Technical Circuit Matrix Grid (SVG) */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="certs-circuit-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="rgba(32, 58, 150, 0.12)"
                strokeWidth="0.75"
              />
              <circle cx="28" cy="28" r="1.5" fill="rgba(241, 130, 35, 0.5)" />
              <path
                d="M 28 20 L 28 28 L 36 28"
                fill="none"
                stroke="rgba(32, 58, 150, 0.25)"
                strokeWidth="0.6"
                strokeDasharray="2,3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#certs-circuit-grid)" />
        </svg>
      </div>

      {/* 2. Rotating HUD Compass Graphic */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-145 h-145 rounded-full border border-dashed border-amber-400/20 pointer-events-none z-0 flex items-center justify-center"
      >
        <div className="w-4/5 h-4/5 rounded-full border border-blue-400/20" />
      </motion.div>

      {/* 3. Ambient Glowing Background Plasma Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -left-28 w-150 h-150 bg-linear-to-br from-primary-orange/20 via-amber-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-28 -right-28 w-150 h-150 bg-linear-to-tl from-primary-blue/20 via-sky-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />

      {/* 4. Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE: NARRATIVE (5 COLS) ================= */}
          <div className="lg:w-5/12 text-center lg:text-left">
            
            {/* Eyebrow Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
              </span>
              <span className="text-slate-700 font-bold uppercase tracking-widest text-xs">
                Statutory Compliance &amp; Trust
              </span>
            </motion.div>
            
            {/* Heading with Gradient Text */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4 leading-[1.15]"
            >
              Certified for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_12px_rgba(241,130,35,0.25)]">
                Global Excellence
              </span>
            </motion.h3>

            {/* Glowing Accent Bar with Shimmer Beam */}
            <div className="relative w-36 h-1.5 bg-linear-to-r from-primary-blue via-primary-orange to-amber-400 rounded-full mt-2 mb-6 lg:mx-0 mx-auto shadow-[0_0_15px_rgba(241,130,35,0.7)] overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-white/70 shadow-[0_0_8px_#ffffff]"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-900 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-xl"
            >
              We strictly adhere to CEA Indian safety standards, DISCOM net-metering regulations, and international ISO quality frameworks to execute risk-free, future-proof electrical and solar EPC assets.
            </motion.p>

            <motion.button
              onClick={onOpenContact ? onOpenContact : () => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group inline-flex items-center gap-3 px-8 py-3 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-blue transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Quality &amp; Safety Policy</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </div>

          {/* ================= RIGHT SIDE: 4 GLOWING CARDS (7 COLS) ================= */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full">
            {certificates.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className={`group relative bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border ${cert.border} shadow-[0_10px_30px_-8px_rgba(0,0,0,0.28)] hover:shadow-2xl transition-all duration-400 overflow-hidden cursor-default`}
                >
                  {/* Top Glowing Laser Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${cert.gradient}`} />
                  
                  {/* Radial Glow Bloom on Hover */}
                  <div 
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none"
                    style={{ background: cert.glowColor }}
                  />

                  {/* Specular Light Reflection Sweep on Hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1800 ease-out pointer-events-none" />

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    
                    <div>
                      {/* Icon Container with Glow */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-13 h-13 rounded-xl ${cert.bg} border border-slate-200/80 flex items-center justify-center ${cert.color} group-hover:scale-115 group-hover:rotate-6 transition-all duration-400 shadow-sm`}>
                          <Icon size={24} />
                        </div>

                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 group-hover:bg-blue-50 text-slate-700 group-hover:text-primary-blue border border-slate-200/80 transition-colors">
                          {cert.tag}
                        </span>
                      </div>

                      {/* Certification Title & Description */}
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-blue transition-colors font-serif">
                        {cert.name}
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm font-normal">
                        {cert.desc}
                      </p>
                    </div>

                    {/* Verified Status Tag */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>100% Certified &amp; Audited</span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;
