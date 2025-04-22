
import { useEffect, useState } from "react";
import { useSkillTrends } from "@/services/apiDataService";
import { insightsData } from "./insightsData";
import InsightCardList from "./InsightCardList";
import InsightSkeletons from "./InsightSkeletons";

const InteractiveInsights = () => {
  const { data: skillTrends, isLoading } = useSkillTrends();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const container = document.getElementById("insights-container");
    if (container) {
      observer.observe(container);
    }
    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  // Enhanced insights with real API data - fixed type comparison error
  const enhancedInsights = skillTrends && skillTrends.length >= 5
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
    : [];

  return (
    <div
      id="insights-container"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
    >
      {isLoading && !isVisible ? (
        <InsightSkeletons count={3} />
      ) : (
        <InsightCardList
          insights={isVisible && enhancedInsights.length > 0 ? enhancedInsights : insightsData}
        />
      )}
      {!isLoading && isVisible && enhancedInsights.length === 0 && skillTrends && skillTrends.length > 0 && (
        <div className="col-span-3 text-center text-gray-500 py-12">
          No enhanced insights available at this time.
        </div>
      )}
    </div>
  );
};

export default InteractiveInsights;
