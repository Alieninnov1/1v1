
import { Brain, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RecommendationResults } from "../recommendation/RecommendationResults";

interface ResultsPanelProps {
  isAnalyzing: boolean;
  analysisComplete: boolean;
  selectedIndustry: string;
}

const ResultsPanel = ({ isAnalyzing, analysisComplete, selectedIndustry }: ResultsPanelProps) => {
  return (
    <Card className="bg-gray-800/50 border border-purple-500/20 h-full">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center">
          <FileText className="mr-2 h-5 w-5 text-purple-400" />
          AI-Generated Curriculum Recommendations
        </h3>
        
        {!analysisComplete ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
            <Brain className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-400">
              {isAnalyzing ? 
                "Analyzing market trends and skill gaps..." : 
                "Select an industry and generate recommendations to see AI-powered curriculum adjustments."}
            </p>
          </div>
        ) : (
          <RecommendationResults industry={selectedIndustry} />
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsPanel;

