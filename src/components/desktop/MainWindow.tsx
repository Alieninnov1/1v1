
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
      <div className="xp-title-bar bg-gradient-to-r from-purple-800 to-blue-700">
        <div className="flex items-center">
          <Computer size={isMobile ? 12 : 14} className="text-blue-200" />
          <span className="ml-2 truncate">{isMobile ? 'Explorer' : 'HelixHub Explorer'}</span>
        </div>
        <div className="xp-window-buttons">
          <motion.button 
            className="xp-window-button xp-minimize bg-blue-800 hover:bg-blue-700" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Minimized", 
              description: "This window would be minimized to the taskbar" 
            })}
            aria-label="Minimize window"
          >
            <Minimize2 size={isMobile ? 8 : 10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-maximize bg-blue-800 hover:bg-blue-700" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Maximized", 
              description: "This window would be maximized to full screen" 
            })}
            aria-label="Maximize window"
          >
            <Maximize2 size={isMobile ? 8 : 10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-close" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ 
              title: "Window Closed", 
              description: "This window would be closed" 
            })}
            aria-label="Close window"
          >
            <X size={isMobile ? 8 : 10} />
          </motion.button>
        </div>
      </div>
      
      <div className="xp-window-content overflow-auto scrollbar-hidden bg-gray-900 text-white">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </motion.div>
  );
};

export default MainWindow;
