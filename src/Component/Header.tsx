import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Mail, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.webp';

interface HeaderProps {
  onOpenContact: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
}

interface NavProps {
  navLinks: NavLinkItem[];
  isHomePage: boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DesktopNav: React.FC<NavProps> = ({
  navLinks,
  isHomePage,
  handleNavClick,
}) => {
  return (
    <nav className="hidden lg:flex items-center h-11 px-2">
      <ul className="flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            {isHomePage ? (
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-semibold text-slate-800 hover:text-primary-orange hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={`/${link.href}`}
                className="px-3 py-1.5 text-sm font-semibold text-slate-800 hover:text-primary-orange hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface CorporateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const CorporateButton: React.FC<CorporateButtonProps> = ({
  children = 'Get A Free Quote',
  className = '',
  onClick,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Partners', href: '#partners' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="w-full relative z-40">

        {/* === TOP CONTACT BAR (Hidden on Mobile) === */}
        <div className="bg-black text-white   hidden  lg:block">
          <div className=" mx-auto px-4 md:px-6 flex justify-between items-center py-2 text-sm font-medium">
            <div className="flex items-center gap-8">
              <a href="tel:+919700705020" className="flex items-center gap-2 hover:text-primary-orange transition-colors">
                <PhoneCall size={16} className="text-primary-orange" />
                <span>+91 97007 05020</span>
              </a>
              <a href="mailto:info@amritelectricals.com" className="flex items-center gap-2 hover:text-primary-orange transition-colors">
                <Mail size={16} className="text-primary-orange" />
                <span>info@amritelectricals.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=Amrit+Electricals+PG+Road+Secunderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-orange transition-colors"
              >
                <MapPin size={16} className="text-primary-orange shrink-0" />
                <span>PG Road, Secunderabad, Telangana 500003</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* === MAIN NAVBAR (Initial State) === */}
        <div className="w-full bg-white border-b border-gray-100 shadow-sm relative z-30 overflow-hidden">
          {/* Subtle Background Geometric Circuit & Grid Graphic */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] -z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="solar-header-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#203A96" strokeWidth="1" />
                  <circle cx="40" cy="0" r="1.5" fill="#F18223" />
                  <path d="M 0 20 L 40 20 M 20 0 L 20 40" fill="none" stroke="#203A96" strokeWidth="0.5" strokeDasharray="2 4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#solar-header-pattern)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20 relative">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 py-1.5" onClick={() => { if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={logo} alt="Amrit Electricals Logo" className="h-11 lg:h-14 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <DesktopNav
              navLinks={navLinks}
              isHomePage={isHomePage}
              handleNavClick={handleNavClick}
            />

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <CorporateButton
                onClick={onOpenContact}
                className="bg-primary-orange hover:bg-orange-600 text-white rounded-lg px-7 py-2.5 shadow-sm text-sm"
              >
                Get A Free Quote
              </CorporateButton>
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
      </header>

      {/* === STICKY NAVBAR === */}
      {isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 px-4 md:px-8 py-2.5 flex justify-between items-center transition-all duration-200">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Amrit Electricals Logo" className="h-9 sm:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <DesktopNav
            navLinks={navLinks}
            isHomePage={isHomePage}
            handleNavClick={handleNavClick}
          />

          {/* Right Side Phone + Quote Button */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:+919700705020" className="flex items-center gap-2 text-slate-800 hover:text-primary-orange transition-colors">
              <PhoneCall className="w-4 h-4 text-primary-orange" />
              <span className="font-bold text-sm">+91 97007 05020</span>
            </a>
            <CorporateButton
              onClick={onOpenContact}
              className="bg-primary-orange hover:bg-orange-600 text-white rounded-lg px-5 py-2 text-xs"
            >
              Get A Quote
            </CorporateButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button onClick={onOpenContact} className="bg-primary-orange text-white px-4 py-1.5 text-sm rounded-md font-bold shadow-xs">
              Quote
            </button>
            <button className="text-gray-900 p-1 bg-gray-100 rounded-md" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      )}

      {/* === MOBILE FULLSCREEN MENU === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-white flex flex-col"
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
                  <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-bold text-gray-800 hover:text-primary-orange transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link key={link.name} to={`/${link.href}`} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-gray-800 hover:text-primary-orange transition-colors">
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="p-8 bg-gray-50">
              <a href="tel:+919700705020" className="flex justify-center items-center gap-3 mb-6 text-gray-900 hover:text-primary-orange transition-colors">
                <PhoneCall className="w-6 h-6 text-primary-orange" />
                <span className="font-bold text-xl">+91 97007 05020</span>
              </a>
              <CorporateButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-primary-orange hover:bg-orange-600 text-white py-3.5 rounded-xl text-base shadow-md"
              >
                Get a Free Quote
              </CorporateButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
