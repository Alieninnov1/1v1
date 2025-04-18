
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { AlertTriangle, Check } from "lucide-react";
import { getIndustryRecommendations } from "./recommendationData";

interface RecommendationItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  critical: boolean;
}

const RecommendationItem = ({ title, description, icon, critical }: RecommendationItemProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className={`p-4 rounded-lg border ${critical ? 'border-amber-600/30 bg-amber-900/10' : 'border-green-600/30 bg-green-900/10'}`}
  >
    <div className="flex">
      <div className="mt-1 mr-3">{icon}</div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </motion.div>
);

interface SkillItemProps {
  name: string;
  demand: number;
  growth: number;
}

const SkillItem = ({ name, demand, growth }: SkillItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
  >
    <h4 className="font-bold text-purple-400">{name}</h4>
    <div className="mt-2 space-y-1">
      <ProgressBar label="Demand" value={demand} max={100} />
      <ProgressBar label="Growth" value={growth} max={100} color="bg-green-500" />
    </div>
  </motion.div>
);

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: string;
}

const ProgressBar = ({ label, value, max, color = "bg-blue-500" }: ProgressBarProps) => (
  <div className="flex items-center text-xs">
    <span className="w-16 text-gray-400">{label}:</span>
    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden ml-2">
      <div className={`h-full ${color}`} style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
    <span className="ml-2">{value}%</span>
  </div>
);

interface TrendItemProps {
  name: string;
  description: string;
  impact: "high" | "medium" | "low";
}

const TrendItem = ({ name, description, impact }: TrendItemProps) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-500";
      case "medium": return "text-amber-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold">{name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full bg-gray-700 ${getImpactColor(impact)}`}>
          {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

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
            icon={item.critical ? <AlertTriangle className="text-amber-500" /> : <Check className="text-green-500" />}
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
