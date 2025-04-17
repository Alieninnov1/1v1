
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  BookOpen, 
  Briefcase, 
  Building2, 
  BarChart3,
  MessageSquare,
  User,
  LogIn,
  Bell,
  Search
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

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
    <nav className={`bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : ''
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
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-helix-purple text-white font-bold">
                H
              </div>
              <span className="ml-2 text-xl font-bold text-helix-purple font-satoshi">HelixHub</span>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link 
                to="/academia" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/academia') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Academia
                {isActive('/academia') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/industry" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/industry') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Industry
                {isActive('/industry') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/government" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/government') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Government
                {isActive('/government') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/dashboard" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/dashboard') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Dashboard
                {isActive('/dashboard') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/discussions" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/discussions') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Discussions
                {isActive('/discussions') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              <Link 
                to="/knowledge" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  isActive('/knowledge') ? 'text-helix-purple' : 'hover:text-helix-purple'
                }`}
              >
                Knowledge
                {isActive('/knowledge') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-helix-purple rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            </div>
          </div>

          {/* User menu (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative"
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
              className="relative"
              onClick={handleNotifications}
            >
              <Bell size={18} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            
            <Button variant="outline" size="sm" className="ml-2">Sign In</Button>
            <Button size="sm" className="bg-helix-purple hover:bg-helix-purple/90">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              className="relative"
              onClick={handleNotifications}
            >
              <Bell size={18} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-helix-purple focus:outline-none"
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

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
          <Link 
            to="/academia" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/academia') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <BookOpen size={18} className="mr-2" />
            Academia
          </Link>
          <Link 
            to="/industry" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/industry') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <Briefcase size={18} className="mr-2" />
            Industry
          </Link>
          <Link 
            to="/government" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/government') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <Building2 size={18} className="mr-2" />
            Government
          </Link>
          <Link 
            to="/dashboard" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/dashboard') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <BarChart3 size={18} className="mr-2" />
            Dashboard
          </Link>
          <Link 
            to="/discussions" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/discussions') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <MessageSquare size={18} className="mr-2" />
            Discussions
          </Link>
          <Link 
            to="/knowledge" 
            className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
              isActive('/knowledge') 
                ? 'bg-helix-purple50 text-helix-purple' 
                : 'hover:bg-helix-purple50 hover:text-helix-purple'
            } transition-all`}
          >
            <BookOpen size={18} className="mr-2" />
            Knowledge
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-between px-5">
              <Button variant="outline" size="sm" className="mr-2 flex items-center">
                <LogIn size={16} className="mr-1" />
                Sign In
              </Button>
              <Button size="sm" className="flex items-center bg-helix-purple hover:bg-helix-purple/90">
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
