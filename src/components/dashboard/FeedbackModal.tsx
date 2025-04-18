
import { motion, AnimatePresence } from "framer-motion";
import RealTimeFeedbackWall from "../feedback/RealTimeFeedbackWall";

interface FeedbackModalProps {
  showFeedbackWall: boolean;
  setShowFeedbackWall: (show: boolean) => void;
}

const FeedbackModal = ({ showFeedbackWall, setShowFeedbackWall }: FeedbackModalProps) => {
  return (
    <AnimatePresence>
      {showFeedbackWall && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => e.target === e.currentTarget && setShowFeedbackWall(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="w-full max-w-3xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <RealTimeFeedbackWall />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackModal;
