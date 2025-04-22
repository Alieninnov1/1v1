
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardBackground = () => {
  const [loaded, setLoaded] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Simulate loading delay for nebula effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Reduce particle count on mobile
  const particleCount = isMobile ? 15 : 30;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-800/10 to-blue-900/20" />
      
      {/* Static nebula effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.3 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-purple-400/5 to-transparent"
      />
      
      {/* Static starfield effect - reduced number on mobile */}
      {!isReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardBackground;
