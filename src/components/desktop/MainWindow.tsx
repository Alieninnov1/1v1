
import { motion } from "framer-motion";
import WindowTitleBar from "./window/WindowTitleBar";
import WindowContent from "./window/WindowContent";

const MainWindow = () => {
  return (
    <motion.div 
      variants={{ 
        hidden: { opacity: 0, y: 20 }, 
        visible: { opacity: 1, y: 0 } 
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      className="xp-window max-w-7xl mx-auto mb-8 glass-card shadow-xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <WindowTitleBar />
      <WindowContent />
    </motion.div>
  );
};

export default MainWindow;
