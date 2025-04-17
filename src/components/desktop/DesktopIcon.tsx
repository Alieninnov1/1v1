
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface DesktopIconProps {
  name: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

const DesktopIcon = ({ name, icon: Icon, color, onClick }: DesktopIconProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="xp-icon"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(173, 216, 230, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Icon className={`h-10 w-10 text-${color}-700`} />
      <span className="text-xs font-bold text-black bg-white/60 px-1 rounded">
        {name}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
