import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap, Terminal, Globe, Cpu, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. DYNAMIC COUNTER HELPER ---
const Counter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
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
        ref.current.textContent = prefix + Math.floor(latest) + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    { 
      title: "Google Certified Experts", 
      desc: "Deep expertise in AppScript, Sheets, and Cloud API ecosystems.",
      icon: Award,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    { 
      title: "Tailored Architecture", 
      desc: "No cookie-cutter code. We engineer specific workflows for your unique problems.",
      icon: Terminal,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    },
    { 
      title: "Long-term Reliability", 
      desc: "We build systems that last, with ongoing support and 99.9% uptime monitoring.",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10"
    }
  ];

  const techStack = [
    { name: "React / Vite", icon: Globe },
    { name: "Google AppScript", icon: FileSpreadsheetIcon }, // Custom icon below
    { name: "Node.js", icon: Terminal },
    { name: "AWS / Cloud", icon: Cpu },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-10 translate-x-1/3 -translate-y-1/4">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-slate-200 dark:text-slate-800" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#dots)"></rect></svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100 dark:border-indigo-800">
              Est. 2023
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Bridging the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Business & Code.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              DevScript Solutions started with a rebellious mission: <strong className="text-slate-900 dark:text-white">To kill manual data entry.</strong>
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              What began as automating simple Google Sheets has evolved into a powerhouse agency building <strong>Enterprise-grade Systems</strong> and <strong>Social Media Bots</strong>. We don't just write code; we engineer time.
            </p>

            {/* DYNAMIC STATS STRIP */}
            <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 dark:border-slate-800 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  <Counter value={3} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Years Exp</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  <Counter value={150} suffix="+" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">Delivery Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-600 blur-[80px] opacity-20 rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                 alt="Team working" 
                 className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
               />
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Team Size</div>
                    <div className="font-bold text-slate-900 dark:text-white">10+ Engineers</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Evolution</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">From One Script to Large Scale Systems</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
                In 2023, we noticed a problem. Small businesses were running on chaos—spreadsheets everywhere, missed emails, and manual data entry. We wrote our first script to automate an invoice. 
                <br /><br />
                Today, we don't just fix spreadsheets. We build <strong>Full-Stack Web Applications</strong>, <strong>Social Media Automation Bots</strong>, and <strong>Cloud Architectures</strong> for companies scaling from $0 to $10M.
            </p>
            
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {techStack.map((tech, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <tech.icon className="h-8 w-8 text-slate-400 mb-3" />
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- VALUES SECTION --- */}
      <div className="bg-white dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Why Companies Trust Us</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">We don't just write code; we solve business problems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CULTURE / CTA --- */}
      <div className="py-20 border-t border-slate-100 dark:border-slate-800">
         <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
             <div>
                 <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                     <Coffee className="text-indigo-500" /> Built by Developers, For Business
                 </h2>
                 <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                     We are a remote-first team of engineers, designers, and automation geeks. We believe in clean code, fast communication, and results that you can measure.
                 </p>
             </div>
             <Link to="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 transition flex items-center gap-2">
                 Join our Client List <ArrowRight size={18}/>
             </Link>
         </div>
      </div>

    </div>
  );
};

// Helper Icon for Sheet
const FileSpreadsheetIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>
)

export default About;