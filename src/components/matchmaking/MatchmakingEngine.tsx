import { useState, useEffect } from "react";
import { ArrowRightLeft, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { skillsData, industriesData } from "./matchmakingData";
import { trackEvent, trackMatchAttempt } from "@/utils/analytics";
import { MatchResult } from "./types";
import MatchmakingControls from "./MatchmakingControls";
import MatchStats from "./MatchStats";
import MatchResultsList from "./MatchResultsList";

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

  const generateMatch = (): MatchResult => {
    const skill = skillsData[Math.floor(Math.random() * skillsData.length)];
    const industry = industriesData[Math.floor(Math.random() * industriesData.length)];
    
    const score = Math.floor(Math.random() * 61) + 40; // 40-100 range
    
    let relevance = "Medium";
    if (score >= 85) relevance = "High";
    else if (score < 60) relevance = "Low";
    
    let action = "";
    if (score < 60) action = "Curriculum Update Needed";
    else if (score < 75) action = "Minor Alignment Recommended";
    
    const urgencyRate = (100 - score) / 100;
    trackMatchAttempt(parseFloat(urgencyRate.toFixed(2)), relevance.toLowerCase());
    
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

  const handleStartMatching = () => {
    if (isMatching) return;
    
    setIsMatching(true);
    trackEvent('simulationStarted', { type: 'matchmaking', automated: autoMatch });
    
    toast({
      title: "Matchmaking Engine Started",
      description: "Analyzing curriculum against industry needs in real-time",
    });
  };

  const handleStopMatching = () => {
    if (!isMatching) return;
    
    setIsMatching(false);
    trackEvent('simulationStopped', { matchesGenerated: matchCount });
    
    toast({
      title: "Matchmaking Engine Paused",
      description: `Generated ${matchCount} curriculum-industry matches`,
    });
  };

  const handleCreateMatch = () => {
    const newMatch = generateMatch();
    setMatches(prev => [newMatch, ...prev].slice(0, 50));
    setMatchCount(prev => prev + 1);
    
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

  const handleResetMatches = () => {
    setMatches([]);
    setMatchCount(0);
    trackEvent('matchesReset', { previousCount: matchCount });
    
    toast({
      title: "Matchmaking Reset",
      description: "All matches have been cleared",
    });
  };

  useEffect(() => {
    let matchInterval: NodeJS.Timeout;
    
    if (isMatching && autoMatch) {
      matchInterval = setInterval(handleCreateMatch, animationSpeed);
    }
    
    return () => {
      if (matchInterval) clearInterval(matchInterval);
    };
  }, [isMatching, animationSpeed, autoMatch]);

  const averageScore = matches.length > 0 
    ? matches.reduce((acc, match) => acc + match.matchScore, 0) / matches.length
    : 0;

  return (
    <div className="xp-window w-full backdrop-blur-md bg-gray-900/60 border border-purple-500/20 rounded-xl shadow-2xl overflow-hidden transition-all hover:border-purple-500/30">
      <div className="xp-title-bar flex justify-between items-center bg-gradient-to-r from-purple-900/80 to-indigo-900/80 p-3 border-b border-purple-500/30">
        <div className="flex items-center">
          <ArrowRightLeft size={16} className="mr-2 text-purple-300" />
          <span className="font-semibold text-white/90">Curriculum-Industry Matchmaking Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">LIVE DEMO</span>
        </div>
      </div>

      <div className="xp-window-content p-4">
        <div className="mb-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 rounded-lg border border-purple-500/20 shadow-inner">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div>
              <h3 className="text-sm font-semibold mb-1 flex items-center text-white">
                <Sparkles size={16} className="text-yellow-400 mr-2" />
                Live Matchmaking Demo
              </h3>
              <p className="text-xs text-gray-300">
                Watch curriculum needs align with industry demands in real-time
              </p>
            </div>
            
            <MatchmakingControls 
              isMatching={isMatching}
              onStartMatching={handleStartMatching}
              onStopMatching={handleStopMatching}
              onCreateMatch={handleCreateMatch}
              onResetMatches={handleResetMatches}
              matchCount={matchCount}
            />
          </div>
          
          <MatchStats 
            matchCount={matchCount}
            isMatching={isMatching}
            averageScore={averageScore}
          />
        </div>
        
        <MatchResultsList matches={matches} />
      </div>
    </div>
  );
};

export default MatchmakingEngine;
