import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight, ChevronDown } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import logo from '../assets/logoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Navigation Links
  const navs = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Features', path: '/features' },
    { name: 'Blog', path: '/blog' },
  ];

  // Solutions Dropdown Items
  const solutionsDropdownItems = [
    { name: 'Startups', path: '/solutions/startups' },
    { name: 'SMEs', path: '/solutions/smes' },
    { name: 'Enterprises', path: '/solutions/enterprises' },
  ];

  // Company Dropdown Items
  const companyDropdownItems = [
    { name: 'About', path: '/company/about' },
    { name: 'FAQ', path: '/company/faq' },
    { name: 'Security', path: '/company/security' },
    { name: 'Policy', path: '/company/policy' },
  ];

  // Scroll to Top on Route Change
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
    setIsOpen(false);
  }, [location.pathname]);

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Zorvyn-inspired styling with your original colors
  const navBackgroundClass = scrolled
    ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-lg shadow-slate-900/5"
    : "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/30 dark:border-slate-800/30";

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseStyle = "relative px-4 py-2.5 text-sm font-medium transition-all duration-300 group";

    if (isActive) {
      return `${baseStyle} text-indigo-600 dark:text-indigo-400`;
    }
    return `${baseStyle} text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* Logo Section - Enhanced with structured design */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Icon with backdrop */}
            <div className="relative">
              {/* Glow effect backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#349ec9]/20 to-[#172a5f]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Logo container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-white dark:bg-slate-900 rounded-xl p-2 shadow-md group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
              >
                <img
                  src={logo}
                  alt="AshSoft Logo"
                  className="relative w-8 h-8 object-contain"
                />
              </motion.div>
            </div>

            {/* Brand Name with enhanced typography */}
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tight leading-none text-slate-900 dark:text-white transition-colors">
                Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f] font-extrabold">Soft</span>
              </span>
              {/* Tagline - Stretched to match name width */}
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-0.5 tracking-[0.42em] block">
                IT Solutions
              </span>
              {/* Subtle underline effect */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#349ec9] to-[#172a5f] transition-all duration-500 rounded-full mt-0.5"></div>
            </div>
          </Link>

          {/* Desktop Menu - Centered Navigation */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {/* Render in specific order: Home, Solutions, others, Company */}
            <Link to="/" className={getLinkClass('/')}>
              <span className="relative">
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 transition-all duration-300 ${location.pathname === '/' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
              </span>
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <Link
                to="/solutions"
                className={getLinkClass('/solutions')}
              >
                <span className="relative flex items-center gap-1">
                  Solutions
                  <ChevronDown size={16} className={`transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                  {/* Animated underline indicator */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 transition-all duration-300 ${location.pathname.startsWith('/solutions') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}></span>
                </span>
              </Link>

              {/* Dropdown Menu - Simple & Clean */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-auto min-w-[200px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${solutionsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {solutionsDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${location.pathname === item.path
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav items after Solutions */}
            {navs.filter(item => item.name !== 'Home').map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={getLinkClass(item.path)}
              >
                <span className="relative">
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 transition-all duration-300 ${location.pathname === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
                </span>
              </Link>
            ))}

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                className={getLinkClass('/company')}
              >
                <span className="relative flex items-center gap-1">
                  Company
                  <ChevronDown size={16} className={`transition-transform duration-300 ${companyDropdownOpen ? 'rotate-180' : ''}`} />
                  {/* Animated underline indicator */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 transition-all duration-300 ${location.pathname.startsWith('/company') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}></span>
                </span>
              </button>

              {/* Dropdown Menu - Simple & Clean */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${companyDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="py-2">
                  {companyDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${location.pathname === item.path
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20'
                        : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle - Refined design */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* CTA Button - Premium gradient with hover effect */}
            {/* CTA Button - Premium gradient with hover effect */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-2.5 rounded-lg text-sm font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-slate-900 dark:bg-white transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-white dark:text-slate-900 group-hover:text-white transition-colors">
                  Let's Talk
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-screen w-[280px] bg-white dark:bg-slate-950 z-[70] shadow-2xl md:hidden flex flex-col border-r border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800/60">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2 group">
                  <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
                  </div>
                  <span className="font-bold text-lg text-slate-900 dark:text-white">
                    Ashbit<span className="text-indigo-600 dark:text-indigo-400">Soft</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2 custom-scrollbar">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname === '/'
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                    }`}
                >
                  Home
                  {location.pathname === '/' && (
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  )}
                </Link>

                {/* Solutions Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname.startsWith('/solutions')
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      }`}
                  >
                    <span>Solutions</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {solutionsDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-1"
                      >
                        {solutionsDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 ml-4 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                              ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                              }`}
                          >
                            {item.name}
                            {location.pathname === item.path && (
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Company Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname.startsWith('/company')
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      }`}
                  >
                    <span>Company</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${companyDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {companyDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-1"
                      >
                        {companyDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-3 ml-4 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === item.path
                              ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                              }`}
                          >
                            {item.name}
                            {location.pathname === item.path && (
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Items */}
                {navs.filter(item => item.name !== 'Home').map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${location.pathname === item.path
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                      }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex w-full items-center justify-center gap-2 py-4 rounded-xl font-semibold overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-500/25"
                >
                  <div className="absolute inset-0 bg-slate-900 dark:bg-indigo-600 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    Start Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <div className="mt-4 flex items-center justify-between px-2">
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">Theme Mode</span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm"
                  >
                    {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav >
  );
};

export default Navbar;