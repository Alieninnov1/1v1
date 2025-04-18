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
  return <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="xp-window max-w-md">
        <div className="xp-title-bar">
          <div className="flex items-center">
            <Info size={14} />
            <span className="ml-2">{title}</span>
          </div>
          <button className="xp-window-button xp-close" onClick={onClose}>
            <X size={10} />
          </button>
        </div>
        <div className="xp-window-content p-6 bg-indigo-800">
          <div className="flex mb-4">
            <Info className="h-12 w-12 text-blue-600 mr-4" />
            <p>{content}</p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="xp-button px-6" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </motion.div>
    </div>;
};
export default WindowDialog;