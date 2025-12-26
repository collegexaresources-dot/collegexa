
import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { Project } from '../data/projectsData';
import { BookIcon } from './icons/BookIcon';

interface ProjectCardProps extends Project {
  onExplore: () => void;
}

const difficultyColors = {
  Beginner: 'border-green-400/50 text-green-300 bg-green-900/30 shadow-[0_0_10px_rgba(74,222,128,0.1)]',
  Intermediate: 'border-yellow-400/50 text-yellow-300 bg-yellow-900/30 shadow-[0_0_10px_rgba(250,204,21,0.1)]',
  Advanced: 'border-red-400/50 text-red-300 bg-red-900/30 shadow-[0_0_10px_rgba(248,113,113,0.1)]',
};

const categoryColors: { [key: string]: string } = {
    Humanities: 'border-purple-400/50 text-purple-300 bg-purple-900/30',
    STEM: 'border-blue-400/50 text-blue-300 bg-blue-900/30',
    Arts: 'border-pink-400/50 text-pink-300 bg-pink-900/30',
    'Social Good': 'border-indigo-400/50 text-indigo-300 bg-indigo-900/30',
    Business: 'border-amber-400/50 text-amber-300 bg-amber-900/30',
    Education: 'border-emerald-400/50 text-emerald-300 bg-emerald-900/30',
    Design: 'border-rose-400/50 text-rose-300 bg-rose-900/30'
};

const ProjectCard: React.FC<ProjectCardProps> = ({ icon: Icon, iconBg, title, description, difficulty, category, time, onExplore }) => {
  return (
    <div className="relative bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 flex flex-col h-full transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/60 group">
      <button className="absolute top-4 right-4 text-purple-400 hover:text-purple-300 transition-colors z-10 filter drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" aria-label="Save project">
        <BookIcon className="w-5 h-5" />
      </button>
      
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg} shadow-lg mb-4 group-hover:scale-105 transition-transform`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{title}</h3>
      <p className="text-purple-200/70 text-sm mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[category] || 'border-gray-400 text-gray-300 bg-gray-900/50'}`}>
          {category}
        </span>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-purple-500/20">
        <div className="flex items-center gap-1.5 text-xs text-purple-200/60">
            <ClockIcon className="w-3.5 h-3.5"/>
            <span>{time} Commitment</span>
        </div>
        <button onClick={onExplore} className="flex items-center gap-1.5 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors shadow-cyan-500/20">
          Explore
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
