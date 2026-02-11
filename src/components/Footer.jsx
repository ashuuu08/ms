import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/logoo.png';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Phone,
  Code2,
  Cpu,
  Globe,
  Database
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoColorClass = "text-slate-900 dark:text-white";

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 overflow-hidden transition-colors duration-300 font-sans">

      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">

          {/* 1. Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              {/* Logo Icon with backdrop */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#349ec9]/20 to-[#172a5f]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative bg-white dark:bg-slate-900 rounded-xl p-2 shadow-md group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
                >
                  <img
                    src={logo}
                    alt="AshSoft Logo"
                    className="relative w-8 h-8 object-contain"
                  />
                </motion.div>
              </div>

              {/* Brand Name */}
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight leading-none transition-colors ${logoColorClass}`}>
                  Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f] font-extrabold">Soft</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-0.5 tracking-[0.42em] block">
                  IT Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              We engineer scalable software and automate workflows. From MERN stack to AI integration, we build your digital future.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Systems Operational
              </span>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Full-Stack Dev', to: '/services/development', icon: Code2 },
                { name: 'AI Solutions', to: '/services/ai', icon: Cpu },
                { name: 'Digital Marketing', to: '/services/marketing', icon: Globe },
                { name: 'Cloud & Database', to: '/services/cloud', icon: Database },
                { name: 'Automation', to: '/services/automation', icon: Code2 }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <motion.span
                      whileHover={{ width: 12 }}
                      className="w-0 group-hover:w-1 transition-all duration-300 h-px bg-indigo-600 border-indigo-600"
                    ></motion.span>
                    <motion.span whileHover={{ x: 5 }} className="transition-transform">
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Us', to: '/company/about' },
                { name: 'Contact', to: '/contact' },
                { name: 'Pricing', to: '/pricing' },
                { name: 'FAQ', to: '/company/faq' },
                { name: 'Security', to: '/company/security' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    <motion.span whileHover={{ x: 5 }} className="inline-block transition-transform">
                      {item.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Get in Touch</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Have a project? Let's talk.
            </p>

            <div className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400">
              <a href="tel:9691207533" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors"
                >
                  <Phone size={16} className="group-hover:text-indigo-600" />
                </motion.div>
                <span className="font-medium">+91 96912 07533</span>
              </a>

              <a href="mailto:contact@ashbitsoft.in" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors"
                >
                  <Mail size={16} className="group-hover:text-indigo-600" />
                </motion.div>
                <span className="font-medium">contact@ashbitsoft.in</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
                  <MapPin size={16} />
                </div>
                <span>Remote-First</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 font-medium">
            <span>© {currentYear}</span>
            <span className="font-bold text-slate-700 dark:text-slate-300">AshbitSoft</span>
            <span>• Built for Scale.</span>
          </div>

          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;