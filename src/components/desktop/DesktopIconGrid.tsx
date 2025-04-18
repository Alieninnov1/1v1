
import { motion } from "framer-motion";
import DesktopIcon from "./DesktopIcon";
import { BookOpen, FileText, BarChart3, Users, MessageSquare, Bookmark, Cpu, Box } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DesktopIconGridProps {
  onKnowledgeBaseClick: () => void;
  onFeedbackClick: () => void;
  onDialogOpen: (title: string, content: string) => void;
}

const DesktopIconGrid = ({ onKnowledgeBaseClick, onFeedbackClick, onDialogOpen }: DesktopIconGridProps) => {
  const isMobile = useIsMobile();
  
  const icons = [
    {
      name: "Dashboard",
      icon: <BarChart3 size={isMobile ? 28 : 32} className="text-blue-400" />,
      onClick: () => (window.location.href = "/dashboard"),
      position: { x: 0, y: 0 }
    },
    {
      name: "Knowledge Base",
      icon: <BookOpen size={isMobile ? 28 : 32} className="text-purple-400" />,
      onClick: onKnowledgeBaseClick,
      position: { x: 0, y: 1 }
    },
    {
      name: "Academia",
      icon: <Bookmark size={isMobile ? 28 : 32} className="text-green-400" />,
      onClick: () => (window.location.href = "/academia"),
      position: { x: 0, y: 2 }
    },
    {
      name: "Industry",
      icon: <Cpu size={isMobile ? 28 : 32} className="text-orange-400" />,
      onClick: () => (window.location.href = "/industry"),
      position: { x: 0, y: 3 }
    },
    {
      name: "Government",
      icon: <FileText size={isMobile ? 28 : 32} className="text-red-400" />,
      onClick: () => (window.location.href = "/government"),
      position: { x: 0, y: 4 }
    },
    {
      name: "Discussions",
      icon: <MessageSquare size={isMobile ? 28 : 32} className="text-yellow-400" />,
      onClick: () => (window.location.href = "/discussions"),
      position: { x: 0, y: 5 }
    },
    {
      name: "Feedback",
      icon: <Users size={isMobile ? 28 : 32} className="text-teal-400" />,
      onClick: onFeedbackClick,
      position: { x: 0, y: 6 }
    },
    {
      name: "3D Demo",
      icon: <Box size={isMobile ? 28 : 32} className="text-indigo-400" />,
      onClick: () => onDialogOpen("3D Interactive Demo", "This is an advanced 3D demo of the HelixHub Triple Helix Model."),
      position: { x: 0, y: 7 }
    }
  ];
  
  // Transition settings for staggered animations
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } }
  };

  // Responsive grid layout
  const gridLayout = isMobile 
    ? "grid-cols-2 gap-2 pt-16" 
    : "grid-cols-1 gap-4";

  return (
    <motion.div 
      className={`grid ${gridLayout} absolute top-4 left-4 z-10`}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ 
        filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))',
        maxWidth: isMobile ? '160px' : '100px'
      }}
    >
      {icons.map((icon, index) => (
        <motion.div 
          key={icon.name} 
          variants={item} 
          className="mobile-tap-highlight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DesktopIcon
            name={icon.name}
            icon={icon.icon}
            onClick={icon.onClick}
            style={isMobile ? {} : {
              marginLeft: icon.position.x * (isMobile ? 0 : 80),
              marginTop: icon.position.y * (isMobile ? 0 : 8)
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesktopIconGrid;
