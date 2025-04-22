
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface IntroAnimationProps {
  onSkip: () => void;
}

const IntroAnimation = ({ onSkip }: IntroAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative w-64 h-64 transform-gpu"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 rounded-full blur-2xl"></div>
        <img 
          src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png"
          alt="HelixHub Logo" 
          className="w-full h-full object-contain transform-gpu"
          style={{
            imageRendering: 'high-quality'
          }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 transform-gpu"
      >
        HelixHub
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-2 text-gray-400 max-w-md text-center"
      >
        Uniting academia, industry, and government in real-time
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={onSkip}
        className="mt-12 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-purple-400 text-sm mb-2 group-hover:text-purple-300">Start Here</span>
        <ChevronDown 
          size={24} 
          className="text-purple-400 animate-bounce group-hover:text-purple-300" 
        />
      </motion.button>
    </motion.div>
  );
};

export default IntroAnimation;
