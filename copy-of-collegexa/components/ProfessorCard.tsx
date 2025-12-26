
import React from 'react';
import { EmailGuideIcon } from './icons/EmailGuideIcon';
import { BookIcon } from './icons/BookIcon';
import { GraduationCapIcon } from './icons/GraduationCapIcon';

export interface ProfessorCardProps {
  avatarBg: string;
  name: string;
  university: string;
  field: string;
  researchBullets: string[];
  bestForStudents: string[];
  keywords: string[];
}

const ProfessorCard: React.FC<ProfessorCardProps> = (props) => {
  const handleEmailClick = () => {
    window.dispatchEvent(new CustomEvent('navigateTo', { detail: 'Email Guide' }));
  };

  return (
    <div className="relative card-purple-glow bg-[#13111C]/40 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-purple-500/60 shadow-xl group">
      <button className="absolute top-6 right-6 text-purple-400 hover:text-purple-300 transition-colors z-10" aria-label="Save professor">
        <BookIcon className="w-5 h-5" />
      </button>

      {/* Header: Professor Name — University */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center ${props.avatarBg}`}>
          <GraduationCapIcon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
          {props.name} <span className="text-purple-400/60 font-light mx-2">—</span> <span className="text-cyan-400">{props.university}</span>
        </h3>
      </div>

      {/* Primary Field(s) */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1">Primary Field(s):</p>
        <p className="text-lg font-bold text-white/90">{props.field}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Research Focus */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300/60 mb-3 border-b border-white/5 pb-1">Research Focus:</h4>
          <ul className="space-y-2">
            {props.researchBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-purple-200/70 leading-relaxed">
                <span className="text-purple-500 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best For Students With */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300/60 mb-3 border-b border-white/5 pb-1">Best For Students With:</h4>
          <ul className="space-y-2">
            {props.bestForStudents.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-purple-200/70 leading-relaxed italic">
                <span className="text-purple-500 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key Research Topics (tags) */}
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {props.keywords.map((keyword, index) => (
            <span key={index} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-300/60 transition-colors">
              {keyword}
            </span>
          ))}
        </div>
        
        <button 
          onClick={handleEmailClick}
          className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-widest hover:bg-blue-600/40 transition-all hover:scale-105 active:scale-95"
        >
          <EmailGuideIcon className="w-4 h-4" />
          Email Professor
        </button>
      </div>
    </div>
  );
};

export default ProfessorCard;
