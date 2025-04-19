
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface XPBackgroundProps {
  children: ReactNode;
}

const XPBackground = ({ children }: XPBackgroundProps) => {
  const isMobile = useIsMobile();
  const [showStartupSound, setShowStartupSound] = useState(false);
  
  useEffect(() => {
    // Show startup sound notification briefly
    setShowStartupSound(true);
    const timer = setTimeout(() => {
      setShowStartupSound(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="xp-desktop min-h-screen overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              x: [0, Math.random() * 30 - 15, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: isMobile ? '20px 20px' : '40px 40px'
        }}></div>
        
        {/* Light effects */}
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        
        {/* CRT Screen effect overlay */}
        <div className="absolute inset-0 pointer-events-none crt-effect opacity-30"></div>
      </div>

      {/* Startup sound notification */}
      {showStartupSound && (
        <motion.div 
          className="xp-notification flex items-center gap-2"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-blue-100 p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold">Windows XP</div>
            <div className="text-xs">Welcome to HelixHub</div>
          </div>
        </motion.div>
      )}
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default XPBackground;
