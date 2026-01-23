import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Sun, Moon, ChevronRight } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Navigation Links
  const navs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  // --- NEW: Scroll to Top on Route Change ---
  useEffect(() => {
    // 1. Scroll to top of the window
    window.scrollTo(0, 0);
    
    // 2. Reset the navbar "scrolled" state so it becomes transparent again immediately
    setScrolled(false);
    
    // 3. Close mobile menu if open (safety check)
    setIsOpen(false);
  }, [location.pathname]);

  // Handle Scroll (Visual style for navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- STYLING LOGIC ---
  const textColorClass = "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400";
  const logoColorClass = "text-slate-900 dark:text-white";

  // Background: Transparent at top, Glassmorphism when scrolled
  const navBackgroundClass = scrolled
    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
    : "bg-transparent border-b border-transparent";

  // Active Link Style
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseStyle = "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200";
    
    // Active State
    if (isActive) {
      return `${baseStyle} text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30`;
    }

    // Inactive State
    return `${baseStyle} ${textColorClass} hover:bg-slate-50/50 dark:hover:bg-slate-800/50`;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 text-white group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/30`}>
              <Terminal size={20} />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${logoColorClass}`}>
              ash<span className="text-indigo-500">Soft</span>
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-1">
            {navs.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={getLinkClass(item.path)}
              >
                {item.name}
              </Link>
            ))}

            <div className="h-6 w-px mx-4 bg-slate-200 dark:bg-slate-700"></div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${textColorClass} hover:bg-slate-100 dark:hover:bg-slate-800`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition shadow-lg"
            >
              Book Call
            </Link>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className={textColorClass}>
               {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${logoColorClass} hover:text-indigo-500 transition`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
        <div className="px-4 py-6 space-y-2">
          {navs.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              // setIsOpen(false) is redundant here because of the useEffect above, 
              // but good to keep for explicit interaction feedback
              onClick={() => setIsOpen(false)} 
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                 location.pathname === item.path
                 ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                 : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {item.name}
              {location.pathname === item.path && <ChevronRight size={16} />}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/30"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;