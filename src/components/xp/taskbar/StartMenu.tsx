
import { motion, AnimatePresence } from "framer-motion";
import { Computer, Home, BookOpen, FileText, BarChart3, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "@/utils/analytics";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu = ({ isOpen, onClose }: StartMenuProps) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
    trackEvent('desktopInteraction', { action: 'navigation', destination: path });
  };

  const menuItems = [
    { name: "Dashboard", icon: <BarChart3 size={16} />, path: "/dashboard" },
    { name: "Academy", icon: <BookOpen size={16} />, path: "/academia" },
    { name: "Government", icon: <FileText size={16} />, path: "/government" },
    { name: "Industry", icon: <Computer size={16} />, path: "/industry" },
    { name: "Discussions", icon: <MessageSquare size={16} />, path: "/discussions" },
    { name: "Homepage", icon: <Home size={16} />, path: "/" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="absolute left-0 bottom-[36px] w-56 bg-gradient-to-br from-blue-100 to-blue-50 border border-gray-400 shadow-lg rounded-t-md z-50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="p-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="flex items-center p-2 hover:bg-blue-100 rounded cursor-pointer"
                  whileHover={{ x: 4 }}
                  onClick={() => handleNavigation(item.path)}
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;
