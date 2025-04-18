
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TripleHelixAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151823] to-[#262d4a] z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      {/* Main content */}
      <div className="container relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300 mb-6">
            HelixHub Network
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Synchronizing education, industry, and governance through real-time data and predictive feedback
          </p>
        </motion.div>
        
        {/* Triple Helix Animation */}
        <div className="relative h-[400px] mb-16">
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-helix-purple/20 backdrop-blur-md rounded-full border border-helix-purple/50 flex items-center justify-center z-30"
          >
            <div className="text-center">
              <h3 className="font-bold text-xl text-white">SignalDAO</h3>
              <p className="text-sm text-gray-300">Impact Engine</p>
            </div>
          </motion.div>
          
          {/* Academia Node */}
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring" }}
            className="absolute left-[20%] top-[30%] w-32 h-32 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/50 flex items-center justify-center z-20"
          >
            <div className="text-center">
              <h3 className="font-bold text-lg text-white">Academia</h3>
              <p className="text-xs text-gray-300">Knowledge</p>
            </div>
          </motion.div>
          
          {/* Industry Node */}
          <motion.div
            initial={{ x: 100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, type: "spring" }}
            className="absolute right-[20%] top-[30%] w-32 h-32 bg-indigo-500/20 backdrop-blur-md rounded-full border border-indigo-500/50 flex items-center justify-center z-20"
          >
            <div className="text-center">
              <h3 className="font-bold text-lg text-white">Industry</h3>
              <p className="text-xs text-gray-300">Application</p>
            </div>
          </motion.div>
          
          {/* Government Node */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1, type: "spring" }}
            className="absolute left-1/2 bottom-[10%] transform -translate-x-1/2 w-32 h-32 bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-500/50 flex items-center justify-center z-20"
          >
            <div className="text-center">
              <h3 className="font-bold text-lg text-white">Government</h3>
              <p className="text-xs text-gray-300">Policy</p>
            </div>
          </motion.div>
          
          {/* Connecting lines with animation */}
          <svg className="absolute inset-0 w-full h-full z-10">
            <motion.path
              d="M200,150 L320,200 L440,150"
              stroke="url(#purpleGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.5 }}
            />
            <motion.path
              d="M320,200 L320,300"
              stroke="url(#purpleGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            />
            <motion.path
              d="M200,150 C240,240 400,240 440,150"
              stroke="url(#purpleGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1.5 }}
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Animation particles */}
          <motion.div
            className="absolute left-[30%] top-[40%] w-3 h-3 rounded-full bg-blue-400"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute right-[30%] top-[40%] w-3 h-3 rounded-full bg-indigo-400"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="text-center"
        >
          <Button className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/30 transition-all">
            Explore Your Impact Network
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TripleHelixAnimation;
