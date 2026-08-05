import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

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
      setIsScrolled(window.scrollY > 20);
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
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary-blue p-2 rounded-lg group-hover:bg-primary-orange transition-colors">
            <Zap className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-primary-blue leading-none tracking-tight">
              AMRIT
            </h1>
            <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">
              Electricals
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            isHomePage ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-gray-700 hover:text-primary-orange transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={`/${link.href}`}
                className="text-sm font-semibold text-gray-700 hover:text-primary-orange transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <button 
            onClick={onOpenContact}
            className="bg-primary-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-blue p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-gray-800 hover:text-primary-orange py-2 border-b border-gray-50"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name}
                    to={`/${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-primary-orange py-2 border-b border-gray-50"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-primary-orange text-white py-3 rounded-xl font-semibold mt-2"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
