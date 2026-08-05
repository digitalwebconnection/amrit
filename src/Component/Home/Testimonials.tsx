import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "RAJESH KUMAR",
      role: "RESIDENTIAL CLIENT",
      content: "Amrit Electricals completely transformed our home with their solar installation. We opted for Adani Solar panels, and the team was professional, timely, and left the site spotless. Our electricity bills have dropped significantly!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "PRIYA SHARMA",
      role: "FACTORY OWNER",
      content: "We hired them for a complete commercial rewiring and a 50kW industrial solar setup. Their attention to safety protocols and detail is unmatched. It's rare to find such dedicated professionals in the EPC space.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "VIKRAM SINGH",
      role: "PROPERTY DEVELOPER",
      content: "I have worked with many contractors, but Amrit Electricals stands out for their reliability and the quality of materials used. They handle all our residential project electricals and solar integrations flawlessly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "AMIT PATEL",
      role: "WAREHOUSE MANAGER",
      content: "The 100kW commercial solar installation was executed perfectly. The project was completed ahead of schedule, and the energy generation is exactly as promised. Highly recommend their commercial EPC services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "SUNITA VERMA",
      role: "HOMEOWNER",
      content: "Excellent service! They installed a Microtek Solar Inverter system for our house. The technicians were very knowledgeable, explained the whole system to us, and the after-sales support has been incredibly responsive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "RAHUL DESAI",
      role: "HOSPITAL ADMINISTRATOR",
      content: "In a hospital, reliable power is critical. Amrit Electricals handled our high-tension wiring and backup power systems with absolute precision. We trust them completely with our electrical infrastructure.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
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
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      position: 'absolute' as const
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'relative' as const
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      position: 'absolute' as const
    })
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 }
  };

  return (
    <section 
      id="testimonials" 
      className="bg-[#181818] relative flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Solar Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920')" }}
      />

      {/* Background Graphic Simulation (Bar charts) */}
      <div className="absolute bottom-12 left-0 w-full lg:w-1/2 h-64 flex items-end gap-2 px-8 z-0 overflow-hidden">
        {[20, 40, 15, 60, 30, 10, 50, 40, 25, 70, 20, 55, 35, 15, 45, 80, 25, 65, 45, 15, 50, 30].map((height, i) => (
          <div key={i} className="w-6 md:w-8 bg-[#252525] flex-shrink-0" style={{ height: `${height}%` }} />
        ))}
      </div>
      
      {/* Circular wireframe accent */}
      <div className="absolute bottom-16 left-[25%] w-87.5 h-[350px] rounded-full border border-white/5 pointer-events-none z-0 hidden lg:block" />

      <div className="w-full relative z-10 container mx-auto">
        <div className="flex flex-col lg:flex-row lg:h-130">
          
          {/* Left Content Area */}
          <div className="lg:w-1/2 px-6 md:px-10 py-8 lg:py-14 flex flex-col justify-center relative z-10 lg:pl-12">
            
            {/* Custom Quote Icon */}
            <div className="mb-4 text-[#ffffff]">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>

            <div className="relative w-full overflow-visible min-h-[220px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Rating */}
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-[#ffffff] text-lg md:text-[20px] leading-[1.8] font-light mb-10 max-w-lg">
                    {testimonials[currentIndex].content}
                  </p>
                  
                  {/* Author Info with unique lines */}
                  <div className="relative py-2 mt-4">
                  
                    <h4 className="text-white font-bold tracking-wider text-sm md:text-base mb-1 uppercase">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#666666] text-xs font-bold tracking-widest uppercase">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-4 mt-16 lg:mt-24 relative z-20">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#d46337] hover:bg-[#b0522d] flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#d46337] hover:bg-[#b0522d] flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:w-1/2 h-112.5 lg:h-auto relative z-10 pt-0">
            {/* Glow Effect Behind Image */}
            <div className="absolute top-10 right-0 w-full lg:w-[70%] h-full lg:h-[90%] bg-[#d46337] opacity-20 blur-[80px] rounded-b-[150px] lg:rounded-b-[250px] pointer-events-none transition-all duration-700" />

            <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full lg:h-[98%] bg-[#2a2a2a] rounded-b-[150px] lg:rounded-b-[250px] overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-shadow duration-700 hover:shadow-[0_0_60px_rgba(212,175,55,0.25)]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle overlay for better blending */}
                  <div className="absolute inset-0 bg-[#181818]/10"></div>
                </motion.div>
              </AnimatePresence>
              
             
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom thick dark bar */}
      <div className="h-10 bg-[#010e3be5] border-t border-[#333333] w-full relative z-0"></div>
    </section>
  );
};

export default Testimonials;
