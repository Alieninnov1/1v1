
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  targetId?: string;
  className?: string;
}

export function ScrollIndicator({ targetId = "features", className = "" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator after user has scrolled a bit
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 1.5,
        duration: 0.5,
        y: { 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-white/70 hover:text-white/90 transition-colors">
        <span className="text-xs font-medium mb-2">Scroll to explore</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </motion.div>
  );
}
