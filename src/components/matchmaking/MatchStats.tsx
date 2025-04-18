
import React from "react";
import { Badge } from "@/components/ui/badge";
import { MatchStatsProps } from "./types";
import { Activity, Gauge, BarChart3, Sparkles } from "lucide-react";

const MatchStats = ({ 
  matchCount, 
  isMatching,
  averageScore
}: MatchStatsProps) => {
  // Generate color based on average score
  const getScoreColor = () => {
    if (averageScore >= 80) return "text-green-400";
    if (averageScore >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  // Generate rating text based on average score
  const getRatingText = () => {
    if (averageScore >= 80) return "Excellent";
    if (averageScore >= 70) return "Good";
    if (averageScore >= 60) return "Moderate";
    if (averageScore >= 40) return "Fair";
    return "Poor";
  };

  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Match Count */}
      <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Activity size={16} className="text-blue-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-300">Total Matches</h4>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">{matchCount}</span>
          <Badge variant="outline" className={`${isMatching ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/50 text-gray-400'}`}>
            {isMatching ? 'ACTIVE' : 'IDLE'}
          </Badge>
        </div>
      </div>

      {/* Average Score */}
      <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Gauge size={16} className="text-purple-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-300">Average Match Score</h4>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${getScoreColor()}`}>
            {averageScore.toFixed(1)}%
          </span>
          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/40">
            {getRatingText()}
          </Badge>
        </div>
      </div>

      {/* Match Quality */}
      <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <BarChart3 size={16} className="text-indigo-400 mr-2" />
          <h4 className="text-sm font-medium text-gray-300">Match Distribution</h4>
        </div>
        <div className="flex items-center gap-1 h-6">
          {/* Visual representation of match quality distribution */}
          {matchCount > 0 ? (
            <>
              <div className="h-full bg-green-500/70 rounded" style={{ width: `${Math.min(30, Math.random() * 40)}%` }}></div>
              <div className="h-full bg-yellow-500/70 rounded" style={{ width: `${Math.min(40, Math.random() * 50)}%` }}></div>
              <div className="h-full bg-orange-500/70 rounded" style={{ width: `${Math.min(20, Math.random() * 30)}%` }}></div>
              <div className="h-full bg-red-500/70 rounded" style={{ width: `${Math.min(10, Math.random() * 20)}%` }}></div>
            </>
          ) : (
            <div className="text-gray-500 text-sm italic flex items-center">
              <Sparkles size={14} className="mr-1 text-gray-400" /> 
              Waiting for match data...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchStats;
