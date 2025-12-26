
import React, { useState, useMemo } from 'react';
import { ScholarshipsIcon } from '../components/icons/ScholarshipsIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import ScholarshipCard from '../components/ScholarshipCard';
import { Scholarship, allScholarships } from '../data/scholarshipsData';
import ScholarshipDetailModal from '../components/ScholarshipDetailModal';

const effortLevelOptions = ['All Effort Level', 'Quick Apply', 'Medium Effort', 'In-Depth Portfolio'];
const fieldOptions = ['All Field', 'STEM', 'Humanities', 'Arts', 'Business', 'Any'];

const ScholarshipsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [effortLevel, setEffortLevel] = useState('All Effort Level');
    const [field, setField] = useState('All Field');
    const [viewingScholarship, setViewingScholarship] = useState<Scholarship | null>(null);
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredScholarships = useMemo(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize to start of day for comparison

        const filtered = allScholarships.filter(scholarship => {
            const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesEffort = effortLevel === 'All Effort Level' || scholarship.effort === effortLevel;
            const matchesField = field === 'All Field' || scholarship.field === field;
            return matchesSearch && matchesEffort && matchesField;
        });

        // Sorting Logic:
        // 1. Valid (Future) deadlines vs Expired (Past) deadlines.
        // 2. Future deadlines: Sorted DESCENDING (Latest/Furthest at top).
        // 3. Expired deadlines: At the very bottom.
        return filtered.sort((a, b) => {
            const dateA = new Date(a.deadline);
            const dateB = new Date(b.deadline);
            const isExpiredA = dateA < now;
            const isExpiredB = dateB < now;

            // Rule: Active scholarships always come before expired ones
            if (!isExpiredA && isExpiredB) return -1;
            if (isExpiredA && !isExpiredB) return 1;

            // If both are in the same state (both active or both expired),
            // sort by date descending (Furthest/Latest at top)
            return dateB.getTime() - dateA.getTime();
        });
    }, [searchTerm, effortLevel, field]);

    const totalAvailable = useMemo(() => {
        const total = filteredScholarships.reduce((sum, s) => sum + s.amount, 0);
        
        // Convert to Billions if >= 1,000,000,000
        if (total >= 1_000_000_000) {
            return `${(total / 1_000_000_000).toFixed(1)} Billion`;
        }
        // Convert to Millions if >= 1,000,000
        if (total >= 1_000_000) {
            return `${(total / 1_000_000).toFixed(1)} Million`;
        }
        // Fallback to K or raw total
        if (total >= 1_000) {
            return `${Math.floor(total / 1_000)}K+`;
        }
        return `${total}`;
    }, [filteredScholarships]);

    const quickApplyCount = useMemo(() => {
        return filteredScholarships.filter(s => s.effort === 'Quick Apply').length;
    }, [filteredScholarships]);

    const handleViewMore = (scholarship: Scholarship) => {
        setViewingScholarship(scholarship);
    };

    const handleCloseModal = () => {
        setViewingScholarship(null);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 20);
    };

    const resetPagination = () => setVisibleCount(20);

    return (
        <>
            <div className="container mx-auto px-4 py-12 sm:py-16">
                {/* Page Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                        <ScholarshipsIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                            Scholarship{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                                Database
                            </span>
                        </h1>
                        <p className="text-purple-200/70">Your path to free college funding</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-4 mb-8">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search scholarships..."
                            value={searchTerm}
                            onChange={(e) => {setSearchTerm(e.target.value); resetPagination();}}
                            className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select value={effortLevel} onChange={e => {setEffortLevel(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                            {effortLevelOptions.map(o => <option key={o} value={o}>{o === 'All Effort Level' ? 'Effort Level' : o}</option>)}
                        </select>
                        <select value={field} onChange={e => {setField(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                            {fieldOptions.map(o => <option key={o} value={o}>{o === 'All Field' ? 'Field' : o}</option>)}
                        </select>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 mb-10 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300">
                    <div className="text-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{filteredScholarships.length}</p>
                        <p className="text-xs text-purple-200/60">Scholarships</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">${totalAvailable}</p>
                        <p className="text-xs text-purple-200/60">Total Available</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{quickApplyCount}</p>
                        <p className="text-xs text-purple-200/60">Quick Apply</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Daily</p>
                        <p className="text-xs text-purple-200/60">New Additions</p>
                    </div>
                </div>
                
                {/* Scholarships List */}
                <div className="space-y-8 mb-12">
                    {filteredScholarships.length > 0 ? (
                        filteredScholarships.slice(0, visibleCount).map((scholarship) => (
                            <ScholarshipCard key={scholarship.title} {...scholarship} onViewMore={handleViewMore} />
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-xl text-purple-200/70">No scholarships match your criteria.</p>
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredScholarships.length && (
                    <div className="flex justify-center mt-8">
                        <button 
                            onClick={handleLoadMore}
                            className="px-8 py-3 rounded-full bg-green-600/20 border border-green-500/30 text-green-300 font-bold uppercase tracking-widest hover:bg-green-600/40 hover:border-green-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                        >
                            Load More Scholarships
                        </button>
                    </div>
                )}
            </div>
            {viewingScholarship && <ScholarshipDetailModal scholarship={viewingScholarship} onClose={handleCloseModal} />}
        </>
    );
};

export default ScholarshipsPage;
