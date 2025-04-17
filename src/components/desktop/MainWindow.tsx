
import { motion } from "framer-motion";
import { Computer, Maximize2, Minimize2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";

const MainWindow = () => {
  const { toast } = useToast();

  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="xp-window max-w-7xl mx-auto mb-8">
      <div className="xp-title-bar">
        <div className="flex items-center">
          <Computer size={14} />
          <span className="ml-2">HelixHub Explorer</span>
        </div>
        <div className="xp-window-buttons">
          <motion.button 
            className="xp-window-button xp-minimize" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Minimized", description: "This window would be minimized to the taskbar" })}
          >
            <Minimize2 size={10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-maximize" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Maximized", description: "This window would be maximized to full screen" })}
          >
            <Maximize2 size={10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-close" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Closed", description: "This window would be closed" })}
          >
            <X size={10} />
          </motion.button>
        </div>
      </div>
      
      <div className="xp-window-content overflow-auto">
        <Hero />
        <Features />
        <CallToAction />
      </div>
    </motion.div>
  );
};

export default MainWindow;
