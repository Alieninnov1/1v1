
import { motion } from "framer-motion";
import ThreeDModel from "@/components/dashboard/ThreeDModel";

const TripleHelixSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 z-0" />
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "linear-gradient(45deg, #5E2CA5 1px, transparent 1px), linear-gradient(-45deg, #5E2CA5 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute top-0 left-0 w-full h-2 bg-purple-500" />
      <div className="absolute bottom-0 right-0 w-full h-2 bg-indigo-500" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-8 brutal-text text-white uppercase tracking-tight">
            <span className="inline-block transform rotate-1 text-purple-300">Triple</span>
            <span className="inline-block transform -rotate-1 ml-2 text-indigo-300">Helix</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              3D Interactive Model
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto border-l-4 border-purple-500 pl-4 text-left">
            Visualize how academia, industry, and government interconnect. 
            Rotate, zoom, and explore the dynamic relationships between sectors 
            in our interactive 3D environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="brutal-border bg-gray-900/70"
        >
          <ThreeDModel />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <div className="brutal-3d-card w-full sm:w-auto">
            <h3 className="text-lg font-bold text-purple-300">Academia</h3>
            <p className="text-sm text-gray-400">Educational institutions driving research</p>
          </div>
          <div className="brutal-3d-card w-full sm:w-auto">
            <h3 className="text-lg font-bold text-indigo-300">Industry</h3>
            <p className="text-sm text-gray-400">Business entities applying innovation</p>
          </div>
          <div className="brutal-3d-card w-full sm:w-auto">
            <h3 className="text-lg font-bold text-blue-300">Government</h3>
            <p className="text-sm text-gray-400">Policy frameworks enabling progress</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TripleHelixSection;
