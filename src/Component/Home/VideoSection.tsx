import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import video from "../../assets/$R8AXZEN.mp4";

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Lazy load and play video only when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Autoplay policy restriction handling
          });
        } else if (videoRef.current && !entry.isIntersecting) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
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
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Corporate Film
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
            Engineering in Action
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Watch our rooftop installations, solar system integration, and turnkey EPC execution in action.
          </p>
        </div>

        {/* Video Player */}
        <div
          onClick={togglePlay}
          className="relative w-full aspect-video md:aspect-21/9 bg-slate-950 group cursor-pointer overflow-hidden rounded-xl shadow-md border border-slate-200"
        >
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Ambient Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Center Play / Pause Indicator */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`w-16 h-16 bg-slate-900/80 rounded-full flex items-center justify-center border border-white/30 shadow-lg transition-opacity ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-primary-orange ml-1 fill-primary-orange" />
              )}
            </div>
          </div>

          {/* Bottom Banner Info */}
          <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-10 z-10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-orange" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Amrit Electricals &bull; Solar Rooftop EPC
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
