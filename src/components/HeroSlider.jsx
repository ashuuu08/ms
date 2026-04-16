import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero/hero1.png';
import hero2 from '../assets/hero/hero2.png';
import hero3 from '../assets/hero/hero3.png';
import hero4 from '../assets/hero/hero4.png';

const slides = [
  {
    image: hero1,
    title: 'Custom Software Solutions for Modern Business',
    subtitle: 'AshbitSoft Services',
    description: 'We build high-performance, scalable web and mobile applications tailored to your specific business logic and growth goals.',
    buttonText: 'OUR SERVICES',
    buttonLink: '/services'
  },
  {
    image: hero2,
    title: 'Enterprise Cloud & Database Architecture',
    subtitle: 'Secure & Scalable',
    description: 'Specializing in robust backend systems, Supabase integration, and high-uptime cloud infrastructure for mission-critical apps.',
    buttonText: 'EXPLORE SOLUTIONS',
    buttonLink: '/solutions'
  },
  {
    image: hero3,
    title: 'Advanced AI & Machine Learning Integration',
    subtitle: 'Intelligent Automation',
    description: 'Leverage custom AI agents, LLM integrations, and predictive analytics to automate workflows and drive efficiency.',
    buttonText: 'AI SOLUTIONS',
    buttonLink: '/solutions'
  },
  {
    image: hero4,
    title: 'Digital Transformation & Performance Growth',
    subtitle: 'Full-Cycle Development',
    description: 'From MVPs to complex ecosystems, we provide end-to-end technical excellence to scale your digital presence.',
    buttonText: 'START PROJECT',
    buttonLink: '/contact'
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const slide = slides[current] || slides[0];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "linear" }} // Faster, more performant transition
          className="absolute inset-0 will-change-opacity"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-110 will-change-transform"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: 'scale(1.05)'
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-900/40 to-transparent dark:from-slate-950/90 dark:via-slate-950/50 dark:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />
            
            {/* Dynamic Accent Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
          </div>

          {/* Content - Optimized spacing to prevent clipping */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-[60px] md:pt-[80px]">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="will-change-transform"
              >
                <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/90 uppercase border-l-4 border-emerald-500 bg-white/5 backdrop-blur-md">
                  {slide.subtitle}
                </span>
                
                <h1 className="text-3xl md:text-6xl font-black mb-4 leading-[1.2] md:leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                  {slide.title}
                </h1>
                
                <p className="text-sm md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl font-medium">
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link to={slide.buttonLink}>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#059669' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 md:py-3.5 bg-emerald-600 text-white text-sm font-bold rounded-sm shadow-xl shadow-emerald-900/20 flex items-center gap-2 transition-colors duration-300"
                    >
                      {slide.buttonText} <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-10 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              current === idx ? 'w-12 bg-emerald-500' : 'w-6 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
