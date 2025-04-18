
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Briefcase, FileText, RefreshCw, ChevronRight, AlertTriangle, Check } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

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

const IndustrySelector = ({ 
  selectedIndustry, 
  setSelectedIndustry 
}: { 
  selectedIndustry: string; 
  setSelectedIndustry: (industry: string) => void;
}) => {
  const industries = [
    { id: "tech", name: "Tech & Software", icon: "💻" },
    { id: "healthcare", name: "Healthcare", icon: "🏥" },
    { id: "finance", name: "Finance", icon: "💰" },
    { id: "manufacturing", name: "Manufacturing", icon: "🏭" }
  ];
  
  return (
    <div className="space-y-3">
      {industries.map(industry => (
        <div 
          key={industry.id}
          className={`
            p-3 rounded-lg cursor-pointer transition-all border
            ${selectedIndustry === industry.id ? 
              'bg-purple-900/30 border-purple-500' : 
              'bg-gray-700/30 border-gray-700 hover:bg-gray-700/50'}
          `}
          onClick={() => setSelectedIndustry(industry.id)}
        >
          <div className="flex items-center">
            <div className="text-xl mr-3">{industry.icon}</div>
            <div className="font-medium">{industry.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DataSourcesCard = () => {
  return (
    <Card className="bg-gray-800/30 border border-gray-700">
      <CardContent className="p-4 text-sm">
        <h4 className="font-semibold mb-2 text-gray-300">Data Sources</h4>
        <ul className="space-y-1 text-gray-400">
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> LinkedIn Job Trends
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Bureau of Labor Statistics
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Industry Survey Data
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-1" /> Academic Performance Metrics
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

const RecommendationResults = ({ industry }: { industry: string }) => {
  const recommendations = getIndustryRecommendations(industry);
  
  return (
    <Tabs defaultValue="curriculum">
      <TabsList className="grid grid-cols-3 mb-6">
        <TabsTrigger value="curriculum">Curriculum Updates</TabsTrigger>
        <TabsTrigger value="skills">Skill Gaps</TabsTrigger>
        <TabsTrigger value="trends">Market Trends</TabsTrigger>
      </TabsList>
      
      <TabsContent value="curriculum" className="space-y-4">
        {recommendations.curriculum.map((item, i) => (
          <RecommendationItem 
            key={i}
            title={item.title}
            description={item.description}
            icon={item.critical ? <AlertTriangle className="text-amber-500" /> : <Check className="text-green-500" />}
            critical={item.critical}
          />
        ))}
      </TabsContent>
      
      <TabsContent value="skills" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendations.skills.map((skill, i) => (
            <SkillItem 
              key={i}
              name={skill.name}
              demand={skill.demand}
              growth={skill.growth}
            />
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="trends" className="space-y-4">
        {recommendations.trends.map((trend, i) => (
          <TrendItem 
            key={i}
            name={trend.name}
            description={trend.description}
            impact={trend.impact}
          />
        ))}
      </TabsContent>
    </Tabs>
  );
};

const RecommendationItem = ({ 
  title, 
  description, 
  icon, 
  critical 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  critical: boolean;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-lg border ${critical ? 'border-amber-600/30 bg-amber-900/10' : 'border-green-600/30 bg-green-900/10'}`}
    >
      <div className="flex">
        <div className="mt-1 mr-3">
          {icon}
        </div>
        <div>
          <h4 className="font-bold mb-1">{title}</h4>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const SkillItem = ({ 
  name, 
  demand, 
  growth 
}: { 
  name: string; 
  demand: number; 
  growth: number;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
    >
      <h4 className="font-bold text-purple-400">{name}</h4>
      <div className="mt-2 space-y-1">
        <ProgressBar label="Demand" value={demand} max={100} />
        <ProgressBar label="Growth" value={growth} max={100} color="bg-green-500" />
      </div>
    </motion.div>
  );
};

const ProgressBar = ({ 
  label, 
  value, 
  max, 
  color = "bg-blue-500" 
}: { 
  label: string; 
  value: number; 
  max: number;
  color?: string;
}) => {
  return (
    <div className="flex items-center text-xs">
      <span className="w-16 text-gray-400">{label}:</span>
      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden ml-2">
        <div 
          className={`h-full ${color}`} 
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
      <span className="ml-2">{value}%</span>
    </div>
  );
};

const TrendItem = ({ 
  name, 
  description, 
  impact 
}: { 
  name: string; 
  description: string;
  impact: "high" | "medium" | "low";
}) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high": return "text-red-500";
      case "medium": return "text-amber-500";
      case "low": return "text-green-500";
      default: return "text-gray-500";
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg bg-gray-800/40 border border-gray-700"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold">{name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full bg-gray-700 ${getImpactColor(impact)}`}>
          {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </motion.div>
  );
};

// Helper function to get industry-specific recommendations
const getIndustryRecommendations = (industry: string) => {
  switch (industry) {
    case "tech":
      return {
        curriculum: [
          {
            title: "Add Advanced Cloud Computing Course",
            description: "Integrate AWS, Azure, and GCP certification paths into the curriculum to address high demand for cloud skills.",
            critical: true
          },
          {
            title: "Enhance Machine Learning Track",
            description: "Expand current AI/ML coursework to include practical applications with TensorFlow and PyTorch.",
            critical: true
          },
          {
            title: "Cybersecurity Specialization",
            description: "Develop a comprehensive cybersecurity track with hands-on labs and industry certification alignment.",
            critical: false
          }
        ],
        skills: [
          { name: "DevOps & CI/CD", demand: 87, growth: 92 },
          { name: "Cloud Architecture", demand: 78, growth: 85 },
          { name: "Data Engineering", demand: 83, growth: 76 },
          { name: "MLOps", demand: 65, growth: 93 }
        ],
        trends: [
          {
            name: "Zero Trust Security",
            description: "Demand for zero trust security models is growing rapidly across enterprise environments.",
            impact: "high"
          },
          {
            name: "Serverless Architecture",
            description: "Continued shift toward serverless computing models is changing how applications are built.",
            impact: "medium"
          },
          {
            name: "AI Governance",
            description: "Growing need for ethical AI considerations and governance frameworks.",
            impact: "medium"
          }
        ]
      };
    case "healthcare":
      return {
        curriculum: [
          {
            title: "Medical Data Science Specialization",
            description: "Create specialized tracks for health data analysis, HIPAA compliance, and healthcare AI.",
            critical: true
          },
          {
            title: "Telehealth Technologies Course",
            description: "Develop curriculum around remote healthcare delivery and monitoring technologies.",
            critical: false
          },
          {
            title: "Healthcare Informatics Revision",
            description: "Update existing informatics courses to incorporate latest EHR standards and interoperability frameworks.",
            critical: true
          }
        ],
        skills: [
          { name: "Health Data Privacy", demand: 92, growth: 88 },
          { name: "Remote Patient Monitoring", demand: 73, growth: 95 },
          { name: "Clinical Decision Support", demand: 79, growth: 82 },
          { name: "Healthcare Interoperability", demand: 85, growth: 90 }
        ],
        trends: [
          {
            name: "AI Diagnostics",
            description: "Machine learning models for diagnostic support are becoming mainstream in clinical settings.",
            impact: "high"
          },
          {
            name: "Wearable Integration",
            description: "Consumer health devices are increasingly integrated with professional healthcare systems.",
            impact: "medium"
          },
          {
            name: "Value-Based Care IT",
            description: "Technology solutions supporting outcomes-based reimbursement models.",
            impact: "high"
          }
        ]
      };
    default:
      return {
        curriculum: [
          {
            title: "Industry-Specific Programming Course",
            description: "Create tailored programming curriculum focused on industry needs and applications.",
            critical: true
          },
          {
            title: "Update Data Analysis Components",
            description: "Enhance existing coursework with industry-specific data analysis techniques and tools.",
            critical: false
          },
          {
            title: "Add Project Management Framework",
            description: "Incorporate agile and traditional project management methodologies relevant to the industry.",
            critical: false
          }
        ],
        skills: [
          { name: "Data Analytics", demand: 75, growth: 85 },
          { name: "Industry Software", demand: 80, growth: 70 },
          { name: "Process Automation", demand: 65, growth: 90 },
          { name: "Regulatory Compliance", demand: 70, growth: 75 }
        ],
        trends: [
          {
            name: "Digital Transformation",
            description: "Organizations are increasingly adopting digital technologies to transform business processes.",
            impact: "high"
          },
          {
            name: "Remote Collaboration",
            description: "Tools and methodologies for distributed teams are becoming essential.",
            impact: "medium"
          },
          {
            name: "Sustainability Tech",
            description: "Growing emphasis on technologies that support sustainable business practices.",
            impact: "medium"
          }
        ]
      };
  }
};

export default CurriculumAIDemo;
