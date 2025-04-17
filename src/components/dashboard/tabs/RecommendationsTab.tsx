
import { motion } from "framer-motion";
import AIRecommendations from "@/components/ai/AIRecommendations";

const RecommendationsTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <AIRecommendations />
      </motion.div>
    </motion.div>
  );
};

export default RecommendationsTab;
