
import React from 'react';
import { BlogIcon } from './icons/BlogIcon';
import { ReadTimeIcon } from './icons/ReadTimeIcon';
import { Article } from '../data/articlesData';

interface ArticleCardProps {
  article: Article;
  onReadArticle: (article: Article) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadArticle }) => {
  const { title, description, readTime, category, imageBg, isFeatured } = article;

  const handleReadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onReadArticle(article);
  };

  if (isFeatured) {
    return (
      <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/60 flex flex-col md:flex-row group">
        <div className={`w-full md:w-5/12 ${imageBg} flex items-center justify-center p-8 min-h-[200px] md:min-h-0`}>
          <BlogIcon className="w-16 h-16 text-white/50 drop-shadow-lg" />
        </div>
        <div className="w-full md:w-7/12 p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-purple-400/50 text-purple-300 bg-purple-900/30 shadow-[0_0_5px_rgba(168,85,247,0.2)]">
              Featured Article
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{title}</h2>
          <p className="text-purple-200/70 text-sm mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap items-center gap-4 mb-4 text-xs">
            <div className="flex items-center gap-1.5 text-purple-200/60">
              <ReadTimeIcon className="w-3.5 h-3.5" />
              <span>{readTime} min read</span>
            </div>
            <span className="px-2.5 py-1 rounded-full border border-cyan-400/30 text-cyan-300 bg-cyan-900/30">
              {category}
            </span>
          </div>
          <button onClick={handleReadClick} className="flex items-center gap-1.5 text-cyan-400 font-semibold text-sm mt-auto self-start group-hover:text-cyan-300 transition-colors shadow-cyan-500/20">
            Read Full Article
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#13111C]/60 backdrop-blur-md border border-purple-500/30 rounded-2xl overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-2 shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:border-purple-500/60 flex flex-col group">
      <div className={`w-full h-40 ${imageBg} flex items-center justify-center relative`}>
        <BlogIcon className="w-12 h-12 text-white/50 drop-shadow-lg" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-medium px-2.5 py-1 mb-3 rounded-full border border-purple-400/50 text-purple-300 bg-purple-900/30 self-start shadow-[0_0_5px_rgba(168,85,247,0.2)]">
          {category}
        </span>
        <h3 className="text-lg font-bold text-white mb-2 flex-grow group-hover:text-purple-300 transition-colors line-clamp-2">{title}</h3>
        <p className="text-purple-200/70 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-purple-500/10">
          <div className="flex items-center gap-1.5 text-xs text-purple-200/60">
            <ReadTimeIcon className="w-3.5 h-3.5" />
            <span>{readTime} min read</span>
          </div>
          <button onClick={handleReadClick} className="flex items-center gap-1.5 text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
            Read More
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
