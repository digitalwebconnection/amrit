
import { motion } from 'framer-motion';
import {
  Sun,
  Zap,
  Cpu,
  ShieldCheck,
  Wrench,

  ArrowRight,
  CheckCircle2,
  Sparkles,

  FileText,
  Flame,
  BatteryCharging,

} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  features: string[];
  gradient: string;
  glowColor: string;
  iconBg: string;
  iconColor: string;
  borderHover: string;
}

const services: ServiceItem[] = [
  {
    id: "solar-epc",
    icon: Sun,
    badge: "Adani & Polycab Partner",
    title: "Residential & Commercial Solar",
    subtitle: "Rooftop & Captive Solar Power",
    description: "Complete rooftop solar PV installations engineered to cut electricity bills by up to 80% with DISCOM net-metering and 25-year linear performance warranty.",
    metric: "90+ MW",
    metricLabel: "Panels Supplied",
    features: [
      "Adani Mono-PERC & TOPCon Panels",
      "Cut Electricity Bills by Up to 80%",
      "DISCOM Net-Metering Sanctions"
    ],
    gradient: "from-amber-500/15 via-orange-500/8 to-transparent",
    glowColor: "rgba(241, 130, 35, 0.4)",
    iconBg: "bg-orange-500/10 border-orange-500/30",
    iconColor: "text-primary-orange",
    borderHover: "group-hover:border-primary-orange group-hover:shadow-[0_0_40px_rgba(241,130,35,0.25)]"
  },
  {
    id: "solar-kits",
    icon: Zap,
    badge: "1 kW to 25 kW Ready",
    title: "Turnkey Solar KITs",
    subtitle: "1-Box Ready for Integrators",
    description: "Launched to support small and medium system integrators – no need to source from multiple vendors. Order 1 box containing all components ready for fast installation.",
    metric: "500+",
    metricLabel: "Kits Delivered",
    features: [
      "Off-Grid, On-Grid & Hybrid Combos",
      "All Hardware & Cables in 1 Box",
      "Plug-and-Play Quick Installation"
    ],
    gradient: "from-blue-600/15 via-indigo-600/8 to-transparent",
    glowColor: "rgba(32, 58, 150, 0.4)",
    iconBg: "bg-blue-600/10 border-blue-600/30",
    iconColor: "text-primary-blue",
    borderHover: "group-hover:border-primary-blue group-hover:shadow-[0_0_40px_rgba(32,58,150,0.25)]"
  },
  {
    id: "inverters",
    icon: Cpu,
    badge: "98.8% MPPT Efficiency",
    title: "Polycab Solar Inverters",
    subtitle: "Grid-Tie & Hybrid Conversion",
    description: "Authorized Polycab on-grid and string solar inverters engineered with world-class components for optimal MPPT yield, rugged durability, and cloud monitoring.",
    metric: "75+ MW",
    metricLabel: "Inverters Supplied",
    features: [
      "Single-Phase & 3-Phase On-Grid",
      "World-Class Reliable Components",
      "Real-Time Wireless IoT Telemetry"
    ],
    gradient: "from-indigo-500/15 via-blue-500/8 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.4)",
    iconBg: "bg-indigo-500/10 border-indigo-500/30",
    iconColor: "text-indigo-600",
    borderHover: "group-hover:border-indigo-500 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
  },
  {
    id: "energy-meters",
    icon: ShieldCheck,
    badge: "DISCOM & MSEDCL Approved",
    title: "Energy Meters & CTs",
    subtitle: "Net & Generation DLMS Meters",
    description: "3-Phase HT TOD Class 0.5S DLMS Energy Meters and Ashmor CTs for bidirectional solar net-metering and exact utility generation measurement.",
    metric: "50,000+",
    metricLabel: "Meters Deployed",
    features: [
      "Secure & L&T DLMS Energy Meters",
      "Ashmor Precision Current Transformers",
      "DISCOM Net-Metering Compliance"
    ],
    gradient: "from-rose-500/15 via-amber-500/8 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.4)",
    iconBg: "bg-rose-500/10 border-rose-500/30",
    iconColor: "text-rose-600",
    borderHover: "group-hover:border-rose-500 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.25)]"
  },
  {
    id: "bos-protection",
    icon: Wrench,
    badge: "ACDB, DCDB & SPDs",
    title: "Balance of System (BOS)",
    subtitle: "Cables, Combiners & Protection",
    description: "High-grade ACDB/DCDB protection boxes, flame-retardant Polycab DC Cables, CITEL Type 1+2 surge protection devices (SPDs), and maintenance-free chemical earthing.",
    metric: "100%",
    metricLabel: "Fault Protection",
    features: [
      "ACDB & DCDB Distribution Boxes",
      "CITEL Class 1+2 Surge Protectors",
      "Polycab Flame-Retardant DC Cables"
    ],
    gradient: "from-teal-500/15 via-emerald-500/8 to-transparent",
    glowColor: "rgba(20, 184, 166, 0.4)",
    iconBg: "bg-teal-500/10 border-teal-500/30",
    iconColor: "text-teal-600",
    borderHover: "group-hover:border-teal-500 group-hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]"
  },
  {
    id: "engineering-support",
    icon: BatteryCharging,
    badge: "Trained Solar Engineers",
    title: "Installer & EPC Engineering Support",
    subtitle: "Turnkey Design & Technical Support",
    description: "In-house team of certified solar engineers to support solar installers, provide system sizing, single-line diagrams (SLD), and turnkey project commissioning.",
    metric: "10+ Yrs",
    metricLabel: "Industry Leadership",
    features: [
      "In-House Dedicated Solar Engineers",
      "System Sizing & SLD Engineering",
      "Lifetime After-Sales Technical SLA"
    ],
    gradient: "from-emerald-500/15 via-teal-500/8 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.4)",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    iconColor: "text-emerald-600",
    borderHover: "group-hover:border-emerald-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
  }
];

interface BusinessVerticalsProps {
  onOpenContact?: () => void;
}

export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="relative py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden selection:bg-primary-orange selection:text-white">
      
      
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/40 via-50% to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-16 lg:mb-10">
          
          {/* Eyebrow Pill Badge with Glowing Beacon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/90 border border-primary-blue/30 shadow-[0_4px_20px_rgba(32,58,150,0.12)] mb-5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-orange shadow-[0_0_10px_#F18223]" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-primary-blue">
              Comprehensive Energy Engineering // 6 Core Capabilities
            </span>
          </motion.div>

          {/* High-Impact Headline with Radiant Gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-5 "
          >
            Transforming Infrastructure Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_15px_rgba(241,130,35,0.25)]">
              Diverse Business Verticals
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-900 text-sm sm:text-base md:text-lg max-w-6xl mx-auto font-normal leading-relaxed"
          >
            From high-yield turnkey solar generation to heavy-duty HT/LT electrical engineering and smart automation, we deliver certified high-efficiency solutions built for multi-decade reliability.
          </motion.p>
        </div>

        {/* ================= 6 GLOWING ULTRA-PREMIUM CARDS (3x2 GRID) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-xl bg-white/95 backdrop-blur-xl border border-slate-200/90 ${service.borderHover} p-7 sm:p-8 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.86),0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* 3D Glowing Gradient Tint in Background on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Ambient Radial Colored Glow Orb in Card */}
                <div
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-500 pointer-events-none"
                  style={{ background: service.glowColor }}
                />

                {/* 3D Specular Light Sweep on Hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1800 ease-out pointer-events-none" />

                {/* Top Section: Icon + Badge + Metric */}
                <div className="relative z-10 mb-5">
                  
                  {/* Top Bar with Glowing Icon Pod & Metric Chip */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    
                    {/* Glowing Icon Pod */}
                    <div className="relative">
                      {/* Rotating Halo behind icon on hover */}
                      <div className="absolute -inset-1 rounded-2xl bg-linear-to-tr from-primary-orange/30 to-primary-blue/30 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />
                      
                      <div className={`relative w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center ${service.iconColor} shadow-md group-hover:scale-115 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon size={28} />
                      </div>
                    </div>

                    {/* Metric Chip */}
                    <div className="text-right bg-slate-50/90 group-hover:bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-xs group-hover:shadow-md transition-all">
                      <p className="text-sm font-black font-mono text-slate-900 leading-none group-hover:text-primary-blue transition-colors">
                        {service.metric}
                      </p>
                      <p className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mt-1">
                        {service.metricLabel}
                      </p>
                    </div>
                  </div>

                  {/* Category Pill Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100/90 group-hover:bg-white text-slate-700 border border-slate-200/80 mb-3.5 shadow-2xs group-hover:shadow-sm transition-all">
                    <Sparkles size={12} className={service.iconColor} />
                    {service.badge}
                  </span>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-primary-blue transition-colors mb-1.5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-primary-orange mb-3.5 tracking-wide">
                    {service.subtitle}
                  </p>

                  {/* Technical Description */}
                  <p className="text-slate-900 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Key Feature Checklist */}
                  <div className="space-y-2.5 pt-4.5 border-t border-slate-100 group-hover:border-slate-200/90 transition-colors">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-900 font-medium">
                        <div className="w-4 h-4 rounded-full bg-slate-100 group-hover:bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={11} className={`${service.iconColor}`} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link & Watermark Number */}
                <div className="relative z-10 pt-4.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact ? onOpenContact : () => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-primary-orange group-hover:text-primary-orange transition-colors cursor-pointer"
                  >
                    <span>Request Engineering Scope</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <span className="text-xs font-mono text-slate-900 group-hover:text-slate-900 font-black transition-colors">
                    0{index + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

    
      </div>
          {/* ================= GLOWING LUXURY ENGINEERING CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20  bg-linear-to-r from-[#070b19] via-[#0d1736] to-[#070b19] border border-blue-500/40 p-7 sm:p-9 md:py-8  shadow-[0_25px_60px_-15px_rgba(32,58,150,0.5)] text-white relative overflow-hidden group"
        >
          {/* Ambient Glowing Plasma Orbs inside Banner */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-orange/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-blue/30 rounded-full blur-3xl pointer-events-none" />

          {/* Traveling Laser Accent Line at Top */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-primary-orange via-50% to-transparent pointer-events-none overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_12px_#ffffff]"
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row px-10 items-center justify-between gap-7 lg:gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-8 py-1.5 rounded-full bg-primary-orange/10 border border-primary-orange/80 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(241,130,35,0.3)]">
                <Flame size={14} className="text-primary-orange animate-bounce" />
                <span>Custom Engineering &amp; Turnkey Execution</span>
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight mb-3">
                Have a Complex Industrial or Solar Project?
              </h4>
              <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                Consult with our senior electrical and solar EPC engineers for technical site feasibility, load calculation, and DISCOM synchronization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <button
                onClick={onOpenContact ? onOpenContact : () => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-linear-to-r from-primary-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-primary-orange text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_4px_30px_rgba(241,130,35,0.5)] hover:shadow-[0_6px_45px_rgba(241,130,35,0.8)] hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden border border-orange-400/40"
              >
                <span>Consult Senior Engineer</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-md shadow-sm hover:-translate-y-0.5"
              >
                <FileText size={16} className="text-amber-400" />
                <span>Delivered Projects</span>
              </a>
            </div>
          </div>
        </motion.div>

    </section>
  );
};

export default BusinessVerticals;
