import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSpreadsheet, Globe, Server, Share2, Layout, Cpu, ShieldCheck, 
  BarChart3, ArrowRight, Terminal, Bot, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 min-h-screen pt-28 pb-20 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - More Welcoming */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Services</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to build, automate, and scale your digital presence.
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

              {/* Bottom CTA (Visible on Mobile) */}
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

               {/* Bottom CTA */}
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
                 <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Social Growth</h2>
                    <Share2 className="text-pink-500" />
                 </div>
                 <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                   Grow your audience automatically using smart bots and analytics tools.
                 </p>
               </div>

               {/* Bottom CTA */}
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
                  <div className="flex justify-between items-center mb-4">
                     <h2 className="text-xl font-bold">AI Solutions</h2>
                     <Bot className="text-purple-400" />
                  </div>
                  <p className="text-sm text-slate-300 mb-6">
                    Integrate ChatGPT into your business for support and content generation.
                  </p>
               </div>

               {/* Bottom CTA */}
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

               {/* Bottom CTA */}
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
                  <div className="flex items-center gap-2 mb-3">
                     <ShieldCheck className="text-emerald-400" size={24} />
                     <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Enterprise</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Large Scale Infrastructure</h2>
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