
import { DataScraper } from "@/components/ui/data-scraper";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ScrapedData } from "@/components/ui/data-scraper/types";
import { Badge } from "@/components/ui/badge";
import { Database, Filter, TrendingUp } from "lucide-react";

const LiveDataTab = () => {
  const [scrapedData, setScrapedData] = useState<ScrapedData[]>([]);
  
  const handleDataUpdate = (data: ScrapedData[]) => {
    setScrapedData(data);
  };
  
  // Calculate statistics from scraped data
  const trendingTopics = scrapedData
    .filter(item => item.trends === "up")
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 3);
    
  const totalVolume = scrapedData.reduce((sum, item) => sum + item.volume, 0);
  const uniqueSources = [...new Set(scrapedData.map(item => item.source))].length;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <DataScraper onDataUpdate={handleDataUpdate} />
      </div>
      <div className="md:col-span-1 space-y-6">
        <Card className="shadow-card rounded-xl border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-helix-purple" />
              Top Trending Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            {trendingTopics.length > 0 ? (
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <p className="font-medium">{topic.topic}</p>
                      <p className="text-xs text-gray-500">{topic.source}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {topic.volume.toLocaleString()}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">No trending topics available yet</p>
            )}
          </CardContent>
        </Card>
        
        <Card className="shadow-card rounded-xl border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="h-5 w-5 text-helix-purple" />
              Data Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-sm">Total Data Points</p>
                <Badge variant="outline">{scrapedData.length}</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-sm">Total Volume</p>
                <Badge variant="outline">{totalVolume.toLocaleString()}</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-sm">Data Sources</p>
                <Badge variant="outline">{uniqueSources}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card rounded-xl border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-5 w-5 text-helix-purple" />
              Topic Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center">
              <p className="text-sm text-gray-500 italic text-center">
                Interactive chart visualization will appear here as more data is collected
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveDataTab;
