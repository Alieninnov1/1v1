import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import WalletConnect from "../wallet/WalletConnect";
import NavLogo from "../navigation/NavLogo";
import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";
import UserMenu from "../navigation/UserMenu";
import { Home, BarChart3, GraduationCap, Factory, Landmark, MessageSquare, BookOpen, Database } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Dashboard", path: "/dashboard", icon: <BarChart3 size={18} /> },
    { name: "Academia", path: "/academia", icon: <GraduationCap size={18} /> },
    { name: "Industry", path: "/industry", icon: <Factory size={18} /> },
    { name: "Government", path: "/government", icon: <Landmark size={18} /> },
    { name: "Discussions", path: "/discussions", icon: <MessageSquare size={18} /> },
    { name: "Knowledge", path: "/knowledge", icon: <BookOpen size={18} /> },
    { name: "Knowledge Base", path: "/knowledge-base", icon: <Database size={18} /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleScroll = () => {
    setScrolled(window.scrollY > 30);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`bg-[#1A1F2C]/95 backdrop-blur-md border-b border-purple-900/30 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg shadow-purple-900/10' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLogo />
          <DesktopNav isActive={isActive} />
          <UserMenu notifications={notifications} onNotifications={handleNotifications} />

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

      <MobileNav isOpen={isMenuOpen} isActive={isActive} />
    </nav>
  );
};

export default Navbar;
