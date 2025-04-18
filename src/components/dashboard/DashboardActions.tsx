
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
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" onClick={handleSettingsClick}>
        <Cog size={16} className="mr-1" />
        Settings
      </Button>
      <Button variant="outline" size="sm" onClick={handleExportClick}>
        <Download size={16} className="mr-1" />
        Export
      </Button>
      <Button size="sm" onClick={handleRefreshClick} disabled={isRefreshing}>
        <RefreshCcw size={16} className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
        Refresh
      </Button>
    </div>
  );
};

export default DashboardActions;
