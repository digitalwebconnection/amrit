import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Quote,
  Building2,
  Home,
  Wrench,
  Factory
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  icon: React.ElementType;
  content: string;
  rating: number;
  image: string;
  initials: string;
  avatarBg: string;
  date: string;
}

export const Testimonials: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: "shekhar",
      name: "Shekhar Galbale",
      role: "Commercial Client",
      location: "Pune, MH",
      projectType: "50 kW Rooftop Solar",
      icon: Building2,
      content: "Great experience and impressive product quality. It was a very professional and technically competent job from the whole team. Completed the installation and net-metering on time.",
      rating: 5,
      image: "/images/testimonials/client_galbale.webp",
      initials: "SG",
      avatarBg: "from-blue-600 to-indigo-700",
      date: "Verified Installation"
    },
    {
      id: "rajesh",
      name: "Rajesh Shrikhande",
      role: "Industrial Client",
      location: "Chakan MIDC, Pune",
      projectType: "Industrial Solar Plant",
      icon: Factory,
      content: "Best solar products availability under one roof. Tier-1 panels and authorized Polycab accessories delivered with genuine manufacturer warranties and complete test reports.",
      rating: 5,
      image: "/images/testimonials/client_shrikhande.webp",
      initials: "RS",
      avatarBg: "from-orange-500 to-amber-600",
      date: "Industrial EPC"
    },
    {
      id: "nilesh",
      name: "Nilesh Hingne",
      role: "Founder & CEO",
      location: "Nashik, MH",
      projectType: "Turnkey EPC Project",
      icon: Building2,
      content: "Well organised technical staff and very service oriented. Reliable execution, transparent documentation, and excellent turnaround times for our solar plant.",
      rating: 5,
      image: "/images/testimonials/client_hingne.webp",
      initials: "NH",
      avatarBg: "from-emerald-600 to-teal-700",
      date: "Turnkey Project"
    },
    {
      id: "amit",
      name: "Amit Bhattad",
      role: "System Integrator",
      location: "Aurangabad, MH",
      projectType: "Authorized Kit Supply",
      icon: Wrench,
      content: "Amrit Electricals delivered exactly what was promised without delay. Excellent technical support, transparent pricing, and fast dispatch of all solar equipment.",
      rating: 5,
      image: "/images/testimonials/client_bhattad.webp",
      initials: "AB",
      avatarBg: "from-blue-500 to-cyan-600",
      date: "Authorized Supply"
    },
    {
      id: "pavan",
      name: "Pavan Medisetti",
      role: "Homeowner",
      location: "PCMC, Pune",
      projectType: "5 kW Residential Solar",
      icon: Home,
      content: "One stop solution for solar power systems. Quality components with best pricing and authentic Tier-1 panels. Our monthly electricity bill is now practically zero!",
      rating: 5,
      image: "/images/testimonials/client_medisetti.webp",
      initials: "PM",
      avatarBg: "from-purple-600 to-indigo-600",
      date: "Residential PV"
    },
    {
      id: "vijay",
      name: "Vijay Govarthan",
      role: "Solar Installer",
      location: "Thane, MH",
      projectType: "OEM Supply & BOS",
      icon: Wrench,
      content: "Purchased Adani Solar Panels and Polycab distribution boxes. On-time delivery, competitive bulk pricing, and great assistance from their engineering desk.",
      rating: 5,
      image: "/images/testimonials/client_govarthan.webp",
      initials: "VG",
      avatarBg: "from-rose-500 to-orange-600",
      date: "OEM Supply"
    },
    {
      id: "sachin",
      name: "Sachin Patil",
      role: "Electrical Contractor",
      location: "Kolhapur, MH",
      projectType: "Substation & Protection BOS",
      icon: Factory,
      content: "Superb product quality for all balance-of-system equipment. Certified ACDB/DCDB boxes, chemical earthing, and lightning arresters always ready in stock.",
      rating: 5,
      image: "",
      initials: "SP",
      avatarBg: "from-amber-500 to-orange-600",
      date: "Contractor Review"
    },
    {
      id: "mahendra",
      name: "Mahendra Deshmukh",
      role: "Warehouse Facility Head",
      location: "Bhiwandi, MH",
      projectType: "100 kW Rooftop EPC",
      icon: Building2,
      content: "Seamless process from design to grid synchronization. The engineering team ensured full safety compliance and our monthly facility energy costs dropped by over 70%.",
      rating: 5,
      image: "",
      initials: "MD",
      avatarBg: "from-teal-600 to-emerald-700",
      date: "Commercial EPC"
    }
  ];

  // Tripled dataset for seamless infinite loop (Set 1, Set 2 [middle], Set 3)
  const infiniteTestimonials = [
    ...testimonials.map((t) => ({ ...t, uniqueKey: `set1-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, uniqueKey: `set2-${t.id}` })),
    ...testimonials.map((t) => ({ ...t, uniqueKey: `set3-${t.id}` }))
  ];

  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Set initial scroll position to the middle set (Set 2) for seamless infinite looping
  useEffect(() => {
    const initScroll = () => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (card && card.offsetWidth > 0) {
        const cardWidth = card.offsetWidth + 24;
        const setWidth = testimonials.length * cardWidth;
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = setWidth;
        container.style.scrollBehavior = 'smooth';
      }
    };

    initScroll();
    const timer = setTimeout(initScroll, 50);
    return () => {
      clearTimeout(timer);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [testimonials.length]);

  // Keep scroll aligned on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const card = container.firstElementChild as HTMLElement;
      if (!card) return;
      const cardWidth = card.offsetWidth + 24;
      const setWidth = testimonials.length * cardWidth;
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = setWidth + activeIndex * cardWidth;
      container.style.scrollBehavior = 'smooth';
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, testimonials.length]);

  // Slide one card forward or backward with seamless infinite loop
  const slideOne = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 380;
    const setWidth = testimonials.length * cardWidth;

    if (direction === 'next') {
      // If we have scrolled into the 3rd set, seamlessly reset back by one set first
      if (container.scrollLeft >= 2 * setWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft -= setWidth;
      }
      container.style.scrollBehavior = 'smooth';
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    } else {
      // If we have scrolled into the 1st set, seamlessly reset forward by one set first
      if (container.scrollLeft <= cardWidth + 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft += setWidth;
      }
      container.style.scrollBehavior = 'smooth';
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  // Auto-slide every 3.8 seconds when not paused by mouse hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      slideOne('next');
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Track active slide index & normalize position seamlessly after scrolling settles
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    if (!firstCard || firstCard.offsetWidth === 0) return;

    const cardWidth = firstCard.offsetWidth + 24;
    const setWidth = testimonials.length * cardWidth;
    const currentScroll = container.scrollLeft;

    const rawIndex = Math.round(currentScroll / cardWidth);
    const normalizedIndex = ((rawIndex % testimonials.length) + testimonials.length) % testimonials.length;
    setActiveIndex(normalizedIndex);

    // Debounce normalization so smooth scrolling completes naturally before silent adjustment
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (!sliderRef.current) return;
      const c = sliderRef.current;
      const cur = c.scrollLeft;
      if (cur >= 2 * setWidth - 10) {
        c.style.scrollBehavior = 'auto';
        c.scrollLeft = cur - setWidth;
        requestAnimationFrame(() => {
          if (sliderRef.current) sliderRef.current.style.scrollBehavior = 'smooth';
        });
      } else if (cur <= cardWidth * 2) {
        c.style.scrollBehavior = 'auto';
        c.scrollLeft = cur + setWidth;
        requestAnimationFrame(() => {
          if (sliderRef.current) sliderRef.current.style.scrollBehavior = 'smooth';
        });
      }
    }, 150);
  };

  return (
    <section
      id="testimonials"
      className="py-16 lg:py-14 bg-white text-slate-900 relative border-b border-slate-200 overflow-hidden  "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Ambience / Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-6 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Verified Badge */}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              What Our <span className="text-primary-orange">Clients Say</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real feedback from commercial enterprises, industrial facilities, and solar installers powered by Amrit Electricals.
            </p>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">

            <div className="flex items-center gap-2">
              <button
                onClick={() => slideOne('prev')}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-primary-orange hover:border-primary-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => slideOne('next')}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-primary-orange hover:border-primary-orange text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= SLIDING REVIEW CARDS TRACK ================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteTestimonials.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.uniqueKey}
                className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-white hover:bg-slate-50/50 border border-blue-600 hover:border-primary-orange/60 rounded-lg p-6 sm:p-7 transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-orange-500/10 flex flex-col justify-between"
              >
                {/* Top Row: Stars + Project Tag */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Verified Badge */}
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                      <CheckCircle2 size={12} className="text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium mb-4">
                    <IconComponent size={13} className="text-primary-orange shrink-0" />
                    <span>{item.projectType}</span>
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <Quote
                      size={28}
                      className="text-slate-200 absolute -top-2 -left-1 -z-10 group-hover:text-orange-200/60 transition-colors"
                    />
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-4">
                      "{item.content}"
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Reviewer Details */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  {/* Avatar with fallback */}
                  <div className="relative shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 group-hover:border-primary-orange transition-colors"
                        onError={(e) => {
                          // Fallback to initials if image path fails
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                            fallback.classList.add('flex');
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}

                    <div
                      className={`w-12 h-12 rounded-full bg-linear-to-br ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center border-2 border-white shadow-xs ${item.image ? 'hidden' : 'flex'
                        }`}
                    >
                      {item.initials}
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="min-w-0 flex-1">
                    <h4 className="text-slate-900 font-bold text-sm sm:text-base truncate group-hover:text-primary-orange transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-xs font-medium truncate mt-0.5">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

export default Testimonials;
