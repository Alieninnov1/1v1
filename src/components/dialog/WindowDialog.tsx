
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 15, stiffness: 300 }}
        className="w-full max-w-md overflow-hidden"
        style={{
          boxShadow: '8px 8px 0 rgba(0, 0, 0, 0.8)',
          transform: 'rotate(-1deg)'
        }}
      >
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 flex justify-between items-center p-3 border-4 border-black border-b-0">
          <div className="flex items-center">
            <Info size={18} className="mr-2 text-purple-300" />
            <span className="font-black tracking-tight text-white">{title}</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-white/20 rounded p-1 transition-colors"
            aria-label="Close dialog"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
        
        <div className="p-5 bg-gray-900 text-gray-100 shadow-xl border-4 border-black border-t-0">
          <div className="leading-relaxed whitespace-pre-line">
            {content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('•')) {
                return <div key={index} className="flex">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{paragraph.substring(1).trim()}</span>
                </div>
              }
              return paragraph.trim() !== '' ? <p key={index} className="mb-4">{paragraph}</p> : <br key={index} />;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WindowDialog;
