import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, CheckCircle, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "SHEKHAR GALBALE",
      role: "CLIENT REVIEW",
      content: "Great experience and impressive product. It was a very professional and technically competent job from the whole team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
      location: "Commercial Rooftop Solar"
    },
    {
      name: "RAJESH SHRIKHANDE",
      role: "COMMERCIAL CLIENT",
      content: "Best Solar Products Availability, Under one roof. Prompt supply and genuine authorized quality.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
      location: "Industrial Solar Sizing"
    },
    {
      name: "NILESH HINGNE",
      role: "FOUNDER & CEO",
      content: "Well organised Technical staff, Service oriented. Reliable execution and excellent turnaround times.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
      location: "Turnkey EPC Project"
    },
    {
      name: "AMIT BHATTAD",
      role: "SYSTEM INTEGRATOR",
      content: "Complete Solar didn't waste any time and got right to it like they said they were going to do. Excellent communication and support.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
      location: "Authorized Kit Supply"
    },
    {
      name: "PAVAN MEDISETTI",
      role: "LOCAL GUIDE",
      content: "One stop solution for Solar power systems. Quality with best pricing and authentic Tier-1 panels.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      location: "Residential Solar PV"
    },
    {
      name: "VIJAY GOVARTHAN",
      role: "SOLAR INSTALLER",
      content: "Purchased Adani Solar Panels and Polycab Junction boxes. On time delivery and competitive pricing. Thanks.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      location: "OEM Supply & BOS"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
      position: 'absolute' as const
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      position: 'relative' as const
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
      position: 'absolute' as const
    })
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.08, filter: "brightness(0.8)" },
    center: { opacity: 1, scale: 1, filter: "brightness(1)" },
    exit: { opacity: 0, scale: 0.96, filter: "brightness(0.8)" }
  };

  const barHeights = [20, 40, 15, 60, 30, 10, 50, 40, 25, 70, 20, 55, 35, 15, 45, 80, 25, 65, 45, 15, 50, 30];

  return (
    <section 
      id="testimonials" 
      className="bg-[#181818] relative flex flex-col justify-between overflow-hidden selection:bg-primary-orange selection:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Solar Background Image with subtle breathing zoom */}
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920')" }}
      />

      {/* Ambient Radial Floating Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#F18223]/25 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#203A96]/30 rounded-full blur-[100px] pointer-events-none z-0"
      />

      {/* Background Graphic Equalizer Bars with Smooth Wave Motion */}
      <div className="absolute bottom-12 left-0 w-full lg:w-1/2 h-64 flex items-end gap-2 px-8 z-0 overflow-hidden pointer-events-none opacity-40">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            animate={{
              height: [
                `${height}%`,
                `${Math.min(95, height + (i % 2 === 0 ? 25 : 15))}%`,
                `${Math.max(10, height - (i % 3 === 0 ? 20 : 10))}%`,
                `${height}%`
              ]
            }}
            transition={{
              duration: 3 + (i % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1
            }}
            className="w-6 md:w-8 bg-linear-to-t from-[#1e1e1e] via-[#282828] to-[#363636] rounded-t-xs shrink-0"
          />
        ))}
      </div>
      
      {/* Animated Circular Wireframe Accent with Slow Orbit */}
      <div className="absolute bottom-16 left-[25%] w-87.5 h-87.5 rounded-full border border-white/5 pointer-events-none z-0 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border-t border-dashed border-white/15 relative"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-orange shadow-[0_0_10px_#F18223]" />
        </motion.div>
      </div>

      <div className="w-full relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:h-130">
          
          {/* Left Content Area */}
          <div className="lg:w-1/2 px-6 md:px-10 py-8 lg:py-14 flex flex-col justify-center relative z-10 lg:pl-12">
            
            {/* Custom Quote Icon with Animated Floating Glow */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 text-[#ffffff] relative inline-block w-fit"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_4px_15px_rgba(241,130,35,0.25)]">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </motion.div>

            <div className="relative w-full overflow-visible min-h-55">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {/* Rating Stars with Staggered Pop Animation */}
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.07, type: "spring", stiffness: 350 }}
                      >
                        <Star className="w-4.5 h-4.5 fill-[#F18223] text-[#F18223] drop-shadow-[0_0_8px_rgba(241,130,35,0.4)]" />
                      </motion.div>
                    ))}
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2 flex items-center gap-1">
                      <Sparkles size={11} className="text-amber-400" />
                      Verified Review
                    </span>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-[#ffffff] text-lg md:text-[20px] leading-[1.8] font-light mb-8 max-w-lg">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  {/* Author Info with Accent Glow Pill */}
                  <div className="relative py-2 mt-4 flex items-center justify-between max-w-lg">
                    <div>
                      <h4 className="text-white font-bold tracking-wider text-sm md:text-base mb-1 uppercase flex items-center gap-2">
                        <span>{testimonials[currentIndex].name}</span>
                        <CheckCircle size={14} className="text-primary-orange" />
                      </h4>
                      <p className="text-[#999999] text-xs font-bold tracking-widest uppercase">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {testimonials[currentIndex].location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls & Animated Indicator Dots */}
            <div className="flex items-center gap-6 mt-14 lg:mt-20 relative z-20">
              {/* Prev / Next Circular Buttons */}
              <div className="flex gap-3">
                <motion.button 
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 rounded-full bg-[#d46337] hover:bg-[#b0522d] flex items-center justify-center text-white transition-all shadow-[0_4px_20px_rgba(212,99,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,99,55,0.6)] cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-12 h-12 rounded-full bg-[#d46337] hover:bg-[#b0522d] flex items-center justify-center text-white transition-all shadow-[0_4px_20px_rgba(212,99,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,99,55,0.6)] cursor-pointer"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>

              {/* Animated Interactive Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className="relative py-2 px-0.5 cursor-pointer focus:outline-none"
                  >
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                          ? "w-8 bg-[#F18223] shadow-[0_0_10px_#F18223]" 
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Numerical Slide Counter */}
              <span className="text-xs font-mono font-bold text-slate-500 hidden sm:inline-block">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/2 h-112.5 lg:h-auto relative z-10 pt-0">
            {/* Pulsing Glow Effect Behind Image Arch */}
            <motion.div 
              animate={{
                opacity: [0.2, 0.35, 0.2],
                scale: [0.98, 1.03, 0.98]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 w-full lg:w-[70%] h-full lg:h-[90%] bg-[#d46337] blur-[80px] rounded-b-[150px] lg:rounded-b-[250px] pointer-events-none"
            />

            {/* Glowing Accent Border & Arch Container */}
            <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full lg:h-[98%] bg-[#2a2a2a] rounded-b-[150px] lg:rounded-b-[250px] overflow-hidden shadow-[0_0_40px_rgba(212,99,55,0.2)] transition-all duration-700 hover:shadow-[0_0_60px_rgba(212,99,55,0.35)] border border-white/10 group">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient vignette for rich contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#181818]/80 via-transparent to-[#181818]/20" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Client Pill on the image arch */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-6 inset-x-6 sm:inset-x-8 bg-black/60 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl flex items-center justify-between text-white shadow-xl pointer-events-none"
              >
                <div>
                  <p className="text-[11px] font-bold text-primary-orange uppercase tracking-wider">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-xs font-semibold text-slate-100">
                    {testimonials[currentIndex].name}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  <Star size={12} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold font-mono">5.0</span>
                </div>
              </motion.div>

            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom thick dark bar with traveling laser shimmer accent */}
      <div className="h-10 bg-[#010e3be5] border-t border-[#333333] w-full relative z-0 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 inset-y-0 w-1/3 bg-linear-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Testimonials;
