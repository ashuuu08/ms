import React, { useEffect, useRef, useMemo } from 'react';
import { 
  motion, 
  useInView, 
  useMotionValue, 
  useSpring, 
  useTransform,
  useMotionTemplate
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layout, 
  Server, 
  FileSpreadsheet,
  TrendingUp,
  Clock,
  Users,
  Bell,
  Code2,
  Database,
  Globe,
  Cpu // <--- Added missing import
} from 'lucide-react';
import Feedback from '../components/Feedback';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- COMPONENT: OPTIMIZED TRANSPARENT PARTICLE RING ---
const ParticleRing = ({ mouseX, mouseY }) => {
  const particles = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => {
      const angle = (i / 80) * 2 * Math.PI;
      const radius = 250 + Math.random() * 400; 
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        id: i,
        initialX: x,
        initialY: y,
        size: Math.random() * 5 + 1,
        colorClass: i % 2 === 0 
          ? 'bg-indigo-500/80 dark:bg-indigo-400/80' 
          : 'bg-slate-400/80 dark:bg-slate-600/80',
        depth: Math.random() * 0.2 + 0.05, 
        delay: Math.random() * 2,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden bg-transparent">
      {particles.map((p) => {
        const x = useTransform(mouseX, (value) => p.initialX + (value * p.depth));
        const y = useTransform(mouseY, (value) => p.initialY + (value * p.depth));

        return (
          <motion.div
            key={p.id}
            style={{ x, y, width: p.size, height: p.size }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full ${p.colorClass} will-change-transform`}
          />
        );
      })}
    </div>
  );
};

// --- HELPER: COUNTING ANIMATION ---
const Counter = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
    });
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const cardX = useTransform(smoothX, (v) => v * -0.03); 
  const cardY = useTransform(smoothY, (v) => v * -0.03);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-20 overflow-hidden min-h-[90vh] flex items-center bg-transparent">
  
        <ParticleRing mouseX={smoothX} mouseY={smoothY} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: Text */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="text-center lg:text-left z-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-6 cursor-default shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                System & Automation Architects
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Turn Chaos Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                   Clockwork.
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop trading time for money. We build <strong>custom software ecosystems</strong> that run your business while you sleep.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition shadow-xl shadow-slate-500/20 flex items-center justify-center gap-2 group text-sm transform hover:-translate-y-1">
                  Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm shadow-sm">
                   Explore Services
                </Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Visual (Minimized & Optimized) */}
            <motion.div 
               style={{ x: cardX, y: cardY }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative hidden lg:block perspective-1000 max-w-md mx-auto"
            >
               {/* MAIN CARD: Dashboard (Scaled Down) */}
               <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-[2rem] p-6 shadow-2xl scale-95 hover:scale-100 transition-transform duration-500">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
                           <Zap size={20} />
                        </div>
                        <div>
                           <div className="text-sm font-bold text-slate-900 dark:text-white">System Status</div>
                           <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">LIVE MONITORING</div>
                        </div>
                     </div>
                     <div className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Optimal
                     </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-slate-400 text-[10px] font-bold uppercase mb-1 flex items-center gap-1"><Clock size={12}/> Hours Saved</div>
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">42<span className="text-xs font-normal text-slate-400 ml-1">/wk</span></div>
                     </div>
                     <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="text-slate-400 text-[10px] font-bold uppercase mb-1 flex items-center gap-1"><TrendingUp size={12}/> Efficiency</div>
                        <div className="text-2xl font-extrabold text-emerald-500">+200%</div>
                     </div>
                  </div>

                  {/* Animated List */}
                  <div className="space-y-2">
                     {[
                        { text: "Lead Captured via API", time: "Now", icon: Users },
                        { text: "Invoice #2024 sent", time: "5m", icon: FileSpreadsheet },
                        { text: "Backup Complete", time: "1h", icon: Server }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-default border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                           <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-500 dark:text-indigo-400">
                              <item.icon size={14} />
                           </div>
                           <div className="flex-1">
                              <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">{item.text}</div>
                           </div>
                           <div className="text-[10px] text-slate-400 font-mono">{item.time}</div>
                        </div>
                     ))}
                  </div>

                  {/* Floating Notification - Shifted position */}
                  <motion.div 
                     animate={{ y: [0, -8, 0] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     className="absolute -right-8 top-16 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2 scale-90"
                  >
                     <div className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full text-blue-600">
                        <Bell size={16} />
                     </div>
                     <div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">New Alert</div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Bot Active 🤖</div>
                     </div>
                  </motion.div>

               </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Transparent & Blended) */}
      <section className="py-12 bg-transparent relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-800/50 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50 dark:divide-slate-800/50">
                {[
                    { label: "Uptime Guarantee", val: 99.9, suffix: "%" },
                    { label: "Tasks Automated", val: 1.5, suffix: "M+" },
                    { label: "Client Savings", val: 500, prefix: "$", suffix: "k+" },
                    { label: "ROI Average", val: 300, suffix: "%" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center">
                        <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                            <Counter value={stat.val} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                        </div>
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Spotlight Cards) */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Our Expertise</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto">
                  Bridging the gap between manual drudgery and digital efficiency.
              </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <SpotlightCard 
                to="/services/automation"
                icon={FileSpreadsheet}
                title="Business Automation"
                desc="Spreadsheet bots, PDF generators, and workflow scripts that replace manual data entry."
                techs={['Google Script', 'Python', 'Zapier']}
                color="emerald"
            />
            <SpotlightCard 
                to="/services/web"
                icon={Globe}
                title="Web Development"
                desc="Lightning-fast React dashboards and websites designed to convert visitors into clients."
                techs={['React', 'Next.js', 'Tailwind']}
                color="blue"
            />
            <SpotlightCard 
                to="/services/enterprise"
                icon={Database}
                title="Enterprise Systems"
                desc="Scalable backend architectures capable of handling millions of requests securely."
                techs={['Node.js', 'AWS', 'Docker']}
                color="violet"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How We Work</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "1. Audit & Strategy", desc: "We map your current workflow to find bottlenecks." },
                    { title: "2. Agile Build", desc: "Rapid development sprints with continuous feedback." },
                    { title: "3. Launch & Scale", desc: "Zero-downtime deployment with full training." }
                ].map((step, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-indigo-50 dark:bg-indigo-900/20 mb-6">
                <Cpu size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Ready to upgrade your workflow?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl mb-10">Stop doing repetitive tasks. Start building systems.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-12 py-5 rounded-full hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 text-lg">
              Get a Free Quote <ArrowRight size={20} />
            </Link>
        </div>
      </section>

    </div>
  );
};

// --- SUB-COMPONENT: SPOTLIGHT EXPERTISE CARD ---
const SpotlightCard = ({ to, icon: Icon, title, desc, techs, color }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const textColors = {
        emerald: 'text-emerald-600 dark:text-emerald-400',
        blue: 'text-blue-600 dark:text-blue-400',
        violet: 'text-violet-600 dark:text-violet-400'
    };

    const iconBg = {
        emerald: 'bg-emerald-100 dark:bg-emerald-900/30',
        blue: 'bg-blue-100 dark:bg-blue-900/30',
        violet: 'bg-violet-100 dark:bg-violet-900/30'
    };

    return (
        <Link to={to} className="block h-full">
            <motion.div 
                variants={fadeInUp} 
                className="group relative h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight Gradient Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                650px circle at ${mouseX}px ${mouseY}px,
                                rgba(14, 165, 233, 0.1),
                                transparent 80%
                            )
                        `
                    }}
                />
                
                <div className="relative p-8 h-full flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl ${iconBg[color]} ${textColors[color]} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300`}>
                        <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-sm">
                        {desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {techs.map((t, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-lg uppercase tracking-wide">
                                {t}
                            </span>
                        ))}
                    </div>
                    
                    <div className={`absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${textColors[color]}`}>
                        <ArrowRight />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default Home;