
import { MatchStatsProps } from "./types";

const MatchStats = ({ matchCount, isMatching, averageScore }: MatchStatsProps) => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
      <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20 shadow-sm backdrop-blur-sm">
        <div className="text-xs text-gray-400">Matches Generated</div>
        <div className="text-xl font-semibold text-purple-300">{matchCount}</div>
      </div>
      <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20 shadow-sm backdrop-blur-sm">
        <div className="text-xs text-gray-400">Engine Status</div>
        <div className="text-sm font-medium">
          {isMatching ? (
            <span className="text-green-400 flex items-center justify-center">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Active
            </span>
          ) : (
            <span className="text-amber-400">Standby</span>
          )}
        </div>
      </div>
      <div className="bg-black/40 rounded-lg p-3 border border-purple-500/20 shadow-sm backdrop-blur-sm">
        <div className="text-xs text-gray-400">Match Quality</div>
        <div className="text-sm font-medium text-blue-400">
          {averageScore > 0 ? `${Math.round(averageScore)}%` : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default MatchStats;
