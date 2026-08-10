import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle subscribe
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="relative bg-[#020617] text-gray-300 pt-1 pb-8  font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100  pointer-events-none" />


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-6 mt-4 md:mt-10">
          
          {/* Brand Info (Larger Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Amrit Electricals Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering homes and businesses with top-tier solar and electrical solutions. Your trusted partner for a sustainable and brighter energy future in India.
            </p>
            
            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-primary-orange">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">Head Office</p>
                  <p className="text-gray-400 text-sm">123 Energy Park, Tech Avenue, New Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-primary-orange">
                  <Phone size={18} />
                </div>
                <p className="text-gray-400 text-sm font-medium">+91 98765 43210</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              {/* <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-orange rounded-full"></span> */}
            </h3>
            <ul className="space-y-3 font-medium text-gray-400">
              {['Home', 'About Us', 'Our Projects', 'Why Choose Us', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary-orange transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform transition-transform group-hover:translate-x-1">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 lg:ml-8">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Our Services
              {/* <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-orange rounded-full"></span> */}
            </h3>
            <ul className="space-y-3 font-medium text-gray-400">
              {['Solar Panel Installation', 'Commercial Wiring', 'Residential Electricals', 'Maintenance & Repairs', 'Energy Consultation'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-primary-orange transition-colors flex items-center gap-2 group text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform transition-transform group-hover:translate-x-1">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Stay Updated
              {/* <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-orange rounded-full"></span> */}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest solar energy insights and offers.
            </p>
            <form onSubmit={handleSubmit} className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-orange focus:bg-white/10 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary-orange hover:bg-orange-600 text-white px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
            
            <div className="flex gap-4 mt-8">
              {[
                { name: 'Facebook', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                { name: 'Instagram', svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                { name: 'LinkedIn', svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></> },
                { name: 'Twitter', svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> }
              ].map((social) => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(244,121,32,0.5)] text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{social.svg}</svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-gray-200">
          <p>
            &copy; {currentYear} Amrit Electricals. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            <span>&lt;/&gt;</span> Digital Partner<a href="#" className="text-primary-orange hover:text-orange-400 transition-colors tracking-wide">Digital Web Connection</a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
