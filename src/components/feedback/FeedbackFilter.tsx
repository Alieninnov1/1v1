
import { Button } from "@/components/ui/button";

interface FeedbackFilterProps {
  filter: "all" | "student" | "teacher" | "policy" | "industry";
  onFilterChange: (filter: "all" | "student" | "teacher" | "policy" | "industry") => void;
}

const FeedbackFilter = ({ filter, onFilterChange }: FeedbackFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
      <Button 
        size="sm" 
        variant={filter === "all" ? "default" : "outline"} 
        onClick={() => onFilterChange("all")}
        className="text-xs"
      >
        All
      </Button>
      <Button 
        size="sm" 
        variant={filter === "student" ? "default" : "outline"} 
        onClick={() => onFilterChange("student")}
        className="text-xs"
      >
        Students
      </Button>
      <Button 
        size="sm" 
        variant={filter === "teacher" ? "default" : "outline"} 
        onClick={() => onFilterChange("teacher")}
        className="text-xs"
      >
        Academia
      </Button>
      <Button 
        size="sm" 
        variant={filter === "industry" ? "default" : "outline"} 
        onClick={() => onFilterChange("industry")}
        className="text-xs"
      >
        Industry
      </Button>
      <Button 
        size="sm" 
        variant={filter === "policy" ? "default" : "outline"} 
        onClick={() => onFilterChange("policy")}
        className="text-xs"
      >
        Policy
      </Button>
    </div>
  );
};

export default FeedbackFilter;
