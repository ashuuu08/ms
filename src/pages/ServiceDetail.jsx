import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, FileSpreadsheet, Globe, Server, 
  Share2, Layout, Terminal, Code2, ShieldCheck, Cpu, 
  Bot, Search, BarChart3 
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
      description: "We build custom scripts that live inside your Google Workspace. Imagine your Spreadsheets talking to your Email, or your Forms automatically generating Invoices. We remove the 'boring' from your business.",
      features: [
        "Google Apps Script Development",
        "Automated PDF Generation",
        "Gmail & Drive Organization Bots",
        "Custom Slack/Discord Notifications",
        "Data Entry Automation"
      ]
    },
    "web": {
      title: "Web & Design",
      tagline: "Your digital identity, upgraded.",
      icon: Layout,
      color: "text-blue-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-blue-500",
      description: "Speed and aesthetics matter. We build high-performance React websites that rank high on Google and look stunning on mobile. No clunky page builders—just pure, optimized code.",
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
      icon: Server,
      color: "text-indigo-400",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-indigo-500",
      description: "When you have outgrown Excel and standard SaaS tools, you need custom architecture. We build secure, scalable cloud systems capable of handling millions of database transactions.",
      features: [
        "AWS / Google Cloud Architecture",
        "Scalable SaaS Backends",
        "Database Design & Optimization",
        "API Development & Integration",
        "Load Balancing & Security"
      ]
    }, // <--- THIS COMMA WAS LIKELY MISSING
    "ai": {
      title: "AI & Machine Learning",
      tagline: "Intelligence, Integrated.",
      icon: Bot, 
      color: "text-purple-500",
      bg: "bg-white dark:bg-slate-900",
      accent: "border-purple-500",
      description: "Don't just watch the AI revolution—join it. We integrate powerful LLMs (like GPT-4) into your existing workflows. From intelligent customer support chatbots to automated content summarizers, we make your software smart.",
      features: [
        "Custom ChatGPT Integrations",
        "Fine-tuned LLM Models",
        "Customer Support Chatbots",
        "Automated Data Analysis",
        "Voice AI Agents"
      ]
    },
    "seo": {
      title: "SEO & Analytics",
      tagline: "Be seen. Be measured.",
      icon: Search, 
      color: "text-blue-600",
      bg: "bg-slate-50 dark:bg-slate-900",
      accent: "border-blue-500",
      description: "A beautiful website is useless if no one visits it. We optimize your technical SEO structure to rank higher on Google. Plus, we set up advanced analytics so you can see exactly who is visiting and what they are clicking.",
      features: [
        "Technical SEO Audits",
        "Core Web Vitals Optimization",
        "Google Analytics 4 Setup",
        "Conversion Rate Optimization",
        "Competitor Analysis"
      ]
    }
  };

  const service = serviceData[id];

  // Fallback if ID not found
  if (!service) return <div className="pt-32 text-center text-slate-500">Service not found.</div>;

  return (
    <div className={`min-h-screen pt-24 pb-20 ${service.bg} transition-colors duration-300 font-sans`}>
      
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Back Button */}
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Matrix
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className={`inline-block p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 ${service.color}`}>
            <service.icon size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
            {service.title}
          </h1>
          <p className={`text-xl md:text-2xl font-medium ${service.color} mb-6`}>
            {service.tagline}
          </p>
          <div className={`h-1 w-24 ${service.bg.includes('slate-9') ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-700'} rounded-full`}></div>
        </motion.div>

        {/* Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left: Description */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Overview</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm">
               <h4 className="font-bold text-slate-900 dark:text-white mb-6">What we deliver:</h4>
               <ul className="space-y-4">
                 {service.features.map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 size={20} className={`${service.color} mt-0.5`} />
                     <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
             <div className={`sticky top-32 p-6 rounded-2xl border ${service.accent} bg-white dark:bg-slate-900 shadow-xl`}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to start?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Book a discovery call to discuss your specific requirements.
                </p>
                <Link to="/contact" className={`block w-full py-3 px-4 rounded-xl text-center font-bold text-white transition hover:opacity-90 ${service.color.replace('text', 'bg')}`}>
                  Get a Quote
                </Link>
                <div className="mt-4 text-center">
                  <span className="text-xs text-slate-400">Response time: &lt; 24h</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;