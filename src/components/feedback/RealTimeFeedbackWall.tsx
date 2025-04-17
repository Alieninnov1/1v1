import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeedbackCard from "./FeedbackCard";
import XPFeedbackModal from "./XPFeedbackModal";
import FeedbackFilter from "./FeedbackFilter";
import { useFeedbackWall } from "./hooks/useFeedbackWall";
import { toast } from "@/hooks/use-toast";

const RealTimeFeedbackWall = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { feedback, filter, setFilter, handleLike } = useFeedbackWall();
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="xp-window w-full">
      <div className="xp-title-bar">
        <div className="flex items-center">
          <MessageSquare size={14} />
          <span className="ml-2">Live Feedback Wall</span>
        </div>
      </div>
      <div className="xp-window-content p-4">
        <div className="mb-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <FeedbackFilter filter={filter} onFilterChange={setFilter} />
            <Button 
              size="icon" 
              variant="outline" 
              className="h-8 w-8"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCcw size={16} className={refreshing ? "animate-spin" : ""} />
              <span className="sr-only">Refresh</span>
            </Button>
          </div>
          <Button 
            size="sm"
            className="bg-[#92CD00] hover:bg-[#7DB600] text-white"
            onClick={() => setModalVisible(true)}
          >
            + New Feedback
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
                No feedback available for the selected filter.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFeedbackWall;
