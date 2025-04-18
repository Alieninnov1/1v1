
import { motion } from "framer-motion";

const CurriculumHeader = () => {
  return (
    <div className="text-center mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">AI Curriculum Engine</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience how our AI-powered engine analyzes industry needs and recommends curriculum adjustments in real-time.
        </p>
      </motion.div>
    </div>
  );
};

export default CurriculumHeader;

