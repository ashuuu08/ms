import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import logo from '../assets/logoo.png';
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [activeBot, setActiveBot] = useState('ashbit'); // ashbit, dev, support

    const agents = {
        ashbit: {
            name: "AshbitSoft AI",
            role: "Sales & Strategy",
            color: "from-[#349ec9] to-[#172a5f]",
            initial: "Hello! 👋 I'm Ashbit, your AI assistant. Before we start, may I know your name?"
        },
        dev: {
            name: "DevBot ⚡",
            role: "Tech Logic",
            color: "from-violet-600 to-fuchsia-600",
            initial: "System Online. ⚡ I'm DevBot. What's your name?"
        },
        support: {
            name: "Support Agent",
            role: "Customer Success",
            color: "from-emerald-500 to-teal-500",
            initial: "Hi there! 🛡️ I'm your Support Agent. May I have your name to assist you better?"
        }
    };

    const [messages, setMessages] = useState([
        { id: 1, text: agents.ashbit.initial, sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [conversationState, setConversationState] = useState('ASK_INITIAL_NAME');
    const [userData, setUserData] = useState({
        Name: '',
        Mobile: '',
        Email: '',
        City: '',
        Need: ''
    });
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Google Sheets Submission
    const submitToGoogleSheet = async (data) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyAAwAsmmQJoyPZDUSmVaij7Zpkbyg2YPBxmNfYDNGg45G6hgwnym5keKe5WiSrJd8/exec';
        const formData = new FormData();
        formData.append('Name', data.Name);
        formData.append('Mobile', data.Mobile);
        formData.append('Email', data.Email);
        formData.append('City', data.City);
        formData.append('Need', data.Need);

        try {
            await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
            return true;
        } catch (error) {
            console.error('Error!', error.message);
            return false;
        }
    };

    // Switch Bot Function
    const switchBot = (botKey) => {
        setActiveBot(botKey);
        setMessages([{ id: Date.now(), text: agents[botKey].initial, sender: 'bot' }]);
        setConversationState('ASK_INITIAL_NAME');
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatContainerRef.current && !chatContainerRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add User Message
        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI Response & Action
        setTimeout(async () => {
            const lowerInput = input.toLowerCase();
            let botResponse = "";
            let nextState = conversationState;

            // --- DEV BOT LOGIC ---
            if (activeBot === 'dev') {
                if (lowerInput.includes('react') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
                    botResponse = "We run on a cutting-edge stack: React 18, Vite, TailwindCSS, and Node.js for scalable backends. ⚡";
                } else if (lowerInput.includes('api') || lowerInput.includes('backend')) {
                    botResponse = "Robust REST & GraphQL APIs tailored for high-concurrency environments. Need docs? 📄";
                } else if (lowerInput.includes('cloud') || lowerInput.includes('deploy') || lowerInput.includes('hosting')) {
                    botResponse = "We deploy on AWS, Azure, and GCP with auto-scaling, CI/CD pipelines, and 99.9% uptime SLA. ☁️";
                } else if (lowerInput.includes('database') || lowerInput.includes('db')) {
                    botResponse = "We work with PostgreSQL, MongoDB, Redis for caching, and Firebase for real-time apps. 🗄️";
                } else if (lowerInput.includes('mobile') || lowerInput.includes('app')) {
                    botResponse = "Cross-platform mobile apps using React Native and Flutter. Native performance, single codebase. 📱";
                } else if (lowerInput.includes('ai') || lowerInput.includes('ml') || lowerInput.includes('machine learning')) {
                    botResponse = "AI/ML integration using TensorFlow, PyTorch, OpenAI APIs, and custom LLM implementations. 🤖";
                } else if (lowerInput.includes('security') || lowerInput.includes('auth')) {
                    botResponse = "Enterprise-grade security: OAuth 2.0, JWT, encryption at rest/transit, GDPR compliant. 🔒";
                } else {
                    botResponse = "Acknowledged. I can detail our Tech Stack, API Architecture, Cloud Infrastructure, Databases, Mobile, AI/ML, or Security. What's your query?";
                }
            }
            // --- SUPPORT BOT LOGIC ---
            else if (activeBot === 'support') {
                if (lowerInput.includes('help') || lowerInput.includes('contact')) {
                    botResponse = "I'm here to help! 🛡️ You can email support@ashbit.in or reach us at +91-XXXXXXXXXX.";
                } else if (lowerInput.includes('bug') || lowerInput.includes('issue')) {
                    botResponse = "Sorry to hear that! Please report issues directly to our Quality Assurance team via the Contact form.";
                    navigate('/contact');
                } else if (lowerInput.includes('billing') || lowerInput.includes('payment') || lowerInput.includes('invoice')) {
                    botResponse = "For billing inquiries, please email billing@ashbit.in with your invoice number. 💳";
                } else if (lowerInput.includes('account') || lowerInput.includes('login') || lowerInput.includes('password')) {
                    botResponse = "Having account issues? Try resetting your password or contact support@ashbit.in for assistance. 👤";
                } else if (lowerInput.includes('refund') || lowerInput.includes('cancel')) {
                    botResponse = "For refunds or cancellations, please review our policy at /company/policy or contact support. 💰";
                } else if (lowerInput.includes('timeline') || lowerInput.includes('delivery') || lowerInput.includes('when')) {
                    botResponse = "Project timelines vary by scope. Typical MVP: 4-8 weeks. Enterprise: 3-6 months. Want a quote? ⏱️";
                } else {
                    botResponse = "Support Online. 🛡️ Ask me about Account, Billing, Issues, Refunds, or Project Timelines.";
                }
            }
            // --- ASHBIT (SALES) LOGIC ---
            else {
                // STATE MACHINE LOGIC
                // Handle initial name collection
                if (conversationState === 'ASK_INITIAL_NAME') {
                    setUserData(prev => ({ ...prev, Name: input }));
                    botResponse = `Nice to meet you, ${input}! 😊 How can I help you today? I can assist with Pricing, Services, or starting a new Project.`;
                    nextState = 'IDLE';
                }
                else if (conversationState === 'IDLE') {
                    if (lowerInput.includes('quote') || lowerInput.includes('build') || lowerInput.includes('hire') || lowerInput.includes('project')) {
                        botResponse = `Great! I'd love to help you build that, ${userData.Name || 'there'}! Before we start, may I collect some additional details? (Yes/No)`;
                        nextState = 'ASK_CONSENT';
                    }
                    else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                        botResponse = "I'm taking you to our Pricing page to see our packages. 🚀";
                        navigate('/pricing');
                    } else if (lowerInput.includes('contact')) {
                        botResponse = "Opening the Contact page for you now... 📞";
                        navigate('/contact');
                    } else if (lowerInput.includes('ashbit') || lowerInput.includes('company')) {
                        botResponse = "AshbitSoft is your partner in digital evolution. We engineer growth through software. Based in Anuppur, MP, serving clients globally. 🌍";
                    } else if (lowerInput.includes('startup') || lowerInput.includes('mvp')) {
                        botResponse = "Our Launchpad program helps startups build MVPs in 4-8 weeks. Fixed pricing, rapid delivery. Want details? 🚀";
                    } else if (lowerInput.includes('enterprise') || lowerInput.includes('large')) {
                        botResponse = "We serve enterprises with custom solutions, dedicated teams, and SLA guarantees. Let's discuss your needs. 🏢";
                    } else if (lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('projects')) {
                        botResponse = "We've built 50+ projects across SaaS, E-commerce, AI, and Mobile. Check our case studies at /solutions! 💼";
                    } else if (lowerInput.includes('team') || lowerInput.includes('developers')) {
                        botResponse = "Our team includes Full-Stack Developers, UI/UX Designers, DevOps Engineers, and AI Specialists. 👥";
                    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
                        botResponse = `Hello${userData.Name ? ' ' + userData.Name : ''}! Tell me what you're building, and I can guide you. 👋`;
                    } else {
                        botResponse = "I can help with Pricing, Services, Startups, Enterprises, or starting a new Project. What do you need?";
                    }
                }

                // --- CONSENT FLOW ---
                else if (conversationState === 'ASK_CONSENT') {
                    if (lowerInput.includes('yes') || lowerInput.includes('sure') || lowerInput.includes('ok') || lowerInput.includes('yeah')) {
                        botResponse = "Great! Let's start. What's your Name?";
                        nextState = 'ASK_NAME';
                    } else if (lowerInput.includes('no') || lowerInput.includes('nope') || lowerInput.includes('not')) {
                        botResponse = "No problem! Feel free to browse our website or ask me any questions. How can I help you today?";
                        nextState = 'IDLE';
                    } else {
                        botResponse = "Please reply with 'Yes' to proceed or 'No' if you'd prefer not to share details.";
                        nextState = 'ASK_CONSENT';
                    }
                }

                // --- CAPTURE FLOW ---
                else if (conversationState === 'ASK_NAME') {
                    setUserData(prev => ({ ...prev, Name: input }));
                    botResponse = `Nice to meet you, ${input}! Could you share your Mobile Number?`;
                    nextState = 'ASK_MOBILE';
                }
                else if (conversationState === 'ASK_MOBILE') {
                    if (input.match(/^\d{10}$/) || input.length > 6) {
                        setUserData(prev => ({ ...prev, Mobile: input }));
                        botResponse = "Thanks! And your Email Address?";
                        nextState = 'ASK_EMAIL';
                    } else {
                        botResponse = "Please enter a valid Mobile Number (at least 7 digits).";
                        nextState = 'ASK_MOBILE';
                    }
                }
                else if (conversationState === 'ASK_EMAIL') {
                    if (input.includes('@')) {
                        setUserData(prev => ({ ...prev, Email: input }));
                        botResponse = "Got it. Which City are you based in?";
                        nextState = 'ASK_CITY';
                    } else {
                        botResponse = "Please enter a valid email address.";
                        nextState = 'ASK_EMAIL';
                    }
                }
                else if (conversationState === 'ASK_CITY') {
                    setUserData(prev => ({ ...prev, City: input }));
                    botResponse = "Almost done! Finally, briefly tell me what you need (e.g., Website, App, AI)?";
                    nextState = 'ASK_NEED';
                }
                else if (conversationState === 'ASK_NEED') {
                    const finalData = { ...userData, Need: input };
                    setUserData(finalData);
                    botResponse = "Perfect! Saving your details... ⏳";

                    // Trigger Submission
                    await submitToGoogleSheet(finalData);

                    setTimeout(() => {
                        const successMsg = {
                            id: Date.now() + 2,
                            text: "✅ details received! Our team will contact you shortly. Redirecting you to our solutions...",
                            sender: 'bot'
                        };
                        setMessages(prev => [...prev, successMsg]);
                        setTimeout(() => navigate('/contact'), 2000);
                    }, 1500);

                    nextState = 'IDLE';
                }
            }

            setConversationState(nextState);

            const botMsg = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Draggable Container */}
            <motion.div
                ref={chatContainerRef}
                drag
                dragMomentum={false}
                className="fixed bottom-6 right-6 z-50 flex flex-col items-end cursor-grab active:cursor-grabbing"
            >
                {/* Floating Toggle Button & Tooltip Wrapper */}
                <div className="relative flex items-center gap-4">
                    {/* Tooltip */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-medium hidden md:block whitespace-nowrap mr-2"
                    >
                        Chat with us!
                        <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 border-r border-t border-slate-100 dark:border-slate-700"></div>
                    </motion.div>

                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, y: [0, -10, 0] }}
                        transition={{
                            scale: { duration: 0.5 },
                            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        className={`relative w-14 h-14 bg-gradient-to-r ${agents[activeBot].color} rounded-full flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 transition-all duration-500`}
                    >
                        {/* Notification Badge */}
                        {!isOpen && (
                            <div className="absolute -top-1 -right-1">
                                <span className="relative flex h-5 w-5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-[10px] items-center justify-center text-white font-bold border-2 border-white dark:border-slate-900">1</span>
                                </span>
                            </div>
                        )}

                        {isOpen ? <X className="text-white" /> : <img src={logo} alt="AshSoft" className="w-8 h-8 object-contain" />}
                    </motion.button>
                </div>

                {/* Chat Window - Attached to Button */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9, originY: 1, originX: 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden cursor-auto"
                            onPointerDownCapture={(e) => e.stopPropagation()}
                        >
                            {/* Dynamic Header */}
                            <div className={`p-4 bg-gradient-to-r ${agents[activeBot].color} transition-all duration-500 flex flex-col gap-3 shrink-0`}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md p-1">
                                        <img src={logo} alt="AshSoft" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-md tracking-tight leading-none">
                                            {agents[activeBot].name}
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                            <span className="text-xs text-blue-100 font-medium">{agents[activeBot].role}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Agent Switcher Tabs */}
                                <div className="flex p-1 bg-black/20 rounded-xl backdrop-blur-sm">
                                    {Object.keys(agents).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => switchBot(key)}
                                            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${activeBot === key
                                                ? 'bg-white text-slate-900 shadow-sm'
                                                : 'text-white/70 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            {key === 'ashbit' ? 'Sales' : key === 'dev' ? 'Dev' : 'Support'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${msg.sender === 'user' ? 'bg-indigo-100 dark:bg-indigo-900/30' : 'bg-white shadow-sm border border-slate-100 dark:border-slate-800'}`}>
                                            {msg.sender === 'user' ? <User size={14} className="text-indigo-600 dark:text-indigo-400" /> : <img src={logo} alt="Bot" className="w-full h-full object-contain p-1" />}
                                        </div>
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-indigo-600 text-white rounded-br-none'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex items-end gap-2">
                                        <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 overflow-hidden">
                                            <img src={logo} alt="Typing" className="w-full h-full object-contain p-1" />
                                        </div>
                                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 shrink-0">
                                <form onSubmit={handleSend} className="relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder={`Message ${agents[activeBot].name}...`}
                                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim()}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    >
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default ChatBot;
