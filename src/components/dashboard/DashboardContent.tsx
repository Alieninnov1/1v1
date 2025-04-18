import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSkillTrends } from "@/services/apiDataService";
import DashboardHeader from "./DashboardHeader";
import DashboardTabs from "./DashboardTabs";
import DashboardMetrics from "./DashboardMetrics";
import InteractiveInsights from "./InteractiveInsights";
import LiveDataFeed from "./LiveDataFeed";
import OracleOverlay from "./OracleOverlay";
import SignalVault from "./SignalVault";
import DiscordPortal from "./DiscordPortal";
import AmbientAudioControl from "./AmbientAudioControl";
import DashboardBackground from "./DashboardBackground";
import DashboardActions from "./DashboardActions";
import DashboardSkillTrends from "./DashboardSkillTrends";
import { DataScraper } from "@/components/ui/data-scraper";

interface DashboardContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isRefreshing: boolean;
  onRefresh: () => void;
  onToggleFeedback: () => void;
  showFeedbackWall: boolean;
}

const DashboardContent = ({
  activeTab,
  setActiveTab,
  isRefreshing,
  onRefresh,
  onToggleFeedback,
  showFeedbackWall
}: DashboardContentProps) => {
  const {
    data: skillTrends,
    isLoading
  } = useSkillTrends();

  return (
    <div className="relative min-h-screen">
      <DashboardBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="md:flex md:justify-between md:items-center mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 md:mb-0"
          >
            <Button variant="ghost" size="sm" className="mb-2" asChild>
              <a href="/">
                <span className="mr-1">←</span> Back to Home
              </a>
            </Button>
            <h1 className="text-2xl font-bold">HelixHub Dashboard</h1>
            <p className="text-slate-50">
              Real-time insights connecting academia, industry, and policy
            </p>
          </motion.div>
          
          <DashboardActions isRefreshing={isRefreshing} onRefresh={onRefresh} />
        </div>

        <OracleOverlay />

        <DashboardHeader 
          title="Innovation Ecosystem Dashboard" 
          description="Monitor skill gaps, policy impact, and curriculum alignment in real-time" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="md:col-span-1">
            <LiveDataFeed />
          </div>
        </div>

        <DashboardMetrics />

        <div className="mt-10">
          <DashboardSkillTrends skillTrends={skillTrends} isLoading={isLoading} />
        </div>
        
        <div className="mt-8 mb-8">
          <InteractiveInsights />
        </div>

        <SignalVault />
        
        <div className="my-10">
          <DataScraper />
        </div>

        <DiscordPortal />
        <AmbientAudioControl />

        {/* Feedback Toggle Button */}
        <motion.div
          className="fixed bottom-8 right-24 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-black/70"
            onClick={onToggleFeedback}
            aria-label="Toggle feedback wall"
          >
            <MessageSquare size={20} className="text-purple-300" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardContent;
