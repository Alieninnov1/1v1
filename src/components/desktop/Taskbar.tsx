
import { useState } from "react";
import { Menu, LucideIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import TaskbarButton from "./taskbar/TaskbarButton";
import StartMenu from "./taskbar/StartMenu";
import TaskbarClock from "./taskbar/TaskbarClock";

const Taskbar = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openWindows] = useState<{
    id: string;
    label: string;
    icon: LucideIcon;
  }[]>([]);
  const isMobile = useIsMobile();

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  return (
    <>
      <AnimatePresence>
        {showStartMenu && (
          <StartMenu 
            isOpen={showStartMenu} 
            onClose={() => setShowStartMenu(false)} 
          />
        )}
      </AnimatePresence>
      
      <div className="xp-taskbar bg-indigo-900">
        <button className="xp-start-button flex items-center" onClick={toggleStartMenu}>
          <Menu size={isMobile ? 14 : 16} className="mr-1 bg-indigo-500" />
          <span className={isMobile ? "text-xs" : ""}>Start</span>
        </button>
        <div className="flex overflow-x-auto mx-1 flex-grow">
          {openWindows.map(window => (
            <TaskbarButton 
              key={window.id} 
              label={window.label} 
              icon={window.icon} 
            />
          ))}
        </div>
        <TaskbarClock />
      </div>
    </>
  );
};

export default Taskbar;
