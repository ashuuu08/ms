import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const WorkCard = ({ title, category, image, description, tags }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-indigo-600 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-slate-100">
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition">
            <ExternalLink size={16} /> Live Demo
          </button>
          {/* Optional Github Link */}
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition">
            <Github size={16} /> Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;