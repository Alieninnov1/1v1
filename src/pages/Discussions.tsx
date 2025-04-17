
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import DiscussionHeader from "./discussions/DiscussionHeader";
import DiscussionTabs from "./discussions/DiscussionTabs";

const Discussions = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <Layout>
      <motion.div 
        className="container mx-auto px-2 sm:px-4 py-4 sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <DiscussionHeader />
        </motion.div>
        
        <motion.div 
          className="mb-8 eth-card p-1 rounded-lg overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className="xp-title-bar bg-gradient-to-r from-blue-800 to-blue-600 flex justify-between items-center p-1 px-2">
            <div className="flex items-center">
              <span className="hidden sm:inline text-white text-xs">HelixHub Discussion Explorer</span>
              <span className="sm:hidden text-white text-xs">Discussions</span>
            </div>
            <div className="flex gap-1">
              <button className="xp-window-button xp-minimize bg-blue-700 hover:bg-blue-600 h-4 w-4 text-center flex items-center justify-center">
                <span className="text-[8px]">_</span>
              </button>
              <button className="xp-window-button xp-maximize bg-blue-700 hover:bg-blue-600 h-4 w-4 text-center flex items-center justify-center">
                <span className="text-[8px]">□</span>
              </button>
              <button className="xp-window-button xp-close bg-red-500 hover:bg-red-600 h-4 w-4 text-center flex items-center justify-center">
                <span className="text-[8px]">✕</span>
              </button>
            </div>
          </div>
          <DiscussionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Discussions;
