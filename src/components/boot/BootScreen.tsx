
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Computer } from "lucide-react";

interface BootScreenProps {
  showStartup: boolean;
  bootProgress: number;
  setBootProgress: (value: number) => void;
  setShowStartup: (value: boolean) => void;
}

const BootScreen = ({ showStartup, bootProgress, setBootProgress, setShowStartup }: BootScreenProps) => {
  useEffect(() => {
    if (showStartup) {
      const interval = setInterval(() => {
        setBootProgress((prev: number) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowStartup(false), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [showStartup, setBootProgress, setShowStartup]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="space-y-8 w-full max-w-md px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl font-bold mb-2">HelixHub XP</h1>
            <p className="text-blue-300">Education Innovation Platform</p>
          </motion.div>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div
            className="bg-blue-500 h-2.5 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${bootProgress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <p className="text-gray-400 text-center text-sm">
          {bootProgress < 30 && "Initializing education modules..."}
          {bootProgress >= 30 && bootProgress < 60 && "Loading skill gap analysis tools..."}
          {bootProgress >= 60 && bootProgress < 90 && "Preparing policy integration framework..."}
          {bootProgress >= 90 && "Starting HelixHub XP..."}
        </p>
      </div>
    </div>
  );
};

export default BootScreen;

