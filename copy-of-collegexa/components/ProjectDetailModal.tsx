
import React, { useEffect, useState } from 'react';
import { Project } from '../data/projectsData';
import { CloseIcon } from './icons/CloseIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { ActivitiesIcon } from './icons/ActivitiesIcon';
import { ListIcon } from './icons/ListIcon';
import { ToolboxIcon } from './icons/ToolboxIcon';
import { PresentationIcon } from './icons/PresentationIcon';

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const difficultyColors = {
  Beginner: 'border-green-400 text-green-300 bg-green-900/50',
  Intermediate: 'border-yellow-400 text-yellow-300 bg-yellow-900/50',
  Advanced: 'border-red-400 text-red-300 bg-red-900/50',
};

const categoryColors: { [key: string]: string } = {
    Humanities: 'border-purple-400 text-purple-300 bg-purple-900/50',
    STEM: 'border-blue-400 text-blue-300 bg-blue-900/50',
    Arts: 'border-pink-400 text-pink-300 bg-pink-900/50',
    'Social Good': 'border-indigo-400 text-indigo-300 bg-indigo-900/50',
    Business: 'border-amber-400 text-amber-300 bg-amber-900/50',
    Education: 'border-emerald-400 text-emerald-300 bg-emerald-900/50',
    Design: 'border-rose-400 text-rose-300 bg-rose-900/50'
};

const timeCommitmentMap = {
    'Low': 'Low Time',
    'Medium': 'Medium Time',
    'High': 'High Time'
};


const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match animation duration
    };

    const handleNavigate = (page: string) => {
        window.dispatchEvent(new CustomEvent('navigateTo', { detail: page }));
        handleClose();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
    >
      <div 
        className={`bg-[#1A0E3B]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-900/20 text-white transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[project.category] || 'border-gray-400 text-gray-300 bg-gray-900/50'}`}>
                            {project.category}
                        </span>
                         <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[project.difficulty]}`}>
                            {project.difficulty}
                        </span>
                         <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-cyan-400 text-cyan-300 bg-cyan-900/50">
                            {timeCommitmentMap[project.time]}
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white" id="modal-title">{project.title}</h2>
                    <p className="text-purple-200/70 mt-1">{project.description}</p>
                </div>
                <button onClick={handleClose} className="p-1 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors" aria-label="Close modal">
                    <CloseIcon className="w-6 h-6"/>
                </button>
            </div>
            
            <Section icon={ProjectsIcon} title="Why It Matters">
                <p className="text-sm text-purple-200/80">{project.whyItMatters}</p>
            </Section>

            <Section icon={ListIcon} title="Getting Started">
                <ol className="list-decimal list-inside space-y-2 text-sm text-purple-200/80">
                    {project.gettingStarted.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </Section>

            <Section icon={ToolboxIcon} title="Required Resources">
                <div className="flex flex-wrap gap-2">
                    {project.requiredResources.map(resource => (
                        <span key={resource} className="text-xs font-medium px-3 py-1.5 bg-purple-900/50 border border-purple-500/30 rounded-md text-purple-300">
                            {resource}
                        </span>
                    ))}
                </div>
            </Section>

             <Section icon={ActivitiesIcon} title="Potential Mentors">
                <div className="flex flex-wrap gap-2">
                    {project.potentialMentors.map(mentor => (
                        <span key={mentor} className="text-xs font-medium px-3 py-1.5 bg-indigo-900/50 border border-indigo-500/30 rounded-md text-indigo-300">
                            {mentor}
                        </span>
                    ))}
                </div>
            </Section>

            <Section icon={PresentationIcon} title="How to Showcase">
                 <p className="text-sm text-purple-200/80">{project.howToShowcase}</p>
            </Section>
        </div>
        <div className="sticky bottom-0 bg-gradient-to-t from-[#1A0E3B] to-transparent p-6 sm:p-8 pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button onClick={() => handleNavigate('Professors')} className="w-full sm:w-auto flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-purple-500/20 hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                Find a Mentor
            </button>
            <button onClick={() => handleNavigate('Email Guide')} className="w-full sm:w-auto flex-1 px-6 py-3 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg shadow-lg shadow-black/20 hover:bg-white/10 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/20">
                Email Templates
            </button>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white"/>
            </div>
            <h3 className="font-bold text-white">{title}</h3>
        </div>
        <div className="pl-11">
            {children}
        </div>
    </div>
);


export default ProjectDetailModal;
