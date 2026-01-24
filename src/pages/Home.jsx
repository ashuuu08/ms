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
  Cpu,
  Star,
  Quote,
  Cloud
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

            {/* RIGHT SIDE: Visual */}
            <motion.div 
               style={{ x: cardX, y: cardY }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative hidden lg:block perspective-1000 max-w-md mx-auto"
            >
               {/* MAIN CARD: Dashboard */}
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

                  {/* Floating Notification */}
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

      {/* 2. STATS SECTION (Transparent) */}
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

    {/* --- 5. TECH STACK MARQUEE (Redesigned) --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                The Engine Room
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Powering Next-Gen Applications
            </h2>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
            
            {/* Gradient Masks (Fade edges) */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent"></div>

            <motion.div 
                className="flex gap-6 items-center whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {/* Duplicated list for seamless loop */}
                {[...Array(2)].map((_, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                       {[
                         { name: "React", icon: Code2, color: "text-blue-500", shadow: "group-hover:shadow-blue-500/20", border: "group-hover:border-blue-500/50" },
                         { name: "Node.js", icon: Server, color: "text-green-500", shadow: "group-hover:shadow-green-500/20", border: "group-hover:border-green-500/50" },
                         { name: "AWS Cloud", icon: Cloud, color: "text-orange-500", shadow: "group-hover:shadow-orange-500/20", border: "group-hover:border-orange-500/50" },
                         { name: "MongoDB", icon: Database, color: "text-emerald-500", shadow: "group-hover:shadow-emerald-500/20", border: "group-hover:border-emerald-500/50" },
                         { name: "AppScript", icon: FileSpreadsheet, color: "text-yellow-500", shadow: "group-hover:shadow-yellow-500/20", border: "group-hover:border-yellow-500/50" },
                         { name: "Next.js", icon: Zap, color: "text-slate-900 dark:text-white", shadow: "group-hover:shadow-slate-500/20", border: "group-hover:border-slate-500/50" },
                         { name: "Python", icon: Globe, color: "text-blue-400", shadow: "group-hover:shadow-blue-400/20", border: "group-hover:border-blue-400/50" },
                         { name: "Tailwind", icon: Layout, color: "text-cyan-500", shadow: "group-hover:shadow-cyan-500/20", border: "group-hover:border-cyan-500/50" }
                       ].map((tech, i) => (
                           <div 
                             key={i} 
                             className={`group relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tech.border} ${tech.shadow}`}
                           >
                              {/* Icon Box */}
                              <div className={`w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center ${tech.color}`}>
                                  <tech.icon size={22} />
                              </div>
                              
                              {/* Text */}
                              <div className="flex flex-col">
                                  <span className="text-lg font-bold text-slate-700 dark:text-slate-200">{tech.name}</span>
                                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Enterprise Ready</span>
                              </div>

                              {/* Subtle Glow Overlay */}
                              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-current ${tech.color}`}></div>
                           </div>
                       ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- 6. FLOATING TESTIMONIALS (Scrolling Marquee) --- */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-6xl mx-auto mb-16 px-4">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Don't just take our word for it.</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">See how we've transformed businesses just like yours.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex">
                        {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-slate-700 dark:text-white font-bold">5.0/5 Rating</span>
                </div>
            </div>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent"></div>
            
            <motion.div 
                className="flex gap-8 w-max"
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
                {[...Array(2)].map((_, groupIndex) => (
                    <React.Fragment key={groupIndex}>
                        {[
                            {
                                quote: "We were drowning in spreadsheets. The team automated our entire billing process in 2 weeks. It feels like magic.",
                                author: "Sarah J.",
                                role: "Operations Director",
                                color: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/10"
                            },
                            {
                                quote: "The web portal they built is lightning fast. Our client engagement went up by 40% immediately after launch.",
                                author: "Mike T.",
                                role: "Founder",
                                color: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10"
                            },
                            {
                                quote: "Professional, communicative, and they actually understood our business logic. Best dev team we've hired.",
                                author: "Elena R.",
                                role: "CTO",
                                color: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/10"
                            },
                            {
                                quote: "Saved us 20 hours a week. The automation script just works. Highly recommend for any agency owner.",
                                author: "David K.",
                                role: "Agency Owner",
                                color: "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10"
                            }
                        ].map((t, i) => (
                            <div 
                                key={i}
                                className={`w-[400px] p-8 rounded-3xl border ${t.color} relative shrink-0`}
                            >
                                <Quote size={40} className="text-slate-300 dark:text-slate-700 absolute top-6 right-6 opacity-50" />
                                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed relative z-10 font-medium text-lg">"{t.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold text-sm">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 px-3 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-indigo-50 dark:bg-indigo-900/20 mb-6">
                <Cpu size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Ready to upgrade your workflow?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl mb-10">Stop doing repetitive tasks. Start building systems.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-10 py-4 rounded-full hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 text-lg">
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