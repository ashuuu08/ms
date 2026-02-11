import React, { useEffect, useRef, useState } from 'react';
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
  MoreHorizontal,
  Search,
  Code,
  Rocket,
  Bot,
  Megaphone,
  Coffee, // Java
  Table, // Sheets
} from 'lucide-react';

// --- DATA ---
const TESTIMONIALS = [
  {
    id: 1,
    quote: "They didn't just build a website; they re-engineered our entire client onboarding flow. We've saved ~40 hours/week in manual data entry.",
    author: "Sneha Gupta",
    role: "Director of Operations",
    company: "ShipFast Logistics",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    quote: "The ROI was immediate. The custom ERP dashboard gave us visibility we never had before. Scaling from 10k to 100k users was seamless.",
    author: "Karan Malhotra",
    role: "Founder & CEO",
    company: "VentureStack",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    quote: "Our marketing campaigns are now fully automated. The spreadsheet integration they built syncs perfectly with our CRM and saves us hours every week.",
    author: "Riya Joshi",
    role: "Marketing Head",
    company: "BrandBoost Media",
    color: "from-pink-500 to-rose-500"
  }
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

// --- COMPONENT: ANTI-GRAVITY BACKGROUND ---
const AntiGravityBackground = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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

    let animationFrameId; // Define animationFrameId here
    let particles = [];
    let width = 0;
    let height = 0;

    const PARTICLE_COUNT = 400; // Reduced for performance
    const MOUSE_RADIUS = 150;
    const FLOAT_SPEED = 0.2;

    const COLORS = ['#6366f1', '#a855f7', '#10b981', '#349ec9']; // Brand colors

    const mouse = { x: -1000, y: -1000 };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() * -0.5) - FLOAT_SPEED;
        this.size = Math.random() * 2 + 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_RADIUS) {
          const angle = Math.atan2(dy, dx);
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          this.vx -= Math.cos(angle) * force * 0.5;
          this.vy -= Math.sin(angle) * force * 0.5;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;

        if (this.y < -20) this.reset(false);
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw() {
        if (!ctx) return;
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
      canvas.width = width;
      canvas.height = height;
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
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

    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
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

  const cardX = useTransform(smoothX, (v) => v * -0.02);
  const cardY = useTransform(smoothY, (v) => v * -0.02);

  // --- TESTIMONIAL CAROUSEL STATE ---
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
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

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-10 lg:pt-36 lg:pb-16 overflow-hidden min-h-[85vh] flex items-center">

        <AntiGravityBackground />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center lg:text-left z-20"
            >
              {/* BRAND LOGO HEADER */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 group cursor-default">
                <img
                  src={logo}
                  alt="AshSoft Logo"
                  className="w-8 h-8 object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                    Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f]">Soft</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider mb-6 cursor-default shadow-sm hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Full-Cycle Tech Startup
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                We Build Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Growth Engines.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                From <strong>MERN Stack Apps</strong> to <strong>AI Automation</strong> and <strong>Digital Marketing</strong>. We are the startup that powers your startup.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group text-sm"
                  >
                    Start Your Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start opacity-70">
                {['MERN Stack', 'Java', 'Python AI', 'Workflow Automation', 'Supabase'].map((tech) => (
                  <span key={tech} className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: Dashboard Card */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block perspective-1000 max-w-md mx-auto z-10"
            >
              <div className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white/20 dark:border-slate-700/50 ring-1 ring-black/5 dark:ring-white/10 rounded-2xl p-5 shadow-2xl dark:shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      <Rocket size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-100">Growth Dashboard</div>
                      <div className="text-[10px] text-emerald-500 font-bold">● System Active</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Leads Generated</div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">1,240</div>
                    <div className="text-[10px] text-emerald-500 font-bold mt-1">↑ 12% vs last week</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Tasks Automated</div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">8,502</div>
                    <div className="text-[10px] text-indigo-500 font-bold mt-1">⚡ Saved 40hrs</div>
                  </div>
                </div>

                {/* Automation Log */}
                <div className="space-y-2">
                  {[
                    { icon: Table, text: "Spreadsheet Sync", sub: "Data updated from CRM", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/20" },
                    { icon: Megaphone, text: "Ad Campaign Live", sub: "Facebook & Instagram", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20" },
                    { icon: Database, text: "Supabase Backup", sub: "Secure encryption", color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/20" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer">
                      <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
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

      {/* 2. STATS SECTION (Compact) */}
      <section className="py-10 bg-transparent relative z-10 border-y border-slate-100 dark:border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Shipped", val: 500, suffix: "+", color: "from-blue-600 to-cyan-500" },
              { label: "Lines of Code", val: 2.5, suffix: "M+", color: "from-purple-600 to-pink-500" },
              { label: "Hours Saved", val: 50, suffix: "k+", color: "from-amber-500 to-orange-500" },
              { label: "Happy Clients", val: 98, suffix: "%", color: "from-emerald-500 to-teal-500" }
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

      {/* 3. EXPERTISE SECTION (Expanded Services) */}
      <section className="py-20 px-4 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Complete Digital Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              From coding complex backends to running high-ROI marketing campaigns. We do it all.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* 1. MERN Stack */}
            <SpotlightCard
              to="/services/development"
              icon={Code2}
              title="Full-Stack Dev"
              desc="Scalable web apps using React, Node.js, and MongoDB. Fast, secure, and built for growth."
              techs={['React', 'Node.js', 'MongoDB', 'Express']}
              color="blue"
            />

            {/* 2. Java & Enterprise */}
            <SpotlightCard
              to="/services/enterprise"
              icon={Coffee}
              title="Java Enterprise"
              desc="Robust backend systems powered by Java Spring Boot. Perfect for large-scale transaction processing."
              techs={['Java', 'Spring Boot', 'Microservices']}
              color="orange"
            />

            {/* 3. Automation */}
            <SpotlightCard
              to="/services/automation"
              icon={Table}
              title="Workflow Automation"
              desc="Automate your workflow. We build custom scripts for spreadsheets, email & documents to save you hours of manual work."
              techs={['Apps Script', 'Sheets API', 'Gmail Automations']}
              color="green"
            />

            {/* 4. Supabase & Database */}
            <SpotlightCard
              to="/services/cloud"
              icon={Database}
              title="Supabase & Cloud"
              desc="Real-time databases and authentication using Supabase. Serverless power without the headache."
              techs={['Supabase', 'PostgreSQL', 'Auth', 'Edge Functions']}
              color="emerald"
            />

            {/* 5. AI Solutions */}
            <SpotlightCard
              to="/services/ai"
              icon={Bot}
              title="AI Integration"
              desc="Smart chatbots and predictive analytics using Python and OpenAI. Make your data work for you."
              techs={['Python', 'OpenAI API', 'TensorFlow', 'Chatbots']}
              color="violet"
            />

            {/* 6. Digital Marketing */}
            <SpotlightCard
              to="/services/marketing"
              icon={Megaphone}
              title="Digital Marketing"
              desc="Data-driven SEO, PPC advertising, and Social Media campaigns to acquire customers for your startup."
              techs={['SEO/SEM', 'PPC Ads', 'Content Strategy', 'Analytics']}
              color="pink"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. TECH STACK MARQUEE */}
      <section className="py-16 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10 relative z-10">
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Powered by</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Modern Tech</span>
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent"></div>

          <motion.div
            className="flex gap-8 items-center whitespace-nowrap pr-8"
            animate={{ x: "-25%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(4)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {[
                  { name: "React", icon: Code2, color: "text-blue-500" },
                  { name: "Node.js", icon: Server, color: "text-green-500" },
                  { name: "Supabase", icon: Database, color: "text-emerald-500" },
                  { name: "Java", icon: Coffee, color: "text-orange-500" },
                  { name: "Python", icon: FileSpreadsheet, color: "text-yellow-500" },
                  { name: "Spreadsheets", icon: Table, color: "text-green-600" },
                  { name: "Tailwind", icon: Layout, color: "text-cyan-500" },
                  { name: "Next.js", icon: Zap, color: "text-slate-900 dark:text-white" },
                  { name: "Docker", icon: Globe, color: "text-blue-400" }
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 transition-all duration-300 hover:scale-110 cursor-pointer px-4">
                    <tech.icon size={24} className={tech.color} />
                    <span className={`text-sm font-bold ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. TRUSTED BY INDUSTRY LEADERS SECTION (Compact & Animated) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-3"
            >
              <Star size={14} />
              <span>Client Success Stories</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 transition-colors"
              >
                <Quote className="text-indigo-200 dark:text-indigo-800 mb-4" size={32} />
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 italic mb-6 flex-grow leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</div>
                    <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Logo Marquee */}
          <div className="relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent"></div>

            <motion.div
              className="flex gap-16 items-center whitespace-nowrap"
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[...Array(4)].map((_, groupIndex) =>
                ['PixelCraft', 'AppForge', 'DevSprint', 'CloudPeak', 'DataNest', 'CodeWave', 'BuildFast', 'LaunchPad'].map((company, i) => (
                  <div key={`${groupIndex}-${i}`} className="text-xl font-black text-slate-300 dark:text-slate-700 hover:text-indigo-500 transition-colors cursor-default select-none">
                    {company}
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              <Star size={16} />
              <span>About AshbitSoft</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">We Are</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We're a team of passionate developers, designers, and strategists dedicated to transforming your digital vision into reality.
            </p>
          </motion.div>

          {/* Company Overview Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6">
                <Rocket size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To empower businesses of all sizes with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in building long-term partnerships, not just delivering projects.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-3xl p-8 border border-emerald-100 dark:border-emerald-800/30 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center mb-6">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Approach</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We combine agile methodologies with proven best practices to deliver solutions that are scalable, secure, and tailored to your unique needs. Every project is treated as our own.
              </p>
            </motion.div>
          </div>

          {/* Work Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Work Process</span>
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals and challenges', icon: Search, color: 'from-blue-500 to-cyan-500' },
                { step: '02', title: 'Strategy', desc: 'We craft a tailored roadmap for your success', icon: FileCheck, color: 'from-indigo-500 to-purple-500' },
                { step: '03', title: 'Development', desc: 'We build with precision, quality, and speed', icon: Code, color: 'from-purple-500 to-pink-500' },
                { step: '04', title: 'Launch & Support', desc: 'We deploy and provide ongoing optimization', icon: Rocket, color: 'from-pink-500 to-rose-500' }
              ].map((process, index) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${process.color} opacity-10 rounded-bl-full`}></div>
                    <div className="relative">
                      <div className={`text-5xl font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-4`}>
                        {process.step}
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${process.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{process.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{process.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-slate-900 to-indigo-900 dark:from-slate-950 dark:to-indigo-950 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/5"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-12">
                Trusted by Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Worldwide</span>
              </h3>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '500+', label: 'Projects Delivered', icon: FileCheck },
                  { number: '250+', label: 'Happy Clients', icon: Star },
                  { number: '98%', label: 'Client Satisfaction', icon: TrendingUp },
                  { number: '24/7', label: 'Support Available', icon: ShieldCheck }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <Icon size={32} className="mx-auto mb-4 text-indigo-400" />
                      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-slate-300">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 px-4 bg-transparent relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-10 border border-indigo-100 dark:border-indigo-800/30 relative"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <Rocket size={100} className="text-indigo-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 relative z-10">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Whether you need a full-stack app, automation scripts, or a digital marketing push, we are your all-in-one technical partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-indigo-700 transition shadow-xl shadow-indigo-500/30 text-base"
              >
                Get Free Consultation <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-white font-bold px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700 text-base"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </motion.div>
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

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);
  const rotateX = useTransform(mouseYSpring, [0, 400], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [0, 300], [-5, 5]);

  const colorClasses = {
    emerald: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 group-hover:border-emerald-500/30',
    blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20 group-hover:border-blue-500/30',
    violet: 'text-violet-500 bg-violet-50 dark:bg-violet-900/20 group-hover:border-violet-500/30',
    orange: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20 group-hover:border-orange-500/30',
    pink: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20 group-hover:border-pink-500/30',
    green: 'text-green-600 bg-green-50 dark:bg-green-900/20 group-hover:border-green-600/30',
  };

  return (
    <Link to={to} className="block h-full group perspective-1000">
      <motion.div
        variants={fadeInUp}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -5 }}
        className={`relative h-full bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-none overflow-hidden z-10 ${colorClasses[color].split(' ').pop()}`}
      >
        {/* Spotlight Gradient */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
                      radial-gradient(
                        400px circle at ${mouseX}px ${mouseY}px,
                        rgba(99, 102, 241, 0.1),
                        transparent 80%
                      )
                    `,
          }}
        />

        <div className={`w-12 h-12 rounded-xl ${colorClasses[color].split(' ').slice(0, 3).join(' ')} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500`}>
          <Icon size={24} />
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
          {desc}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, i) => (
              <span key={i} className="text-[10px] font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
          <ArrowRight size={16} className="text-indigo-500" />
        </div>
      </motion.div>
    </Link>
  );
};

export default Home;