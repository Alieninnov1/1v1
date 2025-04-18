
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export const DataSourcesCard = () => {
  return (
    <Card className="bg-gray-800/30 border border-gray-700">
      <CardContent className="p-4 text-sm">
        <h4 className="font-semibold mb-2 text-gray-300">Data Sources</h4>
        <ul className="space-y-1 text-gray-400">
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> LinkedIn Job Trends
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Bureau of Labor Statistics
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Industry Survey Data
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Academic Performance Metrics
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
