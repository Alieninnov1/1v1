
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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 15, stiffness: 300 }}
        className="w-full max-w-md overflow-hidden rounded-lg"
      >
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 flex justify-between items-center p-3 text-white">
          <div className="flex items-center">
            <Info size={16} className="mr-2" />
            <span className="font-medium">{title}</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 rounded p-1 transition-colors"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="p-5 bg-white text-gray-800 shadow-xl">
          <p className="leading-relaxed">{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default WindowDialog;
