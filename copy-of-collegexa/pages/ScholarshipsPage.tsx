import React, { useState, useMemo, useCallback, lazy, Suspense } from 'react';
import { ScholarshipsIcon } from '../components/icons/ScholarshipsIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import ScholarshipCard from '../components/ScholarshipCard';
import { Scholarship, allScholarships } from '../data/scholarshipsData';

const ScholarshipDetailModal = lazy(() => import('../components/ScholarshipDetailModal'));

const EFFORT_LEVELS = ['All Effort Level', 'Quick Apply', 'Medium Effort', 'In-Depth Portfolio'];
const FIELDS = ['All Field', 'STEM', 'Humanities', 'Arts', 'Business', 'Any'];

const ScholarshipsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [effortLevel, setEffortLevel] = useState('All Effort Level');
    const [field, setField] = useState('All Field');
    const [viewingScholarship, setViewingScholarship] = useState<Scholarship | null>(null);
    const [visibleCount, setVisibleCount] = useState(15);

    const filteredSortedScholarships = useMemo(() => {
        const now = new Date().setHours(0, 0, 0, 0);
        const searchLower = searchTerm.toLowerCase();

        return allScholarships
            .filter(s => {
                const matchesSearch = s.title.toLowerCase().includes(searchLower);
                const matchesEffort = effortLevel === 'All Effort Level' || s.effort === effortLevel;
                const matchesField = field === 'All Field' || s.field === field;
                return matchesSearch && matchesEffort && matchesField;
            })
            .sort((a, b) => {
                const timeA = new Date(a.deadline).getTime();
                const timeB = new Date(b.deadline).getTime();
                const isExpA = timeA < now;
                const isExpB = timeB < now;
                if (!isExpA && isExpB) return -1;
                if (isExpA && !isExpB) return 1;
                return timeB - timeA;
            });
    }, [searchTerm, effortLevel, field]);

    const stats = useMemo(() => {
        const total = filteredSortedScholarships.reduce((sum, s) => sum + s.amount, 0);
        let amountStr = total.toLocaleString();
        if (total >= 1e9) amountStr = `${(total / 1e9).toFixed(1)}B`;
        else if (total >= 1e6) amountStr = `${(total / 1e6).toFixed(1)}M`;
        else if (total >= 1e3) amountStr = `${Math.floor(total / 1e3)}K+`;

        return {
            count: filteredSortedScholarships.length,
            amount: amountStr,
            quick: filteredSortedScholarships.filter(s => s.effort === 'Quick Apply').length
        };
    }, [filteredSortedScholarships]);

    const handleViewMore = useCallback((s: Scholarship) => setViewingScholarship(s), []);
    const handleLoadMore = useCallback(() => setVisibleCount(p => p + 15), []);
    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setVisibleCount(15);
    }, []);

    return (
        <div className="container mx-auto px-4 py-12 sm:py-16 max-w-7xl">
            <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/20">
                    <ScholarshipsIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">Scholarship <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Vault</span></h1>
                    <p className="text-purple-200/60 font-medium">Curated opportunities for high-achieving students</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
                <div className="lg:col-span-2 relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" placeholder="Search by name..." value={searchTerm} onChange={handleSearch} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"/>
                </div>
                <select value={effortLevel} onChange={e => {setEffortLevel(e.target.value); setVisibleCount(15);}} className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40 appearance-none">
                    {EFFORT_LEVELS.map(o => <option key={o} value={o} className="bg-[#030712]">{o}</option>)}
                </select>
                <select value={field} onChange={e => {setField(e.target.value); setVisibleCount(15);}} className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/40 appearance-none">
                    {FIELDS.map(o => <option key={o} value={o} className="bg-[#030712]">{o}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12 shadow-xl">
                <div className="text-center md:border-r border-white/5">
                    <p className="text-2xl font-black text-white">{stats.count}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300/50">Opportunities</p>
                </div>
                <div className="text-center md:border-r border-white/5">
                    <p className="text-2xl font-black text-cyan-400">${stats.amount}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300/50">Total Value</p>
                </div>
                <div className="text-center md:border-r border-white/5">
                    <p className="text-2xl font-black text-purple-400">{stats.quick}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300/50">Quick Apply</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-black text-green-400">Daily</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-purple-300/50">Updates</p>
                </div>
            </div>
            
            <div className="space-y-6">
                {filteredSortedScholarships.length > 0 ? (
                    filteredSortedScholarships.slice(0, visibleCount).map((s) => (
                        <ScholarshipCard key={s.title} {...s} onViewMore={handleViewMore} />
                    ))
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <p className="text-xl text-purple-200/40 font-bold">No results match your filters.</p>
                    </div>
                )}
            </div>

            {visibleCount < filteredSortedScholarships.length && (
                <div className="flex justify-center mt-12">
                    <button onClick={handleLoadMore} className="group relative px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-purple-300 font-black uppercase tracking-widest hover:bg-purple-600/10 hover:border-purple-500/40 transition-all active:scale-95 overflow-hidden">
                        <span className="relative z-10">Discover More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </div>
            )}

            <Suspense fallback={null}>
                {viewingScholarship && <ScholarshipDetailModal scholarship={viewingScholarship} onClose={() => setViewingScholarship(null)} />}
            </Suspense>
        </div>
    );
};

export default React.memo(ScholarshipsPage);
