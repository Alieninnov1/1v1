
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SkillTileProps {
  name: string;
  growth: number;
  demand: number;
  relevance: string;
}

const SkillTile = ({ name, growth, demand, relevance }: SkillTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getRelevanceColor = () => {
    switch(relevance.toLowerCase()) {
      case 'high':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };
  
  const handleSkillClick = () => {
    toast({
      title: `Skill: ${name}`,
      description: `Growth: ${growth}%, Demand: ${demand}/100, Relevance: ${relevance}`,
    });
  };
  
  return (
    <motion.div
      className="xp-window cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleSkillClick}
    >
      <div className="xp-title-bar flex items-center justify-between">
        <div className="flex items-center">
          <Award size={14} />
          <span className="ml-2 truncate text-sm">{name}</span>
        </div>
      </div>
      <div className="xp-window-content p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <TrendingUp size={15} className="text-green-600 mr-1" />
            <span className="text-xs font-medium">{growth}% growth</span>
          </div>
          <Badge variant="outline" className={`text-xs ${getRelevanceColor()}`}>
            {relevance}
          </Badge>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full mt-1">
          <div 
            className="h-2 rounded-full bg-blue-600" 
            style={{ width: `${demand}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>Demand</span>
          <span className="font-bold">{demand}/100</span>
        </div>
        
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="mt-2 flex items-center text-xs text-gray-600"
          >
            <Lightbulb size={12} className="mr-1" />
            <span>Click for more details</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default SkillTile;
