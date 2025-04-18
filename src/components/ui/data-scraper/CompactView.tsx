
import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataSource } from "./types";
import { RefreshCcw } from "lucide-react";

interface CompactViewProps {
  sources: DataSource[];
  isLoading: boolean;
  onRefresh: () => void;
}

export const CompactView = ({ sources, isLoading, onRefresh }: CompactViewProps) => {
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
          <Button size="sm" variant="outline" className="h-7 text-xs flex gap-1" onClick={onRefresh} disabled={isLoading}>
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
};
