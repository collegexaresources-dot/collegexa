
import React from 'react';
import { PlatformIcon } from './icons/PlatformIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';
import { ScholarshipsIcon } from './icons/ScholarshipsIcon';
import { ProfessorsIcon } from './icons/ProfessorsIcon';
import { EmailGuideIcon } from './icons/EmailGuideIcon';
import { BlogIcon } from './icons/BlogIcon';

const featuresData = [
  {
    icon: ProjectsIcon,
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-400',
    title: 'Passion Projects',
    description: '300+ curated project ideas with step-by-step roadmaps. Transform your interests into impressive portfolio pieces.',
    navTarget: 'Projects',
  },
  {
    icon: ActivitiesIcon,
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-400',
    title: 'EC Activities',
    description: 'Advanced filtering across 300+ activities. Find the perfect extracurriculars that align with your goals.',
    navTarget: 'Activities',
  },
  {
    icon: ScholarshipsIcon,
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-400',
    title: 'Scholarships',
    description: '100+ opportunities with smart matching. Track deadlines and never miss funding opportunities.',
    navTarget: 'Scholarships',
  },
  {
    icon: ProfessorsIcon,
    iconBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-400',
    title: 'Research Mentors',
    description: 'Connect with 200+ professors. Get matched with mentors who align with your research interests.',
    navTarget: 'Professors',
  },
  {
    icon: EmailGuideIcon,
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-400',
    title: 'Email Mastery',
    description: 'Proven templates and strategies. Learn to craft emails that get responses from busy professionals.',
    navTarget: 'Email Guide',
  },
  {
    icon: BlogIcon,
    iconBg: 'bg-gradient-to-br from-sky-500 to-cyan-400',
    title: 'Resource Hub',
    description: 'Expert guides on every topic. From essays to test prep, master every aspect of college admissions.',
    navTarget: 'Blog',
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  navTarget: string;
  onNavigate: (page: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, iconBg, title, description, navTarget, onNavigate }) => (
  <div className="group bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 flex flex-col h-full transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/60">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${iconBg} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h3>
    <p className="text-purple-200/70 text-sm mb-6 flex-grow">{description}</p>
    <button onClick={() => onNavigate(navTarget)} className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
      Explore Now
      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  </div>
);

interface FeaturesProps {
  onNavigate: (page: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
       {/* Removed large blobs here to reduce visual noise since body has blobs now, but can keep if desired. */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-gray-900/40 border border-white/10 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <PlatformIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-200/80 tracking-widest uppercase">
                COMPLETE PLATFORM
              </span>
           </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Excel
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-purple-200/70">
            Comprehensive tools for every step of your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconBg={feature.iconBg}
              title={feature.title}
              description={feature.description}
              navTarget={feature.navTarget}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
