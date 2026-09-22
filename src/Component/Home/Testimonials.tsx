import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "SHEKHAR GALBALE",
      role: "CLIENT REVIEW",
      content: "Great experience and impressive product. It was a very professional and technically competent job from the whole team.",
      rating: 5,
      image: "/images/testimonials/client_galbale.webp",
      location: "Commercial Rooftop Solar"
    },
    {
      name: "RAJESH SHRIKHANDE",
      role: "COMMERCIAL CLIENT",
      content: "Best Solar Products Availability, Under one roof. Prompt supply and genuine authorized quality.",
      rating: 5,
      image: "/images/testimonials/client_shrikhande.webp",
      location: "Industrial Solar Sizing"
    },
    {
      name: "NILESH HINGNE",
      role: "FOUNDER & CEO",
      content: "Well organised Technical staff, Service oriented. Reliable execution and excellent turnaround times.",
      rating: 5,
      image: "/images/testimonials/client_hingne.webp",
      location: "Turnkey EPC Project"
    },
    {
      name: "AMIT BHATTAD",
      role: "SYSTEM INTEGRATOR",
      content: "Complete Solar didn't waste any time and got right to it like they said they were going to do. Excellent communication and support.",
      rating: 5,
      image: "/images/testimonials/client_bhattad.webp",
      location: "Authorized Kit Supply"
    },
    {
      name: "PAVAN MEDISETTI",
      role: "LOCAL GUIDE",
      content: "One stop solution for Solar power systems. Quality with best pricing and authentic Tier-1 panels.",
      rating: 5,
      image: "/images/testimonials/client_medisetti.webp",
      location: "Residential Solar PV"
    },
    {
      name: "VIJAY GOVARTHAN",
      role: "SOLAR INSTALLER",
      content: "Purchased Adani Solar Panels and Polycab Junction boxes. On time delivery and competitive pricing. Thanks.",
      rating: 5,
      image: "/images/testimonials/client_govarthan.webp",
      location: "OEM Supply & BOS"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="bg-slate-900 text-white py-10 lg:py-14 relative border-b border-slate-800"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* Left Content */}
          <div className="lg:w-7/12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Verified Client Reviews
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-orange text-primary-orange" />
              ))}
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2">
                5.0 Rating
              </span>
            </div>

            {/* Quote Content */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif font-light leading-relaxed text-slate-100 mb-8 min-h-24">
              "{current.content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-6">
              <div>
                <h4 className="text-white font-bold tracking-wider text-base uppercase flex items-center gap-2">
                  <span>{current.name}</span>
                  <CheckCircle size={15} className="text-primary-orange" />
                </h4>
                <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase mt-0.5">
                  {current.role} • {current.location}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="w-11 h-11 rounded-full bg-primary-orange hover:bg-orange-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-5/12 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-80 sm:h-96">
              <img
                src={current.image}
                alt={current.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 p-3 rounded-xl flex items-center justify-between text-white">
                <div>
                  <p className="text-xs font-bold text-primary-orange uppercase tracking-wider">
                    {current.role}
                  </p>
                  <p className="text-xs font-medium text-slate-200">
                    {current.name}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
