
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metricsData = [
  {
    title: "Total Skills Analyzed",
    value: "358",
    change: "+24 from last month"
  },
  {
    title: "Avg. Skill Gap",
    value: "42%",
    change: "-3% from last quarter"
  },
  {
    title: "Feedback Posts",
    value: "1,247",
    change: "+156 this week"
  },
  {
    title: "Recommendations",
    value: "78",
    change: "Based on current data"
  }
];

const DashboardMetrics = () => {
  return (
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="mt-10">
      <h3 className="text-xl font-bold mb-4 font-satoshi">Key Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricsData.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group"
          >
            <Card className="shadow-card rounded-xl border-none overflow-hidden bg-white dark:bg-gray-800 group-hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-satoshi">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-helix-purple">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.change}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardMetrics;
