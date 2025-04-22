
import { motion } from "framer-motion";
import InsightCard from "./InsightCard";

interface InsightCardListProps {
  insights: ReadonlyArray<{
    title: string;
    description: string;
    icon: any;
    color: string;
  }>;
}

const tabNames = ["analytics", "recommendations", "overview"];

const InsightCardList = ({ insights }: InsightCardListProps) => (
  <>
    {insights.map((insight, index) => {
      const Icon = insight.icon;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          style={{ willChange: 'transform, opacity' }}
        >
          <InsightCard
            title={insight.title}
            description={insight.description}
            icon={<Icon className="h-6 w-6" style={{ color: insight.color }} />}
            color={insight.color}
            actionUrl={`/dashboard?tab=${tabNames[index] || "overview"}`}
            resourceType="tool"
          />
        </motion.div>
      );
    })}
  </>
);

export default InsightCardList;
