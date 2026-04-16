import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import HeroSlider from '../components/HeroSlider';
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

const INDUSTRIES_WE_SERVE = [
  { name: "Startups & MVPs", desc: "Helping founders go from idea to launch in record time with scalable 0-to-1 engineering.", icon: Rocket, path: "/solutions/startups" },
  { name: "E-Commerce", desc: "Building high-performance online stores with custom inventory sync and automated order processing.", icon: Globe },
  { name: "Healthcare & MedTech", desc: "Designing secure, HIPAA-compliant patient management systems and booking automations.", icon: ShieldCheck },
  { name: "Finance & FinTech", desc: "Robust data processing and secure dashboarding for transactional apps and financial reporting.", icon: TrendingUp },
  { name: "Education", desc: "Interactive learning platforms and automated student onboarding workflows.", icon: FileCheck },
  { name: "Logistics", desc: "Real-time tracking dashboards and automated shipment notification systems.", icon: Server },
  { name: "Marketing Agencies", desc: "Internal tools for automated reporting, CRM sync, and multi-channel campaign management.", icon: Megaphone },
  { name: "Enterprise", desc: "Modernizing legacy workflows with cloud integration and building bespoke secure systems.", icon: Briefcase, path: "/solutions/enterprises" },
];

const SPECIALIZED_EXPERTISE = [
  {
    title: 'Full-Stack Development',
    desc: 'Scalable web applications using the MERN stack (React, Node.js, MongoDB). We focus on building fast, secure, and production-ready systems that grow with your business.',
    icon: Code2,
    techs: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Java Enterprise Systems',
    desc: 'Robust backend architectures powered by Java Spring Boot. We specialize in high-transaction, enterprise-grade systems with complex business logic.',
    icon: Coffee,
    techs: ['Java', 'Spring Boot', 'Microservices', 'Hibernate']
  },
  {
    title: 'Workflow & Sheet Automation',
    desc: 'Bespoke automation for manual tasks using Google Apps Script and custom APIs. We eliminate data entry and synchronize business workflows in real-time.',
    icon: Table,
    techs: ['Apps Script', 'Sheets API', 'Gmail Automation']
  },
  {
    title: 'AI & Machine Learning Integration',
    desc: 'Deploy custom AI solutions using Python and OpenAI. From smart chatbots trained on your docs to predictive analytics for business intelligence.',
    icon: Bot,
    techs: ['Python', 'OpenAI API', 'LangChain', 'Data Engineering']
  },
  {
    title: 'Cloud & Database Architecture',
    desc: 'Secure, real-time database management using Supabase and PostgreSQL. We design serverless cloud backends with maximum uptime.',
    icon: Database,
    techs: ['Supabase', 'PostgreSQL', 'Auth', 'Edge Functions']
  },
  {
    title: 'Digital Marketing & Growth',
    desc: 'Data-driven marketing strategies including SEO, PPC, and campaign automation. We help you acquire and retain customers through performance-focused tactics.',
    icon: Megaphone,
    techs: ['SEO/SEM', 'PPC Ads', 'Performance Marketing', 'Analytics']
  }
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
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = 0, height = 0;
    const PARTICLE_COUNT = isMobile ? 20 : 300;
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

  return (
    <>
      {isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)' }} />
        </div>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
    </>
  );
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

const WhyChooseCard = ({ icon: Icon, title, desc, color, delay, slug }) => {
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
      className="bg-white/90 dark:bg-slate-900/90 md:bg-white/40 md:dark:bg-slate-900/30 md:backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-slate-800 shadow-xl relative group z-30 overflow-hidden will-change-transform"
    >
      <Link to={slug ? `/features/${slug}` : '#'} className="block p-7 h-full w-full">
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
      </Link>
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

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openService, setOpenService] = useState(0);
  const [openIndustry, setOpenIndustry] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300 font-sans min-h-screen">

      <SEO
        title="Custom Software Development & Automation"
        description="AshbitSoft builds digital growth engines. We specialize in MERN stack development, custom automation, and ROI-driven digital marketing for startups."
        keywords="custom software, mern stack, web development automation, business growth engine, digital transformation india"
      />
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION (MULTI-SLIDER)
      ═══════════════════════════════════════════════════════ */}
      <HeroSlider />


      {/* ═══════════════════════════════════════════════════════
          2. STATS STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-10 bg-slate-50 dark:bg-slate-900/40 relative z-10 border-y border-slate-100 dark:border-slate-800/50">
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
      <section className="py-16 lg:py-20 px-4 relative overflow-hidden bg-white dark:bg-slate-950">
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
                  The Engine <br />
                  Behind Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Growth.</span>
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                  Founded on a mission to eliminate technical bottlenecks, AshbitSoft is an elite digital architecture firm. We don't just build software — we engineer <strong>high-performance ecosystems</strong> that drive ROI and scale with your ambition.
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
      <section className="py-16 lg:py-20 px-4 relative bg-white dark:bg-slate-950 overflow-hidden border-y border-slate-100 dark:border-slate-800">
        {/* Subtle Dot Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Why Companies <span className="text-indigo-600">Choose AshbitSoft</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              A tech and IT company named AshbitSoft is ultra-premium, <br className="hidden md:block" />
              realistically crafted with precision and modern engineering.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 mt-16">

            {/* Left Cards */}
            <div className="flex flex-col gap-8 w-full md:w-1/3 md:pr-10 order-2 md:order-1">
              <WhyChooseCard
                icon={Zap}
                title="Fast Turnaround"
                desc="MVPs in 4-8 weeks. Automation scripts in days. Startup speed without cutting corners."
                color="amber"
                delay={0.1}
                slug="rapid-deployment"
              />
              <WhyChooseCard
                icon={MessageSquare}
                title="Transparent Communication"
                desc="Daily updates, weekly demos. Real-time project board access. You're never in the dark."
                color="blue"
                delay={0.2}
                slug="team-collaboration"
              />
            </div>

            {/* Central Animated Logo - More Compact & Branded */}
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] flex items-center justify-center flex-shrink-0 z-20 order-1 md:order-2">

              {/* Outer Water Wave Ripples - Varied Oceanic Colors */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.1, opacity: 0 }}
                  animate={{
                    scale: [0.1, 4.8],
                    opacity: [0, 0.45, 0],
                    borderWidth: [1, 2.5, 0.5]
                  }}
                  transition={{
                    duration: 6 + (i * 0.5),
                    repeat: Infinity,
                    delay: i * 1.1,
                    ease: "easeOut"
                  }}
                  className={`absolute inset-0 border-solid rounded-full pointer-events-none -z-10 shadow-[0_0_25px_rgba(34,211,238,0.1)] will-change-transform ${i % 3 === 0 ? 'border-cyan-400/20' : i % 3 === 1 ? 'border-indigo-400/25' : 'border-teal-400/20'
                    }`}
                />
              ))}

              {/* Secondary Liquid Shimmers - Fast Atmospheric Waves */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`wave-${i}`}
                  initial={{ scale: 0.1, opacity: 0 }}
                  animate={{ scale: [0.1, 2.8], opacity: [0, 0.25, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "linear"
                  }}
                  className="absolute inset-0 border border-blue-400/10 rounded-full pointer-events-none shadow-[0_0_30px_rgba(56,189,248,0.08)] -z-10 will-change-transform"
                />
              ))}

              {/* Inner Glowing Core - Even More Compact */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.25)] border border-indigo-500/30 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                {/* Branded Triple Rotating Half-Circles - Minimum Gap Mechanical Visuals */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[2px] border-transparent border-t-cyan-400/40 rounded-full will-change-transform"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[3px] border-[2px] border-transparent border-b-indigo-400/30 rounded-full will-change-transform"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[6px] border-[2px] border-transparent border-l-teal-400/30 rounded-full will-change-transform"
                />

                <div className="flex flex-col items-center justify-center relative z-10 px-4 text-center">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-lg md:text-xl font-black text-white tracking-tighter drop-shadow-lg"
                  >
                    Ashbit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#349ec9] to-[#172a5f] font-extrabold">Soft</span>
                  </motion.div>
                  <div className="text-[7px] font-bold text-indigo-300 uppercase tracking-[0.3em] mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    Tech & IT Solution
                  </div>
                </div>

                {/* Core Glow Center */}
                <div className="absolute inset-4 rounded-full bg-indigo-500/5 blur-3xl"></div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-8 w-full md:w-1/3 md:pl-10 order-3">
              <WhyChooseCard
                icon={ShieldCheck}
                title="100% Code Ownership"
                desc="Every line belongs to you. No licensing traps. Full IP transfer on delivery."
                color="emerald"
                delay={0.3}
                slug="enterprise-security"
              />
              <WhyChooseCard
                icon={TrendingUp}
                title="ROI-First Approach"
                desc="Every feature tied to a business outcome that improves your bottom line."
                color="purple"
                delay={0.4}
                slug="real-time-analytics"
              />
            </div>

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
            className="flex gap-8 items-center whitespace-nowrap pr-8 will-change-transform"
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
      <section className="py-12 lg:py-16 px-4 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
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
      <section className="py-16 lg:py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-3 block"
            >
              How We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6"
            >
              Our Delivery Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto"
            >
              A precision-engineered 4-step framework designed for speed, transparency, and high-performance outcomes.
            </motion.p>
          </div>

          <div className="relative">
            {/* Horizontal Line - Desktop - Hidden on Mobile */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-slate-100 dark:bg-slate-800 -z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
            </div>

            {/* Vertical Line - Mobile - Hidden on Desktop */}
            <div className="lg:hidden absolute top-0 bottom-0 left-[2rem] w-0.5 bg-slate-100 dark:bg-slate-800 -z-10">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We dive deep into your workflow to identify high-impact automation opportunities and growth bottlenecks.', icon: Search, color: 'from-blue-500 to-indigo-600' },
                { step: '02', title: 'Strategy', desc: 'Architecting a roadmap with clear milestones, optimized tech stack, and a focus on maximizing ROI.', icon: FileCheck, color: 'from-indigo-600 to-purple-600' },
                { step: '03', title: 'Development', desc: 'Accelerated agile cycles with real-time feedback loops and daily progress reporting.', icon: Code, color: 'from-purple-600 to-indigo-600' },
                { step: '04', title: 'Launch & Care', desc: "Production-ready deployment followed by a dedicated support window to ensure absolute reliability.", icon: Rocket, color: 'from-indigo-500 to-blue-500' },
              ].map((process, index) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group flex flex-col items-center lg:items-start text-center lg:text-left pl-0 lg:pl-0"
                  >
                    {/* Mobile Timeline Dot */}
                    <div className="lg:hidden absolute left-[1.625rem] top-8 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-slate-950 z-20"></div>

                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 w-full group relative overflow-hidden"
                    >
                      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${process.color} opacity-[0.03] group-hover:opacity-10 transition-opacity rounded-bl-full`} />

                      <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 relative">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon size={24} />
                        </div>
                        <div className={`text-4xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-100 transition-opacity`}>
                          {process.step}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                        {process.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {process.desc}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          8. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 px-4 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Market Sectors</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Industries We Serve</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
              Strategic technical partnerships across high-growth industries.
            </p>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800">
            {INDUSTRIES_WE_SERVE.map((ind, i) => {
              const Icon = ind.icon;
              const isOpen = openIndustry === i;
              return (
                <div
                  key={i}
                  className={`border-b border-slate-100 dark:border-slate-800 transition-all duration-300 ${isOpen ? 'bg-slate-50/50 dark:bg-slate-900/20' : 'hover:bg-slate-50/30 dark:hover:bg-slate-900/10'}`}
                >
                  <button
                    onClick={() => setOpenIndustry(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between py-6 px-4 text-left group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isOpen ? 'bg-indigo-600 text-white' : 'text-slate-400 group-hover:text-indigo-600'}`}>
                        <Icon size={18} />
                      </div>
                      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {ind.name}
                      </span>
                    </div>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-300'}`}>
                      <ChevronRight size={16} className="transform rotate-90" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-12 pb-6 ml-6">
                          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-2xl mb-4">
                            {ind.desc}
                          </p>
                          {ind.path && (
                            <Link 
                              to={ind.path}
                              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-3 transition-all"
                            >
                              Explore {ind.name} Solutions <ArrowRight size={16} />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          9. TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 px-4 bg-white dark:bg-slate-950 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-amber-100 dark:border-amber-800/30">
              <Star size={14} className="fill-amber-400" /> Client Success Stories
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">What Our Clients Say</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">We've helped 50+ founders and enterprise teams ship faster and automate more. Here's their take on our partnership.</p>
          </div>

          <div className="relative group/marquee">
            {/* Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-6 pb-8 will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div
                  key={i}
                  className="w-[380px] flex-shrink-0 bg-slate-50/50 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 relative group"
                >
                  <Quote className="absolute top-6 right-8 text-indigo-400/10 group-hover:text-indigo-400 transition-colors" size={60} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 italic mb-8 flex-grow leading-relaxed text-base relative z-10">"{t.quote}"</p>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-base leading-none mb-1.5">{t.author}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 mx-auto hover:text-indigo-500 transition-colors"
              >
                Ready to be our next success story? <ArrowRight size={18} />
              </motion.button>
            </Link>
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
      <section className="py-16 lg:py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full md:blur-3xl blur-2xl pointer-events-none" />

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