
import { motion } from "framer-motion";

const FeaturesHeader = () => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-3">
          POWERFUL CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
          Drive Innovation Through Collaboration
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          HelixHub provides tools and insights to bridge the gap between education, workforce needs, and policy making, 
          creating a dynamic innovation ecosystem powered by real-time data.
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturesHeader;
