import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, CheckCircle2 } from 'lucide-react';
import logo from '../assets/logoo.png';
import { useNavigate } from 'react-router-dom';

const KNOWLEDGE_BASE = [
    { keys: ['who', 'what', 'company', 'about', 'ashbitsoft'], response: "AshbitSoft is an elite digital architecture firm founded in 2023. We specialize in engineering high-performance ecosystems through MERN development, AI-driven automation, and strategic digital growth. We have a 100% delivery rate across 50+ global projects, ranging from AI startups to enterprise systems." },
    { keys: ['location', 'where', 'based', 'address', 'anuppur'], response: "We are based in Anuppur, Madhya Pradesh, India, and serve clients worldwide with dedicated remote teams and global standards." },
    { keys: ['founder', 'team', 'who runs', 'people'], response: "Our team includes expert Full-Stack Developers, UI/UX Designers, DevOps Engineers, and AI Specialists. We are a group of passionate innovators dedicated to bridging the gap between business and code." },
    { keys: ['services', 'offer', 'do you do', 'expertise'], response: "We offer Custom Web Apps (MERN/Java), Mobile Apps (React Native), Workflow Automation, AI Integration, Cloud services (AWS/GCP), and Digital Marketing." },
    { keys: ['mern', 'react', 'node', 'mongo'], response: "We are experts in the MERN stack (MongoDB, Express, React, Node.js). We build scalable, secure, and fast web applications using these modern technologies." },
    { keys: ['java', 'spring', 'enterprise'], response: "For enterprise-grade systems, we use Java and Spring Boot. This is perfect for robust, high-transaction backend systems and microservices." },
    { keys: ['automation', 'spreadsheet', 'sheets', 'manual'], response: "We specialize in workflow automation. We build custom scripts for Google Sheets, Gmail, and other tools to save businesses 20-40 hours per week in manual work." },
    { keys: ['ai', 'openai', 'chatbot', 'machine learning', 'python'], response: "We integrate AI solutions using Python, OpenAI APIs, and custom LLM implementations to create smart chatbots and predictive analytics for your business." },
    { keys: ['pricing', 'cost', 'how much', 'quote', 'price'], response: "Our pricing is value-based and project-dependent. We offer custom quotes to ensure you only pay for what you need. We have packages ranging from 'Starter' (for MVPs) to 'Enterprise' solutions." },
    { keys: ['timeline', 'how long', 'fast', 'weeks', 'days'], response: "Typical MVPs take 4-8 weeks. Workflow automation scripts take 3-7 days. Larger enterprise systems can take 3-6 months depending on complexity." },
    { keys: ['maintenance', 'support', 'help', 'warranty'], response: "All projects include a 30-day bug-fix guarantee. We also offer flexible monthly retainer packages for ongoing support, updates, and optimization." },
    { keys: ['security', 'ssl', 'safe', 'data'], response: "We implement enterprise-grade security: SSL certificates, encryption at rest/transit, OAuth 2.0, and GDPR compliance." },
    { keys: ['cloud', 'aws', 'azure', 'supabase', 'hosting'], response: "We deploy on AWS, Azure, GCP, and Supabase. We provide serverless power with auto-scaling and 99.9% uptime guarantees." },
    { keys: ['seo', 'marketing', 'ppc', 'ads'], response: "Our digital marketing team provides SEO, SEM, PPC ads, and content strategy to help startups acquire customers and scale fast." },
    { keys: ['ownership', 'source code', 'intellectual property'], response: "You get 100% ownership of the source code and all intellectual property. We believe in complete transparency and your full control over your digital assets." },
    { keys: ['startup', 'mvp', 'small business'], response: "Our Launchpad program helps startups build MVPs in 4-8 weeks with fixed pricing and rapid delivery. We are the partner that powers your startup." },
    { keys: ['enterprise', 'large'], response: "We serve enterprises with dedicated teams, SLA guarantees, custom integrations, and robust architectures (Java/Spring Boot)." },
    { keys: ['guarantee', 'refund', 'money back'], response: "We offer a 30-day satisfaction guarantee. If you're not happy with our service quality, we'll work to make it right or follow our refund policy." },
    { keys: ['contact', 'email', 'phone', 'call'], response: "You can email us at support@ashbit.in or visit our Contact page to schedule a free consultation. Would you like me to take your details and have someone call you? (Yes/No)" },
    { keys: ['portfolio', 'work', 'projects'], response: "We've built 50+ major projects across SaaS, E-commerce, and AI. Check our Case Studies at ashbitsoft.in/solutions for details!" },
    { keys: ['e-commerce', 'shop', 'store'], response: "We build complete E-commerce solutions with payment gateways, inventory management, and customer dashboards." },
    { keys: ['integrations', 'api', 'connect'], response: "If it has an API, we can connect to it. We specialize in linking Airtable, Slack, Shopify, Gmail, and custom databases." },
    { keys: ['non-technical', 'business'], response: "We speak business, not just binary. We'll explain tech in plain English and focus on how it improves your bottom line." },
    { keys: ['audit', 'discovery'], response: "Our process starts with an Audit & Discovery session to identify your bottlenecks before we write a single line of code." },
    { keys: ['training', 'tutorials'], response: "Every launch includes video training for your team to ensure you get the most out of your new system." },
    { keys: ['process', 'how we work'], response: "Our Blueprint: 01 Discovery → 02 Strategy → 03 Development → 04 Launch & Support." },
    { keys: ['tech dna', 'history'], response: "We evolved from a 'one-script' garage operation in 2023 to a global agency building large-scale systems." },
    { keys: ['speed', 'agile'], response: "Agile sprints and rapid prototyping are in our DNA. We deliver production-ready code fast." },
    { keys: ['quality', 'testing'], response: "Every line of code undergoes rigorous testing and peer review to ensure it's production-ready." },
    { keys: ['cta', 'start', 'hire'], response: "Ready to scale? Click 'Start Your Project' or leave your details here and we'll reach out within 24 hours." },
    { keys: ['hi', 'hello', 'hey'], response: "Hello! 👋 I'm your Ashbit Support Assistant. How can I help you today? I can answer questions about our services, pricing, or help you start a project." },
    { keys: ['thanks', 'thank you'], response: "You're very welcome! 😊 Is there anything else I can help you with today?" },
    { keys: ['bye', 'goodbye'], response: "Goodbye! Have a great day! 👋" },
    { keys: ['experience', 'years'], response: "We have 3+ years of intensive experience in high-leverage automation and global software delivery." },
    { keys: ['clients', 'who uses'], response: "We work with startups, SMBs, and growing businesses — primarily in FinTech, HealthTech, E-commerce, and Logistics. We intentionally keep our client list small so every project gets our full attention." },
    { keys: ['mission', 'vision'], response: "Our mission is to democratize tech. We believe every business deserves enterprise-grade solutions without the complexity." },
    { keys: ['values'], response: "Our values: Speed, Quality, Partnership, Excellence, Transparency, and Innovation." },
    { keys: ['gdpr', 'privacy'], response: "We are 100% GDPR compliant. We take your data privacy and security very seriously with strict protocols." },
    { keys: ['cookies'], response: "We use performance cookies to ensure we provide the best experience on our website." },
    { keys: ['consulting'], response: "We provide strategic Tech Consulting to help you choose the right stack and roadmap for digital transformation." },
    { keys: ['devops', 'cicd'], response: "We implement modern DevOps practices with Infrastructure as Code and CI/CD pipelines for zero-downtime deployments." },
    { keys: ['react native', 'flutter'], response: "We use React Native and Flutter for cross-platform mobile apps with native performance." },
    { keys: ['backend', 'database'], response: "We work with PostgreSQL, MongoDB, Redis, and various SQL/NoSQL databases tailored to your data needs." },
    { keys: ['api', 'rest', 'graphql'], response: "We build secure RESTful and GraphQL APIs for seamless system connectivity." },
    { keys: ['audit', 'free consulting'], response: "Yes, we offer an initial consultation for free! Let's discuss your project goals today." },
    { keys: ['payment', 'terms'], response: "Flexible payment terms are available for long-term engagements and enterprise projects." },
    { keys: ['sla', 'uptime'], response: "We provide SLA guarantees (99.9% uptime) for all our hosted enterprise applications." },
    { keys: ['custom', 'tailored'], response: "Nothing we do is one-size-fits-all. Everything is custom-built for your specific business logic." },
    { keys: ['scalability'], response: "Scale from 10k to 1M users seamlessly. We architect for high concurrency from day one." },
    { keys: ['roi', 'results'], response: "Our focus is ROI. We engineer time and growth through automation and scalable tech." }
];

const ChatBot = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! 👋 I'm your Ashbit Support Assistant. How can I help you build or scale today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [conversationState, setConversationState] = useState('IDLE'); // IDLE, ASKING_CAPTURE, CAPTURING_NAME, CAPTURING_MOBILE, CAPTURING_EMAIL, CAPTURING_NEED
    const [userData, setUserData] = useState({ Name: '', Mobile: '', Email: '', Need: '' });
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatContainerRef.current && !chatContainerRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const submitToGoogleSheet = async (data) => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyAAwAsmmQJoyPZDUSmVaij7Zpkbyg2YPBxmNfYDNGg45G6hgwnym5keKe5WiSrJd8/exec';
        const formData = new FormData();
        Object.entries(data).forEach(([key, val]) => formData.append(key, val));
        try {
            await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
            return true;
        } catch (error) {
            console.error('Error!', error.message);
            return false;
        }
    };

    const findResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        const match = KNOWLEDGE_BASE.find(item => item.keys.some(key => lowerQuery.includes(key)));
        return match ? match.response : "That's a great question! I'm still learning about that. Would you like to leave your details so our human experts can provide a detailed answer? (Yes/No)";
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = input;
        const lowerInput = currentInput.toLowerCase();
        setInput('');
        setIsTyping(true);

        // Calculate response immediately (Logic is local and fast)
        let botResponse = "";
        let nextState = conversationState;

        if (conversationState === 'ASKING_CAPTURE') {
            if (lowerInput.includes('yes') || lowerInput.includes('ok') || lowerInput.includes('sure')) {
                botResponse = "Excellent! Let's get started. What is your Name?";
                nextState = 'CAPTURING_NAME';
            } else {
                botResponse = "No problem! I'm here if you have more questions. What else can I tell you about AshbitSoft?";
                nextState = 'IDLE';
            }
        } else if (conversationState === 'CAPTURING_NAME') {
            setUserData(prev => ({ ...prev, Name: currentInput }));
            botResponse = `Nice to meet you, ${currentInput}! What is your Mobile Number?`;
            nextState = 'CAPTURING_MOBILE';
        } else if (conversationState === 'CAPTURING_MOBILE') {
            setUserData(prev => ({ ...prev, Mobile: currentInput }));
            botResponse = "Got it. And your Email Address? (Or type 'skip')";
            nextState = 'CAPTURING_EMAIL';
        } else if (conversationState === 'CAPTURING_EMAIL') {
            setUserData(prev => ({ ...prev, Email: lowerInput === 'skip' ? 'NA' : currentInput }));
            botResponse = "Finally, briefly tell me what you need (e.g., Website, Automation, AI)?";
            nextState = 'CAPTURING_NEED';
        } else if (conversationState === 'CAPTURING_NEED') {
            const finalData = { ...userData, Need: currentInput };
            setUserData(finalData);
            botResponse = "Perfect! Sending your details to our team... 🚀";
            submitToGoogleSheet(finalData);
            nextState = 'PENDING_SUBMISSION';
        } else {
            botResponse = findResponse(currentInput);
            if (botResponse.includes("Would you like to leave your details")) {
                nextState = 'ASKING_CAPTURE';
            } else if (lowerInput.includes('project') || lowerInput.includes('quote') || lowerInput.includes('hire')) {
                botResponse += " Would you like to leave your contact details for a free consultation? (Yes/No)";
                nextState = 'ASKING_CAPTURE';
            }
        }

        // Dynamic delay: 150ms base + 5ms per character (capped at 1000ms for heavy text)
        const delay = Math.min(150 + (botResponse.length * 5), 1000);

        setTimeout(() => {
            setConversationState(nextState === 'PENDING_SUBMISSION' ? 'IDLE' : nextState);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);

            if (nextState === 'PENDING_SUBMISSION') {
                setTimeout(() => {
                    setMessages(prev => [...prev, { id: Date.now() + 5, text: "✅ Details received! Our team will contact you shortly. What else can I help you with?", sender: 'bot' }]);
                }, 600);
            }

            setIsTyping(false);
        }, delay);
    };


    return (
        <motion.div
            ref={chatContainerRef}
            drag={!isOpen}
            dragConstraints={{ left: -window.innerWidth + 80, right: 0, top: -window.innerHeight + 80, bottom: 0 }}
            dragMomentum={false}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 flex flex-col items-end cursor-grab active:cursor-grabbing"
        >
            <div className="relative flex items-center gap-4">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-sm font-medium hidden md:block whitespace-nowrap mr-2"
                >
                    Chat with Ashbit Support!
                    <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 rotate-45 border-r border-t border-slate-100 dark:border-slate-700"></div>
                </motion.div>

                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, y: [0, -10, 0] }}
                    transition={{ scale: { duration: 0.5 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    className="relative w-14 h-14 bg-gradient-to-r from-[#128C7E] to-[#075E54] rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/50 transition-all duration-500"
                >
                    {isOpen ? (
                        <X className="text-white" />
                    ) : (
                        <>
                            <img src={logo} alt="AshSoft" className="w-8 h-8 object-contain" />
                            {/* Red Dot Notification */}
                            <span className="absolute top-0 right-0 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white dark:border-slate-900"></span>
                            </span>
                        </>
                    )}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9, originY: 1, originX: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-16 right-0 w-[350px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-10rem)] bg-[#E5DDD5] dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden cursor-auto"
                        onPointerDownCapture={(e) => e.stopPropagation()}
                    >
                        {/* Messenger/WhatsApp Header */}
                        <div className="p-4 bg-[#075E54] dark:bg-slate-900 flex items-center justify-between shrink-0 shadow-lg z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden">
                                        <img src={logo} alt="AshSoft" className="w-full h-full object-contain" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#075E54] dark:border-slate-900 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Ashbit Support AI</h3>
                                    <span className="text-[10px] text-emerald-200">{isTyping ? 'Typing...' : 'Online'}</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area with WhatsApp Background Style */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:400px] bg-opacity-[0.05] dark:bg-opacity-[0.02]">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed relative ${msg.sender === 'user'
                                            ? 'bg-[#DCF8C6] dark:bg-emerald-900 text-slate-800 dark:text-emerald-50 rounded-tr-none'
                                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                        {/* Optional timestamp could go here */}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm">
                                        <div className="flex gap-1.5 px-1">
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-[#f0f2f5] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0">
                            <form onSubmit={handleSend} className="flex gap-2 items-center">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type a message..."
                                        className="w-full bg-white dark:bg-slate-800 border-none rounded-full py-2.5 px-5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 shadow-sm"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={!input.trim()}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-[#00897b] text-white rounded-full hover:bg-[#00796b] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                                >
                                    <Send size={18} fill="currentColor" />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ChatBot;

