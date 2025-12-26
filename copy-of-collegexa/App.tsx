import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load pages to optimize initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const ScholarshipsPage = lazy(() => import('./pages/ScholarshipsPage'));
const ProfessorsPage = lazy(() => import('./pages/ProfessorsPage'));
const EmailGuidePage = lazy(() => import('./pages/EmailGuidePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const EssayEditorPage = lazy(() => import('./pages/EssayEditorPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] w-full">
    <span className="loader"></span>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');
  const [viewingArticle, setViewingArticle] = useState<any>(null);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setViewingArticle(null);
    window.scrollTo(0, 0);
  };
  
  const viewArticle = (article: any) => {
    setViewingArticle(article);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleNavigate = (event: CustomEvent<string>) => navigateTo(event.detail);
    window.addEventListener('navigateTo', handleNavigate as EventListener);
    return () => window.removeEventListener('navigateTo', handleNavigate as EventListener);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage={viewingArticle ? "Blog" : currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {viewingArticle ? (
            <ArticlePage article={viewingArticle} onBack={() => setViewingArticle(null)} />
          ) : (
            <>
              {currentPage === 'Home' && <HomePage onNavigate={navigateTo} />}
              {currentPage === 'Projects' && <ProjectsPage />}
              {currentPage === 'Activities' && <ActivitiesPage />}
              {currentPage === 'Scholarships' && <ScholarshipsPage />}
              {currentPage === 'Professors' && <ProfessorsPage />}
              {currentPage === 'Email Guide' && <EmailGuidePage />}
              {currentPage === 'Essay Editor' && <EssayEditorPage />}
              {currentPage === 'Blog' && <BlogPage onViewArticle={viewArticle} />}
            </>
          )}
        </Suspense>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
