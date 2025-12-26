
import React from 'react';
import { ClockIcon } from './icons/ClockIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { SkillsIcon } from './icons/SkillsIcon';
import { InsiderTipIcon } from './icons/InsiderTipIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';
import { BookIcon } from './icons/BookIcon';

export interface ActivityCardProps {
  iconBg: string;
  title: string;
  description: string;
  type: string;
  competitiveness: string;
  time: string;
  timeDetails: string;
  cost: string;
  location: string;
  skills: number;
  insiderTip: string;
}

const typeColors = {
  Volunteering: 'border-purple-400/50 text-purple-300 bg-purple-900/30',
  'Summer Program': 'border-indigo-400/50 text-indigo-300 bg-indigo-900/30',
  Club: 'border-purple-400/50 text-purple-300 bg-purple-900/30',
  Competition: 'border-purple-400/50 text-purple-300 bg-purple-900/30',
};

const competitivenessColors = {
  'Easy to Join': 'border-green-400/50 text-green-300 bg-green-900/30',
  'Highly Selective': 'border-red-400/50 text-red-300 bg-red-900/30',
  Selective: 'border-yellow-400/50 text-yellow-300 bg-yellow-900/30',
};

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  return (
    <div className="relative bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 flex flex-col h-full transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/60 group">
      <button className="absolute top-4 right-4 text-purple-400 hover:text-purple-300 transition-colors z-10 filter drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" aria-label="Save activity">
        <BookIcon className="w-5 h-5" />
      </button>

      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${props.iconBg} shadow-lg mb-4 group-hover:scale-105 transition-transform`}>
        <ActivitiesIcon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{props.title}</h3>
      <p className="text-purple-200/70 text-sm mb-4 flex-grow">{props.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[props.type] || 'border-gray-400 text-gray-300 bg-gray-900/50'}`}>
          {props.type}
        </span>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${competitivenessColors[props.competitiveness]}`}>
          {props.competitiveness}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-purple-200/60 mb-4">
          <div className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /><span>{props.timeDetails}</span></div>
          <div className="flex items-center gap-1.5"><ScholarshipsIcon className="w-3.5 h-3.5" /><span>{props.cost}</span></div>
          <div className="flex items-center gap-1.5"><LocationPinIcon className="w-3.5 h-3.5" /><span>{props.location}</span></div>
          <div className="flex items-center gap-1.5"><SkillsIcon className="w-3.5 h-3.5" /><span>{props.skills} Skills</span></div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-xs shadow-inner shadow-black/20">
        <div className="flex items-center gap-2 font-semibold text-cyan-300 mb-1 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
            <InsiderTipIcon className="w-4 h-4"/>
            Insider Tip
        </div>
        <p className="text-purple-200/70">{props.insiderTip}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
