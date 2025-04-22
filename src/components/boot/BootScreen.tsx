
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export interface BootScreenProps {
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
    <AnimatePresence>
      {showStartup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-b from-[#151823] to-[#262d4a] flex flex-col items-center justify-center text-white z-50"
        >
          <div className="relative w-full max-w-md aspect-square mb-8">
            {/* Background starfield effect with subtle animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-blue-900/10 to-transparent"></div>
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.1,
                    animation: `twinkle ${Math.random() * 4 + 2}s linear infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Logo container with glow effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <img
                src="/lovable-uploads/261b8a7f-e6a4-4b35-b826-2641f23da6d7.png"
                alt="HelixHub Logo"
                className="w-[85%] h-[85%] object-contain drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]"
              />
            </motion.div>
          </div>

          {/* Progress bar with improved visuals */}
          <motion.div
            initial={{ width: "80%", opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-72 relative"
          >
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600 rounded-full"
                style={{ width: `${bootProgress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${bootProgress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <span className="text-sm font-medium text-purple-200 flex items-center justify-center gap-2">
                {bootProgress < 100 ? (
                  <>
                    <Loader2 className="animate-spin" size={16} />
                    <span className="font-inter tracking-wide">Initializing HelixHub... {Math.round(bootProgress)}%</span>
                  </>
                ) : (
                  <span className="font-inter font-medium tracking-wide">Ready to launch</span>
                )}
              </span>
            </motion.div>
          </motion.div>
          
          {/* Version information */}
          <div className="absolute bottom-4 text-xs text-gray-400 font-light">
            HelixHub v1.0.0 | Triple Helix Innovation Platform
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
