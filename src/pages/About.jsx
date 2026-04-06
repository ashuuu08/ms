import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence, useScroll } from 'framer-motion';
import {
  CheckCircle2, Award, Users, Zap, Terminal, Globe, Code2, Cpu, Coffee, ArrowRight,
  Search, PenTool, Rocket, ChevronDown, XCircle, Lock, MessageSquare, CreditCard, ShieldCheck, Plane
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. DYNAMIC COUNTER HELPER ---
const Counter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = prefix + Math.floor(latest) + suffix;
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

// --- 2. FAQ COMPONENT ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  bg-white dark:bg-slate-950 border-b  border-slate-200 dark:border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
          {question}
        </span>
        <ChevronDown
          className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const ropeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ropeRef,
    offset: ["start center", "end center"]
  });

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
      <div className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              Ashbit Soft started with a rebellious mission: <strong className="text-slate-900 dark:text-white">To kill manual data entry.</strong>
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
            className="relative transform-gpu will-change-transform"
          >
            <div className="absolute inset-0 bg-indigo-600 md:blur-[80px] blur-2xl opacity-20 rounded-full"></div>
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 transform rotate-2 transition-transform duration-500"
            >
              {/* Animated Architectural Data Engine */}
              <motion.div
                className="relative w-full h-[420px] bg-[#0a0f1c] rounded-3xl p-6 flex flex-col shadow-2xl border border-slate-800/80 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Background Grid & Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]"></div>

                <div className="relative z-10 w-full h-full flex flex-col justify-between">
                  {/* Top Header / IDE Bar */}
                  <div className="flex justify-between items-center bg-slate-900/50 p-3 rounded-2xl border border-slate-800/50 md:backdrop-blur-sm shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5 ml-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      </div>
                      <div className="text-xs font-semibold text-slate-400 font-mono bg-[#050810] px-3 py-1 rounded-lg border border-slate-800 shadow-inner">ashbit-core.exe</div>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                        System Active
                      </span>
                    </div>
                  </div>

                  {/* Central Animated Architecture */}
                  <div className="flex-1 my-6 flex items-center justify-center relative">

                    {/* Left Node: Terminal/Raw Data */}
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl md:backdrop-blur-md flex flex-col items-center justify-center gap-2 z-20 shadow-xl will-change-transform"
                    >
                      <Terminal size={24} className="text-indigo-400" />
                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center">Raw<br />Data</span>
                    </motion.div>

                    {/* Connection Line 1 */}
                    <div className="flex-1 h-[2px] bg-slate-800/50 relative overflow-hidden mx-2">
                      <motion.div
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      />
                    </div>

                    {/* Center Node: Processing Engine (AshbitSoft) */}
                    <div className="relative z-20 mx-4 flex-shrink-0">
                      {/* Outer rotating ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border border-dashed border-indigo-500/40 rounded-full will-change-transform"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-10 border-[1.5px] border-slate-700/50 rounded-full border-t-indigo-500/40 will-change-transform"
                      />

                      <motion.div
                        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(99,102,241,0.2)", "0 0 40px rgba(99,102,241,0.5)", "0 0 20px rgba(99,102,241,0.2)"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-28 h-28 bg-[#0a0f1c] border border-indigo-500/40 rounded-full flex flex-col items-center justify-center gap-2 relative overflow-hidden md:backdrop-blur-xl will-change-transform"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-50"></div>
                        <Cpu size={32} className="text-white relative z-10" />
                        <span className="text-[8px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-300 relative z-10">ASHBIT CORE</span>
                      </motion.div>
                    </div>

                    {/* Connection Line 2 */}
                    <div className="flex-1 h-[2px] bg-slate-800/50 relative overflow-hidden mx-2">
                      <motion.div
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.9 }}
                        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                      />
                    </div>

                    {/* Right Node: Application */}
                    <motion.div
                      animate={{ y: [4, -4, 4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl md:backdrop-blur-md flex flex-col items-center justify-center gap-2 z-20 shadow-xl will-change-transform"
                    >
                      <Globe size={24} className="text-purple-400" />
                      <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center">Live<br />Output</span>
                    </motion.div>

                  </div>

                  {/* Code Execution Log (Bottom) */}
                  <div className="h-24 bg-[#050810] rounded-xl border border-slate-800/80 p-3 overflow-hidden font-mono text-[10px] sm:text-xs text-slate-400 relative shadow-inner">
                    <motion.div
                      animate={{ y: [0, -24, -48, -72, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col gap-2 relative z-10 will-change-transform"
                    >
                      <div className="flex gap-2">
                        <span className="text-indigo-500 font-bold">{'>'}</span>
                        <span className="text-slate-300">Initializing AshbitSoft architecture... <span className="text-emerald-400">[OK]</span></span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-indigo-500 font-bold">{'>'}</span>
                        <span className="text-slate-300">Compiling scalable business modules... <span className="text-amber-400">98%</span></span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-indigo-500 font-bold">{'>'}</span>
                        <span className="text-white font-semibold">Deploying secure REST API endpoints...</span>
                      </div>
                      <div className="flex gap-2 text-indigo-300">
                        <span className="text-indigo-500 font-bold">{'>'}</span>
                        <span>Connection established. Latency: 12ms.</span>
                      </div>
                      {/* Duplicated line to make infinite loop seamless */}
                      <div className="flex gap-2">
                        <span className="text-indigo-500 font-bold">{'>'}</span>
                        <span className="text-slate-300">Initializing AshbitSoft architecture... <span className="text-emerald-400">[OK]</span></span>
                      </div>
                    </motion.div>
                    {/* Fade overlaps so it looks like it's fading out at top/bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#050810] to-transparent z-20"></div>
                    <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#050810] to-transparent z-20"></div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- COMPANY EVOLUTION (Bento Grid) --- */}
      <div className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Evolution</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">The Build Log</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">

            {/* Block 1: The Spark (Large, Spans 2 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-2 row-span-1 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-[#0a0f1c] rounded-2xl p-7 relative overflow-hidden shadow-xl dark:shadow-2xl group border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors"
            >
              {/* Dynamic Energy Background */}
              <div className="absolute inset-0 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-b from-indigo-500/20 to-purple-500/5 rounded-full md:blur-[80px] blur-3xl pointer-events-none will-change-transform"
              />

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg dark:shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Zap size={22} className="text-white fill-white/20" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 transition-all">The Spark (2023)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl font-medium">
                  It started in a small space with a big idea: specific, high-leverage automation. We launched <span className="text-indigo-600 dark:text-white font-bold">"Script #1"</span> and saved our first client 30 hours a week. That was the moment we knew we were building something much bigger.
                </p>
              </div>
            </motion.div>

            {/* Block 2: Impact Stat (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-indigo-600 rounded-2xl p-6 relative overflow-hidden shadow-2xl flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Expanding Ripple Effect */}
              <motion.div
                animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 bg-indigo-400/30 rounded-full m-auto w-24 h-24"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 md:backdrop-blur-md rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 border border-white/20 shadow-xl group-hover:will-change-transform">
                  <CheckCircle2 size={24} className="text-white" />
                </div>
                <h3 className="text-4xl font-black text-white mb-1 tracking-tighter">150<span className="text-indigo-300">+</span></h3>
                <p className="text-indigo-100 font-bold tracking-widest uppercase text-[10px]">Projects Shipped</p>
              </div>
            </motion.div>

            {/* Block 3: Global Reach (Square) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl group hover:border-blue-500/50 transition-colors duration-500 overflow-hidden relative"
            >
              {/* Animated Map Grid in Background */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-1000" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-blue-50 dark:bg-blue-500/10 p-2.5 rounded-xl w-fit group-hover:bg-blue-500 transition-colors duration-500">
                    <Globe size={24} className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={`w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 opacity-80 md:backdrop-blur-sm bg-gradient-to-br ${i === 1 ? 'from-blue-400 to-indigo-500' : i === 2 ? 'from-purple-400 to-pink-500' : 'from-amber-400 to-orange-500'}`}></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">Global Scale</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Delivering cutting-edge solutions across <strong className="text-slate-900 dark:text-white">3+ countries</strong>.</p>
                </div>
              </div>
            </motion.div>

            {/* Block 4: Core DNA (Large, Spans 2 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="md:col-span-2 row-span-1 bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group flex flex-col justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

              <div className="flex flex-col md:flex-row gap-6 items-center h-full relative z-10 w-full">
                <div className="flex-1 w-full overflow-hidden">
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 size={20} className="text-purple-500" />
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">Our Tech DNA</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 font-medium max-w-lg text-sm">
                    We don't just write code; we architect powerful, scalable solutions. Our stack has evolved into a powerhouse handling massive scale.
                  </p>

                  {/* Infinite Marquee Tags inside a mask container */}
                  <div className="relative w-full overflow-hidden flex whitespace-nowrap py-1" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                    <motion.div
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="flex gap-3 min-w-[200%] will-change-transform"
                    >
                      {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'Next.js', 'PostgreSQL', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL'].map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-200 dark:border-slate-700/50 shadow-sm whitespace-nowrap hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* --- CORE VALUES (Animated Rope / Timeline) --- */}
      <div ref={ropeRef} className="py-16 lg:py-20 bg-white dark:bg-slate-950 relative overflow-x-hidden font-sans">
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">

          {/* DESKTOP CURSIVE TIMELINE */}
          <div className="relative w-full max-w-5xl mx-auto hidden md:block mt-12" style={{ height: '1400px' }}>

            {/* Loop SVG Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full opacity-90" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Faint Background Track */}
                <path
                  d="M 50 0 C 60 5, 65 10, 75 12 C 75 5, 80 5, 80 5 C 85 5, 85 8, 80 10 C 75 12, 35 20, 25 28 C 25 21, 20 21, 20 21 C 15 21, 15 24, 20 26 C 25 28, 65 36, 75 44 C 75 37, 80 37, 80 37 C 85 37, 85 40, 80 42 C 75 44, 35 52, 25 60 C 25 53, 20 53, 20 53 C 15 53, 15 56, 20 58 C 25 60, 65 68, 75 76 C 75 69, 80 69, 80 69 C 85 69, 85 72, 80 74 C 75 76, 35 84, 25 92 C 25 85, 20 85, 20 85 C 15 85, 15 88, 20 90 C 25 92, 40 100, 50 100"
                  className="stroke-blue-100 dark:stroke-slate-800"
                  strokeWidth="0.5"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Bright Scrolling Solid Fill */}
                <motion.path
                  d="M 50 0 C 60 5, 65 10, 75 12 C 75 5, 80 5, 80 5 C 85 5, 85 8, 80 10 C 75 12, 35 20, 25 28 C 25 21, 20 21, 20 21 C 15 21, 15 24, 20 26 C 25 28, 65 36, 75 44 C 75 37, 80 37, 80 37 C 85 37, 85 40, 80 42 C 75 44, 35 52, 25 60 C 25 53, 20 53, 20 53 C 15 53, 15 56, 20 58 C 25 60, 65 68, 75 76 C 75 69, 80 69, 80 69 C 85 69, 85 72, 80 74 C 75 76, 35 84, 25 92 C 25 85, 20 85, 20 85 C 15 85, 15 88, 20 90 C 25 92, 40 100, 50 100"
                  className="stroke-blue-500 dark:stroke-blue-400"
                  strokeWidth="0.8"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
            </div>

            {/* Exactly positioned text blocks mapping to loops */}
            {[
              { id: "01.", title: 'Understanding Before Building', description: 'We begin by deeply understanding your business goals, challenges, and users. Every successful digital solution starts with clarity, strategy, and alignment.' },
              { id: "02.", title: 'Collaboration & Transparency', description: 'We work as an extension of your team, maintaining open communication, clear timelines, and complete transparency throughout the development journey.' },
              { id: "03.", title: 'Innovation With Purpose', description: 'Innovation drives us, but always with intent. We apply modern technologies and creative thinking to solve real-world problems not just to follow trends.' },
              { id: "04.", title: 'Quality-Driven Execution', description: 'Our focus on quality ensures every solution is reliable, secure, and built to perform at scale. We test rigorously and deliver with precision.' },
              { id: "05.", title: 'Security & Scalability', description: 'We architect robust systems that protect your critical data and scale seamlessly as your user base and business operations expand over time.' },
              { id: "06.", title: 'Long-Term Partnership', description: 'Our relationship doesn\'t end at launch. We support, optimize, and continuously evolve your digital systems to help your business grow sustainably.' }
            ].map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <React.Fragment key={i}>
                  {/* Text Block */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className={`absolute w-[45%] flex flex-col ${isEven ? 'left-0 items-start' : 'right-0 items-start'}`}
                    style={{ top: `${10 + i * 16}%`, transform: 'translateY(-50%)' }}
                  >
                    <h4 className="text-3xl lg:text-4xl italic font-serif text-cyan-400 mb-2">{item.id}</h4>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Node Dot Exact Center Alignment */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute w-5 h-5 rounded-full bg-cyan-400 border-[4px] border-white dark:border-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-20"
                    style={{
                      top: `${10 + i * 16}%`,
                      left: isEven ? '80%' : '20%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                </React.Fragment>
              )
            })}
          </div>

          {/* MOBILE LINEAR TIMELINE (Hidden on Desktop) */}
          <div className="md:hidden flex flex-col gap-16 relative py-10 mt-8 mb-16">
            {/* Faint Background Track */}
            <div className="absolute left-[24px] top-0 bottom-0 w-1 bg-blue-100 dark:bg-slate-800/80 z-0" />
            {/* Scrolling Solid Fill */}
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
              className="absolute left-[24px] top-0 bottom-0 w-1 bg-blue-500 z-0 will-change-transform"
            />

            {[
              { id: "01.", title: 'Understanding Before Building', description: 'We begin by deeply understanding your business goals, challenges, and users. Every successful digital solution starts with clarity, strategy, and alignment.' },
              { id: "02.", title: 'Collaboration & Transparency', description: 'We work as an extension of your team, maintaining open communication, clear timelines, and complete transparency throughout the development journey.' },
              { id: "03.", title: 'Innovation With Purpose', description: 'Innovation drives us, but always with intent. We apply modern technologies and creative thinking to solve real-world problems not just to follow trends.' },
              { id: "04.", title: 'Quality-Driven Execution', description: 'Our focus on quality ensures every solution is reliable, secure, and built to perform at scale. We test rigorously and deliver with precision.' },
              { id: "05.", title: 'Security & Scalability', description: 'We architect robust systems that protect your critical data and scale seamlessly as your user base and business operations expand over time.' },
              { id: "06.", title: 'Long-Term Partnership', description: 'Our relationship doesn\'t end at launch. We support, optimize, and continuously evolve your digital systems to help your business grow sustainably.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16 z-10"
              >
                {/* Node Dot */}
                <div className="absolute left-[16px] top-2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-[4px] border-white dark:border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                <h4 className="text-2xl italic font-serif text-cyan-400 mb-1">{item.id}</h4>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* THE EXACT BLUE CTA BANNER SLIDING LEFT TO RIGHT */}
          <div className="w-full max-w-5xl mx-auto mt-16 md:mt-24 relative z-20 pb-20 px-4 flex items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, amount: 0.1 }}
               transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
               className="w-full"
             >
                {/* The Banner Container */}
                <div className="bg-[#007bff] dark:bg-blue-600 rounded-xl w-full flex flex-col md:flex-row items-center p-8 md:p-10 text-white relative shadow-[0_20px_50px_rgba(0,123,255,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:overflow-visible transition-all duration-300">
                
               {/* Left Scribble/Plane Icon inside left */}
               <div className="mb-6 md:mb-0 md:mr-8 shrink-0 z-10">
                 <div className="relative">
                    <Rocket className="text-white w-10 h-10 md:w-12 md:h-12 transform rotate-45 opacity-100 drop-shadow-md" />
                    {/* Small starry squiggles aesthetic */}
                    <div className="absolute -top-3 -right-3 text-white text-xs opacity-80">✦</div>
                    <div className="absolute -bottom-2 -left-2 text-white text-[10px] opacity-70">⋆</div>
                 </div>
               </div>

               {/* Center Text */}
               <div className="flex-1 text-center md:text-left md:pr-8 z-10 mb-8 md:mb-0">
                  <h3 className="text-2xl md:text-[28px] font-bold mb-3 tracking-tight leading-tight">Let's Create Something That Lasts</h3>
                  <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                      Build durable, high-impact digital systems designed for long-term success with a trusted software development and digital transformation partner.
                  </p>
               </div>

               {/* White Pill Button */}
               <div className="shrink-0 z-10 relative">
                  <Link to="/contact" className="bg-white text-[#007bff] dark:text-slate-900 font-extrabold px-10 py-4 md:px-12 md:py-4 rounded-full hover:bg-[#f0f4ff] hover:scale-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15)] inline-block text-base tracking-wide">
                    Let's Talk
                  </Link>
               </div>

               {/* Right Side Illustration - Flaring Rocket outside the box */}
               <div className="hidden md:block absolute right-[-160px] top-1/2 transform -translate-y-1/2 z-30 pointer-events-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)] animate-[pulse_3s_ease-in-out_infinite]">
                  <div className="relative text-white">
                     {/* Rocket Graphic */}
                     <Rocket size={140} className="opacity-100 transform rotate-[45deg]" />
                  </div>
               </div>

               {/* Mobile Inner Rocket Graphic */}
               <div className="md:hidden absolute right-[10px] bottom-[10px] z-0 pointer-events-none drop-shadow-xl text-white">
                  <Rocket size={80} className="opacity-40 transform rotate-45" />
               </div>
             </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- STRATEGIC IMPACT (MISSION & VISION) --- */}
      <div className="py-16 md:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Modern grid background for section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Commitment (Mission) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] p-10 lg:p-14 h-full flex flex-col justify-between overflow-hidden shadow-2xl dark:shadow-none">
                {/* Decorative watermarks */}
                <div className="absolute top-10 right-10 text-slate-50 dark:text-slate-800/50 font-black text-8xl select-none pointer-events-none rotate-12">
                  01
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-[2px] bg-indigo-600"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-600 dark:text-indigo-400">The Commitment</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                    Our <span className="italic font-serif">Mission</span>
                  </h3>
                  
                  <p className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 leading-relaxed">
                    To empower businesses of all sizes with technology that drives growth, efficiency, and innovation.
                  </p>
                </div>

                <div className="relative pt-8 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                    We democratize enterprise-grade technology, removing the barrier of complexity and cost. Our goal is to make digital transformation a reality for startups and global players alike.
                  </p>
                  
                  {/* Stylized Icon Bottom Right */}
                  <div className="mt-12 flex justify-end">
                    <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 animate-bounce">
                      <Rocket size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Future (Vision) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
              
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] p-10 lg:p-14 h-full flex flex-col justify-between overflow-hidden shadow-2xl dark:shadow-none">
                <div className="absolute top-10 right-10 text-slate-50 dark:text-slate-800/50 font-black text-8xl select-none pointer-events-none -rotate-12">
                  02
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-[2px] bg-purple-600"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-purple-600 dark:text-purple-400">The Future</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                    Our <span className="italic font-serif">Vision</span>
                  </h3>
                  
                  <p className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 leading-relaxed">
                    To become the most trusted technology partner for businesses worldwide, known for exceptional results.
                  </p>
                </div>

                <div className="relative pt-8 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                    We envision a world where manual processes are obsolete and technology amplifies human potential. We are building the tools that will define the next era of global business.
                  </p>
                  
                  <div className="mt-12 flex justify-end">
                    <div className="p-5 rounded-2xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 animate-pulse">
                      <Globe size={32} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* --- OUR EVOLUTION SECTION (REIMAGINED) --- */}
      <div className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full md:blur-[120px] blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full md:blur-[120px] blur-3xl -z-0"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: The Narrative */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Our Evolution
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8">
                  From One Script to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Global Scale.</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                    <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <span className="block text-indigo-500 font-bold text-sm mb-1">2023: THE SPARK</span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      AshbitSoft began with a single observation: businesses were drowning in manual chaos. We wrote our first invoice automation script for a small firm, and it saved them 20 hours a week.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-indigo-500">
                    <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <span className="block text-indigo-500 font-bold text-sm mb-1 uppercase tracking-tighter">Today: SYSTEMS THAT SCALE</span>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                      We've evolved. Today, we build robust SaaS platforms, high-frequency automation engines, and cloud infrastructures for companies scaling from $0 to $10M+.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Component (Tech DNA Stack Cards) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                {/* Visual Connector Line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent rotate-45 hidden md:block"></div>
                
                {[
                  { name: "Full-Stack Web", desc: "Next.js & Node", icon: Code2, color: "from-blue-500 to-indigo-600" },
                  { name: "Automation Bots", desc: "Python & AI Drivers", icon: Cpu, color: "from-purple-500 to-pink-600" },
                  { name: "Cloud Infra", desc: "AWS Architecture", icon: Globe, color: "from-orange-500 to-amber-600" },
                  { name: "Core Systems", desc: "Scalable DNA", icon: Zap, color: "from-emerald-500 to-teal-600" }
                ].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden"
                  >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.07] transition-opacity duration-300`}></div>
                    
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-indigo-500/20`}>
                      <tech.icon size={28} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tech.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{tech.desc}</p>
                    
                    {/* Decorative Dot Grid on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="2" cy="2" r="1.5" /><circle cx="12" cy="2" r="1.5" /><circle cx="22" cy="2" r="1.5" />
                        <circle cx="2" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="22" cy="12" r="1.5" />
                        <circle cx="2" cy="22" r="1.5" /><circle cx="12" cy="22" r="1.5" /><circle cx="22" cy="22" r="1.5" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- STRATEGIC FRAMEWORK (PROCESS) --- */}
      <div className="py-16 lg:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">The Strategic <span className="text-indigo-600">Framework</span></h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">How we engineer clarity from chaos through a systematic, result-driven approach.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Background Progressive Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -z-10"></div>
            
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative bg-white dark:bg-slate-900/50 md:backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-indigo-500/20 transition-all duration-500 will-change-transform"
              >
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-indigo-500/30 transition-all duration-300">
                  <step.icon size={24} />
                </div>
                <div className="absolute top-8 right-8 text-4xl font-black text-slate-50 dark:text-slate-800 group-hover:text-indigo-500/10 transition-colors pointer-events-none select-none">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- COMPARISON SECTION (Redesigned: Grid Cards) --- */}
      <div className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Not Just Another Dev Shop</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg">Why industry leaders choose us over freelancers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "Code Ownership",
                bad: "They hold it hostage",
                good: "100% Yours, Forever"
              },
              {
                icon: MessageSquare,
                title: "Communication",
                bad: "Slow Emails",
                good: "Direct Slack Access"
              },
              {
                icon: CreditCard,
                title: "Pricing Model",
                bad: "Hourly Padding",
                good: "Flat Project Fee"
              },
              {
                icon: ShieldCheck,
                title: "Post-Launch",
                bad: "They Disappear",
                good: "30-Day Guarantee"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.3)" }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-600 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>

                {/* Comparison Lines */}
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
      </div>

      {/* --- FAQ SECTION (OPTIMIZED) --- */}
      <div className="py-16 lg:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Stick Column */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  Support
                </div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">Frequently Asked Questions</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Everything you need to know about our process, technology, and delivery systems.</p>
                
                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-400 dark:text-slate-500 mb-4 italic">Still have questions?</p>
                  <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline inline-flex items-center gap-2 group text-sm">
                    Connect with our team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Accordion Column */}
            <div className="md:w-2/3 space-y-4">
              {[
                {
                  q: "Do you work with non-technical founders?",
                  a: "Absolutely. We speak business, not just binary. We'll explain the tech in plain English and focus on how it improves your bottom line."
                },
                {
                  q: "Do you offer maintenance after launch?",
                  a: "Yes. We offer a 30-day bug-fix guarantee on all projects. After that, we have flexible retainer packages to keep your systems running smoothly."
                },
                {
                  q: "Can you integrate with my existing software?",
                  a: "If it has an API, we can connect to it. We specialize in linking tools like Airtable, Slack, Shopify, Gmail, and custom databases together."
                },
                {
                  q: "What is your typical timeline?",
                  a: "Most automation scripts take 3-7 business days. Full-scale web applications typically take 4-8 weeks depending on the technical complexity."
                }
              ].map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- FINAL CTA SECTION --- */}
      <div className="py-16 md:py-16 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden relative transform-gpu">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full md:blur-3xl blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Scale?</h2>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">
              Stop letting manual tasks slow you down. Let's build a system that works as hard as you do.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition shadow-xl"
              >
                Get a Quote <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
};

export default About;