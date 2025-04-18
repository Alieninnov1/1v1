
import { motion } from "framer-motion";

const TechStackHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          HelixHub is built with modern technologies to ensure scalability, performance, and an exceptional user experience.
        </p>
      </motion.div>
    </div>
  );
};

export default TechStackHeader;
