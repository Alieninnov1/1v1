
import { Card } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import SkillTile from "@/components/knowledge/SkillTile";

interface DashboardSkillTrendsProps {
  skillTrends: any[];
  isLoading: boolean;
}

const DashboardSkillTrends = ({ skillTrends, isLoading }: DashboardSkillTrendsProps) => {
  return (
    <Card className="p-4 bg-black/40 backdrop-blur-sm border border-purple-500/20">
      <h2 className="text-xl font-bold mb-4 text-white">Live Trending Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading ? 
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-800/50 h-32 rounded-lg"></div>
          )) : 
          skillTrends?.map((skill, idx) => (
            <ScrollAnimation key={skill.name} delay={idx * 0.1} type="fade" direction="up">
              <SkillTile 
                name={skill.name} 
                growth={skill.growth} 
                demand={skill.demand} 
                relevance={skill.relevance} 
              />
            </ScrollAnimation>
          ))
        }
      </div>
    </Card>
  );
};

export default DashboardSkillTrends;
