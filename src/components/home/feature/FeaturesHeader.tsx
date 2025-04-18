
import { motion } from "framer-motion";

const FeaturesHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-satoshi mb-6 sm:text-3xl font-bold text-indigo-800">
          Powerful Features to Drive Collaboration
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-slate-950 font-thin">
          HelixHub provides tools and insights to bridge the gap between education, workforce needs, and policy making.
        </p>
      </motion.div>
    </div>
  );
};

export default FeaturesHeader;
