
import { motion } from "framer-motion";
import SkillGapChart from "../SkillGapChart";
import RegionalHeatmap from "../RegionalHeatmap";

const AnalyticsTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillGapChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <RegionalHeatmap />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsTab;
