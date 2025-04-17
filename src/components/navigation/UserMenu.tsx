
import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import WalletConnect from "../wallet/WalletConnect";

interface UserMenuProps {
  notifications: number;
  onNotifications: () => void;
}

const UserMenu = ({ notifications, onNotifications }: UserMenuProps) => (
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
      onClick={onNotifications}
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
);

export default UserMenu;
