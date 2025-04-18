
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TaskbarButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const TaskbarButton = ({
  label,
  icon: Icon,
  active = false,
  onClick,
  className = ""
}: TaskbarButtonProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Button 
      variant="ghost" 
      className={`xp-window-button-taskbar h-8 rounded-none flex items-center px-2 gap-1.5 text-xs transition-colors 
        ${active ? "bg-[#2A6CB7] shadow-inner" : "hover:bg-blue-600/30"} ${className}`} 
      onClick={onClick}
    >
      <Icon size={isMobile ? 14 : 16} />
      {!isMobile && <span className="truncate max-w-24">{label}</span>}
    </Button>
  );
};

export default TaskbarButton;
