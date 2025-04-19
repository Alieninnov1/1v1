
import { motion } from "framer-motion";
import HelixModelDemo from "@/components/3d/HelixModelDemo";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-helix-purple900 py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-purple-200 font-satoshi">
              Synchronizing Innovation Networks
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
              HelixHub creates dynamic ecosystems where education, workforce, and policy collaborate to drive innovation through real-time data and predictive analytics.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-2xl mx-auto">
              <HelixModelDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
