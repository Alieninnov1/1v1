
import { useState, useEffect } from "react";
import { Volume2, Wifi, Battery } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";

const TaskbarClock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { toast } = useToast();

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

  const handleSystemTrayClick = () => {
    toast({
      title: "System Tray",
      description: "System notifications would appear here"
    });
    trackEvent('systemTrayClick', { action: 'open' });
  };

  return (
    <div 
      className="flex items-center bg-blue-700/80 h-full px-2 rounded-sm cursor-pointer"
      onClick={handleSystemTrayClick}
    >
      <Volume2 size={12} className="text-blue-100 mx-1" />
      <Wifi size={12} className="text-blue-100 mx-1" />
      <Battery size={12} className="text-blue-100 mx-1" />
      <Clock size={12} className="text-blue-100 mx-1" />
      <span className="text-xs text-blue-100 ml-1">{currentTime}</span>
    </div>
  );
};

export default TaskbarClock;
