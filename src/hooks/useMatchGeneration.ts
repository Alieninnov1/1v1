
import { useState } from 'react';
import { MatchResult } from '@/components/matchmaking/types';
import { skillsData, industriesData } from '@/components/matchmaking/matchmakingData';
import { useToast } from '@/hooks/use-toast';
import { trackEvent, trackMatchAttempt } from '@/utils/analytics';

export const useMatchGeneration = (animationSpeed = 1500) => {
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
    trackEvent('simulationStarted', { type: 'matchmaking', automated: true });
    
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

  const averageScore = matches.length > 0 
    ? matches.reduce((acc, match) => acc + match.matchScore, 0) / matches.length
    : 0;

  return {
    matches,
    isMatching,
    matchCount,
    averageScore,
    handleStartMatching,
    handleStopMatching,
    handleCreateMatch,
    handleResetMatches
  };
};
