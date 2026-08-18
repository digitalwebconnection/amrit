import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, Layers, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Solar EPC (Commercial / Industrial)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate 10-digit phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Quote Request Submitted:', formData);
      toast.success('Thank you! Our engineering team will contact you within 24 hours with a custom quote.');
      setIsSubmitting(false);

      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Solar EPC (Commercial / Industrial)',
        message: ''
      });

      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 cursor-pointer"
          />

          {/* Glowing Ambient Background Orbs */}
          <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-112.5 h-112.5 bg-primary-orange/25 rounded-full blur-[110px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="w-112.5 h-112.5 bg-primary-blue/30 rounded-full blur-[120px] -translate-y-20 translate-x-20"
            />
          </div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.5),0_0_50px_rgba(241,130,35,0.2)] border border-slate-200/90 z-50 overflow-hidden my-auto"
          >
            {/* Top Multi-color Laser Shimmer Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-primary-blue via-primary-orange to-amber-400 overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-white shadow-[0_0_12px_#ffffff]"
              />
            </div>

            {/* Modal Header */}
            <div className="relative p-6 pb-4 pt-7 text-center border-b border-slate-100 bg-linear-to-b from-slate-50/80 via-white to-white">
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute right-4.5 top-4.5 w-9 h-9 rounded-full bg-slate-100 hover:bg-orange-50 text-slate-500 hover:text-primary-orange flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 border border-slate-200/60"
              >
                <X size={18} />
              </button>

              {/* Logo with Soft Glow */}
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-2 bg-linear-to-r from-primary-orange/20 to-primary-blue/20 rounded-full blur-md opacity-70" />
                <img src={logo} alt="Amrit Electricals Logo" className="relative h-12 w-auto object-contain mx-auto" />
              </div>

              {/* Eyebrow Badge */}
              <div className="flex justify-center mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-primary-orange text-[10.5px] font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles size={11} className="text-primary-orange animate-pulse" />
                  Instant Technical &amp; EPC Estimation
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-serif tracking-tight">
                Request a <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange">Free Quote</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5 max-w-sm mx-auto">
                Get certified engineering advice, turnkey pricing, and DISCOM feasibility analysis.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 pt-5 space-y-4">
              
              {/* Name Input */}
              <div className="relative group">
                <label htmlFor="modal-name" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 items-center gap-1.5">
                  <User size={13} className="text-primary-orange" />
                  <span>Full Name / Company Name</span>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50/80 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary-orange focus:ring-4 focus:ring-primary-orange/10 focus:shadow-[0_0_15px_rgba(241,130,35,0.15)] transition-all duration-200"
                  placeholder="e.g. Rahul Sharma / Apex Industries"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Phone */}
                <div className="relative group">
                  <label htmlFor="modal-phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone size={13} className="text-primary-orange" />
                    <span>Phone Number</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/80 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary-orange focus:ring-4 focus:ring-primary-orange/10 focus:shadow-[0_0_15px_rgba(241,130,35,0.15)] transition-all duration-200"
                    placeholder="10-digit number"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <label htmlFor="modal-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 items-center gap-1.5">
                    <Mail size={13} className="text-primary-blue" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/80 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 focus:shadow-[0_0_15px_rgba(32,58,150,0.15)] transition-all duration-200"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="relative group">
                <label htmlFor="modal-service" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 items-center gap-1.5">
                  <Layers size={13} className="text-primary-orange" />
                  <span>Interested Service / Requirement</span>
                </label>
                <div className="relative">
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/80 border-2 border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:bg-white focus:outline-none focus:border-primary-orange focus:ring-4 focus:ring-primary-orange/10 focus:shadow-[0_0_15px_rgba(241,130,35,0.15)] transition-all duration-200 cursor-pointer appearance-none"
                  >
                    <option value="Solar EPC (Commercial / Industrial)">☀️ Turnkey Solar EPC (Commercial / Industrial)</option>
                    <option value="Residential Solar Rooftop">🏠 Residential Solar Rooftop</option>
                    <option value="HT/LT Substation & Transformers (11kV/33kV)">⚡ HT / LT Substation &amp; Transformers (11kV–33kV)</option>
                    <option value="Dealer & Installer Bulk Procurement">📦 Bulk PV Module &amp; Inverter Supply</option>
                    <option value="Industrial Automation & SCADA">🔌 Smart SCADA &amp; PLC Automation</option>
                    <option value="Operations & Maintenance (O&M)">🛠️ Solar O&amp;M and Energy Audits</option>
                  </select>
                  <Zap size={15} className="absolute right-3.5 top-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label htmlFor="modal-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 items-center gap-1.5">
                  <MessageSquare size={13} className="text-primary-blue" />
                  <span>Project Details / Estimated Capacity (Optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50/80 border-2 border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-primary-orange focus:ring-4 focus:ring-primary-orange/10 focus:shadow-[0_0_15px_rgba(241,130,35,0.15)] transition-all duration-200 resize-none"
                  placeholder="e.g. Looking for 100 kWp rooftop solar for factory with net metering..."
                />
              </div>

              {/* Submit Button with Glow Effect */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="group relative w-full mt-2 py-3.5 px-6 bg-linear-to-r from-primary-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-primary-orange text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_25px_rgba(241,130,35,0.45)] hover:shadow-[0_12px_35px_rgba(241,130,35,0.7)] flex items-center justify-center gap-2.5 cursor-pointer overflow-hidden border border-orange-400/30"
              >
                {/* Light Shimmer Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform ease-out pointer-events-none" />

                <span className="relative z-10">
                  {isSubmitting ? 'Submitting Request...' : 'Send Request & Get Quote'}
                </span>
                <Send size={15} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>

              {/* Bottom Trust Icons */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[10.5px] font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-600" /> 100% Privacy
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-primary-blue" /> Fast 24h Turnaround
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap size={13} className="text-amber-500" /> MNRE Approved
                </span>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;

