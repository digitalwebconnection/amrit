import React from 'react';
import { Award, ShieldCheck, Zap, Sun, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Certificate {
  name: string;
  desc: string;
  tag: string;
  icon: React.ElementType;
}

const certificates: Certificate[] = [
  { 
    name: "ISO 9001:2015", 
    desc: "Quality Management Systems Certified for Turnkey EPC & Power Distribution.",
    tag: "Quality Certified",
    icon: Award,
  },
  { 
    name: "ISO 45001:2018", 
    desc: "Occupational Health & Safety Standards with Zero-Accident Execution Protocol.",
    tag: "Safety Compliant",
    icon: ShieldCheck,
  },
  { 
    name: "A-Class Electrical License", 
    desc: "Certified Heavy Electrical Contractor for HT/LT Substations up to 33kV.",
    tag: "Govt. Grade-A",
    icon: Zap,
  },
  { 
    name: "MNRE & DISCOM Approved", 
    desc: "Sanctioned Solar Channel Partner for Net-Metered Commercial Rooftops.",
    tag: "MNRE Sanctioned",
    icon: Sun,
  }
];

interface CertificationsProps {
  onOpenContact?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onOpenContact }) => {
  return (
    <section id="certifications" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            Compliance &amp; Standards
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Our Certifications &amp; Accreditations
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We strictly adhere to CEA safety regulations, DISCOM net-metering standards, and international ISO quality frameworks for risk-free solar EPC execution.
          </p>
        </div>

        {/* 4 Clean WordPress Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div 
                key={i}
                className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-primary-orange transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-orange-50 text-primary-orange border border-orange-100 flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>

                  {/* Tag */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary-orange bg-orange-50/60 px-2.5 py-0.5 rounded border border-orange-100 mb-2">
                    {cert.tag}
                  </span>

                  {/* Name & Desc */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                  <span>Verified &amp; Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Simple Action */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenContact ? onOpenContact : () => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-slate-900 hover:bg-primary-orange text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Request Compliance Documentation</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
