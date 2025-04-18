
import { useState } from "react";
import { Brain, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IndustrySelector } from "../recommendation/IndustrySelector";
import { DataSourcesCard } from "../recommendation/DataSourcesCard";
import { trackEvent } from "@/utils/analytics";

interface AnalysisPanelProps {
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  isAnalyzing: boolean;
  analysisComplete: boolean;
  onAnalyze: () => void;
  onReset: () => void;
}

const AnalysisPanel = ({
  selectedIndustry,
  setSelectedIndustry,
  isAnalyzing,
  analysisComplete,
  onAnalyze,
  onReset,
}: AnalysisPanelProps) => {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800/50 border border-purple-500/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Brain className="mr-2 h-5 w-5 text-purple-400" />
            Industry Selection
          </h3>
          
          <div className="space-y-4">
            <IndustrySelector 
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
            />
            
            <div className="pt-4">
              <Button 
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Market Needs...
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-4 w-4" />
                    Generate Curriculum Recommendations
                  </>
                )}
              </Button>
            </div>
            
            {analysisComplete && (
              <div className="pt-2">
                <Button 
                  variant="outline" 
                  onClick={onReset}
                  className="w-full border-gray-600"
                >
                  Reset
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <DataSourcesCard />
    </div>
  );
};

export default AnalysisPanel;

