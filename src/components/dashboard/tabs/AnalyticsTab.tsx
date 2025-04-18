
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SystemMetricsGrid from "@/components/metrics/SystemMetricsGrid";
import StrainThresholdGraph from "@/components/metrics/StrainThresholdGraph";
import RegionalHeatmap from "@/components/dashboard/RegionalHeatmap";
import SkillGapChart from "@/components/dashboard/SkillGapChart";

const AnalyticsTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <SystemMetricsGrid />
      
      <div className="mt-8">
        <StrainThresholdGraph />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <SkillGapChart />
        <RegionalHeatmap />
      </div>
    </motion.div>
  );
};

export default AnalyticsTab;
