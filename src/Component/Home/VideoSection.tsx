import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setHasStarted] = useState(false);

  // Lazy load and play video only when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          }).catch(() => {
            // Autoplay may be restricted by browser policy
          });
        } else if (videoRef.current && !entry.isIntersecting) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-8 lg:py-12 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-blue/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Full Bleed Video Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        onClick={togglePlay}
        className="relative w-full aspect-video md:aspect-21/7 bg-slate-950 group cursor-pointer overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] border-y border-slate-200"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity duration-700"
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=2000"
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none" />

        {/* Center Play / Pause Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: isPlaying ? 0.95 : 1 }}
            className={`w-14 h-14 sm:w-16 sm:h-16 bg-slate-950/70 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transition-all duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-primary-orange ml-1 fill-primary-orange" />
            )}
          </motion.div>
        </div>

        {/* Bottom Banner Info */}
        <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10 z-10 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-200 drop-shadow-sm">
              Engineering in Action // Industrial Solar EPC
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;

