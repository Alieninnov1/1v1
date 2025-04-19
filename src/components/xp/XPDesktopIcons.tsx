
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  BookOpen, FileText, BarChart3, Users, 
  MessageSquare, Cpu, Box, Globe, 
  Lightbulb, FileCode, Lock, Database
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface XPDesktopIconProps {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  color?: string;
}

const XPDesktopIcon = ({ name, icon, onClick, color = "blue" }: XPDesktopIconProps) => {
  const iconColors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-500",
    red: "bg-red-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-600",
    yellow: "bg-yellow-500",
  };
  
  const bgColor = iconColors[color as keyof typeof iconColors] || "bg-blue-600";
  
  return (
    <motion.div
      className="xp-desktop-icon"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div 
        className={`w-11 h-11 ${bgColor} rounded-md flex items-center justify-center bg-gradient-to-t from-black/10 to-white/20 shadow-md`}
        whileHover={{ y: -2, boxShadow: "0 6px 12px rgba(0,0,0,0.15)" }}
      >
        {icon}
      </motion.div>
      <span className="xp-desktop-icon-label">{name}</span>
    </motion.div>
  );
};

const XPDesktopIcons = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleNavigate = (path: string) => {
    navigate(path);
    toast({
      title: "Navigating",
      description: `Opening ${path.replace('/', '') || 'Home'}...`
    });
  };
  
  const handleOpenInteractive = (name: string) => {
    toast({
      title: name,
      description: `Opening ${name}...`,
    });
  };
  
  const iconSize = isMobile ? 16 : 20;
  
  const desktopIcons = useMemo(() => [
    {
      name: "Dashboard",
      icon: <BarChart3 size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/dashboard"),
      color: "blue"
    },
    {
      name: "Knowledge Base",
      icon: <BookOpen size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/knowledge"),
      color: "purple"
    },
    {
      name: "Academia",
      icon: <FileText size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/academia"),
      color: "green"
    },
    {
      name: "Industry",
      icon: <Cpu size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/industry"),
      color: "orange"
    },
    {
      name: "Government",
      icon: <FileText size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/government"),
      color: "red"
    },
    {
      name: "Discussions",
      icon: <MessageSquare size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/discussions"),
      color: "yellow"
    },
    {
      name: "SignalDAO",
      icon: <Database size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/dao-governance"),
      color: "indigo"
    },
    {
      name: "Policy Sandbox",
      icon: <FileCode size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/policy-sandbox"),
      color: "teal"
    },
    {
      name: "Token Economics",
      icon: <Lock size={iconSize} className="text-white" />,
      onClick: () => handleNavigate("/token-economics"),
      color: "purple"
    },
    {
      name: "3D Model",
      icon: <Box size={iconSize} className="text-white" />,
      onClick: () => handleOpenInteractive("3D Model Demo"),
      color: "blue"
    },
    {
      name: "Internet",
      icon: <Globe size={iconSize} className="text-white" />,
      onClick: () => window.open("https://lovable.dev", "_blank"),
      color: "indigo"
    },
    {
      name: "My Documents",
      icon: <Users size={iconSize} className="text-white" />,
      onClick: () => handleOpenInteractive("My Documents"),
      color: "green"
    }
  ], [isMobile, navigate]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const desktopLayout = isMobile ? "grid-cols-3 gap-3" : "grid-cols-1 gap-4";

  return (
    <motion.div
      className={`grid ${desktopLayout} p-4`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {desktopIcons.map((icon, index) => (
        <motion.div key={icon.name} variants={itemVariants}>
          <XPDesktopIcon
            name={icon.name}
            icon={icon.icon}
            onClick={icon.onClick}
            color={icon.color}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default XPDesktopIcons;
