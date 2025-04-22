
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Zap, Users, Database, Menu, X } from "lucide-react";
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

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const sidebarVariants = {
    closed: { x: -280, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
        <div className="flex md:hidden justify-between px-2 py-1 items-center bg-gradient-to-r from-purple-700 to-indigo-700 rounded-t-lg text-white">
          <button 
            className="flex items-center gap-1 px-2 py-1 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Menu size={14} />
            <span className="text-xs font-medium">Menu</span>
          </button>
          <div className="text-xs font-medium">HelixHub Discussion</div>
        </div>
        
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-center gap-2 rounded-t-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id 
                ? "bg-white text-purple-800 border-b-0 shadow-inner" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-40" 
              onClick={() => setShowSidebar(false)}
            />
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold">HelixHub</h3>
                <button 
                  onClick={() => setShowSidebar(false)}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-4">
                <DiscussionSidebar onClose={() => setShowSidebar(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content window */}
      <motion.div 
        className="bg-white dark:bg-gray-800 p-1 rounded-b-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="min-h-[60vh] overflow-y-auto p-4">
          <div className="hidden md:block md:float-right md:w-1/4 md:pl-4">
            <DiscussionSidebar />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={tabVariants}
              transition={{ duration: 0.3 }}
              className="md:w-3/4 md:float-left"
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
