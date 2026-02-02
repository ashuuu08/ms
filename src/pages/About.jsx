import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2, Award, Users, Zap, Terminal, Globe, Cpu, Coffee, ArrowRight,
  Search, PenTool, Rocket, ChevronDown, XCircle, Lock, MessageSquare, CreditCard, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. DYNAMIC COUNTER HELPER ---
const Counter = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = prefix + Math.floor(latest) + suffix;
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>0</span>;
};

// --- 2. FAQ COMPONENT ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="  bg-white dark:bg-slate-950 border-b  border-slate-200 dark:border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
          {question}
        </span>
        <ChevronDown
          className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    { name: "React / Vite", icon: Globe },
    { name: "Java / Spring", icon: Coffee },
    { name: "Python / AI", icon: Cpu },
    { name: "Node.js", icon: Terminal },
    { name: "AWS / Cloud", icon: CheckCircle2 },
  ];

  const processSteps = [
    { title: "Audit & Discovery", desc: "We dive deep into your current workflow to find bottlenecks.", icon: Search },
    { title: "Architect & Design", desc: "We map out the automation logic before writing a single line of code.", icon: PenTool },
    { title: "Build & Automate", desc: "Agile sprints to build your custom software or script.", icon: Terminal },
    { title: "Launch & Train", desc: "Seamless deployment with video training for your team.", icon: Rocket },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden font-sans">

      {/* --- HERO SECTION --- */}
      <div className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-10 translate-x-1/3 -translate-y-1/4">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" className="text-slate-200 dark:text-slate-800" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#dots)"></rect></svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
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
              What began as automating simple workflows has evolved into a powerhouse agency building <strong>Enterprise-grade Systems</strong> and <strong>Social Media Bots</strong>. We don't just write code; we engineer time.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 dark:border-slate-800 pt-8">
              {[
                { val: 3, label: "Years Exp" },
                { val: 150, label: "Projects" },
                { val: 100, label: "Delivery Rate", sfx: "%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    <Counter value={stat.val} suffix={stat.sfx ? stat.sfx : "+"} />
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-600 blur-[80px] opacity-20 rounded-full"></div>
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 transform rotate-2 transition-transform duration-500"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600"><Users size={20} /></div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Team Size</div>
                  <div className="font-bold text-slate-900 dark:text-white">10+ Engineers</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- COMPANY TIMELINE --- */}
      <div className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Journey</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Milestones That Shaped Us</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>

            {/* Timeline Items */}
            {[
              {
                year: '2023',
                title: 'The Beginning',
                description: 'Started with a simple mission: automate repetitive tasks for small businesses. First project was a workflow automation that saved 30 hours per week.',
                side: 'left'
              },
              {
                year: '2023 Q3',
                title: 'First Enterprise Client',
                description: 'Landed our first enterprise contract, building a custom CRM system that handled 10,000+ customer records with real-time synchronization.',
                side: 'right'
              },
              {
                year: '2024',
                title: 'Team Expansion',
                description: 'Grew from 2 founders to a team of 10+ engineers, designers, and consultants. Expanded service offerings to include mobile development and cloud architecture.',
                side: 'left'
              },
              {
                year: '2024 Q3',
                title: '100+ Projects Milestone',
                description: 'Completed our 100th project with a 98% client satisfaction rate. Established partnerships with leading cloud providers and technology platforms.',
                side: 'right'
              },
              {
                year: '2025',
                title: 'Innovation & Scale',
                description: 'Launched AI-powered automation solutions and expanded into international markets. Now serving clients across 15+ countries with 24/7 support.',
                side: 'left'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${item.side === 'left' ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'} md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950 z-10"></div>

                <div className={`bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all ${item.side === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-bold mb-3">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CORE VALUES --- */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Speed & Efficiency',
                description: 'We move fast without breaking things. Agile sprints, rapid prototyping, and quick iterations are in our DNA.',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: ShieldCheck,
                title: 'Quality First',
                description: 'Every project undergoes rigorous testing and code review. We deliver production-ready solutions, not prototypes.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Users,
                title: 'Client Partnership',
                description: 'We\'re not just vendors—we\'re partners in your success. Your wins are our wins, and we\'re invested in your growth.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Terminal,
                title: 'Technical Excellence',
                description: 'We stay ahead of the curve with continuous learning and adoption of cutting-edge technologies and best practices.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Transparency',
                description: 'No hidden fees, no surprises. Clear communication, honest timelines, and upfront pricing on every project.',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: Rocket,
                title: 'Innovation Mindset',
                description: 'We don\'t just follow trends—we create solutions that push boundaries and solve real business problems.',
                color: 'from-rose-500 to-red-500'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --- MISSION & VISION --- */}
      <div className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-indigo-100 dark:border-indigo-800/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  To empower businesses of all sizes with technology that drives growth, efficiency, and innovation.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We believe every business deserves access to enterprise-grade solutions without enterprise-level complexity or cost. Our mission is to democratize technology and make powerful automation, custom development, and digital transformation accessible to startups, SMEs, and enterprises alike.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-purple-100 dark:border-purple-800/30">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  To become the most trusted technology partner for businesses worldwide, known for delivering exceptional results.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We envision a future where every business, regardless of size or industry, can leverage cutting-edge technology to compete globally. We're building a world where manual processes are obsolete, data drives decisions, and technology amplifies human potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- OUR STORY SECTION --- */}
      <div className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-3">Our Evolution</h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">From One Script to Large Scale Systems</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
            In 2023, we noticed a problem. Small businesses were running on chaos—spreadsheets everywhere, missed emails, and manual data entry. We wrote our first script to automate an invoice. <br /><br />
            Today, we don't just fix spreadsheets. We build <strong>Full-Stack Web Applications</strong>, <strong>Social Media Automation Bots</strong>, and <strong>Cloud Architectures</strong> for companies scaling from $0 to $10M.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <tech.icon className="h-8 w-8 text-slate-400 mb-3" />
                <span className="font-semibold text-slate-700 dark:text-slate-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- THE BLUEPRINT (PROCESS) --- */}
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">The Blueprint</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">How we take you from chaos to clarity.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center md:text-left"
              >
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0 shadow-lg shadow-indigo-500/20">
                  <step.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- COMPARISON SECTION (Redesigned: Grid Cards) --- */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Not Just Another Dev Shop</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg">Why industry leaders choose us over freelancers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "Code Ownership",
                bad: "They hold it hostage",
                good: "100% Yours, Forever"
              },
              {
                icon: MessageSquare,
                title: "Communication",
                bad: "Slow Emails",
                good: "Direct Slack Access"
              },
              {
                icon: CreditCard,
                title: "Pricing Model",
                bad: "Hourly Padding",
                good: "Flat Project Fee"
              },
              {
                icon: ShieldCheck,
                title: "Post-Launch",
                bad: "They Disappear",
                good: "30-Day Guarantee"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.3)" }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-slate-600 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>

                {/* Comparison Lines */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    <XCircle size={16} className="text-red-400 shrink-0" />
                    <span className="line-through decoration-red-400/50">{item.bad}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-bold">
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                    <span>{item.good}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Questions</h2>
          </div>
          <div className="space-y-2">
            <FaqItem
              question="Do you work with non-technical founders?"
              answer="Absolutely. We speak business, not just binary. We'll explain the tech in plain English and focus on how it improves your bottom line."
            />
            <FaqItem
              question="Do you offer maintenance after launch?"
              answer="Yes. We offer a 30-day bug-fix guarantee on all projects. After that, we have flexible retainer packages to keep your systems running smoothly."
            />
            <FaqItem
              question="Can you integrate with my existing software?"
              answer="If it has an API, we can connect to it. We specialize in linking tools like Airtable, Slack, Shopify, Gmail, and custom databases together."
            />
            <FaqItem
              question="What is your typical timeline?"
              answer="Most automation scripts take 3-7 days. Full-scale web applications typically take 4-8 weeks depending on complexity."
            />
          </div>
        </div>
      </div>

      {/* --- FINAL CTA SECTION --- */}
      <div className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Scale?</h2>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">
              Stop letting manual tasks slow you down. Let's build a system that works as hard as you do.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition shadow-xl"
              >
                Get a Quote <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

// Helper Icon for Sheet
const FileSpreadsheetIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></svg>
)

export default About;