

import { useEffect, useRef, useState } from "react"
import { Shield, TrendingUp, Award, Building } from "lucide-react"

// Amrit Electricals brand palette
const BRAND = {
  primaryBlue: "#203A96",
  deepBlue: "#12225E",
  primaryOrange: "#F18223",
  amber: "#FBBF24",
  dark: "#070B19",
}

const highlights = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Tier-1 Grade-A solar panels, linear performance backed for 25 years.",
    tint: "from-[rgba(241,130,35,0.14)] to-[rgba(32,58,150,0.08)]",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: Award,
    title: "MNRE & ISO Certified",
    description: "Approved solar channel partner with ISO 9001:2015 certified engineering.",
    tint: "from-[rgba(32,58,150,0.16)] to-[rgba(241,130,35,0.08)]",
    iconColor: BRAND.primaryBlue,
  },
  {
    icon: TrendingUp,
    title: "3–4 Year ROI",
    description: "Fastest payback with smart system sizing, high yield & DISCOM net-metering.",
    tint: "from-[rgba(241,130,35,0.14)] to-[rgba(32,58,150,0.08)]",
    iconColor: BRAND.primaryOrange,
  },
  {
    icon: Building,
    title: "Turnkey EPC & Service",
    description: "End-to-end site survey, installation & lifetime 24/7 after-sales O&M support.",
    tint: "from-[rgba(32,58,150,0.16)] to-[rgba(241,130,35,0.08)]",
    iconColor: BRAND.primaryBlue,
  },
]

export default function CompanyOverview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 lg:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      id="about"
    >
      {/* Background ambient accents with brand colors */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-35 animate-spin-slow-reverse"
        style={{ background: "radial-gradient(circle, rgba(241,130,35,0.22) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-28 w-[600px] h-[600px] rounded-full blur-3xl opacity-35 animate-spin-slow"
        style={{ background: "radial-gradient(circle, rgba(32,58,150,0.22) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Brand alignment header badge */}
        <div className={`text-center mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`} style={{ animationDelay: isVisible ? "0.15s" : "0s" }}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider shadow-sm bg-blue-50 border border-blue-200"
            style={{ color: BRAND.primaryBlue }}
          >
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            MNRE Approved // Tier-1 Solar EPC
          </span>
        </div>

        <h2 className={`text-3xl md:text-5xl font-extrabold text-center text-slate-900 mb-4 transition-colors duration-300 hover:text-[#203A96] tracking-tight ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`} style={{ animationDelay: isVisible ? "0.3s" : "0s" }}>
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-700 to-primary-orange">Amrit Electricals?</span>
        </h2>

        <p className={`text-center text-sm md:text-base text-slate-900 font-medium max-w-6xl mx-auto mb-12 leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`} style={{ animationDelay: isVisible ? "0.45s" : "0s" }}>
          Delivering dependable clean-energy engineering with measurable ROI. We spotlight the exact trust drivers enterprise and residential clients look for: <br className="hidden sm:block" />
          <span className="font-bold text-slate-800"> 25-Year Linear Power Warranty, MNRE Certified Execution, 3–4 Year ROI, and Turnkey O&amp;M Support.</span>
        </p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {highlights.map((h, index) => {
            const Icon = h.icon
            return (
              <div
                key={h.title}
                className={`group relative overflow-hidden rounded-lg p-6 shadow-md hover:shadow-2xl shadow-black border border-slate-300/90
                            transition-all duration-700 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary-orange/50 bg-white
                            ${isVisible ? "animate-card-pop-in" : "opacity-0 scale-95"}`}
                style={{ animationDelay: isVisible ? `${0.2 + index * 0.1}s` : "0s" }}
              >
                {/* Card gradient tint */}
                <div className={`absolute inset-0 bg-linear-to-br ${h.tint} animate-gradient-shift opacity-80`} aria-hidden />

                {/* Shine sweep on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#F18223]/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-2200 ease-out pointer-events-none" aria-hidden />

                <div className="relative z-10 text-center">
                  <div className="mb-5 flex justify-center ">
                    <div className="p-4 rounded-xl group-hover:rotate-360  animate-icon-bounce group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-9 h-9 " style={{ color: h.iconColor }} aria-hidden />
                      <span className="sr-only">{h.title}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2 font-sans group-hover:text-primary-blue transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-900 leading-relaxed ">
                    {h.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust ribbon */}
        <div className={`mt-12 flex flex-wrap items-center justify-center gap-3 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`} style={{ animationDelay: isVisible ? "0.65s" : "0s" }}>
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: BRAND.primaryBlue, border: "1px solid rgba(32,58,150,0.4)" }}
          >
            🏆 Authorized Solar EPC Partner
          </span>
          <span className="text-slate-400 text-sm hidden sm:inline">•</span>
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: BRAND.primaryOrange, border: "1px solid rgba(241,130,35,0.4)" }}
          >
            Telangana &amp; Nationwide Execution
          </span>
          <span className="text-slate-400 text-sm hidden sm:inline">•</span>
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-105"
            style={{ background: BRAND.deepBlue, border: "1px solid rgba(18,34,94,0.4)" }}
          >
            Backed by Tier-1 Solar PV &amp; 25-Year Linear Yield
          </span>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

        @keyframes card-pop-in {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          60% { opacity: 1; transform: scale(1.02) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-card-pop-in { animation: card-pop-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 100s linear infinite; }

        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 100s linear infinite; }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-icon-bounce { animation: icon-bounce 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </section>
  )
}