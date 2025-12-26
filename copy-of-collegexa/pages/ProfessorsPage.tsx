
import React, { useState, useMemo } from 'react';
import { ProfessorsIcon } from '../components/icons/ProfessorsIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import ProfessorCard from '../components/ProfessorCard';
import { allProfessors } from '../data/professorsData';

const fieldOptions = ['All Fields', 'Computer Science', 'Engineering', 'Chemistry', 'Biology', 'Biomedical Engineering', 'Bioengineering', 'Behavioral Ecology', 'Humanities', 'Astronomy', 'Robotics', 'Evolution', 'Neurology', 'Machine Learning', 'Physics', 'Psychology', 'History'];

const ProfessorsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [field, setField] = useState('All Fields');
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredProfessors = useMemo(() => {
        return allProfessors.filter(prof => {
            // Fixed property access: researchFocus does not exist on ProfessorCardProps
            // Using field and researchBullets to perform search instead
            const matchesSearch =
                prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prof.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prof.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
                prof.researchBullets.some(bullet => bullet.toLowerCase().includes(searchTerm.toLowerCase())) ||
                prof.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
            
            const matchesField = field === 'All Fields' || prof.field === field;

            return matchesSearch && matchesField;
        });
    }, [searchTerm, field]);

    const stats = useMemo(() => {
        const universities = new Set(filteredProfessors.map(p => p.university));
        const researchFields = new Set(filteredProfessors.map(p => p.field));
        return {
            professors: filteredProfessors.length,
            universities: universities.size,
            researchFields: researchFields.size,
        };
    }, [filteredProfessors]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 20);
    };

    const resetPagination = () => setVisibleCount(20);

    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            {/* Page Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    <ProfessorsIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        Research{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                            Mentors
                        </span>
                    </h1>
                    <p className="text-purple-200/70">Connect with leading professors</p>
                </div>
            </div>

            {/* Filters */}
            <div className="space-y-4 mb-8">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name, university, or research area..."
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value); resetPagination();}}
                        className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="max-w-xs">
                    <select value={field} onChange={e => {setField(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {fieldOptions.map(o => <option key={o} value={o}>{o === 'All Fields' ? 'Field' : o}</option>)}
                    </select>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 mb-10 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300">
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{stats.professors}</p>
                    <p className="text-xs text-purple-200/60">Professors</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stats.universities > 50 ? '50+' : stats.universities}</p>
                    <p className="text-xs text-purple-200/60">Universities</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">100%</p>
                    <p className="text-xs text-purple-200/60">Verified Labs</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stats.researchFields}</p>
                    <p className="text-xs text-purple-200/60">Research Fields</p>
                </div>
            </div>
            
            {/* Mentors Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {filteredProfessors.length > 0 ? (
                    filteredProfessors.slice(0, visibleCount).map((prof) => (
                        <ProfessorCard key={prof.name} {...prof} />
                    ))
                ) : (
                    <div className="lg:col-span-2 text-center py-12">
                        <p className="text-xl text-purple-200/70">No professors match your criteria.</p>
                    </div>
                )}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProfessors.length && (
                <div className="flex justify-center mt-8 mb-12">
                    <button 
                        onClick={handleLoadMore}
                        className="px-8 py-3 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300 font-bold uppercase tracking-widest hover:bg-purple-600/40 hover:border-purple-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    >
                        Load More Mentors
                    </button>
                </div>
            )}

            <div className="mt-12 text-center">
                <p className="text-[10px] text-purple-200/30 italic">
                    Information about faculty and research is publicly available and provided here for informational purposes only.
                </p>
            </div>
        </div>
    );
};

export default ProfessorsPage;
