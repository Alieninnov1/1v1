
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { RefreshCcw, Search, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface DataSource {
  id: string;
  name: string;
  status: "active" | "idle" | "error";
  lastUpdated: string;
}

export interface ScrapedData {
  topic: string;
  keywords: string[];
  volume: number;
  trends: "up" | "down" | "stable";
  source: string;
}

const mockSources: DataSource[] = [
  { id: "src1", name: "LinkedIn Job Trends", status: "active", lastUpdated: "5m ago" },
  { id: "src2", name: "Indeed Skill Analytics", status: "active", lastUpdated: "3h ago" },
  { id: "src3", name: "OECD Education Data", status: "active", lastUpdated: "1d ago" },
  { id: "src4", name: "UNESCO Skills Framework", status: "idle", lastUpdated: "2d ago" },
  { id: "src5", name: "World Economic Forum", status: "error", lastUpdated: "Failed" },
];

const mockScrapedData: ScrapedData[] = [
  { 
    topic: "Machine Learning",
    keywords: ["neural networks", "deep learning", "TensorFlow"],
    volume: 8540,
    trends: "up",
    source: "LinkedIn Job Trends" 
  },
  { 
    topic: "Blockchain Development",
    keywords: ["smart contracts", "web3", "Solidity"],
    volume: 5230,
    trends: "up",
    source: "Indeed Skill Analytics" 
  },
  { 
    topic: "DevOps",
    keywords: ["CI/CD", "Docker", "Kubernetes"],
    volume: 12350,
    trends: "up",
    source: "LinkedIn Job Trends" 
  },
  { 
    topic: "UX Research",
    keywords: ["user testing", "wireframing", "empathy mapping"],
    volume: 4120,
    trends: "stable",
    source: "OECD Education Data" 
  },
  { 
    topic: "Data Visualization",
    keywords: ["D3.js", "Tableau", "data storytelling"],
    volume: 3890,
    trends: "up",
    source: "Indeed Skill Analytics" 
  },
];

export interface DataScraperProps {
  onDataUpdate?: (data: ScrapedData[]) => void;
  isCompact?: boolean;
}

export function DataScraper({ onDataUpdate, isCompact = false }: DataScraperProps) {
  const [sources, setSources] = useState<DataSource[]>(mockSources);
  const [data, setData] = useState<ScrapedData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Simulate initial data load
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      setData(mockScrapedData);
      setIsLoading(false);
      
      if (onDataUpdate) {
        onDataUpdate(mockScrapedData);
      }
    };
    
    loadData();
  }, [onDataUpdate]);
  
  const handleRefresh = async () => {
    setIsLoading(true);
    toast({
      title: "Refreshing data",
      description: "Connecting to data sources...",
    });
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate updated data
    const updatedSources = sources.map(src => ({
      ...src,
      lastUpdated: src.id === "src5" ? "Just now" : src.lastUpdated,
      status: src.id === "src5" ? "active" as const : src.status
    }));
    
    const newData = [
      ...mockScrapedData,
      { 
        topic: "Quantum Computing",
        keywords: ["qubits", "quantum algorithms", "superposition"],
        volume: 1250,
        trends: "up" as const,
        source: "World Economic Forum" 
      }
    ];
    
    setSources(updatedSources);
    setData(newData);
    setIsLoading(false);
    
    if (onDataUpdate) {
      onDataUpdate(newData);
    }
    
    toast({
      title: "Data refresh complete",
      description: "Found 1 new trending topic",
    });
  };
  
  const filteredData = searchTerm 
    ? data.filter(item => 
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;
  
  if (isCompact) {
    return (
      <div className="xp-window">
        <div className="xp-title-bar">
          <div className="flex items-center">
            <Database size={14} />
            <span className="ml-2">Live Data Sources</span>
          </div>
        </div>
        <div className="xp-window-content p-3">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
              {sources.filter(s => s.status === "active").length} Active Sources
            </Badge>
            <Button size="sm" variant="outline" className="h-7 text-xs flex gap-1" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCcw size={12} className={`${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
          
          <div className="text-xs space-y-1.5">
            {sources.slice(0, 3).map(source => (
              <div key={source.id} className="flex items-center justify-between">
                <span className="font-medium">{source.name}</span>
                <div className="flex items-center gap-1.5">
                  <span>{source.lastUpdated}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    source.status === "active" ? "bg-green-500" : 
                    source.status === "idle" ? "bg-yellow-500" : "bg-red-500"
                  }`}></span>
                </div>
              </div>
            ))}
            {sources.length > 3 && (
              <div className="text-center text-xs text-blue-600 hover:underline cursor-pointer">
                +{sources.length - 3} more sources
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="xp-window">
      <div className="xp-title-bar">
        <div className="flex items-center">
          <Database size={14} />
          <span className="ml-2">Data Scraper & API Insights</span>
        </div>
      </div>
      <div className="xp-window-content p-4">
        <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search topics, keywords..." 
              className="pl-8 pr-3 py-1.5 border rounded w-full text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-800 border-green-200">
              {sources.filter(s => s.status === "active").length} Active
            </Badge>
            <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">
              {sources.filter(s => s.status === "idle").length} Idle
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">
              {sources.filter(s => s.status === "error").length} Error
            </Badge>
            <Button size="sm" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCcw size={14} className={`mr-1 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {isLoading ? (
            // Skeleton loading states
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-md p-3 h-28"></div>
            ))
          ) : (
            filteredData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                className="border rounded-md p-3 bg-white hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  toast({
                    title: item.topic,
                    description: `Keywords: ${item.keywords.join(", ")}`,
                  });
                }}
              >
                <div className="flex justify-between items-start">
                  <h5 className="font-semibold">{item.topic}</h5>
                  <Badge className={
                    item.trends === "up" ? "bg-green-100 text-green-800 border-green-200" :
                    item.trends === "down" ? "bg-red-100 text-red-800 border-red-200" :
                    "bg-blue-100 text-blue-800 border-blue-200"
                  }>
                    {item.trends === "up" ? "↑" : item.trends === "down" ? "↓" : "→"} {item.volume.toLocaleString()}
                  </Badge>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.keywords.map(kw => (
                    <span key={kw} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">{kw}</span>
                  ))}
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Source: {item.source}</span>
                  <span className={`text-xs ${
                    item.trends === "up" ? "text-green-600" : 
                    item.trends === "down" ? "text-red-600" : 
                    "text-blue-600"
                  }`}>
                    {item.trends === "up" ? "Trending up" : 
                     item.trends === "down" ? "Trending down" : 
                     "Stable trend"}
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
        
        {filteredData.length === 0 && !isLoading && (
          <div className="text-center p-4">
            <p className="text-gray-500">No results found for "{searchTerm}"</p>
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t text-xs text-gray-500">
          <p>Last global refresh: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
