import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t-4 border-primary-orange">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary-blue p-2 rounded-lg">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white leading-none tracking-tight">
                  AMRIT
                </h2>
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
                  Electricals
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering homes and businesses with top-tier solar and electrical solutions. Your trusted partner for sustainable energy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-orange transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-orange transition-colors">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-gray-400 hover:text-primary-orange transition-colors">Home</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-primary-orange transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary-orange transition-colors">Services</a></li>
              <li><a href="/#why-us" className="text-gray-400 hover:text-primary-orange transition-colors">Why Choose Us</a></li>
              <li><a href="/#testimonials" className="text-gray-400 hover:text-primary-orange transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 hover:text-primary-orange transition-colors cursor-pointer">Solar Panel Installation</span></li>
              <li><span className="text-gray-400 hover:text-primary-orange transition-colors cursor-pointer">Commercial Wiring</span></li>
              <li><span className="text-gray-400 hover:text-primary-orange transition-colors cursor-pointer">Residential Electricals</span></li>
              <li><span className="text-gray-400 hover:text-primary-orange transition-colors cursor-pointer">Maintenance & Repairs</span></li>
              <li><span className="text-gray-400 hover:text-primary-orange transition-colors cursor-pointer">Energy Consultation</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-orange shrink-0 mt-1" size={20} />
                <span className="text-gray-400 text-sm">123 Energy Park, Tech Avenue, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-orange shrink-0" size={20} />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-orange shrink-0" size={20} />
                <span className="text-gray-400 text-sm">info@amritelectricals.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Amrit Electricals. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
