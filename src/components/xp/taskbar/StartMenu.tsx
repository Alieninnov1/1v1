
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Building2, Layers, MessageSquare, User, Settings, LogOut, Home } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu = ({ isOpen, onClose }: StartMenuProps) => {
  const { toast } = useToast();

  const startMenuVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const handleItemClick = (name: string) => {
    trackEvent('buttonClick', { button: 'startMenuItem', item: name });
    onClose();
  };

  return (
    <motion.div 
      className="xp-start-menu" 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={startMenuVariants}
    >
      <div className="xp-start-header flex items-center">
        <div className="bg-helix-purple rounded-md h-10 w-10 mr-2 flex items-center justify-center text-xl font-bold text-white">
          H
        </div>
        <div className="font-semibold">HelixHub User</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="col-span-3 p-2 space-y-1">
          <StartMenuItem
            icon={<BarChart3 size={18} />}
            label="Dashboard"
            bgColor="bg-blue-600"
            href="/dashboard"
            onClick={() => handleItemClick('Dashboard')}
          />
          <StartMenuItem
            icon={<Layers size={18} />}
            label="Knowledge Base"
            bgColor="bg-purple-600"
            href="/knowledge"
            onClick={() => handleItemClick('Knowledge')}
          />
          <div className="border-t border-gray-700 my-1"></div>
          <StartMenuItem
            icon={<BookOpen size={18} />}
            label="Academia"
            bgColor="bg-green-600"
            href="/academia"
            onClick={() => handleItemClick('Academia')}
          />
          <StartMenuItem
            icon={<Home size={18} />}
            label="Government"
            bgColor="bg-amber-600"
            href="/government"
            onClick={() => handleItemClick('Government')}
          />
          <StartMenuItem
            icon={<MessageSquare size={18} />}
            label="Discussions"
            bgColor="bg-rose-600"
            href="/discussions"
            onClick={() => handleItemClick('Discussions')}
          />
        </div>

        <div className="col-span-2 bg-black/30 p-2">
          <div className="text-xs font-semibold text-gray-400 mb-1 uppercase">Quick Access</div>
          <SideMenuItem 
            icon={<User size={16} />}
            label="Profile" 
            onClick={() => {
              toast({ title: "Profile", description: "Opening profile settings" });
              handleItemClick('Profile');
            }} 
          />
          <SideMenuItem 
            icon={<Settings size={16} />}
            label="Settings" 
            onClick={() => {
              toast({ title: "Settings", description: "Opening app settings" });
              handleItemClick('Settings');
            }} 
          />
          <div className="border-t border-gray-700 my-1"></div>
          <SideMenuItem 
            icon={<LogOut size={16} />}
            label="Log Off" 
            onClick={() => {
              toast({ title: "Log Off", description: "Logging off..." });
              handleItemClick('LogOff');
            }} 
          />
        </div>
      </div>

      <footer className="p-2 text-xs text-gray-500 flex justify-between border-t border-gray-800">
        <div>&copy; 2025 HelixHub</div>
        <div>v1.0.0</div>
      </footer>
    </motion.div>
  );
};

interface StartMenuItemProps {
  icon: React.ReactNode;
  label: string;
  bgColor?: string;
  onClick?: () => void;
  href?: string;
}

const StartMenuItem = ({ icon, label, bgColor = "bg-gray-700", onClick, href }: StartMenuItemProps) => {
  const content = (
    <div className="xp-start-item flex items-center p-2 cursor-pointer rounded-sm transition-all hover:translate-x-1">
      <div className={`${bgColor} w-8 h-8 rounded flex items-center justify-center text-white mr-3`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );

  if (href) {
    return <Link to={href} onClick={onClick}>{content}</Link>;
  }

  return <div onClick={onClick}>{content}</div>;
};

const SideMenuItem = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="xp-start-item flex items-center p-1.5 hover:bg-helix-purple/30 cursor-pointer text-sm rounded-sm transition-colors group"
  >
    <div className="mr-2 text-gray-400 group-hover:text-white">{icon}</div>
    <span>{label}</span>
  </div>
);

export default StartMenu;
