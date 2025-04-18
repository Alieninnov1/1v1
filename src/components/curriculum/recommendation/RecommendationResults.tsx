
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getIndustryRecommendations } from "./recommendationData";
import { RecommendationItem } from "./items/RecommendationItem";
import { SkillItem } from "./items/SkillItem";
import { TrendItem } from "./items/TrendItem";

export const RecommendationResults = ({ industry }: { industry: string }) => {
  const recommendations = getIndustryRecommendations(industry);
  
  return (
    <Tabs defaultValue="curriculum">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="curriculum">Curriculum Updates</TabsTrigger>
        <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
        <TabsTrigger value="trends">Market Trends</TabsTrigger>
      </TabsList>
      
      <TabsContent value="curriculum" className="space-y-4">
        {recommendations.curriculum.map((item, i) => (
          <RecommendationItem 
            key={i}
            title={item.title}
            description={item.description}
            critical={item.critical}
          />
        ))}
      </TabsContent>
      
      <TabsContent value="skills" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendations.skills.map((skill, i) => (
            <SkillItem 
              key={i}
              name={skill.name}
              demand={skill.demand}
              growth={skill.growth}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="trends" className="space-y-4">
        {recommendations.trends.map((trend, i) => (
          <TrendItem 
            key={i}
            name={trend.name}
            description={trend.description}
            impact={trend.impact}
          />
        ))}
      </TabsContent>
    </Tabs>
  );
};
