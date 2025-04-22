
import { motion } from "framer-motion";
import { useEffect, useState, useCallback, memo } from "react";

/**
 * Background component with optimized animations and prefers-reduced-motion support
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

  // Memoize particles to prevent unnecessary re-renders
  const renderParticles = useCallback(() => {
    if (isReducedMotion || !mounted) return null;
    
    return (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white/5"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              opacity: Math.random() * 0.3,
              willChange: 'transform'
            }}
          />
        ))}
      </>
    );
  }, [isReducedMotion, mounted]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151823] to-[#1d2235] opacity-50" />
      
      {/* Optimized particles with reduced quantity for better performance */}
      {renderParticles()}
      
      {/* Subtle mesh pattern overlay with will-change optimization */}
      <div 
        className="absolute inset-0 opacity-5 bg-mesh-pattern"
        style={{ willChange: 'opacity' }}
      />
    </div>
  );
};

// Memoize the entire component to prevent unnecessary re-renders
export default memo(PageBackground);
