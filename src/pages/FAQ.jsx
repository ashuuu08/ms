import React, { useState } from 'react';
import SEO from '../components/SEO';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AntiGravityBackground from '../components/AntiGravityBackground';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-6 px-6 text-left focus:outline-none group"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}>
                    {question}
                </span>
                <ChevronDown
                    className={`text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''}`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqCategories = [
        {
            title: 'General',
            faqs: [
                {
                    question: 'What services does AshbitSoft offer?',
                    answer: 'We provide comprehensive digital solutions including web development, mobile app development, cloud services, custom software development, and IT consulting services tailored to your business needs.'
                },
                {
                    question: 'How can I get started with AshbitSoft?',
                    answer: 'Simply reach out through our contact page or click "Let\'s Talk". We\'ll schedule an initial consultation to understand your needs and provide a custom proposal for your project.'
                },
                {
                    question: 'Do you work with startups or only established companies?',
                    answer: 'We work with businesses of all sizes, from startups to enterprise organizations. We tailor our approach and solutions to match your stage of growth and specific requirements.'
                },
            ]
        },
        {
            title: 'Pricing & Contracts',
            faqs: [
                {
                    question: 'How do you price your services?',
                    answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent quotes after understanding your requirements. We also offer flexible payment terms for long-term engagements.'
                },
                {
                    question: 'Do you offer maintenance and support?',
                    answer: 'Yes! We provide ongoing maintenance, support, and enhancement services. All projects include a warranty period, and we offer various support packages to keep your systems running smoothly.'
                },
                {
                    question: 'What is your typical project timeline?',
                    answer: 'Timelines vary based on project complexity. Small projects may take 2-4 weeks, while larger applications can take 3-6 months. We provide detailed timelines during the proposal phase.'
                },
            ]
        },
        {
            title: 'Technical',
            faqs: [
                {
                    question: 'What technologies do you specialize in?',
                    answer: 'We specialize in modern web technologies including React, Node.js, Next.js, major cloud platforms (AWS, Azure), and mobile development. We choose the best technology stack for each project.'
                },
                {
                    question: 'Can you integrate with our existing systems?',
                    answer: 'Absolutely! We have extensive experience integrating with various third-party services, APIs, and legacy systems. We ensure seamless connectivity between your existing tools and new solutions.'
                },
                {
                    question: 'Do you provide source code ownership?',
                    answer: 'Yes, you receive 100% ownership of all source code and intellectual property created for your project. We believe in complete transparency and your full control over your digital assets.'
                },
            ]
        },
    ];

    return (
        <div className="min-h-screen w-full max-w-full pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden font-sans">
            <SEO 
                title="Frequently Asked Questions - Support & Info" 
                description="Get answers to common questions about AshbitSoft's services, pricing, project timelines, and technical expertise."
                ogUrl="/company/faq"
            />
            <AntiGravityBackground />
            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                        <HelpCircle size={16} />
                        <span>Frequently Asked Questions</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                        How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Help You?</span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Find answers to common questions about our services, pricing, and processes.
                    </p>
                </div>

                {/* FAQ Categories */}
                {faqCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            {category.title}
                        </h2>
                        <div className="space-y-4">
                            {category.faqs.map((faq, faqIndex) => (
                                <FaqItem
                                    key={faqIndex}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Quick Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 grid md:grid-cols-3 gap-8"
                >
                    {[
                        { value: "2-4 Weeks", label: "Average Project Start", icon: "🚀" },
                        { value: "100%", label: "Client Satisfaction", icon: "⭐" },
                        { value: "24/7", label: "Support Available", icon: "💬" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
                            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-800/50 text-center"
                        >
                            <div className="text-5xl mb-4">{stat.icon}</div>
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Our team is here to help. Reach out and we'll get back to you within 24 hours.
                    </p>
                    <a href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-xl"
                        >
                            Contact Us
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;
