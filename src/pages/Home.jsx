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
  },
  {
    id: 4,
    quote: "The Java-based backend they built handles our 50k requests per minute without any latency issues. Their enterprise architecture knowledge is world-class.",
    author: "Vivek Roy",
    role: "Engineering Manager",
    company: "DataOps Tech",
    rating: 5,
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 5,
    quote: "Exceptional AI chatbot integration. It reduced our support overhead by 60% in just the first month. Our customers love the instant, smart responses.",
    author: "Aditi Sharma",
    role: "Head of Support",
    company: "ZenLearn Edu",
    rating: 5,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 6,
    quote: "Automating our Shopify-to-Sheets syncing saved our inventory team hours of manual export/import work. They really understand business operations.",
    author: "Rahul Bajaj",
    role: "Proprietor",
    company: "LuxDecor",
    rating: 5,
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: 7,
    quote: "From MVP to a scaled product in 3 months. Their MERN stack proficiency is unmatched. They don't just write code, they build scalable products.",
    author: "Pranay Sheth",
    role: "Co-Founder",
    company: "FinPilot",
    rating: 5,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 8,
    quote: "The data visualization dashboard they built for our healthcare analytics project was intuitive and fast. Security was handled according to all standards.",
    author: "Dr. Anjali Rao",
    role: "Clinical Director",
    company: "HealthCore Systems",
    rating: 5,
    color: "from-sky-500 to-blue-600"
  },
  {
    id: 9,
    quote: "Reliable and fast. Our Google Ads campaign performance reporting is now automated and error-free, and we've seen clear ROI growth.",
    author: "Siddharth Jain",
    role: "E-Commerce Head",
    company: "TrendSetters",
    rating: 5,
    color: "from-rose-500 to-rose-700"
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
  { name: "Startups & MVPs", icon: Rocket, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20" },
  { name: "E-Commerce", icon: Globe, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" },
  { name: "Healthcare", icon: ShieldCheck, color: "text-violet-600 bg-violet-50 dark:bg-violet-900/20" },
  { name: "Finance & FinTech", icon: TrendingUp, color: "text-indigo-700 bg-indigo-50 dark:bg-indigo-900/30" },
  { name: "Education", icon: FileCheck, color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20" },
  { name: "Logistics", icon: Server, color: "text-violet-500 bg-violet-50 dark:bg-violet-900/20" },
  { name: "Marketing Agencies", icon: Megaphone, color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20" },
  { name: "Enterprise", icon: Briefcase, color: "text-slate-600 bg-slate-100 dark:bg-slate-800" },
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

const ServiceAccordionItem = ({ item, index, isOpen, onToggle }) => {
  const Icon = item.icon || item.icon;
  const title = item.title || item.name;

  return (
    <div className={`overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 ${isOpen ? 'bg-indigo-50/30 dark:bg-indigo-500/5' : 'bg-transparent'}`}>
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between p-6 text-left group focus:outline-none"
      >
        <div className="flex items-center gap-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'}`}>
            <Icon size={24} />
          </div>
          <div>
            <h4 className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
              {title}
            </h4>
            {item.techs && !isOpen && (
              <div className="hidden sm:flex gap-2 mt-1">
                {item.techs.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[10px] text-slate-400 font-medium">{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
          <ChevronRight size={14} className="transform rotate-90" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 ml-16">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base max-w-3xl mb-4">
                {item.desc}
              </p>
              {item.techs && (
                <div className="flex flex-wrap gap-2">
                  {item.techs.map((tech, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhyChooseCard = ({ icon: Icon, title, desc, color, delay }) => {
  const colors = {
    amber: "from-amber-400 to-orange-500 bg-amber-50 dark:bg-amber-900/20 shadow-amber-500/20",
    emerald: "from-emerald-400 to-teal-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-emerald-500/20",
    blue: "from-blue-400 to-indigo-500 bg-blue-50 dark:bg-blue-900/20 shadow-blue-500/20",
    purple: "from-purple-400 to-pink-500 bg-purple-50 dark:bg-purple-900/20 shadow-purple-500/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom ultra-smooth ease-out
      }}
      whileHover={{
        y: -10,
        scale: 1.025,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 25,
          mass: 0.5
        }
      }}
      className="bg-white/40 dark:bg-slate-900/30 backdrop-blur-2xl p-7 rounded-3xl border border-white/20 dark:border-slate-800 shadow-xl relative group z-30 overflow-hidden"
    >
      {/* Animated Border Beam - High-End Technical Look */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

      {/* Glow Effect */}
      <div className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${colors[color]} opacity-[0.03] group-hover:opacity-10 transition-opacity blur-3xl rounded-full`} />

      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[color]} flex items-center justify-center mb-6 transition-all duration-700 ease-out shadow-lg ring-4 ring-white/10 dark:ring-white/5 group-hover:rotate-[15deg] group-hover:scale-110 group-hover:shadow-2xl`}>
        <Icon size={22} className="text-white" />
      </div>

      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight transition-colors duration-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-500">
        {desc}
      </p>

      {/* Modern 'Learn More' Micro-cue */}
      <div className="mt-6 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
        Discover <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
      </div>
    </motion.div>
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
  const [openService, setOpenService] = useState(0);
  const [openIndustry, setOpenIndustry] = useState(-1);

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
      <section className="py-28 px-4 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Header Text - Left Side Enhanced */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50">
                  <Cpu size={14} className="animate-pulse" />
                  <span>Technical Excellence</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
                  Specialized <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Expertise.</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                  We don't just build software — we architect high-performance digital ecosystems. From <span className="text-slate-900 dark:text-white font-semibold">MERN stacks</span> to <span className="text-slate-900 dark:text-white font-semibold">custom AI automation</span>, we ship code that drives ROI.
                </p>

                {/* Feature List (The 'Something Missing') */}
                <div className="space-y-6 mb-12">
                  {[
                    { title: "Direct Architect Access", desc: "Speak directly with engineers, not middle managers.", icon: Users },
                    { title: "Enterprise Reliability", desc: "99.9% uptime architectures for mission-critical apps.", icon: ShieldCheck },
                    { title: "Rapid Development", desc: "4-8 week typical delivery for MVPs and automation.", icon: Zap },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">{feature.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">100%</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      In-house Delivery
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">500k+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      Lines of Code
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Accordion List (Right Side) */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl -z-10 rounded-full"></div>
              {SPECIALIZED_EXPERTISE.map((svc, i) => (
                <ServiceAccordionItem
                  key={i}
                  item={svc}
                  index={i}
                  isOpen={openService === i}
                  onToggle={(idx) => setOpenService(openService === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl bg-indigo-600 text-white font-bold text-base hover:bg-indigo-700 transition shadow-2xl shadow-indigo-500/30 flex items-center gap-3 mx-auto"
              >
                Explore Full Tech Stack <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. WHY CHOOSE US — DIFFERENTIATORS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Why Companies Choose Us</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">We don't just ship code — we build systems that create leverage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: 'Fast Turnaround', desc: 'MVPs in 4–8 weeks. Automation scripts in days. We move at startup speed without cutting corners.', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
              { icon: ShieldCheck, title: '100% Code Ownership', desc: 'Every line of code we write belongs to you. No lock-in, no licensing traps, full IP transfer on delivery.', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
              { icon: MessageSquare, title: 'Transparent Communication', desc: "Daily updates, weekly demos, and real-time access to your project board. You're never left in the dark.", color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
              { icon: TrendingUp, title: 'ROI-First Approach', desc: "We don't build for the sake of building. Every feature is tied to a business outcome that improves your bottom line.", color: 'from-purple-500 to-pink-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <div className={`bg-gradient-to-br ${item.color} rounded-lg w-10 h-10 flex items-center justify-center`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
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
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Our Delivery Process</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">A proven 4-step process that delivers results on time, every time.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'We start by deeply understanding your business goals, pain points, and the context of what you are building.', icon: Search, color: 'from-indigo-500 to-indigo-600' },
              { step: '02', title: 'Strategy', desc: 'We create a detailed roadmap — tech stack, timeline, milestones — so you know exactly what to expect.', icon: FileCheck, color: 'from-indigo-600 to-violet-500' },
              { step: '03', title: 'Development', desc: 'Agile sprints with daily updates. You see progress constantly and can give feedback at every stage.', icon: Code, color: 'from-violet-500 to-violet-600' },
              { step: '04', title: 'Launch & Support', desc: "We deploy, monitor, and provide a 30-day post-launch support window. You're never dropped after go-live.", icon: Rocket, color: 'from-violet-600 to-indigo-500' },
            ].map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${process.color} opacity-10 rounded-bl-full`} />
                  <div className={`text-4xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-3`}>{process.step}</div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{process.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">Sectors</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg ${ind.color} flex items-center justify-center flex-shrink-0`}>
                  <ind.icon size={18} />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-bold mb-4">
              <Star size={14} /> Client Stories
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 hover:shadow-lg transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="text-indigo-200 dark:text-indigo-800 mb-4" size={28} />
                <p className="text-sm text-slate-700 dark:text-slate-300 italic mb-6 flex-grow leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{t.role} · {t.company}</div>
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
