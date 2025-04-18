
import { useState } from "react";
import MatchmakingEngine from "@/components/matchmaking/MatchmakingEngine";
import DiscussionSidebar from "../DiscussionSidebar";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { InfoIcon, Building, BookOpen, Laptop, Globe, Network, Heart, ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const contextData = [
  {
    id: "education",
    title: "Education",
    icon: <BookOpen className="text-blue-400" size={16} />,
    description: "Match students to mentors and projects"
  },
  {
    id: "startups",
    title: "Startups",
    icon: <Laptop className="text-green-400" size={16} />,
    description: "Pair co-founders based on values + rhythms"
  },
  {
    id: "civic",
    title: "Civic Orgs",
    icon: <Building className="text-amber-400" size={16} />,
    description: "Reduce friction in community initiatives"
  },
  {
    id: "climate",
    title: "Climate/Nuclear",
    icon: <Globe className="text-teal-400" size={16} />,
    description: "Sync advocates without tribal chaos"
  },
  {
    id: "web3",
    title: "DAOs/Web3",
    icon: <Network className="text-purple-400" size={16} />,
    description: "Pre-collab trust loop in decentralized teams"
  },
  {
    id: "wellness",
    title: "Mental Health",
    icon: <Heart className="text-red-400" size={16} />,
    description: "Pair seekers with aligned guides"
  }
];

const MatchmakingTab = () => {
  const [engineSpeed, setEngineSpeed] = useState<number>(2000);
  const [selectedContext, setSelectedContext] = useState<string>("education");
  const [showContextSelector, setShowContextSelector] = useState<boolean>(false);

  const activeContext = contextData.find(c => c.id === selectedContext) || contextData[0];

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
              <h3 className="font-medium text-[#f7f8fc]">Universal Trust Engine</h3>
              <p className="text-sm text-[#f7f8fc]/80 mt-1">
                VisionNet functions as a plug-in-ready trust engine for any context where people need to sync before collaborating.
                Try selecting different contexts to see how the engine adapts.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">Universal Plugin</Badge>
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">Context Adaptive</Badge>
                <Badge variant="outline" className="border-[#9b87f5]/30 text-[#9b87f5] bg-[#1A1F2C]">Multi-tenant Ready</Badge>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Context Selector (XP Style) */}
        <div className="mb-6">
          <div className="xp-window bg-[#ECE9D8] border-2 border-[#919B9C] rounded-lg overflow-hidden">
            <div className="xp-title-bar bg-gradient-to-r from-[#0A246A] via-[#0A246A] to-[#A6CAF0] px-3 py-1 flex justify-between items-center">
              <h3 className="text-white text-xs font-bold">Context Selector</h3>
              <button 
                onClick={() => setShowContextSelector(!showContextSelector)}
                className="bg-[#D6D3CE] hover:bg-[#E7E5DC] w-5 h-5 flex items-center justify-center rounded-sm border border-[#ACA899]"
              >
                <ChevronDown size={12} className="text-black" />
              </button>
            </div>
            
            {showContextSelector && (
              <div className="p-3 grid grid-cols-2 md:grid-cols-3 gap-2 max-h-[300px] overflow-auto">
                {contextData.map((context) => (
                  <button
                    key={context.id}
                    onClick={() => {
                      setSelectedContext(context.id);
                      setShowContextSelector(false);
                    }}
                    className={`p-3 text-left rounded border ${
                      selectedContext === context.id
                        ? 'bg-[#FFE7A2] border-[#ACA899]'
                        : 'bg-white border-[#D6D3CE] hover:bg-[#F7F5ED]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {context.icon}
                      <span className="font-medium text-sm">{context.title}</span>
                    </div>
                    <p className="text-xs text-gray-600">{context.description}</p>
                  </button>
                ))}
              </div>
            )}
            
            {/* Selected Context */}
            {!showContextSelector && (
              <div className="p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-b from-[#f0f0f0] to-[#e1e1e1] p-2 rounded-md border border-[#d1d1d1] shadow-inner">
                    {activeContext.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0A246A]">{activeContext.title} Context</h4>
                    <p className="text-xs text-gray-600">{activeContext.description}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="ml-auto text-xs bg-[#ECE9D8] border-[#ACA899] hover:bg-[#F7F5ED]"
                    onClick={() => setShowContextSelector(true)}
                  >
                    Change Context
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <MatchmakingEngine animationSpeed={engineSpeed} />
      </div>
      <div className="md:col-span-1">
        <DiscussionSidebar />
      </div>
    </div>
  );
};

export default MatchmakingTab;
