import React, { useState, useEffect } from 'react';
import {
  Award,
  ShieldCheck,
  Zap,
  Sun,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BadgeCheck,
  FileText,
  Building2,
  Lock
} from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  authority: string;
  desc: string;
  tag: string;
  validity: string;
  icon: React.ElementType;
  accentColor: string;
}

const certificates: Certificate[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    authority: "TUV / IAF Quality Standard",
    desc: "Quality Management Systems certified for turnkey solar EPC design, BOS procurement, and industrial electrical distribution.",
    tag: "Quality Certified",
    validity: "Annual Audit Cleared",
    icon: Award,
    accentColor: "from-amber-500 to-orange-500"
  },
  {
    id: "iso-45001",
    name: "ISO 45001:2018",
    authority: "Occupational Health & Safety",
    desc: "Comprehensive workplace health & safety standard with mandatory zero-accident execution and arc-flash protocols.",
    tag: "Safety Compliant",
    validity: "Zero-Accident Protocol",
    icon: ShieldCheck,
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "grade-a",
    name: "Grade-A Electrical License",
    authority: "Govt. Electrical Licensing Board",
    desc: "Certified heavy electrical contractor for HT/LT substations, transformer commissioning, and CEIG grid approvals up to 33kV.",
    tag: "Govt. Grade-A (33kV)",
    validity: "Government Authorized",
    icon: Zap,
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "mnre-discom",
    name: "MNRE & DISCOM Approved",
    authority: "Ministry of New & Renewable Energy",
    desc: "Sanctioned solar channel partner for DISCOM bidirectional net-metering clearances, subsidy filings, and grid synchronization.",
    tag: "MNRE Sanctioned",
    validity: "DISCOM Validated",
    icon: Sun,
    accentColor: "from-orange-500 to-amber-500"
  }
];

interface CertificationsProps {
  onOpenContact?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenContact }) => {
  const [activeFlippedIndex, setActiveFlippedIndex] = useState<number>(0);
  const [userHoveredIndex, setUserHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (userHoveredIndex !== null) return;

    const interval = setInterval(() => {
      setActiveFlippedIndex((prev) => (prev + 1) % certificates.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [userHoveredIndex]);

  return (
    <section id="certifications" className="py-14 lg:py-14 bg-slate-50/70 border-t-2 border-b-2 border-primary-orange relative overflow-hidden  ">

      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2  text-primary-blue mb-3.5 ">
            <Sparkles size={23} className="text-primary-orange animate-pulse" />
            <span className="text-lg font-bold uppercase tracking-wider">
              Statutory Compliance &amp; Standards
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-black text-slate-900 tracking-tight leading-tight mb-3">
            Our Certifications &amp; <span className="text-primary-blue">Accreditations</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Strict adherence to Central Electricity Authority (CEA) regulations, DISCOM net-metering standards, and international ISO quality frameworks.
          </p>
        </div>

        {/* 3D GRAPHIC HERO SHOWCASE + CERTIFICATE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* LEFT: 3D PHOTOREALISTIC CERTIFICATION SHOWCASE GRAPHIC */}
          <div className="lg:col-span-5 relative group flex flex-col">
            <div className="relative rounded-xl overflow-hidden border-2 border-primary-orange/50 bg-slate-950 shadow-xl shadow-orange-500/10 group-hover:border-primary-orange transition-all duration-500 flex-1 min-h-95 lg:min-h-115 flex flex-col justify-between">

              {/* Cover 3D Render Image */}
              <img
                src="/images/certifications_showcase.webp"
                alt="Solar EPC Certifications and Accreditations"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-black/30" />

              {/* Top Floating Badge */}
              <div className="relative z-10 p-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-md">
                  <BadgeCheck size={16} className="text-primary-orange" />
                  <span>ISO &amp; Govt. Accredited</span>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  100% Verified
                </span>
              </div>


            </div>

            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary-orange/20 to-primary-blue/20 rounded-3xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* RIGHT: 4 ACCREDITATION CARDS GRID WITH AUTO 180° FLIP */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              const isFlipped = userHoveredIndex !== null ? userHoveredIndex === index : activeFlippedIndex === index;

              return (
                <div
                  key={cert.id}
                  className="group perspective-1000 h-64 sm:h-68 cursor-pointer"
                  onMouseEnter={() => setUserHoveredIndex(index)}
                  onMouseLeave={() => setUserHoveredIndex(null)}
                  onClick={() => setActiveFlippedIndex(index)}
                >
                  {/* 3D Flipping Card Container */}
                  <div
                    className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* FRONT FACE: Big Icon & Tag & Name */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl p-5 border-2 border-blue-600 shadow-lg shadow-black/30 flex flex-col items-center justify-center text-center transition-all">
                      {/* Top Gradient Stripe */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-primary-orange via-amber-400 to-primary-blue rounded-t-xl" />

                      <div className=" text-primary-blue flex items-center justify-center shadow-xs mb-3 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={88} className="text-primary-orange" />
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3 py-0.5 rounded-full border border-orange-200 mb-2">
                        {cert.tag}
                      </span>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug px-2 line-clamp-1">
                        {cert.name}
                      </h3>

                      <span className="mt-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        Hover to view compliance &rarr;
                      </span>
                    </div>

                    {/* BACK FACE: 180° Turned Content */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#12225E] text-white rounded-xl p-5 border-2 border-primary-orange shadow-xl flex flex-col justify-between text-left">
                      <div>
                        {/* Top Row: Mini Icon & Authority */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-primary-orange">
                            <Icon size={18} />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                            {cert.tag}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-white mb-1 leading-snug">
                          {cert.name}
                        </h3>

                        <p className="text-[11px] font-semibold uppercase tracking-wide text-primary-orange mb-2">
                          {cert.authority}
                        </p>

                        <p className="text-xs text-slate-200 leading-relaxed line-clamp-3">
                          {cert.desc}
                        </p>
                      </div>

                      {/* Footer Status */}
                      <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
                          <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                          <span>{cert.validity}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-0.5">
                          Verified <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATUTORY PILLARS BAR */}
        <div className="bg-white border-2 border-primary-orange/40 rounded-xl p-3 sm:p-4 shadow-md mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-15 h-15 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary-blue shrink-0">
                <Building2 size={45} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Grade-A Government Contractor
                </p>
                <p className="text-[11px] text-slate-500">
                  Substations &amp; Transmission up to 33kV
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-15 h-15 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-primary-orange shrink-0">
                <Lock size={45} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Statutory CEIG Clearance
                </p>
                <p className="text-[11px] text-slate-500">
                  Electrical Inspectorate Certified
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-15 h-15 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <FileText size={45} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Audit-Ready Documentation
                </p>
                <p className="text-[11px] text-slate-500">
                  Full Compliance dossiers on demand
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <div className="text-center">
          <button
            onClick={onOpenContact ? onOpenContact : () => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#203A96] hover:bg-[#12225E] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer"
          >
            <span>Request Official Compliance &amp; License Dossier</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
