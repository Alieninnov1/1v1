
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const StartMenu = ({ isOpen }: StartMenuProps) => {
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

  return (
    <motion.div 
      className="xp-start-menu" 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={startMenuVariants}
    >
      <div className="xp-start-header flex items-center">
        <div className="bg-white/20 rounded-full h-10 w-10 mr-2 flex items-center justify-center text-xl font-bold text-white">
          H
        </div>
        <div className="font-semibold">HelixHub User</div>
      </div>
      <div className="bg-white p-1">
        <StartMenuContent />
      </div>
    </motion.div>
  );
};

const StartMenuContent = () => {
  const { toast } = useToast();
  
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <StartMenuMainSection toast={toast} />
        <StartMenuPlaces />
      </div>
      <div className="border-t border-gray-300 mt-1"></div>
      <StartMenuFooter toast={toast} />
    </>
  );
};

const StartMenuMainSection = ({ toast }: { toast: any }) => (
  <div className="w-full sm:w-48 space-y-1 p-2 bg-indigo-900">
    <StartMenuItem
      icon="e"
      label="Internet"
      bgColor="bg-blue-500"
      onClick={() => toast({
        title: "Internet",
        description: "Opening Internet Explorer"
      })}
    />
    <StartMenuItem
      icon="@"
      label="E-mail"
      bgColor="bg-blue-400"
      onClick={() => toast({
        title: "Email",
        description: "Opening Outlook Express"
      })}
    />
    <div className="border-t border-gray-300 my-1"></div>
    <StartMenuItem
      icon="D"
      label="Dashboard"
      bgColor="bg-green-500"
      href="/dashboard"
    />
    <StartMenuItem
      icon="K"
      label="Knowledge Base"
      bgColor="bg-purple-500"
      href="/knowledge"
    />
  </div>
);

const StartMenuPlaces = () => (
  <div className="w-full sm:w-32 p-2 space-y-1 bg-indigo-900">
    <div className="text-sm font-bold text-blue-800 bg-slate-50">My Places</div>
    <PlaceLink href="/academia" label="Academia" />
    <PlaceLink href="/industry" label="Industry" />
    <PlaceLink href="/government" label="Government" />
    <PlaceLink href="/discussions" label="Discussions" />
  </div>
);

const StartMenuFooter = ({ toast }: { toast: any }) => (
  <div className="flex justify-between p-1 bg-indigo-950">
    <StartMenuItem
      label="Log Off"
      onClick={() => toast({
        title: "Log Off",
        description: "Logging off..."
      })}
    />
    <StartMenuItem
      label="Shut Down"
      onClick={() => toast({
        title: "Shut Down",
        description: "Shutting down..."
      })}
    />
  </div>
);

interface StartMenuItemProps {
  icon?: string;
  label: string;
  bgColor?: string;
  onClick?: () => void;
  href?: string;
}

const StartMenuItem = ({ icon, label, bgColor, onClick, href }: StartMenuItemProps) => {
  const content = (
    <div className="xp-start-item flex items-center p-1.5 cursor-pointer rounded-sm transition-colors hover:bg-blue-100">
      {icon && (
        <div className={`${bgColor || ''} w-7 h-7 rounded flex items-center justify-center text-white mr-2`}>
          <span className="text-xs">{icon}</span>
        </div>
      )}
      <span className="text-sm">{label}</span>
    </div>
  );

  if (href) {
    return <Link to={href} onClick={onClick}>{content}</Link>;
  }

  return <div onClick={onClick}>{content}</div>;
};

const PlaceLink = ({ href, label }: { href: string; label: string }) => (
  <Link 
    to={href} 
    className="xp-start-item flex items-center p-1.5 hover:bg-blue-200 cursor-pointer text-sm rounded-sm transition-colors"
  >
    <span>{label}</span>
  </Link>
);

export default StartMenu;
