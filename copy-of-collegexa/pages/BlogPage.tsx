
import React, { useState, useMemo } from 'react';
import { BlogIcon } from '../components/icons/BlogIcon';
import { SearchIcon } from '../components/icons/SearchIcon';
import { WeeklyUpdatesIcon } from '../components/icons/WeeklyUpdatesIcon';
import ArticleCard from '../components/ArticleCard';
import { allArticles, Article } from '../data/articlesData';

const categories = ['All', 'Application Tips', 'Financial Aid', 'Extracurriculars', 'Life in High School', 'Test Prep', 'Essays'];

interface BlogPageProps {
    onViewArticle: (article: Article) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onViewArticle }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = useMemo(() => {
        const filtered = allArticles.filter(article => {
            const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
            const matchesSearch = searchTerm === '' || article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Sort by Date Descending (Most recent at the top)
        return filtered.sort((a, b) => {
            return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        });
    }, [activeCategory, searchTerm]);

    const featuredArticle = useMemo(() => {
        if (activeCategory === 'All' && searchTerm === '') {
            // Find the most recent featured article
            return filteredArticles.find(a => a.isFeatured);
        }
        return undefined;
    }, [filteredArticles, activeCategory, searchTerm]);

    const standardArticles = useMemo(() => {
        if (featuredArticle) {
            return filteredArticles.filter(a => a.title !== featuredArticle.title);
        }
        return filteredArticles;
    }, [filteredArticles, featuredArticle]);

    return (
        <div className="container mx-auto px-4 py-12 sm:py-16">
            {/* Page Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    <BlogIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                        Resource{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.5)]">
                            Library
                        </span>
                    </h1>
                    <p className="text-purple-200/70">Expert guides and actionable advice</p>
                </div>
            </div>

            {/* Filters */}
            <div className="space-y-6 mb-8">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1A0E3B]/50 border border-purple-500/30 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_10px_rgba(192,38,211,0.5)]'
                                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 mb-10 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300">
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{filteredArticles.length}</p>
                    <p className="text-xs text-purple-200/60">Articles</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{new Set(allArticles.map(a => a.category)).size}</p>
                    <p className="text-xs text-purple-200/60">Categories</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">100%</p>
                    <p className="text-xs text-purple-200/60">Free</p>
                </div>
                <div className="text-center">
                    <WeeklyUpdatesIcon className="w-7 h-7 mx-auto text-cyan-400 mb-1 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"/>
                    <p className="text-xs text-purple-200/60">Weekly Updates</p>
                </div>
            </div>
            
            {/* Articles */}
            <div className="space-y-8">
                {filteredArticles.length > 0 ? (
                    <>
                        {featuredArticle && (
                            <ArticleCard article={featuredArticle} onReadArticle={onViewArticle} />
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {standardArticles.map((article) => (
                                <ArticleCard key={article.title} article={article} onReadArticle={onViewArticle} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-xl text-purple-200/70">No articles match your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
