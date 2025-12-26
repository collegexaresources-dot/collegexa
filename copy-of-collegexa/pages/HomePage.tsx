import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import LazySection from '../components/LazySection';

// Individual section lazy loading
const Stats = lazy(() => import('../components/Stats'));
const Features = lazy(() => import('../components/Features'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CTA = lazy(() => import('../components/CTA'));

const SectionLoader = () => <div className="h-20 w-full flex items-center justify-center opacity-20"><span className="loader scale-50"></span></div>;

const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => {
  return (
    <>
      {/* Hero is critical, load immediately */}
      <Hero onNavigate={onNavigate} />
      
      {/* Deferred sections */}
      <LazySection minHeight="300px">
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
      </LazySection>

      <LazySection minHeight="600px">
        <Suspense fallback={<SectionLoader />}>
          <Features onNavigate={onNavigate} />
        </Suspense>
      </LazySection>

      <LazySection minHeight="400px">
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
      </LazySection>

      <LazySection minHeight="300px">
        <Suspense fallback={<SectionLoader />}>
          <CTA onNavigate={onNavigate} />
        </Suspense>
      </LazySection>
    </>
  );
};

export default React.memo(HomePage);
