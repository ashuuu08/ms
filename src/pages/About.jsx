import React, { useEffect, useRef, useState, useCallback } from 'react';
import SEO from '../components/SEO';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import {
  CheckCircle2, Award, Users, Zap, Terminal, Globe, Code2, Cpu, Coffee, ArrowRight,
  Search, PenTool, Rocket, ChevronDown, XCircle, Lock, MessageSquare, CreditCard, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AntiGravityBackground from '../components/AntiGravityBackground';

/* ══════════════════════════════════════════════
   SECTION 0 — SHARED UTILS
══════════════════════════════════════════════ */
const Counter = ({ value, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on('change', (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.floor(v) + suffix;
    });
  }, [springValue, prefix, suffix]);
  return <span ref={ref}>0</span>;
};

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <button onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none group">
        <span className={`text-base font-bold transition-colors ${open ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
          {question}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 ml-4">
          <ChevronDown size={16} className={open ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <p className="pb-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    { name: "React / Vite", icon: Globe },
    { name: "Java / Spring", icon: Coffee },
    { name: "Python / AI", icon: Cpu },
    { name: "Node.js", icon: Terminal },
    { name: "AWS / Cloud", icon: CheckCircle2 },
  ];

  const processSteps = [
    { title: "Audit & Discovery", desc: "We dive deep into your current workflow to find bottlenecks.", icon: Search },
    { title: "Architect & Design", desc: "We map out the automation logic before writing a single line of code.", icon: PenTool },
    { title: "Build & Automate", desc: "Agile sprints to build your custom software or script.", icon: Terminal },
    { title: "Launch & Train", desc: "Seamless deployment with video training for your team.", icon: Rocket },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden font-sans">
      <SEO 
        title="About Our Tech Startup - Our Mission & Vision" 
        description="Learn about AshbitSoft's journey from custom scripts to scalable systems. Our mission is to democratize technology for businesses worldwide."
        ogUrl="/company/about"
      />

      {/* --- HERO SECTION --- */}
      <div className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-10 translate-x-1/3 -translate-y-1/4">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-slate-200 dark:text-slate-800" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#dots)"></rect></svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100 dark:border-indigo-800">
              Est. 2023
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Bridging the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Business & Code.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              DevScript Solutions started with a rebellious mission: <strong className="text-slate-900 dark:text-white">To kill manual data entry.</strong>
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              What began as automating simple workflows has evolved into a powerhouse agency building <strong>Enterprise-grade Systems</strong> and <strong>Social Media Bots</strong>. We don't just write code; we engineer time.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 dark:border-slate-800 pt-8">
              {[
                { val: 3, label: "Years Exp" },
                { val: 150, label: "Projects" },
                { val: 100, label: "Delivery Rate", sfx: "%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    <Counter value={stat.val} suffix={stat.sfx ? stat.sfx : "+"} />
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-600 blur-[80px] opacity-20 rounded-full"></div>
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 transform rotate-2 transition-transform duration-500"
            >
              {/* Animated Growth Graph - Ultra Realistic */}
              <motion.div
                className="relative w-full h-full min-h-[320px] bg-white dark:bg-slate-900 rounded-xl p-6 flex flex-col shadow-inner border border-slate-100 dark:border-slate-800 overflow-hidden group"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6 z-10">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Clients</div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      50+
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full flex items-center gap-1">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        +2400%
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 text-xs font-semibold text-indigo-600 dark:text-indigo-400">2023-2026</div>
                  </div>
                </div>

                {/* The Graph Container */}
                <div className="relative flex-grow w-full">
                  {/* Y-Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[10px] font-medium text-slate-400 text-right pr-2">
                    <span>50</span>
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>

                  {/* Graph Area */}
                  <div className="absolute left-10 right-0 top-2 bottom-6">
                    {/* Horizontal Grid */}
                    {[0, 20, 40, 60, 80, 100].map((p, i) => (
                      <div key={i} className="absolute w-full h-px bg-slate-300 dark:bg-slate-600" style={{ top: `${p}%` }}></div>
                    ))}

                    {/* SVG Chart */}
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                      <defs>
                        <linearGradient id="realGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Main Data Path (2 Clients -> 50 Clients) */}
                      <motion.path
                        d="M0,95 L50,85 L100,70 L150,65 L200,40 L250,25 L300,5"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))"
                        variants={{
                          rest: { pathLength: 1, transition: { duration: 0.5 } },
                          hover: { pathLength: [0, 1], transition: { duration: 1.5, ease: "easeInOut" } }
                        }}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                      />

                      {/* Area Fill */}
                      <motion.path
                        d="M0,95 L50,85 L100,70 L150,65 L200,40 L250,25 L300,5 V100 H0 Z"
                        fill="url(#realGradient)"
                        stroke="none"
                        variants={{
                          rest: { opacity: 1, transition: { duration: 0.5 } },
                          hover: { opacity: [0, 1], transition: { duration: 1.5, delay: 0.2 } }
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      />

                      {/* Interactive Vertical Line (Visible by default on mobile, Hover on Desktop) */}
                      <line
                        x1="300" y1="5" x2="300" y2="100"
                        stroke="#cbd5e1"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Data Point Dot */}
                      <motion.circle
                        cx="300" cy="5" r="5"
                        fill="#4f46e5"
                        stroke="white"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 2.2, type: "spring" }}
                      />

                      {/* Start Point Dot (2 Clients) */}
                      <circle cx="0" cy="95" r="3" fill="#cbd5e1" />

                      {/* Tooltip Box (Visible by default on mobile, move on hover on desktop) */}
                      <g className="transition-all duration-300 transform lg:group-hover:-translate-y-2">
                        <rect x="230" y="15" width="70" height="35" rx="6" fill="#1e293b" className="shadow-xl" />
                        <text x="265" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">50+ Clients</text>
                        <text x="265" y="43" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="bold">2026 Target</text>
                      </g>
                    </svg>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute left-10 right-0 bottom-0 h-6 flex justify-between text-[10px] font-medium text-slate-400 pt-2 px-1">
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                    <span>Jan 2026</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- COMPANY EVOLUTION (Bento Grid) --- */}
      <div className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Evolution</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">The Build Log</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

            {/* Block 1: The Origin (Large, Spans 2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Zap size={24} className="text-yellow-300" />
                </div>
                <h4 className="text-2xl font-bold mb-3">The Spark (2023)</h4>
                <p className="text-indigo-100 leading-relaxed max-w-lg">
                  It started in a small garage with a big idea: specific, high-leverage automation. We launched "Script #1" and saved our first client 30 hours a week. That was the moment we knew this was big.
                </p>
              </div>
            </motion.div>

            {/* Block 2: Impact Stat (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col justify-center items-center text-center group"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-1">100+</h3>
              <p className="text-slate-500 font-bold">Projects Shipped</p>
            </motion.div>

            {/* Block 3: Global Reach (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 dark:bg-black rounded-3xl p-8 border border-slate-800 shadow-lg text-white"
            >
              <Globe size={40} className="text-blue-500 mb-6" />
              <h4 className="text-xl font-bold mb-2">Global Scale</h4>
              <p className="text-slate-400 text-sm mb-4">From local startups to enterprises in 15+ countries.</p>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 font-semibold ml-1">+11 more</span>
            </div>

            {/* Block 4: Core DNA (Large, Spans 2 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Tech DNA</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    We don't just write code; we architect solutions. Our stack has evolved from simple scripts to a powerhouse of AI, Cloud, and Edge technologies.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {['React', 'Node.js', 'Python', 'AI', 'Cloud'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/3 h-32 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <Code2 size={48} className="text-slate-300 dark:text-slate-600" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* --- CORE VALUES --- */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

            {/* Exactly positioned text blocks mapping to loops */}
            {[
              {
                icon: Zap,
                title: 'Speed & Efficiency',
                description: 'We move fast without breaking things. Agile sprints, rapid prototyping, and quick iterations are in our DNA.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: ShieldCheck,
                title: 'Quality First',
                description: 'Every project undergoes rigorous testing and code review. We deliver production-ready solutions, not prototypes.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Users,
                title: 'Client Partnership',
                description: 'We\'re not just vendors—we\'re partners in your success. Your wins are our wins, and we\'re invested in your growth.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Terminal,
                title: 'Technical Excellence',
                description: 'We stay ahead of the curve with continuous learning and adoption of cutting-edge technologies and best practices.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Transparency',
                description: 'No hidden fees, no surprises. Clear communication, honest timelines, and upfront pricing on every project.',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Rocket,
                title: 'Innovation Mindset',
                description: 'We don\'t just follow trends—we create solutions that push boundaries and solve real business problems.',
                color: 'from-rose-500 to-red-500'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <div className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  To empower businesses of all sizes with technology that drives growth, efficiency, and innovation.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We believe every business deserves access to enterprise-grade solutions without enterprise-level complexity or cost. Our mission is to democratize technology and make powerful automation, custom development, and digital transformation accessible to startups, SMEs, and enterprises alike.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  To become the most trusted technology partner for businesses worldwide, known for delivering exceptional results.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We envision a future where every business, regardless of size or industry, can leverage cutting-edge technology to compete globally. We're building a world where manual processes are obsolete, data drives decisions, and technology amplifies human potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Evolution</h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">From One Script to Large Scale Systems</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            In 2023, we noticed a problem. Small businesses were running on chaos—spreadsheets everywhere, missed emails, and manual data entry. We wrote our first script to automate an invoice. <br /><br />
            Today, we don't just fix spreadsheets. We build <strong>Full-Stack Web Applications</strong>, <strong>Social Media Automation Bots</strong>, and <strong>Cloud Architectures</strong> for companies scaling from $0 to $10M.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <tech.icon className="h-8 w-8 text-slate-400 mb-3" />
                <span className="font-semibold text-slate-700 dark:text-slate-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE BLUEPRINT (PROCESS) --- */}
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Blueprint</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">How we take you from chaos to clarity.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center md:text-left"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-lg shadow-indigo-500/20">
                  <step.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. NOT JUST A DEV SHOP ═══════════════════════════ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">Not Just Another Dev Shop</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Why industry leaders choose us over freelancers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: 'Code Ownership', bad: 'They hold it hostage', good: '100% Yours, Forever' },
              { icon: MessageSquare, title: 'Communication', bad: 'Slow Emails', good: 'Direct Slack Access' },
              { icon: CreditCard, title: 'Pricing Model', bad: 'Hourly Padding', good: 'Flat Project Fee' },
              { icon: ShieldCheck, title: 'Post-Launch', bad: 'They Disappear', good: '30-Day Guarantee' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    <XCircle size={16} className="text-red-400 shrink-0" />
                    <span className="line-through decoration-red-400/50">{item.bad}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item.good}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
          </div>
          <div className="space-y-2">
            <FaqItem
              question="Do you work with non-technical founders?"
              answer="Absolutely. We speak business, not just binary. We'll explain the tech in plain English and focus on how it improves your bottom line."
            />
            <FaqItem
              question="Do you offer maintenance after launch?"
              answer="Yes. We offer a 30-day bug-fix guarantee on all projects. After that, we have flexible retainer packages to keep your systems running smoothly."
            />
            <FaqItem
              question="Can you integrate with my existing software?"
              answer="If it has an API, we can connect to it. We specialize in linking tools like Airtable, Slack, Shopify, Gmail, and custom databases together."
            />
            <FaqItem
              question="What is your typical timeline?"
              answer="Most automation scripts take 3-7 days. Full-scale web applications typically take 4-8 weeks depending on complexity."
            />
          </div>
          <div className="space-y-0 divide-y divide-slate-100 dark:divide-slate-800">
            {[
              { q: 'Do you work with non-technical founders?', a: "Absolutely. We speak business, not just binary. We'll explain the tech in plain English and focus on how it improves your bottom line." },
              { q: 'Do you offer maintenance after launch?', a: 'Yes. We offer a 30-day bug-fix guarantee on all projects. After that, flexible retainer packages keep your systems running smoothly.' },
              { q: 'Can you integrate with my existing software?', a: 'If it has an API, we can connect to it. We specialize in linking tools like Airtable, Slack, Shopify, Gmail, and custom databases.' },
              { q: 'What is your typical timeline?', a: 'Most automation scripts take 3–7 days. Full-scale web applications typically take 4–8 weeks depending on complexity.' },
            ].map((item, i) => <FaqItem key={i} question={item.q} answer={item.a} />)}
          </div>
        </div>
      </section>

      {/* ══ 9. CTA ════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 md:p-14 text-center bg-slate-900 text-white overflow-hidden border border-white/10 shadow-2xl group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest mb-5">
                <Sparkles size={12} /> Ready to Scale?
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Stop letting manual tasks{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">slow you down.</span>
              </h2>
              <p className="text-slate-300 mb-10 max-w-xl mx-auto text-base leading-relaxed">
                Let's build a system that works as hard as you do. Free 30-min discovery call — zero obligation.
              </p>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="group/btn inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition shadow-xl">
                  Get a Quote
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-10 text-center bg-white dark:bg-slate-950">
        <p className="text-[10px] font-black text-slate-200 dark:text-slate-700 uppercase tracking-[0.4em]">
          AshbitSoft — Engineering Future Assets — Since 2023.
        </p>
      </div>
    </div>
  );
};

export default About;