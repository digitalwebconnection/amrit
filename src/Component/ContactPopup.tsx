import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
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
    service: 'Solar Installation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate 10-digit phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    toast.success('Thank you for reaching out! We will contact you soon.');
    
    // Clear form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Solar Installation',
      message: ''
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="bg-white p-6 pb-2 flex flex-col items-center justify-center relative border-b border-gray-100">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <X size={24} />
              </button>
              <img src={logo} alt="Amrit Electricals Logo" className="h-12 w-auto mb-3" />
              <h2 className="text-xl font-bold text-gray-800">Get a Quote</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue outline-none transition-all duration-200 shadow-sm hover:border-gray-300 text-gray-800"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue outline-none transition-all duration-200 shadow-sm hover:border-gray-300 text-gray-800"
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue outline-none transition-all duration-200 shadow-sm hover:border-gray-300 text-gray-800"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Interested Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue outline-none transition-all duration-200 shadow-sm hover:border-gray-300 text-gray-800 cursor-pointer"
                >
                  <option value="Solar Installation">Solar Installation</option>
                  <option value="Electrical Services">Electrical Services</option>
                  <option value="Maintenance">Maintenance & Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-primary-blue/10 focus:border-primary-blue outline-none transition-all duration-200 shadow-sm hover:border-gray-300 text-gray-800 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-orange hover:bg-orange-500 text-white font-semibold py-3.5 px-6 rounded-xl shadow-[0_8px_20px_-6px_rgba(241,130,35,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,130,35,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2 border border-orange-500/20"
              >
                Send Request <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
