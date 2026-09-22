import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate 10-digit phone number
    const cleanPhone = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Quote Request Submitted:', formData);
      toast.success('Thank you! Our engineering team will contact you within 24 hours.');
      setIsSubmitting(false);

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Solar EPC (Commercial / Industrial)',
        message: ''
      });

      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-10">
        
        {/* Header */}
        <div className="p-5 pb-3 border-b border-slate-100 flex items-start justify-between">
          <div>
            <img 
              src={logo} 
              alt="Amrit Electricals" 
              className="h-9 w-auto object-contain mb-2" 
            />
            <h3 className="text-xl font-bold text-slate-900">
              Request a Quote
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Fill out the details below and we will get back to you within 24 hours.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer -mr-1 -mt-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          
          {/* Name */}
          <div>
            <label htmlFor="simple-name" className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="simple-name"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name or Company"
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="simple-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="simple-phone"
                name="phone"
                required
                autoComplete="tel"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                minLength={10}
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit number"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
              />
            </div>

            <div>
              <label htmlFor="simple-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="simple-email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="simple-service" className="block text-xs font-semibold text-slate-700 mb-1">
              Interested Service
            </label>
            <select
              id="simple-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors cursor-pointer"
            >
              <option value="Solar EPC (Commercial / Industrial)">Solar EPC (Commercial / Industrial)</option>
              <option value="Residential Solar Rooftop">Residential Solar Rooftop</option>
              <option value="HT/LT Substation & Transformers">HT/LT Substation &amp; Transformers (11kV–33kV)</option>
              <option value="Dealer & Installer Bulk Supply">Bulk PV Module &amp; Inverter Supply</option>
              <option value="Industrial Automation & SCADA">Smart SCADA &amp; Automation</option>
              <option value="Solar O&M / Energy Audit">Solar O&amp;M &amp; Maintenance</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="simple-message" className="block text-xs font-semibold text-slate-700 mb-1">
              Project Details (Optional)
            </label>
            <textarea
              id="simple-message"
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief details or required capacity..."
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary-orange focus:ring-1 focus:ring-primary-orange transition-colors resize-none leading-normal"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 bg-primary-orange hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center cursor-pointer disabled:opacity-75 shadow-xs mt-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>

          {/* Privacy text */}
          <p className="text-center text-[11px] text-slate-500 pt-0.5">
            Your information is kept strictly confidential.
          </p>

        </form>

      </div>
    </div>
  );
};

export default ContactPopup;
