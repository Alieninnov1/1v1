
import { motion } from "framer-motion";
import { BookOpen, Maximize2, Minimize2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";

interface KnowledgeWindowProps {
  onClose: () => void;
}

const KnowledgeWindow = ({ onClose }: KnowledgeWindowProps) => {
  const { toast } = useToast();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="xp-window max-w-7xl mx-auto mb-8"
    >
      <div className="xp-title-bar">
        <div className="flex items-center">
          <BookOpen size={14} />
          <span className="ml-2">HelixHub Knowledge Base</span>
        </div>
        <div className="xp-window-buttons">
          <motion.button 
            className="xp-window-button xp-minimize" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Minimized", description: "Knowledge Base would be minimized to the taskbar" })}
          >
            <Minimize2 size={10} />
          </motion.button>
          <motion.button 
            className="xp-window-button xp-maximize" 
            whileTap={{ scale: 0.9 }}
            onClick={() => toast({ title: "Window Maximized", description: "Knowledge Base would be maximized to full screen" })}
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
      
      <div className="xp-window-content overflow-auto">
        <KnowledgeBase />
      </div>
    </motion.div>
  );
};

export default KnowledgeWindow;
