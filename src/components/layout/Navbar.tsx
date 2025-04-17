
import { useState } from "react";
import { Link } from "react-router-dom";
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
  LogIn 
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-md bg-helix-purple text-white font-bold">
                H
              </div>
              <span className="ml-2 text-xl font-bold text-helix-purple font-satoshi">HelixHub</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/academia" className="px-3 py-2 rounded-md text-sm font-medium hover:text-helix-purple transition-colors">
                Academia
              </Link>
              <Link to="/industry" className="px-3 py-2 rounded-md text-sm font-medium hover:text-helix-purple transition-colors">
                Industry
              </Link>
              <Link to="/government" className="px-3 py-2 rounded-md text-sm font-medium hover:text-helix-purple transition-colors">
                Government
              </Link>
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:text-helix-purple transition-colors">
                Dashboard
              </Link>
              <Link to="/discussions" className="px-3 py-2 rounded-md text-sm font-medium hover:text-helix-purple transition-colors">
                Discussions
              </Link>
            </div>
          </div>

          {/* User menu (desktop) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="outline" size="sm" className="mr-2">Sign In</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-helix-purple50 hover:text-helix-purple transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <BookOpen size={18} className="mr-2" />
            Academia
          </Link>
          <Link 
            to="/industry" 
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-helix-purple50 hover:text-helix-purple transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <Briefcase size={18} className="mr-2" />
            Industry
          </Link>
          <Link 
            to="/government" 
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-helix-purple50 hover:text-helix-purple transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <Building2 size={18} className="mr-2" />
            Government
          </Link>
          <Link 
            to="/dashboard" 
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-helix-purple50 hover:text-helix-purple transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <BarChart3 size={18} className="mr-2" />
            Dashboard
          </Link>
          <Link 
            to="/discussions" 
            className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-helix-purple50 hover:text-helix-purple transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageSquare size={18} className="mr-2" />
            Discussions
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button variant="outline" size="sm" className="mr-2">
                <LogIn size={16} className="mr-1" />
                Sign In
              </Button>
              <Button size="sm">
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
