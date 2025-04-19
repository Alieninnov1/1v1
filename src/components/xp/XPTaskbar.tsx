
import { useState, useEffect } from "react";
import { Menu, Computer, BookOpen, BarChart3, MessageSquare, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation, useNavigate } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

// Update import paths to match the desktop component structure
import TaskbarButton from "@/components/desktop/taskbar/TaskbarButton";
import TaskbarClock from "@/components/desktop/taskbar/TaskbarClock";
import StartMenu from "@/components/desktop/taskbar/StartMenu";

const XPTaskbar = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openWindows, setOpenWindows] = useState<{
    id: string;
    label: string;
    icon: any;
    path: string;
  }[]>([]);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  // Set initial windows based on current route
  useEffect(() => {
    const path = location.pathname;
    
    // Clear windows first to avoid duplicates
    setOpenWindows([]);
    
    // Add windows based on current route
    if (path === "/") {
      setOpenWindows([
        { id: "main", label: "HelixHub Explorer", icon: Computer, path: "/" }
      ]);
    } else if (path === "/dashboard") {
      setOpenWindows([
        { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/dashboard" }
      ]);
    } else if (path === "/academia") {
      setOpenWindows([
        { id: "academia", label: "Academia", icon: BookOpen, path: "/academia" }
      ]);
    } else if (path === "/government") {
      setOpenWindows([
        { id: "government", label: "Government", icon: Home, path: "/government" }
      ]);
    } else if (path === "/discussions") {
      setOpenWindows([
        { id: "discussions", label: "Discussions", icon: MessageSquare, path: "/discussions" }
      ]);
    }
  }, [location.pathname]);

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
    trackEvent('buttonClick', { button: 'startMenu', action: showStartMenu ? 'close' : 'open' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {showStartMenu && (
        <StartMenu 
          isOpen={showStartMenu} 
          onClose={() => setShowStartMenu(false)} 
        />
      )}
      
      <motion.div 
        className="xp-taskbar bg-gradient-to-b from-blue-700 to-blue-900 fixed bottom-0 left-0 right-0 z-50"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <button 
          className="xp-start-button flex items-center" 
          onClick={toggleStartMenu}
          aria-label="Open Start Menu"
        >
          <Menu size={isMobile ? 14 : 16} className="mr-1" />
          <span className={isMobile ? "text-xs" : ""}>Start</span>
        </button>
        
        <div className="flex overflow-x-auto scrollbar-hidden mx-1 flex-grow">
          {openWindows.map(window => (
            <TaskbarButton 
              key={window.id} 
              label={window.label} 
              icon={window.icon}
              active={isActive(window.path)}
              onClick={() => {
                if (window.path !== location.pathname) {
                  navigate(window.path);
                  trackEvent('buttonClick', { button: 'taskbarNav', destination: window.path });
                }
              }}
            />
          ))}
        </div>
        
        <TaskbarClock />
      </motion.div>
    </>
  );
};

export default XPTaskbar;
