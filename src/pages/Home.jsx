import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Code2, 
  FileSpreadsheet, 
  Zap, 
  MessageSquare, 
  Share2, 
  Layout, 
  Server, 
  Terminal, 
  Play,
  Atom, 
  Cloud 
} from 'lucide-react';
import Feedback from '../components/Feedback';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// --- HELPER: COUNTING ANIMATION ---
const Counter = ({ value, suffix = "", prefix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
  
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-emerald-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Content */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp} 
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                System & Automation Architects
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Building the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                  Digital Nervous System
                </span>
                <br /> of Your Business.
              </h1>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From <strong>Google Apps Script</strong> automations to <strong>Large Scale Enterprise Systems</strong>. 
                We engineer custom software, manage social media with bots, and build high-performance portfolios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link to="/contact" className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group text-sm">
                  Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2 text-sm">
                  <Code2 size={18} className="text-slate-400" /> View Matrix
                </Link>
              </div>

              <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Powering Next-Gen Apps:
                </span>
                <div className="flex items-center gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2">
                    <Cloud size={20} className="text-blue-500" /> <span className="text-sm font-bold text-slate-300">Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Atom size={20} className="text-cyan-400" /> <span className="text-sm font-bold text-slate-300">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server size={20} className="text-orange-500" /> <span className="text-sm font-bold text-slate-300">AWS</span>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* RIGHT SIDE: Visual/Code Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-emerald-500 blur-[60px] opacity-20 -z-10"></div>
              
              <div className="relative bg-slate-950 rounded-xl border border-slate-800 shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-1.5 mb-4 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-slate-500 font-mono">automation.ts</div>
                </div>

                <div className="font-mono text-xs leading-relaxed">
                  <div className="text-slate-500">// Initialize Enterprise System</div>
                  <div className="text-purple-400">import</div> <span className="text-white">{`{ AutoScale }`}</span> <div className="text-purple-400 inline">from</div> <span className="text-green-400">'@devscript/core'</span>;
                  <br /><br />
                  <div className="text-slate-500">// Config Social Bots & Google Sheets</div>
                  <div className="text-blue-400">const</div> <span className="text-yellow-300">workflow</span> = <span className="text-blue-400">await</span> <span className="text-yellow-300">System</span>.<span className="text-blue-300">init</span>({`{`}<br/>
                  &nbsp;&nbsp;<span className="text-white">socialMedia:</span> <span className="text-red-400">true</span>,<br/>
                  &nbsp;&nbsp;<span className="text-white">googleSync:</span> <span className="text-red-400">true</span>,<br/>
                  &nbsp;&nbsp;<span className="text-white">scale:</span> <span className="text-green-400">'enterprise'</span><br/>
                  {`}`});
                  <br /><br />
                  <div className="text-slate-500">// Execute Optimization</div>
                  <span className="text-yellow-300">workflow</span>.<span className="text-blue-300">optimize</span>();
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 animate-bounce hover:pause scale-90">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Status</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">System Optimized</div>
                  </div>
                </div>

                <div className="absolute top-1/2 right-8 bg-indigo-600 p-3 rounded-full shadow-lg shadow-indigo-500/50 text-white animate-pulse">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC STATS BANNER */}
      <section className="py-12 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-slate-800">
            <div className="flex flex-col items-center justify-center text-center group">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                  <Counter value={99.9} suffix="%" decimals={1} />
                </div>
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">System Uptime</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                 <Counter value={1.5} suffix="M+" decimals={1} />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Automated Tasks</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:text-purple-400 transition-colors">
                 <Counter value={500} prefix="$" suffix="k+" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Client Costs Saved</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 group-hover:text-blue-400 transition-colors">
                 <Counter value={100} prefix="+" suffix="%" />
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Productivity Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE / BENTO GRID (FIXED) */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Expertise</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Four pillars of modern digital business.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-2 transition-all">
              See all <ArrowRight size={16}/>
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            
            {/* Box 1: Automation (Span 2) */}
            <Link to="/services/automation" className="contents">
              <motion.div 
                variants={fadeInUp} 
                className="md:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute right-0 top-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileSpreadsheet size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg"><FileSpreadsheet size={24}/></div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Automation & Scripting</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg text-lg">
                    We turn spreadsheets into software. Automated invoicing, email bots, inventory trackers, and custom sidebars.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Gmail Bots', 'PDF Gen', 'Drive Org'].map(tag => (
                      <span key={tag} className="text-xs font-bold px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg border border-green-100 dark:border-green-800">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Box 2: Social */}
            <Link to="/services/social" className="contents">
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-lg"><Share2 size={24}/></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Social Tech</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Grow faster with posting bots, analytics scrapers, and automated content scheduling.
                </p>
                <div className="text-pink-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={16}/></div>
              </motion.div>
            </Link>

            {/* Box 3: Web */}
            <Link to="/services/web" className="contents">
              <motion.div variants={fadeInUp} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
                 <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg"><Layout size={24}/></div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web & Design</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  High-end personal portfolio sites and corporate websites built with React for speed.
                </p>
                <div className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={16}/></div>
              </motion.div>
            </Link>

            {/* Box 4: Enterprise (Span 2) - FIXED */}
            <Link to="/services/enterprise" className="contents">
              <motion.div 
                variants={fadeInUp} 
                className="md:col-span-2 bg-slate-900 dark:bg-indigo-950 p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden cursor-pointer group hover:shadow-2xl transition-all"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative z-10 flex-1">
                   <div className="flex items-center gap-2 mb-2 text-indigo-300">
                      <Server size={20} /> <span className="text-xs font-bold uppercase tracking-wider">Enterprise Grade</span>
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Large Scale Systems</h3>
                   <p className="text-slate-300 mb-4 max-w-lg">
                     Need to handle millions of requests? We architect scalable cloud solutions on AWS and Google Cloud.
                   </p>
                   {/* Tech Badges */}
                   <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'Docker', 'Redis', 'AWS'].map((tech) => (
                      <span key={tech} className="text-[10px] font-mono bg-white/10 text-indigo-200 border border-white/5 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                   </div>
                 </div>
                 <div className="relative z-10 shrink-0">
                   <span className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition flex items-center gap-2">
                     Consult Architecture <ArrowRight size={18}/>
                   </span>
                 </div>
              </motion.div>
            </Link>

          </motion.div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-slate-500 dark:text-slate-400">Streamlined for speed and reliability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Audit & Strategy", desc: "We analyze your workflow or architecture requirements.", icon: MessageSquare },
              { title: "Development", desc: "Agile coding sprints with regular updates and testing.", icon: Code },
              { title: "Deployment", desc: "Seamless launch with training and documentation.", icon: Zap },
            ].map((step, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl">
                <div className="w-14 h-14 mx-auto bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mb-6 shadow-md text-indigo-600 ring-4 ring-indigo-50 dark:ring-slate-800">
                   <step.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEEDBACK */}
      <Feedback />

      {/* 6. CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Scale?</h2>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">
              From a simple Google Script to a complex Enterprise System. We have the engineering team to build it right.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition transform hover:scale-105 shadow-xl">
              Get a Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;