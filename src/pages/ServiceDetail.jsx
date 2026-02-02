import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, FileSpreadsheet, Globe, Server,
  Share2, Layout, Terminal, Code2, ShieldCheck, Cpu,
  Bot, Search, BarChart3, Database, Megaphone, Coffee, Zap
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // --- DATA: Unique Content for each Service ---
  const serviceData = {
    "automation": {
      title: "Automation & Scripting",
      tagline: "Stop working like a robot. Let the code do it.",
      icon: Terminal,
      color: "text-green-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-green-500",
      ctaColor: "bg-green-600 hover:bg-green-700",
      description: "We build custom scripts that automate your workspace. Imagine your spreadsheets talking to your email, or your forms automatically generating invoices. We remove the 'boring' from your business.",
      features: [
        "Workspace Automation Development",
        "Automated PDF Generation",
        "Gmail & Drive Organization Bots",
        "Custom Slack/Discord Notifications",
        "Data Entry Automation"
      ]
    },
    "development": {
      title: "Full-Stack Development",
      tagline: "Scalable MERN & Java Applications.",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-blue-500",
      ctaColor: "bg-blue-600 hover:bg-blue-700",
      description: "From MVP to IPO. We build robust web applications using the MERN stack (MongoDB, Express, React, Node) and Java Spring Boot. Clean code, microservices architecture, and ready for massive scale.",
      features: [
        "React.js & Next.js Frontends",
        "Node.js & Java Spring Boot Backends",
        "Microservices Architecture",
        "Progressive Web Apps (PWA)",
        "Secure API Development"
      ]
    },
    "web": { // Alias or specific for Design
      title: "Web & Design",
      tagline: "Your digital identity, upgraded.",
      icon: Layout,
      color: "text-indigo-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-indigo-500",
      ctaColor: "bg-indigo-600 hover:bg-indigo-700",
      description: "Speed and aesthetics matter. We build high-performance React websites that rank high on search engines and look stunning on mobile. No clunky page builders—just pure, optimized code.",
      features: [
        "Custom React.js Development",
        "High-End Portfolio Sites",
        "SEO Optimization",
        "Interactive UI/UX Design",
        "Fast Loading Speeds (90+ Lighthouse)"
      ]
    },
    "social": {
      title: "Social Tech",
      tagline: "Dominate the feed with data.",
      icon: Share2,
      color: "text-pink-500",
      bg: "bg-slate-50 dark:bg-slate-900",
      accent: "border-pink-500",
      ctaColor: "bg-pink-600 hover:bg-pink-700",
      description: "Social media is a numbers game. We provide the tech to win it. From automated posting bots that run 24/7 to analytics dashboards that tell you exactly what to post next.",
      features: [
        "Automated Posting Bots (X/LinkedIn)",
        "Content Scheduling APIs",
        "Growth Analytics Dashboards",
        "Hashtag & Trend Scrapers",
        "Multi-platform Sync"
      ]
    },
    "enterprise": {
      title: "Enterprise Systems",
      tagline: "Scale without breaking.",
      icon: ShieldCheck,
      color: "text-indigo-400",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-indigo-500",
      ctaColor: "bg-indigo-600 hover:bg-indigo-700",
      description: "When you have outgrown Excel and standard SaaS tools, you need custom architecture. We build secure, scalable cloud systems capable of handling millions of database transactions.",
      features: [
        "AWS / Cloud Architecture",
        "Scalable SaaS Backends",
        "Database Design & Optimization",
        "API Development & Integration",
        "Load Balancing & Security"
      ]
    },
    "cloud": {
      title: "Cloud & Database",
      tagline: "Serverless power, real-time speed.",
      icon: Database,
      color: "text-emerald-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-emerald-500",
      ctaColor: "bg-emerald-600 hover:bg-emerald-700",
      description: "Leverage modern database solutions like Supabase and PostgreSQL. We design schemas that stay fast as you grow and implement real-time features for live data synchronization.",
      features: [
        "Supabase Integration & Auth",
        "PostgreSQL Optimization",
        "Real-time Subscriptions",
        "Serverless Edge Functions",
        "Secure Row-Level Security (RLS)"
      ]
    },
    "ai": {
      title: "AI & Machine Learning",
      tagline: "Intelligence, Integrated.",
      icon: Bot,
      color: "text-purple-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-purple-500",
      ctaColor: "bg-purple-600 hover:bg-purple-700",
      description: "Don't just watch the AI revolution—join it. We integrate powerful LLMs (like GPT-4) into your existing workflows. From intelligent customer support chatbots to automated content summarizers, we make your software smart.",
      features: [
        "Custom ChatGPT Integrations",
        "Fine-tuned LLM Models",
        "Customer Support Chatbots",
        "Automated Data Analysis",
        "Voice AI Agents"
      ]
    },
    "marketing": {
      title: "Digital Marketing",
      tagline: "Acquire customers on autopilot.",
      icon: Megaphone,
      color: "text-orange-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-orange-500",
      ctaColor: "bg-orange-600 hover:bg-orange-700",
      description: "Tech-enabled marketing strategies. We combine data analytics with creativity to run high-ROI campaigns on major platforms. We track every click to ensure profitability.",
      features: [
        "PPC Advertising Management",
        "Facebook/Instagram Ad Scaling",
        "Conversion Rate Optimization (CRO)",
        "B2B Lead Generation",
        "Marketing Analytics Dashboards"
      ]
    },
    "seo": {
      title: "SEO & Analytics",
      tagline: "Be seen. Be measured.",
      icon: Search,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-900",
      accent: "border-blue-500",
      ctaColor: "bg-blue-600 hover:bg-blue-700",
      description: "A beautiful website is useless if no one visits it. We optimize your technical SEO structure to rank higher on search engines. Plus, we set up advanced analytics so you can see exactly who is visiting and what they are clicking.",
      features: [
        "Technical SEO Optimization",
        "Core Web Vitals Optimization",
        "Analytics Setup & Configuration",
        "Conversion Rate Optimization",
        "Competitor Analysis"
      ]
    }
  };

  const service = serviceData[id];

  // Fallback if ID not found
  if (!service) return (
    <div className="min-h-screen pt-32 text-center bg-white dark:bg-slate-950 font-sans">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Service Not Found</h2>
      <Link to="/services" className="text-indigo-600 hover:underline">Return to Services</Link>
    </div>
  );

  return (
    <div className={`min-h-screen pt-24 pb-20 ${service.bg} transition-colors duration-300 font-sans`}>

      <div className="max-w-5xl mx-auto px-4">

        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className={`inline-flex p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6 ${service.color}`}>
            <service.icon size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {service.title}
          </h1>
          <p className={`text-xl md:text-2xl font-medium ${service.color} mb-8`}>
            {service.tagline}
          </p>
          <div className={`h-1.5 w-24 ${service.ctaColor.split(' ')[0]} rounded-full opacity-50`}></div>
        </motion.div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Overview</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-10">
              {service.description}
            </p>

            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-xl">What we deliver</h4>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className={`${service.color} mt-0.5 flex-shrink-0`} />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="sticky top-32">
              <div className={`p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-full h-2 ${service.ctaColor.split(' ')[0]}`}></div>

                <div className="flex items-center gap-2 mb-4">
                  <Zap size={18} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-bold text-slate-400 uppercase">Fast Track</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready to scale?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  Book a discovery call to discuss your specific requirements. We start fast.
                </p>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block w-full py-4 px-6 rounded-xl text-white font-bold text-center shadow-lg transition-all duration-200 ${service.ctaColor}`}
                  >
                    Get Custom Quote
                  </motion.button>
                </Link>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="text-xs text-slate-400 font-medium">Average Response time</div>
                  <div className="text-slate-900 dark:text-white font-bold">Less than 24 hours</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;