
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataScraper } from "@/components/ui/data-scraper";
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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:flex md:justify-between md:items-center mb-6"
        >
          <div className="mb-4 md:mb-0">
            <Button 
              variant="ghost" 
              size="sm" 
              className="mb-2 hover:bg-purple-900/20 brutal-text" 
              asChild
            >
              <a href="/">
                <span className="mr-1">←</span> Back to Home
              </a>
            </Button>
            <h1 className="text-2xl sm:text-3xl font-black brutal-text tracking-tight text-white transform -rotate-1">
              HELIX<span className="text-purple-400">HUB</span> DASHBOARD
            </h1>
            <p className="text-slate-50 border-l-4 border-purple-500 pl-2 mt-2">
              Real-time insights connecting academia, industry, and policy
            </p>
          </div>
          
          <DashboardActions isRefreshing={isRefreshing} onRefresh={onRefresh} />
        </motion.div>

        <OracleOverlay />

        <DashboardHeader 
          title="Innovation Ecosystem Dashboard" 
          description="Monitor skill gaps, policy impact, and curriculum alignment in real-time" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="md:col-span-2 brutal-3d-card element-3d">
            <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="md:col-span-1 brutal-border transform rotate-1">
            <LiveDataFeed />
          </div>
        </div>

        <DashboardMetrics />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <DashboardSkillTrends skillTrends={skillTrends} isLoading={isLoading} />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 mb-8"
        >
          <InteractiveInsights />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SignalVault />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="my-10"
        >
          <div className="brutal-border transform rotate-1">
            <DataScraper />
          </div>
        </motion.div>

        <DiscordPortal />
        <AmbientAudioControl />

        {/* Feedback Toggle Button */}
        <motion.div
          className="fixed bottom-8 right-8 sm:right-24 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="rounded-none bg-black border-2 border-purple-500 hover:bg-black/80 hover:border-purple-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
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
