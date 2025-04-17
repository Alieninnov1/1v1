
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Maximize2, Minimize2, X } from "lucide-react";
import { useAnimatedHover, useXPAnimation } from "@/hooks/useAnimatedHover";
import { useIsMobile } from "@/hooks/use-mobile";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InsightCard = ({ title, description, icon, color }: InsightCardProps) => {
  const { isHovered, hoverHandlers } = useAnimatedHover({ xpStyle: true });
  const { buttonHandlers, buttonClasses } = useXPAnimation();
  const [isMinimized, setIsMinimized] = useState(false);
  const isMobile = useIsMobile();
  
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
        <div className="xp-title-bar">
          <div className="flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
          <div className="xp-window-buttons">
            <button 
              className="xp-window-button xp-minimize"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 size={10} /> : <Minimize2 size={10} />}
            </button>
            <button className="xp-window-button xp-close">
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
              >
                <span>Details</span>
                <ArrowRight className="ml-1 h-3 w-3" />
              </motion.button>
            </div>
            
            {/* Interactive elements for stakeholders */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Teachers", "Students", "Admins", "Policy"].map((role) => (
                <motion.span
                  key={role}
                  className="inline-block px-2 py-1 bg-[#ECE9D8] text-xs border border-gray-400 rounded"
                  whileHover={{ 
                    backgroundColor: "#D7E4F2", 
                    borderColor: "#0055E5" 
                  }}
                >
                  {role}
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
