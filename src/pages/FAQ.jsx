import React, { useState } from 'react';
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
                    answer: 'Simply reach out through our contact page or book a call. We\'ll schedule an initial consultation to understand your needs and provide a custom proposal for your project.'
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

                {/* Contact CTA */}
                <div className="mt-16 text-center p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Our team is here to help. Get in touch with us for personalized assistance.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </div>
    );
};

export default FAQ;
