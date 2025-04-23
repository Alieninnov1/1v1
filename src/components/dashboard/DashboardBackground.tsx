
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
    
    // Simulate loading delay for visual effect
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Reduced particle count on mobile
  const particleCount = isMobile ? 10 : 20;
  const gridSize = isMobile ? "60px 60px" : "100px 100px";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - brutalist style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151823] to-[#1d2235]" />
      
      {/* Bold grid pattern - brutalist design */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, #5E2CA5 1px, transparent 1px), linear-gradient(to bottom, #5E2CA5 1px, transparent 1px)",
          backgroundSize: gridSize
        }}
      />
      
      {/* Bold accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-purple-700" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-indigo-700" />
      <div className="absolute top-0 left-1/3 h-full w-1 bg-purple-700/20" />
      <div className="absolute top-0 right-1/3 h-full w-1 bg-indigo-700/20" />
      
      {/* Geometric shapes for brutalist effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.15 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-40 h-40 bg-purple-800 transform rotate-45"
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.15 : 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-40 right-10 w-60 h-60 bg-blue-800 transform -rotate-12"
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 0.2 : 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute top-1/3 right-1/4 w-28 h-28 border-4 border-purple-500 transform rotate-12"
      />

      {/* Static starfield effect - optimized for performance */}
      {!isReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.7 + 0.3 }}
              transition={{ duration: 1, delay: Math.random() * 2 }}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Brutalist overlay patterns */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
};

export default DashboardBackground;
