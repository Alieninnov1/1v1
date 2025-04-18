
import { useEffect } from "react";
import { ArrowRightLeft, Sparkles } from "lucide-react";
import { useMatchGeneration } from "@/hooks/useMatchGeneration";
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
  const {
    matches,
    isMatching,
    matchCount,
    averageScore,
    handleStartMatching,
    handleStopMatching,
    handleCreateMatch,
    handleResetMatches
  } = useMatchGeneration(animationSpeed);

  useEffect(() => {
    let matchInterval: NodeJS.Timeout;
    
    if (isMatching && autoMatch) {
      matchInterval = setInterval(handleCreateMatch, animationSpeed);
    }
    
    return () => {
      if (matchInterval) clearInterval(matchInterval);
    };
  }, [isMatching, animationSpeed, autoMatch, handleCreateMatch]);

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
