
import { Button } from "@/components/ui/button";
import { Cog, Download, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/utils/analytics";

interface DashboardActionsProps {
  isRefreshing: boolean;
  onRefresh: () => void;
}

const DashboardActions = ({ isRefreshing, onRefresh }: DashboardActionsProps) => {
  const { toast } = useToast();

  const handleSettingsClick = () => {
    trackEvent('settingsOpened', { source: 'dashboard' });
    toast({
      title: "Settings",
      description: "Dashboard settings would open here"
    });
  };

  const handleExportClick = () => {
    trackEvent('contentExported', { type: 'dashboardReport' });
    toast({
      title: "Report Downloaded",
      description: "Dashboard report has been saved"
    });
  };

  const handleRefreshClick = () => {
    trackEvent('dashboardRefreshed', {});
    onRefresh();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:space-x-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleSettingsClick}
        className="backdrop-blur-sm bg-black/30 border-purple-500/20 hover:bg-black/40 hover:border-purple-500/30 transition-all"
      >
        <Cog size={16} className="mr-1 text-purple-300" />
        Settings
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleExportClick}
        className="backdrop-blur-sm bg-black/30 border-purple-500/20 hover:bg-black/40 hover:border-purple-500/30 transition-all"
      >
        <Download size={16} className="mr-1 text-purple-300" />
        Export
      </Button>
      <Button 
        size="sm" 
        onClick={handleRefreshClick} 
        disabled={isRefreshing}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-900/20"
      >
        <RefreshCcw size={16} className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
        Refresh
      </Button>
    </div>
  );
};

export default DashboardActions;
