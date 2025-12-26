import React, { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  offset?: string;
  minHeight?: string;
}

const LazySection: React.FC<LazySectionProps> = ({ children, offset = "200px", minHeight = "200px" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: offset }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [offset]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
};

export default React.memo(LazySection);
