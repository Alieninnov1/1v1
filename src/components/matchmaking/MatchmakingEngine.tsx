
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRightLeft, 
  CheckCircle2, 
  School, 
  Building2, 
  Briefcase, 
  Sparkles, 
  RotateCcw,
  PlusCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { skillsData, industriesData } from "./matchmakingData";

export interface MatchResult {
  id: string;
  skillName: string;
  industryNeed: string;
  matchScore: number;
  relevance: string;
  actionRequired?: string;
  timestamp: string;
  isNew?: boolean;
}

interface MatchmakingEngineProps {
  animationSpeed?: number;
  autoMatch?: boolean;
}

const MatchmakingEngine = ({ 
  animationSpeed = 1500,
  autoMatch = true
}: MatchmakingEngineProps) => {
  const [matches, setMatches] = useState<MatchResult[]>([]);
  const [isMatching, setIsMatching] = useState(false);
  const [matchCount, setMatchCount] = useState(0);
  const { toast } = useToast();

  // Matching algorithm that pairs skills with industry needs
  const generateMatch = (): MatchResult => {
    const skill = skillsData[Math.floor(Math.random() * skillsData.length)];
    const industry = industriesData[Math.floor(Math.random() * industriesData.length)];
    
    // Generate a match score based on simulated data analysis
    const score = Math.floor(Math.random() * 61) + 40; // 40-100 range
    
    // Determine relevance category
    let relevance = "Medium";
    if (score >= 85) relevance = "High";
    else if (score < 60) relevance = "Low";
    
    // Determine action required
    let action = "";
    if (score < 60) action = "Curriculum Update Needed";
    else if (score < 75) action = "Minor Alignment Recommended";
    
    return {
      id: `match-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      skillName: skill.name,
      industryNeed: industry.name,
      matchScore: score,
      relevance,
      actionRequired: action,
      timestamp: new Date().toISOString(),
      isNew: true
    };
  };

  // Start the matching process
  const handleStartMatching = () => {
    if (isMatching) return;
    
    setIsMatching(true);
    toast({
      title: "Matchmaking Engine Started",
      description: "Analyzing curriculum against industry needs in real-time",
    });
  };

  // Stop the matching process
  const handleStopMatching = () => {
    if (!isMatching) return;
    
    setIsMatching(false);
    toast({
      title: "Matchmaking Engine Paused",
      description: `Generated ${matchCount} curriculum-industry matches`,
    });
  };

  // Reset all matches
  const handleResetMatches = () => {
    setMatches([]);
    setMatchCount(0);
    toast({
      title: "Matchmaking Reset",
      description: "All matches have been cleared",
    });
  };

  // Create a single match on demand
  const handleCreateMatch = () => {
    const newMatch = generateMatch();
    setMatches(prev => [newMatch, ...prev].slice(0, 50)); // Keep max 50 matches
    setMatchCount(prev => prev + 1);
    
    // Flash the "new" indicator briefly
    setTimeout(() => {
      setMatches(prev => 
        prev.map(match => 
          match.id === newMatch.id 
            ? { ...match, isNew: false } 
            : match
        )
      );
    }, 2000);
  };

  // Effect for auto-matching
  useEffect(() => {
    let matchInterval: NodeJS.Timeout;
    
    if (isMatching && autoMatch) {
      matchInterval = setInterval(handleCreateMatch, animationSpeed);
    }
    
    return () => {
      if (matchInterval) clearInterval(matchInterval);
    };
  }, [isMatching, animationSpeed, autoMatch]);

  return (
    <div className="xp-window w-full">
      <div className="xp-title-bar flex justify-between items-center">
        <div className="flex items-center">
          <ArrowRightLeft size={14} className="mr-2" />
          <span>Curriculum-Industry Matchmaking Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-[#ececec] text-black px-1 rounded">LIVE DEMO</span>
        </div>
      </div>

      <div className="xp-window-content p-4">
        <div className="mb-6 bg-gradient-to-r from-[#e7f0fd] to-[#f5f9ff] p-4 rounded-lg border border-[#c1d9f9] shadow-inner">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <h3 className="text-sm font-semibold mb-1 flex items-center">
                <Sparkles size={16} className="text-yellow-500 mr-1" />
                Live Matchmaking Demo
              </h3>
              <p className="text-xs text-gray-600">
                Watching curriculum needs align with industry demands in real-time
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {isMatching ? (
                <Button 
                  size="sm" 
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                  onClick={handleStopMatching}
                >
                  Stop Engine
                </Button>
              ) : (
                <Button 
                  size="sm"
                  className="bg-[#92CD00] hover:bg-[#7DB600] text-white"
                  onClick={handleStartMatching}
                >
                  Start Engine
                </Button>
              )}
              
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleCreateMatch}
              >
                <PlusCircle size={14} className="mr-1" /> 
                New Match
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                onClick={handleResetMatches}
              >
                <RotateCcw size={14} className="mr-1" />
                Reset
              </Button>
            </div>
          </div>
          
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div className="bg-white rounded-lg p-3 border shadow-sm">
              <div className="text-xs text-gray-500">Matches Generated</div>
              <div className="text-xl font-semibold text-helix-purple">{matchCount}</div>
            </div>
            <div className="bg-white rounded-lg p-3 border shadow-sm">
              <div className="text-xs text-gray-500">Engine Status</div>
              <div className="text-sm font-medium">
                {isMatching ? (
                  <span className="text-green-600 flex items-center justify-center">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Active
                  </span>
                ) : (
                  <span className="text-amber-600">Standby</span>
                )}
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 border shadow-sm">
              <div className="text-xs text-gray-500">Match Quality</div>
              <div className="text-sm font-medium text-blue-600">
                {matches.length > 0 ? 
                  `${Math.round(matches.reduce((acc, match) => acc + match.matchScore, 0) / matches.length)}%` : 
                  "N/A"}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 max-h-[400px] overflow-auto scrollbar-hidden">
          <AnimatePresence>
            {matches.length > 0 ? (
              matches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-lg border p-3 ${
                    match.isNew ? 'animate-pulse border-blue-300 bg-blue-50' : 'bg-white'
                  }`}
                >
                  <div className="flex flex-wrap justify-between">
                    <div className="mb-2 md:mb-0">
                      <div className="flex items-center mb-1">
                        <School size={16} className="text-helix-purple mr-2" />
                        <span className="font-medium">{match.skillName}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Building2 size={14} className="mr-2" />
                        <span>{match.industryNeed}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">Match:</span>
                        <Badge className={
                          match.matchScore >= 85 ? "bg-green-100 text-green-800" :
                          match.matchScore >= 60 ? "bg-blue-100 text-blue-800" :
                          "bg-amber-100 text-amber-800"
                        }>
                          {match.matchScore}%
                        </Badge>
                      </div>
                      
                      <div className="text-xs mt-1">
                        {match.actionRequired && (
                          <span className="text-amber-600 flex items-center">
                            <CheckCircle2 size={12} className="mr-1" />
                            {match.actionRequired}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 text-gray-500"
              >
                <div className="flex flex-col items-center">
                  <ArrowRightLeft size={40} className="text-gray-300 mb-2" />
                  <p className="mb-1">No matches generated yet</p>
                  <p className="text-sm text-gray-400">Click "Start Engine" to begin matching curriculum with industry needs</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MatchmakingEngine;
