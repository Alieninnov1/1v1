
import { useEffect, useState } from "react";
import { Search, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { SourceStatusBadges } from "./data-scraper/SourceStatusBadges";
import { CompactView } from "./data-scraper/CompactView";
import { DataCard } from "./data-scraper/DataCard";
import { DataSource, ScrapedData, DataScraperProps } from "./data-scraper/types";

// Explicitly re-export types for external usage
export type { DataSource, ScrapedData, DataScraperProps } from "./data-scraper/types";

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

export function DataScraper({ onDataUpdate, isCompact = false }: DataScraperProps) {
  const [sources, setSources] = useState<DataSource[]>(mockSources);
  const [data, setData] = useState<ScrapedData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
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
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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
  
  if (isCompact) {
    return <CompactView sources={sources} isLoading={isLoading} onRefresh={handleRefresh} />;
  }

  const filteredData = searchTerm 
    ? data.filter(item => 
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.keywords.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;
  
  return (
    <div className="xp-window">
      <div className="xp-title-bar">
        <div className="flex items-center">
          <Search size={14} />
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
            <SourceStatusBadges sources={sources} />
            <Button size="sm" onClick={handleRefresh} disabled={isLoading}>
              <RefreshCcw size={14} className={`mr-1 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {isLoading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 rounded-md p-3 h-28"></div>
            ))
          ) : (
            filteredData.map((item, idx) => (
              <DataCard key={idx} item={item} index={idx} />
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
