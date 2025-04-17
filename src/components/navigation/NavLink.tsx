
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, isActive, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
      isActive ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
    }`}
  >
    {children}
    {isActive && (
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
        layoutId="navbar-indicator"
      />
    )}
  </Link>
);

export default NavLink;
