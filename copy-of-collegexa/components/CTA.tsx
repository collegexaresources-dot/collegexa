import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { RocketIcon } from './icons/RocketIcon';

interface CTAProps {
  onNavigate: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-12 lg:p-16 text-center overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-purple-400/50 transition-[transform,box-shadow,border-color] duration-300">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-600/20 rounded-full blur-3xl"></div>
           <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 bg-cyan-900/30 border border-cyan-500/30 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                <TargetIcon className="w-8 h-8 text-cyan-400" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl drop-shadow-lg">
                Ready to{' '}
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                  Transform
                </span>{' '}
                Your Future?
              </h2>
              <p className="mt-4 text-base md:text-lg text-purple-200/70 max-w-2xl mx-auto">
                Join 1,000+ ambitious students who are already building extraordinary futures with CollegeXcel.
              </p>

              <button
                onClick={() => onNavigate('Projects')}
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform transition-all duration-300 ease-in-out mt-10 animate-glow hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 border border-white/10"
              >
                <RocketIcon className="w-5 h-5" />
                Begin Your Journey
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
