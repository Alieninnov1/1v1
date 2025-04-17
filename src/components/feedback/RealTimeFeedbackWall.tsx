
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedbackForm";
import FeedbackFilter from "./FeedbackFilter";
import { useFeedbackWall } from "./hooks/useFeedbackWall";

const RealTimeFeedbackWall = () => {
  const [newPostVisible, setNewPostVisible] = useState(false);
  const { feedback, filter, setFilter, handleLike, handleNewPost } = useFeedbackWall();

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
          <FeedbackFilter filter={filter} onFilterChange={setFilter} />
          <Button 
            size="sm" 
            className="bg-[#92CD00] hover:bg-[#7DB600]"
            onClick={() => setNewPostVisible(!newPostVisible)}
          >
            + New Feedback
          </Button>
        </div>

        <AnimatePresence>
          {newPostVisible && (
            <FeedbackForm 
              onSubmit={(content) => {
                const success = handleNewPost(content);
                if (success) {
                  setNewPostVisible(false);
                }
                return success;
              }}
              onCancel={() => setNewPostVisible(false)}
            />
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <AnimatePresence>
            {feedback.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
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
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RealTimeFeedbackWall;
