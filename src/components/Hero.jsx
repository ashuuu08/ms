import React from 'react';
import { ArrowRight, Terminal, CheckCircle2, Play, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* 1. Optimized Background (Lighter weight) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Content & Copy */}
          <div className="text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              System & Automation Architects
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                Digital Nervous System
              </span>
              <br /> of Your Business.
            </h1>

            {/* Description (Updated with new services) */}
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From <strong>Google Apps Script</strong> automations to <strong>Large Scale Enterprise Systems</strong>. 
              We engineer custom software, manage social media with bots, and build high-performance portfolios.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group">
                Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold hover:bg-slate-700 transition flex items-center justify-center gap-2">
                <Code2 size={18} className="text-slate-400" /> View Code
              </Link>
            </div>

            {/* Mini Social Proof */}
            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 justify-center lg:justify-start">
              <span>Trusted by 50+ Innovators:</span>
              <div className="flex gap-4 grayscale opacity-50">
                 <span className="font-bold">GoogleCloud</span>
                 <span className="font-bold">React</span>
                 <span className="font-bold">AWS</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Visual/Code Mockup */}
          <div className="relative hidden lg:block perspective-1000">
            {/* Floating Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-emerald-500 blur-[80px] opacity-20 -z-10"></div>
            
            {/* The Code Window Card */}
            <div className="relative bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto text-xs text-slate-500 font-mono">automation.js</div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-sm leading-relaxed">
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

              {/* Floating Success Card (Animation) */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4 animate-bounce hover:pause">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Status</div>
                  <div className="font-bold text-slate-900 dark:text-white">System Optimized</div>
                </div>
              </div>

              {/* Floating Run Button */}
              <div className="absolute top-1/2 right-8 bg-indigo-600 p-3 rounded-full shadow-lg shadow-indigo-500/50 text-white animate-pulse">
                <Play size={20} fill="currentColor" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;