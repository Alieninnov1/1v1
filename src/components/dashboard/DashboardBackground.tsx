
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
  const particleCount = isMobile ? 25 : 50;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - optimized */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-800/20 to-blue-900/30 animate-gradient" />
      
      {/* Nebula effect with reduced opacity and blur */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.5 : 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/15 via-purple-400/5 to-transparent"
        style={{ backdropFilter: "none" }}
      />
      
      {/* Animated wave effects - only when not reduced motion */}
      {!isReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(2)].map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 0.15 : 0, y: 0 }}
              transition={{ duration: 2, delay: i * 0.5 }}
              className="absolute inset-0 opacity-15 mix-blend-overlay" 
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 1000 Q 250 750 500 1000 T 1000 1000 L 1000 0 L 0 0 Z' fill='%23fff'/%3E%3C/svg%3E\")",
                backgroundSize: "100% 100%",
                animation: `wave ${15 + i * 5}s linear infinite`,
                animationDelay: `${i * -5}s`
              }}
            />
          ))}
        </div>
      )}
      
      {/* Optimized starfield effect - reduced number on mobile */}
      {!isReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: Math.random() * 0.5 + 0.1 
              }}
              transition={{ 
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                willChange: "opacity"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardBackground;
