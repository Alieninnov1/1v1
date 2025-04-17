
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const GovernmentHeader = () => {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0 md:mr-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-24 w-24 rounded-full bg-helix-purple flex items-center justify-center"
            >
              <Building2 className="h-12 w-12" />
            </motion.div>
          </div>
          
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-satoshi"
            >
              Government & Policy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl"
            >
              Empowering evidence-based policy making through real-time data, stakeholder collaboration, 
              and advanced simulation tools for more effective governance.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentHeader;
