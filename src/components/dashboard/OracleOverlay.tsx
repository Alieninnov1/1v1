
import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  "No one's listening to us.",
  "My teacher left without saying goodbye.",
  "The funding priorities shift every quarter, we can't plan.",
  "We need more stability in the curriculum.",
  "Industry partnerships are inconsistent."
];

const OracleOverlay = () => {
  const [activeQuote, setActiveQuote] = useState(0);  // Changed from 1 to 0 as array index should start at 0
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    // Cycle through quotes
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);
    
    // Pulse highlight effect
    const highlightInterval = setInterval(() => {
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 500);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(highlightInterval);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-md p-3 mb-6 shadow-lg relative overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-md"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 ${isHighlighted ? 'bg-orange-400' : 'bg-orange-500'} rounded-full mr-2 ${isHighlighted ? 'animate-ping' : 'animate-pulse'}`}></span>
            <span className="font-bold text-orange-400 text-sm flex items-center">
              <AlertTriangle size={14} className="mr-1" />
              <span>Collapse Phase: Warning</span>
            </span>
          </div>
          <div className="text-gray-300 text-xs">
            Last 7 days: 18 turnover mentions, 37% urgency
          </div>
        </div>
        
        {/* Quote section */}
        <motion.div
          key={activeQuote}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="mt-2 text-sm text-indigo-100 flex items-center border-l-2 border-indigo-400/30 pl-2"
        >
          <span className="italic">{quotes[activeQuote]}</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="ml-2"
          >
            <ArrowRight size={14} className="text-indigo-300" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OracleOverlay;
