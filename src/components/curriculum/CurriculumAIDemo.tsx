
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Briefcase, FileText, RefreshCw } from "lucide-react";
import { trackEvent } from "@/utils/analytics";
import { IndustrySelector } from "./recommendation/IndustrySelector";
import { DataSourcesCard } from "./recommendation/DataSourcesCard";
import { RecommendationResults } from "./recommendation/RecommendationResults";

const CurriculumAIDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("tech");
  
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    trackEvent('curriculumRecommendation', { industry: selectedIndustry });
    
    // Simulate analysis completion after 2 seconds
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
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">AI Curriculum Engine</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience how our AI-powered engine analyzes industry needs and recommends curriculum adjustments in real-time.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Input Column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-800/50 border border-purple-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-purple-400" />
                  Industry Selection
                </h3>
                
                <div className="space-y-4">
                  <IndustrySelector 
                    selectedIndustry={selectedIndustry}
                    setSelectedIndustry={setSelectedIndustry}
                  />
                  
                  <div className="pt-4">
                    <Button 
                      onClick={handleAnalyze}
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
                        onClick={handleReset}
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
          
          {/* Results Column */}
          <div className="lg:col-span-3">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumAIDemo;
