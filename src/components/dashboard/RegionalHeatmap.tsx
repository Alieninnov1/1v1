
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Mock data for regional heatmap
const mockRegions = [
  { id: 1, name: "Northeast", skillGap: 68, topSkillsNeeded: ["Data Science", "Cloud Architecture", "AI Ethics"] },
  { id: 2, name: "Midwest", skillGap: 54, topSkillsNeeded: ["Manufacturing Tech", "Logistics Automation", "Supply Chain Analytics"] },
  { id: 3, name: "South", skillGap: 62, topSkillsNeeded: ["Energy Tech", "Healthcare Informatics", "Cybersecurity"] },
  { id: 4, name: "West", skillGap: 75, topSkillsNeeded: ["Software Development", "UX/UI Design", "Product Management"] },
];

const getColorByGapPercentage = (percentage: number) => {
  // Color scales from light to dark purple based on intensity
  if (percentage < 40) return "bg-helix-purple100";
  if (percentage < 55) return "bg-helix-purple200";
  if (percentage < 65) return "bg-helix-purple300";
  if (percentage < 75) return "bg-helix-purple500";
  return "bg-helix-purple";
};

const RegionalHeatmap = () => {
  const [selectedSkill, setSelectedSkill] = useState("all");

  return (
    <Card className="shadow-card rounded-xl">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <CardTitle className="text-xl font-satoshi">Regional Skill Heatmap</CardTitle>
          <div className="mt-2 sm:mt-0">
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="cloud">Cloud Computing</SelectItem>
                <SelectItem value="ai">Artificial Intelligence</SelectItem>
                <SelectItem value="cyber">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockRegions.map((region) => (
            <div 
              key={region.id} 
              className={`p-6 rounded-lg border ${getColorByGapPercentage(region.skillGap)} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-white">{region.name}</h3>
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-white/20 text-white">
                  {region.skillGap}% Gap
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white/90 mb-2">Top Skills Needed:</p>
                <div className="flex flex-wrap gap-2">
                  {region.topSkillsNeeded.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6">
          *Regional data updated monthly based on labor market reports and industry surveys
        </p>
      </CardContent>
    </Card>
  );
};

export default RegionalHeatmap;
