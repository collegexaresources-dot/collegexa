
import React from 'react';
import { Article } from '../data/articlesData';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import { ReadTimeIcon } from '../components/icons/ReadTimeIcon';
import { BlogIcon } from '../components/icons/BlogIcon';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 article-font">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-purple-300/80 hover:text-white transition-colors mb-8 group">
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Blog</span>
        </button>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-xs">
                <span className="px-2.5 py-1 rounded-full border border-cyan-400/50 text-cyan-300 bg-cyan-900/50">
                {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-purple-200/60">
                    <ReadTimeIcon className="w-3.5 h-3.5" />
                    <span>{article.readTime} min read</span>
                </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white">
                    {article.author.charAt(0)}
                </div>
                <div>
                    <p className="font-semibold text-white">{article.author}</p>
                    <p className="text-sm text-purple-200/70">{article.authorRole}</p>
                    <p className="text-xs text-purple-200/50 mt-1">{article.publishedDate}</p>
                </div>
            </div>
          </header>

          <div className={`w-full h-64 rounded-2xl ${article.imageBg} flex items-center justify-center mb-8 border border-purple-500/20`}>
            <BlogIcon className="w-20 h-20 text-white/40" />
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-purple-200/80 prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white">
            {article.content.map((paragraph, index) => (
              <p key={index} className="!mb-8 leading-loose">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
