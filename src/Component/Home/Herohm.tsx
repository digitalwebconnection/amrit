import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Herohm: React.FC<HeroProps> = ({ onOpenContact }) => {
  const backgroundImages = [
    "https://amazingarchitecture.com/storage/4571/solar_panel_roof.jpg",
    "https://www.electronicafinance.com/wp-content/uploads/2025/11/Is-the-Government-Really-Covering-the-Installation-Cost-for-Solar-Panel-Systems.docx2_.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJpxgXysy7w_3qzPw1U-2oKlQZ4BwrVjezC1l9uQh0VQ&s=10"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-145 lg:min-h-175 xl:min-h-175 flex items-center pt-10 pb-16 lg:py-10 overflow-hidden bg-slate-950 text-white selection:bg-primary-orange selection:text-white"
    >
      {/* ================= BACKGROUND CAROUSEL WITH CINEMATIC LIGHTING ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            alt="Solar Background"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full object-fill object-center transform"
          />
        </AnimatePresence>

        {/* Multi-Stage Dark Gradient Overlays for Contrast and Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 via-55% to-slate-950/10" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-black/20" />

        {/* Dynamic Sweeping Sunlight Overlay streaming across the images */}
        <motion.div
          animate={{
            x: ['-4%', '6%', '-4%'],
            y: ['-4%', '5%', '-4%'],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_12%,rgba(255,235,160,0.38)_0%,rgba(241,130,35,0.18)_35%,transparent_70%)] pointer-events-none mix-blend-screen"
        />

        {/* Breathing Primary Solar Orange Glow Aura on Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.32, 0.18],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-137.5 h-137.5 bg-linear-to-tr from-primary-orange/35 via-amber-500/20 to-transparent rounded-full blur-[120px]"
        />

        {/* Subtle Secondary Deep Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-1/3 w-112.5 h-112.5 bg-linear-to-br from-blue-600/20 via-sky-500/10 to-transparent rounded-full blur-[130px]"
        />
      </div>

      {/* ================= ANIMATED SUN & MOVING SUNLIGHT ON TOP RIGHT ================= */}
      <div className="absolute -top-10 sm:-top-14 md:-top-16 lg:-top-25 -right-25 z-20 pointer-events-none">
        {/* Broad Ambient Sunlight Glow radiating across the scene */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-36 -left-36 w-125 sm:w-175 lg:w-212.5 h-125 sm:h-175 lg:h-212.5 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 75% 25%, rgba(255, 235, 140, 0.45) 0%, rgba(245, 158, 11, 0.22) 30%, rgba(241, 130, 35, 0.1) 55%, transparent 75%)',
          }}
        />

        {/* Diagonal Moving Sunlight Beams / Shafts */}
        <motion.div
          animate={{
            opacity: [0.25, 0.55, 0.25],
            rotate: [-28, -22, -28],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-12 -left-64 sm:-left-96 w-150 sm:w-212.5 lg:w-262.5 h-112.5 sm:h-162.5 origin-top-right pointer-events-none"
          style={{
            background: 'conic-gradient(from 205deg at 95% 10%, transparent 0deg, rgba(255, 245, 180, 0.3) 14deg, transparent 28deg, rgba(251, 191, 36, 0.22) 42deg, transparent 56deg, rgba(241, 130, 35, 0.15) 75deg, transparent 95deg)',
            filter: 'blur(22px)',
          }}
        />

        {/* Floating Animated Sun Disc & Coronal Flares */}
        <motion.div
          animate={{
            y: [0, 14, -10, 0],
            x: [0, -8, 6, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center"
        >
          {/* Rotating Solar Flare Beams (Clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-7.5 sm:-inset-12.5 pointer-events-none opacity-70"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-amber-300">
              <g stroke="currentColor" strokeWidth="1.5" strokeDasharray="6,8" strokeLinecap="round">
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={100 + 95 * Math.cos((i * Math.PI) / 6)}
                    y2={100 + 95 * Math.sin((i * Math.PI) / 6)}
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  />
                ))}
              </g>
            </svg>
          </motion.div>

          {/* Counter-Rotating Starburst Coronal Rays */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3.75 sm:-inset-7.5 pointer-events-none opacity-50"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-amber-200">
              {[...Array(8)].map((_, i) => (
                <polygon
                  key={i}
                  points="100,20 106,90 100,100 94,90"
                  fill="currentColor"
                  transform={`rotate(${i * 45} 100 100)`}
                  className="opacity-75"
                />
              ))}
            </svg>
          </motion.div>

          {/* Outer Breathing Corona Halo */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.75, 1, 0.75],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-linear-to-tr from-amber-400 via-primary-orange to-yellow-200 blur-xl opacity-85"
          />

          {/* Brilliant Radiant Sun Disc Core */}
          <div className="relative w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 rounded-full bg-linear-to-br from-white via-amber-100 to-amber-400 shadow-[0_0_45px_rgba(255,235,120,0.95),0_0_80px_rgba(241,130,35,0.75)] flex items-center justify-center">
            {/* Ultra-Intense Hot White Core */}
            <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white blur-[2px] shadow-[0_0_25px_rgba(255,255,255,1)]" />
          </div>

          {/* Shimmering Solar Halo Ring */}
          <motion.div
            animate={{
              scale: [0.85, 1.15, 0.85],
              opacity: [0.35, 0.8, 0.35],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-amber-300/40 blur-[0.5px]"
          />
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ON LEFT SIDE ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-4 relative z-10">
        <div className="max-w-4xl flex flex-col items-start">

          {/* Eyebrow Accreditation Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-primary-orange/40 backdrop-blur-xl mb-12 shadow-[0_0_20px_rgba(241,130,35,0.2)] hover:border-primary-orange/60 transition-all cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-orange shadow-[0_0_8px_rgba(241,130,35,0.8)]" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-slate-200">
              <span className="text-primary-orange font-bold">Adani Solar &amp; Polycab Partner</span> // 10+ Years Experience
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-500" />
            <span className="hidden sm:inline-flex text-[10px] uppercase font-bold text-amber-400">
              ISO 9001:2015
            </span>
          </motion.div>

          {/* High-Contrast Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="text-4xl sm:text-5xl lg:text-[3.65rem] font-serif font-bold leading-[1.12] mb-5 text-white tracking-tight drop-shadow-md"
          >
            Residential <span className=' font-mono
            '>&</span> Commercial <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-primary-orange to-amber-200 drop-shadow-[0_2px_24px_rgba(241,130,35,0.35)]">
              Complete Solar Solutions
            </span>
          </motion.h1>

          {/* Generous Body Typography */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg text-white mb-6 max-w-2xl leading-[1.75] font-light drop-shadow-sm"
          >
            We drive the transition to sustainable, reliable &amp; affordable clean energy. Amrit Electricals provides high-efficiency Adani Solar PV panels, Polycab on-grid inverters, ACDB/DCDB, and complete turnkey 1 kW–25 kW Solar Kits for homes and businesses.
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            {/* Primary Button */}
            <button
              onClick={onOpenContact}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-primary-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-primary-orange text-white font-bold text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-[0_4px_25px_rgba(241,130,35,0.45)] hover:shadow-[0_6px_35px_rgba(241,130,35,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden border border-orange-400/40"
            >
              {/* Shimmer light sweep on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform ease-out pointer-events-none" />

              <span className="relative z-10">Get A Quote</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>

            {/* Secondary Glassmorphic Button */}
            <a
              href="#projects"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900/60 hover:bg-slate-800/80 text-white font-semibold text-xs uppercase tracking-[0.14em] rounded-sm transition-all duration-300 border border-white/15 hover:border-primary-orange/50 backdrop-blur-md shadow-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Products &amp; Kits</span>
              <ChevronRight size={16} className="text-slate-400 group-hover:text-primary-orange group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

          {/* Key Performance Metrics Bar (under CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.52 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80 w-full max-w-2xl"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-primary-orange font-mono font-bold text-xl sm:text-2xl lg:text-3xl">
                <span>90+</span>
                <span className="text-sm font-sans font-semibold text-amber-400">MW</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                Solar Panels Supplied
              </span>
            </div>

            <div className="flex flex-col border-l border-slate-800/80 pl-4 sm:pl-6">
              <div className="flex items-center gap-1 text-emerald-400 font-mono font-bold text-xl sm:text-2xl lg:text-3xl">
                <span>75+</span>
                <span className="text-sm font-sans font-semibold text-emerald-300">MW</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                Inverters Supplied
              </span>
            </div>

            <div className="flex flex-col border-l border-slate-800/80 pl-4 sm:pl-6">
              <div className="flex items-center gap-1 text-amber-400 font-mono font-bold text-xl sm:text-2xl lg:text-3xl">
                <span>500+</span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">
                Turnkey Solar Kits
              </span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Herohm;

