
import { useState } from "react";
import { trackEvent } from "@/utils/analytics";
import CurriculumHeader from "./demo/CurriculumHeader";
import AnalysisPanel from "./demo/AnalysisPanel";
import ResultsPanel from "./demo/ResultsPanel";

const CurriculumAIDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("tech");
  
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    trackEvent('curriculumRecommendation', { industry: selectedIndustry });
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };
  
  const handleReset = () => {
    setAnalysisComplete(false);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900/80 to-indigo-900/40">
      <div className="container mx-auto px-4 md:px-6">
        <CurriculumHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <AnalysisPanel 
              selectedIndustry={selectedIndustry}
              setSelectedIndustry={setSelectedIndustry}
              isAnalyzing={isAnalyzing}
              analysisComplete={analysisComplete}
              onAnalyze={handleAnalyze}
              onReset={handleReset}
            />
          </div>
          
          <div className="lg:col-span-3">
            <ResultsPanel 
              isAnalyzing={isAnalyzing}
              analysisComplete={analysisComplete}
              selectedIndustry={selectedIndustry}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumAIDemo;

