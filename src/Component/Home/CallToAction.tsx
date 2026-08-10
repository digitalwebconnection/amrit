import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

export const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate 10-digit phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Thank you for reaching out! We will get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (   
    
    <section className="relative py-14 bg-white overflow-hidden" id="contact">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-orange/20 blur-[150px] pointer-events-none rounded-full transform translate-x-1/3"></div>
      <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-blue-500/15 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="w-full flex flex-col items-center text-center mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-gray-900 mb-2">
                Ready to Power <span className="text-transparent bg-clip-text bg-linear-to-t from-primary-orange to-primary-blue"><br />Your Future?</span>
              </h2>
              <div className="flex justify-center mt-2 mb-2">
                <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
              </div>
              <h4 className="text-primary-orange font-bold tracking-widest uppercase text-sm mt-4">Get in Touch</h4>
            </div>
            
            <p className="text-gray-900 text-lg mb-10 leading-relaxed">
              Whether it's a large-scale commercial solar integration or industrial electrical EPC, our certified experts are ready to deliver seamless execution.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-800 hover:text-primary-orange transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-orange/10 group-hover:text-primary-orange transition-all shadow-sm border border-gray-100">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-primary-orange/80 transition-colors font-medium">Call Us Directly</p>
                  <a href="tel:+919876543210" className="font-bold text-lg">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-800 hover:text-primary-orange transition-colors group cursor-pointer">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-blue group-hover:bg-primary-orange/10 group-hover:text-primary-orange transition-all shadow-sm border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-primary-orange/80 transition-colors font-medium">Email Address</p>
                  <a href="mailto:info@amritelectricals.com" className="font-bold text-lg">info@amritelectricals.com</a>
                </div>
              </div>
          
            </div>
          </motion.div>

          {/* Right Form Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-primary-orange/10 shadow-[0_20px_60px_-15px_rgba(212,99,55,0.25)] relative hover:shadow-[0_20px_60px_-15px_rgba(212,99,55,0.4)] transition-shadow duration-500">
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-linear-to-r from-transparent via-primary-orange to-transparent opacity-90 rounded-t-3xl"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-2 border-gray-200 rounded-xl pl-12 pr-4 py-4 text-gray-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-all peer placeholder-transparent"
                      placeholder="Your Name"
                      id="name"
                    />
                    <label htmlFor="name" className="absolute left-11 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-orange rounded pointer-events-none">Your Name</label>
                    <User className="absolute left-4 top-4 text-gray-400 peer-focus:text-primary-orange transition-colors" size={20} />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <input 
                      type="tel" 
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      minLength={10}
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-transparent border-2 border-gray-200 rounded-xl pl-12 pr-4 py-4 text-gray-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-all peer placeholder-transparent"
                      placeholder="Phone Number"
                      id="phone"
                    />
                    <label htmlFor="phone" className="absolute left-11 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-orange rounded pointer-events-none">Phone Number</label>
                    <Phone className="absolute left-4 top-4 text-gray-400 peer-focus:text-primary-orange transition-colors" size={20} />
                  </div>
                </div>
                
                {/* Email Input */}
                <div className="relative group">
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-2 border-gray-200 rounded-xl pl-12 pr-4 py-4 text-gray-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-all peer placeholder-transparent"
                    placeholder="Email Address"
                    id="email"
                  />
                  <label htmlFor="email" className="absolute left-11 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-orange rounded pointer-events-none">Email Address</label>
                  <Mail className="absolute left-4 top-4 text-gray-400 peer-focus:text-primary-orange transition-colors" size={20} />
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-2 border-gray-200 rounded-xl pl-12 pr-4 py-4 text-gray-900 focus:outline-none focus:border-primary-orange focus:bg-white transition-all resize-none peer placeholder-transparent"
                    placeholder="How can we help?"
                    id="message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-11 -top-2.5 bg-white px-2 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-orange rounded pointer-events-none">How can we help?</label>
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 peer-focus:text-primary-orange transition-colors" size={20} />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-primary-orange hover:bg-[#b0522d] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(212,99,55,0.5)] transform hover:-translate-y-1"
                >
                  SUBMIT INQUIRY <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
