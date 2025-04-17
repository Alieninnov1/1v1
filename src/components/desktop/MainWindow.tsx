
import { motion } from "framer-motion";
import { Computer, Maximize2, Minimize2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import { useIsMobile } from "@/hooks/use-mobile";

const MainWindow = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  return (
    <motion.div 
      variants={{ 
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0 } 
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      className="xp-window max-w-7xl mx-auto mb-8 glass-card shadow-xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="xp-title-bar bg-gradient-to-r from-[#015ccc] to-[#0277e6] flex items-center justify-between px-2 py-1">
        <div className="flex items-center">
          <Computer size={isMobile ? 12 : 14} className="text-blue-200 mr-2" />
          <span className="text-white font-medium truncate text-sm">{isMobile ? 'Explorer' : 'HelixHub Explorer'}</span>
        </div>
        <div className="xp-window-buttons flex space-x-1">
          <motion.button 
            className="xp-window-button xp-minimize bg-gradient-to-b from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 p-1 rounded" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Minimized", 
              description: "This window would be minimized to the taskbar" 
            })}
            aria-label="Minimize window"
          >
            <Minimize2 size={isMobile ? 9 : 11} className="text-blue-100" />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-maximize bg-gradient-to-b from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 p-1 rounded" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Maximized", 
              description: "This window would be maximized to full screen" 
            })}
            aria-label="Maximize window"
          >
            <Maximize2 size={isMobile ? 9 : 11} className="text-blue-100" />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-close bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 p-1 rounded" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Closed", 
              description: "This window would be closed" 
            })}
            aria-label="Close window"
          >
            <X size={isMobile ? 9 : 11} className="text-white" />
          </motion.button>
        </div>
      </div>
      
      <div className="xp-window-content overflow-auto scrollbar-hidden bg-[#0c101d] text-white">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </motion.div>
  );
};

export default MainWindow;
