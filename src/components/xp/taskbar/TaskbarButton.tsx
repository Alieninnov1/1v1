
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TaskbarButtonProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const TaskbarButton = ({ icon: Icon, label, active = false, onClick }: TaskbarButtonProps) => {
  return (
    <motion.button
      className={`h-full flex items-center px-2 ${
        active 
          ? 'bg-gradient-to-b from-blue-500/90 to-blue-700/90 text-white' 
          : 'hover:bg-blue-600/50 text-white/90'
      } rounded-sm mx-0.5`}
      whileHover={{ y: -1 }}
      whileTap={{ y: 1 }}
      onClick={onClick}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <span className="flex items-center">
        <Icon size={14} />
        <span className="ml-1 text-xs truncate max-w-24">{label}</span>
      </span>
    </motion.button>
  );
};

export default TaskbarButton;
