import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InsightCard from "./InsightCard";
import { insightsData } from "./insightsData";
import { useSkillTrends } from "@/services/apiDataService";
import { ChartBar } from "lucide-react";

const InteractiveInsights = () => {
  const { data: skillTrends, isLoading } = useSkillTrends();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const container = document.getElementById('insights-container');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const enhancedInsights = skillTrends && skillTrends.length > 0
    ? [
        {
          ...insightsData[0],
          description: `Curriculum adjustments based on ${skillTrends[0].name} and ${skillTrends[1].name} with ${skillTrends[0].growth}% growth.`
        },
        {
          ...insightsData[1],
          description: `ML-powered recommendations focusing on ${skillTrends[2].name} and ${skillTrends[3].name} - high demand areas.`
        },
        {
          ...insightsData[2],
          description: `Regional skill gap analysis shows ${skillTrends[4].name} needs growing by ${skillTrends[4].growth}% annually.`
        }
      ]
    : insightsData;

  return (
    <div id="insights-container" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {isLoading && !isVisible ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div 
            key={index} 
            className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded-lg"
          ></div>
        ))
      ) : (
        (isVisible ? enhancedInsights : insightsData).map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <InsightCard
                title={insight.title}
                description={insight.description}
                icon={<Icon className="h-6 w-6" style={{ color: insight.color }} />}
                color={insight.color}
                actionUrl={`/dashboard?tab=${index === 0 ? 'analytics' : index === 1 ? 'recommendations' : 'overview'}`}
                resourceType="tool"
              />
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default InteractiveInsights;
