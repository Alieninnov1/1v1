
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Gauge, Battery, Activity, AlertTriangle } from "lucide-react";

interface MetricCard {
  label: string;
  value: number;
  meaning: string;
  icon: JSX.Element;
  threshold?: number;
}

const systemMetrics: MetricCard[] = [
  {
    label: "Civic Load",
    value: 2.5,
    meaning: "Adjusted Population (M)",
    icon: <Users className="h-5 w-5 text-blue-500" />
  },
  {
    label: "Usage per Citizen",
    value: 4.2,
    meaning: "Per Capita Consumption (ha/person)",
    icon: <Gauge className="h-5 w-5 text-green-500" />
  },
  {
    label: "Resource Buffer",
    value: 8.7,
    meaning: "Biocapacity (M ha)",
    icon: <Battery className="h-5 w-5 text-yellow-500" />
  },
  {
    label: "System Strain Index",
    value: 7.2,
    meaning: "Pressure Ratio (0-10)",
    icon: <Activity className="h-5 w-5 text-red-500" />,
    threshold: 7.5
  }
];

const SystemMetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {systemMetrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="border-none shadow-card overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {metric.icon}
                <CardTitle className="text-sm">{metric.label}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {metric.value.toFixed(1)}
                  </span>
                  {metric.threshold && metric.value > metric.threshold && (
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{metric.meaning}</p>
                
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full rounded-full ${
                      metric.threshold && metric.value > metric.threshold
                        ? "bg-red-500"
                        : "bg-helix-purple"
                    }`}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(metric.value / 10) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SystemMetricsGrid;
