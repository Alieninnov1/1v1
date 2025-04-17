import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Brain, Globe } from "lucide-react";

interface InsightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const InsightCard = ({ title, description, icon, color }: InsightCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="w-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`relative overflow-hidden shadow-lg border-none h-full`}>
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{ background: color }}
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
          }}
        />
        <CardHeader className="relative z-10">
          <div className={`p-3 rounded-full inline-flex bg-opacity-10 mb-2`} style={{ background: color }}>
            {icon}
          </div>
          <CardTitle className="text-xl font-satoshi">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
            className="h-[1px] bg-gray-300 dark:bg-gray-700 mt-4"
          />
          
          <motion.div 
            className="mt-4 flex items-center text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore details</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const InteractiveInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <InsightCard
        title="Data-Driven Learning"
        description="Curriculum adjustments based on real-time industry skill demands and market trends."
        icon={<BarChart className="h-6 w-6 text-blue-500" />}
        color="#3B82F6"
      />
      <InsightCard
        title="AI Curriculum Engine"
        description="ML-powered recommendations to keep educational content relevant and future-ready."
        icon={<Brain className="h-6 w-6 text-purple-500" />}
        color="#8B5CF6"
      />
      <InsightCard
        title="Regional Innovation"
        description="Localized skill gap analysis to foster regional economic development and growth."
        icon={<Globe className="h-6 w-6 text-green-500" />}
        color="#10B981"
      />
    </div>
  );
};

export default InteractiveInsights;
