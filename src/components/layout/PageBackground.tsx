
import { useEffect, useState, memo } from "react";

/**
 * Brutalist 3D background component 
 */
const PageBackground = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Setup reduced motion check
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    setMounted(true);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Harsh gradient background - brutalist style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151823] via-[#1d2235] to-[#191c2a]" />
      
      {/* Bold grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, #5E2CA5 1px, transparent 1px), linear-gradient(to bottom, #5E2CA5 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />
      
      {/* Geometric shapes for brutalist effect */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-purple-800/10 rotate-45 transform-gpu" />
      <div className="absolute bottom-40 right-20 w-60 h-60 bg-blue-800/10 -rotate-12 transform-gpu" />
      <div className="absolute top-1/2 left-1/4 w-28 h-28 border-4 border-purple-500/10 rotate-12 transform-gpu" />
      
      {/* Static starfield effect with reduced number on mobile */}
      {!isReducedMotion && mounted && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      )}
      
      {/* Brutalist accent lines */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-purple-500/20" />
      <div className="absolute top-3/4 left-0 w-full h-2 bg-blue-500/20" />
      <div className="absolute top-0 left-1/3 h-full w-1 bg-indigo-500/10" />
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders
export default memo(PageBackground);
