import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      content: "Amrit Electricals completely transformed our home with their solar installation. The team was professional, timely, and left the site spotless. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content: "We hired them for a complete commercial rewiring project. Their attention to safety and detail is unmatched. It's rare to find such dedicated professionals.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Property Developer",
      content: "I have worked with many contractors, but Amrit Electricals stands out for their reliability and quality of materials used. They are my go-to electrical partner.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            What Our <span className="text-primary-blue">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 -ml-4 -mt-4 text-primary-blue/20">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary-orange text-primary-orange" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500 font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary-blue hover:bg-primary-blue hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
