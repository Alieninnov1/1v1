
import XPDemoWindow from "@/components/demo/XPDemoWindow";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#151823] to-[#262d4a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Interactive HelixHub Demo</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience our Windows XP-inspired interface that connects academia, industry, and government in a seamless ecosystem.
          </p>
        </motion.div>
        
        <XPDemoWindow />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-[#92CD00] hover:bg-[#7DB600] text-white py-3 px-6 rounded-md flex items-center gap-2 mx-auto">
            <span className="font-bold">Request Full Demo Access</span>
            <ArrowRight size={18} />
          </button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <span className="text-gray-300 text-sm">Live Data Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <span className="text-gray-300 text-sm">AI-Powered Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-400"></div>
              <span className="text-gray-300 text-sm">SignalDAO Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <span className="text-gray-300 text-sm">Smart Contract Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
