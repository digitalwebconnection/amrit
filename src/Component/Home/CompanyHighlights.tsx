import React from 'react';
import {
  LayoutGrid,
  Award,
  Layers,
  Zap,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

// Belt speed in seconds: Lower value = faster belt (e.g., 8s = very fast, 10s = fast, 14s = medium)
const BELT_SPEED_SECONDS = 10;

export const CompanyHighlights: React.FC = () => {
  const stats = [
    { value: "90+", suffix: " MW", label: "Solar Panels Supplied", icon: LayoutGrid },
    { value: "75+", suffix: " MW", label: "Inverters Supplied", icon: Award },
    { value: "500+", suffix: "", label: "Turnkey Solar KITs", icon: Layers },
    { value: "50,000+", suffix: "", label: "Energy Meters Deployed", icon: Zap },
    { value: "1,200+", suffix: "", label: "Delivered Solar Projects", icon: CheckCircle2 },
    { value: "10+", suffix: " Years", label: "Industry Excellence", icon: ShieldCheck },
  ];

  // Helper to render individual stat cards
  const renderCard = (stat: typeof stats[0], key: string, index: number) => {
    const Icon = stat.icon;
    const isOrange = index % 2 !== 0;

    return (
      <div
        key={key}
        className="w-68 sm:w-76 md:w-80 shrink-0 border-2 border-blue-800 bg-white p-6 md:p-7 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center cursor-default"
      >
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            isOrange
              ? 'bg-orange-50 text-primary-orange'
              : 'bg-blue-50 text-primary-blue'
          }`}
        >
          <Icon size={24} />
        </div>

        <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-mono mb-1">
          {stat.value}
          {stat.suffix && (
            <span className="text-xl font-sans font-semibold text-slate-600 ml-1">
              {stat.suffix}
            </span>
          )}
        </div>

        <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1 truncate max-w-full">
          {stat.label}
        </div>
      </div>
    );
  };

  return (
    <section className="py-8 bg-slate-50/70 border-t-2 border-b-2 border-primary-orange text-slate-800 relative overflow-hidden">
      {/* Left and Right Edge Gradient Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-linear-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Self-contained keyframes for 100% reliability, instant live updates & hover pause */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Moving Slider Track with pure CSS animation for instant speed control & 60fps GPU acceleration */}
      <div
        className="flex w-max items-center will-change-transform animate-marquee cursor-default"
        style={{ animationDuration: `${BELT_SPEED_SECONDS}s` }}
      >
        {/* Track 1 */}
        <div className="flex items-center gap-6 pr-6 shrink-0">
          {stats.map((stat, index) => renderCard(stat, `set1-${index}`, index))}
        </div>

        {/* Track 2 (Exact duplicate for 100% seamless, non-jumping infinite loop) */}
        <div className="flex items-center gap-6 pr-6 shrink-0" aria-hidden="true">
          {stats.map((stat, index) => renderCard(stat, `set2-${index}`, index))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
