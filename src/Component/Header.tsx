import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Mail, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        // Offset for the floating pill
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="w-full relative z-40">
        
        {/* === TOP CONTACT BAR (Hidden on Mobile) === */}
        <div className="bg-primary-blue text-white hidden lg:block">
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center py-2.5 text-sm font-medium">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <PhoneCall size={16} className="text-primary-orange" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-orange" />
                <span>info@amritelectricals.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-orange" />
                <span>123 Energy Park, New Delhi</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* === MAIN NAVBAR (Initial State) === */}
        {!isScrolled && (
          <div className="w-full bg-white border-b border-gray-100 shadow-sm relative z-30">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20 lg:h-24">
              
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group">
                <img src={logo} alt="Amrit Electricals Logo" className="h-12 lg:h-16 w-auto" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8 h-full">
                {navLinks.map((link) => (
                  isHomePage ? (
                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="relative text-gray-800 font-bold hover:text-primary-orange transition-colors h-full flex items-center text-sm uppercase tracking-wider group">
                      {link.name}
                      <span className="absolute bottom-6 left-0 w-full h-[2px] bg-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                  ) : (
                    <Link key={link.name} to={`/${link.href}`} className="relative text-gray-800 font-bold hover:text-primary-orange transition-colors h-full flex items-center text-sm uppercase tracking-wider group">
                      {link.name}
                      <span className="absolute bottom-6 left-0 w-full h-[2px] bg-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </Link>
                  )
                ))}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden lg:block">
                <button 
                  onClick={onOpenContact}
                  className="bg-primary-orange hover:bg-orange-600 text-white px-8 py-3.5 font-bold transition-all shadow-md rounded-md transform hover:-translate-y-1 hover:shadow-lg text-sm uppercase tracking-wider"
                >
                  Get A Free Quote
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-4 lg:hidden">
                <button onClick={onOpenContact} className="bg-primary-orange text-white px-4 py-2 text-sm rounded-md font-bold">Quote</button>
                <button className="text-gray-900 p-2 bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* === UNIQUE FLOATING NAVBAR (Sticky State) === */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: -100, opacity: 0, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-4 left-1/2 z-50 w-[95%]  bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-200/50 px-4 md:px-8 py-3 flex justify-between items-center"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0,0)}>
              <img src={logo} alt="Amrit Electricals Logo" className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-800 font-bold hover:text-primary-orange transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={`/${link.href}`} className="text-gray-800 font-bold hover:text-primary-orange transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Right Side (Phone + Quote) */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-900">
                <PhoneCall className="w-4 h-4 text-primary-orange" />
                <p className="font-bold text-sm">+91 98765 43210</p>
              </div>
              <button onClick={onOpenContact} className="bg-primary-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-all shadow-md transform hover:scale-105 text-sm">
                Get A Quote
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <button onClick={onOpenContact} className="bg-primary-orange text-white px-4 py-1.5 text-sm rounded-full font-bold shadow-md">
                Quote
              </button>
              <button className="text-gray-900 p-1 bg-gray-100 rounded-full" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === MOBILE FULLSCREEN MENU === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} alt="Amrit Electricals Logo" className="h-10 w-auto" />
              </Link>
              <button className="text-gray-500 hover:text-gray-900 p-2 bg-gray-100 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-3xl font-black text-gray-800 hover:text-primary-orange transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={`/${link.href}`} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-gray-800 hover:text-primary-orange transition-colors">
                    {link.name}
                  </Link>
                )
              ))}
            </div>
            
            <div className="p-8 bg-gray-50">
              <div className="flex justify-center items-center gap-3 mb-6 text-gray-900">
                <PhoneCall className="w-6 h-6 text-primary-orange" />
                <span className="font-bold text-xl">+91 98765 43210</span>
              </div>
              <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="w-full bg-primary-orange text-white py-4 rounded-xl font-bold text-lg shadow-lg">
                Get a Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

