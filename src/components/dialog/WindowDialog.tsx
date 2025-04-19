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
        
        
      </motion.div>
    </div>;
};
export default WindowDialog;