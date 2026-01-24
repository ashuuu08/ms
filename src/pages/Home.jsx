import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  motion, 
  useInView, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate 
} from 'framer-motion';
import { 
  ArrowRight, 
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
  Cloud,
  ShieldCheck,
  FileCheck,
  MoreHorizontal,
  Search, 
  Code, 
  Rocket
} from 'lucide-react';

// --- DATA ---
const TESTIMONIALS = [
  {
      id: 1,
      quote: "They didn't just build a website; they re-engineered our entire client onboarding flow. We've saved ~40 hours/week in manual data entry.",
      author: "Sarah Jenkins",
      role: "Director of Operations",
      company: "TechFlow Logistics",
      color: "from-purple-500 to-indigo-500"
  },
  {
      id: 2,
      quote: "The ROI was immediate. The custom ERP dashboard gave us visibility we never had before. Scaling from 10k to 100k users was seamless.",
      author: "Michael Tran",
      role: "Founder & CEO",
      company: "StartUp Lab",
      color: "from-blue-500 to-cyan-500"
  },
  {
      id: 3,
      quote: "Technical excellence matched with business acumen. They understood our compliance requirements and built a fortress-grade backend.",
      author: "Elena Rodriguez",
      role: "CTO",
      company: "FinSecure Global",
      color: "from-emerald-500 to-teal-500"
  },
  {
      id: 4,
      quote: "We replaced three expensive SaaS subscriptions with the custom automation tool they built. It paid for itself in 4 months.",
      author: "David Kim",
      role: "Principal Partner",
      company: "Creative Pulse Agency",
      color: "from-orange-500 to-amber-500"
  },
  {
      id: 5,
      quote: "Their code quality is exceptional. Our internal dev team took over the project after launch and found the documentation pristine.",
      author: "James Wilson",
      role: "VP of Engineering",
      company: "Nexus Health",
      color: "from-pink-500 to-rose-500"
  }
];

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

// --- COMPONENT: ANTI-GRAVITY BACKGROUND (EXACT REPLICA) ---
const AntiGravityBackground = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Detect Mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // If mobile, do not run any canvas logic
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;

    // --- CONFIGURATION TO MATCH VIDEO ---
    const PARTICLE_COUNT = 800; // High density like the video
    const MOUSE_RADIUS = 120;   // Large "void" radius
    const REPULSION_STRENGTH = 5; // Strong push
    const FLOAT_SPEED = 0.4;    // Constant upward drift speed
    
    // Google Brand Colors + Grey (Exact Hex Codes)
    const COLORS = [
    '#6da99a', // Midnight Blue
  '#E74C3C', // Classic Red
  '#ECF0F1', // Cloud White
  '#34495E', // Wet Asphalt
  '#4e2532'  // Concrete Grey
    ];

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        
        // Random velocity factors
        this.vx = (Math.random() - 0.5) * 0.5; 
        this.vy = (Math.random() * -0.5) - FLOAT_SPEED; // Always negative Y (upward)
        
        // Size: Random mixture of very small and slightly larger dots
        this.size = Math.random() < 0.8 ? Math.random() * 2 + 1 : Math.random() * 3 + 2; 
        
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        
        // Friction for returning to normal state after repulsion
        this.friction = 0.94;
      }

      update() {
        // 1. Mouse Interaction (The "Hole" Logic)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_RADIUS) {
          // Calculate vector pointing AWAY from mouse
          const angle = Math.atan2(dy, dx);
          // Force gets stronger as you get closer to center
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS; 
          const repulsion = force * REPULSION_STRENGTH;

          // Apply strong force
          this.vx -= Math.cos(angle) * repulsion;
          this.vy -= Math.sin(angle) * repulsion;
        }

        // 2. Apply Velocity
        this.x += this.vx;
        this.y += this.vy;

        // 3. Friction & Normalization
        // Slowly reduce chaotic velocity created by mouse
        this.vx *= this.friction;
        
        // Gently pull vertical speed back to the target float speed
        // This ensures they don't stay stuck flying sideways forever
        const targetVy = -FLOAT_SPEED - (Math.random() * 0.2);
        this.vy += (targetVy - this.vy) * 0.05;

        // 4. Boundary Check (Infinite Loop)
        if (this.y < -20) {
          this.reset(false); // Respawn at bottom
        }
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Theme Check: Use 'screen' blend mode if in dark mode for "glow" effect
      // Otherwise use default source-over for crisp colors on white
      const isDarkMode = document.documentElement.classList.contains('dark');
      if (isDarkMode) {
          ctx.globalCompositeOperation = 'screen'; 
      } else {
          ctx.globalCompositeOperation = 'source-over';
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  },

    [isMobile]); // Re-run effect if isMobile changes

  // 3. Conditional Render: Return null if mobile
  if (isMobile) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      // Full opacity for the crisp look seen in the video
      style={{ opacity: 1 }} 
    />
  );
};

// --- COMPONENT: COUNTING NUMBER ---
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

// --- MAIN PAGE COMPONENT ---
const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const cardX = useTransform(smoothX, (v) => v * -0.03); 
  const cardY = useTransform(smoothY, (v) => v * -0.03);

  // --- TESTIMONIAL CAROUSEL STATE ---
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000); 

    return () => clearInterval(timer);
  }, []);

  // Helper to determine position relative to active
  const getCardStyle = (index) => {
    const length = TESTIMONIALS.length;
    let diff = (index - activeTestimonial + length) % length;
    if (diff > length / 2) diff -= length;

    if (diff === 0) {
      return { x: 0, scale: 1, opacity: 1, zIndex: 10, blur: '0px', brightness: 1 };
    } else if (diff > 0) {
       const isFirst = diff === 1;
       return { x: isFirst ? '50%' : '100%', scale: isFirst ? 0.85 : 0.7, opacity: isFirst ? 0.4 : 0, zIndex: 10 - diff, blur: '2px', brightness: 0.8 };
    } else {
       const isFirst = diff === -1;
       return { x: isFirst ? '-50%' : '-100%', scale: isFirst ? 0.85 : 0.7, opacity: isFirst ? 0.4 : 0, zIndex: 10 + diff, blur: '2px', brightness: 0.8 };
    }
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    // Updated Background: Clean White for Light Mode to match video, Slate-950 for Dark
    <div className="overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300 font-sans min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-20 overflow-hidden min-h-[90vh] flex items-center">
  
        {/* EXACT VIDEO REPLICA BACKGROUND */}
        <AntiGravityBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: Text */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="text-center lg:text-left z-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-6 cursor-default shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Enterprise Software & Automation
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Intelligent Systems.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                    Maximum Efficiency.
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We design bespoke software ecosystems that eliminate manual bottlenecks. Scale your operations without scaling your headcount through <strong>intelligent automation</strong> and <strong>robust architecture</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition shadow-xl shadow-slate-500/20 flex items-center justify-center gap-2 group text-sm transform hover:-translate-y-1">
                  Start Your Transformation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm shadow-sm">
                   View Solutions
                </Link>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Dashboard Card */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative hidden lg:block perspective-1000 max-w-md mx-auto z-10"
            >
              <div className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white/20 dark:border-slate-700/50 ring-1 ring-black/5 dark:ring-white/10 rounded-3xl p-6 shadow-2xl dark:shadow-indigo-500/10">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-start mb-8 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <Zap size={18} fill="currentColor" className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                        Main Cluster Node
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                          LIVE MONITORING
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                {/* Metrics */}
                <div className="mb-6 p-1">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                       <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Revenue</div>
                       <div className="text-3xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tight">
                         $124,592
                       </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                      <TrendingUp size={12} strokeWidth={3} />
                      <span className="text-xs font-bold">+24.5%</span>
                    </div>
                  </div>
                  
                  {/* Sparkline */}
                  <div className="h-16 w-full flex items-end gap-1">
                    {[40, 65, 50, 80, 55, 90, 70, 95, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                        className={`flex-1 rounded-t-sm ${i === 8 ? 'bg-indigo-500' : 'bg-indigo-100 dark:bg-slate-700/50'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Logs */}
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-1">System Logs</div>
                  
                  {[
                    { text: "Workflow #802 Executed", sub: "Payment Processed • Stripe API", time: "Just now", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
                    { text: "Database Sync", sub: "142 Records Updated • MongoDB", time: "2m ago", icon: Server, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { text: "Weekly Analytics PDF", sub: "Generated & Emailed", time: "1h ago", icon: FileCheck, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all cursor-default"
                    >
                      <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center ${item.color} shadow-sm`}>
                        <item.icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                          {item.text}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {item.sub}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                        {item.time}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Notification */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -right-6 top-24 bg-white dark:bg-slate-800 p-3 pr-4 rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-700 flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full absolute top-0 right-0 border-2 border-white dark:border-slate-800"></div>
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg text-slate-600 dark:text-slate-300">
                       <Bell size={16} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">All Systems Go</span>
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
                    { label: "Reliability Uptime", val: 99.99, suffix: "%" },
                    { label: "Monthly Operations", val: 1.2, suffix: "M+" },
                    { label: "Annual Client Savings", val: 4.5, prefix: "$", suffix: "M+" },
                    { label: "Avg. ROI / Project", val: 800, suffix: "%" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center justify-center text-center">
                        <div className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                            <Counter value={stat.val} suffix={stat.suffix} prefix={stat.prefix} decimals={stat.val % 1 !== 0 ? 1 : 2} />
                        </div>
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION */}
      <section className="py-24 px-4 relative overflow-hidden bg-transparent">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Our Core Capabilities</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto">
                  We don't just write code; we architect solutions that drive measurable business outcomes.
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
                title="Google Apps Automation"
                desc="Stop doing manual data entry. We write scripts to automate your Google Sheets, Gmail, and Docs so they talk to each other perfectly."
                techs={['Google Apps Script', 'Sheets API', 'Gmail Automation']}
                color="emerald"
            />
            <SpotlightCard 
                to="/services/web"
                icon={Globe}
                title="Modern Web Development"
                desc="Get a professional website that loads fast. We build custom sites that look great on mobile and help your business grow."
                techs={['React / Next.js', 'Tailwind CSS', 'TypeScript']}
                color="blue"
            />
            <SpotlightCard 
                to="/services/enterprise"
                icon={Database}
                title="Scalable Infrastructure"
                desc="Backend systems designed for resilience. From microservices to serverless architectures, we build foundations that handle millions of requests securely."
                techs={['Node.js / Express.js', 'AWS / Docker', 'PostgreSQL','Java / SpringBoot', 'Spring Security','Hibernate']}
                color="violet"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-24 px-4 bg-transparent relative">
        <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    The Blueprint
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Engineering Methodology
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    We don't guess. We follow a battle-tested architecture process to ensure scalability from Day 1.
                </p>
                {/*  */}
            </div>

            {/* Process Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent z-0"></div>

                {[
                    { 
                        number: "01",
                        title: "Deep-Dive Discovery", 
                        desc: "We audit your current workflow, identify data silos, and map out a technical architecture aligned with your revenue goals.",
                        icon: Search,
                        color: "text-blue-600 dark:text-blue-400",
                        bg: "bg-blue-100 dark:bg-blue-900/20",
                        border: "group-hover:border-blue-500/50"
                    },
                    { 
                        number: "02", 
                        title: "Iterative Build", 
                        desc: "Two-week agile sprints. You get testable prototypes early, ensuring the logic fits your business needs perfectly before finalization.",
                        icon: Code,
                        color: "text-violet-600 dark:text-violet-400",
                        bg: "bg-violet-100 dark:bg-violet-900/20",
                        border: "group-hover:border-violet-500/50"
                    },
                    { 
                        number: "03", 
                        title: "Launch & Handoff", 
                        desc: "Zero-downtime deployment. We provide comprehensive API documentation and train your internal team for total ownership.",
                        icon: Rocket,
                        color: "text-emerald-600 dark:text-emerald-400",
                        bg: "bg-emerald-100 dark:bg-emerald-900/20",
                        border: "group-hover:border-emerald-500/50"
                    }
                ].map((step, i) => (
                    <div key={i} className={`group relative bg-white dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none ${step.border} z-10`}>
                        
                        {/* Step Number Background */}
                        <div className="absolute top-4 right-8 text-6xl font-black text-slate-100 dark:text-slate-800/50 -z-10 select-none transition-colors group-hover:text-slate-200 dark:group-hover:text-slate-800">
                            {step.number}
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110 duration-300`}>
                            <step.icon size={28} />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

    {/* --- 5. TECH STACK MARQUEE --- */}
      <section className="py-24 bg-transparent border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                The Engine Room
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Enterprise-Grade Technology Stack
            </h2>
             {/* ADDED DESCRIPTION HERE */}
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mt-4">
                We leverage a battle-tested suite of modern technologies designed for speed, security, and scalability. No bloat, just performance.
            </p>
            {/*  */}
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
                         { name: "Python", icon: FileSpreadsheet, color: "text-yellow-500", shadow: "group-hover:shadow-yellow-500/20", border: "group-hover:border-yellow-500/50" },
                         { name: "Next.js", icon: Zap, color: "text-slate-900 dark:text-white", shadow: "group-hover:shadow-slate-500/20", border: "group-hover:border-slate-500/50" },
                         { name: "Docker", icon: Globe, color: "text-blue-400", shadow: "group-hover:shadow-blue-400/20", border: "group-hover:border-blue-400/50" },
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
                                 <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Production Ready</span>
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

      {/* --- 6. FOCUS CAROUSEL TESTIMONIALS --- */}
      <section className="py-16 px-4 bg-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto mb-10 px-4 text-center">
             <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Trusted by Industry Leaders</h2>
              {/* ADDED DESCRIPTION HERE */}
             <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-6">
                Real results from real partners. We measure our success by the growth of our clients.
             </p>
             <div className="flex items-center justify-center gap-2">
                 <div className="flex">
                     {[1,2,3,4,5].map(s => <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />)}
                 </div>
                 <span className="text-slate-700 dark:text-white text-sm font-bold">5.0/5 Average Client Rating</span>
             </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[300px] w-full max-w-4xl mx-auto perspective-1000">
            {TESTIMONIALS.map((t, index) => {
              const style = getCardStyle(index);
              
              return (
                <motion.div 
                  key={t.id}
                  className="absolute top-0 left-0 right-0 mx-auto w-full max-w-lg md:max-w-xl"
                  initial={style}
                  animate={style}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    filter: `blur(${style.blur}) brightness(${style.brightness})`
                  }}
                >
                  {/* Card Content */}
                  <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center text-center h-full">
                     
                     {/* Decorative Quote Icon */}
                     <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg mb-4`}>
                        <Quote size={20} className="text-white fill-white/20" />
                     </div>

                     <div className="flex-1">
                        <p className="text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed mb-6">
                           "{t.quote}"
                        </p>
                        
                        <div className="flex flex-col items-center">
                           <div className="font-bold text-slate-900 dark:text-white text-base">{t.author}</div>
                           <div className="text-xs text-slate-500 dark:text-slate-400">{t.role} @ <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{t.company}</span></div>
                        </div>
                     </div>

                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Manual Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
           {TESTIMONIALS.map((_, i) => (
             <button
               key={i}
               onClick={() => setActiveTestimonial(i)}
               className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-6 bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}`}
             />
           ))}
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-20 px-3 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 rounded-full bg-indigo-50 dark:bg-indigo-900/20 mb-6">
                <Cpu size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Ready to scale securely?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl mb-10">
                Stop patching together temporary fixes. Let's build a system that grows with you.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-10 py-4 rounded-full hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 text-lg">
              Get a Free Consultation <ArrowRight size={20} />
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