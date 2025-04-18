
import { useEffect } from "react";
import { ArrowRightLeft, Sparkles, Zap } from "lucide-react";
import { useMatchGeneration } from "@/hooks/useMatchGeneration";
import MatchmakingControls from "./MatchmakingControls";
import MatchStats from "./MatchStats";
import MatchResultsList from "./MatchResultsList";
import { motion } from "framer-motion";

interface MatchmakingEngineProps {
  animationSpeed?: number;
  autoMatch?: boolean;
  showHeader?: boolean;
}

const MatchmakingEngine = ({ 
  animationSpeed = 1500,
  autoMatch = true,
  showHeader = true
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="xp-window w-full backdrop-blur-md bg-gray-900/80 border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden transition-all hover:border-purple-500/40 hover:shadow-purple-500/10"
    >
      {showHeader && (
        <div className="xp-title-bar flex justify-between items-center bg-gradient-to-r from-purple-900/90 to-indigo-900/90 p-4 border-b border-purple-500/30">
          <div className="flex items-center">
            <ArrowRightLeft size={18} className="mr-3 text-purple-300" />
            <div>
              <h3 className="font-semibold text-white/90 text-lg">Curriculum-Industry Matchmaking Engine</h3>
              <p className="text-xs text-gray-300 mt-1">Real-time skill gap analysis and opportunity matching</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-purple-500/30 text-purple-300 px-2 py-1 rounded-full border border-purple-500/40 flex items-center">
              <Zap size={10} className="mr-1" />
              LIVE DEMO
            </span>
          </div>
        </div>
      )}

      <div className="xp-window-content p-5">
        <div className="mb-6 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 p-5 rounded-lg border border-purple-500/30 shadow-inner">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className="text-base font-semibold mb-2 flex items-center text-white">
                <Sparkles size={18} className="text-yellow-400 mr-2" />
                AI-Powered Matchmaking
              </h3>
              <p className="text-sm text-gray-300">
                Watch as our AI engine aligns curriculum needs with industry demands in real-time,
                creating precise matches between educational content and workforce requirements.
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
    </motion.div>
  );
};

export default MatchmakingEngine;
