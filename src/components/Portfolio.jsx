import React, { useState } from 'react';
import WorkCard from '../components/WorkCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Automated Invoice Generator",
      category: "Google Script",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
      description: "A custom Google Apps Script solution that triggers whenever a row is added to Google Sheets, generates a PDF invoice, saves it to Drive, and emails it to the client automatically.",
      tags: ["Google Sheets", "Apps Script", "Gmail API", "PDF Generation"]
    },
    {
      title: "E-Commerce Dashboard",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "A full-stack React application for tracking sales, managing inventory, and analyzing customer trends with real-time data visualization.",
      tags: ["React", "Tailwind", "Node.js", "MongoDB"]
    },
    {
      title: "HR Leave Management System",
      category: "Google Script",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800",
      description: "An internal tool built entirely within Google Sheets using AppScript sidebars. Allows employees to request leave and managers to approve via email buttons.",
      tags: ["Google Forms", "Sheet Automation", "Workflow"]
    },
    {
      title: "Corporate Portfolio Site",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
      description: "A high-performance, SEO-optimized landing page for a consulting firm featuring smooth animations and a headless CMS integration.",
      tags: ["React", "Framer Motion", "SEO"]
    }
  ];

  const categories = ["All", "Google Script", "Web Dev"];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From automating mundane spreadsheet tasks to building complex web applications, explore how we solve problems with code.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;