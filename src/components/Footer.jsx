import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/logoo.png';
import {
  Github,
  Twitter,
  Linkedin,
  MapPin,
  ArrowRight,
  Phone,
  Code2,
  Cpu,
  Globe,
  Database,
  Zap,
  Megaphone,
  MessageSquare,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 overflow-hidden transition-colors duration-300 font-sans">

      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-16">

          {/* 1. Brand Section — takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#349ec9]/20 to-[#172a5f]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative bg-white dark:bg-slate-900 rounded-xl p-2 shadow-md group-hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800"
                >
                  <img src={logo} alt="AshbitSoft Logo" className="relative w-8 h-8 object-contain" />
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-slate-900 dark:text-white transition-colors">
                  Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f] font-extrabold">Soft</span>
                </span>
                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase mt-0.5 tracking-[0.42em] block">IT Solutions</span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              A full-cycle tech startup building scalable web apps, workflow automations, and AI integrations. We engineer your digital growth engine.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Systems Operational
              </span>
            </div>

            {/* Contact Info in brand column */}
            <div className="space-y-2 pt-2">
              <a href="tel:+919691207533" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Phone size={14} className="text-indigo-500 flex-shrink-0" />
                +91 96912 07533
              </a>
              <a href="https://wa.me/917697706427" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <MessageSquare size={14} className="text-indigo-500 flex-shrink-0" />
                +91 76977 06427
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                <MapPin size={14} className="flex-shrink-0" />
                Anuppur, MP, India · Remote-First
              </div>
            </div>
          </div>

          {/* 2. Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Full-Stack Development', to: '/services', icon: Code2 },
                { name: 'AI Integration', to: '/services', icon: Cpu },
                { name: 'Digital Marketing', to: '/services', icon: Megaphone },
                { name: 'Cloud & Database', to: '/services', icon: Database },
                { name: 'Workflow Automation', to: '/services', icon: Zap },
                { name: 'Java Enterprise', to: '/services', icon: Globe },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-600 transition-all duration-300" />
                    <motion.span whileHover={{ x: 3 }} className="transition-transform">{item.name}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Us', to: '/company/about' },
                { name: 'Blog', to: '/blog' },
                { name: 'Pricing', to: '/pricing' },
                { name: 'FAQ', to: '/company/faq' },
                { name: 'Security Policy', to: '/company/security' },
                { name: 'Privacy Policy', to: '/company/policy' },
                { name: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    <motion.span whileHover={{ x: 3 }} className="inline-block transition-transform">{item.name}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'For Startups', to: '/solutions/startups' },
                { name: 'For SMEs', to: '/solutions/smes' },
                { name: 'For Enterprises', to: '/solutions/enterprises' },
                { name: 'Features', to: '/features' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block">
                    <motion.span whileHover={{ x: 3 }} className="inline-block transition-transform">{item.name}</motion.span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA in footer */}
            <div className="mt-8">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-3">Start a Project</h4>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">
                  Get Free Consultation <ArrowRight size={14} />
                </motion.button>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500 font-medium">
            <span>© {currentYear}</span>
            <span className="font-bold text-slate-700 dark:text-slate-300">AshbitSoft</span>
            <span>· All rights reserved.</span>
            <span className="hidden md:inline">· Built for Scale.</span>
          </div>

          <div className="flex items-center gap-5">
            {/* Legal links */}
            <div className="flex gap-4 text-xs text-slate-400 dark:text-slate-500">
              <Link to="/company/policy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy</Link>
              <Link to="/company/security" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Security</Link>
              <Link to="/company/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms</Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/company/ashbitsoft", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/ashbitsoft", label: "GitHub" },
                { Icon: Instagram, href: "https://instagram.com/ashbitsoft", label: "Instagram" },
                { Icon: Twitter, href: "https://twitter.com/ashbitsoft", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;