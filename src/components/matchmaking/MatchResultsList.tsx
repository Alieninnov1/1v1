
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { School, Building2, CheckCircle2 } from "lucide-react";
import { MatchResultsListProps } from "./types";

const MatchResultsList = ({ matches }: MatchResultsListProps) => {
  return (
    <div className="space-y-4 max-h-[400px] overflow-auto scrollbar-hidden">
      <AnimatePresence>
        {matches.map((match) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
            className={`rounded-lg border p-3 backdrop-blur-sm ${
              match.isNew ? 'animate-pulse border-blue-400/50 bg-blue-900/20' : 'bg-black/40 border-purple-500/20'
            }`}
          >
            <div className="flex flex-wrap justify-between">
              <div className="mb-2 md:mb-0">
                <div className="flex items-center mb-1">
                  <School size={16} className="text-purple-400 mr-2" />
                  <span className="font-medium text-white">{match.skillName}</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Building2 size={14} className="mr-2 text-gray-400" />
                  <span>{match.industryNeed}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2 text-gray-300">Match:</span>
                  <Badge className={
                    match.matchScore >= 85 ? "bg-green-900/30 text-green-300 border border-green-500/30" :
                    match.matchScore >= 60 ? "bg-blue-900/30 text-blue-300 border border-blue-500/30" :
                    "bg-amber-900/30 text-amber-300 border border-amber-500/30"
                  }>
                    {match.matchScore}%
                  </Badge>
                </div>
                
                <div className="text-xs mt-1">
                  {match.actionRequired && (
                    <span className="text-amber-400 flex items-center">
                      <CheckCircle2 size={12} className="mr-1" />
                      {match.actionRequired}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MatchResultsList;
