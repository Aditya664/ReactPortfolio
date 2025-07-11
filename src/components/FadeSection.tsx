import React, { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface FadeSectionProps {
  children: ReactNode;
}

const FadeSection: React.FC<FadeSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-section${visible ? ' visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeSection; 