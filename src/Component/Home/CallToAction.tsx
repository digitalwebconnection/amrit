import React, { useState } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  User,
  MessageSquare,
  Layers,
  Zap,
  MapPin,
  Sun
} from 'lucide-react';
import { toast } from 'react-toastify';

export const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    inquiryType: 'Solar EPC Project (Commercial / Industrial)',
    capacity: '50 kW - 500 kW (Industrial / Commercial)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate 10-digit phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    console.log("Solar Distribution / EPC Inquiry Submitted:", formData);
    toast.success("Thank you! Our Distribution & EPC Desk will connect with your technical quote within 24 hours.");
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      inquiryType: 'Solar EPC Project (Commercial / Industrial)',
      capacity: '50 kW - 500 kW (Industrial / Commercial)',
      message: ''
    });
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200" id="contact">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

          {/* LEFT SIDE: CONTACT NARRATIVE */}
          <div className="lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left">


            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 mb-3">
              Power Your Project with <br />
              <span className="text-[#203A96]">
                Direct Distributor Pricing
              </span>
            </h2>

            <div className="w-24 h-1 bg-primary-orange rounded-full mb-5 lg:mx-0 mx-auto" />

            <p className="text-slate-700 text-sm sm:text-base mb-6 leading-relaxed font-normal max-w-xl">
              As an authorized distributor for <strong>Adani Solar, Polycab, and Secure Meters</strong>, Amrit Electricals provides Tier-1 solar modules, inverters, and heavy HT/LT BOS components at wholesale ex-stock pricing, backed by full EPC execution.
            </p>

            {/* Contact Information Pods */}
            <div className="space-y-3.5 w-full max-w-md">

              {/* Phone Pod */}
              <a
                href="tel:+919700705020"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-primary-orange transition-colors group cursor-pointer"
              >
                <div className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center text-primary-orange border border-orange-200">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Distribution &amp; EPC Desk</p>
                  <p className="font-mono font-bold text-slate-900 text-base group-hover:text-primary-orange transition-colors">+91 97007 05020</p>
                </div>
              </a>

              {/* Email Pod */}
              <a
                href="mailto:info@amritelectricals.com"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-primary-blue transition-colors group cursor-pointer"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center text-primary-blue border border-blue-200">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Commercial Quotations</p>
                  <p className="font-sans font-bold text-slate-900 text-sm group-hover:text-primary-blue transition-colors">info@amritelectricals.com</p>
                </div>
              </a>

              {/* Location Pod */}
              <a
                href="https://maps.google.com/?q=Amrit+Electricals+PG+Road+Secunderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition-colors group cursor-pointer"
              >
                <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 border border-emerald-200 shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider group-hover:text-emerald-700 transition-colors">Office &amp; Supply Depot</p>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    Ground Floor, Mecleodguda, Backside Mamta sweets, No 1, H, 8-107, PG Road, beside Marwadi School, Secunderabad, Telangana 500003
                  </p>
                </div>
              </a>

            </div>

          </div>

          {/* RIGHT SIDE: INQUIRY FORM */}
          <div className="lg:w-7/12 w-full">
            <div className="">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900  leading-tight">
                    Get Distributor &amp; EPC Quote
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Receive ex-stock price lists, technical datasheets, and feasibility within 24 hours.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-primary-orange border border-orange-200 shrink-0">
                  <Sun size={20} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-colors"
                      placeholder="Your Full Name / Company"
                    />
                    <User className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      required
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      minLength={10}
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-colors"
                      placeholder="Phone Number (10 Digits)"
                    />
                    <Phone className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>
                </div>

                {/* Row 2: Email & City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-colors"
                      placeholder="Official Email Address"
                    />
                    <Mail className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      required
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-colors"
                      placeholder="Project City / State"
                    />
                    <MapPin className="absolute left-3 top-3 text-slate-400" size={16} />
                  </div>
                </div>

                {/* Row 3: Requirement Type & Project Capacity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Requirement / Partnership Type
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-primary-orange focus:bg-white transition-colors appearance-none"
                      >
                        <option value="Solar EPC Project (Commercial / Industrial)">☀️ Turnkey Solar EPC Project</option>
                        <option value="Dealer / Installer Bulk Supply">📦 Dealer / Installer Bulk Procurement</option>
                        <option value="Solar PV Modules (Adani / Polycab / TOPCon)">⚡ Solar Panels (Adani / Polycab)</option>
                        <option value="Solar Inverters & SCADA BOS">🔌 Inverters &amp; SCADA Automation</option>
                        <option value="HT/LT Substation & Transformers">🏢 11kV/33kV Substation EPC</option>
                        <option value="Residential Solar Rooftop">🏠 Residential Solar System</option>
                      </select>
                      <Layers size={15} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Estimated Project Capacity / Volume
                    </label>
                    <div className="relative">
                      <select
                        name="capacity"
                        value={formData.capacity}
                        onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:border-primary-orange focus:bg-white transition-colors appearance-none"
                      >
                        <option value="10 kW - 50 kW (Commercial Rooftop)">10 kW – 50 kW (Commercial)</option>
                        <option value="50 kW - 500 kW (Industrial / Commercial)">50 kW – 500 kW (Industrial)</option>
                        <option value="500 kW - 5 MW+ (MW Solar Farm / EPC)">500 kW – 5 MW+ (Utility / Ground Mount)</option>
                        <option value="Below 10 kW (Residential / Small Setup)">Below 10 kW (Residential)</option>
                        <option value="Bulk Pallet / Container Loads (Distribution)">Bulk Pallet / Container Wholesale</option>
                      </select>
                      <Zap size={15} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    required
                    name="message"
                    id="message"
                    autoComplete="off"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-colors resize-none leading-relaxed"
                    placeholder="Provide brief project details or module wattage requirements..."
                  ></textarea>
                  <MessageSquare className="absolute left-3 top-3 text-slate-400" size={16} />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-2"
                >
                  <span>Request Distributor Price List &amp; Proposal</span>
                  <ArrowRight size={15} />
                </button>

                <p className="text-[11px] text-slate-500 text-center font-normal">
                  ⚡ 100% Privacy Assured. Verified technical &amp; commercial quotation sent within 24 hours.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
