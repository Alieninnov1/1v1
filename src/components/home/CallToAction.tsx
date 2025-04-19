
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-[#1A1F2C] to-helix-purple/10 border-t border-purple-900/20 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-satoshi mb-6">
            Join the Innovation Network
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-400">
            Connect with a growing ecosystem of institutions, industries, and policymakers shaping the future of collaborative innovation.
          </p>
          <div className="inline-block">
            <a 
              href="/dashboard" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
            >
              Explore Platform
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
