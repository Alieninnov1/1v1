
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";
import TaskbarButton from "./taskbar/TaskbarButton";
import TaskbarClock from "./taskbar/TaskbarClock";
import StartMenu from "./taskbar/StartMenu";
import { useIsMobile } from "@/hooks/use-mobile";

const XPTaskbar = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleStartClick = () => {
    setShowStartMenu(!showStartMenu);
    trackEvent('desktopInteraction', { action: 'startMenu', state: !showStartMenu ? 'open' : 'closed' });
  };

  const handleNavigation = (path: string) => {
    if (path !== location.pathname) {
      navigate(path);
      trackEvent('desktopInteraction', { action: 'navigation', destination: path });
    }
  };

  return (
    <>
      <StartMenu isOpen={showStartMenu} onClose={() => setShowStartMenu(false)} />
      
      <motion.div
        className="xp-taskbar"
        initial={{ y: 36 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
      >
        <button
          className="xp-start-button"
          onClick={handleStartClick}
          aria-label="Start"
        >
          {showStartMenu ? <X size={isMobile ? 12 : 14} /> : <Menu size={isMobile ? 12 : 14} />}
          <span className="ml-1">Start</span>
        </button>
        
        <div className="flex-1 h-full flex items-center overflow-x-auto no-scrollbar">
          <TaskbarButton
            icon={Home}
            label="Home"
            active={location.pathname === "/"}
            onClick={() => handleNavigation("/")}
          />
          {!isMobile && (
            <>
              <TaskbarButton
                icon={BarChart3}
                label="Dashboard"
                active={location.pathname === "/dashboard"}
                onClick={() => handleNavigation("/dashboard")}
              />
              <TaskbarButton
                icon={BookOpen}
                label="Academy"
                active={location.pathname === "/academia"}
                onClick={() => handleNavigation("/academia")}
              />
            </>
          )}
        </div>
        
        <TaskbarClock />
      </motion.div>
    </>
  );
};

export default XPTaskbar;
