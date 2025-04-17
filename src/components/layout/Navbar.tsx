import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Search,
  Bell,
  BookOpen, 
  Briefcase, 
  Building2, 
  BarChart3,
  MessageSquare,
  User,
  LogIn,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import WalletConnect from "../wallet/WalletConnect";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: `You have ${notifications} unread notifications.`,
    });
    setNotifications(0);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`bg-[#1A1F2C]/95 backdrop-blur-md border-b border-purple-900/30 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg shadow-purple-900/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 text-white font-bold">
                H
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">HelixHub</span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link 
                to="/academia" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/academia') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Academia
                {isActive('/academia') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/industry" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/industry') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Industry
                {isActive('/industry') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/government" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/government') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Government
                {isActive('/government') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/dashboard') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Dashboard
                {isActive('/dashboard') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/discussions" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/discussions') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Discussions
                {isActive('/discussions') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/knowledge" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/knowledge') ? 'text-purple-200' : 'hover:text-purple-100 text-purple-300'
                }`}
              >
                Knowledge
                {isActive('/knowledge') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            </div>
          </div>

          {/* User menu (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/20"
              onClick={() => toast({
                title: "Search",
                description: "Search functionality would open here",
              })}
            >
              <Search size={18} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/20 relative"
              onClick={handleNotifications}
            >
              <Bell size={18} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>

            <WalletConnect />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <WalletConnect />
            <Button 
              variant="ghost" 
              size="icon"
              className="text-purple-300 hover:text-purple-100 hover:bg-purple-900/20 relative"
              onClick={handleNotifications}
            >
              <Bell size={18} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-purple-100 hover:bg-purple-900/20 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with updated styling */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#1A1F2C]/95 backdrop-blur-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
          <Link 
            to="/academia" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/academia') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <BookOpen size={18} className="mr-2" />
            Academia
          </Link>
          <Link 
            to="/industry" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/industry') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <Briefcase size={18} className="mr-2" />
            Industry
          </Link>
          <Link 
            to="/government" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/government') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <Building2 size={18} className="mr-2" />
            Government
          </Link>
          <Link 
            to="/dashboard" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/dashboard') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <BarChart3 size={18} className="mr-2" />
            Dashboard
          </Link>
          <Link 
            to="/discussions" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/discussions') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <MessageSquare size={18} className="mr-2" />
            Discussions
          </Link>
          <Link 
            to="/knowledge" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/knowledge') 
                ? 'bg-purple-900/20 text-purple-200' 
                : 'hover:bg-purple-900/20 hover:text-purple-100 text-purple-300'
            } transition-all`}
          >
            <BookOpen size={18} className="mr-2" />
            Knowledge
          </Link>
          <div className="pt-4 pb-3 border-t border-purple-900/30">
            <div className="flex items-center justify-between px-5">
              <Button variant="outline" size="sm" className="mr-2 flex items-center bg-purple-900/20 border-purple-700 text-purple-100 hover:bg-purple-800/30 hover:text-purple-50">
                <LogIn size={16} className="mr-1" />
                Sign In
              </Button>
              <Button size="sm" className="flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white">
                <User size={16} className="mr-1" />
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
