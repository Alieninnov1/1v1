
import { motion } from "framer-motion";
import { useFadeAnimation } from "@/hooks/animations";

interface MetricData {
  civicLoad: number;
  resourceBuffer: number;
  usagePerCitizen: number;
  strainIndex: number;
}

interface StrainMetricsProps {
  currentData: MetricData;
}

const StrainMetrics = ({ currentData }: StrainMetricsProps) => {
  const fadeAnimation = useFadeAnimation(0.2);
  
  const getStrainStatusClass = (strainIndex: number) => {
    if (strainIndex < 1) return "text-green-400";
    if (strainIndex < 1.5) return "text-yellow-400";
    if (strainIndex < 2) return "text-orange-400";
    return "text-red-400";
  };

  const getStrainStatusText = (strainIndex: number) => {
    if (strainIndex < 1) return "Healthy";
    if (strainIndex < 1.5) return "Warning";
    if (strainIndex < 2) return "Critical";
    return "System Failure";
  };

  return (
    <motion.div {...fadeAnimation} className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-400">Current Strain Index</div>
          <div className={`text-3xl font-bold ${getStrainStatusClass(currentData.strainIndex)}`}>
            {currentData.strainIndex.toFixed(2)}
          </div>
          <div className={`text-sm ${getStrainStatusClass(currentData.strainIndex)}`}>
            {getStrainStatusText(currentData.strainIndex)}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Crisis Threshold</div>
          <div className="text-3xl font-bold text-gray-300">1.00</div>
          <div className={`text-sm ${currentData.strainIndex >= 1 ? 'text-red-400' : 'text-green-400'}`}>
            {currentData.strainIndex >= 1 ? 'Exceeded' : 'Maintained'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
          <div className="text-xs text-gray-400">Civic Load</div>
          <div className="text-lg font-semibold text-blue-300">
            {currentData.civicLoad}M
          </div>
        </div>
        <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
          <div className="text-xs text-gray-400">Resource Buffer</div>
          <div className="text-lg font-semibold text-green-300">
            {currentData.resourceBuffer}M ha
          </div>
        </div>
        <div className="bg-amber-900/20 p-3 rounded-lg border border-amber-500/20">
          <div className="text-xs text-gray-400">Usage per Citizen</div>
          <div className="text-lg font-semibold text-amber-300">
            {currentData.usagePerCitizen}ha
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StrainMetrics;
