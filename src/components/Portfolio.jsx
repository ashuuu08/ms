import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Layers,
  Search,
  Zap,
  Cpu,
  Database,
  Lock,
  Globe,
  Smartphone,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATA ---
const categories = ["All", "Web", "Automation", "Enterprise", "Design"];

const projects = [
  {
    id: 1,
    title: "AshSoft Corporate",
    category: "Web",
    status: "Live",
    complexity: "High",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    description: "High-performance SaaS landing page featuring anti-gravity particle physics and seamless dark mode transitions.",
    tech: ["React", "Framer Motion", "Tailwind"]
  },
  {
    id: 2,
    title: "Market Pulse Analyzer",
    category: "Enterprise",
    status: "Beta",
    complexity: "Extreme",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop",
    description: "Real-time option chain visualizer processing 50k+ data points per second with WebSocket integration.",
    tech: ["Java Spring", "React", "WebSockets"]
  },
  {
    id: 3,
    title: "Auto-Invoice Bot",
    category: "Automation",
    status: "Internal",
    complexity: "Medium",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop",
    description: "Autonomous Google Apps Script agent that generates PDFs from Sheets and manages client billing cycles.",
    tech: ["Apps Script", "Gmail API", "Drive API"]
  },
  {
    id: 4,
    title: "Horror World Brand",
    category: "Design",
    status: "Live",
    complexity: "Medium",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
    description: "Complete digital identity overhaul including logo design, motion graphics assets, and social strategy.",
    tech: ["Adobe Suite", "Cinema 4D", "Brand"]
  },
  {
    id: 5,
    title: "SecureAuth JWT",
    category: "Enterprise",
    status: "v2.0",
    complexity: "High",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    description: "Bank-grade authentication microservice featuring role-based access control and token rotation.",
    tech: ["Java", "Spring Security", "Redis"]
  },
  {
    id: 6,
    title: "Personal Matrix",
    category: "Web",
    status: "Live",
    complexity: "Low", // Visually low, functionally high
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    description: "The portfolio you're viewing now. Optimized for 99+ Lighthouse scores and fluid 60fps animations.",
    tech: ["React", "Vite", "Lucide"]
  },
  {
    id: 7,
    title: "Crypto Algo Trader",
    category: "Automation",
    status: "Active",
    complexity: "Extreme",
    image: "https://images.unsplash.com/photo-1621504450168-38f64731993e?q=80&w=2670&auto=format&fit=crop",
    description: "Python bot executing trades based on RSI and MACD indicators on Binance API.",
    tech: ["Python", "Pandas", "Binance API"]
  },
  {
    id: 8,
    title: "MediCare Dashboard",
    category: "Web",
    status: "Prototype",
    complexity: "High",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    description: "HIPAA-compliant patient management dashboard with telemedicine video integration.",
    tech: ["Next.js", "WebRTC", "PostgreSQL"]
  },
  {
    id: 9,
    title: "Inventory Sync",
    category: "Enterprise",
    status: "Live",
    complexity: "Medium",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
    description: "Microservice syncing Shopify inventory with local warehouse ERP systems in real-time.",
    tech: ["Node.js", "GraphQL", "AWS Lambda"]
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 font-sans pt-32 pb-20">

      {/* 1. HEADER & FILTERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">
              <Layers size={14} /> Project Gallery
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Excellence.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              A deep dive into systems, architectures, and interfaces designed for scale and performance.
            </p>
          </motion.div>

          {/* Liquid Tabs Filter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-xl text-sm font-bold z-10 transition-colors duration-200 ${filter === cat ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl -z-10 shadow-lg shadow-indigo-500/30"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-400 mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No projects found</h3>
            <p className="text-slate-500">Try selecting a different category.</p>
          </motion.div>
        )}
      </div>

      {/* 3. CTA FOOTER */}
      <div className="max-w-4xl mx-auto mt-32 px-4">
        <div className="bg-slate-900 dark:bg-indigo-950 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group">
          {/* Animated Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[100px] group-hover:bg-indigo-500/40 transition-colors duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Need a custom solution?</h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
              Whether it's a complex backend system or a sleek frontend interface, we engineer it to perfection.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-indigo-900 font-bold px-10 py-4 rounded-full hover:bg-indigo-50 transition-all shadow-xl"
              >
                Start a Project <ArrowUpRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- SUB-COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project }) => {
  // Logic to determine complexity bar color/width
  const getComplexity = (level) => {
    switch (level) {
      case 'Extreme': return { width: '100%', color: 'bg-red-500' };
      case 'High': return { width: '75%', color: 'bg-orange-500' };
      case 'Medium': return { width: '50%', color: 'bg-yellow-500' };
      default: return { width: '25%', color: 'bg-green-500' };
    }
  }
  const compData = getComplexity(project.complexity);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image Area */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Top Left: Category */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 rounded-lg shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Top Right: Status (New) */}
        <div className="absolute top-4 right-4 z-20">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-white rounded-full">
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></span>
            {project.status}
          </span>
        </div>

        {/* Bottom Hover Effect (Replaces Links) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-between items-center">
          <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <Sparkles size={14} className="text-yellow-400" /> Analysis Available
          </span>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <ArrowUpRight className="text-white" size={16} />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          {/* Complexity Bar (New) */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Complexity</span>
            <div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${compData.color}`}
                style={{ width: compData.width }}
              ></div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">
              {i === 0 && <Zap size={10} className="text-amber-500" />} {/* Icon for first item */}
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;