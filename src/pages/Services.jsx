import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, Globe, Server, Share2, Layout, Cpu, ShieldCheck, 
  BarChart3, ArrowRight, Terminal, Bot, Search,
  CheckCircle2, Plus, Minus, Code2, Rocket, Settings,
  Zap, Layers, Users, Sparkles, LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const faqs = [
    {
      q: "Do you work with existing codebases?",
      a: "Yes. Whether it's a legacy React app or a messy Google Sheet, we can audit, refactor, and improve what you already have."
    },
    {
      q: "How long does a typical automation project take?",
      a: "Simple workflows (like email parsers) take 2-3 days. Complex dashboards and web apps typically take 2-4 weeks."
    },
    {
      q: "What if I need ongoing maintenance?",
      a: "We offer flexible retainer packages for updates, monitoring, and new feature additions after the initial launch."
    }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-slate-950 min-h-screen pt-28 pb-20 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - Main Page Description */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-500 uppercase bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              What We Do
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Services</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              From simple automation scripts to full-scale enterprise applications. 
              We provide the technical foundation for your business growth.
            </p>
          </motion.div>
        </div>

        {/* --- EXPANDED BENTO GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* 1. AUTOMATION (Tall Card) */}
          <Link to="/services/automation" className="contents">
            <motion.div variants={itemVariants} className="md:row-span-2 bg-white dark:bg-slate-900 cursor-pointer rounded-3xl border-l-4 border-green-500 p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between">
              
              <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity"><Terminal size={200} /></div>
              
              {/* Top Content */}
              <div className="relative z-10">
                <div className="bg-green-100 dark:bg-green-900/30 w-fit p-3 rounded-xl text-green-600 mb-6">
                  <FileSpreadsheet size={32} />
                </div>
                
                {/* Header Description Added */}
                <div className="flex items-center gap-2 mb-2">
                    <Zap size={14} className="text-green-500" />
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Operational Efficiency</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Automation</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                   Eliminate manual data entry and save 10+ hours a week with custom scripts.
                </p>
                <div className="space-y-3 mb-8">
                   <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Google Apps Script
                   </div>
                   <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Auto PDF Reports
                   </div>
                   <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Workflow Bots
                   </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="relative z-10 flex items-center text-green-600 font-bold group-hover:gap-2 transition-all">
                Explore Automation <ArrowRight size={18} className="ml-1" />
              </div>
            </motion.div>
          </Link>

          {/* 2. WEB & DESIGN (Wide Card) */}
          <Link to="/services/web" className="contents">
            <motion.div variants={itemVariants} className="md:col-span-2 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 cursor-pointer rounded-3xl p-8 shadow-sm border border-indigo-100 dark:border-slate-700 relative overflow-hidden group flex flex-col justify-between">
               
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 items-start mb-6">
                 <div>
                    {/* Header Description Added */}
                    <div className="flex items-center gap-2 mb-3">
                        <Layers size={14} className="text-indigo-500" />
                        <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Digital Presence</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                       <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-lg text-indigo-600"><Layout size={24} /></div>
                       <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Web & Design</h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md">
                      Pixel-perfect websites built with React. Fast, SEO-friendly, and designed to convert visitors into customers.
                    </p>
                 </div>
                 <Globe size={60} className="text-indigo-200 dark:text-slate-700 hidden md:block" />
               </div>

               <div className="relative z-10 flex items-center text-indigo-600 font-bold group-hover:gap-2 transition-all">
                View Web Solutions <ArrowRight size={18} className="ml-1" />
               </div>
            </motion.div>
          </Link>

          {/* 3. SOCIAL (Standard Card) */}
          <Link to="/services/social" className="contents">
            <motion.div variants={itemVariants} className="bg-white dark:bg-slate-900 cursor-pointer rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform flex flex-col justify-between h-full">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 to-orange-500"></div>
               
               <div>
                 {/* Header Description Added */}
                 <div className="flex items-center gap-2 mb-3">
                    <Users size={14} className="text-pink-500" />
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Audience Building</span>
                 </div>

                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Social Growth</h2>
                    <Share2 className="text-pink-500" />
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                   Grow your audience automatically using smart bots and analytics tools.
                 </p>
               </div>

               <div className="flex items-center text-pink-600 text-sm font-bold group-hover:gap-2 transition-all">
                See Tools <ArrowRight size={16} className="ml-1" />
               </div>
            </motion.div>
          </Link>

          {/* 4. AI & ML (Standard Card) */}
          <Link to="/services/ai" className="contents">
            <motion.div variants={itemVariants} className="bg-slate-900 cursor-pointer rounded-3xl p-8 shadow-xl relative overflow-hidden text-white group hover:shadow-purple-500/20 transition-shadow flex flex-col justify-between h-full">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-slate-900"></div>
               
               <div className="relative z-10">
                 {/* Header Description Added */}
                 <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-purple-400" />
                    <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Future Tech</span>
                 </div>

                 <div className="flex justify-between items-center mb-4">
                     <h2 className="text-xl font-bold">AI Solutions</h2>
                     <Bot className="text-purple-400" />
                 </div>
                 <p className="text-sm text-slate-300 mb-6">
                   Integrate ChatGPT into your business for support and content generation.
                 </p>
               </div>

               <div className="relative z-10 flex items-center text-purple-300 text-sm font-bold group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={16} className="ml-1" />
               </div>
            </motion.div>
          </Link>

          {/* 5. SEO & ANALYTICS (Wide) */}
          <Link to="/services/seo" className="contents">
            <motion.div variants={itemVariants} className="md:col-span-2 bg-white dark:bg-slate-900 cursor-pointer rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group flex flex-col justify-between">
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                     {/* Header Description Added */}
                     <div className="flex items-center gap-2 mb-3">
                        <LineChart size={14} className="text-blue-500" />
                        <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Data Driven</span>
                     </div>

                     <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600"><Search size={20} /></div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">SEO & Analytics</h2>
                     </div>
                     <p className="text-slate-600 dark:text-slate-400 max-w-sm text-sm">
                       Get found on Google. We optimize your structure and set up advanced tracking so you know exactly who visits your site.
                     </p>
                  </div>
                  
                  {/* Stats - Visual Trust */}
                  <div className="flex gap-6 bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-2xl">
                     <div className="text-center">
                        <div className="text-xl font-bold text-slate-900 dark:text-white">#1</div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold">Rankings</div>
                     </div>
                     <div className="w-px bg-slate-200 dark:bg-slate-700"></div>
                     <div className="text-center">
                        <div className="text-xl font-bold text-green-500">3x</div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold">Traffic</div>
                     </div>
                  </div>
               </div>

               <div className="relative z-10 mt-6 flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                Boost Traffic <ArrowRight size={18} className="ml-1" />
               </div>
            </motion.div>
          </Link>

          {/* 6. ENTERPRISE (Wide) */}
          <Link to="/services/enterprise" className="contents">
             <motion.div variants={itemVariants} className="md:col-span-3 bg-slate-950 cursor-pointer rounded-3xl p-10 shadow-2xl relative overflow-hidden text-white group border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
               
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               
               <div className="relative z-10 flex-1">
                  {/* Header Description (Enhanced) */}
                  <div className="flex items-center gap-2 mb-3">
                     <ShieldCheck className="text-emerald-400" size={24} />
                     <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Mission Critical</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Enterprise Infrastructure</h2>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">
                     Secure, scalable cloud systems for businesses that need to handle millions of users. AWS, Docker, and Kubernetes experts.
                  </p>
               </div>

               <div className="relative z-10">
                 <button className="px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center gap-2">
                   View Enterprise Solutions <ArrowRight size={18} />
                 </button>
               </div>
            </motion.div>
          </Link>

        </motion.div>

        {/* --- PROCESS TIMELINE --- */}
        <div className="py-24 mt-16 relative">
            <div className="text-center mb-16">
                {/* Header Description Added */}
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2">Our Methodology</div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">The Blueprint</h2>
                <p className="text-slate-500 dark:text-slate-400">How we go from idea to deployed product in 4 steps.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 dark:from-slate-800 via-indigo-500/50 to-slate-200 dark:to-slate-800 -z-10"></div>
                
                {[
                    { title: "Discovery", desc: "We audit your workflow.", icon: Search },
                    { title: "Strategy", desc: "We design the architecture.", icon: Settings },
                    { title: "Build", desc: "Agile coding sprints.", icon: Code2 },
                    { title: "Launch", desc: "Deployment & Training.", icon: Rocket }
                ].map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg text-center"
                    >
                        <div className="w-12 h-12 mx-auto bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30 relative z-10">
                            <step.icon size={20} />
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- FAQ ACCORDION --- */}
        <div className="py-12 max-w-3xl mx-auto">
            {/* Header Description Added */}
            <div className="text-center mb-12">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Support</div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Common Questions</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    Everything you need to know about how we work, billing, and support.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                        <button 
                            onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                            className="flex justify-between items-center w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                            <span className="font-bold text-slate-900 dark:text-white">{faq.q}</span>
                            {openFaq === i ? <Minus className="text-indigo-500" /> : <Plus className="text-slate-400" />}
                        </button>
                        <AnimatePresence>
                            {openFaq === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
           <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full hover:bg-indigo-700 transition shadow-xl hover:-translate-y-1 shadow-indigo-500/30">
             Start a Project <ArrowRight size={20} />
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;