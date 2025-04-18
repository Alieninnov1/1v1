
import { AlertTriangle, Check } from "lucide-react";
import { motion } from "framer-motion";

interface RecommendationItemProps {
  title: string;
  description: string;
  critical: boolean;
}

export const RecommendationItem = ({ title, description, critical }: RecommendationItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-4 rounded-lg border ${critical ? 'border-amber-600/30 bg-amber-900/10' : 'border-green-600/30 bg-green-900/10'}`}
  >
    <div className="flex">
      <div className="mt-1 mr-3">
        {critical ? 
          <AlertTriangle className="text-amber-500" /> : 
          <Check className="text-green-500" />
        }
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);
