
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Brain,
  Briefcase,
  CheckCircle,
  ChevronRight,
  GraduationCap,
  Info,
  Loader,
  SendHorizontal,
  Settings,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GrantSuggestion {
  id: string;
  name: string;
  organization: string;
  amount: string;
  description: string;
  alignment: number;
  category: string;
  deadline: string;
  details?: string;
}

const mockSuggestions: GrantSuggestion[] = [
  {
    id: "grant1",
    name: "Digital Skills Innovation Fund",
    organization: "Department of Education",
    amount: "$50,000 - $250,000",
    description: "Funding for innovative approaches to digital skills training in underserved communities.",
    alignment: 92,
    category: "government",
    deadline: "2025-06-15",
    details: "This fund prioritizes projects that demonstrate measurable outcomes in digital literacy and workforce readiness. Applications require partnerships between educational institutions and at least one industry partner. Reporting is quarterly with final impact assessment."
  },
  {
    id: "grant2",
    name: "Future Tech Workforce Initiative",
    organization: "TechCorp Foundation",
    amount: "$25,000 - $100,000",
    description: "Supporting educational institutions developing curriculum for emerging technologies.",
    alignment: 87,
    category: "industry",
    deadline: "2025-07-22",
    details: "Industry-backed foundation looking for innovative approaches to technology skills training. Strong preference for programs that include mentorship components and direct pathways to employment. Application requires detailed program design and assessment methodology."
  },
  {
    id: "grant3",
    name: "Cross-Sector Innovation Grant",
    organization: "National Science Foundation",
    amount: "$75,000 - $350,000",
    description: "Research grants for projects that bridge academia, industry, and policy making.",
    alignment: 95,
    category: "academia",
    deadline: "2025-05-30",
    details: "Highly competitive grant requiring demonstration of cross-sector collaboration. Projects must address specific regional workforce challenges with data-driven approaches. Preliminary data and methodology are key evaluation criteria. Two-phase application with initial concept paper."
  },
];

// Custom modal component for grant details
const GrantDetailsModal = ({ grant, onClose }: { grant: GrantSuggestion, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-auto"
      >
        <div className="p-5 border-b flex justify-between items-center">
          <h3 className="text-lg font-medium">{grant.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-5">
          <div className="mb-4 flex items-center">
            {getCategoryIcon(grant.category)}
            <span className="ml-2 text-sm text-gray-500">{grant.organization}</span>
            <span className="mx-2 text-gray-400">•</span>
            <Badge className={`${
              grant.alignment >= 90 ? "bg-green-500" :
              grant.alignment >= 80 ? "bg-emerald-500" :
              "bg-blue-500"
            }`}>
              {grant.alignment}% Match
            </Badge>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">{grant.description}</p>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Amount</h4>
            <p className="text-gray-600 dark:text-gray-300">{grant.amount}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Deadline</h4>
            <p className="text-gray-600 dark:text-gray-300">{formatDate(grant.deadline)} ({getTimeRemaining(grant.deadline)})</p>
          </div>
          <div className="mb-4">
            <h4 className="font-medium mb-2">Application Details</h4>
            <p className="text-gray-600 dark:text-gray-300">{grant.details}</p>
          </div>
          <Button 
            className="w-full mt-2 bg-helix-purple hover:bg-purple-700"
            onClick={onClose}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Start Application Process
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "government":
      return <ShieldCheck className="h-4 w-4 text-blue-500" />;
    case "industry":
      return <Briefcase className="h-4 w-4 text-green-500" />;
    case "academia":
      return <GraduationCap className="h-4 w-4 text-purple-500" />;
    default:
      return <Award className="h-4 w-4 text-yellow-500" />;
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }).format(date);
};

const getTimeRemaining = (dateStr: string) => {
  const deadline = new Date(dateStr).getTime();
  const now = new Date().getTime();
  const timeRemaining = deadline - now;
  
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  
  if (days < 0) return "Expired";
  if (days === 0) return "Due today";
  if (days === 1) return "1 day remaining";
  return `${days} days remaining`;
};

const MatchGrants = () => {
  const [ideaText, setIdeaText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<GrantSuggestion[]>([]);
  const [showingResults, setShowingResults] = useState(false);
  const [selectedGrant, setSelectedGrant] = useState<GrantSuggestion | null>(null);
  const { toast } = useToast();

  const handleSearch = () => {
    if (!ideaText.trim()) {
      toast({
        title: "Empty Input",
        description: "Please describe your project idea first.",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setShowingResults(false);
    setSuggestions([]);

    // Simulate OpenAI-based grant matching
    setTimeout(() => {
      setIsSearching(false);
      setSuggestions(mockSuggestions);
      setShowingResults(true);
      
      toast({
        title: "Grants Matched",
        description: `Found ${mockSuggestions.length} potential grants matching your idea.`,
      });
    }, 3000);
  };

  const handleApply = (grant: GrantSuggestion) => {
    setSelectedGrant(grant);
  };

  const closeModal = () => {
    setSelectedGrant(null);
    toast({
      title: "Application Started",
      description: "Grant application process initiated. Details sent to your inbox.",
    });
  };

  return (
    <TooltipProvider>
      <Card className="shadow-md border-none overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-helix-purple to-purple-900 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-purple-300" />
              AI Grant Matchmaker
            </CardTitle>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">Describe your project idea</label>
              <Textarea
                placeholder="Ex: We're developing a curriculum alignment tool that uses AI to match educational content with industry skill demands..."
                className="resize-none h-32 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={ideaText}
                onChange={(e) => setIdeaText(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2">
              <Input 
                placeholder="Optional keywords (AI, education, workforce)"
                className="flex-grow focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              
              <Button
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-helix-purple hover:bg-purple-700 transition-all"
              >
                {isSearching ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Matching...
                  </>
                ) : (
                  <>
                    <SendHorizontal className="mr-2 h-4 w-4" />
                    Find Grants
                  </>
                )}
              </Button>
            </div>

            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Loader className="h-8 w-8 text-helix-purple animate-spin mb-3" />
                    <p className="text-gray-500">Analyzing your project and matching to available grants...</p>
                  </div>
                </motion.div>
              )}
              
              {showingResults && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Matching Grants</h3>
                    <Badge variant="outline" className="flex gap-1 items-center">
                      <Sparkles className="h-3 w-3" />
                      <span>AI-Powered Results</span>
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {suggestions.map((grant, index) => (
                      <motion.div
                        key={grant.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 border rounded-lg hover:shadow-md transition-all card-hover"
                      >
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{grant.name}</h4>
                          <Badge 
                            className={`${
                              grant.alignment >= 90 ? "bg-green-500" :
                              grant.alignment >= 80 ? "bg-emerald-500" :
                              "bg-blue-500"
                            }`}
                          >
                            {grant.alignment}% Match
                          </Badge>
                        </div>
                        
                        <div className="flex items-center mb-2 text-gray-500 text-sm">
                          {getCategoryIcon(grant.category)}
                          <span className="ml-1">{grant.organization}</span>
                          <span className="mx-2">•</span>
                          <span>{grant.amount}</span>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="p-0 ml-2 h-auto">
                                <Info className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <p className="text-xs">
                                Click "View Details" to see complete grant information and application requirements
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{grant.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500 flex items-center">
                            <span>Deadline: {formatDate(grant.deadline)}</span>
                            <span className="mx-1">•</span>
                            <span className={`${
                              getTimeRemaining(grant.deadline).includes("day") ? 
                                parseInt(getTimeRemaining(grant.deadline).split(" ")[0]) < 10 ? 
                                  "text-red-500 font-medium" : 
                                  "text-yellow-600"
                                : ""
                            }`}>
                              {getTimeRemaining(grant.deadline)}
                            </span>
                          </div>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-helix-purple border-helix-purple hover:bg-helix-purple hover:text-white transition-colors"
                            onClick={() => handleApply(grant)}
                          >
                            <CheckCircle className="mr-1 h-3 w-3" />
                            View Details
                            <ChevronRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
      
      {/* Details Modal */}
      <AnimatePresence>
        {selectedGrant && (
          <GrantDetailsModal grant={selectedGrant} onClose={closeModal} />
        )}
      </AnimatePresence>
    </TooltipProvider>
  );
};

export default MatchGrants;
