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
  return <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      type: "spring",
      damping: 15,
      stiffness: 300
    }} className="xp-window max-w-md overflow-hidden">
        <div className="xp-title-bar bg-gradient-to-r from-indigo-900 to-purple-900 border-b border-purple-500/50">
          <div className="flex items-center">
            <Info size={14} className="text-blue-300" />
            <span className="ml-2 text-blue-100">{title}</span>
          </div>
          <button className="xp-window-button xp-close hover:bg-red-700/80" onClick={onClose}>
            <X size={10} />
          </button>
        </div>
        
      </motion.div>
    </div>;
};
export default WindowDialog;