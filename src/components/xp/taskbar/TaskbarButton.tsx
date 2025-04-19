
import { LucideIcon } from "lucide-react";

interface TaskbarButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

const TaskbarButton = ({ label, icon: Icon, active = false, onClick }: TaskbarButtonProps) => {
  return (
    <button 
      className={`xp-window-button-taskbar h-8 rounded-none flex items-center px-2 gap-1.5 text-xs transition-colors 
        ${active ? "bg-[#2A6CB7] shadow-inner" : "hover:bg-blue-600/30"}`}
      onClick={onClick}
    >
      <Icon size={16} />
      <span className="truncate max-w-24">{label}</span>
    </button>
  );
};

export default TaskbarButton;
