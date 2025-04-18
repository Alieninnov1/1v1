
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence to the import
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { useSkillTrends } from "@/services/apiDataService";
import { DataScraper } from "@/components/ui/data-scraper";
import { useToast } from "@/hooks/use-toast";
import XPFeedbackModal from "@/components/feedback/XPFeedbackModal";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import InteractiveInsights from "@/components/dashboard/InteractiveInsights";
import LiveDataFeed from "@/components/dashboard/LiveDataFeed";
import OracleOverlay from "@/components/dashboard/OracleOverlay";
import SignalVault from "@/components/dashboard/SignalVault";
import DiscordPortal from "@/components/dashboard/DiscordPortal";
import AmbientAudioControl from "@/components/dashboard/AmbientAudioControl";
import DashboardBackground from "@/components/dashboard/DashboardBackground";
import DashboardActions from "@/components/dashboard/DashboardActions";
import DashboardSkillTrends from "@/components/dashboard/DashboardSkillTrends";
import FeedbackModal from "@/components/dashboard/FeedbackModal";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [showFeedbackWall, setShowFeedbackWall] = useState(false);
  
  const {
    data: skillTrends,
    isLoading,
    refetch
  } = useSkillTrends();
  const { toast } = useToast();
  
  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  // Show feedback modal after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('hasSeenFeedbackModal');
      if (!hasSeenModal) {
        setIsFeedbackModalOpen(true);
        localStorage.setItem('hasSeenFeedbackModal', 'true');
      }
    }, 30000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing dashboard",
      description: "Updating all data sources..."
    });
    await refetch();
    setTimeout(() => {
      setIsRefreshing(false);
      toast({
        title: "Dashboard refreshed",
        description: "All data is now up-to-date"
      });
    }, 1000);
  };

  return (
    <Layout>
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
                  <ArrowLeft size={16} className="mr-1" /> Back to Home
                </a>
              </Button>
              <h1 className="text-2xl font-bold">HelixHub Dashboard</h1>
              <p className="text-slate-50">
                Real-time insights connecting academia, industry, and policy
              </p>
            </motion.div>
            
            <DashboardActions isRefreshing={isRefreshing} onRefresh={handleRefresh} />
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
              onClick={() => setShowFeedbackWall(!showFeedbackWall)}
              aria-label="Toggle feedback wall"
            >
              <MessageSquare size={20} className="text-purple-300" />
            </Button>
          </motion.div>
        </div>

        {/* XP Feedback Modal */}
        <XPFeedbackModal
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
        />
        
        {/* Feedback Wall Overlay */}
        <FeedbackModal 
          showFeedbackWall={showFeedbackWall}
          setShowFeedbackWall={setShowFeedbackWall}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
