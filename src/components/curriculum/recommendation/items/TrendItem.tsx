
import { motion } from "framer-motion";

interface TrendItemProps {
  name: string;
  description: string;
  impact: "high" | "medium" | "low";
}

export const TrendItem = ({ name, description, impact }: TrendItemProps) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-500";
      case "medium": return "text-amber-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold">{name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full bg-gray-700 ${getImpactColor(impact)}`}>
          {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};
