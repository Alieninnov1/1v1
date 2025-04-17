
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
      className="xp-desktop-icon flex flex-col items-center cursor-pointer mb-4"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(173, 216, 230, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={style}
    >
      <div className="mb-1">
        {icon}
      </div>
      <span className="text-xs text-white text-shadow px-1 bg-black/30 backdrop-blur-sm rounded max-w-full overflow-hidden text-ellipsis">
        {name}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
