
import { useEffect } from "react";
import { motion } from "framer-motion";

interface BootScreenProps {
  showStartup: boolean;
  bootProgress: number;
  setBootProgress: React.Dispatch<React.SetStateAction<number>>;
  setShowStartup: React.Dispatch<React.SetStateAction<boolean>>;
}

const BootScreen = ({ showStartup, bootProgress, setBootProgress, setShowStartup }: BootScreenProps) => {
  useEffect(() => {
    if (showStartup) {
      const interval = setInterval(() => {
        setBootProgress((prev) => {
          const newProgress = prev + Math.random() * 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setShowStartup(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [showStartup, setShowStartup, setBootProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col items-center justify-center text-white z-50">
      <motion.img
        src="/logo.png"
        alt="VisionNet Logo"
        className="w-32 h-32 mb-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75 }}
      />
      <motion.div
        className="w-64 bg-gray-700 rounded-full h-2.5 dark:bg-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${bootProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${bootProgress}%` }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
      <motion.span
        className="mt-2 text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
      >
        Loading... {Math.round(bootProgress)}%
      </motion.span>
    </div>
  );
};

export default BootScreen;
