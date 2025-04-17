
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Building2, BarChart3, MessageSquare, LogIn, User } from "lucide-react";
import MobileNavLink from "./MobileNavLink";

interface MobileNavProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
}

const MobileNav = ({ isOpen, isActive }: MobileNavProps) => (
  <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#1A1F2C]/95 backdrop-blur-md`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
      <MobileNavLink to="/academia" icon={BookOpen} isActive={isActive('/academia')}>
        Academia
      </MobileNavLink>
      <MobileNavLink to="/industry" icon={Briefcase} isActive={isActive('/industry')}>
        Industry
      </MobileNavLink>
      <MobileNavLink to="/government" icon={Building2} isActive={isActive('/government')}>
        Government
      </MobileNavLink>
      <MobileNavLink to="/dashboard" icon={BarChart3} isActive={isActive('/dashboard')}>
        Dashboard
      </MobileNavLink>
      <MobileNavLink to="/discussions" icon={MessageSquare} isActive={isActive('/discussions')}>
        Discussions
      </MobileNavLink>
      <MobileNavLink to="/knowledge" icon={BookOpen} isActive={isActive('/knowledge')}>
        Knowledge
      </MobileNavLink>
      
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
);

export default MobileNav;
