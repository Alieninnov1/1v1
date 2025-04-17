
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface DesktopIconProps {
  name: string;
  icon: ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}

const DesktopIcon = ({ name, icon, onClick, style }: DesktopIconProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="xp-desktop-icon flex flex-col items-center cursor-pointer mb-4 px-1 py-2 rounded hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={style}
    >
      <div className="mb-1 p-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full backdrop-blur-sm">
        {icon}
      </div>
      <span className="text-xs font-medium text-white text-center px-1 py-0.5 bg-black/40 backdrop-blur-sm rounded max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
