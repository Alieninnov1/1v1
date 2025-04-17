
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Zap, Users, Database, Menu } from "lucide-react";
import TrendingTopicsTab from "./tabs/TrendingTopicsTab";
import FeedbackWallTab from "./tabs/FeedbackWallTab";
import MatchmakingTab from "./tabs/MatchmakingTab";
import LiveDataTab from "./tabs/LiveDataTab";
import DiscussionSidebar from "./DiscussionSidebar";

interface DiscussionTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DiscussionTabs = ({ activeTab, setActiveTab }: DiscussionTabsProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const tabs = [
    { id: "trending", label: "Trending Topics", icon: <Zap size={16} /> },
    { id: "feedback", label: "Feedback Wall", icon: <MessageSquare size={16} /> },
    { id: "matchmaking", label: "Matchmaking", icon: <Users size={16} /> },
    { id: "livedata", label: "Live Data", icon: <Database size={16} /> },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <div className="xp-taskbar rounded-t-lg overflow-hidden flex md:hidden justify-between px-2 py-1 items-center">
          <div className="xp-start-button text-xs flex items-center gap-1" onClick={() => setShowSidebar(!showSidebar)}>
            <Menu size={12} />
            <span>Start</span>
          </div>
          <div className="text-xs text-white">HelixHub XP</div>
        </div>
        
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileTap={{ scale: 0.97 }}
            className={`xp-button flex items-center justify-center gap-2 rounded-t-lg ${
              activeTab === tab.id 
                ? "bg-white text-blue-800 font-bold border-b-0 shadow-inner" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-100"
            } px-4 py-2 text-sm transition-all duration-200`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div 
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg p-4"
          >
            <div className="pb-4">
              <DiscussionSidebar onClose={() => setShowSidebar(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* XP-style content window */}
      <motion.div 
        className="xp-window-content bg-white p-1 rounded-b-lg shadow-inner overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="min-h-[60vh] overflow-y-auto scrollbar-hidden p-4">
          <div className="hidden md:block md:float-right md:w-1/4 md:pl-4">
            <DiscussionSidebar />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="window-appear md:w-3/4 md:float-left"
            >
              {activeTab === "trending" && <TrendingTopicsTab />}
              {activeTab === "feedback" && <FeedbackWallTab />}
              {activeTab === "matchmaking" && <MatchmakingTab />}
              {activeTab === "livedata" && <LiveDataTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default DiscussionTabs;
