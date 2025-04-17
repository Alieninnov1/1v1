
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const mockData = [
  { skill: "Data Analysis", gap: 68, category: "tech" },
  { skill: "Cloud Computing", gap: 62, category: "tech" },
  { skill: "Cybersecurity", gap: 75, category: "tech" },
  { skill: "AI/ML", gap: 85, category: "tech" },
  { skill: "Project Management", gap: 45, category: "business" },
  { skill: "UX Design", gap: 58, category: "design" },
  { skill: "Digital Marketing", gap: 52, category: "marketing" },
  { skill: "Healthcare Analytics", gap: 71, category: "healthcare" },
];

const getBarColor = (category: string) => {
  const colors = {
    tech: "#7E69AB", // Purple shade
    business: "#9b87f5", // Lighter purple
    design: "#D6BCFA", // Lavender
    marketing: "#8B5CF6", // Violet
    healthcare: "#6E59A5", // Deep purple
    default: "#5E2CA5", // Base purple
  };
  
  return colors[category as keyof typeof colors] || colors.default;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900">{`${label}`}</p>
        <p className="text-sm text-gray-600">{`Skill Gap: ${payload[0].value}%`}</p>
        <p className="text-xs text-gray-500 mt-1">{`Category: ${payload[0].payload.category}`}</p>
      </div>
    );
  }
  return null;
};

const SkillGapChart = () => {
  return (
    <Card className="shadow-card rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-satoshi">Regional Skill Gaps</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={mockData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="skill" 
                angle={-45} 
                textAnchor="end" 
                height={70} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 100]} 
                tickFormatter={(value) => `${value}%`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="gap" name="Skill Gap Percentage">
                {mockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.category)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          *Skill gap represents the percentage difference between industry demand and available workforce skills
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillGapChart;
