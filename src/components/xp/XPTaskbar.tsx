import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Computer, Home, Menu, X, Clock, 
  Volume2, Wifi, Battery, MessageSquare, 
  BarChart3, FileText, BookOpen
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { trackEvent } from "@/utils/analytics";

const XPStartMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const menuItems = [
    { name: "Dashboard", icon: <BarChart3 size={16} className="text-blue-600" />, path: "/dashboard" },
    { name: "Academy", icon: <BookOpen size={16} className="text-green-600" />, path: "/academia" },
    { name: "Government", icon: <FileText size={16} className="text-red-600" />, path: "/government" },
    { name: "Industry", icon: <Computer size={16} className="text-orange-600" />, path: "/industry" },
    { name: "Discussions", icon: <MessageSquare size={16} className="text-yellow-600" />, path: "/discussions" },
    { name: "Homepage", icon: <Home size={16} className="text-purple-600" />, path: "/" }
  ];
  
  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
    trackEvent('click', { category: 'navigation', destination: path, source: 'startMenu' });
  };
  
  const menuWidth = isMobile ? "w-48" : "w-56";
  const menuHeight = isMobile ? "h-56" : "h-72";
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className={`absolute left-0 bottom-[36px] ${menuWidth} ${menuHeight} bg-gradient-to-br from-blue-100 to-blue-50 border border-gray-400 shadow-lg rounded-t-md z-50 overflow-hidden`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-2 flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center mr-2 border-2 border-white">
                <Computer size={16} className="text-white" />
              </div>
              <span className="text-white font-bold">HelixHub Explorer</span>
            </div>
            
            <div className="p-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex items-center p-2 hover:bg-blue-100 rounded cursor-pointer"
                  whileHover={{ x: 4 }}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-100 to-blue-200 p-2 border-t border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-600">
                  <Computer size={14} className="mr-1" />
                  Log Off
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <X size={14} className="mr-1" />
                  Shut Down
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface XPTaskbarButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const XPTaskbarButton = ({ icon, label, active = false, onClick }: XPTaskbarButtonProps) => {
  const isMobile = useIsMobile();
  
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
        {icon}
        {!isMobile && <span className="ml-1 text-xs truncate max-w-24">{label}</span>}
      </span>
    </motion.button>
  );
};

const XPTaskbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [activeWindows, setActiveWindows] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };
    
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    return () => clearInterval(timeInterval);
  }, []);
  
  useEffect(() => {
    const path = location.pathname;
    
    if (path !== "/") {
      const routeName = path.substring(1);
      setActiveWindows([routeName]);
    } else {
      setActiveWindows(["home"]);
    }
  }, [location.pathname]);
  
  const handleStartClick = () => {
    setShowStartMenu(!showStartMenu);
    trackEvent('startMenu', { category: 'button', action: showStartMenu ? 'close' : 'open', label: 'startButton' });
  };
  
  const handleWindowClick = (path: string) => {
    navigate(path);
    trackEvent('navigation', { category: 'navigation', destination: path, source: 'taskbar' });
  };
  
  const showSystemTray = () => {
    toast({
      title: "System Tray",
      description: "System notifications would appear here"
    });
  };

  return (
    <>
      <XPStartMenu isOpen={showStartMenu} onClose={() => setShowStartMenu(false)} />
      
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
          <XPTaskbarButton
            icon={<Home size={isMobile ? 12 : 14} />}
            label="Home"
            active={location.pathname === "/"}
            onClick={() => handleWindowClick("/")}
          />
          
          <XPTaskbarButton
            icon={<BarChart3 size={isMobile ? 12 : 14} />}
            label="Dashboard"
            active={location.pathname === "/dashboard"}
            onClick={() => handleWindowClick("/dashboard")}
          />
          
          <XPTaskbarButton
            icon={<BookOpen size={isMobile ? 12 : 14} />}
            label="Academy"
            active={location.pathname === "/academia"}
            onClick={() => handleWindowClick("/academia")}
          />
          
          <XPTaskbarButton
            icon={<Computer size={isMobile ? 12 : 14} />}
            label="Industry"
            active={location.pathname === "/industry"}
            onClick={() => handleWindowClick("/industry")}
          />
          
          {!isMobile && (
            <XPTaskbarButton
              icon={<FileText size={isMobile ? 12 : 14} />}
              label="Government"
              active={location.pathname === "/government"}
              onClick={() => handleWindowClick("/government")}
            />
          )}
          
          {!isMobile && (
            <XPTaskbarButton
              icon={<MessageSquare size={isMobile ? 12 : 14} />}
              label="Discussions"
              active={location.pathname === "/discussions"}
              onClick={() => handleWindowClick("/discussions")}
            />
          )}
        </div>
        
        <div 
          className="flex items-center bg-blue-700/80 h-full px-2 rounded-sm cursor-pointer"
          onClick={showSystemTray}
        >
          {!isMobile && (
            <>
              <Volume2 size={12} className="text-blue-100 mx-1" />
              <Wifi size={12} className="text-blue-100 mx-1" />
            </>
          )}
          <Battery size={isMobile ? 10 : 12} className="text-blue-100 mx-1" />
          <Clock size={isMobile ? 10 : 12} className="text-blue-100 mx-1" />
          <span className="text-xs text-blue-100 ml-1">{currentTime}</span>
        </div>
      </motion.div>
    </>
  );
};

export default XPTaskbar;
