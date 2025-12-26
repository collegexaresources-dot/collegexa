
import React, { useState, useMemo } from 'react';
import { ProjectsIcon } from '../components/icons/ProjectsIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import { InfinityIcon } from '../components/icons/InfinityIcon';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { allProjects, Project } from '../data/projectsData';
import { moreProjects } from '../data/moreProjectsData';
import { projectsDataTwo } from '../data/projectsDataTwo';

const combinedProjects = [...allProjects, ...moreProjects, ...projectsDataTwo];
const categories = ['All', ...new Set(combinedProjects.map(p => p.category))];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const timeCommitments = ['All', 'Low', 'Medium', 'High'];

const ProjectsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [difficulty, setDifficulty] = useState('All');
    const [timeCommitment, setTimeCommitment] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredProjects = useMemo(() => {
        return combinedProjects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category === 'All' || project.category === category;
            const matchesDifficulty = difficulty === 'All' || project.difficulty === difficulty;
            const matchesTime = timeCommitment === 'All' || project.time === timeCommitment;
            return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
        });
    }, [searchTerm, category, difficulty, timeCommitment]);
    
    const handleExploreClick = (project: Project) => {
      setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 20);
    };

  return (
    <>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            <ProjectsIcon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Passion{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                Projects
              </span>
            </h1>
            <p className="text-purple-200/70">Find your spark and start building</p>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by title or idea..."
              value={searchTerm}
              onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(20);
              }}
              className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select value={category} onChange={e => {setCategory(e.target.value); setVisibleCount(20);}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
              {categories.map(c => <option key={c} value={c}>{c === 'All' ? 'Category' : c}</option>)}
            </select>
            <select value={difficulty} onChange={e => {setDifficulty(e.target.value); setVisibleCount(20);}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
              {difficulties.map(d => <option key={d} value={d}>{d === 'All' ? 'Difficulty' : d}</option>)}
            </select>
            <select value={timeCommitment} onChange={e => {setTimeCommitment(e.target.value); setVisibleCount(20);}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
              {timeCommitments.map(t => <option key={t} value={t}>{t === 'All' ? 'Time Commitment' : t}</option>)}
            </select>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 mb-10 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300">
          <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{filteredProjects.length}</p>
              <p className="text-xs text-purple-200/60">Available Projects</p>
          </div>
          <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{categories.length - 1}</p>
              <p className="text-xs text-purple-200/60">Categories</p>
          </div>
          <div className="text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">100%</p>
              <p className="text-xs text-purple-200/60">Free Resources</p>
          </div>
          <div className="text-center">
              <InfinityIcon className="w-7 h-7 mx-auto text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.6)]"/>
              <p className="text-xs text-purple-200/60">Possibilities</p>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} {...project} onExplore={() => handleExploreClick(project)} />
          ))}
          {filteredProjects.length === 0 && (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                  <p className="text-xl text-purple-200/70">No projects match your criteria.</p>
              </div>
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
            <div className="flex justify-center mt-8">
                <button 
                    onClick={handleLoadMore}
                    className="px-8 py-3 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 font-bold uppercase tracking-widest hover:bg-purple-600/40 hover:border-purple-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                >
                    Load More Projects
                </button>
            </div>
        )}

      </div>
      {selectedProject && <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />}
    </>
  );
};

export default ProjectsPage;
