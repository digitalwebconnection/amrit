import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative py-8 lg:py-14 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden selection:bg-primary-orange selection:text-white" id="contact">
      
      {/* Ambient Glowing Background Plasma Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -right-28 w-[600px] h-[600px] bg-gradient-to-bl from-primary-orange/25 via-amber-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-28 -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-primary-blue/25 via-sky-400/10 to-transparent rounded-full blur-[130px] pointer-events-none"
      />

      {/* Top & Bottom Shimmer Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-orange/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-blue/40 to-transparent pointer-events-none" />
      
      {/* ================= MAIN CONTAINER ================= */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE: SOLAR DISTRIBUTOR NARRATIVE (5 COLS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-orange" />
              </span>
              <span className="text-slate-700 font-bold uppercase tracking-widest text-xs">
                Authorized Solar Distributor &amp; EPC Partner
              </span>
            </div>

            {/* Headline with Gradient Text */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-black text-slate-900 mb-3 ">
              Power Your Project with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-700 to-primary-orange drop-shadow-[0_2px_12px_rgba(241,130,35,0.25)]">
                Direct Distributor Pricing
              </span>
            </h2>

            {/* Glowing Accent Bar with Shimmer Beam */}
            <div className="relative w-36 h-1.5 bg-gradient-to-r from-primary-blue via-primary-orange to-amber-400 rounded-full mt-1 mb-5 lg:mx-0 mx-auto shadow-[0_0_15px_rgba(241,130,35,0.7)] overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-white/70 shadow-[0_0_8px_#ffffff]"
              />
            </div>
            
            <p className="text-slate-700 text-sm sm:text-base mb-6 leading-relaxed font-normal max-w-xl">
              As an authorized distributor for <strong>Adani Solar, Polycab, and Secure Meters</strong>, Amrit Electricals provides Tier-1 solar modules, inverters, and heavy HT/LT BOS components at wholesale ex-stock pricing, backed by full EPC execution.
            </p>

          

            {/* Contact Information Pods */}
            <div className="space-y-3.5 w-full max-w-md">
              
              {/* Phone Pod */}
              <a 
                href="tel:+919876543210"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-primary-orange/60 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary-orange border border-orange-200/80 group-hover:bg-primary-orange group-hover:text-white transition-all shadow-xs group-hover:scale-108">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 group-hover:text-primary-orange transition-colors font-bold uppercase tracking-wider">Distribution &amp; EPC Desk</p>
                  <p className="font-mono font-bold text-slate-900 text-base sm:text-lg group-hover:text-primary-blue transition-colors">+91 98765 43210</p>
                </div>
              </a>
              
              {/* Email Pod */}
              <a 
                href="mailto:info@amritelectricals.com"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-primary-blue/60 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary-blue border border-blue-200/80 group-hover:bg-primary-blue group-hover:text-white transition-all shadow-xs group-hover:scale-108">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 group-hover:text-primary-blue transition-colors font-bold uppercase tracking-wider">Commercial Quotations</p>
                  <p className="font-sans font-bold text-slate-900 text-sm sm:text-base group-hover:text-primary-blue transition-colors">info@amritelectricals.com</p>
                </div>
              </a>
          
            </div>

          </motion.div>

          {/* ================= RIGHT SIDE: COMPREHENSIVE SOLAR DISTRIBUTOR INQUIRY FORM (7 COLS) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(32,58,150,0.18)] hover:shadow-[0_25px_65px_-12px_rgba(241,130,35,0.25)] transition-all duration-500 relative overflow-hidden">
              
              {/* Traveling Shimmer Line at Top */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary-blue via-primary-orange to-amber-400 opacity-90 overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-1/3 h-full bg-white shadow-[0_0_10px_#ffffff]"
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans leading-tight">
                    Get Distributor &amp; EPC Quote
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Receive ex-stock price lists, technical datasheets, and feasibility within 24 hours.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary-orange border border-orange-200/60 shadow-xs shrink-0">
                  <Sun size={20} />
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all peer placeholder-transparent"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name" className="absolute left-10 -top-2.5 bg-white px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-focus:uppercase rounded pointer-events-none">Your Full Name / Company</label>
                    <User className="absolute left-3.5 top-3.5 text-slate-400 peer-focus:text-primary-orange transition-colors" size={18} />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
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
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all peer placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label htmlFor="phone" className="absolute left-10 -top-2.5 bg-white px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-focus:uppercase rounded pointer-events-none">Phone Number (10 Digits)</label>
                    <Phone className="absolute left-3.5 top-3.5 text-slate-400 peer-focus:text-primary-orange transition-colors" size={18} />
                  </div>
                </div>

                {/* Row 2: Email & City / State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Email Input */}
                  <div className="relative group">
                    <input 
                      type="email" 
                      required
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all peer placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-10 -top-2.5 bg-white px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-focus:uppercase rounded pointer-events-none">Official Email Address</label>
                    <Mail className="absolute left-3.5 top-3.5 text-slate-400 peer-focus:text-primary-orange transition-colors" size={18} />
                  </div>

                  {/* City / State Input */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all peer placeholder-transparent"
                      placeholder="Project City / State"
                    />
                    <label htmlFor="city" className="absolute left-10 -top-2.5 bg-white px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-focus:uppercase rounded pointer-events-none">Project City / State</label>
                    <MapPin className="absolute left-3.5 top-3.5 text-slate-400 peer-focus:text-primary-orange transition-colors" size={18} />
                  </div>
                </div>

                {/* Row 3: Requirement Type & Project Capacity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Requirement Type Dropdown */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Requirement / Partnership Type
                    </label>
                    <div className="relative">
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all cursor-pointer appearance-none"
                      >
                        <option value="Solar EPC Project (Commercial / Industrial)">☀️ Turnkey Solar EPC Project</option>
                        <option value="Dealer / Installer Bulk Supply">📦 Dealer / Installer Bulk Procurement</option>
                        <option value="Solar PV Modules (Adani / Polycab / TOPCon)">⚡ Solar Panels (Adani / Polycab)</option>
                        <option value="Solar Inverters & SCADA BOS">🔌 Inverters &amp; SCADA Automation</option>
                        <option value="HT/LT Substation & Transformers">🏢 11kV/33kV Substation EPC</option>
                        <option value="Residential Solar Rooftop">🏠 Residential Solar System</option>
                      </select>
                      <Layers size={16} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Estimated Capacity Dropdown */}
                  <div className="relative">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Estimated Project Capacity / Volume
                    </label>
                    <div className="relative">
                      <select
                        name="capacity"
                        value={formData.capacity}
                        onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                        className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 font-semibold focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all cursor-pointer appearance-none"
                      >
                        <option value="10 kW - 50 kW (Commercial Rooftop)">10 kW – 50 kW (Commercial)</option>
                        <option value="50 kW - 500 kW (Industrial / Commercial)">50 kW – 500 kW (Industrial)</option>
                        <option value="500 kW - 5 MW+ (MW Solar Farm / EPC)">500 kW – 5 MW+ (Utility / Ground Mount)</option>
                        <option value="Below 10 kW (Residential / Small Setup)">Below 10 kW (Residential)</option>
                        <option value="Bulk Pallet / Container Loads (Distribution)">Bulk Pallet / Container Wholesale</option>
                      </select>
                      <Zap size={16} className="absolute right-3.5 top-3.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea 
                    required
                    name="message"
                    id="message"
                    autoComplete="off"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50/70 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:bg-white focus:ring-4 focus:ring-primary-orange/10 transition-all resize-none peer placeholder-transparent leading-relaxed"
                    placeholder="Provide brief project details or module wattage requirements..."
                  ></textarea>
                  <label htmlFor="message" className="absolute left-10 -top-2.5 bg-white px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:text-primary-orange peer-focus:uppercase rounded pointer-events-none">Project Details / Module Wattage / DISCOM Specs</label>
                  <MessageSquare className="absolute left-3.5 top-3.5 text-slate-400 peer-focus:text-primary-orange transition-colors" size={18} />
                </div>

                {/* Glowing Submit Button */}
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-primary-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-primary-orange text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-[0_10px_30px_rgba(241,130,35,0.45)] hover:shadow-[0_0_35px_rgba(241,130,35,0.75)] cursor-pointer border border-orange-400/30 mt-2"
                >
                  <span>Request Distributor Price List &amp; Proposal</span>
                  <ArrowRight size={16} />
                </motion.button>

                <p className="text-[10.5px] text-slate-400 text-center font-medium">
                  ⚡ 100% Privacy Assured. Verified technical &amp; commercial quotation sent within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
