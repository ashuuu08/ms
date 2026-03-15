// Blog Posts Data — AshbitSoft Tech Blog

export const blogPosts = [
    {
        id: 1,
        title: "How We Automated 500+ Invoices Daily with Google Apps Script",
        slug: "automate-invoices-google-apps-script",
        excerpt: "A step-by-step breakdown of how we replaced a manual invoicing process with a fully automated Google Apps Script solution — saving 30+ hours per week.",
        content: `<h2>The Problem</h2><p>Our client was manually processing 500+ invoices daily using spreadsheets. It was error-prone, slow, and expensive. We built a Google Apps Script automation that triggers on form submission, generates PDFs, sends emails, and logs data — all automatically.</p><h2>The Solution</h2><p>Using Apps Script with the Drive, Gmail, and Sheets APIs, we built a trigger-based pipeline that runs every hour. The system pulls order data, generates templated PDF invoices, sends them to clients, and archives them in Drive.</p><h2>Results</h2><p>The client went from 3 full-time data entry staff to zero, saving ₹4.2L/year and eliminating all processing errors. The system now handles 700+ invoices daily without any manual input.</p>`,
        author: "Ashish Kumar",
        authorRole: "Founder, AshbitSoft",
        date: "2026-02-15",
        readTime: "6 min read",
        category: "Automation",
        tags: ["Google Apps Script", "Automation", "Sheets API"],
        gradient: "from-emerald-600 to-teal-600",
        icon: "⚡",
        featured: true
        
    },
    {
        id: 2,
        title: "Building a MERN Stack App That Scales to 100k Users",
        slug: "mern-stack-scalable-app",
        excerpt: "Architecture decisions, tech choices, and deployment strategies we used to take a MERN Stack SaaS from 0 to 100k users without rewriting a line of core code.",
        content: `<h2>Starting Right</h2><p>Most MVPs fail at scale because of architectural shortcuts taken early. This post walks through the decisions we made from day one to ensure the foundation could hold under pressure.</p><h2>Key Decisions</h2><p>We chose MongoDB with proper indexing, Redis for session caching, and deployed to AWS EC2 with an NGINX reverse proxy. Horizontal scaling was built in from the start using PM2 cluster mode.</p><h2>API Design</h2><p>RESTful APIs with JWT auth, rate limiting via express-rate-limit, and Zod for input validation. Every endpoint was stress tested before going live.</p><h2>Results</h2><p>At 100k MAU, p95 response time is under 180ms. Zero downtime deployments via GitHub Actions CI/CD pipeline.</p>`,
        author: "Ashish Kumar",
        authorRole: "Founder, AshbitSoft",
        date: "2026-02-10",
        readTime: "9 min read",
        category: "Development",
        tags: ["MERN Stack", "Node.js", "Scalability", "React"],
        gradient: "from-blue-600 to-indigo-600",
        icon: "🚀",
        featured: true
    },
    {
        id: 3,
        title: "Supabase vs Firebase: Which Should You Choose in 2026?",
        slug: "supabase-vs-firebase-2026",
        excerpt: "We've shipped production apps on both. Here's an honest, technical comparison of Supabase and Firebase to help you pick the right backend for your project.",
        content: `<h2>Overview</h2><p>Supabase and Firebase are both Backend-as-a-Service platforms, but they have very different philosophies. Supabase is open-source and built on PostgreSQL. Firebase is Google's proprietary NoSQL platform.</p><h2>Where Supabase Wins</h2><p>If you need relational data, complex queries, row-level security, and the ability to self-host — Supabase is the clear winner. SQL power with real-time subscriptions and a great TypeScript SDK.</p><h2>Where Firebase Wins</h2><p>Firebase is unmatched for rapid prototyping, Google analytics integration, and push notifications. FCM is still the best mobile push solution available.</p><h2>Our Recommendation</h2><p>For most B2B SaaS apps: Supabase. For mobile-first consumer apps: Firebase. For anything that needs real SQL joins: always Supabase.</p>`,
        author: "Rahul Verma",
        authorRole: "Backend Engineer, AshbitSoft",
        date: "2026-02-05",
        readTime: "7 min read",
        category: "Development",
        tags: ["Supabase", "Firebase", "Backend", "Database"],
        gradient: "from-violet-600 to-purple-600",
        icon: "🗄️",
        featured: false
    },
    {
        id: 4,
        title: "AI Chatbots for Small Businesses: A Practical Guide",
        slug: "ai-chatbots-small-business-guide",
        excerpt: "You don't need an enterprise budget to deploy a smart AI chatbot. Here's how we build and deploy custom chatbots for small businesses using the OpenAI API.",
        content: `<h2>Why Chatbots Matter for SMBs</h2><p>A well-built chatbot can handle 60-70% of support queries automatically. That's hours of your time returned every single day.</p><h2>Our Stack</h2><p>We use the OpenAI GPT-4 API with a custom system prompt trained on the client's product docs, FAQ, and business context. The chatbot is deployed via a Node.js backend and embedded as a widget on any website.</p><h2>What We Integrate</h2><p>WhatsApp via Twilio, Web chat via a custom React widget, and email fallback via SendGrid. All conversations are logged to a Supabase database for review and improvement.</p><h2>Real Costs</h2><p>For a small business handling 200 queries/day, the OpenAI API cost is typically $8-12/month. ROI is immediate when you consider the saved support time.</p>`,
        author: "Ashish Kumar",
        authorRole: "Founder, AshbitSoft",
        date: "2026-01-30",
        readTime: "6 min read",
        category: "Artificial Intelligence",
        tags: ["AI", "Chatbots", "OpenAI", "Automation"],
        gradient: "from-indigo-600 to-blue-600",
        icon: "🤖",
        featured: false
    },
    {
        id: 5,
        title: "SEO in 2026: What Actually Moves the Needle for Startups",
        slug: "seo-strategy-startups-2026",
        excerpt: "Forget keyword stuffing and backlink farms. This is what we actually do to rank our startup clients on Google's first page — fast and sustainably.",
        content: `<h2>The SEO Landscape Has Changed</h2><p>Google's AI-powered search results have fundamentally changed what SEO means in 2026. Thin content is penalized. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is everything.</p><h2>What Actually Works</h2><p>Topic clustering — building authoritative content hubs around your core service areas — consistently outperforms individual keyword targeting. We pair this with technical SEO: Core Web Vitals, proper schema markup, and mobile optimization.</p><h2>Quick Wins</h2><p>Fix broken links, compress images, add meta descriptions to every page, claim Google Business Profile. These take hours and have outsized impact on local rankings.</p><h2>Our Process</h2><p>Month 1: Technical audit + fixes. Month 2-3: Content creation + internal linking. Month 4+: Link building via PR and guest posting. Most clients see page-1 rankings within 90 days for long-tail keywords.</p>`,
        author: "Priya Sharma",
        authorRole: "Digital Marketing Lead, AshbitSoft",
        date: "2026-01-22",
        readTime: "8 min read",
        category: "Digital Marketing",
        tags: ["SEO", "Digital Marketing", "Content Strategy"],
        gradient: "from-pink-600 to-rose-600",
        icon: "📈",
        featured: false
    },
    {
        id: 6,
        title: "Java Spring Boot vs Node.js: Which for Your Next Backend?",
        slug: "java-spring-boot-vs-nodejs-backend",
        excerpt: "Two of the most popular backend choices for enterprise apps. We break down performance, ecosystem, hiring costs, and when to use each.",
        content: `<h2>The Core Difference</h2><p>Node.js is event-driven and non-blocking — ideal for I/O heavy applications. Java Spring Boot is mature, thread-based, and battle-tested for large enterprise systems.</p><h2>Performance</h2><p>For raw throughput, modern Node.js (v22+) is competitive with Spring Boot for most workloads. Spring Boot handles CPU-intensive tasks better due to native multi-threading.</p><h2>Ecosystem</h2><p>Both have mature ecosystems. Spring Boot's dependency injection and annotation-based config is incredibly powerful for complex enterprise apps. Node.js wins on NPM package availability and rapid iteration speed.</p><h2>When to Choose Each</h2><p>Node.js: Startups, real-time apps, REST APIs, microservices. Spring Boot: Banking, healthcare, government, large-scale enterprise with complex business rules and team of Java developers.</p>`,
        author: "Rahul Verma",
        authorRole: "Backend Engineer, AshbitSoft",
        date: "2026-01-15",
        readTime: "7 min read",
        category: "Development",
        tags: ["Java", "Node.js", "Spring Boot", "Backend"],
        gradient: "from-amber-600 to-orange-600",
        icon: "☕",
        featured: false
    },
    {
        id: 7,
        title: "How to Build Your First SaaS MVP in 6 Weeks",
        slug: "build-saas-mvp-6-weeks",
        excerpt: "The exact blueprint we use to take a SaaS idea from a napkin sketch to a live, paying-customer product in 6 weeks flat — without cutting corners that matter.",
        content: `<h2>Week 1: Define, Don't Build</h2><p>The biggest mistake founders make is coding before validating. Spend week 1 on user interviews, competitor analysis, and writing your product spec document.</p><h2>Week 2-3: Core Feature Development</h2><p>Pick your stack (we recommend MERN or Next.js + Supabase), implement auth, your single core feature, and basic billing via Razorpay or Stripe.</p><h2>Week 4: Polish & QA</h2><p>No new features. Fix bugs, improve load times, write error messages that humans can read, and set up basic monitoring with Sentry.</p><h2>Week 5: Soft Launch</h2><p>Invite your first 20 users. Do not run ads yet. Watch how they use your product. Record sessions with Hotjar. Talk to every user.</p><h2>Week 6: Iterate Fast</h2><p>Fix the top 3 friction points identified from real users. Then and only then, consider a broader launch.</p>`,
        author: "Ashish Kumar",
        authorRole: "Founder, AshbitSoft",
        date: "2026-01-08",
        readTime: "10 min read",
        category: "Business Strategy",
        tags: ["SaaS", "MVP", "Startup", "Product"],
        gradient: "from-teal-600 to-emerald-600",
        icon: "💡",
        featured: false
    },
    {
        id: 8,
        title: "Google Apps Script: 5 Automations Every Business Needs",
        slug: "google-apps-script-5-automations",
        excerpt: "If your team uses Google Workspace, these 5 Apps Script automations will save you hours every week — no coding experience required to understand them.",
        content: `<h2>1. Auto-Send Weekly Reports</h2><p>Pull data from Sheets, format it into a beautiful HTML email, and send it to your team every Monday at 9am — automatically. A time trigger + MailApp does it in under 50 lines.</p><h2>2. Form-to-CRM Sync</h2><p>When a Google Form is submitted, automatically append data to your CRM spreadsheet, send a welcome email, and assign a task in your project tracker.</p><h2>3. Invoice Generator</h2><p>Use a Docs template + Slides/Drive API to generate PDFs from spreadsheet rows. Trigger on new row, auto-name the file, and email it to the client.</p><h2>4. Calendar Event Reminders</h2><p>A daily trigger that scans your Calendar API for events in the next 24 hours and sends WhatsApp reminders via the WhatsApp Business API.</p><h2>5. Slack/WhatsApp Alerts</h2><p>Monitor a Sheet for specific conditions (e.g. stock below threshold) and fire a webhook to Slack or WhatsApp when triggered.</p>`,
        author: "Ashish Kumar",
        authorRole: "Founder, AshbitSoft",
        date: "2026-01-02",
        readTime: "6 min read",
        category: "Automation",
        tags: ["Google Apps Script", "Automation", "Google Workspace"],
        gradient: "from-green-600 to-teal-600",
        icon: "📊",
        featured: false
    },
    {
        id: 9,
        title: "Why Your Website Is Losing Customers (And How to Fix It)",
        slug: "website-losing-customers-ux-fixes",
        excerpt: "Most business websites convert at under 2%. These are the UX and performance issues we fix in every client project that immediately move that number up.",
        content: `<h2>The Number One Problem: Speed</h2><p>If your site takes more than 3 seconds to load, 53% of mobile visitors leave. This is not a design problem — it's a technical one. Compress images, eliminate render-blocking scripts, and use a CDN.</p><h2>No Clear Call to Action</h2><p>Visitors shouldn't have to think about what to do next. Every page needs one primary CTA — prominently placed, visually distinct, and action-oriented (e.g., "Get My Free Quote" not "Contact Us").</p><h2>Trust Signals Are Missing</h2><p>Add client logos, testimonials, review counts, and certifications above the fold. People need social proof before they trust you with their money.</p><h2>Mobile Experience is Broken</h2><p>Test on a real Android device on a 4G connection. If text is too small, buttons are too close together, or forms are hard to fill — fix these immediately.</p>`,
        author: "Priya Sharma",
        authorRole: "Digital Marketing Lead, AshbitSoft",
        date: "2025-12-28",
        readTime: "5 min read",
        category: "Digital Marketing",
        tags: ["UX", "Conversion", "Web Design", "Performance"],
        gradient: "from-indigo-600 to-violet-600",
        icon: "🎯",
        featured: false
    },
    {
        id: 10,
        title: "Securing Your Node.js API: A Production Checklist",
        slug: "nodejs-api-security-checklist",
        excerpt: "Before you ship that Node.js API to production, run through this security checklist. We've seen what happens when teams skip these steps — don't be next.",
        content: `<h2>1. Helmet.js — Always</h2><p>Add helmet to every Express app. It sets 11 security-related HTTP headers in one line. There's no reason to skip this.</p><h2>2. Rate Limiting</h2><p>Use express-rate-limit to prevent brute force attacks on auth endpoints. Limit to 10 login attempts per 15 minutes per IP.</p><h2>3. Input Validation</h2><p>Use Zod or Joi to validate every incoming request body. Never trust client data. Sanitize against XSS with the xss-clean package.</p><h2>4. Environment Variables</h2><p>Use dotenv. Never commit .env files. Rotate secrets regularly. Use AWS Secrets Manager or Doppler for production secrets management.</p><h2>5. JWT Best Practices</h2><p>Short expiry times (15-60 min), refresh token rotation, and always verify the algorithm. Never use HS256 in production — use RS256.</p><h2>6. CORS Configuration</h2><p>Whitelist specific origins. Never use origin: '*' in production. Block credentials with wildcard origins — it's a security hole.</p>`,
        author: "Rahul Verma",
        authorRole: "Backend Engineer, AshbitSoft",
        date: "2025-12-20",
        readTime: "7 min read",
        category: "Security",
        tags: ["Node.js", "Security", "API", "Best Practices"],
        gradient: "from-slate-700 to-slate-900",
        icon: "🔒",
        featured: false
    }
];

// Get all unique categories
export const getCategories = () => {
    const categories = blogPosts.map(post => post.category);
    return [...new Set(categories)];
};

// Get all unique tags
export const getTags = () => {
    const tags = blogPosts.flatMap(post => post.tags);
    return [...new Set(tags)];
};

// Get featured posts
export const getFeaturedPosts = () => {
    return blogPosts.filter(post => post.featured);
};

// Get posts by category
export const getPostsByCategory = (category) => {
    return blogPosts.filter(post => post.category === category);
};

// Get posts by tag
export const getPostsByTag = (tag) => {
    return blogPosts.filter(post => post.tags.includes(tag));
};

// Get post by slug
export const getPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

// Get recent posts
export const getRecentPosts = (limit = 3) => {
    return [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
};
