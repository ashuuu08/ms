import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Linkedin, Github, Twitter, CheckCircle2, Loader2, ArrowRight, AlertCircle } from 'lucide-react';

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

    // 1. Create FormData from the event
    const formPayload = new FormData(e.target);
    
    // 2. Append your Web3Forms Access Key
    formPayload.append("access_key", "cf30a0de-ccdd-4770-9a70-761e8a001a7f");

    try {
      // 3. Send Request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        // Optional: Clear form
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12 px-4 flex items-center justify-center font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full relative z-10"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200 dark:border-slate-800">
          
          {/* LEFT SIDE: Info & Process */}
          <div className="lg:w-5/12 relative bg-indigo-600 dark:bg-indigo-950 p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Let's build something great.</h2>
              <p className="text-indigo-100 mb-8 text-base leading-relaxed">
                Ready to automate your workflow or scale your platform? We are ready to help.
              </p>

              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-6">How it works</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Discovery Call", desc: "We analyze your current workflow." },
                    { title: "Strategy & Quote", desc: "You get a fixed roadmap & price." },
                    { title: "Development", desc: "We build, test, and deploy." }
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-white/20 p-1 rounded-full">
                        <CheckCircle2 className="text-white h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{step.title}</h4>
                        <p className="text-xs text-indigo-200 mt-0.5">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 space-y-6 mt-8">
              <a href="mailto:hello@devscript.com" className="flex items-center gap-3 text-sm hover:text-white/80 transition group">
                <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition"><Mail size={18} /></div>
                <span className="font-medium">hello@devscript.com</span>
              </a>
              <div className="flex gap-3 pt-6 border-t border-white/10">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-white/5 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="lg:w-7/12 bg-white dark:bg-slate-900 p-8 md:p-12 relative">
            
            <AnimatePresence mode='wait'>
              {formStatus === 'success' ? (
                // SUCCESS STATE
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto mb-8">
                    Thanks! We'll be in touch shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="text-indigo-600 font-bold hover:underline"
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
                  className="space-y-6"
                >
                  {/* HIDDEN INPUT FOR CUSTOM PROJECT TYPE */}
                  <input type="hidden" name="project_type" value={formData.projectType} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        type="text" 
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email" 
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">I'm interested in...</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['Automation', 'Web Dev', 'Mobile', 'Enterprise'].map((type) => (
                        <div key={type} onClick={() => handleRadioChange(type)} className={`cursor-pointer text-center py-3 px-2 rounded-xl border text-xs font-bold transition-all duration-200 ${
                          formData.projectType === type 
                            ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-indigo-500' 
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700'
                        }`}>
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Project Details</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4" 
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none" 
                      placeholder="Tell us a bit about your goals, timeline, and budget..."
                    ></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 text-sm rounded-lg flex items-center gap-2">
                       <AlertCircle size={16} /> Something went wrong. Please try again later.
                    </div>
                  )}

                  <button 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm transform active:scale-[0.98]"
                  >
                    {formStatus === 'submitting' ? (
                      <>Sending... <Loader2 className="animate-spin" size={18}/></>
                    ) : (
                      <>Send Message <ArrowRight size={18} /></>
                    )}
                  </button>
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