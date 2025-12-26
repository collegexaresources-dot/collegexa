import React, { memo } from 'react';
import { DeadlineIcon } from './icons/DeadlineIcon';
import { GpaIcon } from './icons/GpaIcon';
import { MaterialsIcon } from './icons/MaterialsIcon';
import { InsiderTipIcon } from './icons/InsiderTipIcon';
import { Scholarship } from '../data/scholarshipsData';

interface ScholarshipCardProps extends Scholarship {
  onViewMore: (scholarship: Scholarship) => void;
}

const EFFORT_THEMES = {
  'Quick Apply': 'border-green-500/30 text-green-400 bg-green-500/5',
  'Medium Effort': 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5',
  'In-Depth Portfolio': 'border-red-500/30 text-red-400 bg-red-500/5',
};

const ScholarshipCard: React.FC<ScholarshipCardProps> = (props) => {
  const { onViewMore, ...data } = props;
  const isExpired = new Date(props.deadline) < new Date();

  return (
    <div 
      onClick={() => onViewMore(data as Scholarship)}
      className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-purple-500/40 cursor-pointer overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-purple-600/10 transition-colors"></div>
      
      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
        <div className="flex-grow space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${EFFORT_THEMES[props.effort as keyof typeof EFFORT_THEMES] || 'border-white/20 text-white/60 bg-white/5'}`}>
                {props.effort}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border border-purple-500/20 text-purple-300 bg-purple-500/5">
                {props.field}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight group-hover:text-purple-300 transition-colors">{props.title}</h3>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black bg-gradient-to-br from-white to-purple-200 bg-clip-text text-transparent">${props.amount.toLocaleString()}</span>
            <span className="text-xs font-bold text-purple-300/40 uppercase tracking-widest">Award Amount</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-purple-300/30 uppercase tracking-widest mb-1">Key Eligibility</p>
              <p className="text-sm text-white/70 line-clamp-1">{props.eligibility[0]}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-purple-300/30 uppercase tracking-widest mb-1">Materials</p>
              <div className="flex flex-wrap gap-1">
                {props.materials.slice(0, 2).map((m, i) => (
                    <span key={i} className="text-[10px] font-bold text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-1.5 rounded">{m}</span>
                ))}
                {props.materials.length > 2 && <span className="text-[10px] text-white/30">+{props.materials.length - 2} more</span>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-yellow-500/[0.03] border border-yellow-500/10 rounded-xl group-hover:bg-yellow-500/[0.06] transition-colors">
            <InsiderTipIcon className="w-4 h-4 text-yellow-500/70 flex-shrink-0" />
            <p className="text-xs text-yellow-200/60 font-medium italic line-clamp-1">{props.applicationTip}</p>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-40 grid grid-cols-2 md:grid-cols-1 gap-3">
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center group-hover:border-purple-500/20 transition-all">
            <DeadlineIcon className="w-5 h-5 mx-auto text-purple-400 mb-1" />
            <p className="text-[10px] font-bold text-purple-300/40 uppercase mb-0.5">Deadline</p>
            <p className={`text-sm font-black ${isExpired ? 'text-red-400' : 'text-white'}`}>{props.deadline}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center group-hover:border-purple-500/20 transition-all">
            <GpaIcon className="w-5 h-5 mx-auto text-purple-400 mb-1" />
            <p className="text-[10px] font-bold text-purple-300/40 uppercase mb-0.5">Min. GPA</p>
            <p className="text-xl font-black text-white">{props.minGPA.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ScholarshipCard);
