
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

export interface MatchmakingControlsProps {
  isMatching: boolean;
  onStartMatching: () => void;
  onStopMatching: () => void;
  onCreateMatch: () => void;
  onResetMatches: () => void;
  matchCount: number;
}

export interface MatchStatsProps {
  matchCount: number;
  isMatching: boolean;
  averageScore: number;
}

export interface MatchResultsListProps {
  matches: MatchResult[];
}
