
import { useState } from "react";
import MatchmakingEngine from "@/components/matchmaking/MatchmakingEngine";
import DiscussionSidebar from "../DiscussionSidebar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";

const MatchmakingTab = () => {
  const [engineSpeed, setEngineSpeed] = useState<number>(2000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="eth-card p-4 flex items-start eth-fade-in">
            <InfoIcon className="text-[#9b87f5] mr-2 mt-0.5 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-medium text-[#f7f8fc]">About the Matchmaking Engine</h3>
              <p className="text-sm text-[#f7f8fc]/80 mt-1">
                This live demo showcases how HelixHub matches curriculum with industry demands in real-time. 
                The engine analyzes skill relevance and provides actionable insights for alignment.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">MVP Feature</Badge>
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">AI-Powered</Badge>
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">Triple Helix Model</Badge>
              </div>
            </div>
          </div>
        </motion.div>
        
        <MatchmakingEngine animationSpeed={engineSpeed} />
      </div>
      <div className="md:col-span-1">
        <DiscussionSidebar />
      </div>
    </div>
  );
};

export default MatchmakingTab;
