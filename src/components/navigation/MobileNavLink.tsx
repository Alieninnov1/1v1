
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MobileNavLinkProps {
  to: string;
  icon: LucideIcon;
  isActive: boolean;
  children: React.ReactNode;
}

const MobileNavLink = ({ to, icon: Icon, isActive, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
      isActive 
        ? 'bg-purple-900/20 text-purple-200' 
        : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
    } transition-all`}
  >
    <Icon size={18} className="mr-2" />
    {children}
  </Link>
);

export default MobileNavLink;
