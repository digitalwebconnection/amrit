import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';
import logo from '../assets/logo.webp';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Residential & Commercial Solar', href: '#services' },
    { name: 'Turnkey Solar KITs (1-25 kW)', href: '#services' },
    { name: 'Polycab Inverters & Conversion', href: '#services' },
    { name: 'DLMS Net-Meters & CTs', href: '#services' },
    { name: 'ACDB/DCDB & CITEL SPDs', href: '#services' },
  ];

  return (
    <footer className="relative bg-[#000000] text-gray-300 pt-1 pb-8 font-sans border-t border-white/5 overflow-hidden selection:bg-primary-orange selection:text-white">

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-6 mt-4 md:mt-10">

          {/* Brand Info (Larger Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pr-8">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block">
              <img src={logo} alt="Amrit Electricals Logo" className="h-16 w-auto object-contain" />
            </Link>

            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-primary-orange shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-0.5">Office &amp; Supply Depot</p>
                  <a
                    href="https://maps.google.com/?q=Amrit+Electricals+PG+Road+Secunderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-primary-orange text-xs sm:text-sm leading-relaxed transition-colors block"
                  >
                    Ground Floor, Mecleodguda, Backside Mamta sweets, No 1, H, 8-107, PG Road, beside Marwadi School, Secunderabad, Telangana 500003
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-lg text-primary-orange shrink-0">
                  <Phone size={18} />
                </div>
                <a href="tel:+919700705020" className="text-gray-100 hover:text-primary-orange transition-colors text-sm font-medium">
                  +91 97007 05020
                </a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 font-medium text-gray-100">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-primary-orange transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform transition-transform group-hover:translate-x-1">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 lg:ml-8">
            <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Our Services
            </h3>
            <ul className="space-y-3 font-medium text-gray-100">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenContact) {
                        onOpenContact();
                      } else {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="hover:text-primary-orange transition-colors flex items-center gap-2 group text-sm cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-orange opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform transition-transform group-hover:translate-x-1">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-wider relative inline-block">
              Stay Updated
            </h3>
            <p className="text-gray-100 text-sm mb-4">
              Subscribe to our newsletter for the latest solar energy insights and offers.
            </p>
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                name="newsletter_email"
                id="newsletter_email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-orange focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary-orange hover:bg-orange-600 text-white px-4 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>

            <div className="flex gap-4 mt-8">
              {[
                { name: 'WhatsApp', href: 'https://wa.me/919700705020', svg: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path> },
                { name: 'Facebook', href: 'https://facebook.com', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                { name: 'Instagram', href: 'https://instagram.com', svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                { name: 'LinkedIn', href: 'https://linkedin.com', svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></> },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(244,121,32,0.5)] text-gray-400"
                >
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
            <span>&lt;/&gt;</span> Digital Partner{' '}
            <a href="https://digitalwebconnection.com" target="_blank" rel="noopener noreferrer" className="text-primary-orange hover:text-orange-400 transition-colors tracking-wide">
              Digital Web Connection
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
