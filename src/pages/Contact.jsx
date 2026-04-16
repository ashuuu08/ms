import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, Send, Linkedin, Github, Twitter,
  CheckCircle2, Loader2, ArrowRight, AlertCircle,
  DollarSign, Clock, Shield, Phone, Mail, MapPin,
  Zap, Code2, Bot, Globe, Sparkles, Star
} from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
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
        setFormData({ name: '', email: '', budget: '', projectType: 'Web Dev', message: '' });
      } else {
        console.error("Error:", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormStatus('error');
    }
  };

  const PROJECT_TYPES = [
    { id: 'Web Dev', label: 'Web App', icon: Code2 },
    { id: 'Mobile', label: 'Mobile', icon: Globe },
    { id: 'Automation', label: 'Automation', icon: Zap },
    { id: 'AI / Bot', label: 'AI / Bot', icon: Bot },
    { id: 'Enterprise', label: 'Enterprise', icon: Shield },
    { id: 'Other', label: 'Other', icon: Sparkles },
  ];

  const CONTACT_INFO = [
    { icon: Phone, label: 'Call Us', value: '+91 9691207533', href: 'tel:+919691207533' },
    { icon: MessageSquare, label: 'WhatsApp', value: '+91 76977 06427', href: 'https://wa.me/917697706427' },
    { icon: Mail, label: 'Email', value: 'support@ashbit.in', href: 'mailto:support@ashbit.in' },
    { icon: MapPin, label: 'Location', value: 'Anuppur, Madhya Pradesh, India', href: null },
  ];

  const TRUST_BADGES = [
    { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden fees or surprises' },
    { icon: Clock, title: '24h Response', desc: 'We reply within one business day' },
    { icon: Shield, title: 'Free Consultation', desc: 'No commitment required' },
    { icon: Star, title: '98% Satisfaction', desc: 'Based on final IP delivery' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' } })
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans overflow-x-hidden">
      <SEO
        title="Contact Us - Let's Start Your Project"
        description="Ready to scale? Connect with AshbitSoft for a free consultation on custom software, automation, or digital marketing."
        ogUrl="/contact"
      />

      {/* ━━━━ HERO SECTION ━━━━ */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50">
              <Sparkles size={12} className="animate-pulse" />
              Get a Free Consultation
            </div>
          </motion.div>

          <motion.h1
            variants={fadeIn} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-5 leading-[1.08] tracking-tight"
          >
            Let's Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Something Great
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn} initial="hidden" animate="visible" custom={2}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            Share your requirements, get a tailored proposal with transparent pricing within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* ━━━━ TRUST BADGES ━━━━ */}
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i} custom={i} variants={fadeIn} initial="hidden" animate="visible"
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 flex items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{badge.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{badge.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ━━━━ MAIN PANEL ━━━━ */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn} initial="hidden" animate="visible" custom={3}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/5 dark:shadow-none overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row"
          >

            {/* ── LEFT PANEL ── */}
            <div className="lg:w-5/12 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 p-8 md:p-10 text-white flex flex-col relative overflow-hidden">

              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/5 rounded-full" />

              <div className="relative z-10 flex-1">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Start a Conversation</h2>
                <p className="text-indigo-200 text-sm leading-relaxed mb-8">
                  Every great product starts with a conversation. Tell us what you need and we'll engineer the perfect solution.
                </p>

                {/* How it works */}
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 mb-4">How it works</p>
                  {[
                    { step: '01', title: 'Discovery Call', desc: 'We analyze your workflow & requirements.' },
                    { step: '02', title: 'Custom Proposal', desc: 'Detailed quote with timeline and transparent pricing.' },
                    { step: '03', title: 'Build & Launch', desc: 'We develop, test, and deploy your solution.' },
                  ].map((item, i) => (
                    <motion.div
                      key={i} initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-4 mb-5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0 text-xs font-black">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white">{item.title}</p>
                        <p className="text-xs text-indigo-200 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {CONTACT_INFO.map((info, i) => {
                    const Icon = info.icon;
                    const inner = (
                      <div className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-[9px] text-indigo-300 uppercase tracking-widest font-bold">{info.label}</p>
                          <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{info.value}</p>
                        </div>
                      </div>
                    );
                    return info.href
                      ? <a key={i} href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">{inner}</a>
                      : <div key={i}>{inner}</div>;
                  })}
                </div>
              </div>

              {/* Social links */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex gap-3">
                {[Linkedin, Github, Twitter].map((Icon, i) => (
                  <motion.a
                    key={i} href="#" whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── RIGHT PANEL: FORM ── */}
            <div className="lg:w-7/12 p-8 md:p-10 bg-white dark:bg-slate-900">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (

                  // SUCCESS STATE
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={38} />
                    </motion.div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Message Sent! 🎉</h3>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-8 text-sm leading-relaxed">
                      Thanks! We'll review your requirements and get back to you within 24 hours with a custom proposal.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setFormStatus('idle')}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-colors"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>

                ) : (

                  // FORM STATE
                  <motion.form
                    key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} className="space-y-6"
                  >
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Send a Message</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Fill in the details below — we'll get back to you fast.</p>
                    </div>

                    <input type="hidden" name="project_type" value={formData.projectType} />

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Ashish Rathour', value: formData.name },
                        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'ashish@ashbit.in', value: formData.email },
                      ].map((field) => (
                        <div key={field.name}>
                          <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-1.5">
                            {field.label}
                          </label>
                          <input
                            required name={field.name} type={field.type}
                            value={field.value} onChange={handleInputChange}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-2">
                        I need help with...
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {PROJECT_TYPES.map(({ id, label, icon: Icon }) => (
                          <button
                            key={id} type="button" onClick={() => handleRadioChange(id)}
                            className={`flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border text-[10px] font-bold uppercase tracking-wide transition-all duration-200 ${formData.projectType === id
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400'
                            }`}
                          >
                            <Icon size={16} />
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget + Message */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-1.5">
                          Budget Range (Optional)
                        </label>
                        <select
                          name="budget" value={formData.budget} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
                        >
                          <option value="">Select budget...</option>
                          <option>Under ₹25,000</option>
                          <option>₹25,000 – ₹75,000</option>
                          <option>₹75,000 – ₹2,00,000</option>
                          <option>₹2,00,000 – ₹5,00,000</option>
                          <option>₹5,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em] mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        required name="message" value={formData.message} onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your goals, timeline, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-xl border border-red-200 dark:border-red-800/50">
                        <AlertCircle size={16} /> Something went wrong. Please try again later.
                      </div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(99,102,241,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {formStatus === 'submitting' ? (
                        <><Loader2 className="animate-spin" size={18} /> Sending your message...</>
                      ) : (
                        <>Get My Free Quote <ArrowRight size={18} /></>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-400 dark:text-slate-600">
                      🔒 Your data is safe with us. We never share your information.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;