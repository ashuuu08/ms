import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Linkedin, Github, Twitter, CheckCircle2, Loader2, ArrowRight, AlertCircle, DollarSign, Clock, Shield, Phone } from 'lucide-react';
import AntiGravityBackground from '../components/AntiGravityBackground';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Dev',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (type) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formPayload = new FormData(e.target);
    formPayload.append("access_key", "cf30a0de-ccdd-4770-9a70-761e8a001a7f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'Web Dev', message: '' });
      } else {
        console.error("Error:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 py-8 px-4 flex items-center justify-center font-sans">

      {/* Background Decor - Reduced */}
      <AntiGravityBackground />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full relative z-10"
      >
        {/* Header Section - New Professional Introduction */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Custom Solution</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Every project is unique. Share your requirements and we'll create a tailored proposal with transparent pricing that fits your budget and timeline.
          </p>
        </div>

        {/* Why Contact Us Section - Compact */}
        <div className="grid md:grid-cols-3 gap-3 mb-6">
          <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <DollarSign size={20} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Transparent Pricing</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">No hidden fees or surprises</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Clock size={20} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Quick Response</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">Reply within 24 hours</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield size={20} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white mb-1">Free Consultation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">No commitment required</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-200 dark:border-slate-800">

          {/* LEFT SIDE: Info & Process - More Compact */}
          <div className="lg:w-5/12 relative bg-indigo-600 dark:bg-indigo-950 p-6 md:p-8 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold mb-3 tracking-tight">Let's build something great.</h2>
              <p className="text-indigo-100 mb-6 text-sm leading-relaxed">
                Ready to automate your workflow or scale your platform? We provide custom solutions with pricing tailored to your specific needs.
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4">How it works</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Discovery Call", desc: "We analyze your workflow & requirements." },
                    { title: "Custom Proposal", desc: "Get a detailed quote with timeline & pricing." },
                    { title: "Development", desc: "We build, test, and deploy your solution." }
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-0.5 bg-white/20 p-1 rounded-full">
                        <CheckCircle2 className="text-white h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{step.title}</h4>
                        <p className="text-xs text-indigo-200 mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Philosophy */}
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Our Pricing Philosophy</h3>
                <p className="text-xs text-indigo-100 leading-relaxed">
                  We believe in fair, transparent pricing. Every quote is customized based on project scope, complexity, and your budget. No one-size-fits-all packages.
                </p>
              </div>
            </div>

            <div className="relative z-10 space-y-4 mt-6">
              <a href="tel:+919691207533" className="flex items-center gap-2.5 text-sm hover:text-white/80 transition group">
                <div className="w-9 h-9 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition"><Phone size={16} /></div>
                <span className="font-medium text-sm">+91 9691207533</span>
              </a>
              <a href="https://wa.me/917697706427" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm hover:text-white/80 transition group">
                <div className="w-9 h-9 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition"><MessageSquare size={16} /></div>
                <span className="font-medium text-sm">+91 76977 06427</span>
              </a>
              <div className="flex gap-2.5 pt-4 border-t border-white/10">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    key={i} href="#"
                    className="p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form - Compact */}
          <div className="lg:w-7/12 bg-white dark:bg-slate-900 p-6 md:p-8 relative">

            <AnimatePresence mode='wait'>
              {formStatus === 'success' ? (
                // SUCCESS STATE
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mx-auto mb-6">
                    Thanks! We'll review your requirements and get back to you within 24 hours with a custom proposal.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-indigo-600 font-bold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                // FORM STATE
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* HIDDEN INPUTS */}
                  <input type="hidden" name="project_type" value={formData.projectType} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Full Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text"
                        className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        placeholder="Ashish Rathour"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        placeholder="ashish@ashbit.in"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">I'm interested in...</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Automation', 'Web Dev', 'Mobile', 'Enterprise'].map((type) => (
                        <div key={type} onClick={() => handleRadioChange(type)} className={`cursor-pointer text-center py-2.5 px-2 rounded-lg border text-xs font-bold transition-all duration-200 ${formData.projectType === type
                          ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-indigo-500'
                          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700'
                          }`}>
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>



                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Project Details</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-3 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your goals, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle size={14} /> Something went wrong. Please try again later.
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm"
                  >
                    {formStatus === 'submitting' ? (
                      <>Sending... <Loader2 className="animate-spin" size={16} /></>
                    ) : (
                      <>Get Custom Quote <ArrowRight size={16} /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;