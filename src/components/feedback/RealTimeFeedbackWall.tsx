
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, RefreshCcw, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeedbackCard from "./FeedbackCard";
import XPFeedbackModal from "./XPFeedbackModal";
import FeedbackFilter from "./FeedbackFilter";
import { useFeedbackWall } from "./hooks/useFeedbackWall";
import { useToast } from "@/hooks/use-toast";

const RealTimeFeedbackWall = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { feedback, filter, setFilter, handleLike } = useFeedbackWall();
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (containerRef.current && feedback.length > 0) {
      const firstItem = containerRef.current.querySelector('.feedback-item');
      firstItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [feedback.length]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      toast({
        title: "Refreshed",
        description: "Feed updated with latest feedback",
      });
      setRefreshing(false);
    }, 800);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-purple-500/20 bg-white dark:bg-gray-900 shadow-md">
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-3 text-white flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare size={16} className="mr-2" />
          <span className="font-medium">Live Feedback Wall</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-7 w-7 text-white hover:bg-white/20 hover:text-white"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            title="Filter options"
          >
            <Filter size={14} />
            <span className="sr-only">Filter</span>
          </Button>
          <Button 
            size="icon" 
            variant="ghost"
            className="h-7 w-7 text-white hover:bg-white/20 hover:text-white"
            onClick={handleRefresh}
            disabled={refreshing}
            title="Refresh feed"
          >
            <RefreshCcw size={14} className={refreshing ? "animate-spin" : ""} />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mb-4"
            >
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-sm font-medium mb-2">Filter by stakeholder:</h3>
                <FeedbackFilter filter={filter} onFilterChange={setFilter} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end mb-4">
          <Button 
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
            onClick={() => setModalVisible(true)}
          >
            <Plus size={16} className="mr-1" /> Add Feedback
          </Button>
        </div>

        <XPFeedbackModal 
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
        />

        <div 
          ref={containerRef} 
          className="space-y-4 max-h-[600px] overflow-auto scrollbar-hidden"
        >
          <AnimatePresence>
            {feedback.length > 0 ? (
              feedback.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="feedback-item"
                >
                  <FeedbackCard
                    author={item.author}
                    role={item.role}
                    message={item.message}
                    timestamp={item.timestamp}
                    onLike={() => handleLike(item.id)}
                    likes={item.likes}
                    comments={item.comments}
                    isLiked={item.hasLiked}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10 text-gray-500"
              >
                <MessageSquare className="h-10 w-10 mx-auto mb-2 opacity-20" />
                <p>No feedback available for the selected filter.</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2" 
                  onClick={() => setFilter("all")}
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFeedbackWall;
