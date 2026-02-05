// Blog Posts Data
import cloudImage from '../assets/blog-cloud.svg';
import securityImage from '../assets/blog-security.svg';
import developmentImage from '../assets/blog-development.svg';
import digitalImage from '../assets/blog-digital.svg';
import aiImage from '../assets/blog-ai.svg';
import mobileImage from '../assets/blog-mobile.svg';

export const blogPosts = [
    {
        id: 1,
        title: "The Future of Cloud Computing: Trends to Watch in 2026",
        slug: "future-of-cloud-computing-2026",
        excerpt: "Explore the latest trends shaping cloud computing, from edge computing to serverless architectures, and how they're transforming businesses worldwide.",
        content: `
      <h2>Introduction</h2>
      <p>Cloud computing continues to evolve at a rapid pace, bringing new opportunities and challenges for businesses of all sizes. As we move through 2026, several key trends are emerging that will shape the future of how we build, deploy, and manage applications.</p>
      
      <h2>1. Edge Computing Revolution</h2>
      <p>Edge computing is moving processing power closer to data sources, reducing latency and improving performance. This is particularly crucial for IoT devices, autonomous vehicles, and real-time applications.</p>
      
      <h2>2. Serverless Architecture Maturity</h2>
      <p>Serverless computing has matured significantly, offering developers the ability to build scalable applications without managing infrastructure. This trend is reducing operational costs and accelerating development cycles.</p>
      
      <h2>3. Multi-Cloud Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in, improve resilience, and optimize costs. This approach requires sophisticated management tools and expertise.</p>
      
      <h2>4. AI and Machine Learning Integration</h2>
      <p>Cloud providers are embedding AI and ML capabilities directly into their platforms, making advanced analytics accessible to businesses of all sizes.</p>
      
      <h2>Conclusion</h2>
      <p>The cloud computing landscape is more dynamic than ever. Staying ahead of these trends will be crucial for businesses looking to maintain their competitive edge in the digital economy.</p>
    `,
        author: "Ashish Kumar",
        authorRole: "Cloud Solutions Architect",
        date: "2026-02-01",
        readTime: "5 min read",
        category: "Cloud Computing",
        tags: ["Cloud", "Technology", "Innovation"],
        image: cloudImage,
        featured: true
    },
    {
        id: 2,
        title: "Cybersecurity Best Practices for SMEs in 2026",
        slug: "cybersecurity-best-practices-smes-2026",
        excerpt: "Small and medium enterprises face unique cybersecurity challenges. Learn essential practices to protect your business from evolving threats.",
        content: `
      <h2>Why SMEs Are Targets</h2>
      <p>Small and medium-sized enterprises are increasingly targeted by cybercriminals because they often lack the robust security infrastructure of larger organizations. However, implementing the right practices can significantly reduce your risk.</p>
      
      <h2>Essential Security Measures</h2>
      
      <h3>1. Multi-Factor Authentication (MFA)</h3>
      <p>Implement MFA across all business applications. This simple step can prevent up to 99.9% of automated attacks.</p>
      
      <h3>2. Regular Security Training</h3>
      <p>Your employees are your first line of defense. Regular training on phishing, social engineering, and security best practices is essential.</p>
      
      <h3>3. Data Backup and Recovery</h3>
      <p>Implement automated backup solutions with off-site storage. Test your recovery procedures regularly to ensure business continuity.</p>
      
      <h3>4. Network Security</h3>
      <p>Use firewalls, VPNs, and network segmentation to protect your infrastructure. Regular security audits can identify vulnerabilities before they're exploited.</p>
      
      <h2>Conclusion</h2>
      <p>Cybersecurity doesn't have to be overwhelming. By implementing these fundamental practices, SMEs can significantly improve their security posture and protect their valuable assets.</p>
    `,
        author: "Priya Sharma",
        authorRole: "Security Consultant",
        date: "2026-01-28",
        readTime: "6 min read",
        category: "Security",
        tags: ["Security", "SME", "Best Practices"],
        image: securityImage,
        featured: true
    },
    {
        id: 3,
        title: "Building Scalable Web Applications: A Complete Guide",
        slug: "building-scalable-web-applications-guide",
        excerpt: "Learn the architectural patterns and best practices for building web applications that can scale from hundreds to millions of users.",
        content: `
      <h2>Understanding Scalability</h2>
      <p>Scalability is the ability of your application to handle growing amounts of work by adding resources. This guide covers both horizontal and vertical scaling strategies.</p>
      
      <h2>Key Architectural Patterns</h2>
      
      <h3>Microservices Architecture</h3>
      <p>Breaking down your application into smaller, independent services allows for better scalability and maintainability. Each service can be scaled independently based on demand.</p>
      
      <h3>Database Optimization</h3>
      <p>Implement caching strategies, database indexing, and consider NoSQL solutions for specific use cases. Connection pooling and query optimization are crucial for performance.</p>
      
      <h3>Load Balancing</h3>
      <p>Distribute traffic across multiple servers to ensure no single server becomes a bottleneck. Modern load balancers can also provide health checking and automatic failover.</p>
      
      <h2>Performance Optimization</h2>
      <ul>
        <li>Implement CDN for static assets</li>
        <li>Use lazy loading for images and components</li>
        <li>Optimize bundle sizes and code splitting</li>
        <li>Implement server-side rendering where appropriate</li>
      </ul>
      
      <h2>Monitoring and Observability</h2>
      <p>Implement comprehensive logging, monitoring, and alerting systems. Understanding your application's behavior under load is crucial for maintaining performance.</p>
    `,
        author: "Rahul Verma",
        authorRole: "Senior Developer",
        date: "2026-01-25",
        readTime: "8 min read",
        category: "Development",
        tags: ["Web Development", "Architecture", "Scalability"],
        image: developmentImage,
        featured: false
    },
    {
        id: 4,
        title: "Digital Transformation: A Roadmap for Traditional Businesses",
        slug: "digital-transformation-roadmap",
        excerpt: "Navigate the digital transformation journey with our comprehensive roadmap designed specifically for traditional businesses.",
        content: `
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.</p>
      
      <h2>Phase 1: Assessment and Planning</h2>
      <p>Begin by assessing your current digital maturity. Identify pain points, opportunities, and set clear objectives for your transformation journey.</p>
      
      <h2>Phase 2: Building Digital Foundation</h2>
      <p>Invest in core infrastructure: cloud computing, data analytics platforms, and modern collaboration tools. This foundation supports all future initiatives.</p>
      
      <h2>Phase 3: Process Digitization</h2>
      <p>Automate manual processes, implement digital workflows, and integrate systems to improve efficiency and reduce errors.</p>
      
      <h2>Phase 4: Customer Experience Enhancement</h2>
      <p>Leverage digital channels to improve customer engagement. Implement CRM systems, mobile apps, and personalized marketing strategies.</p>
      
      <h2>Phase 5: Data-Driven Decision Making</h2>
      <p>Use analytics and business intelligence tools to gain insights from your data. Make informed decisions based on real-time information.</p>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Resistance to change, legacy systems, and skill gaps are common challenges. Address these through change management, phased migration strategies, and continuous training.</p>
    `,
        author: "Anjali Patel",
        authorRole: "Digital Strategy Consultant",
        date: "2026-01-20",
        readTime: "7 min read",
        category: "Business Strategy",
        tags: ["Digital Transformation", "Business", "Strategy"],
        image: digitalImage,
        featured: false
    },
    {
        id: 5,
        title: "AI and Machine Learning: Practical Applications for Business",
        slug: "ai-ml-practical-business-applications",
        excerpt: "Discover how AI and machine learning can solve real business problems, from customer service automation to predictive analytics.",
        content: `
      <h2>Demystifying AI for Business</h2>
      <p>Artificial Intelligence and Machine Learning are no longer just buzzwords. They're practical tools that businesses of all sizes can leverage to improve operations and customer experiences.</p>
      
      <h2>Customer Service Automation</h2>
      <p>AI-powered chatbots can handle routine customer inquiries 24/7, freeing up human agents for complex issues. Modern chatbots use natural language processing to understand context and provide relevant responses.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Machine learning models can analyze historical data to predict future trends, helping businesses make proactive decisions about inventory, staffing, and resource allocation.</p>
      
      <h2>Personalization at Scale</h2>
      <p>AI enables businesses to deliver personalized experiences to thousands or millions of customers simultaneously, improving engagement and conversion rates.</p>
      
      <h2>Process Automation</h2>
      <p>From invoice processing to quality control, AI can automate repetitive tasks with high accuracy, reducing costs and minimizing errors.</p>
      
      <h2>Getting Started</h2>
      <p>Start small with a specific use case. Collect quality data, choose the right tools, and measure results. Success with initial projects builds momentum for broader AI adoption.</p>
    `,
        author: "Vikram Singh",
        authorRole: "AI Solutions Architect",
        date: "2026-01-15",
        readTime: "6 min read",
        category: "Artificial Intelligence",
        tags: ["AI", "Machine Learning", "Automation"],
        image: aiImage,
        featured: false
    },
    {
        id: 6,
        title: "Mobile-First Development: Why It Matters in 2026",
        slug: "mobile-first-development-2026",
        excerpt: "With mobile traffic dominating the web, mobile-first development is no longer optional. Learn why and how to implement it effectively.",
        content: `
      <h2>The Mobile-First Imperative</h2>
      <p>Over 60% of web traffic now comes from mobile devices. Mobile-first development ensures your applications provide excellent experiences on the devices most people use.</p>
      
      <h2>Core Principles</h2>
      
      <h3>Progressive Enhancement</h3>
      <p>Start with a solid mobile experience and enhance it for larger screens. This ensures all users get a functional experience regardless of their device.</p>
      
      <h3>Performance Optimization</h3>
      <p>Mobile users often have slower connections. Optimize images, minimize JavaScript, and implement lazy loading to ensure fast load times.</p>
      
      <h3>Touch-Friendly Interfaces</h3>
      <p>Design for touch interactions with appropriately sized buttons, adequate spacing, and intuitive gestures.</p>
      
      <h2>Responsive Design Best Practices</h2>
      <ul>
        <li>Use flexible grid layouts</li>
        <li>Implement responsive images</li>
        <li>Test on real devices</li>
        <li>Consider mobile-specific features like GPS and camera access</li>
      </ul>
      
      <h2>Tools and Frameworks</h2>
      <p>Modern frameworks like React Native, Flutter, and Progressive Web Apps (PWAs) make it easier to build high-quality mobile experiences.</p>
    `,
        author: "Neha Gupta",
        authorRole: "Mobile Development Lead",
        date: "2026-01-10",
        readTime: "5 min read",
        category: "Mobile Development",
        tags: ["Mobile", "Development", "UX"],
        image: mobileImage,
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
    return blogPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
};
