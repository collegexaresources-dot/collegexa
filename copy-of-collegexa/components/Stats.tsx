
import React, { useState, useEffect, useRef } from 'react';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { MentorsIcon } from './icons/MentorsIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
}

const stats: Stat[] = [
  { icon: ProjectsIcon, value: 300, label: 'PROJECT IDEAS' },
  { icon: ScholarshipsIcon, value: 100, label: 'SCHOLARSHIPS' },
  { icon: MentorsIcon, value: 200, label: 'MENTORS' },
  { icon: ActivitiesIcon, value: 300, label: 'ACTIVITIES' },
];

const useCountUp = (end: number, duration: number, inView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure it ends exactly on the target number
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, inView]);

  return count;
};


const StatCard: React.FC<{ stat: Stat, inView: boolean }> = ({ stat, inView }) => {
    const count = useCountUp(stat.value, 2000, inView);
  return (
    <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-6 text-center flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:border-purple-400/60">
      <stat.icon className="w-8 h-8 mb-4 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]" />
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.4)]">
        {count}+
      </p>
      <p className="mt-2 text-sm font-semibold tracking-widest text-purple-200/60 uppercase">
        {stat.label}
      </p>
    </div>
  );
};

const Stats: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <section ref={ref} className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-indigo-900/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            By The{' '}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,38,211,0.5)]">
              Numbers
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-purple-200/70">
            Real impact, real results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
