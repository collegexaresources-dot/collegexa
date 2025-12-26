
import React, { useState, useMemo } from 'react';
import { ActivitiesIcon } from '../components/icons/ActivitiesIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import ActivityCard from '../components/ActivityCard';
import { allActivities } from '../data/activitiesData';
import { moreActivities } from '../data/activitiesDataTwo';

const combinedActivities = [...allActivities, ...moreActivities];
const typeOptions = ['All Type', 'Club', 'Sport', 'Internship', 'Summer Program', 'Volunteering', 'Competition', 'Other'];
const timeOptions = ['All Time', 'Low', 'Medium', 'High', 'Summer-Only', 'School Year'];
const costOptions = ['All Cost', 'Free', 'Low', 'Medium', 'High', 'Financial Aid Available'];
const competitivenessOptions = ['All Competitiveness', 'Easy to Join','Moderate', 'Selective', 'Highly Selective'];
const locationOptions = ['All Location', 'In-Person', 'Virtual', 'Hybrid'];

const ActivitiesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState('All Type');
    const [time, setTime] = useState('All Time');
    const [cost, setCost] = useState('All Cost');
    const [competitiveness, setCompetitiveness] = useState('All Competitiveness');
    const [location, setLocation] = useState('All Location');
    const [visibleCount, setVisibleCount] = useState(20);

    const filteredActivities = useMemo(() => {
        return combinedActivities.filter(activity => {
            const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = type === 'All Type' || activity.type === type;
            const matchesTime = time === 'All Time' || activity.time === time || (time === 'Summer-Only' && activity.timeDetails === 'Summer-only');
            const matchesCost = cost === 'All Cost' || activity.cost === cost;
            const matchesCompetitiveness = competitiveness === 'All Competitiveness' || activity.competitiveness === competitiveness;
            const matchesLocation = location === 'All Location' || activity.location === location;
            return matchesSearch && matchesType && matchesTime && matchesCost && matchesCompetitiveness && matchesLocation;
        });
    }, [searchTerm, type, time, cost, competitiveness, location]);
    
    const activityTypesCount = useMemo(() => new Set(filteredActivities.map(a => a.type)).size, [filteredActivities]);
    const freeOptionsCount = useMemo(() => filteredActivities.filter(a => a.cost === 'Free').length, [filteredActivities]);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 20);
    };

    const resetPagination = () => setVisibleCount(20);

    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            {/* Page Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <ActivitiesIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        Extracurricular{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                            Activities
                        </span>
                    </h1>
                    <p className="text-purple-200/70">Find your perfect activity match</p>
                </div>
            </div>

            {/* Filters */}
            <div className="space-y-4 mb-8">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search activities..."
                        value={searchTerm}
                        onChange={(e) => {setSearchTerm(e.target.value); resetPagination();}}
                        className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     <select value={type} onChange={e => {setType(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {typeOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <select value={time} onChange={e => {setTime(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {timeOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                     <select value={cost} onChange={e => {setCost(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {costOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <select value={competitiveness} onChange={e => {setCompetitiveness(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {competitivenessOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <select value={location} onChange={e => {setLocation(e.target.value); resetPagination();}} className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none">
                        {locationOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 mb-10 shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300">
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{filteredActivities.length}</p>
                    <p className="text-xs text-purple-200/60">Activities Found</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{activityTypesCount}</p>
                    <p className="text-xs text-purple-200/60">Activity Types</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{freeOptionsCount > 0 ? `${freeOptionsCount}+` : '0'}</p>
                    <p className="text-xs text-purple-200/60">Free Options</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">100%</p>
                    <p className="text-xs text-purple-200/60">Verified</p>
                </div>
            </div>
            
            {/* Activities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredActivities.length > 0 ? (
                    filteredActivities.slice(0, visibleCount).map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))
                ) : (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                        <p className="text-xl text-purple-200/70">No activities match your criteria.</p>
                    </div>
                )}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredActivities.length && (
                <div className="flex justify-center mt-8">
                    <button 
                        onClick={handleLoadMore}
                        className="px-8 py-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold uppercase tracking-widest hover:bg-blue-600/40 hover:border-blue-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                    >
                        Load More Activities
                    </button>
                </div>
            )}
        </div>
    );
};

export default ActivitiesPage;
