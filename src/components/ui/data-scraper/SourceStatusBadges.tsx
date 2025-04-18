
import { Badge } from "@/components/ui/badge";
import { DataSource } from "./types";

interface SourceStatusBadgesProps {
  sources: DataSource[];
}

export const SourceStatusBadges = ({ sources }: SourceStatusBadgesProps) => {
  return (
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
    </div>
  );
};
