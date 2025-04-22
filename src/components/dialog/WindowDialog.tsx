
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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
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
        <div className="xp-title-bar flex justify-between items-center p-2">
          <div className="flex items-center">
            <Info size={16} className="mr-2" />
            <span>{title}</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-red-500 rounded p-1"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="xp-window-content p-4 bg-white text-black">
          <p>{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default WindowDialog;
