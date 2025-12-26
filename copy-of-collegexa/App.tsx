
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import ProfessorsPage from './pages/ProfessorsPage';
import EmailGuidePage from './pages/EmailGuidePage';
import BlogPage from './pages/BlogPage';
import EssayEditorPage from './pages/EssayEditorPage';
import ArticlePage from './pages/ArticlePage';
import { Article } from './data/articlesData';

interface AppProps {
  onNavigate: (page: string) => void;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [viewingArticle, setViewingArticle] = useState<Article | null>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setViewingArticle(null); // Clear article view when navigating to a new page
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  const viewArticle = (article: Article) => {
    setViewingArticle(article);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    const handleNavigate = (event: CustomEvent<string>) => {
      navigateTo(event.detail);
    };

    window.addEventListener('navigateTo', handleNavigate as EventListener);

    return () => {
      window.removeEventListener('navigateTo', handleNavigate as EventListener);
    };
  }, []);

  if (viewingArticle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header activePage="Blog" onNavigate={navigateTo} />
        <main className="flex-grow">
          <ArticlePage article={viewingArticle} onBack={() => setViewingArticle(null)} />
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={navigateTo} />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Activities':
        return <ActivitiesPage />;
      case 'Scholarships':
        return <ScholarshipsPage />;
      case 'Professors':
        return <ProfessorsPage />;
      case 'Email Guide':
        return <EmailGuidePage />;
      case 'Essay Editor':
        return <EssayEditorPage />;
      case 'Blog':
        return <BlogPage onViewArticle={viewArticle} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
