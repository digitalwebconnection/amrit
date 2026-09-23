import React from 'react';
import { Award, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface LeadershipProps {
  onOpenContact?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenContact }) => {
  return (
    <section id="leadership" className="py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Clean Executive Profile Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full max-w-sm rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white p-2 mb-4">
              <img
                src="/images/amritpal_singh.webp"
                alt="Amritpal Singh - Founder & CEO, Amrit Electricals"
                loading="lazy"
                decoding="async"
                className="w-full h-80 sm:h-96 object-cover object-top rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/leadership_director.webp';
                }}
              />
            </div>

            <div className="w-full max-w-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                Amritpal Singh
              </h3>
              <p className="text-sm font-semibold text-primary-orange uppercase tracking-wide mb-3">
                Founder &amp; Managing Director
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                <Award size={14} className="text-primary-orange shrink-0" />
                <span>20+ Years Electrical &amp; Solar EPC Experience</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Leadership Message */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
                Leadership Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                "Our vision is to supply the best solar products in terms of quality, price and performance."
              </h2>
            </div>

            <div className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                As an authorized partner of <strong className="text-slate-900 font-semibold">Adani Solar &amp; Polycab</strong>, Amrit Electricals delivers Tier-1 solar equipment and turnkey 1–25 kW Solar KITs backed by 20+ years of electrical expertise, in-house engineers, and 25-year manufacturer warranties.
              </p>
            </div>

            {/* Corporate Key Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Authorized Adani Solar &amp; Polycab Partner</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>90+ MW Panels &amp; 75+ MW Inverters Supplied</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Dedicated In-House Solar Engineering Team</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>25-Year Direct OEM Performance Warranty</span>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact ? onOpenContact : () => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white  font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Connect with Leadership Desk</span>
                <ArrowRight size={14} />
              </button>
              <a
                href="tel:+919700705020"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                <Phone size={14} className="text-primary-orange" />
                <span>+91 97007 05020</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
