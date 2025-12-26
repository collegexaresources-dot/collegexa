
import React from 'react';
import { FutureIcon } from './icons/FutureIcon';
import { RocketIcon } from './icons/RocketIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { CheckIcon } from './icons/CheckIcon';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const socialProofItems = [
    { text: 'Trusted by 1K+ Students' },
    { text: '$2M+ in Scholarships Found' },
    { text: '500+ Success Stories' },
  ];
  
  const particles = [
      { top: '10%', left: '20%', size: 'w-1 h-1', color: 'bg-cyan-300/50', duration: '6s', delay: '0s' },
      { top: '20%', left: '80%', size: 'w-2 h-2', color: 'bg-purple-300/50', duration: '7s', delay: '1s' },
      { top: '50%', left: '5%', size: 'w-1 h-1', color: 'bg-white/50', duration: '8s', delay: '2s' },
      { top: '80%', left: '30%', size: 'w-2 h-2', color: 'bg-purple-300/50', duration: '6s', delay: '3s' },
      { top: '90%', left: '70%', size: 'w-1 h-1', color: 'bg-cyan-300/50', duration: '9s', delay: '0.5s' },
      { top: '40%', left: '95%', size: 'w-1 h-1', color: 'bg-white/50', duration: '7s', delay: '1.5s' },
      { top: '15%', left: '50%', size: 'w-[1.5px] h-[1.5px]', color: 'bg-purple-300/40', duration: '8s', delay: '2.5s' },
      { top: '70%', left: '90%', size: 'w-1 h-1', color: 'bg-cyan-300/60', duration: '6s', delay: '0.2s' },
      { top: '30%', left: '35%', size: 'w-2 h-2', color: 'bg-white/40', duration: '9s', delay: '1.8s' },
      { top: '60%', left: '60%', size: 'w-1 h-1', color: 'bg-purple-300/50', duration: '7s', delay: '2.8s' },
      { top: '85%', left: '10%', size: 'w-1.5 h-1.5', color: 'bg-cyan-300/50', duration: '8s', delay: '0.8s' },
    ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] max-w-4xl bg-purple-900/40 rounded-full blur-3xl animate-pulse transform translate-z-0"></div>

      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        {particles.map((p, i) => (
           <div 
             key={i}
             className={`absolute rounded-full animate-float ${p.size} ${p.color} will-change-transform`}
             style={{ 
               top: p.top, 
               left: p.left, 
               animationDuration: p.duration, 
               animationDelay: p.delay 
            }}
           ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-gray-900/30 border border-white/10 rounded-full backdrop-blur-sm">
          <FutureIcon className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-medium text-cyan-200/80 tracking-widest uppercase">
            The Future of Student Success
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
          Your Journey to
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            COLLEGE SUCCESS
          </span>
          <br />
          <span className="text-cyan-400">Starts Here</span>
        </h1>
        
        <p className="max-w-3xl mx-auto mt-6 text-base md:text-lg text-purple-200/70">
          Connect with mentors, discover scholarships, launch passion projects, and unlock every opportunity to make your college dreams a reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={() => onNavigate('Projects')}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform transition-all duration-300 ease-in-out w-full sm:w-auto animate-glow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            <RocketIcon className="w-5 h-5" />
            Launch Your Journey
          </button>
          <button 
            onClick={() => onNavigate('Scholarships')}
            className="flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl shadow-lg shadow-black/20 hover:bg-white hover:text-[#0F0529] transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-opacity-75 w-full sm:w-auto"
          >
            <ScholarshipsIcon className="w-5 h-5" />
            Find Funding
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-16 text-sm text-gray-400">
          {socialProofItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
