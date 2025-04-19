
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageBackground = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151823] to-[#1d2235] opacity-50"></div>
      
      {/* Optimized particles with reduced blur effect */}
      {!isReducedMotion && (
        <>
          {Array.from({ length: 15 }).map((_, i) => (
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
                ease: "linear"
              }}
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                opacity: Math.random() * 0.3
              }}
            />
          ))}
        </>
      )}
      
      {/* Subtle mesh pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-mesh-pattern"></div>
    </div>
  );
};

export default PageBackground;
