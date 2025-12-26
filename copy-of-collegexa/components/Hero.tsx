import React, { memo } from 'react';
import { FutureIcon } from './icons/FutureIcon';
import { RocketIcon } from './icons/RocketIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { CheckIcon } from './icons/CheckIcon';

const Hero: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: i % 2 === 0 ? 'w-1 h-1' : 'w-2 h-2',
    delay: `${i * 0.5}s`
  }));

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
           <div key={i} className={`absolute rounded-full animate-float ${p.size} bg-purple-300/30`} style={{ top: p.top, left: p.left, animationDelay: p.delay }}></div>
        ))}
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
          <FutureIcon className="w-3 h-3 text-cyan-400" /><span className="text-[10px] font-bold text-cyan-200 tracking-widest uppercase">The Success Standard</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white leading-tight">
          Your Journey to<br /><span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">COLLEGE SUCCESS</span><br /><span className="text-cyan-400">Starts Here</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-purple-200/60">Connect with mentors, discover scholarships, and launch passion projects with the platform built for excellence.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button onClick={() => onNavigate('Projects')} className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transition-transform hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"><RocketIcon className="w-4 h-4" />Launch Journey</button>
          <button onClick={() => onNavigate('Scholarships')} className="flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-xl transition-all hover:bg-white hover:text-black w-full sm:w-auto"><ScholarshipsIcon className="w-4 h-4" />Find Funding</button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          {['1K+ Students', '$2M+ Found', '500+ Stories'].map((t, i) => (
            <div key={i} className="flex items-center gap-2"><CheckIcon className="w-3 h-3 text-green-500" /><span>{t}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default memo(Hero);
