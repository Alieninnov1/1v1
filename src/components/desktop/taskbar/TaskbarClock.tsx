
import { useState, useEffect } from "react";
import { Volume2, Wifi } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const TaskbarClock = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);

      const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: '2-digit'
      };
      setCurrentDate(now.toLocaleDateString(undefined, options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="xp-clock flex items-center gap-2 px-2 bg-gradient-to-b from-blue-800 to-blue-900 rounded-sm shadow-inner border-l border-blue-700">
      {!isMobile && (
        <>
          <Volume2
            size={14}
            className="cursor-pointer text-blue-100 hover:text-white transition-colors"
            onClick={() => toast({
              title: "Volume",
              description: "Volume controls would appear here"
            })}
          />
          <Wifi
            size={14}
            className="cursor-pointer text-blue-100 hover:text-white transition-colors"
            onClick={() => toast({
              title: "Network",
              description: "Network settings would appear here"
            })}
          />
        </>
      )}
      <div className="flex flex-col items-end">
        <span className="text-[10px] leading-none text-blue-100">{currentDate}</span>
        <span className="text-[11px] font-bold leading-none text-blue-50">{currentTime}</span>
      </div>
    </div>
  );
};

export default TaskbarClock;
