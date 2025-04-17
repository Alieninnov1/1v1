
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimatedHover, useXPAnimation } from "@/hooks/useAnimatedHover";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Download, ExternalLink, Info, Maximize2, Minimize2, X } from "lucide-react";
import RoleContent from "../knowledge/RoleContent";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  role?: "student" | "teacher" | "policy" | "industry" | "admin";
  contentType?: string;
  actionUrl?: string;
  resourceType?: "document" | "tool" | "data" | "guide" | "video";
}

const InsightCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  role = "teacher", 
  contentType,
  actionUrl,
  resourceType = "guide"
}: InsightCardProps) => {
  const { isHovered, hoverHandlers } = useAnimatedHover({ xpStyle: true, role });
  const { buttonHandlers } = useXPAnimation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobile = useIsMobile();

  const resourceIcon = {
    "document": <Download size={14} />,
    "tool": <ExternalLink size={14} />,
    "data": <Info size={14} />,
    "guide": <ArrowRight size={14} />,
    "video": <ExternalLink size={14} />
  }[resourceType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...hoverHandlers}
      className="w-full mb-5"
    >
      <div className="xp-window">
        <div className="xp-title-bar" style={{ backgroundColor: role === "student" ? "#92CD00" : undefined }}>
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          <div className="xp-window-buttons">
            <button 
              className="xp-window-button xp-minimize"
              onClick={() => setIsMinimized(!isMinimized)}
              aria-label={isMinimized ? "Maximize window" : "Minimize window"}
            >
              {isMinimized ? <Maximize2 size={10} /> : <Minimize2 size={10} />}
            </button>
            <button className="xp-window-button xp-close" aria-label="Close window">
              <X size={10} />
            </button>
          </div>
        </div>
        
        {!isMinimized && (
          <motion.div 
            className="xp-window-content"
            initial={{ height: "auto" }}
            animate={{ height: isMinimized ? 0 : "auto" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-800 mb-4">{description}</p>
            
            <div className="mt-4 border-t border-gray-300 pt-3">
              <motion.button 
                className="xp-button flex items-center text-sm"
                {...buttonHandlers}
                whileHover={{ backgroundColor: "#E3E1D1" }}
                onClick={() => setIsExpanded(!isExpanded)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span>{actionUrl ? "Open Resource" : "Details"}</span>
                {resourceIcon}
                
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 bg-black text-white text-xs py-1 px-2 rounded opacity-80">
                    {actionUrl ? "Open in new window" : "View details"}
                  </div>
                )}
              </motion.button>
            </div>

            <RoleContent role={role} isExpanded={isExpanded} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InsightCard;
