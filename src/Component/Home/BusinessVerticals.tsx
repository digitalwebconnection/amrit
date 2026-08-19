
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
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
  Layers,
  Check
} from 'lucide-react';

interface ServiceItem {
  id: string;
  category: string;
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
  accentBorder: string;
}

const services: ServiceItem[] = [
  {
    id: "solar-epc",
    category: "solar",
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
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    glowColor: "rgba(241, 130, 35, 0.45)",
    iconBg: "bg-orange-500/10 border-orange-500/30",
    iconColor: "text-primary-orange",
    borderHover: "hover:border-primary-orange/60 hover:shadow-[0_20px_50px_-10px_rgba(241,130,35,0.3)]",
    accentBorder: "#F18223"
  },
  {
    id: "solar-kits",
    category: "solar",
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
    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
    glowColor: "rgba(32, 58, 150, 0.45)",
    iconBg: "bg-blue-600/10 border-blue-600/30",
    iconColor: "text-primary-blue",
    borderHover: "hover:border-primary-blue/60 hover:shadow-[0_20px_50px_-10px_rgba(32,58,150,0.3)]",
    accentBorder: "#203A96"
  },
  {
    id: "inverters",
    category: "equipment",
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
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    glowColor: "rgba(99, 102, 241, 0.45)",
    iconBg: "bg-indigo-500/10 border-indigo-500/30",
    iconColor: "text-indigo-600",
    borderHover: "hover:border-indigo-500/60 hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.3)]",
    accentBorder: "#6366F1"
  },
  {
    id: "energy-meters",
    category: "equipment",
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
    gradient: "from-rose-500/20 via-amber-500/10 to-transparent",
    glowColor: "rgba(244, 63, 94, 0.45)",
    iconBg: "bg-rose-500/10 border-rose-500/30",
    iconColor: "text-rose-600",
    borderHover: "hover:border-rose-500/60 hover:shadow-[0_20px_50px_-10px_rgba(244,63,94,0.3)]",
    accentBorder: "#F43F5E"
  },
  {
    id: "bos-protection",
    category: "bos",
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
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    glowColor: "rgba(20, 184, 166, 0.45)",
    iconBg: "bg-teal-500/10 border-teal-500/30",
    iconColor: "text-teal-600",
    borderHover: "hover:border-teal-500/60 hover:shadow-[0_20px_50px_-10px_rgba(20,184,166,0.3)]",
    accentBorder: "#14B8A6"
  },
  {
    id: "engineering-support",
    category: "bos",
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
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.45)",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    iconColor: "text-emerald-600",
    borderHover: "hover:border-emerald-500/60 hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.3)]",
    accentBorder: "#10B981"
  }
];

const categories = [
  { id: "all", label: "All 6 Verticals", icon: Layers },
  { id: "solar", label: "Solar EPC & Turnkey KITs", icon: Sun },
  { id: "equipment", label: "Inverters & DLMS Meters", icon: Cpu },
  { id: "bos", label: "BOS, Protection & Support", icon: Wrench },
];

interface BusinessVerticalsProps {
  onOpenContact?: () => void;
}

// ----------------------------------------------------
// Interactive Spotlight Card Component
// ----------------------------------------------------
interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onOpenContact?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onOpenContact }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  // Mouse spotlight coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${smoothX}px ${smoothY}px, ${service.glowColor}, transparent 80%)`;

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -7 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      className={`group relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 ${service.borderHover} p-7 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default`}
    >
      {/* 1. Dynamic Cursor-Follow Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: spotlightBg
        }}
      />

      {/* 2. Top Edge Glow Line on Hover */}
      <div 
        className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-linear-to-r from-transparent via-current to-transparent"
        style={{ color: service.accentBorder }}
      />

      {/* 3. Ambient Corner Glow */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700 pointer-events-none"
        style={{ background: service.glowColor }}
      />

      {/* 4. Large Background Watermark Index */}
      <div className="absolute right-3 bottom-1 select-none pointer-events-none text-slate-100/90 font-mono font-black text-7xl sm:text-8xl tracking-tighter transition-all duration-500 group-hover:scale-105 group-hover:text-white/90  group-hover:translate-x-1 group-hover:-translate-y-1">
        0{index + 1}
      </div>

      {/* 5. Shimmer Sweep Effect across Card on Hover */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Top Section */}
      <div className="relative z-10 mb-5">
        {/* Top Row: Icon Pod + Metric Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          {/* Glowing Icon Pod */}
          <div className="relative">
            {/* Animated Halo ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xs transition-opacity duration-300 pointer-events-none bg-linear-to-tr from-primary-orange/40 via-transparent to-primary-blue/40"
            />
            
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className={`relative w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center ${service.iconColor} shadow-md group-hover:shadow-lg transition-all duration-300`}
            >
              <Icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
            </motion.div>
          </div>

          {/* Metric Chip */}
          <div className="text-right bg-slate-50/90 group-hover:bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-2xs group-hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-end gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-black font-mono text-slate-900 leading-none group-hover:text-primary-blue transition-colors">
                {service.metric}
              </p>
            </div>
            <p className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mt-1">
              {service.metricLabel}
            </p>
          </div>
        </div>

        {/* Category Pill Badge with Sparkle */}
        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100/90 group-hover:bg-white text-slate-700 border border-slate-200/80 mb-3.5 shadow-2xs group-hover:shadow-xs transition-all">
          <Sparkles size={12} className={`${service.iconColor} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`} />
          {service.badge}
        </span>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 group-hover:text-primary-blue transition-colors duration-200 mb-1.5 leading-tight">
          {service.title}
        </h3>
        <p className="text-xs font-bold text-primary-orange mb-3 tracking-wide flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-primary-orange inline-block" />
          {service.subtitle}
        </p>

        {/* Technical Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5">
          {service.description}
        </p>

        {/* Key Feature Checklist with Interactive Micro-Hover */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 group-hover:border-slate-200/80 transition-colors">
          {service.features.map((feat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center gap-2.5 text-xs text-slate-700 font-medium group/item cursor-default"
            >
              <div className="w-4.5 h-4.5 rounded-full bg-slate-100 group-hover/item:bg-white border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs group-hover/item:border-primary-orange/50 transition-colors">
                <CheckCircle2 size={12} className={`${service.iconColor} transition-transform duration-200 group-hover/item:scale-110`} />
              </div>
              <span className="group-hover/item:text-slate-900 transition-colors">{feat}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Action Link & Watermark Number */}
      <div className="relative z-10 pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={onOpenContact ? onOpenContact : () => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-primary-orange group-hover:text-primary-orange transition-colors cursor-pointer group/btn"
        >
          <span>Request Engineering Scope</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-200 text-primary-orange" />
        </button>

       
      </div>
    </motion.div>
  );
};

// ----------------------------------------------------
// Main Business Verticals Section
// ----------------------------------------------------
export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="relative py-12 lg:py-20 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden selection:bg-primary-orange selection:text-white">
      
      {/* Background Decorative Animated Floating Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Blue Orb */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-primary-blue/8 rounded-full blur-3xl"
        />

        {/* Soft Orange Orb */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 -right-32 w-96 h-96 bg-primary-orange/8 rounded-full blur-3xl"
        />

        {/* Circuit / Tech Dot Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#203a96_1px,transparent_1px)] bg-size-[28px_28px] opacity-[0.035]" />
      </div>

      {/* Top & Bottom Accent Shimmer Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-orange/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary-blue/30 to-transparent pointer-events-none" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-4 lg:mb-10">
          
          {/* Eyebrow Pill Badge with Animated Beacon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/90 border border-primary-blue/20 shadow-[0_4px_20px_rgba(32,58,150,0.08)] mb-5 backdrop-blur-md"
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
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5"
          >
            Transforming Infrastructure Across <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_15px_rgba(241,130,35,0.2)]">
              Diverse Business Verticals
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-slate-900 text-sm sm:text-base md:text-lg max-w-6xl mx-auto font-normal leading-relaxed"
          >
            From high-yield turnkey solar generation to heavy-duty HT/LT electrical engineering and smart automation, we deliver certified high-efficiency solutions built for multi-decade reliability.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
          >
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "text-white shadow-[0_6px_20px_rgba(32,58,150,0.3)]"
                      : "bg-white/80 hover:bg-white text-slate-700 hover:text-primary-blue border border-slate-300/80 shadow-2xs"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeVerticalTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-linear-to-r from-primary-blue to-blue-700"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <CatIcon size={14} className={isActive ? "text-amber-300" : "text-slate-500"} />
                    <span>{cat.label}</span>
                    {isActive && (
                      <Check size={13} className="text-white" />
                    )}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ================= 6 GLOWING ULTRA-PREMIUM CARDS ================= */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onOpenContact={onOpenContact}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= GLOWING LUXURY ENGINEERING CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 lg:mt-18 rounded-2xl bg-linear-to-r from-[#070b19] via-[#0d1736] to-[#070b19] border border-blue-500/30 p-7 sm:p-9 md:py-10 shadow-[0_25px_60px_-15px_rgba(32,58,150,0.5)] text-white relative overflow-hidden group"
        >
          {/* Ambient Glowing Plasma Orbs inside Banner */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-primary-orange/30 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-blue/40 rounded-full blur-3xl pointer-events-none"
          />

          {/* Traveling Laser Accent Line at Top */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-primary-orange via-50% to-transparent pointer-events-none overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_15px_#ffffff]"
            />
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row px-2 sm:px-4 lg:px-6 items-center justify-between gap-7 lg:gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-orange/15 border border-primary-orange/70 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(241,130,35,0.25)]">
                <Flame size={14} className="text-primary-orange animate-bounce" />
                <span>Custom Engineering &amp; Turnkey Execution</span>
              </div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight mb-3">
                Have a Complex Industrial or Solar Project?
              </h4>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                Consult with our senior electrical and solar EPC engineers for technical site feasibility, load calculation, and DISCOM synchronization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenContact ? onOpenContact : () => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto relative group/btn inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-linear-to-r from-primary-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-primary-orange text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_4px_30px_rgba(241,130,35,0.5)] hover:shadow-[0_6px_45px_rgba(241,130,35,0.8)] cursor-pointer overflow-hidden border border-orange-400/40"
              >
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent ease-out" />
                <span className="relative z-10">Consult Senior Engineer</span>
                <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-md shadow-sm"
              >
                <FileText size={16} className="text-amber-400" />
                <span>Delivered Projects</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BusinessVerticals;
