
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, LucideIcon, Menu, Volume2, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface TaskbarButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

const TaskbarButton = ({ label, icon: Icon, active = false, onClick }: TaskbarButtonProps) => {
  const isMobile = useIsMobile();
  return (
    <Button
      variant="ghost"
      className={`xp-window-button-taskbar h-8 rounded-none flex items-center px-2 gap-1.5 text-xs ${
        active ? "bg-[#2A6CB7] shadow-inner" : ""
      }`}
      onClick={onClick}
    >
      <Icon size={isMobile ? 14 : 16} />
      {!isMobile && <span>{label}</span>}
    </Button>
  );
};

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openWindows, setOpenWindows] = useState<{id: string, label: string, icon: LucideIcon}[]>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format time
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
      
      // Format date
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString(undefined, options));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    
    // Close start menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showStartMenu && !target.closest('.xp-start-menu') && !target.closest('.xp-start-button')) {
        setShowStartMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showStartMenu]);
  
  // Handle start menu visibility
  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  // Optimized render with memoized components
  const startMenuVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };
  
  return (
    <>
      {/* Start Menu */}
      <AnimatePresence>
        {showStartMenu && (
          <motion.div 
            className="xp-start-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={startMenuVariants}
          >
            <div className="xp-start-header flex items-center">
              <div className="bg-white/20 rounded-full h-10 w-10 mr-2 flex items-center justify-center text-xl font-bold text-white">
                H
              </div>
              <div className="font-semibold">HelixHub User</div>
            </div>
            <div className="bg-white p-1">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 space-y-1 p-2">
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                       onClick={() => {toast({title: "Internet", description: "Opening Internet Explorer"}); setShowStartMenu(false);}}>
                    <div className="bg-blue-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                      <span className="text-xs">e</span>
                    </div>
                    <span className="text-sm">Internet</span>
                  </div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                       onClick={() => {toast({title: "Email", description: "Opening Outlook Express"}); setShowStartMenu(false);}}>
                    <div className="bg-blue-400 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                      <span className="text-xs">@</span>
                    </div>
                    <span className="text-sm">E-mail</span>
                  </div>
                  <div className="border-t border-gray-300 my-1"></div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/dashboard"; setShowStartMenu(false);}}>
                    <div className="bg-green-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                      <span className="text-xs">D</span>
                    </div>
                    <span className="text-sm">Dashboard</span>
                  </div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/knowledge"; setShowStartMenu(false);}}>
                    <div className="bg-purple-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                      <span className="text-xs">K</span>
                    </div>
                    <span className="text-sm">Knowledge Base</span>
                  </div>
                </div>
                <div className="w-full sm:w-32 bg-[#D3E5FA] p-2 space-y-1">
                  <div className="text-sm font-bold text-blue-800">My Places</div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/academia"; setShowStartMenu(false);}}>
                    <span>Academia</span>
                  </div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/industry"; setShowStartMenu(false);}}>
                    <span>Industry</span>
                  </div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/government"; setShowStartMenu(false);}}>
                    <span>Government</span>
                  </div>
                  <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm rounded-sm transition-colors" 
                       onClick={() => {window.location.href = "/discussions"; setShowStartMenu(false);}}>
                    <span>Discussions</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 mt-1"></div>
              <div className="flex justify-between p-1">
                <button 
                  className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                  onClick={() => {toast({title: "Log Off", description: "Logging off..."}); setShowStartMenu(false);}}
                >
                  <span className="text-sm">Log Off</span>
                </button>
                <button 
                  className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer rounded-sm transition-colors" 
                  onClick={() => {toast({title: "Shut Down", description: "Shutting down..."}); setShowStartMenu(false);}}
                >
                  <span className="text-sm">Shut Down</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Taskbar */}
      <div className="xp-taskbar">
        <button 
          className="xp-start-button flex items-center" 
          onClick={toggleStartMenu}
        >
          <Menu size={isMobile ? 14 : 16} className="mr-1" />
          <span className={isMobile ? "text-xs" : ""}>Start</span>
        </button>
        <div className="flex overflow-x-auto mx-1 flex-grow">
          {openWindows.map((window) => (
            <TaskbarButton 
              key={window.id} 
              label={window.label} 
              icon={window.icon} 
            />
          ))}
        </div>
        <div className="xp-clock flex items-center gap-2 px-2">
          {!isMobile && (
            <>
              <Volume2 size={14} className="cursor-pointer" onClick={() => toast({title: "Volume", description: "Volume controls would appear here"})} />
              <Wifi size={14} className="cursor-pointer" onClick={() => toast({title: "Network", description: "Network settings would appear here"})} />
            </>
          )}
          <div className="flex flex-col items-end">
            <span className="text-[10px] leading-none">{currentDate}</span>
            <span className="text-[10px] leading-none">{currentTime}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
