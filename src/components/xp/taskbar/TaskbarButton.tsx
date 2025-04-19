
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TaskbarButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

const TaskbarButton = ({ label, icon: Icon, active = false, onClick }: TaskbarButtonProps) => {
  return (
    <motion.button 
      className={`xp-window-button-taskbar h-10 flex items-center px-3 gap-2 text-sm transition-all border-b-4
        ${active 
          ? "bg-helix-purple text-white border-white font-bold shadow-[0_0_15px_rgba(94,44,165,0.6)]" 
          : "bg-black/40 text-gray-300 hover:bg-helix-purple/30 border-transparent hover:border-helix-purple/50"}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={16} className={active ? "text-white" : "text-gray-400"} />
      <span className="truncate max-w-36">{label}</span>
    </motion.button>
  );
};

export default TaskbarButton;
