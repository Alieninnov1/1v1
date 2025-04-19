
import { motion } from "framer-motion";
import { X, Info } from "lucide-react";

interface WindowDialogProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}

const WindowDialog = ({
  title,
  content,
  isOpen,
  onClose
}: WindowDialogProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0.9
        }} 
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300
        }}
        className="xp-window max-w-md overflow-hidden"
      >
        <div className="xp-title-bar bg-gradient-to-r from-indigo-900 to-purple-900 border-b border-purple-500/50">
          <div className="flex items-center">
            <Info size={14} className="text-blue-300" />
            <span className="ml-2 text-blue-100">{title}</span>
          </div>
          <button 
            className="xp-window-button xp-close hover:bg-red-700/80" 
            onClick={onClose}
          >
            <X size={10} />
          </button>
        </div>
        <div className="xp-window-content p-6 bg-gradient-to-br from-indigo-900/90 to-purple-900/90 backdrop-blur-md text-indigo-100 border border-indigo-500/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
          <div className="flex mb-4">
            <Info className="h-12 w-12 text-blue-400 mr-4" />
            <p className="leading-relaxed">{content}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button 
              className="xp-button px-6 bg-indigo-700 hover:bg-indigo-600 border border-indigo-400/30 text-white font-medium shadow-[0_0_8px_rgba(129,140,248,0.3)]"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WindowDialog;
