import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import logo from '../assets/logoo.png';
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
          2. STATS STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/40 relative z-10 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Delivered", val: 50, suffix: "+", color: "from-blue-600 to-cyan-500" },
              { label: "Hours of Code Written", val: 12, suffix: "k+", color: "from-purple-600 to-pink-500" },
              { label: "Hours Saved for Clients", val: 5, suffix: "k+", color: "from-amber-500 to-orange-500" },
              { label: "Client Satisfaction", val: 98, suffix: "%", color: "from-emerald-500 to-teal-500" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center group">
                <div className={`text-2xl md:text-3xl font-black mb-1 tracking-tight bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                  <Counter value={stat.val} suffix={stat.suffix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
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
          5. TECH STACK MARQUEE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8 relative z-10">
          <h2 className="text-lg md:text-xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Powered by</span>{' '}
            <span className="text-slate-700 dark:text-slate-300">Modern, Production-Ready Tech</span>
          </h2>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />
          <motion.div
            className="flex gap-8 items-center whitespace-nowrap pr-8"
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...Array(2)].map((_, gi) => (
              <React.Fragment key={gi}>
                {[
                  { name: "React", icon: Code2, color: "text-blue-500" },
                  { name: "Node.js", icon: Server, color: "text-green-500" },
                  { name: "Supabase", icon: Database, color: "text-emerald-500" },
                  { name: "Java", icon: Coffee, color: "text-orange-500" },
                  { name: "Python", icon: FileSpreadsheet, color: "text-yellow-500" },
                  { name: "Google Sheets", icon: Table, color: "text-green-600" },
                  { name: "Tailwind CSS", icon: Layout, color: "text-cyan-500" },
                  { name: "Next.js", icon: Zap, color: "text-slate-700 dark:text-slate-200" },
                  { name: "OpenAI", icon: Bot, color: "text-violet-500" },
                  { name: "MongoDB", icon: Database, color: "text-green-700" },
                  { name: "Docker", icon: Globe, color: "text-blue-400" },
                  { name: "AWS / GCP", icon: Cloud, color: "text-amber-500" },
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 hover:scale-110 transition-transform cursor-default px-3">
                    <tech.icon size={22} className={tech.color} />
                    <span className={`text-sm font-bold ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CASE STUDIES / FEATURED WORK
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">Real Outcomes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Work That Speaks for Itself</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">Every project we take on has a measurable goal. Here's a look at three recent wins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`bg-gradient-to-br ${cs.color} p-6 flex items-center justify-between`}>
                  <div>
                    <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{cs.label}</div>
                    <div className="text-3xl font-black text-white">{cs.metric}</div>
                    <div className="text-white/80 text-xs font-medium">{cs.metricLabel}</div>
                  </div>
                  <cs.icon size={40} className="text-white/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 leading-tight">{cs.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{cs.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/solutions">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                View All Solutions <ArrowRight size={16} />
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
          10. CONTACT STRIP / MINI CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">Get In Touch</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Have a question? We reply in 24 hours.</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+919691207533"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-white dark:hover:bg-slate-800 transition">
              <Phone size={16} className="text-indigo-500" /> +91 96912 07533
            </a>
            <a href="https://wa.me/917697706427" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-white dark:hover:bg-slate-800 transition">
              <MessageSquare size={16} className="text-indigo-500" /> +91 76977 06427
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          11. MAIN CTA SECTION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-6">
            <Sparkles size={14} /> Free Consultation — No Commitment
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Ready to Build<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Something Great?
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need a full-stack app, automation scripts, or a digital marketing push — we are your all-in-one technical partner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 text-base">
                Get Free Consultation <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/pricing">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700 text-base">
                View Pricing
              </motion.button>
            </Link>
          </div>

          {/* Final trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 dark:text-slate-500 font-medium">
            {["No upfront payment required", "Response within 24 hours", "30-day satisfaction guarantee", "100% code ownership"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-500" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;