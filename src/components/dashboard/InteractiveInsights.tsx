
import InsightCard from "./InsightCard";
import { insightsData } from "./insightsData";

const InteractiveInsights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {insightsData.map((insight, index) => {
        const Icon = insight.icon;
        return (
          <InsightCard
            key={index}
            title={insight.title}
            description={insight.description}
            icon={<Icon className="h-6 w-6" style={{ color: insight.color }} />}
            color={insight.color}
          />
        );
      })}
    </div>
  );
};

export default InteractiveInsights;
