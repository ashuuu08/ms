import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logoo.png'; // Ensure the path is correct
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowRight,
  Phone // <--- Added Phone icon import
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoColorClass = "text-slate-900 dark:text-white"; 

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 overflow-hidden transition-colors duration-300">
      
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">

          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img 
                src={logo} 
                alt="AshSoft Logo" 
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoColorClass}`}>
                Ash<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f]">Soft</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We engineer scalable software and automate workflows. Built for performance, designed for growth.
            </p>

            <div className="pt-2">
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 System Operational
               </span>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm">
              {['Google Automation', 'Web Applications', 'Cloud Architecture', 'System Security'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-px bg-indigo-600"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Our Work', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter / Contact */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Stay Connected</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Join our newsletter for tech tips and updates.
            </p>
            <form className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full px-3 py-2 text-sm rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg transition">
                <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
               {/* Phone Number Added Here */}
               <a href="tel:9691207533" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 <Phone size={14} /> +91 96912 07533
               </a>
               
               <a href="mailto:contact@ashsoft.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 <Mail size={14} /> contact@ashsoft.com
               </a>
               
               <div className="flex items-center gap-2">
                 <MapPin size={14} /> Remote, India
               </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-500">
            <span>© {currentYear}</span>
            <Link to="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                alt="AshSoft" 
                className="w-4 h-4 object-contain"
              />
              <span className={`font-bold ${logoColorClass}`}>
                Ash<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f]">Soft</span>
              </span>
            </Link>
            <span>Solutions. All rights reserved.</span>
          </div>

          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;