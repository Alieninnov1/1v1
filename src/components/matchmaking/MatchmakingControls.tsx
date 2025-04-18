
import { Button } from "@/components/ui/button";
import { PlusCircle, RotateCcw } from "lucide-react";
import { MatchmakingControlsProps } from "./types";

const MatchmakingControls = ({
  isMatching,
  onStartMatching,
  onStopMatching,
  onCreateMatch,
  onResetMatches,
  matchCount
}: MatchmakingControlsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {isMatching ? (
        <Button 
          size="sm" 
          variant="outline"
          className="text-red-400 border-red-500/30 hover:bg-red-900/20 hover:border-red-500/50"
          onClick={onStopMatching}
        >
          Stop Engine
        </Button>
      ) : (
        <Button 
          size="sm"
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-900/20"
          onClick={onStartMatching}
        >
          Start Engine
        </Button>
      )}
      
      <Button 
        size="sm" 
        variant="outline"
        className="bg-black/30 hover:bg-black/40 border-purple-500/20 hover:border-purple-500/40"
        onClick={onCreateMatch}
      >
        <PlusCircle size={14} className="mr-1 text-purple-300" /> 
        New Match
      </Button>
      
      <Button
        size="sm"
        variant="ghost"
        className="text-gray-300 hover:text-white hover:bg-gray-800/50"
        onClick={onResetMatches}
      >
        <RotateCcw size={14} className="mr-1" />
        Reset
      </Button>
    </div>
  );
};

export default MatchmakingControls;
