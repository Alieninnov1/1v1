
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimatedHover, useXPAnimation, useKnowledgeContent } from "@/hooks/useAnimatedHover";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Download, ExternalLink, Info, Maximize2, Minimize2, X } from "lucide-react";

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
  const { isHovered, hoverHandlers, roleStyle } = useAnimatedHover({ xpStyle: true, role });
  const { buttonHandlers, buttonClasses } = useXPAnimation();
  const { content, isExpanded, toggleExpand } = useKnowledgeContent(contentType);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const isMobile = useIsMobile();
  
  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (actionUrl) {
      window.open(actionUrl, "_blank");
    } else {
      toggleExpand();
    }
  };
  
  // Resource type indicators
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
      onHoverStart={hoverHandlers.onHoverStart}
      onHoverEnd={hoverHandlers.onHoverEnd}
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
            
            {/* Knowledge Content Section */}
            {content && (
              <motion.div 
                className="mt-4 border-t border-dashed border-gray-300 pt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isExpanded ? 1 : 0.7, 
                  height: isExpanded ? "auto" : isMobile ? "60px" : "40px" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold">{content.title}</h4>
                  <button 
                    onClick={toggleExpand} 
                    className="text-xs text-blue-600 hover:underline flex items-center"
                  >
                    {isExpanded ? "Show less" : "Show more"}
                  </button>
                </div>
                
                {isExpanded && (
                  <div className="mt-2 text-sm">
                    <p className="mb-2">{content.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {content.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Interactive Element - Stakeholder Specific */}
                    {role === "teacher" && (
                      <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-100 text-xs">
                        <strong>Educator Tip:</strong> Use this resource in your classroom planning
                      </div>
                    )}
                    
                    {role === "student" && (
                      <div className="mt-3 p-2 bg-green-50 rounded border border-green-100 text-xs">
                        <strong>Student Resource:</strong> Connect this to your future career path
                      </div>
                    )}
                    
                    {role === "policy" && (
                      <div className="mt-3 p-2 bg-amber-50 rounded border border-amber-100 text-xs">
                        <strong>Policy Implication:</strong> Relevant regulatory frameworks to consider
                      </div>
                    )}
                    
                    {role === "industry" && (
                      <div className="mt-3 p-2 bg-red-50 rounded border border-red-100 text-xs">
                        <strong>Industry Application:</strong> How businesses use this innovation
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
            
            <div className="flex justify-between items-center mt-4 border-t border-gray-300 pt-3">
              <motion.div 
                className="text-xs text-gray-500"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                Last updated: Today
              </motion.div>
              
              <motion.button 
                className="xp-button flex items-center text-sm"
                {...buttonHandlers}
                whileHover={{ backgroundColor: "#E3E1D1" }}
                onClick={handleActionClick}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <span>{actionUrl ? "Open Resource" : "Details"}</span>
                {resourceIcon}
                
                {/* Simple tooltip */}
                {showTooltip && (
                  <div className="absolute bottom-full mb-2 bg-black text-white text-xs py-1 px-2 rounded opacity-80">
                    {actionUrl ? "Open in new window" : "View details"}
                  </div>
                )}
              </motion.button>
            </div>
            
            {/* Interactive elements for stakeholders */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Teachers", "Students", "Admins", "Policy"].map((stakeholder) => (
                <motion.span
                  key={stakeholder}
                  className="inline-block px-2 py-1 bg-[#ECE9D8] text-xs border border-gray-400 rounded cursor-pointer"
                  whileHover={{ 
                    backgroundColor: "#D7E4F2", 
                    borderColor: "#0055E5" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stakeholder}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InsightCard;
