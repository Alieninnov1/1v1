
import { Button } from "@/components/ui/button";
import { Cog, Download, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardActionsProps {
  isRefreshing: boolean;
  onRefresh: () => void;
}

const DashboardActions = ({ isRefreshing, onRefresh }: DashboardActionsProps) => {
  const { toast } = useToast();

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" onClick={() => toast({
        title: "Settings",
        description: "Dashboard settings would open here"
      })}>
        <Cog size={16} className="mr-1" />
        Settings
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast({
        title: "Report Downloaded",
        description: "Dashboard report has been saved"
      })}>
        <Download size={16} className="mr-1" />
        Export
      </Button>
      <Button size="sm" onClick={onRefresh} disabled={isRefreshing}>
        <RefreshCcw size={16} className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
        Refresh
      </Button>
    </div>
  );
};

export default DashboardActions;
