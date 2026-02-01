# 🔧 Critical Fixes - Code Examples

This document provides ready-to-implement code for the most critical website improvements.

---

## 1. Enhanced index.html with SEO Meta Tags

Replace your current `index.html` with this enhanced version:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>AshbitSoft - Intelligent Systems. Maximum Efficiency | IT Services & Automation</title>
    <meta name="title" content="AshbitSoft - Intelligent Systems. Maximum Efficiency | IT Services & Automation">
    <meta name="description" content="Transform your business with intelligent automation and robust architecture. We design bespoke software ecosystems including Google Apps automation, web development, and scalable cloud infrastructure.">
    <meta name="keywords" content="IT services, web development, automation, Google Apps Script, React development, cloud infrastructure, enterprise solutions, software automation, business automation">
    <meta name="author" content="AshbitSoft Solutions">
    <meta name="robots" content="index, follow">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ashbitsoft.com/">
    <meta property="og:title" content="AshbitSoft - Intelligent Systems. Maximum Efficiency">
    <meta property="og:description" content="We design bespoke software ecosystems that eliminate manual bottlenecks. Scale your operations without scaling your headcount.">
    <meta property="og:image" content="https://ashbitsoft.com/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="AshbitSoft">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://ashbitsoft.com/">
    <meta name="twitter:title" content="AshbitSoft - IT Services & Automation">
    <meta name="twitter:description" content="Transform your business with intelligent automation and robust architecture.">
    <meta name="twitter:image" content="https://ashbitsoft.com/twitter-card.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/src/assets/logoo.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/logoo.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://ashbitsoft.com/">
    
    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://images.unsplash.com">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#4F46E5">
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AshbitSoft Solutions",
      "url": "https://ashbitsoft.com",
      "logo": "https://ashbitsoft.com/src/assets/logoo.png",
      "description": "Enterprise-grade IT solutions including Google Apps automation, web development, and scalable cloud infrastructure",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-96912-07533",
        "contactType": "Customer Service",
        "email": "contact@ashsoft.com",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/ashbitsoft",
        "https://github.com/ashbitsoft",
        "https://twitter.com/ashbitsoft"
      ]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 2. Dynamic Page Titles Component

Create `src/components/PageMeta.jsx`:

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageMeta = () => {
  const location = useLocation();

  const pageTitles = {
    '/': 'AshbitSoft - Intelligent Systems. Maximum Efficiency | IT Services',
    '/services': 'Our Services - Web Development, Automation & Cloud | AshbitSoft',
    '/about': 'About Us - Expert IT Solutions Team | AshbitSoft',
    '/contact': 'Contact Us - Get a Free Consultation | AshbitSoft',
    '/portfolio': 'Portfolio - Our Projects & Case Studies | AshbitSoft',
  };

  const pageDescriptions = {
    '/': 'Transform your business with intelligent automation and robust architecture. We design bespoke software ecosystems that eliminate manual bottlenecks.',
    '/services': 'Explore our comprehensive IT services including Google Apps automation, modern web development, enterprise infrastructure, and AI solutions.',
    '/about': 'Learn about AshbitSoft - a team of expert engineers building scalable software and automating workflows for businesses worldwide.',
    '/contact': 'Ready to transform your business? Contact AshbitSoft for a free consultation. We respond within 24 hours.',
    '/portfolio': 'View our portfolio of successful projects including web applications, automation systems, and enterprise solutions.',
  };

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'AshbitSoft - IT Services & Automation';
    const description = pageDescriptions[location.pathname] || 'Professional IT services and automation solutions';
    
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://ashbitsoft.com${location.pathname}`);
    }
  }, [location]);

  return null;
};

export default PageMeta;
```

Add to `App.jsx`:

```jsx
import PageMeta from './components/PageMeta';

function App() {
  return (
    <Router>
      <PageMeta />
      <div className="w-full overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
        {/* rest of your app */}
      </div>
    </Router>
  );
}
```

---

## 3. Fix index.css (Remove Zoom)

Replace your `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Apply the default font globally */
@layer base {
  html {
    font-family: 'Plus Jakarta Sans', sans-serif;
    scroll-behavior: smooth;
    /* REMOVED: zoom: 95%; - This causes layout issues */
  }
  
  /* Use Outfit for headings automatically */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
  }
  
  /* Prevent horizontal overflow */
  body {
    overflow-x: hidden;
  }
  
  /* Improve focus visibility for accessibility */
  *:focus-visible {
    outline: 2px solid #4F46E5;
    outline-offset: 2px;
  }
  
  /* Screen reader only class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  .sr-only.focus:not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
}
```

---

## 4. Accessibility Improvements for Navbar

Update `src/components/Navbar.jsx`:

```jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import logo from '../assets/logoo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400";
  const logoColorClass = "text-slate-900 dark:text-white";

  const navBackgroundClass = scrolled
    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
    : "bg-transparent border-b border-transparent";

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    const baseStyle = "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200";
    
    if (isActive) {
      return `${baseStyle} text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30`;
    }
    return `${baseStyle} ${textColorClass} hover:bg-slate-50/50 dark:hover:bg-slate-800/50`;
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackgroundClass}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* LOGO SECTION */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              aria-label="AshbitSoft home"
            >
              <img 
                src={logo} 
                alt="AshbitSoft Logo" 
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`font-bold text-xl tracking-tight transition-colors ${logoColorClass}`}>
                Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f]">Soft</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-1">
              {navs.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={getLinkClass(item.path)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}

              <div className="h-6 w-px mx-4 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${textColorClass} hover:bg-slate-100 dark:hover:bg-slate-800`}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
              </button>

              {/* CTA Button */}
              <Link 
                to="/contact" 
                className="ml-4 px-5 py-2.5 rounded-lg text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition shadow-lg"
              >
                Book Call
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className={textColorClass}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'light' ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`${logoColorClass} hover:text-indigo-500 transition`}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div 
          id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-6 space-y-2">
            {navs.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)} 
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === item.path
                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
                {location.pathname === item.path && <ChevronRight size={16} aria-hidden="true" />}
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
    </>
  );
};

export default Navbar;
```

---

## 5. Add Main Content ID for Skip Link

Update `App.jsx`:

```jsx
function App() {
  return (
    <Router>
      <PageMeta />
      <div className="w-full overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans">
        <Navbar />
        <main id="main-content">  {/* Add this ID */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

---

## 6. Improved Contact Form with Validation

Update `src/pages/Contact.jsx` (add validation):

```jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter, CheckCircle2, Loader2, ArrowRight, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Dev',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: sanitizeInput(value) }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRadioChange = (type) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate before submitting
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');

    const formPayload = new FormData(e.target);
    formPayload.append("access_key", "cf30a0de-ccdd-4770-9a70-761e8a001a7f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'Web Dev', message: '' });
        setErrors({});
      } else {
        console.error("Error:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 py-12 px-4 flex items-center justify-center font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full relative z-10"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200 dark:border-slate-800">
          
          {/* LEFT SIDE: Info & Process */}
          <div className="lg:w-5/12 relative bg-indigo-600 dark:bg-indigo-950 p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Let's build something great.</h2>
              <p className="text-indigo-100 mb-8 text-base leading-relaxed">
                Ready to automate your workflow or scale your platform? We are ready to help.
              </p>

              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-6">How it works</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Discovery Call", desc: "We analyze your current workflow." },
                    { title: "Strategy & Quote", desc: "You get a fixed roadmap & price." },
                    { title: "Development", desc: "We build, test, and deploy." }
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-white/20 p-1 rounded-full">
                        <CheckCircle2 className="text-white h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{step.title}</h4>
                        <p className="text-xs text-indigo-200 mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 space-y-6 mt-8">
              <a href="mailto:contact@ashsoft.com" className="flex items-center gap-3 text-sm hover:text-white/80 transition group">
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition"><Mail size={18} /></div>
                <span className="font-medium">contact@ashsoft.com</span>
              </a>
              <div className="flex gap-3 pt-6 border-t border-white/10">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white" aria-label={`Social media link ${i + 1}`}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="lg:w-7/12 bg-white dark:bg-slate-900 p-8 md:p-12 relative">
            
            <AnimatePresence mode='wait'>
              {formStatus === 'success' ? (
                // SUCCESS STATE
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto mb-8">
                    Thanks! We'll be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                // FORM STATE
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <input type="hidden" name="project_type" value={formData.projectType} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input 
                        required
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text" 
                        className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                        placeholder="John Doe"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input 
                        required
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition`}
                        placeholder="john@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      I'm interested in...
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Project type">
                      {['Automation', 'Web Dev', 'Mobile', 'Enterprise'].map((type) => (
                        <div 
                          key={type} 
                          onClick={() => handleRadioChange(type)} 
                          className={`cursor-pointer text-center py-3 px-2 rounded-xl border text-xs font-bold transition-all duration-200 ${
                            formData.projectType === type 
                              ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-indigo-500' 
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700'
                          }`}
                          role="radio"
                          aria-checked={formData.projectType === type}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleRadioChange(type);
                            }
                          }}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea 
                      required
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4" 
                      className={`w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none`}
                      placeholder="Tell us a bit about your goals, timeline, and budget..."
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 text-sm rounded-lg flex items-center gap-2">
                      <AlertCircle size={16} /> Something went wrong. Please try again later.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm transform active:scale-[0.98]"
                  >
                    {formStatus === 'submitting' ? (
                      <>Sending... <Loader2 className="animate-spin" size={18}/></>
                    ) : (
                      <>Send Message <ArrowRight size={18} /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
```

---

## 7. Add Google Analytics

Create `src/utils/analytics.js`:

```javascript
// Google Analytics utility functions

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Common event trackers
export const trackCTAClick = (location, action) => {
  trackEvent('cta_click', {
    location,
    action,
  });
};

export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};
```

Add to `index.html` (in `<head>`):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Use in components:

```jsx
import { trackCTAClick, trackFormSubmit } from '../utils/analytics';

// Track CTA clicks
<button onClick={() => {
  trackCTAClick('hero', 'start_transformation');
  // ... rest of handler
}}>
  Start Your Transformation
</button>

// Track form submissions
const handleSubmit = async (e) => {
  e.preventDefault();
  trackFormSubmit('contact_form');
  // ... rest of submit logic
};
```

---

## 8. Create 404 Page

Create `src/pages/NotFound.jsx`:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-full">
            <Search size={48} className="text-slate-400" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Looking for something specific? Try these:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
```

Add to `App.jsx`:

```jsx
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <PageMeta />
      <div className="...">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />  {/* Add this */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

---

## 9. Environment Variables Setup

Create `.env.local` file in root:

```env
# Web3Forms API Key
VITE_WEB3FORMS_KEY=cf30a0de-ccdd-4770-9a70-761e8a001a7f

# Google Analytics
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Site URL
VITE_SITE_URL=https://ashbitsoft.com
```

Update Contact.jsx to use env variable:

```jsx
const API_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setFormStatus('submitting');

  const formPayload = new FormData(e.target);
  formPayload.append("access_key", API_KEY);  // Use env variable
  
  // ... rest of code
};
```

Add `.env.local` to `.gitignore`:

```
# Environment variables
.env.local
.env.*.local
```

---

## 10. Vercel Configuration for Security Headers

Create/update `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

---

## Summary of Critical Fixes

1. ✅ **SEO Meta Tags** - Enhanced index.html with all necessary meta tags
2. ✅ **Dynamic Page Titles** - Created PageMeta component
3. ✅ **CSS Fix** - Removed problematic zoom property
4. ✅ **Accessibility** - Added ARIA labels, skip link, and keyboard navigation
5. ✅ **Form Validation** - Comprehensive client-side validation
6. ✅ **Analytics** - Google Analytics integration
7. ✅ **404 Page** - Professional error page
8. ✅ **Environment Variables** - Secure API key management
9. ✅ **Security Headers** - Vercel configuration
10. ✅ **Main Content ID** - For skip navigation

---

## Next Steps

1. **Implement these fixes** in the order listed
2. **Test thoroughly** on different devices and browsers
3. **Run Lighthouse audit** to measure improvements
4. **Deploy to staging** before production
5. **Monitor analytics** after deployment

---

**Estimated Implementation Time:** 8-12 hours  
**Expected Impact:** Significant improvement in SEO, accessibility, and user experience

---

*For questions about any of these implementations, refer to the main WEBSITE_REVIEW_AND_IMPROVEMENTS.md document.*
