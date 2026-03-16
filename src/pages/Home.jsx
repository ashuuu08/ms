import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import logo from '../assets/logoo.png';
import startupDash from '../assets/startup_dashboard.png';
import ecommerceDash from '../assets/ecommerce_dashboard.png';
import healthcareDash from '../assets/healthcare_dashboard.png';
import financeDash from '../assets/finance_dashboard.png';
import educationDash from '../assets/education_dashboard.png';
import logisticsDash from '../assets/logistics_dashboard.png';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  AnimatePresence
} from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Layout,
  Server,
  FileSpreadsheet,
  TrendingUp,
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
  Search,
  Code,
  Rocket,
  Bot,
  Megaphone,
  Coffee,
  Table,
  CheckCircle2,
  Award,
  Clock,
  Users,
  Briefcase,
  Layers,
  ChevronRight,
  MessageSquare,
  Phone,
  Sparkles,
  BarChart3,
  LineChart,
  Smartphone,
} from 'lucide-react';

// --- DATA ---
const TESTIMONIALS = [
  {
    id: 1,
    quote: "AshbitSoft automated our entire client onboarding flow. We've saved 40+ hours per week in manual data entry. Genuinely one of the best decisions we made.",
    author: "Sneha Gupta",
    role: "Director of Operations",
    company: "ShipFast Logistics",
    rating: 5,
    color: "from-indigo-500 to-violet-500"
  },
  {
    id: 2,
    quote: "The custom ERP dashboard gave us visibility we never had before. ROI was immediate — scaling from 10k to 100k users was completely seamless.",
    author: "Karan Malhotra",
    role: "Founder & CEO",
    company: "VentureStack",
    rating: 5,
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: 3,
    quote: "Their spreadsheet automation syncs perfectly with our CRM. The campaign reporting that used to take us a full day now runs automatically every morning.",
    author: "Riya Joshi",
    role: "Marketing Head",
    company: "BrandBoost Media",
    rating: 5,
    color: "from-violet-500 to-indigo-500"
  }
];

const CASE_STUDIES = [
  {
    label: "E-Commerce Automation",
    title: "80% Reduction in Manual Order Processing",
    desc: "Built a full MERN stack order management system with automated inventory sync, email triggers, and real-time dashboards for a mid-size retail brand.",
    tags: ["React", "Node.js", "MongoDB", "Email API"],
    metric: "80%",
    metricLabel: "Less Manual Work",
    color: "from-indigo-600 to-blue-600",
    icon: BarChart3,
  },
  {
    label: "Workflow Automation",
    title: "40 Hours/Week Saved with Google Sheets AI",
    desc: "Replaced 6 manual data-entry roles with custom Google Apps Script automation, syncing live data across departments in real-time.",
    tags: ["Apps Script", "Sheets API", "Gmail Automation"],
    metric: "40h+",
    metricLabel: "Saved Weekly",
    color: "from-indigo-700 to-violet-600",
    icon: Zap,
  },
  {
    label: "AI Integration",
    title: "Smart Support Bot — 3x Faster Response Time",
    desc: "Deployed a custom AI chatbot trained on the client's product knowledge base, reducing support ticket volume by 60% in the first month.",
    tags: ["Python", "OpenAI API", "Node.js", "WhatsApp API"],
    metric: "60%",
    metricLabel: "Fewer Tickets",
    color: "from-violet-600 to-indigo-500",
    icon: Bot,
  },
];

const INDUSTRIES = [
  {
    name: "Startups & MVPs",
    icon: Rocket,
    color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20",
    image: startupDash,
    desc: "Rapid prototyping and scalable foundations for new ventures."
  },
  {
    name: "E-Commerce",
    icon: Globe,
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
    image: ecommerceDash,
    desc: "Scalable storefronts and automated inventory management."
  },
  {
    name: "Healthcare",
    icon: ShieldCheck,
    color: "text-violet-600 bg-violet-50 dark:bg-violet-900/20",
    image: healthcareDash,
    desc: "Secure patient portals and compliant data ecosystems."
  },
  {
    name: "Finance & FinTech",
    icon: TrendingUp,
    color: "text-indigo-700 bg-indigo-50 dark:bg-indigo-900/30",
    image: financeDash,
    desc: "High-performance trading platforms and financial security."
  },
  {
    name: "Education",
    icon: FileCheck,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
    image: educationDash,
    desc: "Digital learning systems and student performance tracking."
  },
  {
    name: "Logistics",
    icon: Server,
    color: "text-violet-500 bg-violet-50 dark:bg-violet-900/20",
    image: logisticsDash,
    desc: "Real-time supply chain tracking and fleet optimization."
  },
  {
    name: "Marketing Agencies",
    icon: Megaphone,
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20",
    image: financeDash, // Fallback
    desc: "Data-driven campaign managers and ROI dashboards."
  },
  {
    name: "Enterprise",
    icon: Briefcase,
    color: "text-slate-600 bg-slate-100 dark:bg-slate-800",
    image: logisticsDash, // Fallback
    desc: "Robust ERP systems and cross-departmental automation."
  },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 }
  }
};

// --- COMPONENT: ANTI-GRAVITY BACKGROUND ---
const AntiGravityBackground = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = 0, height = 0;
    const PARTICLE_COUNT = 350;
    const MOUSE_RADIUS = 150;
    const FLOAT_SPEED = 0.2;
    const COLORS = ['#6366f1', '#a855f7', '#10b981', '#349ec9'];
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() { this.reset(true); }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() * -0.5) - FLOAT_SPEED;
        this.size = Math.random() * 2 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        const dx = mouse.x - this.x, dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < MOUSE_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          this.vx -= Math.cos(angle) * force * 0.5;
          this.vy -= Math.sin(angle) * force * 0.5;
        }
        this.x += this.vx; this.y += this.vy; this.vx *= 0.95;
        if (this.y < -20) this.reset(false);
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width; canvas.height = height;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    init(); animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
};

// --- COMPONENT: COUNTING NUMBER ---
const Counter = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
    });
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={ref}>0</span>;
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

  const colorClasses = {
    emerald: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 group-hover:border-emerald-500/30',
    blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20 group-hover:border-blue-500/30',
    violet: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20 group-hover:border-violet-500/30',
    orange: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20 group-hover:border-orange-500/30',
    pink: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20 group-hover:border-pink-500/30',
    green: 'text-green-600 bg-green-50 dark:bg-green-900/20 group-hover:border-green-600/30',
  };

  const gradientBg = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.1), transparent 80%)`;

  return (
    <Link to={to} className="block h-full group">
      <div
        onMouseMove={handleMouseMove}
        className={`relative h-full bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-indigo-500/5 dark:hover:shadow-none overflow-hidden`}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background: gradientBg }}
        />
        <div className={`w-12 h-12 rounded-xl ${colorClasses[color].split(' ').slice(0, 3).join(' ')} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500`}>
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => (
            <span key={i} className="text-[10px] font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">{tech}</span>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
          <ArrowRight size={16} className="text-indigo-500" />
        </div>
      </div>
    </Link>
  );
};

// --- MAIN PAGE COMPONENT ---
const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const cardX = useTransform(smoothX, (v) => v * -0.02);
  const cardY = useTransform(smoothY, (v) => v * -0.02);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300 font-sans min-h-screen">

      <SEO
        title="Custom Software Development & Automation"
        description="AshbitSoft builds digital growth engines. We specialize in MERN stack development, custom automation, and ROI-driven digital marketing for startups."
        keywords="custom software, mern stack, web development automation, business growth engine, digital transformation india"
      />
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-16 overflow-hidden min-h-[88vh] flex items-center">
        <AntiGravityBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT: Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center lg:text-left z-20">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-5 cursor-default shadow-sm hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600" />
                </span>
                Full-Cycle Tech Startup
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-5">
                We Build Digital&nbsp;<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Growth Engines.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From <strong>MERN Stack Apps</strong> to <strong>AI Automation</strong> and <strong>Digital Marketing</strong> — we are the startup that powers your startup.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-7">
                <Link to="/contact">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group text-sm">
                    Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm shadow-sm">
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start text-xs text-slate-500 dark:text-slate-400">
                {[
                  { icon: ShieldCheck, text: "30-Day Guarantee" },
                  { icon: Clock, text: "24h Response" },
                  { icon: Award, text: "100% Code Ownership" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-1.5 font-medium">
                    <b.icon size={14} className="text-indigo-500" />
                    {b.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: Dashboard Card */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block max-w-md mx-auto z-10"
            >
              <div className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white/20 dark:border-slate-700/50 ring-1 ring-black/5 dark:ring-white/10 rounded-2xl p-5 shadow-2xl dark:shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center"><Rocket size={16} /></div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-100">Growth Dashboard</div>
                      <div className="text-[10px] text-emerald-500 font-bold">● Live — All Systems Active</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">Feb 2026</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Leads Generated", val: "1,240", delta: "↑ 12% vs last week", deltaColor: "text-emerald-500" },
                    { label: "Tasks Automated", val: "8,502", delta: "⚡ Saved 40hrs", deltaColor: "text-indigo-500" },
                  ].map(m => (
                    <div key={m.label} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                      <div className="text-[10px] text-slate-400 uppercase font-bold">{m.label}</div>
                      <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">{m.val}</div>
                      <div className={`text-[10px] ${m.deltaColor} font-bold mt-1`}>{m.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {[
                    { icon: Table, text: "Spreadsheet Sync", sub: "Data updated from CRM", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/20" },
                    { icon: Megaphone, text: "Ad Campaign Live", sub: "Facebook & Instagram", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20" },
                    { icon: Bot, text: "AI Chatbot Active", sub: "60% tickets resolved", color: "text-violet-500", bg: "bg-violet-100 dark:bg-violet-900/20" },
                    { icon: Database, text: "Supabase Backup", sub: "Encrypted — Secure", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/20" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                      <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={14} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{item.text}</div>
                        <div className="text-[10px] text-slate-400">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. STATS STRIP — POWER BY THE NUMBERS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950 relative z-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                label: "Projects Delivered",
                val: 50,
                suffix: "+",
                color: "from-indigo-600 to-blue-500",
                icon: Briefcase,
                desc: "High-quality production builds"
              },
              {
                label: "Hours of Code Written",
                val: 12,
                suffix: "k+",
                color: "from-violet-600 to-purple-500",
                icon: Code,
                desc: "Scalable & clean architecture"
              },
              {
                label: "Hours Saved for Clients",
                val: 5,
                suffix: "k+",
                color: "from-emerald-500 to-teal-600",
                icon: Clock,
                desc: "Through custom automation"
              },
              {
                label: "Client Satisfaction",
                val: 98,
                suffix: "%",
                color: "from-amber-400 to-orange-500",
                icon: Star,
                desc: "Based on final IP delivery"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-500/30 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:shadow-xl group-hover:shadow-indigo-500/5`}>
                    <stat.icon size={22} className="text-slate-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                    <Counter value={stat.val} suffix={stat.suffix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight opacity-80">
                    {stat.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SERVICES / EXPERTISE SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Complete Digital Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              From coding complex backends to running high-ROI marketing campaigns — we are your all-in-one technical partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: 'Full-Stack Development', desc: 'Scalable web apps using React, Node.js, and MongoDB. Fast, secure, and built to grow with your business.', techs: ['React', 'Node.js', 'MongoDB', 'Express'], color: 'blue' },
              { icon: Coffee, title: 'Java Enterprise', desc: 'Robust backend systems powered by Java Spring Boot — perfect for large-scale, high-transaction processing.', techs: ['Java', 'Spring Boot', 'Microservices'], color: 'orange' },
              { icon: Table, title: 'Workflow Automation', desc: 'We automate your manual processes using custom Google Apps Scripts, Sheets APIs, and Gmail integrations.', techs: ['Apps Script', 'Sheets API', 'Gmail Automations'], color: 'green' },
              { icon: Database, title: 'Supabase & Cloud DB', desc: 'Real-time databases and secure authentication using Supabase. Serverless power without the complexity.', techs: ['Supabase', 'PostgreSQL', 'Auth', 'Edge Functions'], color: 'emerald' },
              { icon: Bot, title: 'AI & Smart Chatbots', desc: 'Custom AI setups using Python and OpenAI. Deploy smart chatbots and predictive analytics on your platform.', techs: ['Python', 'OpenAI API', 'LangChain', 'Chatbots'], color: 'violet' },
              { icon: Megaphone, title: 'Digital Marketing', desc: 'Data-driven SEO, PPC advertising, and social media campaigns to acquire and retain customers for your startup.', techs: ['SEO/SEM', 'PPC Ads', 'Content Strategy', 'Analytics'], color: 'pink' },
            ].map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              >
                <SpotlightCard to="/services" icon={svc.icon} title={svc.title} desc={svc.desc} techs={svc.techs} color={svc.color} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                View All Services <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. WHY CHOOSE US — DIFFERENTIATORS
      ═══════════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════════
          4. WHY CHOOSE US — OUR EDGE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
        {/* Decorative subtle lines */}
        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #6366f1 1px, transparent 1px), linear-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 px-4">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-indigo-100 dark:border-indigo-800/50"
            >
              Strategic Differentiators
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Why Builders <span className="text-indigo-600 dark:text-indigo-400">Choose Us.</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We don't just ship features; we engineer leverage. Our approach is designed to maximize velocity while maintaining architectural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Extreme Velocity', desc: 'MVPs in 4–8 weeks. Automation in days. We move at market speed without sacrificing code quality.', color: 'indigo' },
              { icon: ShieldCheck, title: 'Zero-Lock Engineering', desc: '100% IP ownership. No proprietary traps. Every single line of code is your asset from day one.', color: 'blue' },
              { icon: MessageSquare, title: 'Radical Transparency', desc: "Daily async updates, weekly production demos, and real-time access to our engineering boards.", color: 'violet' },
              { icon: TrendingUp, title: 'Value-First Delivery', desc: "We optimize for ROI. Every sprint is tied to a measurable business outcome that scales your operations.", color: 'emerald' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-slate-900/50 rounded-[2rem] p-8 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-indigo-500/20"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 dark:bg-${item.color}-900/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white`}>
                  <item.icon size={28} className={`text-${item.color}-600 dark:text-${item.color}-400 group-hover:text-white transition-colors`} />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white mb-3 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. TECH STACK MARQUEE (Already Updated)
      ═══════════════════════════════════════════════════════ */}
      {/* ... (Existing Tech Stack section skipped for brevity of edit) ... */}

      {/* ═══════════════════════════════════════════════════════
          6. CASE STUDIES — REAL OUTCOMES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Atmospheric Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4"
            >
              Performance Metrics
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Work That <br className="md:hidden" /> <span className="text-indigo-600 dark:text-indigo-400">Speaks Volume.</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Every deployment has a measurable goal. Here is a selection of recent high-impact solutions we have engineered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative h-full flex flex-col bg-slate-50 dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:border-indigo-500/20 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Metric Header Card */}
                <div className={`bg-gradient-to-br ${cs.color} p-8 relative overflow-hidden`}>
                  {/* Decorative Mesh */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{cs.label}</div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tighter">{cs.metric}</div>
                      <div className="text-white/80 text-xs font-bold uppercase tracking-widest">{cs.metricLabel}</div>
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                      <cs.icon size={26} />
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-grow flex-col">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-grow font-medium">
                    {cs.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200 dark:border-white/5">
                    {cs.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-2 bg-indigo-500/5 group-hover:bg-indigo-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/solutions">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all">
                View All Case Studies
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. OUR PROCESS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-4 bg-slate-50/50 dark:bg-slate-900/10 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50"
            >
              <Sparkles size={12} /> Execution Framework
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              How We Deliver <span className="text-indigo-600 dark:text-indigo-400">Excellence</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We've refined a linear, high-velocity process that turns complex ideas into production-ready software, ensuring transparency and quality at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-[50px] right-[50px] h-[2px] bg-slate-200 dark:bg-slate-800 pointer-events-none" />

            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Deep immersion into your product vision, identifying market gaps and defining core success metrics.',
                icon: Search,
                accent: 'bg-blue-500'
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Developing a scalable architecture and a phased roadmap that optimizes for time-to-market.',
                icon: Layers,
                accent: 'bg-indigo-500'
              },
              {
                step: '03',
                title: 'Realization',
                desc: 'Rapid execution through agile sprints, with real-time tracking and weekly production deployments.',
                icon: Code,
                accent: 'bg-violet-500'
              },
              {
                step: '04',
                title: 'Evolution',
                desc: 'Rigorous QA followed by launch. We stay on board for scaling and continuous performance tuning.',
                icon: Rocket,
                accent: 'bg-purple-500'
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector Path (Mobile timeline effect) */}
                <div className="sm:hidden absolute left-[28px] top-[60px] bottom-[-48px] w-[2px] bg-slate-200 dark:bg-slate-800 group-last:hidden" />

                {/* Header Container */}
                <div className="flex lg:flex-col items-center gap-5 lg:gap-8 mb-6 relative z-10">
                  <div className="relative flex-shrink-0">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${process.accent} flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <process.icon size={26} />
                    </div>
                    {/* Floating Step Number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-[10px] font-black text-slate-900 dark:text-white shadow-md">
                      {process.step}
                    </div>
                  </div>

                  <div className="lg:text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {process.title}
                    </h3>
                  </div>
                </div>

                {/* Info Card */}
                <div className="relative ml-[68px] sm:ml-0 p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-500/5 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:border-indigo-500/20 lg:text-center min-h-[140px] flex flex-col justify-center">
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                    {process.desc}
                  </p>

                  {/* Decorative Subtle Accent - Hidden on mobile, shown on larger */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${process.accent} opacity-20 hidden md:block group-hover:w-24 group-hover:opacity-100 transition-all duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-4"
            >
              <Sparkles size={12} /> Specialized Expertise
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Industries We Serve</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We build custom internal tools, dashboards, and automated ecosystems tailored to the unique complexities of your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-900 via-transparent to-transparent opacity-60" />

                  {/* Icon Badge Overlay */}
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${ind.color} backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    <ind.icon size={20} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-amber-100 dark:border-amber-800/50"
            >
              <Star size={12} /> Global Trust Signals
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Client <span className="text-indigo-600 dark:text-indigo-400">Success Stories.</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We measure our performance by the leverage we create for our partners. Here is how we have helped technical leaders scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-slate-50 dark:bg-slate-900/40 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/5 flex flex-col hover:border-indigo-500/20 hover:shadow-2xl transition-all duration-500"
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[8px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
                    Verified Project
                  </div>
                </div>

                <Quote className="text-indigo-600/10 dark:text-indigo-400/10 absolute top-8 right-8" size={60} />

                <p className="text-base text-slate-700 dark:text-slate-300 italic mb-10 flex-grow leading-relaxed relative z-10 font-medium tracking-tight">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{t.author}</div>
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t.role} · {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          10. CONTACT STRIP — LOW FRICTION ACCESS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-indigo-500/5">
            <div className="text-center lg:text-left">
              <div className="text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Direct Access</div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">Got a specific <span className="text-indigo-600 dark:text-indigo-400">problem to solve?</span></h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Connect directly with our engineering team. No sales gatekeepers.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+919691207533" className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 hover:border-indigo-500/50 transition-all font-black text-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span>+91 96912 07533</span>
              </a>
              <a href="https://wa.me/917697706427" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 hover:border-emerald-500/50 transition-all font-black text-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageSquare size={18} />
                </div>
                <span>WhatsApp Engineering</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
         {/* ═════════ CTA SECTION ═════════ */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950 relative">

        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 md:p-14 text-center 
      bg-slate-900 text-white overflow-hidden 
      border border-white/10 shadow-2xl group"
          >

            {/* gradient glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-500/30 blur-[120px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/30 blur-[120px] rounded-full" />
            </div>

            {/* badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
      bg-white/10 border border-white/20 text-xs uppercase tracking-widest mb-5">

              <Sparkles size={14} />
              Start Your Velocity Journey
            </div>

            {/* heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Ready to Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Something Legendary?
              </span>
            </h2>

            {/* description */}
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Launch your MVP, automate workflows, or scale your platform —
              our engineers help turn complex ideas into powerful digital systems.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-xl bg-white text-slate-900 
            font-bold flex items-center gap-2 shadow-lg hover:bg-slate-100 transition"
                >
                  Get Free Strategy Session
                  <ArrowRight size={18} />
                </motion.button>
              </Link>

              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-xl border border-white/30 
            text-white font-bold hover:bg-white/10 transition"
                >
                  Review Pricing
                </motion.button>
              </Link>

            </div>

            {/* trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">

              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-indigo-400" />
                Zero Upfront Commitment
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-indigo-400" />
                24h Strategy Delivery
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-indigo-400" />
                Success-Based Milestones
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Final Footer Label */}
      <div className="py-12 text-center bg-white dark:bg-slate-950">
        <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.4em]">
          AshbitSoft — Engineering Future Assets — Since 2024.
        </p>
      </div>

    </div>
  );
};

export default Home;
