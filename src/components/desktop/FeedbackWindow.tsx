
import { motion } from "framer-motion";
import { Maximize2, Minimize2, PanelLeft, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import RealTimeFeedbackWall from "@/components/feedback/RealTimeFeedbackWall";

interface FeedbackWindowProps {
  onClose: () => void;
}

const FeedbackWindow = ({ onClose }: FeedbackWindowProps) => {
  const { toast } = useToast();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="xp-window max-w-7xl mx-auto mb-8 glass-card"
    >
      <div className="xp-title-bar bg-gradient-to-r from-purple-800 to-blue-700">
        <div className="flex items-center">
          <PanelLeft size={14} className="text-blue-200" />
          <span className="ml-2">HelixHub Feedback Wall</span>
        </div>
        <div className="xp-window-buttons">
          <motion.button 
            className="xp-window-button xp-minimize bg-blue-800 hover:bg-blue-700" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Minimized", description: "Feedback Wall would be minimized to the taskbar" })}
          >
            <Minimize2 size={10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-maximize bg-blue-800 hover:bg-blue-700" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Maximized", description: "Feedback Wall would be maximized to full screen" })}
          >
            <Maximize2 size={10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-close" 
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <X size={10} />
          </motion.button>
        </div>
      </div>
      
      <div className="xp-window-content overflow-auto bg-gray-900 text-white">
        <RealTimeFeedbackWall />
      </div>
    </motion.div>
  );
};

export default FeedbackWindow;
