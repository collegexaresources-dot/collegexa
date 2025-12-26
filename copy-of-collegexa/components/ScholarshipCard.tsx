
import React from 'react';
import { DeadlineIcon } from './icons/DeadlineIcon';
import { GpaIcon } from './icons/GpaIcon';
import { MaterialsIcon } from './icons/MaterialsIcon';
import { InsiderTipIcon } from './icons/InsiderTipIcon';
import { Scholarship } from '../data/scholarshipsData';

interface ScholarshipCardProps extends Scholarship {
  onViewMore: (scholarship: Scholarship) => void;
}

const effortColors = {
  'Quick Apply': 'border-green-400/50 text-green-300 bg-green-900/30 shadow-[0_0_10px_rgba(74,222,128,0.1)]',
  'Medium Effort': 'border-yellow-400/50 text-yellow-300 bg-yellow-900/30 shadow-[0_0_10px_rgba(250,204,21,0.1)]',
  'In-Depth Portfolio': 'border-red-400/50 text-red-300 bg-red-900/30 shadow-[0_0_10px_rgba(248,113,113,0.1)]',
};

const fieldColors = {
  Any: 'border-purple-400/50 text-purple-300 bg-purple-900/30',
  STEM: 'border-blue-400/50 text-blue-300 bg-blue-900/30',
  Humanities: 'border-pink-400/50 text-pink-300 bg-pink-900/30',
  Arts: 'border-orange-400/50 text-orange-300 bg-orange-900/30',
  Business: 'border-indigo-400/50 text-indigo-300 bg-indigo-900/30',
};

const ScholarshipCard: React.FC<ScholarshipCardProps> = (props) => {
  const { onViewMore, ...scholarshipData } = props;
  const isDeadlinePassed = new Date(props.deadline) < new Date();
  
  const displayedEligibility = props.eligibility.slice(0, 3);
  const remainingEligibilityCount = props.eligibility.length - displayedEligibility.length;

  return (
    <div 
      onClick={() => onViewMore(scholarshipData as Scholarship)}
      className="block relative bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 hover:border-purple-400/60 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{props.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${effortColors[props.effort]}`}>
              {props.effort}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${fieldColors[props.field] || 'border-gray-400 text-gray-300 bg-gray-900/50'}`}>
              {props.field}
            </span>
          </div>

          <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
            ${props.amount.toLocaleString()}
          </p>

          <div className="mb-4">
            <p className="text-sm font-semibold text-purple-200/80 mb-2">Eligibility:</p>
            <div className="flex flex-wrap gap-2 items-center">
              {displayedEligibility.map((item, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-200/70">{item}</span>
              ))}
              {remainingEligibilityCount > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewMore(scholarshipData as Scholarship);
                  }}
                  className="text-xs font-medium px-3 py-1 bg-purple-900/50 border border-purple-500/30 rounded-full text-purple-300 hover:bg-purple-900/80 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 z-10"
                >
                  +{remainingEligibilityCount} more
                </button>
              )}
            </div>
          </div>

          <div className="mb-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-purple-200/80 mb-2">
                  <MaterialsIcon className="w-4 h-4" />
                  Required Materials:
              </p>
              <div className="flex flex-wrap gap-2">
                  {props.materials.map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-300">{item}</span>
                  ))}
              </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/20 rounded-lg p-3 text-xs shadow-inner shadow-black/20">
              <div className="flex items-center gap-2 font-semibold text-yellow-300 mb-1 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                  <InsiderTipIcon className="w-4 h-4"/>
                  Application Tip
              </div>
              <p className="text-yellow-200/70">{props.applicationTip}</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex-shrink-0 w-full md:w-48 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center h-full flex flex-col justify-center shadow-inner shadow-black/10">
              <DeadlineIcon className="w-6 h-6 mx-auto text-purple-300 mb-2"/>
              <p className="text-xs text-purple-300/80">Deadline</p>
              <p className="text-base font-bold text-white">{props.deadline}</p>
              {isDeadlinePassed && <p className="text-xs text-red-400 mt-1">Deadline passed</p>}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center h-full flex flex-col justify-center shadow-inner shadow-black/10">
              <GpaIcon className="w-6 h-6 mx-auto text-purple-300 mb-2"/>
              <p className="text-xs text-purple-300/80">Min. GPA</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{props.minGPA.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
