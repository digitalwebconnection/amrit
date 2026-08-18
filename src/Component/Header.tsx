import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, Mail, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  onOpenContact: () => void;
}

interface NavLinkItem {
  name: string;
  href: string;
}

interface SpotlightNavProps {
  navLinks: NavLinkItem[];
  isHomePage: boolean;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  activeSection: string;
  isFloating?: boolean;
}

const SpotlightNav: React.FC<SpotlightNavProps> = ({
  navLinks,
  isHomePage,
  handleNavClick,
  activeSection,
  isFloating = false,
}) => {
  const navRef = useRef<HTMLElement>(null);
  const activeIndex = Math.max(
    0,
    navLinks.findIndex((l) => l.href.replace('#', '') === activeSection)
  );
  const [hoverX, setHoverX] = useState<number | null>(null);

  // Refs for imperative spring animation
  const spotlightX = useRef(0);
  const ambienceX = useRef(0);

  // Mouse move and leave listener for spotlight
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightX.current = x;
      nav.style.setProperty('--spotlight-x', `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightX.current, targetX, {
          type: 'spring',
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightX.current = v;
            nav.style.setProperty('--spotlight-x', `${v}px`);
          },
        });
      }
    };

    nav.addEventListener('mousemove', handleMouseMove);
    nav.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      nav.removeEventListener('mousemove', handleMouseMove);
      nav.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeIndex]);

  // Ambience active position movement
  useEffect(() => {
    if (!navRef.current) return;
    const nav = navRef.current;
    const activeItem = nav.querySelector(`[data-index="${activeIndex}"]`);

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: 'spring',
        stiffness: 220,
        damping: 22,
        onUpdate: (v) => {
          ambienceX.current = v;
          nav.style.setProperty('--ambience-x', `${v}px`);
        },
      });
    }
  }, [activeIndex]);

  return (
    <nav
      ref={navRef}
      className={`relative hidden font-serif lg:flex items-center h-11 px-2 rounded-full transition-all duration-300 overflow-hidden ${
        isFloating
          ? ''
          : ''
      }`}
      style={{
        ['--spotlight-color' as any]: 'rgba(241, 130, 35, 0.18)',
        ['--ambience-color' as any]: '#F18223',
      }}
    >
      {/* 1. Moving Spotlight Layer (Follows Mouse Cursor) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hoverX !== null ? 1 : 0,
          background: `radial-gradient(120px circle at var(--spotlight-x, 0px) 50%, var(--spotlight-color, rgba(241,130,35,0.18)) 0%, transparent 65%)`,
        }}
      />

      {/* 2. Active Ambience Layer (Glow bar at bottom of active item) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] z-2"
        style={{
          background: `radial-gradient(70px circle at var(--ambience-x, 0px) 0%, var(--ambience-color, #F18223) 0%, transparent 100%)`,
        }}
      />

      {/* Navigation Items */}
      <ul className="relative z-10 flex items-center h-full gap-0.2  ">
        {navLinks.map((link, idx) => {
          const isActive = activeIndex === idx;

          return (
            <li key={link.name} className="relative h-full flex items-center   justify-center">
              {isHomePage ? (
                <a
                  href={link.href}
                  data-index={idx}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-lg    rounded-full transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange ${
                    isActive
                      ? 'text-primary-orange font-bold'
                      : 'text-black hover:text-primary-orange'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={`/${link.href}`}
                  data-index={idx}
                  className={`px-3.5 py-1.5 text-sm uppercase tracking-[0.14em] font-semibold rounded-full transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange ${
                    isActive
                      ? 'text-primary-orange font-bold'
                      : 'text-black hover:text-primary-orange'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children = 'Get A Free Quote',
  className = '',
  onClick,
  ...rest
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      className={`group relative inline-flex items-center justify-center overflow-hidden font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange disabled:pointer-events-none disabled:opacity-50 cursor-pointer ${className}`}
      {...(rest as any)}
    >
      {/* Text with shine mask */}
      <motion.span
        className="tracking-wider uppercase flex items-center justify-center h-full w-full relative z-10"
        style={{
          WebkitMaskImage:
            'linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))',
          maskImage:
            'linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))',
        }}
        initial={{ ['--mask-x' as any]: '100%' } as any}
        animate={{ ['--mask-x' as any]: '-100%' } as any}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'linear',
          repeatDelay: 1,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine effect uses the --shine variable */}
      <motion.span
        className="block absolute inset-0 rounded-inherit p-px pointer-events-none"
        style={{
          background:
            'linear-gradient(-75deg, transparent 30%, var(--shine, rgba(255,255,255,0.85)) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
        initial={{ backgroundPosition: '100% 0', opacity: 0 }}
        animate={{ backgroundPosition: ['100% 0', '0% 0'], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 1,
        }}
      />
    </motion.button>
  );
};

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);

      if (isHomePage) {
        const sections = ['testimonials', 'why-us', 'projects', 'services', 'about', 'home'];
        const scrollPosition = window.scrollY + 260;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition >= top) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks: NavLinkItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
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
        <div className="bg-black text-white   hidden  lg:block">
          <div className=" mx-auto px-4 md:px-6 flex justify-between items-center py-2 text-sm font-medium">
            <div className="flex items-center gap-8">
              <a href="tel:+919700705020" className="flex items-center gap-2 hover:text-primary-orange transition-colors">
                <PhoneCall size={16} className="text-primary-orange" />
                <span>+91 97007 05020</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary-orange" />
                <span>info@amritelectricals.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-orange shrink-0" />
                <span>PG Road, Secunderabad, Telangana 500003</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="hover:text-primary-orange transition-colors">
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

          {/* Ambient Solar Glow Behind Logo Area */}
          <div className="absolute -top-12 -left-12 w-80 h-44 bg-linear-to-br from-primary-orange/15 via-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-20 lg:h-20 relative">

            {/* Logo with Dynamic Background Graphics */}
            <Link to="/" className="relative flex items-center gap-3 group py-1.5" onClick={() => { if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              {/* Radial Flare Glow */}
              <div className="absolute -inset-3 bg-linear-to-r from-orange-500/20 via-blue-600/10 to-transparent rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10" />

              {/* Technical Solar Orbit / Compass SVG Graphic */}
              <div className="absolute top-0 -left-4 w-20 h-20 opacity-10 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 pointer-events-none -z-10">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary-orange">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="34" stroke="#203A96" strokeWidth="0.75" />
                  <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="4" r="2" fill="currentColor" />
                  <circle cx="96" cy="50" r="2" fill="#203A96" />
                </svg>
              </div>

              {/* Framed Glass Container for Logo */}
              <div className="relative transition-all duration-300">
                <img src={logo} alt="Amrit Electricals Logo" className="h-11 lg:h-14 w-auto object-contain" />
              </div>
            </Link>

            {/* Desktop Nav with Spotlight Animation */}
            <SpotlightNav
              navLinks={navLinks}
              isHomePage={isHomePage}
              handleNavClick={handleNavClick}
              activeSection={activeSection}
            />

            {/* Desktop CTA Animated Button */}
            <div className="hidden lg:block">
              <AnimatedButton
                onClick={onOpenContact}
                className="bg-white rounded-full border border-primary-orange hover:bg-primary-orange text-black hover:text-white px-8 py-2.5   font-serif hover:shadow-lg text-sm uppercase tracking-wider [--shine:rgba(255,255,255,0.9)]"
              >
                Get A Free Quote
              </AnimatedButton>
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

      {/* === UNIQUE FLOATING NAVBAR (Sticky State with Spotlight Animation) === */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: -100, opacity: 0, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-2 left-1/2 z-50 w-[98%]  bg-white backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-gray-200/60 px-4 md:px-4 py-3 flex justify-between items-center"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Amrit Electricals Logo" className="h-9 sm:h-11 w-auto" />
            </Link>

            {/* Desktop Floating Spotlight Nav */}
            <SpotlightNav
              navLinks={navLinks}
              isHomePage={isHomePage}
              handleNavClick={handleNavClick}
              activeSection={activeSection}
              isFloating={true}
            />

            {/* Right Side (Phone + Animated Quote Button) */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="tel:+919700705020" className="flex items-center gap-2 text-gray-900 hover:text-primary-orange transition-colors">
                <PhoneCall className="w-4 h-4 text-primary-orange" />
                <p className="font-bold text-sm">+91 97007 05020</p>
              </a>
              <AnimatedButton
                onClick={onOpenContact}
                className="bg-white rounded-full border border-primary-orange hover:bg-primary-orange text-black hover:text-white px-4 py-1.5 text-sm [--shine:rgba(255,255,255,0.9)]"
              >
                Get A Quote
              </AnimatedButton>
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
              <a href="tel:+919700705020" className="flex justify-center items-center gap-3 mb-6 text-gray-900 hover:text-primary-orange transition-colors">
                <PhoneCall className="w-6 h-6 text-primary-orange" />
                <span className="font-bold text-xl">+91 97007 05020</span>
              </a>
              <AnimatedButton
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-primary-orange hover:bg-orange-600 text-white py-4 rounded-xl text-lg shadow-lg [--shine:rgba(255,255,255,0.9)]"
              >
                Get a Free Quote
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
