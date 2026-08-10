import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight"
          >
            Powering the Future of <span className="text-primary-blue">Solar & Clean Energy</span>
            <div className="w-32 h-1 bg-primary-orange rounded-full items-center justify-center mx-auto mt-2"></div>
          </motion.h2>
        </div>
      </div>

      {/* Full Bleed Video Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full aspect-video md:aspect-21/7 bg-slate-900 group cursor-pointer overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
      >
        {/* Note: In a real app you might want to use an onClick handler to open a modal with the video, or just play inline. */}
        <video
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/04/83861-584742616_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20 shadow-2xl">
            <Play className="w-4 h-4 text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
