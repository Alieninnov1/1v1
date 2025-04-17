
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, LucideIcon, Menu, Volume2, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TaskbarButtonProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
}

const TaskbarButton = ({ label, icon: Icon, active = false, onClick }: TaskbarButtonProps) => {
  return (
    <Button
      variant="ghost"
      className={`xp-window-button-taskbar h-8 rounded-none flex items-center px-2 gap-1.5 text-xs ${
        active ? "bg-[#2A6CB7] shadow-inner" : ""
      }`}
      onClick={onClick}
    >
      <Icon size={16} />
      <span>{label}</span>
    </Button>
  );
};

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [openWindows, setOpenWindows] = useState<{id: string, label: string, icon: LucideIcon}[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };
    
    updateClock();
    const interval = setInterval(updateClock, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle start menu visibility
  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  // You can add methods to manage open windows (add/remove) as needed
  
  return (
    <>
      {/* Start Menu */}
      {showStartMenu && (
        <motion.div 
          className="xp-start-menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="xp-start-header flex items-center">
            <div className="bg-white rounded-full h-10 w-10 mr-2 flex items-center justify-center text-xl font-bold text-[#0055E5]">
              H
            </div>
            <div>HelixHub User</div>
          </div>
          <div className="bg-white p-1">
            <div className="flex">
              <div className="w-48 space-y-2 p-2">
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                     onClick={() => {toast({title: "Internet", description: "Opening Internet Explorer"}); setShowStartMenu(false);}}>
                  <div className="bg-blue-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                    <span className="text-xs">e</span>
                  </div>
                  <span>Internet</span>
                </div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                     onClick={() => {toast({title: "Email", description: "Opening Outlook Express"}); setShowStartMenu(false);}}>
                  <div className="bg-blue-400 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                    <span className="text-xs">@</span>
                  </div>
                  <span>E-mail</span>
                </div>
                <div className="border-t border-gray-300 my-1"></div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                     onClick={() => {window.location.href = "/dashboard"; setShowStartMenu(false);}}>
                  <div className="bg-green-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                    <span className="text-xs">D</span>
                  </div>
                  <span>Dashboard</span>
                </div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                     onClick={() => {window.location.href = "/knowledge"; setShowStartMenu(false);}}>
                  <div className="bg-purple-500 w-7 h-7 rounded flex items-center justify-center text-white mr-2">
                    <span className="text-xs">K</span>
                  </div>
                  <span>Knowledge Base</span>
                </div>
              </div>
              <div className="w-32 bg-[#D3E5FA] p-2 space-y-2">
                <div className="text-sm font-bold text-blue-800">My Places</div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm" 
                     onClick={() => {window.location.href = "/academia"; setShowStartMenu(false);}}>
                  <span>Academia</span>
                </div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm" 
                     onClick={() => {window.location.href = "/industry"; setShowStartMenu(false);}}>
                  <span>Industry</span>
                </div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm" 
                     onClick={() => {window.location.href = "/government"; setShowStartMenu(false);}}>
                  <span>Government</span>
                </div>
                <div className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm" 
                     onClick={() => {window.location.href = "/discussions"; setShowStartMenu(false);}}>
                  <span>Discussions</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-1"></div>
            <div className="flex justify-between p-1">
              <button 
                className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                onClick={() => {toast({title: "Log Off", description: "Logging off..."}); setShowStartMenu(false);}}
              >
                Log Off
              </button>
              <button 
                className="xp-start-item flex items-center p-1.5 hover:bg-blue-100 cursor-pointer" 
                onClick={() => {toast({title: "Shut Down", description: "Shutting down..."}); setShowStartMenu(false);}}
              >
                Shut Down
              </button>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Taskbar */}
      <div className="xp-taskbar">
        <button 
          className="xp-start-button flex items-center" 
          onClick={toggleStartMenu}
        >
          <Menu size={16} className="mr-1" />
          Start
        </button>
        <div className="flex overflow-x-auto">
          {openWindows.map((window) => (
            <TaskbarButton 
              key={window.id} 
              label={window.label} 
              icon={window.icon} 
            />
          ))}
        </div>
        <div className="xp-clock flex items-center gap-2">
          <Volume2 size={14} className="cursor-pointer" onClick={() => toast({title: "Volume", description: "Volume controls would appear here"})} />
          <Wifi size={14} className="cursor-pointer" onClick={() => toast({title: "Network", description: "Network settings would appear here"})} />
          <span>{currentTime}</span>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
