
import { motion } from "framer-motion";

const OracleOverlay = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-md p-2 mb-6 text-xs shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
          <span className="font-bold text-orange-400">Collapse Phase: Warning</span>
        </div>
        <div className="text-gray-300">
          Last 7 days: 18 turnover mentions, 37% urgency
        </div>
      </div>
    </motion.div>
  );
};

export default OracleOverlay;
