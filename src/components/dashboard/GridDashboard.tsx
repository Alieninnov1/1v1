
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Building2 } from "lucide-react";

interface DataCard {
  id: string;
  title: string;
  type: "government" | "sme" | "student";
  metric: number;
  trend: "up" | "down" | "stable";
  description: string;
}

const mockData: DataCard[] = [
  {
    id: "1",
    title: "Policy Impact Score",
    type: "government",
    metric: 85,
    trend: "up",
    description: "Current effectiveness of educational policies"
  },
  {
    id: "2",
    title: "Industry Alignment",
    type: "sme",
    metric: 72,
    trend: "stable",
    description: "Curriculum alignment with industry needs"
  },
  {
    id: "3",
    title: "Learning Engagement",
    type: "student",
    metric: 93,
    trend: "up",
    description: "Student participation and progress metrics"
  }
];

const GridDashboard = () => {
  const [filter, setFilter] = useState<"all" | "government" | "sme" | "student">("all");
  
  const filteredData = filter === "all" 
    ? mockData 
    : mockData.filter(card => card.type === filter);

  const getIcon = (type: DataCard["type"]) => {
    switch(type) {
      case "government":
        return <Building2 className="h-5 w-5 text-blue-500" />;
      case "sme":
        return <Briefcase className="h-5 w-5 text-green-500" />;
      case "student":
        return <GraduationCap className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          size="sm"
          className={filter === "all" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          All
        </Button>
        <Button 
          variant={filter === "government" ? "default" : "outline"}
          onClick={() => setFilter("government")}
          size="sm"
          className={filter === "government" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Government
        </Button>
        <Button 
          variant={filter === "sme" ? "default" : "outline"}
          onClick={() => setFilter("sme")}
          size="sm"
          className={filter === "sme" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Industry
        </Button>
        <Button 
          variant={filter === "student" ? "default" : "outline"}
          onClick={() => setFilter("student")}
          size="sm"
          className={filter === "student" ? "bg-helix-purple hover:bg-helix-purple/90" : ""}
        >
          Students
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="border-none shadow-card overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getIcon(card.type)}
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    card.trend === "up" ? "bg-green-100 text-green-800" :
                    card.trend === "down" ? "bg-red-100 text-red-800" :
                    "bg-blue-100 text-blue-800"
                  }`}>
                    {card.metric}%
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GridDashboard;
