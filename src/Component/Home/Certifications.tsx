import React, { useState } from 'react';
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-14 lg:py-20 bg-slate-50/70 border-t-2 border-b-2 border-primary-orange relative overflow-hidden select-none">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary-orange mb-3.5 shadow-2xs">
            <Sparkles size={13} className="text-primary-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider">
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

          {/* RIGHT: 4 ACCREDITATION CARDS GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              const isHovered = hoveredCard === cert.id;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative bg-white rounded-lg p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs ${
                    isHovered
                      ? 'border-2 border-primary-orange shadow-xl shadow-orange-500/10 '
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Gradient Accent Strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary-orange via-amber-400 to-primary-blue rounded-t-2xl" />

                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary-orange border border-orange-200/80 flex items-center justify-center shadow-2xs group-hover:bg-primary-orange group-hover:text-white transition-colors">
                        <Icon size={22} />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                        {cert.tag}
                      </span>
                    </div>

                    {/* Certificate Name */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-primary-orange transition-colors leading-snug">
                      {cert.name}
                    </h3>

                    {/* Authority Subtitle */}
                    <p className="text-[11px] font-bold uppercase tracking-wide text-primary-blue mb-2.5">
                      {cert.authority}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Footer Status */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{cert.validity}</span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-primary-orange transition-colors flex items-center gap-0.5">
                      Compliance <ArrowRight size={11} />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATUTORY PILLARS BAR */}
        <div className="bg-white border-2 border-primary-orange/40 rounded-2xl p-5 sm:p-6 shadow-md mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary-blue shrink-0">
                <Building2 size={20} />
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
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-primary-orange shrink-0">
                <Lock size={20} />
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
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <FileText size={20} />
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-primary-orange text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:shadow-orange-500/25 transition-all cursor-pointer"
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
